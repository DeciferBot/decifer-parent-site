import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import PostRow from "@/app/components/blog/PostCard";
import CtaBand from "@/app/components/CtaBand";
import Icon, { type IconName } from "@/app/components/Icon";
import type { AccentHue } from "@/app/data/accents";
import { accent } from "@/app/data/accents";
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
const PATH: {
  slug: string;
  stage: string;
  note: string;
  icon: IconName;
  hue: AccentHue;
}[] = [
  {
    slug: "what-production-ready-actually-means",
    icon: "boundary",
    hue: "blue",
    stage: "Start here",
    note: "The standard everything else builds to: six questions that separate a demo from a product, each answerable with evidence.",
  },
  {
    slug: "seven-ai-myths-dubai-business-owners-keep-paying-for",
    icon: "rule",
    hue: "amber",
    stage: "Clear the myths",
    note: "The beliefs that waste the most money, each one broken by a production system rather than an argument.",
  },
  {
    slug: "nine-vibe-coding-mistakes-that-follow-you-into-production",
    icon: "log",
    hue: "plum",
    stage: "Avoid the mistakes",
    note: "The nine failures we check for in the first hour of looking at any inherited codebase, with the fix for each.",
  },
  {
    slug: "is-your-vibe-coded-app-safe-to-launch",
    icon: "health",
    hue: "green",
    stage: "Check before launch",
    note: "The six security checks to run before real users arrive, in the order we run them on any codebase we inherit.",
  },
  {
    slug: "how-to-automate-three-business-processes-with-ai",
    icon: "agent",
    hue: "orange",
    stage: "Build something real",
    note: "The three most requested automations, written out step by step with the failure points marked.",
  },
  {
    slug: "where-we-deleted-the-ai",
    icon: "handover",
    hue: "violet",
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
  const path: ((typeof PATH)[number] & { post: PostMeta })[] = PATH.map(
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
        icon="education"
        hue="violet"
        title="Build production-ready software with AI."
        lede="AI tools make the first day cheap. This guide is about every day after that. Written by a Dubai company that builds and runs AI systems for a living, and published free in full."
      />

      <section className="band band-tight">
        <div className="container-x">
          <p className="label mb-6">The path, in order</p>
          <ol className="path">
            {path.map((entry, i) => (
              <li key={entry.slug} className="path-step" style={accent(entry.hue)}>
                <span className="path-mark">
                  <Icon name={entry.icon} size={18} />
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="t-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.0625rem] font-semibold text-ink">
                    {entry.stage}
                  </p>
                </div>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                  {entry.note}
                </p>
                <ul className="mt-4 overflow-hidden rounded-sm border border-line bg-panel">
                  <PostRow post={entry.post} />
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-tight band-tint">
        <div className="container-x">
          <div className="panel">
            <div className="panel-head">
              <h2 className="label">The production checklist</h2>
              <span className="text-sm text-muted">Six, all with evidence</span>
            </div>
            <div className="px-6 py-7">
              <p className="t-body measure">
                The short version of the whole guide. A system is production-ready when all
                six hold, with evidence:
              </p>
              <ol className="mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
                {CHECKLIST.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="step-num step-num-on mt-0.5">{i + 1}</span>
                    <span className="t-body text-[0.9375rem]">{item}</span>
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
