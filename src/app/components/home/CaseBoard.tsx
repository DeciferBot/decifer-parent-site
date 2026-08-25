import Link from "next/link";
import Icon, { type IconName } from "../Icon";

/**
 * The hero board: cases solved, by industry, not system uptime. Every row
 * is a published case shape (caseShapes.ts), in the same order, including
 * the two Decifer products that carry their own industry: financial
 * markets intelligence and education.
 *
 * Each row reads as one sentence of change: the situation before, then the
 * arrow, then what is true now. The stat on the right is the complexity
 * that had to be handled to get there, so the board never reads as a claim
 * without a cost. The industry icon and its hue are the same ones used
 * wherever that industry appears on the site.
 */

type Row = {
  sector: string;
  icon: IconName;
  /** Accent token suffix; see --color-a-* in globals.css. */
  hue: string;
  before: string;
  after: string;
  afterSub: string;
  stat: string;
};

const rows: Row[] = [
  {
    sector: "Hospitality and catering",
    icon: "catering",
    hue: "amber",
    before: "30 years of orders, priced from memory",
    after: "Self-served quotes",
    afterSub: "was a phone call and a day",
    stat: "719 documents, one record",
  },
  {
    sector: "Group marketing",
    icon: "group",
    hue: "teal",
    before: "Nine companies, no shared view",
    after: "One board-level view",
    afterSub: "refreshed every night",
    stat: "5 platforms, one fact store",
  },
  {
    sector: "Events management",
    icon: "events",
    hue: "plum",
    before: "A host answering the same questions at 2am",
    after: "Zero invented answers",
    afterSub: "seven of forty were refusals",
    stat: "40 / 40 on a graded eval",
  },
  {
    sector: "Healthcare and counselling",
    icon: "health",
    hue: "green",
    before: "Clinical time lost to intake admin",
    after: "A report within minutes",
    afterSub: "no AI a client can touch",
    stat: "3 validated instruments",
  },
  {
    sector: "Creator and personal brand",
    icon: "creator",
    hue: "orange",
    before: "One person's memory ran the whole business",
    after: "Publishing runs on a schedule",
    afterSub: "the blog fails closed if a check does not pass",
    stat: "Ad spend hard-capped in code",
  },
  {
    sector: "Financial markets intelligence",
    icon: "markets",
    hue: "blue",
    before: "Confident answers, invented numbers",
    after: "In production since March 2026",
    afterSub: "paper account, never a live order",
    stat: "9,064 automated tests",
  },
  {
    sector: "Education",
    icon: "education",
    hue: "violet",
    before: "A tutor that is fluent and sometimes wrong",
    after: "Curriculum practice a parent can see",
    afterSub: "no claim about grades, ever",
    stat: "Marking by solver, not by model",
  },
];

export default function CaseBoard() {
  return (
    <aside className="board" aria-label="Processes Decifer has taken to production">
      <div className="flex items-center justify-between px-4.5 py-3.5">
        <span className="label flex items-center gap-2.5 text-on-dark-2">
          <span className="board-live-dot" aria-hidden="true" />
          Taken to production
        </span>
        <span className="text-[0.8125rem] text-on-dark-2">7 industries, one method</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.sector}
          className="board-row"
          style={
            {
              "--i": i,
              "--accent": `var(--color-a-${r.hue}-on-dark)`,
            } as React.CSSProperties
          }
        >
          <span className="icon-tile icon-tile-sm icon-tile-dark">
            <Icon name={r.icon} size={16} />
          </span>
          <div className="min-w-0">
            <p className="text-[0.9375rem] font-medium leading-snug">{r.sector}</p>
            <p className="mt-1 text-[0.78125rem] leading-snug text-on-dark-2">
              {r.before}
            </p>
            <p className="mt-1 text-[0.78125rem] leading-snug">
              <span className="board-arrow" aria-hidden="true">
                →
              </span>
              <span className="text-on-dark">{r.after}</span>
              <span className="text-on-dark-2">, {r.afterSub}</span>
            </p>
          </div>
          <span className="board-st">{r.stat}</span>
        </div>
      ))}
      <p className="border-t border-line-dark px-4.5 py-3 text-[0.78125rem] text-on-dark-2">
        Client work anonymised by default, named only by agreement. Our own
        products are named.{" "}
        <Link href="/work" className="text-on-dark underline underline-offset-2">
          Read every case
        </Link>
      </p>
    </aside>
  );
}
