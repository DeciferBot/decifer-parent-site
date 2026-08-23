/**
 * Small semibold label. Used sparingly, only where a list really needs a
 * name (for example "A good fit when" above a list of qualifiers). Not a
 * section eyebrow; sections use SectionHead.
 */
export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mb-3 text-sm font-semibold text-ink ${className}`}>{children}</p>
  );
}
