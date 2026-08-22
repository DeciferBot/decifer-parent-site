"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeciferLogo from "./DeciferLogo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
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
            href="/contact"
            data-event="nav_book_call"
            className="btn btn-primary px-4 py-2"
          >
            Book a call
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
                href="/contact"
                onClick={() => setOpen(false)}
                data-event="nav_book_call"
                className="btn btn-primary w-full py-3"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
