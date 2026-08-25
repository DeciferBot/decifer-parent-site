import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Icon from "@/app/components/Icon";
import EnquiryForm, { type EnquiryPrefill } from "@/app/components/EnquiryForm";
import { validServiceValues } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Discuss a business process",
  description:
    "Tell Decifer which process you want to improve. A named person in Dubai reads every enquiry and replies within one working day.",
  alternates: { canonical: "/contact" },
};

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

/** Longest prefill accepted from a link, so the field stays editable. */
const MAX_PREFILL = 600;

/**
 * The tools link here carrying what the reader already told them: the task,
 * the hours, what it costs today. We read it off the URL and hand it to the
 * form so they confirm and send rather than retype. Nothing is stored on the
 * way, and everything prefilled is visible and editable.
 */
function readPrefill(
  params: Record<string, string | string[] | undefined>
): EnquiryPrefill | undefined {
  const clean = (v: string | string[] | undefined) =>
    (Array.isArray(v) ? v[0] : v ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_PREFILL);
  const problem = clean(params.problem);
  const costToday = clean(params.cost);
  const serviceRaw = clean(params.service);
  const service = validServiceValues.includes(serviceRaw) ? serviceRaw : "";
  if (!problem && !costToday && !service) return undefined;
  return { problem, costToday, service };
}

const next = [
  "A reply from a named person within one working day.",
  "Thirty minutes on the process you want to improve. No slides.",
  "If it makes sense, a two-week assessment at a fixed fee, credited against any build.",
  "If a build is not the next step, we say what is.",
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const prefill = readPrefill(await searchParams);
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
        icon="handover"
        hue="orange"
        title="Start with the process you want to improve."
        lede="You do not need a specification. Tell us where work is slow, expensive, repetitive or hard to scale. In thirty minutes you will know what the right solution looks like, what it would take to build, what it should return, and where to start."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <EnquiryForm prefill={prefill} />
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:col-start-9">
            <div
              className="accent-cap rounded-sm border border-line bg-panel px-5 py-5"
              style={{ "--accent": "var(--color-a-blue)" } as React.CSSProperties}
            >
              <h2 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
                <span className="text-[var(--accent)]">
                  <Icon name="events" size={18} />
                </span>
                Prefer to pick a time
              </h2>
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

            <div
              className="accent-cap rounded-sm border border-line bg-panel px-5 py-5"
              style={{ "--accent": "var(--color-a-teal)" } as React.CSSProperties}
            >
              <h2 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
                <span className="text-[var(--accent)]">
                  <Icon name="handover" size={18} />
                </span>
                Or just email
              </h2>
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

            <div
              className="accent-cap rounded-sm border border-line bg-panel px-5 py-5"
              style={{ "--accent": "var(--color-a-orange)" } as React.CSSProperties}
            >
              <h2 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
                <span className="text-[var(--accent)]">
                  <Icon name="measure" size={18} />
                </span>
                What happens next
              </h2>
              <ol className="mt-4 space-y-4">
                {next.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-body"
                  >
                    <span className="step-num step-num-on mt-0.5">{i + 1}</span>
                    <span>{step}</span>
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
