"use client";

import { useEffect, useState } from "react";
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

function track(event: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & typeof globalThis & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event);
}

export default function EnquiryForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [mountedAt, setMountedAt] = useState<number>(0);
  const [serverError, setServerError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    basedIn: "",
    problem: "",
    service: "",
    timeline: "",
    budget: "",
    heardVia: "",
    consent: false,
    website: "", // honeypot, never shown to real users
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  useEffect(() => setMountedAt(Date.now()), []);

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
          elapsedMs: mountedAt ? Date.now() - mountedAt : undefined,
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
      <div className="rounded-2xl border border-live/35 bg-live/8 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-live/40 bg-live/15">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1ad385" strokeWidth="1.75" strokeLinecap="round">
            <path d="M4 11l5 5 9-9" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-ink">Got it. Thank you.</h3>
        <p className="text-[15px] leading-relaxed text-body">
          A confirmation is on its way to your inbox. Amit will read your enquiry
          and reply within one working day.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof typeof errors) =>
    `form-input ${errors[field] ? "form-input-error" : ""}`;

  const Err = ({ field }: { field: keyof typeof errors }) =>
    errors[field] ? <p className="mt-1.5 text-xs text-red-400">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="enq-website">Website</label>
        <input id="enq-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-name" className="mb-1.5 block text-sm font-medium text-ink">
              Name <span className="text-brand">*</span>
            </label>
            <input id="enq-name" type="text" autoComplete="name" placeholder="Your name" value={form.name} onChange={set("name")} className={inputClass("name")} />
            <Err field="name" />
          </div>
          <div>
            <label htmlFor="enq-email" className="mb-1.5 block text-sm font-medium text-ink">
              Email <span className="text-brand">*</span>
            </label>
            <input id="enq-email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={set("email")} className={inputClass("email")} />
            <Err field="email" />
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
              Where are you based <span className="text-brand">*</span>
            </label>
            <select id="enq-based" value={form.basedIn} onChange={set("basedIn")} className={inputClass("basedIn")}>
              <option value="" disabled>Select</option>
              {BASED_IN.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <Err field="basedIn" />
          </div>
        </div>

        <div>
          <label htmlFor="enq-problem" className="mb-1.5 block text-sm font-medium text-ink">
            What do you want to change <span className="text-brand">*</span>
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
            <Err field="problem" />
            <span className="ml-auto text-xs text-faint">{form.problem.trim().length} / {MIN_PROBLEM_CHARS} min</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-service" className="mb-1.5 block text-sm font-medium text-ink">
              Closest service <span className="text-brand">*</span>
            </label>
            <select id="enq-service" value={form.service} onChange={set("service")} className={inputClass("service")}>
              <option value="" disabled>Select</option>
              {SERVICES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <Err field="service" />
          </div>
          <div>
            <label htmlFor="enq-timeline" className="mb-1.5 block text-sm font-medium text-ink">
              When do you want to start <span className="text-brand">*</span>
            </label>
            <select id="enq-timeline" value={form.timeline} onChange={set("timeline")} className={inputClass("timeline")}>
              <option value="" disabled>Select</option>
              {TIMELINES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <Err field="timeline" />
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
            <input type="checkbox" checked={form.consent} onChange={set("consent")} className="mt-1 h-4 w-4 flex-shrink-0 accent-[#F05A28]" />
            <span>
              I am happy for DECIFER to contact me about this enquiry. See the{" "}
              <a href="/legal/privacy" className="text-cta underline-offset-2 hover:underline">Privacy Policy</a>.
            </span>
          </label>
          <Err field="consent" />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff6a36] hover:shadow-xl hover:shadow-cta/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending..." : "Send the enquiry"}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            {serverError || "Something went wrong."} Please try again or email{" "}
            <a href="mailto:hello@decifer.io" className="font-medium underline-offset-2 hover:underline">hello@decifer.io</a>.
          </p>
        )}
      </div>
    </form>
  );
}
