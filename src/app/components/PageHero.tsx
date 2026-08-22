import SectionLabel from "./SectionLabel";

/**
 * Header for standalone pages (/services, /work, /about ...). Sits under
 * the fixed nav, so it carries the top padding.
 */
export default function PageHero({
  label,
  title,
  lede,
  children,
  align = "center",
}: {
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  const centred = align === "center";
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas"
        aria-hidden="true"
      />
      <div
        className={`relative z-10 mx-auto max-w-4xl px-5 sm:px-8 ${centred ? "text-center" : ""}`}
      >
        <div className="anim-fade-up">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="anim-fade-up-1 mb-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p
            className={`anim-fade-up-2 text-lg leading-relaxed text-body sm:text-xl ${centred ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {lede}
          </p>
        ) : null}
        {children ? <div className="anim-fade-up-3 mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
