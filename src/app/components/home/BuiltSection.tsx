import Link from "next/link";
import ProductFrame from "../ProductFrame";
import Figure from "../Figure";
import { products } from "../../data/products";
import { getProof, proofByKey, type ProofKey } from "../../data/proof";
import type { AccentHue } from "../../data/accents";
import type { IconName } from "../Icon";

/**
 * Built by Decifer: the three public products as evidence of capability,
 * never as a commercial offer on this site.
 *
 * This is the page's dark band and its only photography. The screenshots
 * are real captures of the live products, which makes them the only images
 * the business actually owns; a section claiming "we run our own systems in
 * production" and showing nothing was asking to be taken on trust.
 *
 * Figures are read through getProof(), not proofByKey, so the `internal`
 * flag is honoured: proof.ts promises internal figures are "not rendered
 * anywhere on the site", and indexing the map directly would defeat that.
 * Each figure carries its source, because the same page cites external
 * research and Decifer's own numbers must not be held to a lower standard.
 *
 * Each product prints its own boundary line. The design system requires a
 * disclaimer "adjacent to the intelligence it validates, never only in a
 * footer", and these cards are where the products are named and linked.
 */

const FIGURE_KEYS: ProofKey[] = [
  "monthsLive",
  "scheduledJobs",
  "integrations",
  "testFunctions",
];

const FIGURE_MARKS: Record<string, { icon: IconName; hue: AccentHue }> = {
  monthsLive: { icon: "measure", hue: "blue" },
  scheduledJobs: { icon: "log", hue: "teal" },
  integrations: { icon: "handover", hue: "violet" },
  testFunctions: { icon: "boundary", hue: "green" },
};

/**
 * `compact` drops the stat grid, for pages that already render the same
 * figures (currently /about, which carries the full proof table below).
 */
export default function BuiltSection({ compact = false }: { compact?: boolean }) {
  const figures = getProof(FIGURE_KEYS);
  return (
    <section id="built-by-decifer" className="band band-dark field-dots">
      <div className="container-x">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line-dark pb-5">
          <h2 className="label text-on-dark-2">Built by Decifer</h2>
          <span className="text-sm text-on-dark-2">Evidence, not an offer</span>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-12">
          <h3 className="t-h2 text-on-dark lg:col-span-5">
            We run our own systems in production.
          </h3>
          <p className="text-[1.0625rem] leading-relaxed text-on-dark-2 lg:col-span-7">
            Before we sell a method, we run it. Operating real products builds
            a discipline that demonstrations do not: real users, real data,
            model failures, infrastructure cost, monitoring and support.
            Decifer operates three public products built the same way we build
            for clients. They are not what this site sells. They are how we
            know the method holds.
          </p>
        </div>

        {!compact ? (
          <>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
              {figures.map((p, i) => (
                <Figure
                  key={p.key}
                  value={p.value}
                  label={p.label}
                  source={`Source: ${p.source}. Verified ${p.verifiedAt}.`}
                  icon={FIGURE_MARKS[p.key]?.icon}
                  hue={FIGURE_MARKS[p.key]?.hue ?? "blue"}
                  index={i}
                  tone="dark"
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-on-dark-2">
              Every figure above is listed with its source and the date it was
              last checked on{" "}
              <Link
                href="/about#numbers"
                className="text-on-dark underline underline-offset-4"
              >
                how we count
              </Link>
              .
            </p>
          </>
        ) : null}

        <ul className="mt-12 card-grid md:grid-cols-3">
          {products.map((p, i) => (
            <li key={p.key}>
              <ProductFrame product={p} tone="light" priority={i === 0} />
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl border-t border-line-dark pt-5 text-sm leading-relaxed text-on-dark-2">
          {proofByKey.paperAccount.detail}
        </p>
      </div>
    </section>
  );
}
