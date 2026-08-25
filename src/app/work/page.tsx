import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import CaseRow from "@/app/components/CaseShapeCard";
import CtaBand from "@/app/components/CtaBand";
import { publishedCaseShapes } from "@/app/data/caseShapes";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Work: processes taken from pilot to daily operation",
  description:
    "Client work from Decifer in the UAE, UK, Spain and Singapore, anonymised unless a client has agreed in writing to be named, plus the two Decifer products we run ourselves. Each case states what was built, what changed, how it was measured, and what we deliberately did not automate.",
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
        title="Described by shape. Named only by agreement."
        lede="Most clients are not named on this site, by their own request and as a matter of policy. Where a client has agreed in writing to be named, we say so. Our own products are named, because there is nobody to ask. Every case states the industry, the problem, what we built, what changed, how it is measured, and what we chose not to automate."
      >
        <Link href="/legal/client-confidentiality" className="link text-[0.9375rem]">
          How we handle client confidentiality
        </Link>
      </PageHero>

      <section className="pb-16 sm:pb-24">
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
