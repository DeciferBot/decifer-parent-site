import Link from "next/link";
import SectionLabel from "../SectionLabel";

/**
 * One primary conversion on the homepage: a discovery call. Early access for
 * the products lives on /products. The #early-access id is preserved here so
 * existing links still land somewhere sensible.
 */
export default function CtaSection() {
  return (
    <section id="early-access" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 hero-beam opacity-60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-cta/35 bg-canvas/70 p-9 sm:p-10">
            <SectionLabel>Start here</SectionLabel>
            <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Tell us what you want to change.
            </h2>
            <p className="mb-7 max-w-md text-base leading-relaxed text-body">
              Thirty minutes, no slides. We will say plainly whether we can
              help, what it would take, and what we would not automate yet.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" data-event="cta_book_call_footer" className="btn btn-primary px-6 py-3">
                Book a discovery call
              </Link>
              <a href="mailto:hello@decifer.io" data-event="cta_email_footer" className="btn btn-secondary px-6 py-3">
                Email hello@decifer.io
              </a>
            </div>
            <p className="mt-5 text-xs text-muted">
              Replies come from a named person in Dubai within one working day.
            </p>
          </div>

          <div className="rounded-2xl border border-line-strong bg-canvas/50 p-9 sm:p-10">
            <SectionLabel>Early access</SectionLabel>
            <h3 className="mb-3 text-xl font-bold text-ink">Here for the products?</h3>
            <p className="mb-6 text-sm leading-relaxed text-body">
              Decifer Markets, Decifer Learning and Decifer Marketing open
              gradually. Tell us which one you want and we will let you know
              when it is ready. No payment required.
            </p>
            <Link href="/products#early-access" data-event="cta_join_early_access" className="btn btn-secondary px-5 py-2.5">
              Join early access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
