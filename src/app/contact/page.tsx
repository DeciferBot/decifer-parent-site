import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import EnquiryForm from "@/app/components/EnquiryForm";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Book a 30-minute call",
  description:
    "Tell Decifer what you want to change. A named person in Dubai reads every enquiry and replies within one working day.",
  alternates: { canonical: "/contact" },
};

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

const next = [
  "A reply from a named person within one working day.",
  "Thirty minutes on what you want to change. No slides.",
  "If it makes sense, a two-week audit at a fixed fee, credited against any build.",
  "If it does not, we say so and suggest what would.",
];

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE}/contact#page`,
    url: `${SITE}/contact`,
    name: "Contact Decifer",
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
        kicker="Contact"
        title="Tell us what you want to change."
        lede="Thirty minutes, no slides. We will say whether we can help, what it would take, and what we would not automate yet."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
            <div className="border-t border-line pt-5">
              <h2 className="text-lg font-semibold text-ink">Prefer to pick a time</h2>
              <p className="t-body mt-2">
                Dubai hours, with slots for Singapore and the UK. You will talk to
                the person who would do the work.
              </p>
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="contact_book_call"
                  className="btn btn-secondary mt-5"
                >
                  Choose a time
                </a>
              ) : (
                <p className="mt-3 text-sm text-muted">Send the form and we will offer times by email.</p>
              )}
            </div>

            <div className="border-t border-line pt-5">
              <h2 className="text-lg font-semibold text-ink">Or just email</h2>
              <p className="mt-2">
                <a
                  href="mailto:hello@decifer.io?subject=Discovery%20call"
                  data-event="contact_email"
                  className="link text-[1.0625rem]"
                >
                  hello@decifer.io
                </a>
              </p>
              <p className="t-body mt-2">
                One paragraph is enough. Amit reads every enquiry and replies within one working day.
              </p>
            </div>

            <div className="border-t border-line pt-5">
              <h2 className="text-lg font-semibold text-ink">What happens next</h2>
              <ol className="mt-3 space-y-3">
                {next.map((step, i) => (
                  <li key={step} className="flex gap-3 text-[0.9375rem] leading-relaxed text-body">
                    <span className="w-5 shrink-0 text-sm font-semibold text-muted">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
