import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import SectionLabel from "@/app/components/SectionLabel";
import EnquiryForm from "@/app/components/EnquiryForm";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Tell DECIFER what you want to change. A named person in Dubai reads every enquiry and replies within one working day.",
  alternates: { canonical: "/contact" },
};

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE}/contact#page`,
    url: `${SITE}/contact`,
    name: "Contact DECIFER",
    isPartOf: { "@id": `${SITE}/#website` },
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@decifer.io",
      availableLanguage: "en",
      areaServed: ["AE", "SG", "GB"],
    },
  };

  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Tell us what you
            <br />
            <span className="font-display font-normal italic text-cta">
              want to change.
            </span>
          </>
        }
        lede="Thirty minutes, no slides. We will say plainly whether we can help, what it would take, and what we would not automate yet."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-line-strong bg-surface p-7 sm:p-9">
            <SectionLabel>The enquiry</SectionLabel>
            <h2 className="mb-6 text-2xl font-bold text-ink">One form, read by a person.</h2>
            <EnquiryForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-line-strong bg-surface p-7">
              <SectionLabel>Prefer to pick a time</SectionLabel>
              <h2 className="mb-3 text-xl font-bold text-ink">A 30-minute call</h2>
              <p className="mb-5 text-[15px] leading-relaxed text-body">
                Dubai hours, with slots for Singapore and the UK. You will talk
                to the person who would do the work.
              </p>
              {bookingUrl ? (
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" data-event="contact_book_call" className="btn btn-secondary px-5 py-2.5">
                  Choose a time
                </a>
              ) : (
                <p className="text-sm text-muted">Send the form and we will offer times by email.</p>
              )}
            </div>

            <div className="rounded-2xl border border-line-strong bg-surface p-7">
              <SectionLabel>Or just email</SectionLabel>
              <a href="mailto:hello@decifer.io?subject=Discovery%20call" data-event="contact_email" className="text-lg font-semibold text-cta hover:underline">
                hello@decifer.io
              </a>
              <p className="mt-3 text-sm leading-relaxed text-body">
                One paragraph is enough. Amit reads every enquiry and replies
                within one working day.
              </p>
            </div>

            <div className="rounded-2xl border border-line-strong bg-canvas/60 p-7">
              <SectionLabel>What happens next</SectionLabel>
              <ol className="mt-2 space-y-3">
                {[
                  "A reply from a named person within one working day.",
                  "Thirty minutes on what you want to change.",
                  "If it makes sense, a two-week audit at a fixed fee, credited against any build.",
                  "If it does not, we say so and suggest what would.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-cta/35 bg-cta/10 text-[11px] font-bold text-cta">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
