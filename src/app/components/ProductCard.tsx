import type { CSSProperties } from "react";
import type { Product } from "../data/products";

/**
 * The full product card used on the homepage #products section and on
 * /products. Icons live here so the data file stays pure.
 */

export const PRODUCT_ICONS: Record<Product["key"], React.ReactNode> = {
  trading: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 16l5-5 4 3.5 7-9" />
      <path d="M17 7h3v3" opacity="0.7" />
    </svg>
  ),
  learning: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8l9-6 9 6v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
      <path d="M8 22V12h6v10" />
    </svg>
  ),
  marketing: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 20V13M9 20V4M15 20V9M21 20V6" />
      <path d="M2 20h19" opacity="0.7" />
    </svg>
  ),
};

/** Style object carrying the card accent as CSS variables. */
export function accentVars(p: Product): CSSProperties {
  return {
    "--accent": p.accent.hex,
    "--accent-rgb": p.accent.rgb,
  } as CSSProperties;
}

export default function ProductCard({
  product: p,
  scrollClass,
}: {
  product: Product;
  scrollClass?: string;
}) {
  return (
    <article
      className={`product-card ${scrollClass ?? ""} p-8`}
      style={accentVars(p)}
    >
      <header className="mb-6 flex items-start justify-between">
        <div className="product-icon flex h-12 w-12 items-center justify-center rounded-xl">
          {PRODUCT_ICONS[p.key]}
        </div>
        {p.status === "Live" ? (
          <span className="rounded-full border border-live/35 bg-live/10 px-3 py-1 text-xs font-semibold text-live">
            Live
          </span>
        ) : (
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              color: "var(--accent)",
              borderColor: "rgba(var(--accent-rgb),0.35)",
              backgroundColor: "rgba(var(--accent-rgb),0.10)",
              borderWidth: "1px",
            }}
          >
            {p.status}
          </span>
        )}
      </header>

      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {p.category}
      </p>
      <h3 className="mb-3 text-2xl font-bold text-ink">{p.name}</h3>
      <p className="mb-5 text-[15px] leading-relaxed text-body">{p.tagline}</p>

      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        What it helps with
      </p>
      <ul className="mb-6 space-y-2">
        {p.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-body">
            <span
              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      <p className="mb-6 mt-auto rounded-lg border border-line-strong bg-canvas/50 px-3.5 py-2.5 text-xs leading-relaxed text-muted">
        {p.boundary}
      </p>

      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 self-start text-sm font-semibold transition-colors"
          style={{ color: "var(--accent)" }}
          data-event={p.event}
        >
          Visit {p.name}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="transition-transform duration-200 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      ) : (
        <span className="self-start text-sm font-semibold text-muted">
          Coming soon
        </span>
      )}
    </article>
  );
}
