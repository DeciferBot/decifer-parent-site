import Link from "next/link";
import Arrow from "@/app/components/Arrow";

/**
 * The step after the verdict. Every outcome a tool can reach ends here,
 * including the outcomes that say do not build. An honest no is still a
 * decision the reader has to act on, so the tool names the next move
 * instead of stopping at the bad news. The link is chosen by the verdict,
 * so it stays useful rather than becoming a pitch stapled to the bottom.
 */
export default function ToolNextStep({
  line,
  cta,
  href,
  event,
}: {
  /** One sentence: what to do with this verdict. */
  line: string;
  cta: string;
  href: string;
  /** Analytics event, same convention as the rest of the site. */
  event: string;
}) {
  return (
    <div className="mt-5 rounded-sm border border-line bg-canvas px-4 py-4">
      <p className="text-sm font-semibold text-ink">Next step</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-body">{line}</p>
      <Link
        href={href}
        data-event={event}
        className="btn btn-secondary mt-3.5 px-4 py-2.5 text-sm"
      >
        {cta}
        <Arrow className="row-arrow" size={15} />
      </Link>
    </div>
  );
}
