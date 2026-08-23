import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import PostRow from "@/app/components/blog/PostCard";
import CtaBand from "@/app/components/CtaBand";
import { getAllPosts } from "@/lib/blog";
import { jsonLd, SITE } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog: AI in production, written by people who run it",
  description:
    "Plain-English writing on AI agents, automation and building products, from a Dubai company that runs its own. Costs shown, myths broken, mistakes admitted.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    url: `${SITE}/blog`,
    name: "Decifer blog",
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
        kicker="Blog"
        title="Written by the people who run it."
        lede="Plain English on AI agents, automation and building products. Costs shown, mistakes admitted. Each piece is written to be sent to a client who asked the question."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          {posts.length ? (
            <ul className="ruled">
              {posts.map((p) => (
                <PostRow key={p.slug} post={p} />
              ))}
            </ul>
          ) : (
            <p className="text-muted">First articles are on their way.</p>
          )}
        </div>
      </section>

      <CtaBand eventPrefix="blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
