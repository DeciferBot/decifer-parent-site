"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { enquiryServiceOptions as SERVICES } from "../data/services";

/**
 * Qualified enquiry form for /contact. Structurally the same as
 * EarlyAccessForm: one Status union, one set() helper, one validate(), the
 * same form-input classes and success panel. The 40-character "what do you
 * want to change" field is the real qualifier.
 */

type Status = "idle" | "submitting" | "success" | "error";

const BASED_IN = [
  { value: "AE", label: "United Arab Emirates" },
  { value: "GCC", label: "Elsewhere in the Gulf" },
  { value: "SG", label: "Singapore" },
  { value: "UK", label: "United Kingdom" },
  { value: "other", label: "Somewhere else" },
];

const TIMELINES = [
  { value: "now", label: "As soon as possible" },
  { value: "1-3-months", label: "In the next one to three months" },
  { value: "3-6-months", label: "In three to six months" },
  { value: "exploring", label: "Just exploring for now" },
];

const BUDGETS = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "under-25k-aed", label: "Under AED 25,000" },
  { value: "25k-75k-aed", label: "AED 25,000 to 75,000" },
  { value: "75k-200k-aed", label: "AED 75,000 to 200,000" },
  { value: "200k-plus-aed", label: "AED 200,000 or more" },
];

const MIN_PROBLEM_CHARS = 40;

/**
 * A reader arriving from a tool has already told us the useful part: the
 * task, the hours and what it costs today. The tool links carry it in the
 * URL and /contact passes it in here, so they confirm and send rather than
 * retype. That is the difference between a verdict read and an enquiry
 * received. Nothing is stored on the way: the values are visible in the
 * link and editable in the form.
 */
export interface EnquiryPrefill {
  problem: string;
  costToday: string;
  service: string;
}

function track(event: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & typeof globalThis & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event);
}

export default function EnquiryForm({ prefill }: { prefill?: EnquiryPrefill }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const mountedAt = useRef<number>(0);
  const [serverError, setServerError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    basedIn: "",
    problem: prefill?.problem ?? "",
    costToday: prefill?.costToday ?? "",
    systems: "",
    outcome: "",
    service: prefill?.service ?? "",
    timeline: "",
    budget: "",
    heardVia: "",
    consent: false,
    website: "", // honeypot, never shown to real users
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const prefilled = Boolean(prefill);

  useEffect(() => {
    mountedAt.current = Date.now();
    if (prefilled) track("enquiry_prefilled_from_tool");
  }, [prefilled]);

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const validate = () => {
    const e: Partial<Record<keyof typeof form, string>> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.basedIn) e.basedIn = "Tell us where you are based.";
    if (form.problem.trim().length < MIN_PROBLEM_CHARS)
      e.problem = `A sentence or two, please. At least ${MIN_PROBLEM_CHARS} characters.`;
    if (!form.service) e.service = "Choose the closest service, or \"Not sure yet\".";
    if (!form.timeline) e.timeline = "Choose a rough timeline.";
    if (!form.consent) e.consent = "We need your permission to reply.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setServerError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          elapsedMs: mountedAt.current ? Date.now() - mountedAt.current : undefined,
          sourcePath: pathname,
        }),
      });
      if (res.ok) {
        track("enquiry_submitted");
        setStatus("success");
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setServerError(data.error ?? "");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border-t border-line pt-6" role="status">
        <p className="status text-live"><span className="text-ink">Sent</span></p>
        <h3 className="mt-3 mb-2 text-xl font-semibold text-ink">Got it. Thank you.</h3>
        <p className="text-[15px] leading-relaxed text-body">
          A confirmation is on its way to your inbox. Amit will read your enquiry
          and reply within one working day.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof typeof errors) =>
    `form-input ${errors[field] ? "form-input-error" : ""}`;

  const err = (field: keyof typeof errors) =>
    errors[field] ? <p className="mt-1.5 text-xs text-error">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="enq-website">Website</label>
        <input id="enq-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      {prefilled ? (
        <p className="mb-5 rounded-sm border border-line bg-canvas px-4 py-3 text-sm leading-relaxed text-body">
          <span className="font-semibold text-ink">Carried over from the tool.</span> We have
          filled in what you already told it. Change anything that is not right, add your name and
          email, and send.
        </p>
      ) : null}

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-name" className="mb-1.5 block text-sm font-medium text-ink">
              Name <span className="text-orange-text">*</span>
            </label>
            <input id="enq-name" type="text" autoComplete="name" placeholder="Your name" value={form.name} onChange={set("name")} className={inputClass("name")} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="enq-email" className="mb-1.5 block text-sm font-medium text-ink">
              Email <span className="text-orange-text">*</span>
            </label>
            <input id="enq-email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={set("email")} className={inputClass("email")} />
            {err("email")}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-company" className="mb-1.5 block text-sm font-medium text-ink">
              Company or brand <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id="enq-company" type="text" autoComplete="organization" placeholder="Where you work" value={form.company} onChange={set("company")} className="form-input" />
          </div>
          <div>
            <label htmlFor="enq-based" className="mb-1.5 block text-sm font-medium text-ink">
              Where are you based <span className="text-orange-text">*</span>
            </label>
            <select id="enq-based" value={form.basedIn} onChange={set("basedIn")} className={inputClass("basedIn")}>
              <option value="" disabled>Select</option>
              {BASED_IN.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {err("basedIn")}
          </div>
        </div>

        <div>
          <label htmlFor="enq-problem" className="mb-1.5 block text-sm font-medium text-ink">
            What do you want to change <span className="text-orange-text">*</span>
          </label>
          <textarea
            id="enq-problem"
            rows={4}
            placeholder="What is slow, what is being done by hand, what you have tried. A sentence or two is enough."
            value={form.problem}
            onChange={set("problem")}
            className={`${inputClass("problem")} resize-none`}
          />
          <div className="mt-1.5 flex items-center justify-between">
            {err("problem")}
            <span className="ml-auto text-xs text-faint">{form.problem.trim().length} / {MIN_PROBLEM_CHARS} min</span>
          </div>
        </div>

        <div>
          <label htmlFor="enq-cost" className="mb-1.5 block text-sm font-medium text-ink">
            What does it cost you today <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="enq-cost" type="text" placeholder="Hours a week, delays, errors, work turned away" value={form.costToday} onChange={set("costToday")} className="form-input" />
          <p className="mt-1.5 text-xs text-muted">
            A rough number is fine. It becomes the baseline we measure against later.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-systems" className="mb-1.5 block text-sm font-medium text-ink">
              Which systems are involved <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id="enq-systems" type="text" placeholder="CRM, spreadsheets, email, a booking tool" value={form.systems} onChange={set("systems")} className="form-input" />
          </div>
          <div>
            <label htmlFor="enq-outcome" className="mb-1.5 block text-sm font-medium text-ink">
              What would a successful outcome look like <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id="enq-outcome" type="text" placeholder="Faster replies, fewer errors, one report" value={form.outcome} onChange={set("outcome")} className="form-input" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-service" className="mb-1.5 block text-sm font-medium text-ink">
              Closest service <span className="text-orange-text">*</span>
            </label>
            <select id="enq-service" value={form.service} onChange={set("service")} className={inputClass("service")}>
              <option value="" disabled>Select</option>
              {SERVICES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {err("service")}
          </div>
          <div>
            <label htmlFor="enq-timeline" className="mb-1.5 block text-sm font-medium text-ink">
              When do you want to start <span className="text-orange-text">*</span>
            </label>
            <select id="enq-timeline" value={form.timeline} onChange={set("timeline")} className={inputClass("timeline")}>
              <option value="" disabled>Select</option>
              {TIMELINES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {err("timeline")}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-budget" className="mb-1.5 block text-sm font-medium text-ink">
              Budget range <span className="font-normal text-muted">(optional)</span>
            </label>
            <select id="enq-budget" value={form.budget} onChange={set("budget")} className="form-input">
              <option value="">Prefer not to say</option>
              {BUDGETS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="enq-heard" className="mb-1.5 block text-sm font-medium text-ink">
              How did you hear about us <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id="enq-heard" type="text" placeholder="A person, a search, a post" value={form.heardVia} onChange={set("heardVia")} className="form-input" />
          </div>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-body">
            <input type="checkbox" checked={form.consent} onChange={set("consent")} className="form-check mt-0.5" />
            <span>
              I am happy for Decifer to contact me about this enquiry. See the{" "}
              <a href="/legal/privacy" className="link">privacy policy</a>.
            </span>
          </label>
          {err("consent")}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send the enquiry"
          )}
        </button>

        {status === "error" && (
          <p className="text-sm text-error">
            {serverError || "Something went wrong."} Please try again or email{" "}
            <a href="mailto:hello@decifer.io" className="font-medium underline-offset-2 hover:underline">hello@decifer.io</a>.
          </p>
        )}
      </div>
    </form>
  );
}
