/**
 * Section heading cadence for the whole site: heading in the left columns,
 * lede in the right. No eyebrow labels, no numbering. The heading does the
 * work.
 */
export default function SectionHead({
  title,
  lede,
  as: Tag = "h2",
  tone = "ink",
  className = "",
  children,
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  as?: "h1" | "h2";
  tone?: "ink" | "light";
  className?: string;
  children?: React.ReactNode;
}) {
  const light = tone === "light";
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:gap-10 ${className}`}>
      <Tag
        className={`t-h2 md:col-span-6 lg:col-span-5 ${light ? "text-on-dark" : "text-ink"}`}
      >
        {title}
      </Tag>
      {lede || children ? (
        <div className="md:col-span-6 md:col-start-7 lg:col-start-7">
          {lede ? (
            <p className={`t-lede measure ${light ? "text-on-dark-2" : ""}`}>{lede}</p>
          ) : null}
          {children}
        </div>
      ) : null}
    </div>
  );
}
