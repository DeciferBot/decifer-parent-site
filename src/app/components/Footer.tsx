import Link from "next/link";
import DeciferLogo from "./DeciferLogo";

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Financial Disclaimer", href: "/legal/financial-disclaimer" },
  { label: "Education Disclaimer", href: "/legal/education-disclaimer" },
  { label: "AI Policy", href: "/legal/ai-policy" },
  { label: "Child Safety", href: "/legal/child-safety" },
  { label: "Refund Policy", href: "/legal/refunds" },
];

const siteLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#method" },
  { label: "Boundaries", href: "#trust" },
  { label: "Early Access", href: "#early-access" },
];

const products = [
  { label: "DECIFER Trading", href: "https://decifertrading.com", external: true, live: true },
  { label: "DECIFER Learning", href: "https://deciferlearning.com", external: true, live: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <DeciferLogo size="sm" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Structured intelligence that reduces noise, organises context,
              and explains what matters in plain language.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
              Company
            </div>
            <ul className="space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
              Products
            </div>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-sm text-faint">More domains coming</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-faint">
            &copy; 2026 DECIFER. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            DECIFER provides intelligence, not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
