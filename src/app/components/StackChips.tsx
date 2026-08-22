import Link from "next/link";
import { getStackItems } from "../data/stack";
import type { StackKey } from "../data/stack";

/** Row of tool chips, each linking to /stack. */
export default function StackChips({ keys }: { keys: StackKey[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {getStackItems(keys).map((t) => (
        <Link key={t.key} href="/stack" className="chip" title={t.role}>
          <span className="chip-dot" aria-hidden="true" />
          {t.name}
        </Link>
      ))}
    </div>
  );
}
