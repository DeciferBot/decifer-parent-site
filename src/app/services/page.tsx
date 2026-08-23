import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ServiceRow from "@/app/components/ServiceCard";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import { servicesOrdered } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "AI services in Dubai: agents, automation, reporting and product builds",
  description:
    "Decifer builds AI agents, data and reporting automation and complete products for businesses in Dubai and the UAE. Fixed-scope audits, production builds, and plain advice about where AI does not belong.",
  alternates: { canonical: "/services" },
};

const steps = [
  {
    title: "A two-week audit, fixed fee",
    body: "We talk to the people doing the work, map where the hours go, and hand you a one-page recommendation with an explicit do-not-automate-yet list. The fee is credited in full against any build that follows.",
  },
  {
    title: "A build, two to twelve weeks",
    body: "Scoped in writing before it starts. Every build hands over the repository, the accounts and a runbook. Every agent carries a monthly line for running and improving it, because agents drift.",
  },
  {
    title: "A number after one conversation",
    body: "We do not publish prices, because the honest answer depends on scope. We will give you a figure after the first call, and the audit fee is fixed before it starts.",
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
        kicker="Services"
        title="Four things we build for businesses in Dubai and beyond."
        lede="Each one ends with something running in production, on your accounts, with a written boundary and a log your team can read."
      />

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <ul className="ruled">
            {servicesOrdered.map((s) => (
              <ServiceRow key={s.key} service={s} />
            ))}
          </ul>
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
