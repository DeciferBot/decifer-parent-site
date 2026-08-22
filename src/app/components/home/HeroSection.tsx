import Link from "next/link";
import DeciferMark from "../DeciferMark";
import { products } from "../../data/products";
import { accentVars } from "../ProductCard";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div className="absolute inset-0 hero-beam" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <div className="anim-fade-up mb-8 flex justify-center">
          <div style={{ filter: "drop-shadow(0 0 20px rgba(240,90,40,0.32))" }}>
            <DeciferMark height={52} />
          </div>
        </div>

        <p className="anim-fade-up-1 mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cta">
          DECIFER <span className="text-muted">/</span> AI solutions, Dubai
        </p>

        <h1 className="anim-fade-up-1 mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          AI that does a job.
          <br />
          <span className="font-display font-normal italic text-cta">
            Not AI that demos well.
          </span>
        </h1>

        <p className="anim-fade-up-2 mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
          DECIFER builds AI agents, automation and complete products for
          businesses in Dubai and beyond. In production, on your accounts,
          with a log you can read.
        </p>

        <p className="anim-fade-up-2 mx-auto mb-9 max-w-2xl text-base leading-relaxed text-muted">
          We run three public products with the same method, so the work you
          can see is the work you would get. And we write down where AI does
          not belong, then enforce it with a test.
        </p>

        <div className="anim-fade-up-3 mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            data-event="cta_book_call"
            className="btn btn-primary w-full px-7 py-3.5 sm:w-auto"
          >
            Book a discovery call
          </Link>
          <Link
            href="/services"
            data-event="cta_explore_services"
            className="btn btn-secondary w-full px-7 py-3.5 sm:w-auto"
          >
            See the services
          </Link>
        </div>

        {/* Product family row: proof, not the pitch */}
        <p className="anim-fade-up-4 mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Our own products, open to anyone
        </p>
        <div className="anim-fade-up-4 flex flex-wrap items-center justify-center gap-2.5">
          {products.map((p) => (
            <a
              key={p.key}
              href={p.href ?? "/products"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              data-event={p.event}
              className="chip"
              style={accentVars(p)}
            >
              <span className="chip-dot" aria-hidden="true" />
              {p.name.replace("Decifer ", "")}
              <span className="text-muted">{p.status}</span>
            </a>
          ))}
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
  );
}
