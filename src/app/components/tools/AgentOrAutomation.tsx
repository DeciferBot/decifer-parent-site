"use client";

import { useState } from "react";
import Link from "next/link";
import ToolNextStep from "./ToolNextStep";

/**
 * The three-question decision rule from the article, as a tool. The verdict
 * is a lookup, not a model: same answers, same verdict, every time.
 *
 * Each verdict carries the next step that goes with it, including the two
 * that say do not buy an agent. Telling someone they need something simpler
 * is only useful if the page also says where the simpler thing comes from.
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
  let next: { line: string; cta: string; href: string; event: string } | null = null;
  if (done) {
    if (messy) {
      heading = "An agent, for one job: taming the messy input.";
      body =
        "Use a model to extract order from the mess: pull the facts out of the rambling email or the voice note into clean fields. The decisions that follow can still be plain rules, and should be. Do not let the model decide; let it read.";
      next = {
        line: "The whole job is drawing the boundary in the right place: what the model reads, what the rules decide, and what a person still signs off. That boundary is written down before anything is built.",
        cta: "See how we build agents",
        href: "/services/ai-agents",
        event: "tools_agent_services_agent",
      };
    } else if (steps) {
      heading = "Automation. Do not buy an agent for this.";
      body =
        "The steps fit on a page, so a fixed workflow does the job: triggers, templates, rules. It will be cheaper to build, cheaper to run, and readable when something goes wrong. An agent here is paying improvisation prices for repetition work.";
      next = {
        line: "This is the cheaper half of what we do, and it is usually where a first project should start. Worth checking the arithmetic before you commission it either way.",
        cta: "Run the payback numbers",
        href: "/tools/automation-payback-calculator",
        event: "tools_agent_payback_automation",
      };
    } else {
      heading = "Neither, yet. The process needs writing down first.";
      body =
        "If the steps cannot be written on a page and the input is not the problem, the process itself is undefined. Automating an undefined process produces an automated mess. Sit with the person who does the task and write the page first; the answer usually becomes obvious halfway down.";
      next = {
        line: "Writing that page is work, and it is the work most projects skip. If nobody internally has the time, it is exactly what the two-week assessment produces: the process mapped, costed, and a shortlist of what to automate first.",
        cta: "See the two-week assessment",
        href: "/services/ai-advisory",
        event: "tools_agent_advisory_undefined",
      };
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
            <div className="mt-3 flex gap-2">
              {[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ].map((o) => (
                <button
                  key={o.label}
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
            <p className="text-[15px] font-semibold text-ink">{heading}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{body}</p>
            <p className="mt-4 text-sm text-muted">
              The reasoning behind the rule:{" "}
              <Link href="/blog/ai-agent-vs-automation-which-does-your-business-need" className="link">
                AI agent vs automation, which does your business need?
              </Link>
            </p>
            {next ? <ToolNextStep {...next} /> : null}
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
