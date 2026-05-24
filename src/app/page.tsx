import DeciferMark from "./components/DeciferMark";
import EarlyAccessForm from "./components/EarlyAccessForm";

/* ── Section label component ──────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-faint">
      <span className="opacity-40">[ </span>
      {children}
      <span className="opacity-40"> ]</span>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO — The gateway
      ════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="absolute inset-0 hero-beam" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          {/* Bracket mark — the intelligence gateway */}
          <div className="anim-fade-up mb-8 flex justify-center">
            <div style={{ filter: "drop-shadow(0 0 20px rgba(240,90,40,0.30))" }}>
              <DeciferMark height={52} />
            </div>
          </div>

          {/* Category label */}
          <p className="anim-fade-up-1 mb-5 text-xs font-semibold uppercase tracking-widest text-faint">
            Structured Intelligence
          </p>

          {/* Headline */}
          <h1 className="anim-fade-up-1 mb-6 text-5xl font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            The layer between<br />
            noise and{" "}
            <span className="text-cta">understanding.</span>
          </h1>

          {/* Sub */}
          <p className="anim-fade-up-2 mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            DECIFER builds structured intelligence systems. We organise complex
            signals into plain-language context — domain by domain.
          </p>

          {/* Compliance */}
          <p className="anim-fade-up-2 mx-auto mb-10 max-w-xl text-sm text-faint">
            Not financial advice. Not a substitute for teachers. Clarity,
            applied carefully.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#early-access"
              className="w-full rounded-xl bg-cta px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/20 transition-opacity duration-200 hover:opacity-90 sm:w-auto"
            >
              Get early access
            </a>
            <a
              href="#products"
              className="w-full rounded-xl border border-muted/30 px-7 py-3.5 text-sm font-semibold text-muted transition-all duration-200 hover:border-muted/60 hover:text-ink sm:w-auto"
            >
              Explore the products
            </a>
          </div>
        </div>

        {/* Static scroll indicator */}
        <div className="anim-fade-up-4 absolute bottom-8 left-1/2 -translate-x-1/2 text-faint" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          NOISE — Why the world needs DECIFER
      ════════════════════════════════════════════ */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              More data.<br />Less understanding.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              The volume of information has far outpaced our ability to
              interpret it. Raw AI, without trusted structure, makes this worse.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                scrollClass: "scroll-reveal-1",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 14c2-5 4-9 6-9s4 9 6 9 4-9 6-9" />
                    <path d="M2 20c2-3 4-5 6-5s4 5 6 5 4-5 6-5" opacity="0.35" />
                  </svg>
                ),
                title: "Too much noise",
                desc: "Data, headlines, and alerts compete for attention. Volume has far outpaced the human capacity to identify what actually matters.",
              },
              {
                scrollClass: "scroll-reveal-2",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="14" cy="14" r="10" />
                    <path d="M14 9v5.5l3.5 3.5" />
                    <path d="M8 4.5A10 10 0 0 1 24 14" opacity="0.3" strokeDasharray="2 2" />
                  </svg>
                ),
                title: "AI without guardrails",
                desc: "A language model can summarise, but without domain structure it can hallucinate, oversimplify, or miss what is critical. Confident output without accurate context is dangerous.",
              },
              {
                scrollClass: "scroll-reveal-3",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="4" y="4" width="8" height="8" rx="1.5" />
                    <rect x="16" y="4" width="8" height="8" rx="1.5" />
                    <rect x="4" y="16" width="8" height="8" rx="1.5" />
                    <rect x="16" y="16" width="8" height="8" rx="1.5" opacity="0.25" strokeDasharray="2 2" />
                    <path d="M8 12v4M12 8h4M12 20h4" opacity="0.4" />
                  </svg>
                ),
                title: "No trusted context",
                desc: "Individual facts mean nothing in isolation. Without verified, structured context, even accurate information leads to poor decisions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`group rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:border-faint ${card.scrollClass}`}
              >
                <div className="mb-5 text-muted transition-colors duration-300 group-hover:text-cta">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          INTELLIGENCE ENGINE — Structure to clarity
      ════════════════════════════════════════════ */}
      <section id="method" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              DECIFER creates structure<br className="hidden sm:block" /> from signals.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Every DECIFER product runs on the same process. Not raw AI
              generation — structured interpretation with verified sources at
              every step.
            </p>
          </div>

          {/* Flow engine — 3 columns on desktop */}
          <div className="mb-16 overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr]">

              {/* Left: Signals in */}
              <div className="scroll-reveal-1 p-8 md:p-10">
                <div className="mb-6 flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest text-cta">
                    Signals in
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Market data and price feeds",
                    "News and catalyst events",
                    "Academic curriculum content",
                    "Domain rules and logic",
                    "Verified, structured sources",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <svg className="mt-0.5 flex-shrink-0 text-faint" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M2 6h8M6 2l4 4-4 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="hidden bg-line md:block" aria-hidden="true" />

              {/* Center: DECIFER process */}
              <div className="scroll-reveal flex flex-col items-center justify-center gap-7 border-y border-line p-8 md:border-y-0 md:p-10">
                <div style={{ filter: "drop-shadow(0 0 14px rgba(240,90,40,0.28))" }}>
                  <DeciferMark size="lg" />
                </div>

                <div className="w-full space-y-0">
                  {[
                    { step: "01", label: "Collect", ring: "border-cta/40 bg-cta/6 text-cta" },
                    { step: "02", label: "Contextualise", ring: "border-learn/40 bg-learn/6 text-learn" },
                    { step: "03", label: "Clarify", ring: "border-live/40 bg-live/6 text-live" },
                  ].map((s, i, arr) => (
                    <div key={s.step} className="flex flex-col items-center">
                      <div className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm font-semibold ${s.ring} w-full justify-center`}>
                        <span className="text-xs opacity-60">{s.step}</span>
                        {s.label}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="my-1 h-4 w-px bg-line" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden bg-line md:block" aria-hidden="true" />

              {/* Right: Intelligence out */}
              <div className="scroll-reveal-2 p-8 md:p-10">
                <div className="mb-6 flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest text-live">
                    Intelligence out
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Plain-language reads",
                    "Source-referenced summaries",
                    "Confidence-bounded analysis",
                    "Human-actionable context",
                    "Domain-aware interpretation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <svg className="mt-0.5 flex-shrink-0 text-live/60" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M2 6h8M6 2l4 4-4 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step detail cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Collect",
                desc: "We gather signals from structured, verified sources. Market data, academic content, curated news feeds. No scraping unverified commentary or rumour sites.",
                ring: "border-cta/40 bg-cta/6 text-cta",
                scrollClass: "scroll-reveal-1",
              },
              {
                step: "02",
                title: "Contextualise",
                desc: "Domain-specific logic maps relationships and meaning. The system knows the rules of the domain, which sources matter, and what to filter out.",
                ring: "border-learn/40 bg-learn/6 text-learn",
                scrollClass: "scroll-reveal-2",
              },
              {
                step: "03",
                title: "Clarify",
                desc: "Plain-language intelligence is delivered to you. Every output is source-referenced and confidence-bounded. You know what DECIFER knows — and what it does not.",
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
                <p className="max-w-xs text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRODUCTS — Two current applications
      ════════════════════════════════════════════ */}
      <section id="products" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>Products</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The DECIFER method, applied.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              Two products. One system. Different domains. Each applies the same
              process of Collect, Contextualise, and Clarify to a specific
              type of complexity.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* DECIFER Trading */}
            <div className="glow-trading scroll-reveal-1 rounded-2xl bg-surface p-8 transition-all duration-300">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-trading/20 bg-trading/8">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#3d7eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 16l5-5 4 3.5 7-9" />
                    <path d="M17 7h3v3" opacity="0.6" />
                  </svg>
                </div>
                <span className="rounded-full border border-live/30 bg-live/8 px-3 py-1 text-xs font-semibold text-live">
                  Live
                </span>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-faint">
                Market intelligence
              </p>
              <h3 className="mb-1 text-2xl font-bold text-ink">DECIFER Trading</h3>
              <p className="mb-4 text-sm font-medium text-trading">
                Plain-language market intelligence for active investors.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Understand what markets are doing, why they are moving, and
                where meaningful signals are forming. DECIFER Trading draws on
                structured market data and domain-specific logic to give you
                context, not noise. It is intelligence. It is not financial
                advice.
              </p>
              <a
                href="https://decifertrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-trading transition-colors hover:text-ink"
                data-event="trading_clicked"
              >
                Visit DECIFER Trading
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>

            {/* DECIFER Learning */}
            <div className="glow-learn scroll-reveal-2 rounded-2xl bg-surface p-8 transition-all duration-300">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-learn/20 bg-learn/8">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#9578e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
                    <path d="M8 22V12h6v10" />
                  </svg>
                </div>
                <span className="rounded-full border border-learn/30 bg-learn/8 px-3 py-1 text-xs font-semibold text-learn">
                  Beta
                </span>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-faint">
                Learning intelligence
              </p>
              <h3 className="mb-1 text-2xl font-bold text-ink">DECIFER Learning</h3>
              <p className="mb-4 text-sm font-medium text-learn">
                AI-assisted learning for children and parents.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Curriculum-linked, age-appropriate, and designed around how
                children actually learn. DECIFER Learning uses AI to make
                explanations clearer, track understanding, and help parents
                stay involved. It supports teachers. It does not replace them.
              </p>
              <a
                href="https://deciferlearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-learn transition-colors hover:text-ink"
                data-event="learning_clicked"
              >
                Visit DECIFER Learning
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Domain expansion — no named future products */}
          <div className="scroll-reveal rounded-2xl border border-line bg-surface/50 p-8 md:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex justify-center">
                <DeciferMark size="sm" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-ink">
                The same method. More domains.
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                The DECIFER approach works wherever context is the missing
                layer. Finance. Education. Global events. Work. Health. We are
                building domain by domain, applying the same disciplined
                process to each one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BOUNDARIES — Proof and trust architecture
      ════════════════════════════════════════════ */}
      <section id="trust" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>Boundaries</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              We say clearly what we are.<br />
              And what we are not.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">
              These are not disclaimers added at the end. They are part of
              how DECIFER is designed. Clear limits build real trust.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                scrollClass: "scroll-reveal-1",
                color: "text-cta",
                bg: "bg-cta/5 border-cta/15",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
                    <path d="M8 14l2 2 4-4" />
                  </svg>
                ),
                title: "Support, not a substitute for teachers",
                desc: "DECIFER Learning supports children and parents in building understanding. It does not replace qualified teachers, tutors, or formal education. We make no claims about academic outcomes.",
              },
              {
                scrollClass: "scroll-reveal-1",
                color: "text-live",
                bg: "bg-live/5 border-live/15",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 22c5.5 0 9.5-4 9.5-9V3.5L12 2 3 3.5V13c0 5 4 9 9 9z" />
                    <path d="M8 11.5l2.5 2.5 4-4" />
                  </svg>
                ),
                title: "Child safety is non-negotiable",
                desc: "DECIFER Learning is built for families. All content is age-appropriate, curriculum-linked, and supervised. We do not collect unnecessary data from children. Parental involvement is part of the design.",
              },
              {
                scrollClass: "scroll-reveal-2",
                color: "text-muted",
                bg: "bg-surface border-line",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
                className={`flex gap-5 rounded-2xl border p-7 transition-colors duration-300 ${item.bg} ${item.scrollClass}`}
              >
                <div className={`mt-0.5 flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOUNDER — The reason this exists
      ════════════════════════════════════════════ */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="scroll-reveal relative rounded-2xl border border-line border-l-cta/40 bg-surface p-10 sm:p-14 [border-left-width:2px]">
            {/* Large open-quote mark */}
            <div
              className="absolute -top-6 left-10 select-none font-display text-[5.5rem] font-normal leading-none text-cta/25 italic"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p className="relative z-10 font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
              I built DECIFER because I kept seeing the same problem. Intelligent
              people, overwhelmed by information, making poor decisions — not
              from lack of effort, but from lack of clarity. Markets, learning,
              money, the world: in every domain the signal is buried. DECIFER
              is my attempt to fix that, carefully, domain by domain.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cta/30 bg-cta/10 text-sm font-bold tracking-wide text-cta">
                AC
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">Amit Chopra</div>
                <div className="text-xs text-muted">Founder, DECIFER</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          EARLY ACCESS — The gate
      ════════════════════════════════════════════ */}
      <section id="early-access" className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="absolute inset-0 hero-beam opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <SectionLabel>Early Access</SectionLabel>
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
            <a
              href="/legal/privacy"
              className="text-muted underline-offset-2 hover:text-ink hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
