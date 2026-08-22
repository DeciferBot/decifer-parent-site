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
              I started DECIFER to answer a question I kept meeting in
              different places: there is more information than ever, and less
              understanding. The first answers were products. A market read for
              ordinary people. A learning companion for children. A plain
              account of what is working for a marketing team.
            </p>
            <p>
              Building and running those taught me what it actually takes to
              keep AI working in production, rather than demonstrating it. Then
              other businesses began asking for the same thing.
            </p>
            <p>
              So the products became the lab, and client work gets the version
              that has already been tested on our own money. I am in Dubai, I
              answer enquiries myself, and I will tell you when AI is the wrong
              answer.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cta/35 bg-cta/10 text-sm font-bold tracking-wide text-cta">
              AC
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Amit Chopra</div>
              <div className="text-xs text-muted">Founder, DECIFER. Dubai, UAE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
