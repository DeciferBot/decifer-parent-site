import Link from "next/link";
import SectionLabel from "../SectionLabel";
import { PRODUCT_ICONS, accentVars } from "../ProductCard";
import { products } from "../../data/products";

/** Compact strip. The full narrative lives on /products. Keeps the #products anchor. */
export default function ProductsSection() {
  return (
    <section id="products" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <SectionLabel>Our own products</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Open them before you hire us.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
            The products are the lab. Client work gets the version that has
            already been tested on our own money.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.key}
              className={`product-card scroll-reveal-${(i % 3) + 1} p-7`}
              style={accentVars(p)}
            >
              <header className="mb-4 flex items-center justify-between">
                <div className="product-icon flex h-10 w-10 items-center justify-center rounded-xl">
                  {PRODUCT_ICONS[p.key]}
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                  {p.status}
                </span>
              </header>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {p.category}
              </p>
              <h3 className="mb-2 text-xl font-bold text-ink">{p.name}</h3>
              <p className="mb-5 text-sm leading-relaxed text-body">{p.tagline}</p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event={p.event}
                  className="mt-auto text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Visit {p.name}
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/products" className="text-cta hover:underline">
            The product family, boundaries and early access
          </Link>
        </p>
      </div>
    </section>
  );
}
