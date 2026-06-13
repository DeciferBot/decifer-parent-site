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
  { label: "Problem", href: "/#problem" },
  { label: "Method", href: "/#method" },
  { label: "Products", href: "/#products" },
  { label: "Principles", href: "/#principles" },
  { label: "FAQ", href: "/#faq" },
  { label: "Early access", href: "/#early-access" },
];

const products = [
  { label: "Decifer Trading", href: "https://decifertrading.com", external: true },
  { label: "Decifer Learning", href: "https://deciferlearning.com", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-strong bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <DeciferLogo size="sm" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-body">
              DECIFER is the parent company behind Decifer Trading and Decifer
              Learning. We build AI intelligence products that help people
              understand complex information.
            </p>
          </div>

          {/* Site */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Site
            </div>
            <ul className="space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Products
            </div>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 space-y-3 border-t border-line-strong pt-8">
          <div className="grid gap-2 text-xs leading-relaxed text-muted sm:grid-cols-2">
            <p>Decifer Trading is not financial advice.</p>
            <p>
              Decifer Learning supports learning and does not replace teachers,
              schools or parents.
            </p>
          </div>
          <p className="text-xs text-muted">
            &copy; 2026 DECIFER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
