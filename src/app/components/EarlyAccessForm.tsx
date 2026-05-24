"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const INTERESTS = [
  { value: "Trading", label: "DECIFER Trading — Market Intelligence" },
  { value: "Learning", label: "DECIFER Learning — Learning Intelligence" },
  { value: "Future", label: "Future DECIFER products" },
  { value: "General", label: "General — All products" },
];

function track(event: string) {
  if (typeof window === "undefined") return;
  const w = window as Window &
    typeof globalThis & {
      gtag?: (...args: unknown[]) => void;
    };
  if (typeof w.gtag === "function") {
    w.gtag("event", event);
  }
}

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
    website: "", // honeypot — never shown to real users
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e: Partial<Record<keyof typeof form, string>> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.interest) e.interest = "Please select an area of interest.";
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
    setStatus("submitting");

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        track("early_access_submitted");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-live/25 bg-live/6 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-live/30 bg-live/10">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="#0dc47c"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <path d="M4 11l5 5 9-9" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-ink">
          {"You're on the list."}
        </h3>
        <p className="text-sm text-muted">
          {"We'll be in touch when your access is ready. No spam, ever."}
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof typeof errors) =>
    `form-input ${errors[field] ? "form-input-error" : ""}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="ea-website">Website</label>
        <input
          id="ea-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set("website")}
        />
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="ea-name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Name <span className="text-brand">*</span>
          </label>
          <input
            id="ea-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="ea-email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="ea-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Interest */}
        <div>
          <label
            htmlFor="ea-interest"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Most interested in <span className="text-brand">*</span>
          </label>
          <select
            id="ea-interest"
            value={form.interest}
            onChange={set("interest")}
            className={inputClass("interest")}
          >
            <option value="" disabled>
              Select a product
            </option>
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
          {errors.interest && (
            <p className="mt-1.5 text-xs text-red-400">{errors.interest}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="ea-message"
            className="mb-1.5 block text-sm font-medium text-muted"
          >
            Anything else?{" "}
            <span className="text-faint font-normal">(optional)</span>
          </label>
          <textarea
            id="ea-message"
            rows={3}
            placeholder="Tell us how you plan to use DECIFER, or anything you'd like us to know."
            value={form.message}
            onChange={set("message")}
            className="form-input resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/20 transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Request Early Access"}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please try again or email{" "}
            <a href="mailto:hello@decifer.io" className="underline">
              hello@decifer.io
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
