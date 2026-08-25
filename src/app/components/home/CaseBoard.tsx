import Link from "next/link";

/**
 * The hero board: cases solved, by industry, not system uptime. Every row
 * is a published case shape (caseShapes.ts); the middle column names the
 * complexity, the right column names what changed. This is the value
 * story the hero headline promises, not an infrastructure dashboard.
 */

type Row = {
  sector: string;
  job: string;
  complexity: string;
  change: string;
  changeSub: string;
};

const rows: Row[] = [
  {
    sector: "Hospitality and catering",
    job: "30 years of orders, priced from memory",
    complexity: "719 documents, one record",
    change: "Self-served quotes",
    changeSub: "Was a phone call and a day",
  },
  {
    sector: "Group marketing",
    job: "Nine companies, no shared view",
    complexity: "5 platforms, one fact store",
    change: "One board-level view",
    changeSub: "Refreshed every night",
  },
  {
    sector: "Private events and travel",
    job: "A host, answering the same questions at 2am",
    complexity: "40 / 40 on a graded eval",
    change: "Zero invented answers",
    changeSub: "Seven of forty were refusals",
  },
  {
    sector: "Healthcare and counselling",
    job: "Clinical time lost to intake admin",
    complexity: "3 validated instruments",
    change: "A report within minutes",
    changeSub: "No AI a client can touch",
  },
  {
    sector: "Creator and personal brand",
    job: "One person's memory ran the whole business",
    complexity: "Ad spend hard-capped in code",
    change: "Publishing runs on a schedule",
    changeSub: "Blog fails closed if a check does not pass",
  },
];

export default function CaseBoard() {
  return (
    <aside className="board" aria-label="Processes Decifer has taken to production">
      <div className="flex items-center justify-between px-4.5 py-3.5">
        <span className="label text-on-dark-2">Taken to production</span>
        <span className="text-[0.8125rem] text-on-dark-2">5 industries, one method</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.sector} className="board-row" style={{ "--i": i } as React.CSSProperties}>
          <div>
            <p className="text-[0.9375rem] font-medium leading-snug">{r.sector}</p>
            <p className="mt-0.5 text-[0.78125rem] leading-snug text-on-dark-2">{r.job}</p>
          </div>
          <div>
            <p className="text-[0.9375rem]">{r.change}</p>
            <p className="mt-0.5 text-[0.78125rem] text-on-dark-2">{r.changeSub}</p>
          </div>
          <span className="board-st">{r.complexity}</span>
        </div>
      ))}
      <p className="border-t border-line-dark px-4.5 py-3 text-[0.78125rem] text-on-dark-2">
        Clients are named where they have agreed in writing.{" "}
        <Link href="/work" className="text-on-dark underline underline-offset-2">
          Read every case
        </Link>
      </p>
    </aside>
  );
}
