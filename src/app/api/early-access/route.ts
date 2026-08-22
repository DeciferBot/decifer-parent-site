import { NextRequest, NextResponse } from "next/server";
import {
  validInterestValues as VALID_INTERESTS,
  earlyAccessInterests,
} from "@/app/data/products";
import { sendEmail, confirmEarlyAccessToSubmitter } from "@/lib/notify";
import { insertLead, hashIp } from "@/lib/leads";

interface EarlyAccessPayload {
  name: string;
  email: string;
  interest: string;
  message?: string;
  website?: string; // honeypot field
}

export async function POST(req: NextRequest) {
  let body: EarlyAccessPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real users never fill this field
  if (body.website) {
    return NextResponse.json({ ok: true }); // silently accept, discard
  }

  // Validation
  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const interest = body.interest?.trim();
  const message = body.message?.trim() || "";

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required" },
      { status: 400 }
    );
  }
  if (!interest || !VALID_INTERESTS.includes(interest)) {
    return NextResponse.json(
      { error: "A valid interest selection is required" },
      { status: 400 }
    );
  }

  const submission = { name, email, interest, message, timestamp: new Date().toISOString() };

  // Always log to server logs (visible in Vercel Function logs)
  console.log("[DECIFER Early Access]", submission);

  // Send notification email via Resend if configured.
  // Requires RESEND_API_KEY and RESEND_NOTIFY_EMAIL in Vercel env vars.
  const notifyEmail = process.env.RESEND_NOTIFY_EMAIL;
  if (process.env.RESEND_API_KEY && notifyEmail) {
    await sendEmail({
      to: [notifyEmail],
      subject: `Early Access Request: ${name} (${interest})`,
      text: [
        `New early access request received.`,
        ``,
        `Name:      ${name}`,
        `Email:     ${email}`,
        `Interest:  ${interest}`,
        `Message:   ${message || "None"}`,
        `Time:      ${submission.timestamp}`,
      ].join("\n"),
      logTag: "[DECIFER Early Access]",
    });
  } else if (process.env.RESEND_API_KEY && !notifyEmail) {
    console.warn("[DECIFER Early Access] RESEND_API_KEY set but RESEND_NOTIFY_EMAIL is missing — skipping email.");
  }

  // Persist to the shared leads table (best effort; logs above are the fallback).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  await insertLead({
    kind: "early_access",
    name,
    email,
    product_interest: interest,
    problem: message || null,
    referrer: req.headers.get("referer"),
    consent: true,
    consent_text: "Requested early access via the DECIFER website form.",
    ip_hash: hashIp(ip),
    user_agent: req.headers.get("user-agent"),
  });

  // Acknowledge the submitter. Previously they received nothing.
  const interestLabel =
    earlyAccessInterests.find((i) => i.value === interest)?.label ?? interest;
  await confirmEarlyAccessToSubmitter({ name, email, interestLabel });

  return NextResponse.json({ ok: true });
}
