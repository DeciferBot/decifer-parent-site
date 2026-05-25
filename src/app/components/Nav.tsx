"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeciferLogo from "./DeciferLogo";

const navLinks = [
  { label: "Problem", href: "/#problem" },
  { label: "Method", href: "/#method" },
  { label: "Products", href: "/#products" },
  { label: "Principles", href: "/#principles" },
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
          ? "border-b border-line-strong bg-canvas/92 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="DECIFER home"
          className="rounded-md transition-opacity hover:opacity-90"
        >
          <DeciferLogo size="sm" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-body transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#early-access"
            className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cta/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff6a36] hover:shadow-lg hover:shadow-cta/30"
          >
            Early access
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="rounded-md p-2 text-body transition-colors hover:text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
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
        <div className="border-b border-line-strong bg-surface/95 px-5 pb-5 backdrop-blur-xl md:hidden">
          <div className="space-y-1 pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-body transition-colors hover:bg-surface-alt hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#early-access"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-cta py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#ff6a36]"
              >
                Early access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
