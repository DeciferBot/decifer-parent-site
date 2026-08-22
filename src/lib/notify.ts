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
const FROM_ADDRESS = process.env.RESEND_FROM ?? "DECIFER <onboarding@resend.dev>";

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
