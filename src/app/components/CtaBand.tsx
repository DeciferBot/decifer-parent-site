import Link from "next/link";

/**
 * The single conversion, repeated at the foot of every page. An orange
 * panel: the one other place the brand colour carries a whole surface.
 * Ink text on orange passes AA at every size.
 */
export default function CtaBand({
  title = "Tell us what you want to change.",
  body = "Thirty minutes with the founder, no slides. You leave knowing whether we can help, what it would take, and what we would not automate yet.",
  eventPrefix = "cta",
}: {
  title?: string;
  body?: string;
  eventPrefix?: string;
}) {
  return (
    <section className="pb-12 sm:pb-16">
      <div className="container-x">
        <div className="rounded-md bg-orange px-8 py-12 text-ink sm:px-10 sm:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="t-h2">{title}</h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed">{body}</p>
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
                className="btn border-ink/50 text-ink hover:border-ink"
              >
                Email hello@decifer.io
              </a>
            </div>
          </div>
          <p className="mt-8 text-sm">
            Replies come from a named person in Dubai within one working day.
          </p>
        </div>
      </div>
    </section>
  );
}
