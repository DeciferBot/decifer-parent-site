"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * The three-question decision rule from the article, as a tool. The verdict
 * is a lookup, not a model: same answers, same verdict, every time.
 */

const QUESTIONS = [
  {
    q: "Could a capable employee write the steps down on one page?",
    detail: "Fixed sequence, known decisions: when X happens, do Y with these values.",
  },
  {
    q: "Is the input messy in ways you cannot list in advance?",
    detail: "Rambling emails, voice notes, half-complete forms, three languages.",
  },
  {
    q: "Would a mistake cost real money or a customer?",
    detail: "Wrong price, wrong date, wrong person, money moved.",
  },
];

export default function AgentOrAutomation() {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null]);
  const done = answers.every((a) => a !== null);
  const [steps, messy, costly] = answers;

  let heading = "";
  let body = "";
  if (done) {
    if (messy) {
      heading = "An agent, for one job: taming the messy input.";
      body =
        "Use a model to extract order from the mess: pull the facts out of the rambling email or the voice note into clean fields. The decisions that follow can still be plain rules, and should be. Do not let the model decide; let it read.";
    } else if (steps) {
      heading = "Automation. Do not buy an agent for this.";
      body =
        "The steps fit on a page, so a fixed workflow does the job: triggers, templates, rules. It will be cheaper to build, cheaper to run, and readable when something goes wrong. An agent here is paying improvisation prices for repetition work.";
    } else {
      heading = "Neither, yet. The process needs writing down first.";
      body =
        "If the steps cannot be written on a page and the input is not the problem, the process itself is undefined. Automating an undefined process produces an automated mess. Sit with the person who does the task and write the page first; the answer usually becomes obvious halfway down.";
    }
    if (costly) {
      body +=
        " And because a mistake here is expensive, a person owns the final step: the system drafts, gathers and prepares, and a human approves before anything reaches a customer or moves money.";
    }
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2 className="label">Three questions about the task</h2>
      </div>
      <div className="px-6">
        {QUESTIONS.map((item, i) => (
          <fieldset key={item.q} className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}>
            <legend className="text-[15px] font-semibold text-ink">
              {i + 1}. {item.q}
            </legend>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ].map((o) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => setAnswers((prev) => prev.map((a, j) => (j === i ? o.value : a)))}
                  aria-pressed={answers[i] === o.value}
                  className={`choice ${answers[i] === o.value ? "choice-on" : ""}`}
                  style={
                    {
                      "--accent": o.value
                        ? "var(--color-a-green)"
                        : "var(--color-a-orange)",
                    } as React.CSSProperties
                  }
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
            <p className="text-[15px] font-semibold text-ink">{heading}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{body}</p>
            <p className="mt-4 text-sm text-muted">
              The reasoning behind the rule:{" "}
              <Link href="/blog/ai-agent-vs-automation-which-does-your-business-need" className="link">
                AI agent vs automation, which does your business need?
              </Link>
            </p>
          </div>
        ) : (
          <p className="text-[15px] leading-relaxed text-muted">
            Answer the three questions and the verdict appears here. Same answers, same verdict,
            every time; there is no model behind this page.
          </p>
        )}
      </div>
    </div>
  );
}
