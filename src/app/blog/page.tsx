import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import PostCard from "@/app/components/blog/PostCard";
import CtaBand from "@/app/components/CtaBand";
import { getAllPosts } from "@/lib/blog";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog: AI in production, written by people who run it",
  description:
    "Plain-English writing on AI agents, automation and building products, from a Dubai company that runs its own. Myths broken, costs shown, mistakes admitted.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    url: `${SITE}/blog`,
    name: "DECIFER blog",
    publisher: { "@id": `${SITE}/#organization` },
    isPartOf: { "@id": `${SITE}/#website` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <PageHero
        label="Blog"
        title={
          <>
            Written by people
            <br />
            <span className="font-display font-normal italic text-cta">who run it.</span>
          </>
        }
        lede="Plain English on AI agents, automation and building products. Costs shown, myths broken, mistakes admitted. Nothing here is written to rank; it is written to be sent to a client who asked the question."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {posts.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((p, i) => (
                <PostCard key={p.slug} post={p} scrollClass={`scroll-reveal-${(i % 2) + 1}`} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">First articles are on their way.</p>
          )}
        </div>
      </section>

      <CtaBand eventPrefix="blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
