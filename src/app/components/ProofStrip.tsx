import Link from "next/link";
import { getProof } from "../data/proof";
import type { ProofKey } from "../data/proof";
import type { AccentHue } from "../data/accents";

/**
 * Verified figures as a ledger line, not hero metrics. Each one is traceable
 * to proof.ts, and the strip always links to how the counting is done.
 *
 * The hues cycle rather than carrying meaning: on a strip of eight figures
 * the accent is what separates one reading from the next at a glance, and
 * the label beside it is what actually says which is which.
 */
const CYCLE: AccentHue[] = ["blue", "teal", "amber", "violet", "green", "plum", "orange"];
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
        {items.map((p, i) => (
          <div
            key={p.key}
            className="border-t-2 pt-4 pr-6"
            style={{
              borderColor: light
                ? `var(--color-a-${CYCLE[i % CYCLE.length]}-on-dark)`
                : `var(--color-a-${CYCLE[i % CYCLE.length]})`,
            }}
            title={`Source: ${p.source}. Verified ${p.verifiedAt}.`}
          >
            <dd
              className="figure-num figure-num-lg"
              style={{
                color: light
                  ? `var(--color-a-${CYCLE[i % CYCLE.length]}-on-dark)`
                  : `var(--color-a-${CYCLE[i % CYCLE.length]})`,
              }}
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
