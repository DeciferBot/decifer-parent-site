export default function Home() {
  return (
    <>
      {/* ───────────────────────────────────────────────
          HERO
      ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute -left-[10%] -top-[20%] h-[70%] w-[55%] orb-blue opacity-30" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[60%] w-[50%] orb-violet opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          {/* Badge */}
          <div className="anim-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/6 px-4 py-1.5">
            <span className="dot-live h-1.5 w-1.5 flex-shrink-0 rounded-full bg-live" />
            <span className="text-xs font-medium tracking-wide text-brand">
              AI Intelligence Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up-1 mb-6 text-5xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Make sense of
            <br />
            <span className="gradient-text">complex worlds.</span>
          </h1>

          {/* Subheadline */}
          <p className="anim-fade-up-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Decifer uses AI-assisted intelligence to reduce noise, organise
            context, and explain what matters, starting with markets and
            learning.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="w-full rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-200 hover:bg-brand/90 sm:w-auto"
            >
              Explore Products
            </a>
            <a
              href="#method"
              className="w-full rounded-xl border border-line px-7 py-3.5 text-sm font-semibold text-muted transition-all duration-200 hover:border-muted hover:text-ink sm:w-auto"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Scroll caret */}
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

      {/* ───────────────────────────────────────────────
          PROBLEM
      ─────────────────────────────────────────────── */}
      <section className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              The Problem
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Complexity is the default.
              <br />
              Clarity is rare.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
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
                    <path d="M2 20c2-3 4-5 6-5s4 5 6 5 4-5 6-5" opacity="0.35" />
                  </svg>
                ),
                title: "Too much noise",
                desc: "Data, headlines, and signals compete for attention. Volume has far outpaced the capacity to comprehend.",
              },
              {
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
                title: "Missing context",
                desc: "Individual facts are rarely meaningful in isolation. Without context, information misleads as often as it helps.",
              },
              {
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
                    <circle
                      cx="14"
                      cy="14"
                      r="5.5"
                      opacity="0.3"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r="2"
                      fill="currentColor"
                      stroke="none"
                      opacity="0.35"
                    />
                    <path d="M14 4v2M14 22v2M4 14h2M22 14h2" opacity="0.35" />
                  </svg>
                ),
                title: "No clear signal",
                desc: "When everything appears urgent, nothing is. Real insight is buried under the weight of undifferentiated output.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:border-faint"
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

      {/* ───────────────────────────────────────────────
          METHOD
      ─────────────────────────────────────────────── */}
      <section id="method" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The Decifer Method
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Every Decifer product runs on the same three-stage process.
              Consistent, transparent, and built for clarity.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line — desktop */}
            <div className="absolute left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] top-6 hidden h-px bg-line md:block" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Collect",
                  desc: "We gather signals from structured, verified sources across markets, academic content, and curated data streams.",
                  ring: "border-brand/40 bg-brand/6 text-brand",
                },
                {
                  step: "02",
                  title: "Contextualise",
                  desc: "AI models map relationships and meaning, surfacing what is relevant and filtering what is redundant.",
                  ring: "border-learn/40 bg-learn/6 text-learn",
                },
                {
                  step: "03",
                  title: "Clarify",
                  desc: "Plain-language intelligence is delivered to you, structured and ready to act on or learn from.",
                  ring: "border-live/40 bg-live/6 text-live",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex flex-col items-start md:items-center md:text-center"
                >
                  <div
                    className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-bold ${s.ring}`}
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

      {/* ───────────────────────────────────────────────
          PRODUCTS
      ─────────────────────────────────────────────── */}
      <section id="products" className="bg-canvas py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              Products
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Intelligence, applied.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Each Decifer product applies the same method to a specific domain.
              Start with one. Access more as they launch.
            </p>
          </div>

          {/* Primary product cards */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Decifer Trading */}
            <div className="glow-brand cursor-pointer rounded-2xl bg-surface p-8 transition-all duration-300">
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
              <h3 className="mb-3 text-2xl font-bold text-ink">
                Decifer Trading
              </h3>
              <p className="mb-6 leading-relaxed text-muted">
                Market intelligence in plain English. Understand what markets
                are doing and why, without the noise of raw data or commentary.
              </p>
              <a
                href="https://decifertrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink"
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
            <div className="glow-learn cursor-pointer rounded-2xl bg-surface p-8 transition-all duration-300">
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
              <h3 className="mb-3 text-2xl font-bold text-ink">
                Decifer Learning
              </h3>
              <p className="mb-6 leading-relaxed text-muted">
                AI-assisted learning for children and parents. Clear
                explanations, real context, and support that adapts to each
                learner.
              </p>
              <a
                href="https://deciferlearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-learn transition-colors hover:text-ink"
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

          {/* Coming soon cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { name: "Decifer Money", desc: "Financial clarity for individuals and families." },
              { name: "Decifer World", desc: "Global events and geopolitics, made legible." },
              { name: "Decifer Work", desc: "Professional intelligence for teams and leaders." },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-line bg-surface/40 p-6 opacity-55"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted">
                    {p.name}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-faint">
                    Coming soon
                  </span>
                </div>
                <p className="text-xs text-faint">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          TRUST AND SAFETY
      ─────────────────────────────────────────────── */}
      <section id="trust" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
              Trust and Safety
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built to be trusted.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              We set clear boundaries so you always know what Decifer is and is
              not.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                color: "text-brand",
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
                title: "No financial advice",
                desc: "Decifer provides intelligence, not recommendations. Nothing on our platform should be construed as financial, investment, or trading advice.",
              },
              {
                color: "text-learn",
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
                    <path d="M11 7v4.5l3 3" />
                  </svg>
                ),
                title: "No outcome guarantees",
                desc: "We support learning, not replace teachers. Decifer Learning helps learners build understanding. We make no claims about academic results.",
              },
              {
                color: "text-live",
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
                title: "Child safety first",
                desc: "Our learning tools are built for families. All content is age-appropriate, supervised, and designed with child protection at the centre.",
              },
              {
                color: "text-muted",
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
                title: "AI transparency",
                desc: "We explain our sources and confidence levels. When AI generates an insight, we show where it came from and how certain the model is.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-faint"
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

      {/* ───────────────────────────────────────────────
          FINAL CTA
      ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
        <div className="absolute -bottom-1/4 -right-1/4 h-[70%] w-[60%] orb-blue opacity-10" />
        <div className="absolute -left-1/4 -top-1/4 h-[60%] w-[50%] orb-violet opacity-8" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Ready to make sense of it?
          </h2>
          <p className="mb-10 text-lg text-muted">
            Join early users exploring market intelligence and AI-assisted
            learning.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/20 transition-all duration-200 hover:bg-brand/90"
          >
            Get Early Access
          </a>
          <p className="mt-5 text-sm text-faint">
            No commitment. Cancel any time.
          </p>
        </div>
      </section>
    </>
  );
}
