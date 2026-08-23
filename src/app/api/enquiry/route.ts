import { NextRequest, NextResponse } from "next/server";
import { validServiceValues, enquiryServiceOptions } from "@/app/data/services";
import {
  insertLead,
  recentSubmissionCount,
  hashIp,
  isSupabaseConfigured,
  memoryRateLimited,
} from "@/lib/leads";
import { notifyInternalEnquiry, confirmEnquiryToSubmitter } from "@/lib/notify";

/**
 * Enquiry endpoint. Same shape as /api/early-access.
 *
 * Bot defence, three layers, because this form has free text and triggers
 * two outbound emails:
 *   1. honeypot field  (silent accept)
 *   2. timing gate     (silent accept under 2.5s)
 *   3. IP rate limit   (429 after 5 in an hour)
 */

const TIMELINES = ["now", "1-3-months", "3-6-months", "exploring"];
const BUDGETS = ["under-25k-aed", "25k-75k-aed", "75k-200k-aed", "200k-plus-aed", "not-sure"];
const BASED_IN = ["AE", "GCC", "SG", "UK", "other"];
const MIN_PROBLEM_CHARS = 40;
const MIN_ELAPSED_MS = 2500;
const MAX_PER_HOUR = 5;

const CONSENT_TEXT =
  "I am happy for DECIFER to contact me about this enquiry. See the Privacy Policy.";

interface EnquiryPayload {
  name?: string;
  email?: string;
  company?: string;
  basedIn?: string;
  problem?: string;
  service?: string;
  timeline?: string;
  budget?: string;
  heardVia?: string;
  consent?: boolean;
  website?: string; // honeypot
  elapsedMs?: number;
  sourcePath?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: EnquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // 1. Honeypot: real users never fill this field
  if (body.website) return NextResponse.json({ ok: true });

  // 2. Timing gate: nobody writes forty characters in under 2.5 seconds
  if (typeof body.elapsedMs === "number" && body.elapsedMs < MIN_ELAPSED_MS) {
    return NextResponse.json({ ok: true });
  }

  // Validation
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const company = body.company?.trim() || null;
  const basedIn = body.basedIn?.trim() ?? "";
  const problem = body.problem?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const timeline = body.timeline?.trim() ?? "";
  const budget = body.budget?.trim() || null;
  const heardVia = body.heardVia?.trim() || null;
  const sourcePath = body.sourcePath?.trim() || null;

  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
  if (!BASED_IN.includes(basedIn))
    return NextResponse.json({ error: "Please tell us where you are based" }, { status: 400 });
  if (problem.length < MIN_PROBLEM_CHARS)
    return NextResponse.json(
      { error: `Please describe what you want to change in at least ${MIN_PROBLEM_CHARS} characters` },
      { status: 400 }
    );
  if (!validServiceValues.includes(service))
    return NextResponse.json({ error: "Please choose the closest service" }, { status: 400 });
  if (!TIMELINES.includes(timeline))
    return NextResponse.json({ error: "Please choose a timeline" }, { status: 400 });
  if (budget && !BUDGETS.includes(budget))
    return NextResponse.json({ error: "Invalid budget selection" }, { status: 400 });
  if (body.consent !== true)
    return NextResponse.json({ error: "Consent is required so we can reply" }, { status: 400 });

  // 3. Rate limit by hashed IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  const ipHash = hashIp(ip);
  const limited = isSupabaseConfigured()
    ? (await recentSubmissionCount(ipHash ?? "")) >= MAX_PER_HOUR
    : memoryRateLimited(ipHash ?? "anon", MAX_PER_HOUR);
  if (limited) {
    return NextResponse.json(
      { error: "Too many submissions. Please email hello@decifer.io instead." },
      { status: 429 }
    );
  }

  const serviceLabel =
    enquiryServiceOptions.find((o) => o.value === service)?.label ?? service;
  const timestamp = new Date().toISOString();

  const submission = {
    name, email, company, basedIn, service, timeline, budget, heardVia, sourcePath, timestamp,
    problem,
  };

  // Always log: this is the fallback when Supabase is unconfigured or down.
  console.log("[DECIFER Enquiry]", submission);

  await insertLead({
    kind: "discovery_call",
    name,
    email,
    company,
    based_in: basedIn,
    service_key: service,
    problem,
    timeline,
    budget_band: budget,
    heard_via: heardVia,
    source_path: sourcePath,
    referrer: req.headers.get("referer"),
    consent: true,
    consent_text: CONSENT_TEXT,
    ip_hash: ipHash,
    user_agent: req.headers.get("user-agent"),
  });

  const notification = {
    name, email, company, basedIn, serviceLabel, problem, timeline,
    budgetBand: budget, heardVia, sourcePath, timestamp,
  };
  // Neither email can fail the request; sendEmail never throws.
  await Promise.all([
    notifyInternalEnquiry(notification),
    confirmEnquiryToSubmitter(notification),
  ]);

  return NextResponse.json({ ok: true });
}
