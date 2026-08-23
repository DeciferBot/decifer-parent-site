import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CaseRow from "@/app/components/CaseShapeCard";
import CtaBand from "@/app/components/CtaBand";
import { publishedCaseShapes } from "@/app/data/caseShapes";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Work: AI systems in production, described by shape",
  description:
    "Anonymised client work from Decifer in the UAE, UK, Spain and Singapore. Each case states what was built, what changed, how it was measured, and what we deliberately did not automate.",
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
        title="Described by shape, never by name."
        lede="Clients are not named on this site, at their request and as a matter of policy. Each case states the sector, the problem, what we built, what changed, how it is measured, and what we chose not to automate."
      >
        <Link href="/legal/client-confidentiality" className="link text-[0.9375rem]">
          Why we do not name clients
        </Link>
      </PageHero>

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <ul className="ruled">
            {publishedCaseShapes.map((c) => (
              <CaseRow key={c.key} shape={c} />
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
            No case carries a percentage. We publish a figure only with the
            before measurement, the after measurement taken the same way, the
            period, the things that could have caused it instead, and the
            client&apos;s written permission. Until all five exist, the words
            carry it.
          </p>
        </div>
      </section>

      <CtaBand eventPrefix="work" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
