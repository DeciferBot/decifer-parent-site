import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CaseRow from "@/app/components/CaseShapeCard";
import CtaBand from "@/app/components/CtaBand";
import Icon from "@/app/components/Icon";
import { publishedCaseShapes, sectorMark } from "@/app/data/caseShapes";
import { accent } from "@/app/data/accents";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Work: processes taken from pilot to daily operation",
  description:
    "Client work from Decifer in the UAE, UK, Spain and Singapore, plus the two Decifer products we run ourselves. Each case states what was built, what changed, how it was measured, and where a person stays in charge. Clients are named where they have agreed in writing.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/work#page`,
    name: "Decifer work",
    url: `${SITE}/work`,
    isPartOf: { "@id": `${SITE}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: publishedCaseShapes.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        url: `${SITE}/work/${c.key}`,
      })),
    },
  };

  return (
    <>
      <PageHero
        kicker="Work"
        icon="record"
        hue="amber"
        title="Systems in daily operation, described in full."
        lede="Every case states the industry, the problem, what we built, what changed, how it is measured, and where a person stays in charge. Clients are named where they have agreed in writing, and our own products are named because there is nobody to ask. Your work would be treated the same way."
      >
        <Link href="/legal/client-confidentiality" className="link text-[0.9375rem]">
          How we handle client confidentiality
        </Link>
      </PageHero>

      {/* The industries, as a scan strip. A reader looking for their own
          field should find it before they start reading rows, and each mark
          here is the same one that leads its case below. */}
      <section className="band band-tight band-tint">
        <div className="container-x">
          <h2 className="label">Seven industries, one method</h2>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {publishedCaseShapes.map((c) => {
              const mark = sectorMark[c.sector];
              return (
                <li key={c.key} style={accent(mark.hue)}>
                  <Link
                    href={`/work/${c.key}`}
                    className="row-link flex h-full items-center gap-3 bg-panel px-4 py-4"
                  >
                    <span className="icon-tile icon-tile-sm">
                      <Icon name={mark.icon} size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.9375rem] font-medium leading-snug text-ink">
                        {c.sector}
                      </span>
                      <span className="block text-[0.8125rem] text-muted">
                        {c.region}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 pt-14 sm:pt-16">
        <div className="container-x">
          <div className="panel">
            <ul className="divide-y divide-line">
              {publishedCaseShapes.map((c) => (
                <CaseRow key={c.key} shape={c} />
              ))}
            </ul>
          </div>
          <p className="mt-10 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
            A figure appears here only with the before measurement, the after
            measurement taken the same way, and the client&apos;s written
            permission. That is why you can believe the ones you see.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="work" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
