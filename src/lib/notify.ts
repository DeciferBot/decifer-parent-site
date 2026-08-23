import "server-only";

/**
 * Shared Resend email helper for the API routes.
 *
 * Uses a raw fetch against the Resend REST API rather than the SDK, matching
 * the existing house style (zero extra dependencies). Never throws: email is
 * a side effect and must not fail the request that triggered it.
 *
 * Env:
 *   RESEND_API_KEY       required to send anything
 *   RESEND_FROM          verified sender, defaults to Resend's onboarding address
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_ADDRESS = process.env.RESEND_FROM ?? "Decifer <onboarding@resend.dev>";

export interface SendEmailOptions {
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
  /** Prevents double-sends on client retries. */
  idempotencyKey?: string;
  /** Prefix for log lines, e.g. "[DECIFER Early Access]". */
  logTag?: string;
}

export async function sendEmail(opts: SendEmailOptions): Promise<boolean> {
  const tag = opts.logTag ?? "[DECIFER Email]";
  if (!RESEND_API_KEY) return false;

  try {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    };
    if (opts.idempotencyKey) headers["Idempotency-Key"] = opts.idempotencyKey;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      console.error(`${tag} Resend error:`, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    // Never fail the caller's request because email delivery failed.
    console.error(`${tag} Resend exception:`, err);
    return false;
  }
}

/* ── Lead notifications ───────────────────────────────────── */

const NOTIFY_EMAIL = process.env.RESEND_NOTIFY_EMAIL;
const REPLY_TO = "hello@decifer.io";

/** Labels shown back to the submitter. Keep in sync with EnquiryForm. */
export const TIMELINE_LABELS: Record<string, string> = {
  now: "As soon as possible",
  "1-3-months": "In the next one to three months",
  "3-6-months": "In three to six months",
  exploring: "Just exploring for now",
};

export interface EnquiryNotification {
  name: string;
  email: string;
  company?: string | null;
  basedIn?: string | null;
  serviceLabel: string;
  problem: string;
  timeline?: string | null;
  budgetBand?: string | null;
  heardVia?: string | null;
  sourcePath?: string | null;
  timestamp: string;
}

/** Internal alert to the inbox in RESEND_NOTIFY_EMAIL. */
export async function notifyInternalEnquiry(e: EnquiryNotification): Promise<void> {
  if (!NOTIFY_EMAIL) return;
  await sendEmail({
    to: [NOTIFY_EMAIL],
    replyTo: e.email,
    subject: `Enquiry: ${e.name} (${e.serviceLabel})`,
    text: [
      `New enquiry received.`,
      ``,
      `Name:       ${e.name}`,
      `Email:      ${e.email}`,
      `Company:    ${e.company || "None given"}`,
      `Based in:   ${e.basedIn || "Not given"}`,
      `Service:    ${e.serviceLabel}`,
      `Timeline:   ${e.timeline ? TIMELINE_LABELS[e.timeline] ?? e.timeline : "Not given"}`,
      `Budget:     ${e.budgetBand || "Not given"}`,
      `Heard via:  ${e.heardVia || "Not given"}`,
      `Page:       ${e.sourcePath || "Unknown"}`,
      `Time:       ${e.timestamp}`,
      ``,
      `What they want to change:`,
      e.problem,
    ].join("\n"),
    logTag: "[DECIFER Enquiry]",
  });
}

/**
 * Confirmation to the person who submitted. Transactional, plain text,
 * restates what they told us, states the response time we will meet.
 * Never includes internal notes or the lead id.
 */
export async function confirmEnquiryToSubmitter(e: EnquiryNotification): Promise<void> {
  const first = e.name.trim().split(/\s+/)[0] || "there";
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const minuteBucket = Math.floor(Date.now() / 60000);
  await sendEmail({
    to: [e.email],
    replyTo: REPLY_TO,
    idempotencyKey: `enquiry:${e.email.toLowerCase()}:${minuteBucket}`,
    subject: `We have your enquiry, ${first}`,
    text: [
      `Thanks for getting in touch.`,
      ``,
      `Here is what came through:`,
      ``,
      `  What you want to change:  ${e.problem}`,
      `  Closest service:          ${e.serviceLabel}`,
      `  Timeline:                 ${e.timeline ? TIMELINE_LABELS[e.timeline] ?? e.timeline : "Not given"}`,
      ``,
      `Amit will read this personally and reply within one working day.`,
      bookingUrl ? `If it is faster to talk, you can pick a time here: ${bookingUrl}` : ``,
      ``,
      `If anything above is wrong, just reply to this email and correct it.`,
      ``,
      `Decifer`,
      `Dubai, United Arab Emirates`,
      `https://www.decifer.io`,
    ]
      .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
      .join("\n"),
    logTag: "[DECIFER Enquiry]",
  });
}

/** Acknowledgement for early-access signups. Previously they received nothing. */
export async function confirmEarlyAccessToSubmitter(opts: {
  name: string;
  email: string;
  interestLabel: string;
}): Promise<void> {
  const first = opts.name.trim().split(/\s+/)[0] || "there";
  const minuteBucket = Math.floor(Date.now() / 60000);
  await sendEmail({
    to: [opts.email],
    replyTo: REPLY_TO,
    idempotencyKey: `early-access:${opts.email.toLowerCase()}:${minuteBucket}`,
    subject: `You are on the list, ${first}`,
    text: [
      `Thanks for joining Decifer early access.`,
      ``,
      `You asked about: ${opts.interestLabel}`,
      ``,
      `Access opens gradually as each product becomes ready. We will email you when yours is.`,
      `No payment is required for early access, and we do not send marketing email.`,
      ``,
      `If you have a question in the meantime, reply to this email.`,
      ``,
      `Decifer`,
      `Dubai, United Arab Emirates`,
      `https://www.decifer.io`,
    ].join("\n"),
    logTag: "[DECIFER Early Access]",
  });
}
