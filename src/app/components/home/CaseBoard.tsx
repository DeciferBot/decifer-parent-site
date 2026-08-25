import Link from "next/link";
import Icon, { type IconName } from "../Icon";

/**
 * The hero board: the industry, the problem, and what solved it. Nothing
 * else.
 *
 * It used to carry a before/after line and a proof stat per row, and a
 * reader with no context learned very little from either. The stat column
 * answered "how was this built" (eval scores, test counts, solvers) rather
 * than "what changed for the business", and the two Decifer products led
 * with what they cannot claim. Both belong on the case page, where there is
 * room to earn them. Here a stranger gets one sentence they recognise as
 * their own problem, and the thing that fixed it.
 *
 * Every row is a published case shape (caseShapes.ts), in the same order.
 * The mechanism label is that case's leading serviceKey in plain words, so
 * the counselling row correctly reads as automation: its whole point is
 * that no client ever meets a model.
 */

type Row = {
  sector: string;
  icon: IconName;
  /** Accent token suffix; see --color-a-* in globals.css. */
  hue: string;
  /** The problem, then what happens instead. One short sentence each. */
  problem: string;
  solved: string;
  /** What did the work, in the words a buyer would use. */
  mechanism: string;
};

const rows: Row[] = [
  {
    sector: "Hospitality and catering",
    icon: "catering",
    hue: "amber",
    problem: "Quoting a party took a phone call and a day.",
    solved: "Customers now price it themselves, online.",
    mechanism: "Workflow automation",
  },
  {
    sector: "Group marketing",
    icon: "group",
    hue: "teal",
    problem: "Nine companies, nine sets of numbers.",
    solved: "Leadership reads one view, refreshed nightly.",
    mechanism: "Reporting",
  },
  {
    sector: "Events management",
    icon: "events",
    hue: "plum",
    problem: "One host answering guest questions at all hours.",
    solved: "An assistant answers them from the real plan.",
    mechanism: "AI agent",
  },
  {
    sector: "Healthcare and counselling",
    icon: "health",
    hue: "green",
    problem: "Clinical hours lost to intake paperwork.",
    solved: "Enquirers get a structured report in minutes.",
    mechanism: "Workflow automation",
  },
  {
    sector: "Creator and personal brand",
    icon: "creator",
    hue: "orange",
    problem: "The whole business ran on one person's memory.",
    solved: "Publishing and outreach run to a schedule.",
    mechanism: "AI agents",
  },
  {
    sector: "Financial markets intelligence",
    icon: "markets",
    hue: "blue",
    problem: "Live data arriving faster than anyone can read it.",
    solved: "Ingested, cross-checked and written up as a decision brief, around the clock, unattended.",
    mechanism: "Autonomous pipeline",
  },
  {
    sector: "Education",
    icon: "education",
    hue: "violet",
    problem: "Practice at home never matched what school taught.",
    solved: "Curriculum lessons, and a parent view of the weak spots.",
    mechanism: "AI product",
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
            <p className="mt-1 text-[0.8125rem] leading-snug text-on-dark-2">
              {r.problem}{" "}
              <span className="text-on-dark">{r.solved}</span>
            </p>
          </div>
          <span className="board-st">{r.mechanism}</span>
        </div>
      ))}
      <p className="border-t border-line-dark px-4.5 py-3 text-[0.78125rem] text-on-dark-2">
        Client work is named where the client has agreed in writing. Our own
        products are named.{" "}
        <Link href="/work" className="text-on-dark underline underline-offset-2">
          Read every case
        </Link>
      </p>
    </aside>
  );
}
