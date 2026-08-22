import Link from "next/link";
import SectionLabel from "./SectionLabel";

/**
 * The single primary conversion, repeated at the foot of every standalone
 * page. One CTA only: a discovery call. Early access lives on /products.
 */
export default function CtaBand({
  title = "Tell us what you want to change.",
  body = "Thirty minutes, no slides. We will tell you plainly whether we can help, what it would take, and what we would not automate yet.",
  eventPrefix = "cta",
}: {
  title?: string;
  body?: string;
  eventPrefix?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 hero-beam opacity-60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <SectionLabel>Start here</SectionLabel>
        <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-body">
          {body}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            data-event={`${eventPrefix}_book_call`}
            className="btn btn-primary w-full px-7 py-3.5 sm:w-auto"
          >
            Book a discovery call
          </Link>
          <a
            href="mailto:hello@decifer.io"
            data-event={`${eventPrefix}_email`}
            className="btn btn-secondary w-full px-7 py-3.5 sm:w-auto"
          >
            Email hello@decifer.io
          </a>
        </div>
        <p className="mt-6 text-xs text-muted">
          Replies come from a named person in Dubai within one working day.
        </p>
      </div>
    </section>
  );
}
