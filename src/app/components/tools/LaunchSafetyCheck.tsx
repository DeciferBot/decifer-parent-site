"use client";

import { useState, type ComponentProps } from "react";
import Link from "next/link";
import ToolNextStep from "./ToolNextStep";

/**
 * The six pre-launch checks from the article, as an interactive scorecard.
 * "Not sure" counts as a fail on purpose: on security, not knowing is the
 * same as no. Runs entirely in the browser; nothing is stored or sent.
 *
 * Every score ends with a next step. A fix list nobody has the time to work
 * through is the same as no fix list, so the page says who does it if the
 * reader will not.
 */

const POST = "/blog/is-your-vibe-coded-app-safe-to-launch";

const CHECKS = [
  {
    q: "Are all secrets out of the code?",
    detail: "API keys and passwords live on the server, never in the code, the browser, or git history.",
    fix: "Move every secret to server environment variables. Rotate any key that was ever committed, today.",
    anchor: "check-1-are-your-secrets-in-the-code",
  },
  {
    q: "Does every endpoint check who is asking?",
    detail: "You logged out, requested the raw API URLs as a stranger, and got nothing back.",
    fix: "Add an identity check to every route, denying by default, then repeat the stranger test.",
    anchor: "check-2-does-every-endpoint-check-who-is-asking",
  },
  {
    q: "Is the data safe from one bad prompt?",
    detail: "Production is separate from development, backups run automatically, and you have restored one.",
    fix: "Split the environments, switch on backups, and do one real restore so you know it works.",
    anchor: "check-3-can-you-lose-the-data",
  },
  {
    q: "Are your dependencies clean?",
    detail: "A dependency audit runs on every build and currently reports nothing serious.",
    fix: "Run your ecosystem's audit command now, update what it flags, and wire it into the build.",
    anchor: "check-4-are-your-dependencies-known-bad",
  },
  {
    q: "Are payments and personal data handled properly?",
    detail: "Card details never touch your servers, and you can list the personal data you hold and why.",
    fix: "Use your payment provider's hosted pages, and write the one-page list of data you hold.",
    anchor: "check-5-are-payments-and-personal-data-handled-by-grown-ups",
  },
  {
    q: "Would you know if you were attacked?",
    detail: "Logins and failures leave a log line, and a named person is alerted on odd patterns.",
    fix: "Add logging on auth events and an alert on silence or spikes. Name the person who gets it.",
    anchor: "check-6-would-you-know-if-you-were-attacked",
  },
];

type Answer = "yes" | "no" | "unsure";

const OPTIONS: { value: Answer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

export default function LaunchSafetyCheck() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(Array(CHECKS.length).fill(null));

  const done = answers.every((a) => a !== null);
  const score = answers.filter((a) => a === "yes").length;
  const failing = CHECKS.filter((_, i) => done && answers[i] !== "yes");

  const summary = !done
    ? ""
    : score === CHECKS.length
      ? "All six pass. Launch, then keep going: passing the checks makes the app safe enough to improve in public, not finished."
      : score >= 4
        ? `${score} of 6. Close. Fix the items below before real users arrive; each is typically a day or less.`
        : `${score} of 6. Do not launch yet. The gaps below are the ones attackers and accidents find first.`;

  /** The failing checks, carried into the enquiry form as the brief. */
  const failingBrief = failing.map((c) => c.q.replace(/\?$/, "").toLowerCase()).join("; ");

  const next: ComponentProps<typeof ToolNextStep> | null = !done
    ? null
    : score === CHECKS.length
      ? {
          line: "The checks that matter next are the ones that only appear under real use: what happens when the traffic, the data and the edge cases arrive. That is the work after launch, and it is the work we take on.",
          cta: "See how we build and hand over",
          href: "/services/ai-product-development",
          event: "tools_safety_services_pass",
          secondary: {
            label: "Or tell us what you are launching",
            href: `/contact?problem=${encodeURIComponent(
              "Our app passes all six of your launch safety checks and we are about to put it in front of real users. We want to talk about what comes after launch."
            )}&service=ai-product-development`,
            event: "tools_safety_contact_pass",
          },
        }
      : {
          line: `${failing.length} ${failing.length === 1 ? "gap" : "gaps"} to close, each typically a day or less if you know the codebase. If nobody on your side has that day, this is the first thing we do on any codebase we inherit, and you get the findings whether or not you hire us for the rest.`,
          cta: "Send us the app",
          href: `/contact?problem=${encodeURIComponent(
            `Our app scores ${score} of 6 on your launch safety check. The gaps: ${failingBrief}. We want them closed before real users arrive.`
          )}&cost=${encodeURIComponent(
            "Not launched yet, so the cost is the launch date slipping"
          )}&service=ai-product-development`,
          event: "tools_safety_contact_failing",
        };

  return (
    <div className="panel">
      <div className="panel-head">
        <h2 className="label">The six checks</h2>
        <span className="text-sm text-muted">{answers.filter(Boolean).length}/6 answered</span>
      </div>
      <div className="px-6">
        {CHECKS.map((c, i) => (
          <fieldset key={c.q} className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}>
            <legend className="text-[15px] font-semibold text-ink">
              {i + 1}. {c.q}
            </legend>
            <p className="mt-1 text-sm leading-relaxed text-muted">{c.detail}</p>
            <div className="mt-3 flex gap-2">
              {OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setAnswers((prev) => prev.map((a, j) => (j === i ? o.value : a)))}
                  aria-pressed={answers[i] === o.value}
                  className={`rounded-sm border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    answers[i] === o.value
                      ? "border-ink bg-ink text-canvas"
                      : "border-line text-body hover:border-ink hover:text-ink"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-line px-6 py-6">
        {done ? (
          <div>
            <p className="text-[15px] font-medium leading-relaxed text-ink">{summary}</p>
            {failing.length ? (
              <ul className="mt-4 space-y-3">
                {failing.map((c) => (
                  <li key={c.q} className="text-[15px] leading-relaxed text-body">
                    <span className="font-semibold text-ink">{c.q}</span> {c.fix}{" "}
                    <Link href={`${POST}#${c.anchor}`} className="link">
                      How to do it
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-4 text-xs leading-relaxed text-muted">
              &quot;Not sure&quot; counts as a fail on purpose: on security, not knowing is the same
              as no. Answers stay in your browser; nothing is stored or sent.
            </p>
            {next ? <ToolNextStep {...next} /> : null}
          </div>
        ) : (
          <p className="text-[15px] leading-relaxed text-muted">
            Answer all six and your score appears here, with a fix list for anything failing.
          </p>
        )}
      </div>
    </div>
  );
}
