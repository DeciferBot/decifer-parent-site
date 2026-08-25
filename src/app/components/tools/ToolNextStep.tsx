import Link from "next/link";
import Arrow from "@/app/components/Arrow";

/**
 * The step after the result. Every outcome a tool can reach ends here,
 * including the weak ones: a reader whose numbers did not work still has
 * work to do, and this names it. The link is chosen by the outcome, so it
 * stays useful rather than becoming a pitch stapled to the bottom.
 */
export default function ToolNextStep({
  line,
  cta,
  href,
  event,
  secondary,
}: {
  /** One sentence: what to do with this verdict. */
  line: string;
  cta: string;
  href: string;
  /** Analytics event, same convention as the rest of the site. */
  event: string;
  /** The slower route, for a reader not ready to write to anyone yet. */
  secondary?: { label: string; href: string; event: string };
}) {
  return (
    <div className="mt-5 rounded-sm border border-line bg-canvas px-4 py-4">
      <p className="text-sm font-semibold text-ink">Next step</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-body">{line}</p>
      <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href={href} data-event={event} className="btn btn-ink px-4 py-2.5 text-sm">
          {cta}
          <Arrow className="row-arrow" size={15} />
        </Link>
        {secondary ? (
          <Link href={secondary.href} data-event={secondary.event} className="link text-sm">
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
