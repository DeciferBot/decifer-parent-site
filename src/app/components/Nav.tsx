"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#method" },
  { label: "Trust", href: "#trust" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="select-none text-lg font-semibold tracking-tight text-ink"
        >
          Decifer
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg border border-brand/30 bg-brand/5 px-4 py-2 text-sm font-medium text-brand transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
          >
            Login
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="p-2 text-muted transition-colors hover:text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M17 5L5 17M5 5l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-line bg-surface/95 px-5 pb-5 backdrop-blur-xl md:hidden">
          <div className="space-y-1 pt-2">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-alt hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#"
                className="block rounded-lg border border-brand/30 bg-brand/5 py-3 text-center text-sm font-medium text-brand transition-all hover:bg-brand hover:text-white"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
