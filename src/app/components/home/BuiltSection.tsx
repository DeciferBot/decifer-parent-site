import Link from "next/link";
import { products } from "../../data/products";
import { getProof, proofByKey, type ProofKey } from "../../data/proof";

/**
 * Built by Decifer: the three public products as evidence of capability,
 * never as a commercial offer on this site.
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

/**
 * `compact` drops the stat grid, for pages that already render the same
 * figures (currently /about, which carries the full proof table below).
 */
export default function BuiltSection({ compact = false }: { compact?: boolean }) {
  const figures = getProof(FIGURE_KEYS);
  return (
    <section id="built-by-decifer" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Built by Decifer</h2>
            <span className="text-sm text-muted">Evidence, not an offer</span>
          </div>
          <div className="px-6 py-7 sm:px-8">
            <h3 className="t-h3 max-w-2xl text-ink">
              We run our own systems in production.
            </h3>
            <p className="t-body mt-3 max-w-3xl">
              Before we sell a method, we run it. Operating real products builds
              a discipline that demonstrations do not: real users, real data,
              model failures, infrastructure cost, monitoring and support.
              Decifer operates three public products built the same way we build
              for clients. They are not what this site sells. They are how we
              know the method holds.
            </p>

            {!compact ? (
              <>
                <div className="mt-7 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                  {figures.map((p) => (
                    <div key={p.key} className="bg-canvas px-5 py-5">
                      <p className="text-2xl font-semibold tracking-tight text-ink">
                        {p.value}
                      </p>
                      <p className="mt-1 text-sm text-body">{p.label}</p>
                      <p className="mt-2 text-xs text-muted">
                        Source: {p.source}. Verified {p.verifiedAt}.
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted">
                  Every figure above is listed with its source and the date it
                  was last checked on{" "}
                  <Link href="/about#numbers" className="link">
                    how we count
                  </Link>
                  .
                </p>
              </>
            ) : null}

            <ul className="mt-7 grid gap-4 md:grid-cols-3">
              {products.map((p) => (
                <li key={p.key} className="border-t border-line pt-4">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-event={p.event}
                      className="font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-ink">{p.name}</span>
                  )}
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{p.tagline}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{p.boundary}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted">
              {proofByKey.paperAccount.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
