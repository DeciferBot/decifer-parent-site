import Link from "next/link";
import StackMark, { LABELS } from "./StackMark";
import { stack, getStackItems } from "../data/stack";
import type { StackKey } from "../data/stack";

/**
 * The tools we build with, as their real brand marks. Icons and the monogram
 * fallback live in StackMark, which is shared with /stack.
 *
 * Listing a tool means we use it, not that its maker endorses us; the caption
 * on every surface that renders this says so.
 */

export default function LogoRow({
  keys,
  tone = "ink",
  linkTo = "/stack",
}: {
  keys?: StackKey[];
  tone?: "ink" | "light";
  linkTo?: string | null;
}) {
  const items = keys ? getStackItems(keys) : stack.slice().sort((a, b) => a.order - b.order);
  const light = tone === "light";
  const color = light ? "text-on-dark" : "text-ink";
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
      {items.map((t) => {
        const label = LABELS[t.key] ?? t.name;
        const inner = (
          <span className="inline-flex items-center gap-2.5">
            {/* On the dark board the brand colours lose contrast, so the marks
                inherit the text colour there instead. */}
            <StackMark
              stackKey={t.key}
              name={t.name}
              tone={light ? "current" : "brand"}
            />
            <span className="text-[0.9375rem] font-semibold">{label}</span>
          </span>
        );
        return (
          <li key={t.key} className={`${color} transition-opacity hover:opacity-70`}>
            {linkTo ? (
              <Link href={linkTo} title={t.role} className="inline-flex">
                {inner}
              </Link>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );
}
