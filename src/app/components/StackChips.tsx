import Link from "next/link";
import { getStackItems } from "../data/stack";
import type { StackKey } from "../data/stack";

/** Plain inline list of tools, linking to /stack. */
export default function StackList({ keys }: { keys: StackKey[] }) {
  const items = getStackItems(keys);
  return (
    <p className="text-sm text-body">
      <span className="font-semibold text-ink">Built with </span>
      {items.map((t, i) => (
        <span key={t.key}>
          <Link href="/stack" className="link-quiet" title={t.role}>
            {t.name}
          </Link>
          {i < items.length - 1 ? ", " : "."}
        </span>
      ))}
    </p>
  );
}
