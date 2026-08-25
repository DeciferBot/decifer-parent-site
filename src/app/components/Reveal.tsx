"use client";

import { useEffect, useRef } from "react";

/**
 * Staggers direct children into view, once, the first time the group is
 * scrolled to.
 *
 * Deliberately narrow: this is for genuine lists where the order carries
 * meaning (the cited statistics, the six failure points). Applying it to
 * every section is the fade-up-on-scroll template PRODUCT.md lists as an
 * anti-reference, so it is not a general-purpose wrapper.
 *
 * Content is visible by default. The hidden state is only ever set from
 * JavaScript, and only when the observer is actually available, so a
 * crawler, a headless render or a JS failure still gets the full band.
 * Users who ask for reduced motion are never hidden at all.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      // A hidden tab pauses CSS animations, so hiding the group now would
      // leave it blank until the tab is focused. Not worth the entrance.
      document.visibilityState !== "visible"
    ) {
      return;
    }

    // Already past it on load (deep link, restored scroll): show it, no replay.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    el.setAttribute("data-reveal", "ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.setAttribute("data-reveal", "in");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLUListElement & HTMLOListElement>}
      data-reveal=""
      className={className}
    >
      {children}
    </Tag>
  );
}
