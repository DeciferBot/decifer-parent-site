import Icon, { type IconName } from "./Icon";
import type { AccentHue } from "../data/accents";
import { accent } from "../data/accents";

/**
 * Header for inner pages. Sits under the fixed nav, so it carries the top
 * padding. Left aligned, heading in the left columns, lede to the right on
 * wide screens, like SectionHead but with an h1 scale.
 *
 * The hero is the one place every page gets an identity: it sits on a
 * measured grid field that stops the top of the site reading as blank
 * paper, and where the page belongs to something with a mark and a hue (a
 * service, an industry, a case) it leads with that mark. A page that
 * belongs to nothing simply omits both and keeps the plain header.
 */
export default function PageHero({
  kicker,
  title,
  lede,
  icon,
  hue,
  children,
}: {
  /** One short line above the title, for example a sector or a category. */
  kicker?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** The page's own mark, where it has one. */
  icon?: IconName;
  /** The accent that follows this thing across the site. */
  hue?: AccentHue;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="field-grid border-b border-line bg-surface pt-28 pb-12 sm:pt-36 sm:pb-16"
      style={hue ? accent(hue) : undefined}
    >
      <div className="container-x">
        {icon || kicker ? (
          <div className="mb-5 flex items-center gap-3">
            {icon ? (
              <span className="icon-tile">
                <Icon name={icon} />
              </span>
            ) : null}
            {kicker ? <p className="label">{kicker}</p> : null}
          </div>
        ) : null}
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <h1 className="t-h1 text-ink md:col-span-7">{title}</h1>
          {lede || children ? (
            <div className="md:col-span-5 md:pt-2">
              {lede ? <p className="t-lede measure">{lede}</p> : null}
              {children ? <div className="mt-6">{children}</div> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
