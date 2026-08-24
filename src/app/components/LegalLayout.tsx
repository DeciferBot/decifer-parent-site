import Link from "next/link";

const allLegal = [
  { title: "Privacy Policy", href: "/legal/privacy" },
  { title: "Terms of Use", href: "/legal/terms" },
  { title: "Financial Disclaimer", href: "/legal/financial-disclaimer" },
  { title: "Education Disclaimer", href: "/legal/education-disclaimer" },
  { title: "AI Accuracy and Source Policy", href: "/legal/ai-policy" },
  { title: "Child Safety Policy", href: "/legal/child-safety" },
  { title: "Refund Policy", href: "/legal/refunds" },
  { title: "Client Confidentiality", href: "/legal/client-confidentiality" },
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

  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-4 text-sm font-medium text-muted">Legal</p>
          <h1 className="t-h1 text-ink">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

          <div className="mt-8 border-t border-line pt-5 text-sm leading-relaxed text-body">
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
            <ul className="mt-3 space-y-2">
              {allLegal.map((p) => (
                <li key={p.href}>
                  {p.href === currentHref ? (
                    <span className="text-sm font-medium text-ink">{p.title}</span>
                  ) : (
                    <Link href={p.href} className="text-sm text-body hover:text-ink">
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
