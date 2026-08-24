import Image from "next/image";
import Arrow from "./Arrow";
import type { Product } from "../data/products";

const SHOTS: Record<Product["key"], string> = {
  trading: "/products/markets.webp",
  learning: "/products/learning.webp",
  marketing: "/products/marketing.webp",
};

const ALT: Record<Product["key"], string> = {
  trading:
    "Decifer Markets home page: the daily market read, today's biggest moves, and what to watch next.",
  learning:
    "Decifer Learning home page: a parent's view of a child's progress through the UK curriculum.",
  marketing:
    "Decifer Marketing home page: three decisions to grow, each backed by the actual numbers.",
};

/**
 * A real screenshot of a live product in a plain frame, with name, status
 * and a link out. Captured 2026-08-23; recapture when the products change.
 */
export default function ProductFrame({
  product: p,
  tone = "light",
  priority = false,
}: {
  product: Product;
  tone?: "ink" | "light";
  priority?: boolean;
}) {
  const light = tone === "light";
  const dot = { color: p.accent.hex };
  return (
    <article className="flex flex-col">
      <a
        href={p.href ?? "/products"}
        target={p.href ? "_blank" : undefined}
        rel={p.href ? "noopener noreferrer" : undefined}
        data-event={p.event}
        className={`frame reveal-clip block ${light ? "frame-dark" : ""}`}
        aria-label={`Open ${p.name}`}
      >
        <Image
          src={SHOTS[p.key]}
          alt={ALT[p.key]}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
        />
      </a>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className={`t-h3 ${light ? "text-on-dark" : "text-ink"}`}>{p.name}</h3>
          <p className={`mt-1 text-[0.9375rem] ${light ? "text-on-dark-2" : "text-body"}`}>{p.category}</p>
        </div>
        <span className={`status mt-1 ${light ? "text-on-dark-2" : "text-body"}`} style={dot}>
          <span className={light ? "text-on-dark-2" : "text-body"}>{p.status}</span>
        </span>
      </div>
      <p className={`mt-3 text-[0.9375rem] leading-relaxed ${light ? "text-on-dark-2" : "text-body"}`}>
        {p.tagline}
      </p>
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          data-event={p.event}
          className={`arrow-link mt-4 text-[0.9375rem] ${light ? "text-on-dark" : ""}`}
        >
          Open {p.name.replace("Decifer ", "")}
          <Arrow />
        </a>
      ) : null}
    </article>
  );
}
