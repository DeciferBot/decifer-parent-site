import {
  siClaude,
  siDigitalocean,
  siDocker,
  siNextdotjs,
  siVercel,
  siSupabase,
  siGooglebigquery,
  siCloudflare,
  siGithub,
  siResend,
  siTelegram,
  siStripe,
  siGoogleanalytics,
  type SimpleIcon,
} from "simple-icons";
import type { StackKey } from "../data/stack";

/**
 * A tool's brand mark, from the simple-icons set (CC0), drawn in that brand's
 * own colour. Shared by LogoRow and /stack so there is one icon table.
 *
 * Three tools have no mark in the set: OpenAI, Meta's Llama and Twilio
 * (checked against simple-icons 16.28.0 — Twilio is not in it under any
 * spelling). Those fall back to a plain monogram tile. We do not draw a
 * substitute or borrow a parent company's logo, because an approximated mark
 * is a wrong one. Re-check this list when simple-icons is upgraded.
 *
 * Listing a tool means we have shipped production systems on it, not that its
 * maker endorses us. Every surface that renders these says so in its caption.
 */

const ICONS: Partial<Record<StackKey, SimpleIcon>> = {
  claude: siClaude,
  digitalocean: siDigitalocean,
  docker: siDocker,
  nextjs: siNextdotjs,
  vercel: siVercel,
  supabase: siSupabase,
  bigquery: siGooglebigquery,
  cloudflare: siCloudflare,
  github: siGithub,
  resend: siResend,
  telegram: siTelegram,
  stripe: siStripe,
  ga4: siGoogleanalytics,
};

/** Display names that differ from StackItem.name in a compact row. */
export const LABELS: Partial<Record<StackKey, string>> = {
  codex: "OpenAI Codex",
  llama: "Llama",
};

export default function StackMark({
  stackKey,
  name,
  size = 22,
  tone = "brand",
}: {
  stackKey: StackKey;
  /** Used for the monogram fallback only. */
  name: string;
  size?: number;
  /** "brand" uses the maker's own colour; "current" inherits the text colour. */
  tone?: "brand" | "current";
}) {
  const icon = ICONS[stackKey];

  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex shrink-0 items-center justify-center rounded-sm border border-line-strong font-semibold text-muted"
        style={{ width: size, height: size, fontSize: size * 0.55 }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={tone === "brand" ? `#${icon.hex}` : "currentColor"}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}
