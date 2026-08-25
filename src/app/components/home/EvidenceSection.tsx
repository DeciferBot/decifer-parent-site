import Reveal from "../Reveal";

/**
 * Market-evidence band: the implementation gap in four verified figures.
 * Every figure here is external and cited. Do not add a statistic without a
 * primary source; the sources live in docs/REPOSITIONING_2026-08-24.md.
 */

const stats = [
  {
    figure: "95%",
    claim:
      "of enterprise GenAI pilots produce no measurable P&L return.",
    source: "MIT, The GenAI Divide: State of AI in Business, 2025",
  },
  {
    figure: "30%",
    claim:
      "of GenAI projects would be abandoned after proof of concept by the end of 2025, Gartner predicted, blaming poor data, weak controls, rising costs or unclear business value.",
    source: "Gartner, July 2024",
  },
  {
    figure: "84% adopt, 31% scale",
    claim:
      "In the GCC, most companies now use AI in at least one function. Fewer than a third have scaled it across the business.",
    source: "McKinsey, The State of AI in GCC Countries, 2025",
  },
  {
    figure: "11%",
    claim:
      "of GCC organisations qualify as value realisers, able to attribute at least 5% of earnings to AI.",
    source: "McKinsey, same study",
  },
];

export default function EvidenceSection() {
  return (
    <section className="pb-7 sm:pb-10">
      <div className="container-x">
        <div className="panel">
          <div className="panel-head">
            <h2 className="label">The AI implementation gap</h2>
            <span className="text-sm text-muted">Published research, cited</span>
          </div>
          <Reveal className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.figure}
                className="bg-canvas px-6 py-7"
                style={{ "--i": i } as React.CSSProperties}
              >
                <p className="text-[1.75rem] font-semibold leading-none tracking-tight text-ink tabular-nums">
                  {s.figure}
                </p>
                <p className="t-body mt-3">{s.claim}</p>
                <p className="mt-3 text-xs text-muted">{s.source}</p>
              </div>
            ))}
          </Reveal>
          <p className="border-t border-line px-6 py-4 text-sm text-body">
            The gap is not the technology. It is the implementation, which is
            a solvable problem and the one we are built for. Everything below
            is how we close it.
          </p>
        </div>
      </div>
    </section>
  );
}
