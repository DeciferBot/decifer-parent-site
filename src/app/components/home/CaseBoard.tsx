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
 * Each row is written as the capability, not the anecdote: the problem is
 * phrased so a reader in another industry recognises their own, because the
 * mechanism is what transfers. "Live data arriving faster than anyone can
 * read it" is a markets problem, a logistics problem and a claims problem,
 * and the same pipeline answers all three.
 *
 * Counts stay off this board. A figure needs its method and its permission
 * (see proof.ts), which is a case-page job; here a wrong one would be the
 * first thing a stranger reads.
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
    problem: "Thirty years of pricing knowledge locked in one person's head.",
    solved: "Turned into a quoting engine the customer runs themselves.",
    mechanism: "Workflow automation",
  },
  {
    sector: "Group marketing",
    icon: "group",
    hue: "teal",
    problem: "Every company keeping its own numbers, none of them comparable.",
    solved: "One set everyone reads, refreshed nightly, computed in code.",
    mechanism: "Automated reporting",
  },
  {
    sector: "Events management",
    icon: "events",
    hue: "plum",
    problem: "The same questions asked over and over, at all hours.",
    solved: "An agent answers from live data, and refuses what it cannot verify.",
    mechanism: "AI agent",
  },
  {
    sector: "Healthcare and counselling",
    icon: "health",
    hue: "green",
    problem: "Skilled hours lost to intake paperwork.",
    solved: "The admin runs itself, with no AI anywhere a client can meet it.",
    mechanism: "Workflow automation",
  },
  {
    sector: "Creator and personal brand",
    icon: "creator",
    hue: "orange",
    problem: "The whole operation ran on one person's memory.",
    solved: "Agents run it to a schedule, inside limits they cannot exceed.",
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
    problem: "Guidance that sounds right and is sometimes wrong.",
    solved: "The model explains; the arithmetic decides what is correct.",
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
