import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export default function PostCard({ post: p, scrollClass = "" }: { post: PostMeta; scrollClass?: string }) {
  return (
    <Link
      href={`/blog/${p.slug}`}
      className={`card-lift group flex flex-col rounded-2xl border border-line-strong bg-surface p-8 ${scrollClass}`}
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {p.topic} <span className="opacity-60">/</span> {p.readingMinutes} min read
      </p>
      <h3 className="mb-3 text-balance text-xl font-bold leading-snug text-ink">{p.title}</h3>
      <p className="mb-6 text-[15px] leading-relaxed text-body">{p.description}</p>
      <span className="mt-auto flex items-center justify-between text-xs text-muted">
        <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
          Read
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
