import SectionLabel from "../SectionLabel";

export default function FounderSection() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-8 text-center">
          <SectionLabel>Founder Note</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why DECIFER exists.
          </h2>
        </div>

        <div className="scroll-reveal relative rounded-2xl border border-line-strong border-l-cta/55 bg-surface p-10 sm:p-12 [border-left-width:3px]">
          <div
            className="absolute -top-7 left-9 select-none font-display text-[5.5rem] font-normal leading-none text-cta/30 italic"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="relative z-10 space-y-5 font-display text-xl leading-relaxed text-ink sm:text-[1.35rem]">
            <p>
              I built DECIFER because the same problem appears in different
              parts of life: people have access to more information than
              ever, but still struggle to make sense of it.
            </p>
            <p>
              A market screen, a learning app, a marketing dashboard, a report
              or an AI summary can all create the same feeling: there is too
              much to process and not enough clarity.
            </p>
            <p>
              DECIFER is being built to slow the noise down, apply structure,
              and explain what matters in plain English.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cta/35 bg-cta/10 text-sm font-bold tracking-wide text-cta">
              AC
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">
                Amit Chopra
              </div>
              <div className="text-xs text-muted">Founder, DECIFER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
