import Link from "next/link";
import { products } from "../../data/products";

/**
 * The homepage's central claim: domain by domain, what's actually been
 * solved, stated as an outcome, not a build log. Replaces the old
 * ProductsSection + WorkSection + capability teaser, which were three
 * separate lenses on the same six pieces of evidence. Every href resolves
 * to a real product or a real, published case (/work/[slug]).
 */

const productByKey = Object.fromEntries(products.map((p) => [p.key, p]));

type Solved = {
  domain: string;
  complexity: string;
  outcome: string;
  href: string;
  external?: boolean;
};

const solved: Solved[] = [
  {
    domain: "Financial market intelligence",
    complexity: "Multiple live market data sources, reconciled every day",
    outcome: "A plain-English daily read, running unattended for 5 months straight",
    href: productByKey.trading.href!,
    external: true,
  },
  {
    domain: "Marketing intelligence",
    complexity: "Nine businesses, no shared view, and 16 platforms feeding it",
    outcome: "One board-level view, refreshed nightly instead of assembled quarterly",
    href: "/work/group-marketing-one-view",
  },
  {
    domain: "A guided learning companion",
    complexity: "The UK National Curriculum, and maths checked by a symbolic solver, not a guess",
    outcome: "Practice and feedback that cannot mark a wrong answer as right",
    href: productByKey.learning.href!,
    external: true,
  },
  {
    domain: "Catering operations",
    complexity: "719 documents and 30 years of memory, unified into one record",
    outcome: "Quotes that now start from a number the customer built themselves",
    href: "/work/catering-quotes-and-kitchen",
  },
  {
    domain: "A travel and events concierge",
    complexity: "A live plan, a concierge in two channels, one audit log",
    outcome: "40 of 40 on a graded eval, seven of them correct refusals",
    href: "/work/private-event-concierge",
  },
  {
    domain: "Clinical intake",
    complexity: "Three validated screening instruments, scored by arithmetic",
    outcome: "A structured report in minutes, with zero AI a client can touch",
    href: "/work/counselling-practice-intake",
  },
];

export default function SolvedSection() {
  return (
    <section id="solved" className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">What we&apos;ve solved</h2>
            <Link href="/capabilities" className="link text-sm">
              Where it transfers
            </Link>
          </div>
          <div className="grid gap-px bg-line md:grid-cols-2">
            {solved.map((s) => (
              <Link
                key={s.domain}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="row-link group flex flex-col gap-3 bg-panel p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="t-h3 text-ink">{s.domain}</h3>
                  <span className="mt-1.5 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-orange-text">
                    Solved
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{s.complexity}</p>
                <p className="mt-auto text-[0.9375rem] font-medium leading-snug text-ink">
                  {s.outcome}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-4">
            <p className="text-sm text-body">
              Each one is real and anonymised, or a live product you can open today.
            </p>
            <Link href="/contact" data-event="solved_panel_cta" className="btn btn-primary px-4 py-2.5 text-sm">
              Bring us the next one
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
