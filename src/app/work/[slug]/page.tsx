import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import StackList from "@/app/components/StackChips";
import Arrow from "@/app/components/Arrow";
import Icon, { type IconName } from "@/app/components/Icon";
import type { AccentHue } from "@/app/data/accents";
import { accent } from "@/app/data/accents";
import { publishedCaseShapes, caseShapesByKey, sectorMark } from "@/app/data/caseShapes";
import { servicesByKey } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCaseShapes.map((c) => ({ slug: c.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = caseShapesByKey[slug];
  if (!c || !c.published) return {};
  return {
    title: c.title,
    description: `${c.clientShape}. ${c.situation}`.slice(0, 158),
    alternates: { canonical: `/work/${c.key}` },
  };
}

/**
 * One block of a case: what was built, what changed, what was deliberately
 * left alone. Each carries its own mark, so the four blocks are told apart
 * by shape before they are told apart by reading the heading.
 */
function Block({
  title,
  items,
  icon,
  hue,
}: {
  title: string;
  items: string[];
  icon: IconName;
  hue: AccentHue;
}) {
  return (
    <div
      className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
      style={accent(hue)}
    >
      <div className="flex items-center gap-3">
        <span className="icon-tile">
          <Icon name={icon} />
        </span>
        <h2 className="t-h3 text-ink">{title}</h2>
      </div>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[1rem] leading-relaxed text-body">
            <span
              className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CaseShapePage({ params }: Params) {
  const { slug } = await params;
  const c = caseShapesByKey[slug];
  if (!c || !c.published) notFound();
  const mark = sectorMark[c.sector];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE}/work/${c.key}#article`,
        headline: c.title,
        description: c.clientShape,
        url: `${SITE}/work/${c.key}`,
        dateModified: c.updatedAt,
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@id": `${SITE}/work#page` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
          { "@type": "ListItem", position: 3, name: c.title, item: `${SITE}/work/${c.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker={`${c.sector}, ${c.region}`}
        title={c.title}
        lede={`${c.clientShape}.`}
        icon={mark.icon}
        hue={mark.hue}
      >
        <StackList keys={c.stackKeys} />
      </PageHero>

      <section className="band band-tight band-tint">
        <div className="container-x grid gap-6 md:grid-cols-12">
          <h2 className="label md:col-span-3 md:pt-2">Before</h2>
          <p className="t-lede md:col-span-8 md:col-start-4">{c.situation}</p>
        </div>
      </section>

      <section className="band">
        <div className="container-x grid gap-4 md:grid-cols-2">
          <Block title="What we built" items={c.work} icon="agent" hue={mark.hue} />
          <Block title="What changed" items={c.outcome} icon="measure" hue="green" />
          <Block
            title="Where a person stays in charge"
            items={c.boundaries}
            icon="boundary"
            hue="orange"
          />
          <div
            className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
            style={accent("blue")}
          >
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Icon name="rule" />
              </span>
              <h2 className="t-h3 text-ink">How it is measured</h2>
            </div>
            <p className="t-body mt-5 text-[1rem]">{c.measurement}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <span className="icon-tile">
                <Icon name="record" />
              </span>
              <h2 className="t-h3 text-ink">What stays confidential</h2>
            </div>
            <p className="t-body mt-5 text-[1rem]">{c.withheld}</p>
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="container-x">
          <div className="rounded-sm border border-line bg-panel px-6 py-6">
            <p className="label">Same shape as your process?</p>
            <p className="t-body mt-3 max-w-2xl">
              Tell us what the equivalent task costs you today and we will tell you what this
              shape would take to build for you, what it should return, and where to start.
              Thirty minutes, no slides.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href={`/contact?problem=${encodeURIComponent(
                  `We read your ${c.sector.toLowerCase()} case, "${c.title}", and we have a process of a similar shape. We want to know what it would take to build the equivalent for us.`
                )}&service=${c.serviceKeys[0]}`}
                data-event={`work_${c.key}_discuss`}
                className="btn btn-primary px-4 py-2.5 text-sm"
              >
                Discuss a process like this
                <Arrow className="row-arrow" size={15} />
              </Link>
              <Link
                href="/tools/automation-payback-calculator"
                data-event={`work_${c.key}_payback`}
                className="link text-sm"
              >
                Or price the saving first
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x section-tight">
          <p className="text-sm font-semibold text-ink">Services this came from</p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {c.serviceKeys.map((k) => (
              <li key={k}>
                <Link href={`/services/${k}`} className="arrow-link text-[0.9375rem]">
                  {servicesByKey[k].name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className="arrow-link text-[0.9375rem]">
                All work
                <Arrow size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand eventPrefix={`work_${c.key}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
