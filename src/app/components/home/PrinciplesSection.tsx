import SectionLabel from "../SectionLabel";
import { accentVars } from "../ProductCard";
import { products } from "../../data/products";

const PRINCIPLES = [
  {
    scrollClass: "scroll-reveal-1",
    title: "Intelligence, not instruction",
    desc: "The system explains context and drafts the next step. A person decides. We keep a human wherever a mistake is expensive.",
  },
  {
    scrollClass: "scroll-reveal-2",
    title: "Sources matter",
    desc: "Outputs are connected to checked inputs, references or defined logic. A claim without a source does not ship.",
  },
  {
    scrollClass: "scroll-reveal-1",
    title: "Uncertainty must be visible",
    desc: "AI should not sound certain when the information is incomplete, changing or open to interpretation. Neither should we.",
  },
  {
    scrollClass: "scroll-reveal-2",
    title: "Safety depends on the domain",
    desc: "A clinic, a classroom and a trading desk need different safeguards. Some domains get no AI at all where a person could meet it.",
  },
  {
    scrollClass: "scroll-reveal-1",
    title: "You own what we build",
    desc: "Your accounts, your data, your repository. At handover there is nothing of yours that only we can reach.",
  },
  {
    scrollClass: "scroll-reveal-2",
    title: "Clients are never named",
    desc: "Work is described by shape. Numbers appear only with the method and written permission. That is policy, not modesty.",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <SectionLabel>Principles &amp; Boundaries</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Clear intelligence needs clear boundaries.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            DECIFER is designed to support human judgement, not replace it.
            These apply to our products and to every client engagement.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className={`card-lift rounded-2xl border border-line-strong bg-surface p-7 ${item.scrollClass}`}
            >
              <h3 className="mb-2 text-base font-semibold text-ink">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Product-specific boundary lines */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {products.map((p) => (
            <p
              key={p.key}
              className="rounded-xl border px-5 py-4 text-sm leading-relaxed text-body"
              style={{
                borderColor: "rgba(var(--accent-rgb),0.25)",
                backgroundColor: "rgba(var(--accent-rgb),0.05)",
                ...accentVars(p),
              }}
            >
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                {p.name}
              </span>{" "}
              {p.boundaryShort}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
