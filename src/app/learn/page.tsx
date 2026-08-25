import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import PostRow from "@/app/components/blog/PostCard";
import CtaBand from "@/app/components/CtaBand";
import { getPost, type PostMeta } from "@/lib/blog";
import { jsonLd, SITE, RSS_ALTERNATE_TYPES } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Learn: how to build production-ready software with AI",
  description:
    "A free field guide for people building with AI coding tools. What production-ready means, the mistakes that follow vibe coders into production, and step-by-step guides to the most common automations.",
  alternates: { canonical: "/learn", types: RSS_ALTERNATE_TYPES },
};

/**
 * The learning path, in reading order. Each entry names a post by slug and
 * says why it sits at that stage, so the page grows by adding a line here
 * when a new article joins the path.
 */
const PATH: { slug: string; stage: string; note: string }[] = [
  {
    slug: "what-production-ready-actually-means",
    stage: "Start here",
    note: "The standard everything else builds to: six questions that separate a demo from a product, each answerable with evidence.",
  },
  {
    slug: "seven-ai-myths-dubai-business-owners-keep-paying-for",
    stage: "Clear the myths",
    note: "The beliefs that waste the most money, each one broken by a production system rather than an argument.",
  },
  {
    slug: "nine-vibe-coding-mistakes-that-follow-you-into-production",
    stage: "Avoid the mistakes",
    note: "The nine failures we check for in the first hour of looking at any inherited codebase, with the fix for each.",
  },
  {
    slug: "is-your-vibe-coded-app-safe-to-launch",
    stage: "Check before launch",
    note: "The six security checks to run before real users arrive, in the order we run them on any codebase we inherit.",
  },
  {
    slug: "how-to-automate-three-business-processes-with-ai",
    stage: "Build something real",
    note: "The three most requested automations, written out step by step with the failure points marked.",
  },
  {
    slug: "where-we-deleted-the-ai",
    stage: "Learn the judgement",
    note: "The senior skill: five times the right decision was to take the model out of a working system.",
  },
];

const CHECKLIST = [
  "Name the three most likely failures. Each one has a written answer.",
  "“What did it do yesterday?” is answerable in under a minute.",
  "Tests exist, and a failing test blocks the release.",
  "A backup has actually been restored, and there is a date to prove it.",
  "Secrets live on the server, and every endpoint denies by default.",
  "Every account is in the business's own name, and a named person answers.",
];

export default function LearnPage() {
  // Fail the build rather than silently shrink the path (same loud-fail
  // rule as the frontmatter checks in lib/blog.ts): a renamed or drafted
  // post would otherwise drop a stage while prose still links to it.
  const path: ({ stage: string; note: string; slug: string; post: PostMeta })[] = PATH.map(
    (entry) => {
      const post = getPost(entry.slug);
      if (!post) throw new Error(`/learn path references missing or draft post "${entry.slug}"`);
      return { ...entry, post };
    }
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/learn#page`,
        url: `${SITE}/learn`,
        name: "Learn: how to build production-ready software with AI",
        description:
          "A free field guide for people building with AI coding tools, from an AI implementation company in Dubai that runs its own products.",
        isPartOf: { "@id": `${SITE}/#website` },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          itemListElement: path.map((entry, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: entry.post.title,
            url: `${SITE}/blog/${entry.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Decifer", item: SITE },
          { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE}/learn` },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        kicker="Learn"
        title="Build production-ready software with AI."
        lede="AI tools make the first day cheap. This guide is about every day after that. Written by a Dubai company that builds and runs AI systems for a living, and published free in full."
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <p className="label mb-4">The path, in order</p>
          <div className="panel">
            <ul className="divide-y divide-line">
              {path.map((entry, i) => (
                <li key={entry.slug}>
                  <div className="px-6 pt-7">
                    <p className="text-sm font-semibold text-ink">
                      {i + 1}. {entry.stage}
                    </p>
                    <p className="mt-1 text-sm text-muted">{entry.note}</p>
                  </div>
                  <ul>
                    <PostRow post={entry.post} />
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-x">
          <div className="panel">
            <div className="panel-head">
              <h2 className="label">The production checklist</h2>
            </div>
            <div className="px-6 py-7">
              <p className="t-body measure">
                The short version of the whole guide. A system is production-ready when all
                six hold, with evidence:
              </p>
              <ol className="mt-5 max-w-2xl list-decimal space-y-3 pl-5">
                {CHECKLIST.map((item) => (
                  <li key={item} className="t-body">
                    {item}
                  </li>
                ))}
              </ol>
              <p className="t-body measure mt-6">
                Most weekend builds clear two of the six on a first pass, which is normal.
                The rest is a work list, and every item on it is a day or two of work. The
                full standard is in{" "}
                <Link href="/blog/what-production-ready-actually-means" className="link">
                  What production-ready actually means
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eventPrefix="learn" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </>
  );
}
