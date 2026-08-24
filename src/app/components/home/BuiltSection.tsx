import { products } from "../../data/products";
import { proofByKey } from "../../data/proof";

/**
 * Built by Decifer: the three public products as evidence of capability,
 * never as a commercial offer on this site. Figures come from proof.ts
 * only, and the paper-account statement is mandatory wherever the market
 * system is mentioned (proof.ts hard rule).
 */

const figures = ["monthsLive", "scheduledJobs", "integrations", "testFunctions"] as const;

export default function BuiltSection() {
  return (
    <section className="pb-7 sm:pb-10">
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
            <div className="mt-7 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {figures.map((k) => {
                const p = proofByKey[k];
                return (
                  <div key={k} className="bg-canvas px-5 py-5">
                    <p className="text-2xl font-semibold tracking-tight text-ink">{p.value}</p>
                    <p className="mt-1 text-sm text-body">{p.label}</p>
                  </div>
                );
              })}
            </div>
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
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              The market intelligence system trades a broker paper account, not
              real money. It has never submitted a live order and is not a
              real-money track record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
