import DeciferMark from "./components/DeciferMark";
import EarlyAccessForm from "./components/EarlyAccessForm";
import MethodSteps from "./components/MethodSteps";

/* ── Section label component ──────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
      <span className="opacity-60">[ </span>
      {children}
      <span className="opacity-60"> ]</span>
    </div>
  );
}

/* ── FAQ data (kept in sync with FAQPage structured data) ── */
const FAQ_ITEMS = [
  {
    q: "What is DECIFER?",
    a: "DECIFER is an AI intelligence company. It builds products that turn complex information into clear, plain-language understanding. Its current products are Decifer Trading and Decifer Learning.",
  },
  {
    q: "Is DECIFER the same as the word decipher?",
    a: "No. DECIFER is a company name, spelled with an e. The idea is related, because the products help people decipher complex information, but DECIFER refers to the company and its products, not the dictionary word.",
  },
  {
    q: "What is Decifer Trading?",
    a: "Decifer Trading is a market intelligence product. It explains what is moving in markets, why it may matter and what to watch, in plain English. It is for research and context only and is not financial advice.",
  },
  {
    q: "What is Decifer Learning?",
    a: "Decifer Learning is a guided learning companion for the UK National Curriculum. Children learn, practise and quiz through each topic while parents see progress. It supports learning and does not replace teachers, schools or parents.",
  },
  {
    q: "How does DECIFER work?",
    a: "Every DECIFER product follows the same method: collect trusted inputs, connect them with domain logic, and explain the result in plain language, while keeping sources and uncertainty visible.",
  },
  {
    q: "How can I get early access?",
    a: "You can join early access from this page. Tell us which product you are interested in, and access will open gradually as each product becomes ready. No payment is required for early access.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ── Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="absolute inset-0 hero-beam" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="anim-fade-up mb-8 flex justify-center">
            <div style={{ filter: "drop-shadow(0 0 20px rgba(240,90,40,0.32))" }}>
              <DeciferMark height={52} />
            </div>
          </div>

          <p className="anim-fade-up-1 mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cta">
            DECIFER
          </p>

          <h1 className="anim-fade-up-1 mb-6 text-5xl font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Information is everywhere.<br />
            <span className="text-cta">Understanding is not.</span>
          </h1>

          <p className="anim-fade-up-2 mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
            DECIFER builds AI intelligence products that help people make sense
            of complex information.
          </p>

          <p className="anim-fade-up-2 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted">
            We start with trusted inputs, apply domain-specific logic, and turn
            the result into plain-language context. Our first products focus on
            markets and learning, where more information does not always mean
            more clarity.
          </p>

          <div className="anim-fade-up-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              data-event="cta_explore_products"
              className="w-full rounded-xl bg-cta px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff6a36] hover:shadow-xl hover:shadow-cta/30 sm:w-auto"
            >
              Explore products
            </a>
            <a
              href="#early-access"
              data-event="cta_join_early_access"
              className="w-full rounded-xl border border-line-strong bg-surface/60 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-cta/60 hover:bg-surface sm:w-auto"
            >
              Join early access
            </a>
          </div>
        </div>

        <div
          className="anim-fade-up-4 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
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

      {/* ════════════════════════════════════════════
          2. PROBLEM
      ════════════════════════════════════════════ */}
      <section id="problem" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              More information does not always create more clarity.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
              Most people are surrounded by feeds, dashboards, alerts, apps,
              reports and AI summaries. The problem is no longer access to
              information. The problem is knowing what matters, what can be
              trusted, and what it means.
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
                    <path d="M2 20c2-3 4-5 6-5s4 5 6 5 4-5 6-5" opacity="0.45" />
                  </svg>
                ),
                title: "Too much signal",
                desc: "Important information is buried inside noise, repetition and disconnected updates.",
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
                    <rect x="4" y="4" width="8" height="8" rx="1.5" />
                    <rect x="16" y="4" width="8" height="8" rx="1.5" />
                    <rect x="4" y="16" width="8" height="8" rx="1.5" />
                    <rect
                      x="16"
                      y="16"
                      width="8"
                      height="8"
                      rx="1.5"
                      opacity="0.35"
                      strokeDasharray="2 2"
                    />
                    <path d="M8 12v4M12 8h4M12 20h4" opacity="0.5" />
                  </svg>
                ),
                title: "Too little context",
                desc: "Data is often shown without the explanation people need to understand why it matters.",
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
                    <circle cx="14" cy="14" r="10" />
                    <path d="M14 9v5.5l3.5 3.5" />
                    <path
                      d="M8 4.5A10 10 0 0 1 24 14"
                      opacity="0.4"
                      strokeDasharray="2 2"
                    />
                  </svg>
                ),
                title: "Too much blind trust",
                desc: "Generic AI can sound confident even when the answer needs sources, boundaries and uncertainty.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`card-lift group rounded-2xl border border-line-strong bg-surface p-8 ${card.scrollClass}`}
              >
                <div className="mb-5 text-cta/90 transition-colors duration-300 group-hover:text-cta">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-body">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. DECIFER METHOD
      ════════════════════════════════════════════ */}
      <section id="method" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>The Method</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              How DECIFER turns information into intelligence.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
              Every DECIFER product follows the same basic method: collect
              trusted inputs, connect them with domain logic, and explain the
              result in plain language.
            </p>
          </div>

          <MethodSteps />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. CURRENT PRODUCTS
      ════════════════════════════════════════════ */}
      <section id="products" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>Current Products</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Where DECIFER is starting.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
              DECIFER is starting with two areas where people face the same
              problem in different ways: too much information, not enough
              clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Decifer Trading */}
            <article className="glow-trading scroll-reveal-1 flex flex-col rounded-2xl bg-surface p-8">
              <header className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-trading/25 bg-trading/10">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="#5a92ff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 16l5-5 4 3.5 7-9" />
                    <path d="M17 7h3v3" opacity="0.7" />
                  </svg>
                </div>
                <span className="rounded-full border border-live/35 bg-live/10 px-3 py-1 text-xs font-semibold text-live">
                  Live
                </span>
              </header>

              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Market intelligence
              </p>
              <h3 className="mb-3 text-2xl font-bold text-ink">
                Decifer Trading
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-body">
                Decifer Trading turns market noise into a plain-English read on
                what is moving, why it matters and what to watch, across stocks,
                themes and catalysts.
              </p>

              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                What it helps with
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "A plain-English daily market briefing",
                  "The forces and catalysts moving prices",
                  "Themes that connect related stocks",
                  "Company research without the jargon",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-body"
                  >
                    <span
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-trading"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-6 mt-auto rounded-lg border border-line-strong bg-canvas/50 px-3.5 py-2.5 text-xs leading-relaxed text-muted">
                For intelligence and research context only. Not financial
                advice.
              </p>

              <a
                href="https://decifertrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-trading transition-colors hover:text-ink"
                data-event="trading_clicked"
              >
                Visit Decifer Trading
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </article>

            {/* Decifer Learning */}
            <article className="glow-learn scroll-reveal-2 flex flex-col rounded-2xl bg-surface p-8">
              <header className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-learn/25 bg-learn/10">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="#a48eee"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
                    <path d="M8 22V12h6v10" />
                  </svg>
                </div>
                <span className="rounded-full border border-learn/35 bg-learn/10 px-3 py-1 text-xs font-semibold text-learn">
                  Beta
                </span>
              </header>

              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Learning intelligence
              </p>
              <h3 className="mb-3 text-2xl font-bold text-ink">
                Decifer Learning
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-body">
                Decifer Learning is a guided companion for the UK National
                Curriculum. Children learn, practise and quiz through each topic
                while parents see real progress.
              </p>

              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                What it helps with
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Guided Learn, Practise and Quiz for each topic",
                  "Curriculum-aligned practice and feedback",
                  "A parent view of progress and weak areas",
                  "Encouraging support that never punishes mistakes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-body"
                  >
                    <span
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-learn"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-6 mt-auto rounded-lg border border-line-strong bg-canvas/50 px-3.5 py-2.5 text-xs leading-relaxed text-muted">
                Supports learning. Does not replace teachers, schools or
                parents.
              </p>

              <a
                href="https://deciferlearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-learn transition-colors hover:text-ink"
                data-event="learning_clicked"
              >
                Visit Decifer Learning
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. PRINCIPLES AND BOUNDARIES
      ════════════════════════════════════════════ */}
      <section id="principles" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>Principles &amp; Boundaries</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Clear intelligence needs clear boundaries.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
              DECIFER is designed to support human judgement, not replace it.
              The system should make information easier to understand while
              keeping sources, limits and uncertainty visible.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                scrollClass: "scroll-reveal-1",
                title: "Intelligence, not instruction",
                desc: "DECIFER explains context. It does not make decisions for the user.",
              },
              {
                scrollClass: "scroll-reveal-2",
                title: "Sources matter",
                desc: "Where possible, outputs should be connected to structured inputs, references or clearly defined logic.",
              },
              {
                scrollClass: "scroll-reveal-1",
                title: "Uncertainty must be visible",
                desc: "AI should not sound certain when the underlying information is incomplete, changing or open to interpretation.",
              },
              {
                scrollClass: "scroll-reveal-2",
                title: "Safety depends on the domain",
                desc: "Markets and learning require different safeguards. Each DECIFER product must respect the limits of its domain.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`card-lift rounded-2xl border border-line-strong bg-surface p-7 ${item.scrollClass}`}
              >
                <h3 className="mb-2 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Product-specific boundary lines */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="rounded-xl border border-trading/25 bg-trading/5 px-5 py-4 text-sm leading-relaxed text-body">
              <span className="font-semibold text-trading">
                Decifer Trading
              </span>{" "}
              is not financial advice.
            </p>
            <p className="rounded-xl border border-learn/25 bg-learn/5 px-5 py-4 text-sm leading-relaxed text-body">
              <span className="font-semibold text-learn">
                Decifer Learning
              </span>{" "}
              supports learning and does not replace teachers, schools or
              parents.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. FOUNDER NOTE
      ════════════════════════════════════════════ */}
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
                A market screen, a learning app, a report or an AI summary can
                all create the same feeling: there is too much to process and
                not enough clarity.
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

      {/* ════════════════════════════════════════════
          7. FAQ
      ════════════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Questions, answered.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className="card-lift group rounded-2xl border border-line-strong bg-surface px-6 py-5 [&[open]]:border-cta/40"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    className="flex-shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M9 4v10M4 9h10" />
                  </svg>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      {/* ════════════════════════════════════════════
          8. EARLY ACCESS
      ════════════════════════════════════════════ */}
      <section
        id="early-access"
        className="relative overflow-hidden bg-surface py-20 sm:py-28"
      >
        <div className="absolute inset-0 hero-beam opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <SectionLabel>Early Access</SectionLabel>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Join early access.
            </h2>
            <p className="text-base leading-relaxed text-body">
              Tell us which DECIFER product you are interested in. Access will
              open gradually as each product becomes ready.
            </p>
          </div>

          <EarlyAccessForm />

          <p className="mt-6 text-center text-xs text-muted">
            No payment required for early access. No spam. Read our{" "}
            <a
              href="/legal/privacy"
              className="text-body underline-offset-2 hover:text-ink hover:underline"
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
