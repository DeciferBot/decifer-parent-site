import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ServiceCard from "@/app/components/ServiceCard";
import CtaBand from "@/app/components/CtaBand";
import SectionLabel from "@/app/components/SectionLabel";
import { servicesOrdered } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "AI services in Dubai: agents, automation, reporting and product builds",
  description:
    "DECIFER builds AI agents, data and reporting automation and complete products for businesses in Dubai and the UAE. Fixed-scope audits, production builds, and honest advice about where AI does not belong.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/services#page`,
    name: "DECIFER services",
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
        label="Services"
        title={
          <>
            AI that does a job,
            <br />
            <span className="font-display font-normal italic text-cta">
              not AI that demos well.
            </span>
          </>
        }
        lede="Four ways we work with businesses in Dubai and beyond. Each one ends with something running in production, on your accounts, with a log you can read."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesOrdered.map((s, i) => (
              <ServiceCard
                key={s.key}
                service={s}
                scrollClass={`scroll-reveal-${(i % 2) + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionLabel>How engagements run</SectionLabel>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Most work starts with a two-week audit.
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-body">
            <p>
              The audit is fixed scope and fixed fee, and it is credited in
              full against any build that follows. It exists so that the first
              thing we build is the right thing, and so that you have a written
              recommendation you can act on with or without us.
            </p>
            <p>
              Builds run two to twelve weeks depending on the service. Every
              build hands over the repository, the accounts and a runbook. Every
              agent carries a monthly line for running and improving it, because
              agents drift and a build with no maintenance is a build you will
              be blamed for.
            </p>
            <p>
              We do not publish prices, because the honest answer depends on
              scope. We will give you a number after one conversation.
            </p>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix="services" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
