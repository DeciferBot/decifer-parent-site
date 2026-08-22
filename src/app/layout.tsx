import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
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
import { jsonLd } from "@/lib/jsonld";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
      name: "DECIFER",
      url: SITE,
      email: "hello@decifer.io",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/decifer-mark.svg`,
      },
      image: `${SITE}/opengraph-image`,
      description:
        "DECIFER is an AI solutions company based in Dubai. It builds AI agents, workflow automation, data and reporting systems and complete products for businesses, and it builds and runs its own products using the same method.",
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
      name: "DECIFER",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "DECIFER: AI agents, automation and products, built in Dubai",
    template: "%s | DECIFER",
  },
  description:
    "DECIFER is an AI company in Dubai that builds AI agents, workflow automation, reporting systems and complete products for businesses. It runs three public products with the same method. AI that does a job, not AI that demos well.",
  metadataBase: new URL("https://www.decifer.io"),
  keywords: [
    "DECIFER",
    "AI company Dubai",
    "AI agent development Dubai",
    "AI consultant Dubai",
    "workflow automation Dubai",
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
    title: "DECIFER: AI that does a job, not AI that demos well",
    description:
      "An AI company in Dubai building agents, automation and complete products for businesses. Three public products, one method.",
    url: "https://www.decifer.io",
    siteName: "DECIFER",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECIFER: AI that does a job, not AI that demos well",
    description:
      "An AI company in Dubai building agents, automation and complete products for businesses. Three public products, one method.",
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
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}>
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
