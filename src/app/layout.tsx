import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { products } from "./data/products";
import { servicesOrdered } from "./data/services";
import { stack } from "./data/stack";
import { jsonLd, RSS_ALTERNATE_TYPES } from "@/lib/jsonld";

// Daylight Operations, set 2026-09-01, replacing Figtree + Source Serif 4.
// Three families, each with one job. Instrument Sans carries every sentence a
// buyer reads; Instrument Serif does the headings and pull quotes; IBM Plex
// Mono sets every figure and every instrument label, always tabular.
// The variable names are kept so nothing downstream has to change.
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-brand",
  display: "swap",
});

const SITE = "https://www.decifer.io";
const productNodeId = (key: string) => `${SITE}/#decifer-${key}`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // Dual type so existing @id references keep resolving. No address,
      // telephone or geo until the registered values are confirmed: a
      // placeholder here is a trust signal that can be disproven.
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE}/#organization`,
      name: "Decifer",
      url: SITE,
      email: "hello@decifer.io",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/decifer-mark.svg`,
      },
      image: `${SITE}/opengraph-image`,
      description:
        "Decifer is an AI implementation company based in Dubai. It takes business processes from AI pilot to dependable daily operation: assessment, workflow redesign, build, integration and measurement. It also builds and runs its own products using the same method.",
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      founder: { "@type": "Person", "@id": `${SITE}/about#amit-chopra`, name: "Amit Chopra" },
      knowsAbout: [
        "AI agents",
        "Workflow automation",
        "Data and reporting automation",
        "AI product development",
        ...stack.map((t) => t.name),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI services",
        itemListElement: servicesOrdered.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/services/${s.key}#service`,
            name: s.name,
            description: s.summary,
            url: `${SITE}/services/${s.key}`,
            provider: { "@id": `${SITE}/#organization` },
          },
        })),
      },
      // Only list profiles that exist and are verified. Add Crunchbase
      // once that page is created. Do not add linkedin.com/company/decifer
      // (unrelated/unclaimed). The parent company's page is deciferdxb.
      sameAs: [
        "https://github.com/DeciferBot",
        "https://www.linkedin.com/company/deciferdxb/",
      ],
      subOrganization: products.map((p) => ({ "@id": productNodeId(p.key) })),
    },
    ...products.map((p) => ({
      "@type": "Organization",
      "@id": productNodeId(p.key),
      name: p.name,
      ...(p.href ? { url: p.href } : {}),
      parentOrganization: { "@id": `${SITE}/#organization` },
      description: p.tagline,
    })),
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Decifer",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Decifer | AI implementation company in Dubai, from pilot to production",
    template: "%s | Decifer",
  },
  description:
    "Decifer turns AI investment into operating results: assessment, workflow redesign, build, integration, deployment and measurement, with client ownership at handover. Based in Dubai, working with the Gulf, UK and Singapore.",
  metadataBase: new URL("https://www.decifer.io"),
  alternates: { types: RSS_ALTERNATE_TYPES },
  keywords: [
    "Decifer",
    "AI implementation company",
    "AI implementation Dubai",
    "AI company Dubai",
    "AI agent development Dubai",
    "AI consultant Dubai",
    "AI consulting Dubai",
    "workflow automation Dubai",
    "AI workflow automation",
    "AI automation UAE",
    "AI product development Dubai",
    "data and reporting automation",
    "Decifer Markets",
    "Decifer Learning",
    "Decifer Marketing",
  ],
  icons: {
    icon: [{ url: "/brand/decifer-favicon.svg", type: "image/svg+xml" }],
    apple: "/brand/decifer-app-icon.svg",
  },
  openGraph: {
    title: "Decifer: AI implementation, from pilot to production",
    description:
      "An AI implementation company in Dubai. Assessment, workflow redesign, build, integration and measurement. Three public products run on the same method, every account in the client's name.",
    url: "https://www.decifer.io",
    siteName: "Decifer",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decifer: AI implementation, from pilot to production",
    description:
      "An AI implementation company in Dubai. Assessment, workflow redesign, build, integration and measurement. Three public products run on the same method, every account in the client's name.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }}
        />
        <AnalyticsEvents />
        <Analytics />
        <SpeedInsights />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
