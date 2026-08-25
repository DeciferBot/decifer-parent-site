"use client";

import { useState } from "react";
import ToolNextStep from "./ToolNextStep";

/**
 * Deterministic payback arithmetic, shown with its working. No model, no
 * network call, nothing stored: the rule the site is built by (code
 * computes the numbers) applies to the tools too.
 *
 * Every verdict, including the ones that say do not build, ends with the
 * levers that would change the answer and a next step. A no on one task is
 * a fact about that task, not a reason to stop the conversation.
 */

const fmt = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/** Hours read wrong when rounded to the nearest whole one. */
const fmtHours = (n: number) => (Math.round(n * 10) / 10).toString();

const FIELDS = [
  {
    key: "hours",
    label: "Hours per week spent on the task",
    hint: "Count honestly. Include the checking and the chasing.",
    placeholder: "5",
  },
  {
    key: "salary",
    label: "Monthly cost of the person doing it (AED)",
    hint: "Salary plus visa, insurance and overheads if you know them.",
    placeholder: "8,000",
  },
  {
    key: "build",
    label: "One-time build cost (AED)",
    hint: "The quote you have, or your best guess.",
    placeholder: "15,000",
  },
  {
    key: "running",
    label: "Monthly running cost (AED)",
    hint: "Hosting, model usage, monitoring. If a vendor cannot tell you this number, that is your answer about the vendor.",
    placeholder: "500",
  },
] as const;

type FieldKey = (typeof FIELDS)[number]["key"];

export default function PaybackCalculator() {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    hours: "",
    salary: "",
    build: "",
    running: "",
  });

  const parsed = Object.fromEntries(
    Object.entries(values).map(([k, v]) => [k, parseFloat(v.replace(/,/g, ""))])
  ) as Record<FieldKey, number>;

  const ready = FIELDS.every(({ key }) => Number.isFinite(parsed[key]) && parsed[key] >= 0);

  // A working month is ~173 hours (40h x 52 weeks / 12 months).
  const hourly = ready ? parsed.salary / 173 : 0;
  const yearlyLabour = ready ? parsed.hours * 52 * hourly : 0;
  const yearlyRunning = ready ? parsed.running * 12 : 0;
  const yearlySaving = yearlyLabour - yearlyRunning;
  const paybackMonths = yearlySaving > 0 ? parsed.build / (yearlySaving / 12) : Infinity;
  const threeYearNet = yearlySaving * 3 - parsed.build;

  /**
   * The levers, solved rather than guessed. Each answers "what number would
   * have to change, and to what" for the bar the verdict just missed.
   */
  // Monthly running cost at which the task at least breaks even.
  const runningToBreakEven = yearlyLabour / 12;
  // Hours a week that would carry the running cost, then the build with it.
  const hoursToBreakEven = hourly > 0 ? yearlyRunning / (52 * hourly) : Infinity;
  const hoursForPayback = (months: number) =>
    hourly > 0 ? (parsed.build / (months / 12) + yearlyRunning) / (52 * hourly) : Infinity;
  // Build cost that pays back inside a given number of months at this saving.
  const buildForPayback = (months: number) => yearlySaving * (months / 12);

  let verdict = "";
  /** Heading over the levers: what would change the answer, or what room there is. */
  let leversLabel = "What would change the answer";
  let levers: string[] = [];
  let next: { line: string; cta: string; href: string; event: string } | null = null;

  if (ready) {
    if (yearlyLabour === 0) {
      verdict =
        "The task costs nothing on these numbers, so there is nothing to save. Check the hours and the salary.";
      next = {
        line: "If the hours are right and the task really is that small, the money is somewhere else in the business. The assessment finds where the hours actually go before anyone builds anything.",
        cta: "See the two-week assessment",
        href: "/services/ai-advisory",
        event: "tools_payback_advisory_no_cost",
      };
    } else if (yearlySaving <= 0) {
      verdict =
        "Not this task, not at this running cost. The running cost eats the saving before the build cost is even counted.";
      levers = [
        `Running cost under AED ${fmt(runningToBreakEven)} a month and the task at least breaks even.`,
        Number.isFinite(hoursToBreakEven)
          ? `Or the same automation on a task taking more than ${fmtHours(hoursToBreakEven)} hours a week.`
          : "",
        Number.isFinite(hoursForPayback(24))
          ? `To pay the build back inside two years as well, it needs a task of about ${fmtHours(hoursForPayback(24))} hours a week.`
          : "",
      ].filter(Boolean);
      next = {
        line: "Two things move that running cost: how much of the job actually needs a model, and how much of it is plain rules. Most quotes we see are priced as though all of it needs a model. Send us the numbers and we will tell you which parts do.",
        cta: "Discuss this process",
        href: "/contact",
        event: "tools_payback_contact_negative",
      };
    } else if (paybackMonths <= 12) {
      verdict = "Worth pricing properly. On these numbers the build pays for itself inside a year.";
      leversLabel = "How much room the numbers have";
      levers = Number.isFinite(hoursForPayback(24))
        ? [
            `It still pays back inside two years even if the task turns out to be ${fmtHours(hoursForPayback(24))} hours a week rather than ${values.hours}.`,
            `Room on the build: up to AED ${fmt(buildForPayback(24))} and the two-year payback holds.`,
          ]
        : [];
      next = {
        line: "The number to test next is the running cost, because it is the one a quote is most likely to be quiet about. Bring these figures to a call and you will leave with a real one, plus what we would not automate in this process.",
        cta: "Book a 30-minute call",
        href: "/contact",
        event: "tools_payback_contact_strong",
      };
    } else if (paybackMonths <= 24) {
      verdict = "Borderline. Look for a cheaper build, or a task that costs you more hours.";
      levers = [
        `A build at AED ${fmt(buildForPayback(12))} or under pays back inside a year.`,
        Number.isFinite(hoursForPayback(12))
          ? `So does this build if the task is closer to ${fmtHours(hoursForPayback(12))} hours a week.`
          : "",
      ].filter(Boolean);
      next = {
        line: "Borderline usually means the build is doing too much. There is often a smaller first version that carries most of the saving and costs a fraction to build. That is a half-hour conversation, not a project.",
        cta: "Discuss a smaller first build",
        href: "/contact",
        event: "tools_payback_contact_borderline",
      };
    } else {
      verdict = "Leave it for now. A payback beyond two years rarely survives contact with reality.";
      levers = [
        `This one works at a build cost of about AED ${fmt(buildForPayback(24))}.`,
        Number.isFinite(hoursForPayback(24))
          ? `Or on a task of about ${fmtHours(hoursForPayback(24))} hours a week at this build cost.`
          : "",
      ].filter(Boolean);
      next = {
        line: "Leave this task, not the question. In a business this size there are usually two or three tasks where the same arithmetic comes out well inside a year. Finding and costing them is what the two-week assessment does.",
        cta: "See the two-week assessment",
        href: "/services/ai-advisory",
        event: "tools_payback_advisory_long",
      };
    }
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2 className="label">Your numbers</h2>
      </div>
      <div className="grid gap-6 px-6 py-7 md:grid-cols-2">
        <div className="space-y-4">
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label htmlFor={`calc-${f.key}`} className="mb-1.5 block text-sm font-medium text-ink">
                {f.label}
              </label>
              <input
                id={`calc-${f.key}`}
                type="text"
                inputMode="decimal"
                placeholder={f.placeholder}
                value={values[f.key]}
                onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                className="form-input"
              />
              <p className="mt-1.5 text-xs text-muted">{f.hint}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          {ready ? (
            <div>
              <p className="text-sm font-semibold text-ink">The working</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-body">
                <li>
                  The task costs you <span className="font-semibold text-ink">AED {fmt(yearlyLabour)}</span>
                  {" "}a year in that person&apos;s time ({values.hours || 0} h/week at ~AED {fmt(hourly)}/hour).
                </li>
                <li>
                  The automation costs <span className="font-semibold text-ink">AED {fmt(yearlyRunning)}</span>
                  {" "}a year to run.
                </li>
                <li>
                  Yearly saving:{" "}
                  <span className="font-semibold text-ink">AED {fmt(yearlySaving)}</span>.
                </li>
                {yearlySaving > 0 ? (
                  <li>
                    The build cost pays back in{" "}
                    <span className="font-semibold text-ink">
                      {paybackMonths > 120 ? "over 120" : fmt(paybackMonths)} months
                    </span>
                    .
                  </li>
                ) : null}
                <li>
                  Three-year position:{" "}
                  <span className="font-semibold text-ink">
                    {threeYearNet >= 0 ? "AED " + fmt(threeYearNet) + " ahead" : "AED " + fmt(-threeYearNet) + " behind"}
                  </span>
                  .
                </li>
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[15px] font-medium leading-relaxed text-ink">
                {verdict}
              </p>
              {levers.length ? (
                <>
                  <p className="mt-4 text-sm font-semibold text-ink">{leversLabel}</p>
                  <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-body">
                    {levers.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {next ? <ToolNextStep {...next} /> : null}
            </div>
          ) : (
            <p className="text-[15px] leading-relaxed text-muted">
              Fill in the four numbers and the working appears here, every step shown. Nothing is
              sent anywhere; the arithmetic runs in your browser.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-line px-6 py-4">
        <p className="text-xs leading-relaxed text-muted">
          This is arithmetic, not a quote. It assumes the automation removes the task fully; if it
          only helps, halve the hours before you start. The freed hours only become money if they
          go somewhere useful.
        </p>
      </div>
    </div>
  );
}
