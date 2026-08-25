"use client";

import { useState } from "react";

/**
 * Deterministic payback arithmetic, shown with its working. No model, no
 * network call, nothing stored: the rule the site is built by (code
 * computes the numbers) applies to the tools too.
 */

const fmt = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

  const verdict = !ready
    ? ""
    : yearlyLabour === 0
      ? "The task costs nothing on these numbers, so there is nothing to save. Check the hours and the salary."
      : yearlySaving <= 0
      ? "Do not build this one. The running cost eats the saving before the build cost is even counted."
      : paybackMonths <= 12
        ? "Worth pricing properly. On these numbers the build pays for itself inside a year."
        : paybackMonths <= 24
          ? "Borderline. Look for a cheaper build, or a task that costs you more hours."
          : "Leave it for now. A payback beyond two years rarely survives contact with reality.";

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
                  <>
                    <li>
                      The build cost pays back in{" "}
                      <span className="font-semibold text-ink">
                        {paybackMonths > 120 ? "over 120" : fmt(paybackMonths)} months
                      </span>
                      .
                    </li>
                    <li>
                      Three-year position:{" "}
                      <span className="font-semibold text-ink">
                        {threeYearNet >= 0 ? "AED " + fmt(threeYearNet) + " ahead" : "AED " + fmt(-threeYearNet) + " behind"}
                      </span>
                      .
                    </li>
                  </>
                ) : null}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[15px] font-medium leading-relaxed text-ink">
                {verdict}
              </p>
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
