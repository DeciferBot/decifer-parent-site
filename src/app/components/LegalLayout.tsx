import Link from "next/link";
import DeciferMark from "./DeciferMark";

const allLegal = [
  { title: "Privacy Policy", href: "/legal/privacy" },
  { title: "Terms of Use", href: "/legal/terms" },
  { title: "Financial Disclaimer", href: "/legal/financial-disclaimer" },
  { title: "Education Disclaimer", href: "/legal/education-disclaimer" },
  { title: "AI Accuracy and Source Policy", href: "/legal/ai-policy" },
  { title: "Child Safety Policy", href: "/legal/child-safety" },
  { title: "Refund Policy", href: "/legal/refunds" },
];

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
  return (
    <div className="min-h-screen bg-canvas pb-24 pt-32">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        {/* Back */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M10 4L6 8l4 4" />
          </svg>
          Back to DECIFER
        </Link>

        {/* Brand */}
        <div className="mb-6">
          <DeciferMark size="sm" />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-sm text-faint">Last updated: {lastUpdated}</p>

        {/* Draft notice */}
        <div className="mb-10 rounded-xl border border-brand/20 bg-brand/5 p-5">
          <div className="mb-1 flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#3d7eff"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v3.5M8 11v.5" />
            </svg>
            <span className="text-xs font-semibold text-brand">
              Early Access Draft
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            This is a draft policy for DECIFER&apos;s early access period. It
            is written in plain English and is intended to be transparent, not
            as a substitute for formal legal advice. Final versions will be
            reviewed by legal counsel before commercial launch. Questions?
            Contact{" "}
            <a
              href="mailto:hello@decifer.io"
              className="text-brand hover:underline"
            >
              hello@decifer.io
            </a>
            .
          </p>
        </div>

        {/* Policy content */}
        <div className="legal-prose">{children}</div>

        {/* Other policies */}
        <div className="mt-14 border-t border-line pt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
            Other policies
          </p>
          <ul className="space-y-2">
            {allLegal
              .filter((p) => p.href !== currentHref)
              .map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
