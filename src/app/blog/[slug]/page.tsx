import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/app/components/CtaBand";
import PostRow from "@/app/components/blog/PostCard";
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
      siteName: "Decifer",
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
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <article className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <header className="container-x mb-12">
          <Link href="/blog" className="arrow-link mb-8 text-sm text-muted hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M10 4L6 8l4 4" /></svg>
            All articles
          </Link>
          <p className="label mb-4">{post.topic}</p>
          <h1 className="t-h1 max-w-4xl text-ink">{post.title}</h1>
          <p className="t-lede mt-6 max-w-2xl">{post.description}</p>
          <p className="mt-6 text-sm text-muted">
            <span className="font-medium text-ink">{post.author}</span>
            <span className="mx-2">&middot;</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.updatedAt && post.updatedAt !== post.publishedAt ? (
              <>
                <span className="mx-2">&middot;</span>
                Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
              </>
            ) : null}
            <span className="mx-2">&middot;</span>
            {post.readingMinutes} min read
          </p>
        </header>

        <div className="container-x">
          <div className="prose-decifer max-w-3xl">
            <Body />
          </div>
        </div>

        {services.length ? (
          <aside className="container-x mt-16">
            <div className="max-w-3xl border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink">If this is your situation</p>
              <p className="t-body mt-2">
                This is the kind of work we do under{" "}
                {services.map((s, i) => (
                  <span key={s.key}>
                    <Link href={`/services/${s.key}`} className="link">{s.name}</Link>
                    {i < services.length - 1 ? " and " : ""}
                  </span>
                ))}
                . Most engagements start with a two-week audit.
              </p>
              <Link href="/contact" data-event={`blog_${slug}_cta`} className="btn btn-primary mt-5">
                Book a 30-minute call
              </Link>
            </div>
          </aside>
        ) : null}

        {related.length ? (
          <aside className="container-x mt-16">
            <h2 className="t-h3 text-ink">Related</h2>
            <ul className="ruled mt-4">
              {related.map((p) => <PostRow key={p.slug} post={p} />)}
            </ul>
          </aside>
        ) : null}
      </article>

      <CtaBand eventPrefix={`blog_${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
