import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ServiceRow from "@/app/components/ServiceCard";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import { servicesOrdered } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "What we do: AI implementation, automation and agents in Dubai",
  description:
    "Decifer takes business processes from AI pilot to daily operation: a fixed-fee opportunity assessment, workflow automation and AI agents, data and decision intelligence, and custom AI products. Dubai and the UAE.",
  alternates: { canonical: "/services" },
};

const steps = [
  {
    title: "A two-week assessment, fixed fee",
    body: "We talk to the people doing the work, map where the hours go, and cost the process as it runs today so any build can be measured against it. You get a one-page recommendation with an explicit do-not-automate-yet list. The fee is credited in full against any build that follows.",
  },
  {
    title: "A build, two to twelve weeks",
    body: "Scoped in writing before it starts, with the workflow redesigned rather than automated as-is. Every build hands over the repository, the accounts and a runbook. Every agent carries a monthly line for running and improving it, because agents drift.",
  },
  {
    title: "A measured result",
    body: "After deployment we read the same measures we took at the start, the same way, so the business can see what changed. We do not publish prices, because the honest answer depends on scope. You get a figure after the first call, and the assessment fee is fixed before it starts.",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/services#page`,
    name: "Decifer services",
    url: `${SITE}/services`,
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
    hasPart: servicesOrdered.map((s) => ({
      "@type": "Service",
      "@id": `${SITE}/services/${s.key}#service`,
      name: s.name,
      url: `${SITE}/services/${s.key}`,
      description: s.summary,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    })),
  };

  return (
    <>
      <PageHero
        kicker="What we do"
        title="Four ways we take a process from pilot to daily operation."
        lede="Most AI projects stall because the business case was never made, the workflow was never redesigned, nothing was integrated, or nobody took a baseline. Each of the four below ends with something running in production, on your accounts, with a written boundary and a log your team can read."
      />

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="panel">
            <ul className="divide-y divide-line">
              {servicesOrdered.map((s) => (
                <ServiceRow key={s.key} service={s} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section">
          <SectionHead
            title="How an engagement runs."
            lede="Three steps, each with a fixed shape. You can stop after any of them with something useful in hand."
          />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((st, i) => (
              <li key={st.title} className="border-t border-line pt-5">
                <p className="text-sm font-semibold text-muted">Step {i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{st.title}</h3>
                <p className="t-body mt-3">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand eventPrefix="services" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
