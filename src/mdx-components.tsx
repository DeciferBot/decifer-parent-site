import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX element mapping. Required by @next/mdx with App Router.
 * Next 16: useMDXComponents takes no arguments. Do not add a parameter.
 *
 * Styling lives in .prose-decifer (globals.css); elements here only add
 * behaviour, like internal links through next/link.
 */
const components: MDXComponents = {
  a: ({ href = "", children, ...rest }) =>
    href.startsWith("/") ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
