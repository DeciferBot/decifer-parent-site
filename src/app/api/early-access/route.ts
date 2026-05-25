import { NextRequest, NextResponse } from "next/server";

interface EarlyAccessPayload {
  name: string;
  email: string;
  interest: string;
  message?: string;
  website?: string; // honeypot field
}

const VALID_INTERESTS = ["Trading", "Learning", "General"];

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
  // RESEND_FROM must be a verified sending domain in Resend (e.g. noreply@decifer.io).
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.RESEND_NOTIFY_EMAIL;
  const fromAddress = process.env.RESEND_FROM ?? "DECIFER <onboarding@resend.dev>";

  if (resendApiKey && notifyEmail) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
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
        }),
      });

      if (!emailRes.ok) {
        console.error(
          "[DECIFER Early Access] Resend error:",
          await emailRes.text()
        );
      }
    } catch (err) {
      // Don't fail the request if email delivery fails — submission is still logged
      console.error("[DECIFER Early Access] Resend exception:", err);
    }
  } else if (resendApiKey && !notifyEmail) {
    console.warn("[DECIFER Early Access] RESEND_API_KEY set but RESEND_NOTIFY_EMAIL is missing — skipping email.");
  }

  // TODO: Persist to Supabase when NEXT_PUBLIC_SUPABASE_URL and
  // SUPABASE_SERVICE_ROLE_KEY are configured. Example:
  //
  // const { createClient } = await import("@supabase/supabase-js");
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY!
  // );
  // await supabase.from("early_access").insert([submission]);

  return NextResponse.json({ ok: true });
}
