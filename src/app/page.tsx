import EarlyAccessForm from "./components/EarlyAccessForm";

export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 hero-beam" />
        <div className="absolute inset-0 hero-accent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="anim-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/6 px-4 py-1.5">
            <span className="dot-live h-1.5 w-1.5 flex-shrink-0 rounded-full bg-live" />
            <span className="text-xs font-medium tracking-wide text-brand">
              Early Access Open
            </span>
          </div>

          <h1 className="anim-fade-up-1 mb-6 font-display text-5xl font-normal leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Make sense of
            <br />
            <span className="gradient-text italic">complex worlds.</span>
          </h1>

          <p className="anim-fade-up-2 mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Most intelligence tools give you more data. DECIFER gives you
            understanding. We combine structured sources, domain logic, and
            AI-assisted interpretation to produce plain-language intelligence
            on markets, learning, and the world.
          </p>

          <p className="anim-fade-up-2 mx-auto mb-10 max-w-xl text-sm text-faint">
            Not financial advice. Not a substitute for teachers. Just clarity,
            applied carefully.
          </p>

          <div className="anim-fade-up-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#early-access"
              className="w-full rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-200 hover:bg-brand/90 sm:w-auto"
            >
              Join Early Access
            </a>
            <a
              href="#products"
              className="w-full rounded-xl border border-muted/30 px-7 py-3.5 text-sm font-semibold text-muted transition-all duration-200 hover:border-muted/60 hover:text-ink sm:w-auto"
            >
              Explore Products
            </a>
          </div>
        </div>

        <div className="anim-fade-up-4 absolute bottom-8 left-1/2 -translate-x-1/2 text-faint">
          <svg
            className="caret-bounce"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM
      ────────────────────────────────────────── */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="opacity-40">[ </span>The Problem<span className="opacity-40"> ]</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              More information.
              <br />
              Less understanding.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              The volume of data has outpaced our ability to interpret it. And
              raw AI, without trusted context, makes this worse.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                scrollClass: "scroll-reveal-1",
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 14c2-5 4-9 6-9s4 9 6 9 4-9 6-9" />
                    <path
                      d="M2 20c2-3 4-5 6-5s4 5 6 5 4-5 6-5"
                      opacity="0.35"
                    />
                  </svg>
                ),
                title: "Too much noise",
                desc: "Data, headlines, and alerts compete for attention. Volume has far outpaced the human capacity to process what actually matters.",
              },
              {
                scrollClass: "scroll-reveal-2",
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <circle cx="14" cy="14" r="10" />
                    <path
                      d="M14 9v5.5l3.5 3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 4.5A10 10 0 0 1 24 14"
                      opacity="0.3"
                      strokeDasharray="2 2"
                    />
                  </svg>
                ),
                title: "AI without guardrails",
                desc: "A language model trained on the internet can summarise, but it can also hallucinate, oversimplify, or miss what is domain-critical. Confidence without accuracy is dangerous.",
              },
              {
                scrollClass: "scroll-reveal-3",
                icon: (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <rect x="4" y="4" width="8" height="8" rx="1.5" />
                    <rect x="16" y="4" width="8" height="8" rx="1.5" />
                    <rect x="4" y="16" width="8" height="8" rx="1.5" />
                    <rect
                      x="16"
                      y="16"
                      width="8"
                      height="8"
                      rx="1.5"
                      opacity="0.25"
                      strokeDasharray="2 2"
                    />
                    <path d="M8 12v4M12 8h4M12 20h4" opacity="0.4" />
                  </svg>
                ),
                title: "No trusted context",
                desc: "Individual facts mean nothing in isolation. Without structured, verified context, even accurate information leads to poor decisions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`group rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:border-faint ${card.scrollClass ?? ""}`}
              >
                <div className="mb-5 text-muted transition-colors duration-300 group-hover:text-brand">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          METHOD
      ────────────────────────────────────────── */}
      <section id="method" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="opacity-40">[ </span>How It Works<span className="opacity-40"> ]</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The DECIFER Approach
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Every DECIFER product runs on the same three-stage process. Not
              just AI generation, but structured interpretation with verified
              sources at every step.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] top-6 hidden h-px bg-gradient-to-r from-brand/40 via-learn/30 to-live/40 md:block" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Collect",
                  desc: "We gather signals from structured, verified sources. Market data, academic content, curated feeds. No scraping rumour sites or unverified commentary.",
                  ring: "border-brand/40 bg-brand/6 text-brand",
                  scrollClass: "scroll-reveal-1",
                },
                {
                  step: "02",
                  title: "Contextualise",
                  desc: "Domain-specific AI models map relationships and meaning. The model knows the rules of the domain, which sources matter, and what to filter out.",
                  ring: "border-learn/40 bg-learn/6 text-learn",
                  scrollClass: "scroll-reveal-2",
                },
                {
                  step: "03",
                  title: "Clarify",
                  desc: "Plain-language intelligence is delivered to you. Every output is source-referenced and confidence-bounded. You know what DECIFER knows and does not know.",
                  ring: "border-live/40 bg-live/6 text-live",
                  scrollClass: "scroll-reveal-3",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className={`flex flex-col items-start md:items-center md:text-center ${s.scrollClass}`}
                >
                  <div
                    className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold ${s.ring}`}
                  >
                    {s.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PRODUCTS
      ────────────────────────────────────────── */}
      <section id="products" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="opacity-40">[ </span>Products<span className="opacity-40"> ]</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Intelligence, applied.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Each DECIFER product applies the same method to a specific domain.
              Start with one. More are on the way.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Decifer Trading */}
            <div className="glow-brand scroll-reveal-1 rounded-2xl bg-surface p-8 transition-all duration-300">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/8">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="#3d7eff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 16l5-5 4 3.5 7-9" />
                    <path d="M17 7h3v3" opacity="0.6" />
                  </svg>
                </div>
                <span className="rounded-full border border-live/30 bg-live/8 px-3 py-1 text-xs font-semibold text-live">
                  Live
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-ink">
                Decifer Trading
              </h3>
              <p className="mb-4 text-sm font-medium text-brand">
                Market intelligence in plain English.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Understand what markets are doing, why they are moving, and
                where meaningful signals are forming. DECIFER Trading draws on
                structured market data and domain-specific AI to give you
                context, not noise. It is intelligence. It is not financial
                advice.
              </p>
              <a
                href="https://decifertrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink"
                data-event="trading_clicked"
              >
                Visit Decifer Trading
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>

            {/* Decifer Learning */}
            <div className="glow-learn scroll-reveal-2 rounded-2xl bg-surface p-8 transition-all duration-300">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-learn/20 bg-learn/8">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="#7c5ce0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
                    <path d="M8 22V12h6v10" />
                  </svg>
                </div>
                <span className="rounded-full border border-learn/30 bg-learn/8 px-3 py-1 text-xs font-semibold text-learn">
                  Beta
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-ink">
                Decifer Learning
              </h3>
              <p className="mb-4 text-sm font-medium text-learn">
                AI-assisted learning for children and parents.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Curriculum-linked, age-appropriate, and designed around how
                children actually learn. DECIFER Learning uses AI to make
                explanations clearer, track understanding, and help parents stay
                involved. It supports teachers. It does not replace them.
              </p>
              <a
                href="https://deciferlearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-learn transition-colors hover:text-ink"
                data-event="learning_clicked"
              >
                Visit Decifer Learning
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coming soon */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: "Decifer Money",
                desc: "Personal finance intelligence for individuals and families.",
              },
              {
                name: "Decifer World",
                desc: "Global events, geopolitics, and macro context, made legible.",
              },
              {
                name: "Decifer Work",
                desc: "Professional and business intelligence for teams and leaders.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="group rounded-xl border border-line/60 bg-surface/30 p-6 transition-colors duration-200 hover:border-line"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-faint group-hover:text-muted transition-colors duration-200">
                    {p.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/50 px-2.5 py-0.5 text-xs text-faint">
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="0.75" y="4.75" width="7.5" height="5.5" rx="1.25" />
                      <path d="M2.5 4.75V3.25a2 2 0 0 1 4 0v1.5" />
                    </svg>
                    Coming soon
                  </span>
                </div>
                <p className="text-xs text-faint/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          TRUST AND SAFETY
      ────────────────────────────────────────── */}
      <section id="trust" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="opacity-40">[ </span>Trust and Safety<span className="opacity-40"> ]</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              We set clear limits.
              <br />
              On purpose.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Clear boundaries build trust. These are not disclaimers bolted on
              at the end. They are part of how DECIFER works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                scrollClass: "scroll-reveal-1",
                color: "text-brand",
                bg: "bg-brand/5 border-brand/15",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M11 2L3 6v5.5C3 15.6 6.6 19.5 11 21c4.4-1.5 8-5.4 8-9.5V6l-8-4z" />
                    <path d="M7.5 11l2.5 2.5 4-4" />
                  </svg>
                ),
                title: "Intelligence, not financial advice",
                desc: "DECIFER Trading provides structured market intelligence to help you understand what is happening. It does not provide financial, investment, or trading recommendations. Financial markets carry real risk. All decisions are yours.",
              },
              {
                scrollClass: "scroll-reveal-2",
                color: "text-learn",
                bg: "bg-learn/5 border-learn/15",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
                    <path d="M8 14l2 2 4-4" />
                  </svg>
                ),
                title: "Support, not a substitute for teachers",
                desc: "Decifer Learning supports children and parents in building understanding. It does not replace qualified teachers, tutors, or formal education. We make no claims about academic outcomes.",
              },
              {
                scrollClass: "scroll-reveal-1",
                color: "text-live",
                bg: "bg-live/5 border-live/15",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 22c5.5 0 9.5-4 9.5-9V3.5L12 2 3 3.5V13c0 5 4 9 9 9z" />
                    <path d="M8 11.5l2.5 2.5 4-4" />
                  </svg>
                ),
                title: "Child safety is non-negotiable",
                desc: "Decifer Learning is built for families. All content is age-appropriate, curriculum-linked, and supervised. We do not collect unnecessary data from children. Parental involvement is part of the design.",
              },
              {
                scrollClass: "scroll-reveal-2",
                color: "text-muted",
                bg: "bg-surface border-line",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="9" />
                    <circle cx="11" cy="11" r="3.5" opacity="0.4" />
                    <path d="M11 2v2M11 18v2M2 11h2M18 11h2" opacity="0.4" />
                  </svg>
                ),
                title: "Transparent AI, bounded outputs",
                desc: "Every AI-generated output in DECIFER is source-referenced and confidence-bounded. We tell you what the model used, how confident it is, and where it may be limited. We do not pretend AI is infallible.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`flex gap-5 rounded-2xl border p-7 transition-colors duration-300 ${item.bg} ${item.scrollClass ?? ""}`}
              >
                <div className={`mt-0.5 flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          FOUNDER
      ────────────────────────────────────────── */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="scroll-reveal relative rounded-2xl border border-line bg-surface p-10 sm:p-14 border-l-2 border-l-brand/40">
            {/* Large open-quote mark */}
            <div
              className="absolute -top-6 left-10 select-none font-display text-[5.5rem] font-normal leading-none text-brand/35 italic"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p className="relative z-10 font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
              I built DECIFER because I kept seeing the same problem. Intelligent
              people, overwhelmed by information, making poor decisions, not from
              lack of effort, but from lack of clarity. Markets, learning, money,
              the world: in every domain the signal is buried. DECIFER is my
              attempt to fix that, carefully, domain by domain.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-sm font-bold tracking-wide text-brand">
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

      {/* ──────────────────────────────────────────
          EARLY ACCESS
      ────────────────────────────────────────── */}
      <section id="early-access" className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="absolute inset-0 hero-beam opacity-40" />
        <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="opacity-40">[ </span>Early Access<span className="opacity-40"> ]</span>
            </div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Get early access.
            </h2>
            <p className="text-base text-muted">
              We are opening access gradually. Tell us which product interests
              you most and we will be in touch when your place is ready.
            </p>
          </div>

          <EarlyAccessForm />

          <p className="mt-6 text-center text-xs text-faint">
            No payment required for early access. No spam. Read our{" "}
            <a href="/legal/privacy" className="text-muted hover:text-ink underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
