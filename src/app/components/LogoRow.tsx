import Link from "next/link";
import {
  siClaude,
  siDigitalocean,
  siDocker,
  siTelegram,
  siNextdotjs,
  siVercel,
  siSupabase,
  siGooglebigquery,
  siCloudflare,
  siGithub,
  siResend,
  siStripe,
  siGoogleanalytics,
  type SimpleIcon,
} from "simple-icons";
import { stack, getStackItems } from "../data/stack";
import type { StackKey } from "../data/stack";

/**
 * The tools we build with, as monochrome marks. Marks come from the
 * simple-icons set (CC0). Listing a tool means we use it, not that its maker
 * endorses us; the caption says so. No OpenAI mark exists in the set, so
 * Codex renders as text.
 */

/** Display names that differ from StackItem.name in this compact row. */
const LABELS: Partial<Record<StackKey, string>> = {
  codex: "OpenAI Codex",
  llama: "Llama",
};

const ICONS: Partial<Record<StackKey, SimpleIcon>> = {
  claude: siClaude,
  digitalocean: siDigitalocean,
  docker: siDocker,
  telegram: siTelegram,
  nextjs: siNextdotjs,
  vercel: siVercel,
  supabase: siSupabase,
  bigquery: siGooglebigquery,
  cloudflare: siCloudflare,
  github: siGithub,
  resend: siResend,
  stripe: siStripe,
  ga4: siGoogleanalytics,
};

function Mark({ icon, label }: { icon?: SimpleIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      {icon ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : null}
      <span className="text-[0.9375rem] font-semibold">{label}</span>
    </span>
  );
}

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
        const inner = <Mark icon={ICONS[t.key]} label={LABELS[t.key] ?? t.name} />;
        return (
          <li key={t.key} className={`${color} opacity-70 transition-opacity hover:opacity-100`}>
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
