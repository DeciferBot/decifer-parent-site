"use client";

import { useState, type ComponentProps } from "react";
import ToolNextStep from "./ToolNextStep";

/**
 * Deterministic payback arithmetic, shown with its working. No model, no
 * network call, nothing stored: the rule the site is built by (code
 * computes the numbers) applies to the tools too.
 *
 * The arithmetic is reported exactly as it comes out, including when the
 * saving is negative. What the tool never does is tell a reader to walk
 * away: every outcome is stated as what it would take to make the task
 * work, with the numbers that would do it, and a next step. The reader
 * decides; our job is to show them the lever and be there when they pull
 * it.
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

  /**
   * The numbers they just typed, carried into the enquiry form so the next
   * screen asks them to confirm rather than to retype. Everything rides in
   * the URL: still nothing stored, and they can see and edit every word.
   */
  const enquiryHref = (problem: string, service: string) =>
    `/contact?problem=${encodeURIComponent(problem)}&cost=${encodeURIComponent(
      `About AED ${fmt(yearlyLabour)} a year in staff time, ${values.hours} hours a week`
    )}&service=${service}`;

  let verdict = "";
  /** Heading over the levers: what would change the answer, or what room there is. */
  let leversLabel = "What makes this work";
  let levers: string[] = [];
  let next: ComponentProps<typeof ToolNextStep> | null = null;

  if (ready) {
    if (yearlyLabour === 0) {
      verdict =
        "There is nothing to save on these numbers. Check the hours and the salary: most people leave out the checking and the chasing.";
      next = {
        line: "If the hours really are that small, the money is in another process. The two-week assessment maps where the hours go and costs each one.",
        cta: "See the two-week assessment",
        href: "/services/ai-advisory",
        event: "tools_payback_advisory_no_cost",
      };
    } else if (yearlySaving <= 0) {
      verdict =
        `At AED ${fmt(parsed.running)} a month, the running cost is higher than the value of the hours. Bring it down and this task works.`;
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
        line: "Two things set the running cost: how much of the job needs a model, and how much is plain rules. Most quotes price all of it as model work. Send us the numbers and we will tell you which parts need one.",
        cta: "Get the running cost checked",
        href: enquiryHref(
          `We are looking at automating a task that takes ${values.hours} hours a week. On your payback calculator it does not work: about AED ${fmt(yearlyLabour)} a year of staff time against a build of AED ${fmt(parsed.build)} and AED ${fmt(parsed.running)} a month to run. We want to know whether that running cost is realistic.`,
          "not-sure"
        ),
        event: "tools_payback_contact_negative",
        secondary: {
          label: "Or see the two-week assessment",
          href: "/services/ai-advisory",
          event: "tools_payback_advisory_negative",
        },
      };
    } else if (paybackMonths <= 12) {
      verdict = "The numbers work. The build pays for itself inside a year.";
      leversLabel = "How much room the numbers have";
      levers = Number.isFinite(hoursForPayback(24))
        ? [
            `It still pays back inside two years even if the task turns out to be ${fmtHours(hoursForPayback(24))} hours a week rather than ${values.hours}.`,
            `The build can go up to AED ${fmt(buildForPayback(24))} and still pay back inside two years.`,
          ]
        : [];
      next = {
        line: "Check the running cost next. It is the number most quotes leave out. Send these figures over and you will get a real one back.",
        cta: "Get this priced properly",
        href: enquiryHref(
          `A task taking ${values.hours} hours a week, worth about AED ${fmt(yearlyLabour)} a year in staff time. On your calculator a build at AED ${fmt(parsed.build)} with AED ${fmt(parsed.running)} a month to run pays back in about ${fmt(paybackMonths)} months. We would like it priced and scoped properly.`,
          "not-sure"
        ),
        event: "tools_payback_contact_strong",
      };
    } else if (paybackMonths <= 24) {
      verdict = "This works. A smaller first build gets the payback inside a year:";
      levers = [
        `A build at AED ${fmt(buildForPayback(12))} or under pays it back inside a year.`,
        Number.isFinite(hoursForPayback(12))
          ? `So does this build if the task is closer to ${fmtHours(hoursForPayback(12))} hours a week.`
          : "",
      ].filter(Boolean);
      next = {
        line: "A payback in this range usually means the build is doing more than it needs to. A smaller first version normally carries most of the saving at a fraction of the cost. Finding it takes half an hour.",
        cta: "Ask about a smaller first build",
        href: enquiryHref(
          `A task taking ${values.hours} hours a week, worth about AED ${fmt(yearlyLabour)} a year in staff time. On your calculator a build at AED ${fmt(parsed.build)} with AED ${fmt(parsed.running)} a month to run pays back in about ${fmt(paybackMonths)} months. We want to know whether a smaller first version would carry most of the saving and land it sooner.`,
          "not-sure"
        ),
        event: "tools_payback_contact_borderline",
      };
    } else {
      verdict = "A smaller build, or a task with more hours in it, brings the payback inside two years. Here is what each would have to be:";
      levers = [
        `It works at a build cost of about AED ${fmt(buildForPayback(24))}.`,
        Number.isFinite(hoursForPayback(24))
          ? `Or on a task of about ${fmtHours(hoursForPayback(24))} hours a week at this build cost.`
          : "",
      ].filter(Boolean);
      next = {
        line: "Most businesses this size have two or three tasks where the arithmetic comes out well inside a year. The two-week assessment finds and costs them. The fee is credited in full against any build.",
        cta: "Ask about the assessment",
        href: enquiryHref(
          `We ran a task of ${values.hours} hours a week through your calculator, worth about AED ${fmt(yearlyLabour)} a year in staff time, and the payback on a AED ${fmt(parsed.build)} build lands beyond two years. We want help finding the tasks in the business where the numbers work, and a smaller build for this one.`,
          "ai-advisory"
        ),
        event: "tools_payback_contact_long",
        secondary: {
          label: "Or read what the assessment covers",
          href: "/services/ai-advisory",
          event: "tools_payback_advisory_long",
        },
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
