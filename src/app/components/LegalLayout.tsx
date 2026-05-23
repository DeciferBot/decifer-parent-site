import Link from "next/link";

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
  children?: React.ReactNode;
}

export default function LegalLayout({
  title,
  currentHref,
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
          Back to Decifer
        </Link>

        {/* Heading */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mb-10 text-sm text-faint">
          Effective date: to be confirmed
        </p>

        {/* Placeholder notice */}
        <div className="mb-10 rounded-xl border border-line bg-surface p-6">
          <p className="text-sm leading-relaxed text-muted">
            This policy is currently being drafted and will be published before
            Decifer&apos;s public launch. If you have questions in the interim,
            contact us at{" "}
            <a
              href="mailto:hello@decifer.io"
              className="text-brand hover:underline"
            >
              hello@decifer.io
            </a>
            .
          </p>
        </div>

        {children}

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
