import Link from "next/link";
import { getProof } from "../data/proof";
import type { ProofKey } from "../data/proof";

/**
 * Verified figures as a ledger line, not hero metrics. Each one is traceable
 * to proof.ts, and the strip always links to how the counting is done.
 */
export default function ProofStrip({
  keys,
  tone = "ink",
  showSourceLink = true,
}: {
  keys: ProofKey[];
  tone?: "ink" | "light";
  showSourceLink?: boolean;
}) {
  const items = getProof(keys);
  const light = tone === "light";
  return (
    <div>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {items.map((p) => (
          <div
            key={p.key}
            className="border-t pt-4 pr-6"
            style={{ borderColor: light ? "var(--color-line-dark)" : "var(--color-line)" }}
            title={`Source: ${p.source}. Verified ${p.verifiedAt}.`}
          >
            <dd
              className={`text-[2rem] font-bold leading-none tracking-[-0.02em] sm:text-[2.5rem] ${
                light ? "text-on-dark" : "text-ink"
              }`}
            >
              {p.value}
            </dd>
            <dt className={`mt-2 text-sm leading-snug ${light ? "text-on-dark-2" : "text-body"}`}>
              {p.label}
            </dt>
          </div>
        ))}
      </dl>
      {showSourceLink ? (
        <p className={`mt-5 text-sm ${light ? "text-on-dark-2" : "text-muted"}`}>
          Every figure names its source.{" "}
          <Link href="/about#numbers" className={light ? "link-quiet text-on-dark" : "link"}>
            How we count
          </Link>
          . The investing system runs on a broker paper account, not real money.
        </p>
      ) : null}
    </div>
  );
}
