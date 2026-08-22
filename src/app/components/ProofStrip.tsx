import { getProof } from "../data/proof";
import type { ProofKey } from "../data/proof";

/** Verified figures, each traceable to proof.ts. */
export default function ProofStrip({
  keys,
  compact = false,
}: {
  keys: ProofKey[];
  compact?: boolean;
}) {
  const items = getProof(keys);
  return (
    <dl
      className={`grid gap-4 ${compact ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}
    >
      {items.map((p) => (
        <div
          key={p.key}
          className="rounded-xl border border-line-strong bg-surface/60 px-5 py-4"
          title={`Source: ${p.source}`}
        >
          <dd className="mb-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {p.value}
          </dd>
          <dt className="text-xs leading-snug text-muted">{p.label}</dt>
        </div>
      ))}
    </dl>
  );
}
