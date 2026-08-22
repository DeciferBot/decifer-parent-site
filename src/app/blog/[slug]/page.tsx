import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/app/components/SectionLabel";
import CtaBand from "@/app/components/CtaBand";
import PostCard from "@/app/components/blog/PostCard";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { servicesByKey } from "@/app/data/services";
import { jsonLd, SITE } from "@/lib/jsonld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.canonical || `/blog/${slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      locale: "en_AE",
      siteName: "DECIFER",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);

  const related = (post.relatedPostSlugs ?? [])
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const services = (post.relatedServiceKeys ?? []).map((k) => servicesByKey[k]).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE}/blog/${slug}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${slug}` },
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: { "@type": "Person", "@id": `${SITE}/about#amit-chopra`, name: post.author, url: `${SITE}/about` },
        publisher: { "@id": `${SITE}/#organization` },
        image: [post.image ? `${SITE}${post.image}` : `${SITE}/opengraph-image`],
        isPartOf: { "@id": `${SITE}/blog#blog` },
        keywords: post.tags.join(", "),
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DECIFER", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <article className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <header className="mx-auto mb-12 max-w-3xl px-5 sm:px-8">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 4L6 8l4 4" /></svg>
            All articles
          </Link>
          <SectionLabel>{post.topic}</SectionLabel>
          <h1 className="mb-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-body">{post.description}</p>
          <p className="text-sm text-muted">
            <span className="text-ink">{post.author}</span>
            <span className="mx-2 opacity-50">/</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.updatedAt && post.updatedAt !== post.publishedAt ? (
              <>
                <span className="mx-2 opacity-50">/</span>
                Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
              </>
            ) : null}
            <span className="mx-2 opacity-50">/</span>
            {post.readingMinutes} min read
          </p>
        </header>

        <div className="prose-decifer mx-auto max-w-3xl px-5 sm:px-8">
          <Body />
        </div>

        {services.length ? (
          <aside className="mx-auto mt-16 max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-cta/30 bg-cta/5 p-7">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cta">
                If this is your situation
              </p>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                This is the kind of work we do under{" "}
                {services.map((s, i) => (
                  <span key={s.key}>
                    <Link href={`/services/${s.key}`} className="font-semibold text-ink hover:underline">{s.navLabel}</Link>
                    {i < services.length - 1 ? " and " : ""}
                  </span>
                ))}
                . Most engagements start with a two-week audit.
              </p>
              <Link href="/contact" data-event={`blog_${slug}_cta`} className="btn btn-primary px-5 py-2.5">
                Book a discovery call
              </Link>
            </div>
          </aside>
        ) : null}

        {related.length ? (
          <aside className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Related</p>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </aside>
        ) : null}
      </article>

      <CtaBand eventPrefix={`blog_${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
