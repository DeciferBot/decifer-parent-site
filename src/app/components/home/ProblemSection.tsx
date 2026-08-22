import SectionLabel from "../SectionLabel";

const CARDS = [
  {
    scrollClass: "scroll-reveal-1",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 14c2-5 4-9 6-9s4 9 6 9 4-9 6-9" />
        <path d="M2 20c2-3 4-5 6-5s4 5 6 5 4-5 6-5" opacity="0.45" />
      </svg>
    ),
    title: "The demo is not the product",
    desc: "A demo takes a day. Production takes logins, backups, rate limits, monitoring, a plan for when the model is wrong, and someone who answers when it breaks.",
  },
  {
    scrollClass: "scroll-reveal-2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="4" width="8" height="8" rx="1.5" />
        <rect x="16" y="4" width="8" height="8" rx="1.5" />
        <rect x="4" y="16" width="8" height="8" rx="1.5" />
        <rect x="16" y="16" width="8" height="8" rx="1.5" opacity="0.35" strokeDasharray="2 2" />
        <path d="M8 12v4M12 8h4M12 20h4" opacity="0.5" />
      </svg>
    ),
    title: "The pilot never ships",
    desc: "Nobody owns it after the vendor leaves. Nobody measured the before. Nobody budgeted the running cost. So it stays a pilot, and the next vendor starts again.",
  },
  {
    scrollClass: "scroll-reveal-3",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 9v5.5l3.5 3.5" />
        <path d="M8 4.5A10 10 0 0 1 24 14" opacity="0.4" strokeDasharray="2 2" />
      </svg>
    ),
    title: "The numbers cannot be trusted",
    desc: "Generic AI sounds confident when it is guessing. If the model is allowed to produce a figure, sooner or later it will produce one that is not true.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            AI made writing code easy. It did not make running software easy.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            Most businesses in Dubai have now seen an AI demo. Far fewer have
            seen one running six months later. The gap between the two is
            where the real work is, and it is the part we sell.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`card-lift group rounded-2xl border border-line-strong bg-surface p-8 ${card.scrollClass}`}
            >
              <div className="mb-5 text-cta/90 transition-colors duration-300 group-hover:text-cta">
                {card.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{card.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
