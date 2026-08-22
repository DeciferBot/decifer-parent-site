import SectionLabel from "../SectionLabel";

export default function ProblemSection() {
  return (
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
  );
}
