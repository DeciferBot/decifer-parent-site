import Link from "next/link";
import { capabilitiesOrdered } from "../../data/capabilities";
import { caseShapesByKey } from "../../data/caseShapes";

/**
 * The homepage's central claim, led by capability and value, not industry.
 * A reader outside the proven industry should still see their own problem
 * in the headline before they ever reach the proof. The industry only
 * appears as a small proof tag; "also fits" names other fields the same
 * mechanism applies to, so a case never reads as a closed door.
 *
 * Reads directly from capabilities.ts, which is also what /capabilities
 * renders from — one model, two views, nothing to keep in sync by hand.
 */
export default function SolvedSection() {
  return (
    <section id="solved" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Processes we&apos;ve taken to production</h2>
            <Link href="/how-we-work" className="link text-sm">
              The full matrix
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {capabilitiesOrdered.map((c) => {
              const proven = caseShapesByKey[c.provenIn[0]];
              return (
                <li key={c.key}>
                  <Link
                    href={proven ? `/work/${proven.key}` : "/how-we-work"}
                    className="row-link group grid gap-3 px-6 py-7 md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-6">
                      <h3 className="t-h3 text-ink">{c.name}</h3>
                      <p className="t-body mt-2">{c.pattern}</p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-[0.9375rem] font-medium leading-snug text-ink">
                        {c.provenSummary}
                      </p>
                      <p className="mt-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-medium text-muted">Also fits:</span>
                        {c.transfersTo.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="inline-block rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              Don&apos;t see your industry above? That&apos;s exactly what the first call is for.
            </p>
            <Link href="/contact" data-event="solved_panel_cta" className="btn btn-primary px-4 py-2.5 text-sm">
              Discuss a business process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
