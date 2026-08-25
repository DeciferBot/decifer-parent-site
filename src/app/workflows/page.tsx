import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import Arrow from "@/app/components/Arrow";
import Icon from "@/app/components/Icon";
import { accent } from "@/app/data/accents";
import { workflowsByFamily, workflowsOrdered } from "@/app/data/workflows";
import { jsonLd, SITE } from "@/lib/jsonld";

/**
 * The workflow catalogue, as a page.
 *
 * docs/WORKFLOW_CATALOGUE.md records twenty workflow types built and running
 * in production. This page is that inventory made browsable: grouped under
 * the catalogue's own five families, every row linking to a page that names
 * what the workflow does, where it already runs and what you receive.
 *
 * Two jobs, like every page here. Traffic: twenty search phrases, each with
 * its own indexed page, gathered under one crawlable index. Conversion: a
 * buyer who cannot name what they want scans five family headings and finds
 * their problem written as a row.
 */

const familyLede: Record<string, string> = {
  "Research and intelligence":
    "Work that reads so your people decide: sources read overnight, records answering in plain English, archives turned into databases.",
  "Customer-facing":
    "Work your customers meet: questions answered around the clock, enquiries qualified in minutes, threads that never go quiet.",
  Commercial:
    "Work that wins and prices the job: prospects scored daily, quotes computed by your real rules, spend capped in code.",
  Operations:
    "Work that keeps the business informed: reports that assemble themselves, monitors that escalate to a person, paperwork generated from the record.",
  "Content and publishing":
    "Work that publishes under control: written once, checked at a gate, distributed everywhere, and kept true after it ships.",
};

export const metadata: Metadata = {
  title: "Twenty AI workflows, already built and running in production",
  description:
    "The full catalogue of AI workflows Decifer has built and runs in production: research agents, chatbots, lead qualification, quoting engines, reporting, monitoring and content pipelines. Each page names where it already runs.",
  alternates: { canonical: "/workflows" },
};

export default function WorkflowsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/workflows#page`,
        name: "Twenty AI workflows, already built and running",
        url: `${SITE}/workflows`,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        hasPart: workflowsOrdered.map((w) => ({
          "@type": "Service",
          "@id": `${SITE}/services/${w.key}#service`,
          name: w.name,
          alternateName: w.alsoCalled,
          url: `${SITE}/services/${w.key}`,
          description: w.summary,
          provider: { "@id": `${SITE}/#organization` },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Workflows", item: `${SITE}/workflows` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker="The workflow catalogue"
        icon="agent"
        hue="orange"
        title="Twenty workflows we have already built, named the way you search for them."
        lede="Every row is running in production today, for a client or inside one of our own products. Find the one that matches your problem and start on its page: it names what the workflow does, where it already runs, and what you receive."
      />

      <section className="pb-4 sm:pb-8">
        <div className="container-x">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {workflowsByFamily.map((g) => (
              <li key={g.family}>
                <a
                  href={`#${g.family.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="arrow-link text-[0.9375rem]"
                >
                  {g.family}
                  <Arrow size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {workflowsByFamily.map((g, gi) => (
        <section
          key={g.family}
          id={g.family.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={gi % 2 === 1 ? "band band-tight band-tint scroll-mt-24" : "band band-tight scroll-mt-24"}
        >
          <div className="container-x">
            <SectionHead title={`${g.family}.`} lede={familyLede[g.family]} />
            <div className="panel mt-8">
              <ul className="divide-y divide-line">
                {g.items.map((w) => (
                  <li key={w.key}>
                    <Link
                      href={`/services/${w.key}`}
                      data-event={w.event}
                      className="row-link group grid gap-3 px-6 py-6 md:grid-cols-12 md:gap-8"
                      style={accent(w.hue)}
                    >
                      <div className="flex items-start gap-4 md:col-span-4">
                        <span className="icon-tile">
                          <Icon name={w.icon} />
                        </span>
                        <span>
                          <p className="text-[1rem] font-semibold leading-snug text-ink">
                            {w.name}
                          </p>
                          <p className="mt-1 text-sm text-muted">{w.engagementShort}</p>
                        </span>
                      </div>
                      <div className="md:col-span-6">
                        <p className="t-body measure text-[0.9375rem]">{w.summary}</p>
                      </div>
                      <div className="md:col-span-2 md:text-right">
                        <p className="flex items-center gap-1.5 text-sm font-medium text-orange-text md:justify-end">
                          Read the page
                          <Arrow className="row-arrow" size={15} />
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="band band-tight band-dark field-dots">
        <div className="container-x">
          <SectionHead
            tone="light"
            title="If your workflow is not on this list."
            lede="The list is what we have already built, not the limit of what we build. Describe the process, and the first call tells you which of these it is closest to, what it would take, and what it should return."
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              data-event="workflows_index_contact"
              className="btn btn-primary px-4 py-2.5 text-sm"
            >
              Describe the process
              <Arrow className="row-arrow" size={15} />
            </Link>
            <Link
              href="/services/ai-advisory"
              data-event="workflows_index_assessment"
              className="link text-sm text-on-dark-2"
            >
              Or start with the two-week assessment
            </Link>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix="workflows_index" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
