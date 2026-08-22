import "server-only";
import { createHash } from "node:crypto";

/**
 * Lead persistence against Supabase's PostgREST API.
 *
 * Raw fetch, no SDK, matching the house style (zero extra dependencies).
 * Never throws: persistence is best effort and the route still logs every
 * submission to the function logs as the fallback.
 *
 * Env (server only, never NEXT_PUBLIC_ for the service key):
 *   SUPABASE_URL                 project URL (NEXT_PUBLIC_SUPABASE_URL accepted as fallback)
 *   SUPABASE_SERVICE_ROLE_KEY    service role key
 *   LEAD_IP_SALT                 salt for hashing client IPs
 */

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const IP_SALT = process.env.LEAD_IP_SALT;

export type LeadKind = "discovery_call" | "project" | "general" | "early_access";

export interface LeadRow {
  kind: LeadKind;
  name: string;
  email: string;
  company?: string | null;
  based_in?: string | null;
  service_key?: string | null;
  product_interest?: string | null;
  problem?: string | null;
  timeline?: string | null;
  budget_band?: string | null;
  heard_via?: string | null;
  source_path?: string | null;
  referrer?: string | null;
  utm?: Record<string, string> | null;
  consent: boolean;
  consent_text?: string | null;
  ip_hash?: string | null;
  user_agent?: string | null;
}

export function isLeadStoreConfigured(): boolean {
  return Boolean(SUPABASE_URL && SERVICE_KEY);
}

function headers(): Record<string, string> {
  return {
    apikey: SERVICE_KEY!,
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
}

export async function insertLead(
  row: LeadRow
): Promise<{ ok: boolean; reason?: string }> {
  if (!isLeadStoreConfigured()) {
    console.warn("[DECIFER Leads] Supabase not configured, logging only.");
    return { ok: false, reason: "not_configured" };
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: { ...headers(), Prefer: "return=minimal" },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[DECIFER Leads] insert failed:", res.status, await res.text());
      return { ok: false, reason: "insert_failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[DECIFER Leads] insert exception:", err);
    return { ok: false, reason: "exception" };
  }
}

/** Submissions from this IP hash in the last hour. Returns 0 when unconfigured. */
export async function recentSubmissionCount(ipHash: string): Promise<number> {
  if (!isLeadStoreConfigured() || !ipHash) return 0;
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  try {
    const url = new URL(`${SUPABASE_URL}/rest/v1/leads`);
    url.searchParams.set("select", "id");
    url.searchParams.set("ip_hash", `eq.${ipHash}`);
    url.searchParams.set("created_at", `gte.${since}`);
    const res = await fetch(url, {
      headers: { ...headers(), Prefer: "count=exact", "Range-Unit": "items", Range: "0-0" },
      cache: "no-store",
    });
    const range = res.headers.get("content-range") ?? "";
    const total = Number(range.split("/")[1] ?? 0);
    return Number.isFinite(total) ? total : 0;
  } catch {
    return 0;
  }
}

/** Salted SHA-256 of the client IP. Raw IPs are never stored. */
export function hashIp(ip: string | null | undefined): string | null {
  if (!ip) return null;
  if (!IP_SALT) console.warn("[DECIFER Leads] LEAD_IP_SALT not set; using a weak default salt.");
  return createHash("sha256").update(`${IP_SALT ?? "decifer-default-salt"}:${ip}`).digest("hex");
}

/** Best-effort in-process limiter for when Supabase is not configured. */
const memory = new Map<string, number[]>();
export function memoryRateLimited(key: string, max = 5, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  const hits = (memory.get(key) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  memory.set(key, hits);
  return hits.length > max;
}
