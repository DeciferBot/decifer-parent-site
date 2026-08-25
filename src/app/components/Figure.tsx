import Icon, { type IconName } from "./Icon";
import type { AccentHue } from "../data/accents";
import { accentAt } from "../data/accents";

/**
 * A verified figure, sized to be read from across the room.
 *
 * The site's proof used to sit at body size inside paragraphs, which is
 * where evidence goes to die. A figure tile states the number, what it
 * counts, and where it was read from. The source line is not optional:
 * proof.ts promises every figure ships with its origin, and a big number
 * without one is exactly the thing this business exists to argue against.
 */
export default function Figure({
  value,
  label,
  source,
  icon,
  hue,
  index = 0,
  tone = "light",
  size = "md",
}: {
  value: string;
  label: string;
  /** Where the figure was read from. Omitted only for external citations
   *  that carry their publisher in `label`. */
  source?: string;
  icon?: IconName;
  hue: AccentHue;
  index?: number;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`accent-cap px-5 py-6 sm:px-6 ${
        dark ? "bg-dark-2" : "bg-panel"
      }`}
      style={
        dark
          ? ({
              "--accent": `var(--color-a-${hue}-on-dark)`,
              "--i": index,
            } as React.CSSProperties)
          : accentAt(hue, index)
      }
    >
      {icon ? (
        <span
          className={`icon-tile icon-tile-sm mb-4 ${dark ? "icon-tile-dark" : ""}`}
        >
          <Icon name={icon} size={16} />
        </span>
      ) : null}
      <p
        className={`figure-num figure-accent ${size === "lg" ? "figure-num-lg" : ""}`}
      >
        {value}
      </p>
      <p
        className={`mt-3 text-[0.9375rem] leading-snug ${
          dark ? "text-on-dark" : "text-ink"
        }`}
      >
        {label}
      </p>
      {source ? (
        <p className={`mt-3 text-xs leading-relaxed ${dark ? "text-on-dark-2" : "text-muted"}`}>
          {source}
        </p>
      ) : null}
    </div>
  );
}
