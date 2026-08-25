import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import type { AccentHue } from "../data/accents";
import { accent } from "../data/accents";

/**
 * Each policy carries a mark and a hue, the same pair everywhere it is
 * linked. A legal index is exactly the place a reader scans rather than
 * reads, and eight identical text links is the hardest possible thing to
 * scan.
 */
const allLegal: {
  title: string;
  href: string;
  icon: IconName;
  hue: AccentHue;
}[] = [
  { title: "Privacy Policy", href: "/legal/privacy", icon: "boundary", hue: "blue" },
  { title: "Terms of Use", href: "/legal/terms", icon: "rule", hue: "teal" },
  { title: "Financial Disclaimer", href: "/legal/financial-disclaimer", icon: "markets", hue: "blue" },
  { title: "Education Disclaimer", href: "/legal/education-disclaimer", icon: "education", hue: "violet" },
  { title: "AI Accuracy and Source Policy", href: "/legal/ai-policy", icon: "log", hue: "orange" },
  { title: "Child Safety Policy", href: "/legal/child-safety", icon: "health", hue: "green" },
  { title: "Refund Policy", href: "/legal/refunds", icon: "handover", hue: "amber" },
  { title: "Client Confidentiality", href: "/legal/client-confidentiality", icon: "record", hue: "plum" },
];

const SITE = "https://www.decifer.io";

interface LegalLayoutProps {
  title: string;
  currentHref: string;
  lastUpdated?: string;
  children?: React.ReactNode;
}

export default function LegalLayout({
  title,
  currentHref,
  lastUpdated = "May 2026",
  children,
}: LegalLayoutProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE}${currentHref}` },
    ],
  };

  const current = allLegal.find((p) => p.href === currentHref);

  return (
    <div className="pb-24">
      <div
        className="field-grid border-b border-line bg-surface pt-28 pb-10 sm:pt-36"
        style={current ? accent(current.hue) : undefined}
      >
        <div className="container-x">
          <div className="mb-5 flex items-center gap-3">
            {current ? (
              <span className="icon-tile">
                <Icon name={current.icon} />
              </span>
            ) : null}
            <p className="label">Legal</p>
          </div>
          <h1 className="t-h1 max-w-3xl text-ink">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-x grid gap-12 pt-12 lg:grid-cols-12">
        <div className="lg:col-span-8">

          <div className="rounded-sm border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-body">
            <p>
              <span className="font-semibold text-ink">Early access draft. </span>
              This policy is written in plain English for Decifer&apos;s early
              access period. It is meant to be clear, not a substitute for
              legal advice. Final versions will be reviewed by counsel before
              commercial launch. Questions to{" "}
              <a href="mailto:hello@decifer.io" className="link">
                hello@decifer.io
              </a>
              .
            </p>
          </div>

          <div className="legal-prose mt-10 max-w-3xl">{children}</div>
        </div>

        <aside className="lg:col-span-3 lg:col-start-10">
          <div className="border-t border-line pt-5 lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-ink">All policies</p>
            <ul className="mt-4 space-y-1">
              {allLegal.map((p) => (
                <li key={p.href} style={accent(p.hue)}>
                  {p.href === currentHref ? (
                    <span className="flex items-center gap-2.5 rounded-sm bg-surface px-2 py-1.5 text-sm font-medium text-ink">
                      <span className="text-[var(--accent)]">
                        <Icon name={p.icon} size={16} />
                      </span>
                      {p.title}
                    </span>
                  ) : (
                    <Link
                      href={p.href}
                      className="flex items-center gap-2.5 rounded-sm px-2 py-1.5 text-sm text-body transition-colors hover:bg-surface hover:text-ink"
                    >
                      <span className="text-[var(--accent)]">
                        <Icon name={p.icon} size={16} />
                      </span>
                      {p.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
