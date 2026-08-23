import Link from "next/link";
import Arrow from "../Arrow";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

/** One article as a ruled row. */
export default function PostRow({ post: p }: { post: PostMeta }) {
  return (
    <li>
      <Link
        href={`/blog/${p.slug}`}
        className="row-link group -mx-4 grid gap-3 px-4 py-7 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-ink">{p.topic}</p>
          <p className="mt-1 text-sm text-muted">
            <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time>, {p.readingMinutes} min read
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="t-h3 text-ink">{p.title}</h3>
          <p className="t-body measure mt-2">{p.description}</p>
        </div>
        <div className="hidden md:col-span-1 md:flex md:items-start md:justify-end md:pt-1">
          <Arrow size={20} className="text-ink transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    </li>
  );
}
