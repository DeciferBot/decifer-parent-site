import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero";
import CtaBand from "@/app/components/CtaBand";
import SectionHead from "@/app/components/SectionHead";
import SectionLabel from "@/app/components/SectionLabel";
import StackList from "@/app/components/StackChips";
import ProofStrip from "@/app/components/ProofStrip";
import CaseRow from "@/app/components/CaseShapeCard";
import ProductFrame from "@/app/components/ProductFrame";
import Icon from "@/app/components/Icon";
import { accent } from "@/app/data/accents";
import ScopeSheet from "@/app/components/home/ScopeSheet";
import Arrow from "@/app/components/Arrow";
import {
  services,
  servicesByKey,
  servicesOrdered,
  type ServiceKey,
  type ServiceLike,
} from "@/app/data/services";
import {
  workflows,
  workflowsByKey,
  workflowsOrdered,
  type WorkflowKey,
} from "@/app/data/workflows";
import { caseShapesByKey, caseShapesForService } from "@/app/data/caseShapes";
import { products } from "@/app/data/products";
import { jsonLd, SITE } from "@/lib/jsonld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/**
 * This route serves two kinds of page from one template: the four services in
 * services.ts, and the named workflows in workflows.ts, which carry the terms
 * buyers actually search for. Both satisfy ServiceLike, so everything below
 * the lookup is shared.
 */
function pageFor(slug: string): ServiceLike | undefined {
  return workflowsByKey[slug as WorkflowKey] ?? servicesByKey[slug as ServiceKey];
}

export function generateStaticParams() {
  return [...services, ...workflows].map((s) => ({ slug: s.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = pageFor(slug);
  if (!s) return {};
  return {
    title: s.seoTitle ?? `${s.name} in Dubai`,
    description: s.seoDescription ?? s.summary,
    alternates: { canonical: `/services/${s.key}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const workflow = workflowsByKey[slug as WorkflowKey];
  const s = pageFor(slug);
  if (!s) notFound();

  const shapes = workflow
    ? workflow.caseKeys
        .map((k) => caseShapesByKey[k])
        .filter((c) => c && c.published)
    : caseShapesForService(s.key as ServiceKey);
  const proofProduct = s.proofProduct
    ? products.find((p) => p.key === s.proofProduct) ?? null
    : null;
  const others = servicesOrdered.filter((o) => o.key !== s.key);
  const otherWorkflows = workflowsOrdered.filter((w) => w.key !== s.key);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE}/services/${s.key}#service`,
        name: s.name,
        serviceType: workflow ? workflow.searchTerm : s.name,
        ...(workflow ? { alternateName: workflow.alsoCalled } : {}),
        description: s.summary,
        url: `${SITE}/services/${s.key}`,
        provider: { "@id": `${SITE}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United Kingdom" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: s.name, item: `${SITE}/services/${s.key}` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker={s.name}
        title={s.cardHeadline}
        lede={s.summary}
        icon={s.icon}
        hue={s.hue}
      >
        <StackList keys={s.stackKeys} />
      </PageHero>

      {/* Situation and approach */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>The situation you are probably in</SectionLabel>
            <p className="t-body">{s.problem}</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SectionLabel>What we do about it</SectionLabel>
            <p className="t-body">{s.description}</p>
            <p className="mt-6 border-t border-line pt-4 text-[0.9375rem] leading-relaxed text-body">
              <span className="font-semibold text-ink">Typical engagement. </span>
              {s.typicalEngagement}
            </p>
          </div>
        </div>
      </section>

      {workflow ? (
        <section className="pb-16 sm:pb-24">
          <div className="container-x">
            <div
              className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
              style={accent(workflow.hue)}
            >
              <p className="label">Where this already runs</p>
              <p className="t-body mt-3 max-w-3xl">{workflow.provenIn}</p>
              <p className="t-body mt-4 max-w-3xl">
                Most builds of this shape start with the two-week assessment:
                we map the process as it runs today, cost it, and write the
                scope. The fee is credited in full against the build.
              </p>
              <Link
                href="/services/ai-advisory"
                data-event={`${workflow.event.replace("_clicked", "")}_assessment`}
                className="btn btn-secondary mt-5 px-4 py-2.5 text-sm"
              >
                Start with the two-week assessment
                <Arrow className="row-arrow" size={15} />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {s.key === "ai-agents" ? (
        <section className="pb-16 sm:pb-24">
          <div className="container-x grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="t-h3 text-ink">Every agent ships with a scope sheet</h2>
              <p className="t-body mt-3">
                Before an agent runs, its limits are written down: what it may
                do, what it must hand to a person, and how every action is
                logged. This example shows the shape. Yours is written with
                you, for your business.
              </p>
            </div>
            <div className="md:col-span-7">
              <ScopeSheet />
            </div>
          </div>
        </section>
      ) : null}

      {/* Deliverables */}
      <section className="band band-tint">
        <div className="container-x">
          <SectionHead
            title="What you receive."
            lede="Concrete things, not outcomes on a slide. This list is the scope of the engagement."
          />
          <ol className="mt-11 grid gap-3 sm:grid-cols-2">
            {s.deliverables.map((d, i) => (
              <li
                key={d}
                className="flex items-start gap-4 rounded-sm border border-line bg-panel px-5 py-5"
              >
                <span className="step-num step-num-on">{i + 1}</span>
                <p className="text-[1rem] leading-relaxed text-ink">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit */}
      <section className="band">
        <div className="container-x grid gap-4 md:grid-cols-2">
          <div
            className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
            style={accent("green")}
          >
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Icon name="boundary" />
              </span>
              <h2 className="t-h3 text-ink">A good fit when</h2>
            </div>
            <ul className="mt-5 space-y-3.5">
              {s.goodFit.map((g) => (
                <li key={g} className="flex gap-3 text-[1rem] leading-relaxed text-body">
                  <span
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="accent-cap rounded-sm border border-line bg-panel px-6 py-6"
            style={accent("orange")}
          >
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Icon name="handover" />
              </span>
              <h2 className="t-h3 text-ink">The right starting point when</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {s.elsewhere.map((e) => (
                <li key={e.situation} className="flex gap-3">
                  <span
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <p className="text-[1rem] leading-relaxed text-body">
                    <span className="font-semibold text-ink">{e.situation}.</span>{" "}
                    <Link href={e.href} className="link">
                      {e.solution}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
              Not sure which of these is you? Describe the process and we will
              point you at the right one, on this page or another.
            </p>
          </div>
        </div>
      </section>

      {/* Price it before you commission it */}
      <section className="band band-tight">
        <div className="container-x">
          <div className="rounded-sm border border-line bg-panel px-6 py-6">
            <p className="label">Price it before you commission it</p>
            <p className="t-body mt-3 max-w-2xl">
              Put the hours the task takes today, the salary of the person doing it and any quote
              you hold through the payback calculator. It shows the yearly saving, the payback
              period and the arithmetic behind both. Free, and nothing is stored.
            </p>
            <Link
              href="/tools/automation-payback-calculator"
              data-event={`service_${s.key.replace(/-/g, "_")}_payback`}
              className="btn btn-secondary mt-5 px-4 py-2.5 text-sm"
            >
              Run the payback numbers
              <Arrow className="row-arrow" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="band band-tint">
        <div className="container-x">
          <SectionHead
            title="Things you can check."
            lede="Figures from our own systems that this service draws on. Each one names its source."
          />
          <div className="mt-12">
            <ProofStrip keys={s.proofRefs} />
          </div>

          {proofProduct ? (
            <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <h3 className="t-h3 text-ink">Built this way for ourselves</h3>
                <p className="t-body mt-3">
                  {proofProduct.name} is a public product we run with the same method this
                  service uses. Open it before you hire us.
                </p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ProductFrame product={proofProduct} tone="ink" />
              </div>
            </div>
          ) : null}

          {shapes.length ? (
            <div className="mt-14">
              <h3 className="t-h3 text-ink">Work of this shape</h3>
              <div className="panel mt-6">
                <ul className="divide-y divide-line">
                  {shapes.map((c) => (
                    <CaseRow key={c.key} shape={c} />
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Other services, and the named workflows */}
      <section className="border-t border-line">
        <div className="container-x section-tight">
          <p className="text-sm font-semibold text-ink">
            {workflow ? "Services" : "Other services"}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((o) => (
              <li key={o.key}>
                <Link href={`/services/${o.key}`} className="arrow-link text-[0.9375rem]">
                  {o.name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold text-ink">
            {workflow ? "Other workflows we have built" : "Workflows we have built"}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {otherWorkflows.map((w) => (
              <li key={w.key}>
                <Link href={`/services/${w.key}`} className="arrow-link text-[0.9375rem]">
                  {w.name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand eventPrefix={`service_${s.key}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
