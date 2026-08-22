/**
 * Bracketed section eyebrow, e.g. "[ The Problem ]".
 * Used by every homepage section and by the standalone pages
 * (/services, /work, /products, /stack, /about, /contact).
 */
export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
      <span className="opacity-60">[ </span>
      {children}
      <span className="opacity-60"> ]</span>
    </div>
  );
}
