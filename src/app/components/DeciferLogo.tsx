import DeciferMark from "./DeciferMark";

/**
 * Mark + wordmark. Title case "Decifer" to match the three product sites,
 * which all set the wordmark this way. The mark itself is locked (see
 * docs/DECIFER_BRAND_MARK_SYSTEM.md); only the wordmark typesetting changed
 * in the 2026-08 overhaul.
 */

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

const TEXT_CLASS: Record<LogoSize, string> = {
  xs: "text-[0.9375rem]",
  sm: "text-[1.125rem]",
  md: "text-[1.25rem]",
  lg: "text-[1.625rem]",
  xl: "text-[2.25rem]",
};

const GAP: Record<LogoSize, string> = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-2.5",
  lg: "gap-3",
  xl: "gap-4",
};

interface DeciferLogoProps {
  size?: LogoSize;
  tone?: "ink" | "light";
  className?: string;
}

export default function DeciferLogo({
  size = "md",
  tone = "ink",
  className = "",
}: DeciferLogoProps) {
  return (
    <span
      className={`inline-flex items-center ${GAP[size]} ${className}`}
      aria-label="Decifer"
    >
      <DeciferMark size={size} />
      <span
        className={`font-bold tracking-[-0.02em] ${TEXT_CLASS[size]} ${
          tone === "light" ? "text-on-dark" : "text-ink"
        }`}
      >
        Decifer
      </span>
    </span>
  );
}
