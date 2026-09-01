import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ServiceRow from "@/app/components/ServiceCard";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import Link from "next/link";
import Arrow from "@/app/components/Arrow";
import Icon from "@/app/components/Icon";
import { accent } from "@/app/data/accents";
import { servicesOrdered } from "@/app/data/services";
import { workflowsByFamily, workflowsOrdered } from "@/app/data/workflows";
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
    hasPart: [...servicesOrdered, ...workflowsOrdered].map((s) => ({
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
        icon="agent"
        hue="orange"
        title="Four ways we take a process from pilot to daily operation."
        lede="Four routes from a business problem, or a stalled pilot, to a system running every day. Each ends in production on your accounts, with a written boundary, a measured result and a log your team can read."
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

      {/* The full catalogue lives on /workflows; this is the compact index
          of it, grouped the way the catalogue groups it, so the reader finds
          their problem by family without scrolling twenty full rows. */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <SectionHead
            title="Twenty workflows we have already built."
            lede="Named jobs, each one running in production for a client or inside one of our own products. If your problem is one of these, start on its page: it names what the workflow does, where it already runs and what you receive."
          />
          <div className="mt-11 card-grid md:grid-cols-2 lg:grid-cols-3">
            {workflowsByFamily.map((g) => (
              <div key={g.family} className="rounded-sm border border-line bg-panel px-6 py-6">
                <p className="label">{g.family}</p>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((w) => (
                    <li key={w.key} style={accent(w.hue)}>
                      <Link
                        href={`/services/${w.key}`}
                        data-event={w.event}
                        className="group flex items-start gap-2.5 text-[0.9375rem] leading-snug text-body transition-colors hover:text-ink"
                      >
                        <span className="mt-0.5 text-[var(--accent)]">
                          <Icon name={w.icon} size={15} />
                        </span>
                        {w.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/workflows"
              data-event="services_workflow_catalogue"
              className="btn btn-secondary px-4 py-2.5 text-sm"
            >
              Browse the full catalogue
              <Arrow className="row-arrow" size={15} />
            </Link>
            <p className="text-sm text-muted">
              Every one is running in production today.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-tint">
        <div className="container-x">
          <SectionHead
            title="How an engagement runs."
            lede="Three steps, each with a fixed shape. You can stop after any of them with something useful in hand."
          />
          <ol className="mt-11 card-grid md:grid-cols-3">
            {steps.map((st, i) => (
              <li
                key={st.title}
                className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
                style={
                  {
                    "--accent": `var(--color-a-${["amber", "orange", "teal"][i]})`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3">
                  <span className="step-num step-num-on">{i + 1}</span>
                  <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                    {st.title}
                  </h3>
                </div>
                <p className="t-body mt-4 text-[0.9375rem]">{st.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            Each step ends with something you keep, whether or not the next one
            happens.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="services" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
