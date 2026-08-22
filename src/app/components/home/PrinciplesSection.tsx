import SectionLabel from "../SectionLabel";
import { accentVars } from "../ProductCard";
import { products } from "../../data/products";

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
              desc: "Every domain requires different safeguards. Each DECIFER product must respect the limits of its own field.",
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
