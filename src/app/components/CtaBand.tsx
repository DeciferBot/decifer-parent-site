import Link from "next/link";

/**
 * The single conversion, repeated at the foot of every page. Orange drench:
 * this is the one place on each page where the brand colour carries the
 * whole surface. Ink text on orange passes AA at every size.
 */
export default function CtaBand({
  title = "Tell us what you want to change.",
  body = "Thirty minutes, no slides. We will say whether we can help, what it would take, and what we would not automate yet.",
  eventPrefix = "cta",
}: {
  title?: string;
  body?: string;
  eventPrefix?: string;
}) {
  return (
    <section className="bg-orange text-ink">
      <div className="container-x section">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="t-h2">{title}</h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <Link
              href="/contact"
              data-event={`${eventPrefix}_book_call`}
              className="btn btn-on-orange"
            >
              Book a 30-minute call
            </Link>
            <a
              href="mailto:hello@decifer.io"
              data-event={`${eventPrefix}_email`}
              className="btn border-ink/40 text-ink hover:border-ink"
            >
              Email hello@decifer.io
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm">
          Replies come from a named person in Dubai within one working day.
        </p>
      </div>
    </section>
  );
}
