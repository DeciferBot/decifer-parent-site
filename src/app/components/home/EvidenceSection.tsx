import Reveal from "../Reveal";
import Figure from "../Figure";
import type { AccentHue } from "../../data/accents";

/**
 * Market-evidence band: the implementation gap in four verified figures.
 * Every figure here is external and cited. Do not add a statistic without a
 * primary source; the sources live in docs/REPOSITIONING_2026-08-24.md.
 */

const stats: {
  figure: string;
  claim: string;
  source: string;
  hue: AccentHue;
}[] = [
  {
    hue: "orange",
    figure: "95%",
    claim:
      "of enterprise GenAI pilots produce no measurable P&L return.",
    source: "MIT, The GenAI Divide: State of AI in Business, 2025",
  },
  {
    hue: "amber",
    figure: "30%",
    claim:
      "of GenAI projects would be abandoned after proof of concept by the end of 2025, Gartner predicted, blaming poor data, weak controls, rising costs or unclear business value.",
    source: "Gartner, July 2024",
  },
  {
    hue: "teal",
    figure: "84% / 31%",
    claim:
      "In the GCC, most companies now use AI in at least one function. Fewer than a third have scaled it across the business.",
    source: "McKinsey, The State of AI in GCC Countries, 2025",
  },
  {
    hue: "blue",
    figure: "11%",
    claim:
      "of GCC organisations qualify as value realisers, able to attribute at least 5% of earnings to AI.",
    source: "McKinsey, same study",
  },
];

export default function EvidenceSection() {
  return (
    <section className="band band-tight band-tint">
      <div className="container-x">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="label">The AI implementation gap</h2>
          <span className="text-sm text-muted">Published research, cited</span>
        </div>
        <Reveal className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Figure
              key={s.figure}
              value={s.figure}
              label={s.claim}
              source={s.source}
              hue={s.hue}
              index={i}
            />
          ))}
        </Reveal>
        <p className="mt-5 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
          The gap is in implementation, not technology. Everything below is
          how we close it.
        </p>
      </div>
    </section>
  );
}
