"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DeciferLogo from "./DeciferLogo";

const navLinks = [
  { label: "What we do", href: "/services" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the sheet is open. Links close it on click.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-canvas transition-[border-color] duration-200 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" aria-label="Decifer home" className="rounded-sm">
          <DeciferLogo size="sm" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-[0.9375rem] font-medium transition-colors duration-150 hover:text-ink ${
                isActive(l.href) ? "text-ink" : "text-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            data-event="nav_book_call"
            className="btn btn-primary px-4 py-2.5 text-sm"
          >
            Discuss a process
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-sm p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M17 5L5 17M5 5l12 12" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet: full height under the bar */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 bg-canvas md:hidden"
      >
        <div className="container-x flex h-full flex-col pt-4">
          <ul className="ruled">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-xl font-semibold text-ink"
                >
                  {l.label}
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              data-event="nav_book_call"
              className="btn btn-primary w-full"
            >
              Discuss a business process
            </Link>
            <p className="mt-4 text-sm text-muted">
              Or email{" "}
              <a href="mailto:hello@decifer.io" className="link">
                hello@decifer.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
