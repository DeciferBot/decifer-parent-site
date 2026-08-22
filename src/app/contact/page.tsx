import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import SectionLabel from "@/app/components/SectionLabel";
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
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          <div className="card-lift rounded-2xl border border-line-strong bg-surface p-8">
            <SectionLabel>Write to us</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold text-ink">hello@decifer.io</h2>
            <p className="mb-6 text-[15px] leading-relaxed text-body">
              One paragraph is enough. What is slow, what is being done by hand,
              what you have tried. Amit reads every enquiry and replies within
              one working day.
            </p>
            <a
              href="mailto:hello@decifer.io?subject=Discovery%20call"
              data-event="contact_email"
              className="btn btn-primary px-6 py-3"
            >
              Email hello@decifer.io
            </a>
          </div>
          <div className="card-lift rounded-2xl border border-line-strong bg-surface p-8">
            <SectionLabel>Pick a time</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold text-ink">A 30-minute call</h2>
            <p className="mb-6 text-[15px] leading-relaxed text-body">
              Dubai hours, with slots for Singapore and the UK. You will talk to
              the person who would do the work, not a salesperson.
            </p>
            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-event="contact_book_call"
                className="btn btn-secondary px-6 py-3"
              >
                Choose a time
              </a>
            ) : (
              <p className="text-sm text-muted">
                Booking link coming shortly. Email us and we will send times.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>What happens next</SectionLabel>
          <ol className="mt-4 space-y-4">
            {[
              "You get a reply from a named person within one working day.",
              "We talk for thirty minutes about what you want to change.",
              "If it makes sense, we propose a two-week audit at a fixed fee, credited against any build.",
              "If it does not make sense, we say so, and suggest what would.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 text-[15px] leading-relaxed text-body">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-cta/35 bg-cta/10 text-xs font-bold text-cta">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
