import Link from "next/link";
import Arrow from "./Arrow";

/**
 * The single conversion, repeated at the foot of every page. An orange
 * panel: the one other place the brand colour carries a whole surface.
 * Ink text on orange passes AA at every size.
 */
export default function CtaBand({
  title = "Make the next AI project one the business can measure.",
  body = "Thirty minutes with the founder, no slides. You leave knowing whether the process is worth automating, what it would take, what it should return, and what we would not automate yet.",
  eventPrefix = "cta",
}: {
  title?: string;
  body?: string;
  eventPrefix?: string;
}) {
  return (
    <section className="band band-tight band-orange">
      <div className="container-x">
        <div>
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
                Discuss a business process
                <Arrow className="row-arrow" size={16} />
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
