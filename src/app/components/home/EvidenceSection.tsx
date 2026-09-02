import Reveal from "../Reveal";
import Figure from "../Figure";
import type { AccentHue } from "../../data/accents";

/**
 * Market-evidence band: the implementation gap in four verified figures.
 * Every figure here is external and cited. Do not add a statistic without a
 * primary source; the sources live in docs/REPOSITIONING_2026-08-24.md.
 *
 * These four are a COMPARISON, not a list, so they follow the figure-rail
 * rule in globals.css: ONE number each, and a claim of eight to twelve
 * words. That budget is the whole point. This band previously ran claims of
 * six, thirty-four, twenty-two and sixteen words, and one item carried two
 * numbers, so a reader read four separate boxes and never compared them.
 * Anything that will not fit the budget belongs in the line underneath, not
 * in a wider box. Every figure below is quoted exactly as published; only
 * the wording around it was cut.
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
    claim: "of enterprise AI pilots return nothing measurable.",
    source: "MIT, The GenAI Divide, 2025",
  },
  {
    hue: "amber",
    figure: "30%",
    claim: "of AI projects were forecast to be dropped after the pilot.",
    source: "Gartner, July 2024",
  },
  {
    hue: "teal",
    figure: "31%",
    claim: "of Gulf companies have scaled AI across the business.",
    source: "McKinsey, State of AI in GCC, 2025",
  },
  {
    hue: "blue",
    figure: "11%",
    claim: "of Gulf organisations trace 5% of earnings to AI.",
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
        <Reveal className="figure-rail mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Figure
              key={s.figure}
              value={s.figure}
              label={s.claim}
              source={s.source}
              hue={s.hue}
              index={i}
              tone="rail"
            />
          ))}
        </Reveal>
        {/* The context that used to bloat the third figure lives here, where
            it costs the comparison nothing. */}
        <p className="mt-10 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
          In the Gulf, 84% of companies now use AI in at least one function.
          Fewer than a third have got it running across the business. The gap
          is in implementation, not technology, and everything below is how we
          close it.
        </p>
      </div>
    </section>
  );
}
