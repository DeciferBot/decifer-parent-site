"use client";

import { useState, type ComponentProps } from "react";
import Link from "next/link";
import ToolNextStep from "./ToolNextStep";

/**
 * The three-question decision rule from the article, as a tool. The verdict
 * is a lookup, not a model: same answers, same verdict, every time.
 *
 * Each verdict is stated as the thing to build first, never as a reason to
 * stop, and carries the next step that goes with it. Steering someone to
 * the cheaper build is only useful if the page also says where that build
 * comes from.
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
  let next: ComponentProps<typeof ToolNextStep> | null = null;
  if (done) {
    if (messy) {
      heading = "An agent, for one job: reading the messy input.";
      body =
        "Use a model to pull the facts out of the rambling email or the voice note and into clean fields. The decisions that follow stay as plain rules. The model reads the input; the rules decide what happens next.";
      next = {
        line: "The boundary is the job: what the model reads, what the rules decide, what a person signs off. We write it down before anything is built. Half an hour on a call gets you our version for your task.",
        cta: "Describe the messy input",
        href: `/contact?problem=${encodeURIComponent(
          "We have a task where the input is messy in ways we cannot list in advance, so a fixed workflow does not cope. Your three-question tool says a model should read the input while plain rules make the decisions. We want to know what that would take."
        )}&service=ai-agents`,
        event: "tools_agent_contact_agent",
        secondary: {
          label: "Or see how we build agents",
          href: "/services/ai-agents",
          event: "tools_agent_services_agent",
        },
      };
    } else if (steps) {
      heading = "Start with automation. It is the cheaper build and it does this job.";
      body =
        "The steps fit on a page, so a fixed workflow does it: triggers, templates, rules. Cheaper to build, cheaper to run, and readable when something goes wrong. Keep the agent budget for a part of the business where the input is genuinely messy.";
      next = {
        line: "Before you commission it, put the hours and the quote through the arithmetic. It takes a minute and tells you whether the price makes sense.",
        cta: "Run the payback numbers",
        href: "/tools/automation-payback-calculator",
        event: "tools_agent_payback_automation",
        secondary: {
          label: "Or see how we build workflow automation",
          href: "/services/ai-agents",
          event: "tools_agent_services_automation",
        },
      };
    } else {
      heading = "Start by writing the process down. That is the first piece of work.";
      body =
        "If the steps cannot be written on a page and the input is not the problem, the process is still undefined. Write the page first, with the person who does the task. It becomes the specification for whatever gets built next.";
      next = {
        line: "Writing that page is work, and most projects skip it. If nobody on your side has the time, the two-week assessment does it: the process mapped, costed, and a shortlist of what to automate first. Fixed fee, credited in full against any build.",
        cta: "Ask about the assessment",
        href: `/contact?problem=${encodeURIComponent(
          "Your three-question tool says our process is not defined enough to automate yet: the steps do not fit on a page and the input is not the problem. We want help mapping and costing it before anyone builds anything."
        )}&service=ai-advisory`,
        event: "tools_agent_contact_undefined",
        secondary: {
          label: "Or read what the assessment covers",
          href: "/services/ai-advisory",
          event: "tools_agent_advisory_undefined",
        },
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
