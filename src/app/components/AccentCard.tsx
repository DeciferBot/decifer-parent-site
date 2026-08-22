/**
 * The standard lifted card used across the site. Pass padding and any
 * scroll-reveal class via className.
 */
export default function AccentCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag className={`card-lift rounded-2xl border border-line-strong bg-surface ${className}`}>
      {children}
    </Tag>
  );
}
