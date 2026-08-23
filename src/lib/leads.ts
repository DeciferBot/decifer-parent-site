import "server-only";
import { createHash } from "node:crypto";
import { put } from "@vercel/blob";

/**
 * Lead persistence. Two stores, tried in order:
 *
 *   1. Vercel Blob: one JSON file per lead at leads/<kind>/<date>/<id>.json.
 *      Needs BLOB_READ_WRITE_TOKEN, which Vercel sets when a Blob store is
 *      connected to the project. Private access; read with `vercel blob list`
 *      or the dashboard. This is the default.
 *   2. Supabase (optional): the public.leads table in supabase/leads.sql.
 *      Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. Raw fetch, no SDK.
 *
 * Never throws: persistence is best effort and every route still logs the
 * submission to the function logs as the final fallback.
 *
 * LEAD_IP_SALT salts the IP hash. Raw IPs are never stored.
 */

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const SUPABASE_URL = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
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

export function isBlobConfigured(): boolean {
  return Boolean(BLOB_TOKEN);
}
export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SERVICE_KEY);
}
export function isLeadStoreConfigured(): boolean {
  return isBlobConfigured() || isSupabaseConfigured();
}

export interface SaveResult {
  ok: boolean;
  store?: "blob" | "supabase";
  reason?: string;
}

/** Write one JSON file per lead to Vercel Blob. */
async function saveLeadBlob(row: LeadRow): Promise<SaveResult> {
  const now = new Date();
  const day = now.toISOString().slice(0, 10);
  const id = `${now.toISOString().replace(/[:.]/g, "-")}-${createHash("sha1")
    .update(row.email + now.getTime())
    .digest("hex")
    .slice(0, 8)}`;
  const pathname = `leads/${row.kind}/${day}/${id}.json`;
  try {
    await put(pathname, JSON.stringify({ id, created_at: now.toISOString(), status: "new", ...row }, null, 2), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      token: BLOB_TOKEN,
    });
    return { ok: true, store: "blob" };
  } catch (err) {
    console.error("[DECIFER Leads] blob put failed:", err);
    return { ok: false, reason: "blob_failed" };
  }
}

function supabaseHeaders(): Record<string, string> {
  return {
    apikey: SERVICE_KEY!,
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
}

async function saveLeadSupabase(row: LeadRow): Promise<SaveResult> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: { ...supabaseHeaders(), Prefer: "return=minimal" },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[DECIFER Leads] supabase insert failed:", res.status, await res.text());
      return { ok: false, reason: "insert_failed" };
    }
    return { ok: true, store: "supabase" };
  } catch (err) {
    console.error("[DECIFER Leads] supabase insert exception:", err);
    return { ok: false, reason: "exception" };
  }
}

export async function insertLead(row: LeadRow): Promise<SaveResult> {
  if (isBlobConfigured()) return saveLeadBlob(row);
  if (isSupabaseConfigured()) return saveLeadSupabase(row);
  console.warn("[DECIFER Leads] no lead store configured, logging only.");
  return { ok: false, reason: "not_configured" };
}

/** Submissions from this IP hash in the last hour (Supabase only; Blob uses the memory limiter). */
export async function recentSubmissionCount(ipHash: string): Promise<number> {
  if (!isSupabaseConfigured() || !ipHash) return 0;
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  try {
    const url = new URL(`${SUPABASE_URL}/rest/v1/leads`);
    url.searchParams.set("select", "id");
    url.searchParams.set("ip_hash", `eq.${ipHash}`);
    url.searchParams.set("created_at", `gte.${since}`);
    const res = await fetch(url, {
      headers: { ...supabaseHeaders(), Prefer: "count=exact", "Range-Unit": "items", Range: "0-0" },
      cache: "no-store",
    });
    const total = Number((res.headers.get("content-range") ?? "").split("/")[1] ?? 0);
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

/** Best-effort in-process limiter for when Supabase counting is unavailable. */
const memory = new Map<string, number[]>();
export function memoryRateLimited(key: string, max = 5, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  const hits = (memory.get(key) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  memory.set(key, hits);
  return hits.length > max;
}
