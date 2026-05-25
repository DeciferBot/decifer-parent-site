"use client";

import { useState } from "react";
import DeciferMark from "./DeciferMark";

type Step = {
  step: "01" | "02" | "03";
  label: "Collect" | "Connect" | "Explain";
  short: string;
  body: string;
};

const STEPS: Step[] = [
  {
    step: "01",
    label: "Collect",
    short: "Start with inputs that can be checked.",
    body: "DECIFER begins with structured, relevant and trusted inputs. Each product uses sources suited to its own domain.",
  },
  {
    step: "02",
    label: "Connect",
    short: "Put information in the right context.",
    body: "The system applies domain rules, relationships and user context so information is not treated as generic content.",
  },
  {
    step: "03",
    label: "Explain",
    short: "Make the answer understandable.",
    body: "DECIFER turns complex information into clear language, showing what matters, what is known and what remains uncertain.",
  },
];

const INPUTS = [
  "Trusted sources",
  "Structured data",
  "Domain rules",
  "User context",
  "Product-specific evidence",
];

const OUTPUTS = [
  "What happened",
  "Why it matters",
  "What changed",
  "What is uncertain",
  "What to look at next",
];

export default function MethodSteps() {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      {/* Diagram panel */}
      <div className="mb-12 overflow-hidden rounded-2xl border border-line-strong bg-surface/70">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.1fr_1px_1fr]">
          {/* Left: What goes in */}
          <div className="scroll-reveal-1 p-7 md:p-9">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-cta">
                What goes in
              </span>
            </div>
            <ul className="space-y-3">
              {INPUTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-body"
                >
                  <svg
                    className="mt-1 flex-shrink-0 text-faint"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  >
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden bg-line-strong md:block" aria-hidden="true" />

          {/* Center: DECIFER process */}
          <div className="scroll-reveal flex flex-col items-center justify-center gap-5 border-y border-line-strong p-7 md:border-y-0 md:p-9">
            <div style={{ filter: "drop-shadow(0 0 14px rgba(240,90,40,0.32))" }}>
              <DeciferMark size="lg" />
            </div>

            <div
              className="w-full space-y-2"
              role="tablist"
              aria-label="DECIFER method steps"
            >
              {STEPS.map((s, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={s.step}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`method-detail-${i}`}
                    id={`method-tab-${i}`}
                    data-active={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="method-step"
                  >
                    <span className="step-num">{s.step}</span>
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </div>

            <p
              className="min-h-[3rem] text-center text-sm leading-relaxed text-body"
              aria-live="polite"
            >
              {STEPS[active].short}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden bg-line-strong md:block" aria-hidden="true" />

          {/* Right: What comes out */}
          <div className="scroll-reveal-2 p-7 md:p-9">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-live">
                What comes out
              </span>
            </div>
            <ul className="space-y-3">
              {OUTPUTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-body"
                >
                  <svg
                    className="mt-1 flex-shrink-0 text-live/70"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  >
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => {
          const isActive = active === i;
          return (
            <div
              key={s.step}
              id={`method-detail-${i}`}
              role="tabpanel"
              aria-labelledby={`method-tab-${i}`}
              data-active={isActive}
              onMouseEnter={() => setActive(i)}
              className="method-detail"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${
                    isActive
                      ? "border-cta/60 bg-cta/10 text-cta"
                      : "border-line-strong bg-surface text-muted"
                  }`}
                >
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-ink">{s.label}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-body">{s.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
