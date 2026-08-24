/**
 * Header for inner pages. Sits under the fixed nav, so it carries the top
 * padding. Left aligned, heading in the left columns, lede to the right on
 * wide screens, like SectionHead but with an h1 scale.
 */
export default function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  /** One short line above the title, for example a sector or a category. */
  kicker?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="container-x">
        {kicker ? <p className="label mb-4">{kicker}</p> : null}
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
