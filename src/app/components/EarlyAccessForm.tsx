"use client";

import { useState } from "react";
import { earlyAccessInterests as INTERESTS } from "../data/products";

type Status = "idle" | "submitting" | "success" | "error";

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
      <div className="border-t border-line pt-6" role="status">
        <p className="status text-live"><span className="text-ink">Sent</span></p>
        <h3 className="mt-3 mb-2 text-xl font-semibold text-ink">
          {"You're on the list."}
        </h3>
        <p className="text-[15px] leading-relaxed text-body">
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
            Name <span className="text-orange-text">*</span>
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
            <p className="mt-1.5 text-xs text-error">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="ea-email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email <span className="text-orange-text">*</span>
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
            <p className="mt-1.5 text-xs text-error">{errors.email}</p>
          )}
        </div>

        {/* Interest */}
        <div>
          <label
            htmlFor="ea-interest"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Most interested in <span className="text-orange-text">*</span>
          </label>
          <select
            id="ea-interest"
            value={form.interest}
            onChange={set("interest")}
            className={inputClass("interest")}
          >
            <option value="" disabled>
              Select an interest
            </option>
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
          {errors.interest && (
            <p className="mt-1.5 text-xs text-error">{errors.interest}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="ea-message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Anything else?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="ea-message"
            rows={3}
            placeholder="Tell us how you plan to use it, or anything you would like us to know."
            value={form.message}
            onChange={set("message")}
            className="form-input"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? "Submitting…" : "Request early access"}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-error">
            Something went wrong. Please try again or email{" "}
            <a
              href="mailto:hello@decifer.io"
              className="font-medium underline-offset-2 hover:underline"
            >
              hello@decifer.io
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
