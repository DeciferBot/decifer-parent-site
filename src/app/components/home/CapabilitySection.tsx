import Link from "next/link";
import { capabilitiesOrdered } from "../../data/capabilities";

/**
 * The homepage capability teaser: the reusable pattern behind the case
 * shapes, ahead of the product cards. Products are proof the method works;
 * this section is the method itself, stated as capability rather than as
 * a build log.
 */
export default function CapabilitySection() {
  return (
    <section id="capabilities" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">Where the method transfers</h2>
            <Link href="/capabilities" className="link text-sm">
              The full matrix
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {capabilitiesOrdered.map((c) => (
              <li key={c.key}>
                <Link
                  href="/capabilities"
                  className="row-link group grid gap-2 px-6 py-6 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                      {c.name}
                    </h3>
                  </div>
                  <p className="t-body md:col-span-8">{c.provenSummary}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              Most of a job stays deterministic. AI earns its place only where a decision needs
              judgement.
            </p>
            <Link href="/capabilities" data-event="capabilities_panel_cta" className="btn btn-primary px-4 py-2.5 text-sm">
              See what transfers to you
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
