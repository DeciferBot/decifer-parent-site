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
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "DECIFER",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/decifer-mark.svg`,
      },
      description:
        "DECIFER builds AI intelligence products that turn complex information into clear, plain-language understanding. Parent company of Decifer Markets, Decifer Learning and Decifer Marketing.",
      // Only list profiles that exist and are verified. Add Crunchbase
      // once that page is created. Do not add linkedin.com/company/decifer
      // (unrelated/unclaimed) — the parent company's page is deciferdxb.
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
    default: "DECIFER: Information is everywhere. Understanding is not.",
    template: "%s | DECIFER",
  },
  description:
    "DECIFER builds AI intelligence products that turn complex information into clear, plain-language understanding. Makers of Decifer Markets, Decifer Learning and Decifer Marketing.",
  metadataBase: new URL("https://www.decifer.io"),
  keywords: [
    "DECIFER",
    "AI intelligence",
    "plain-language intelligence",
    "Decifer Markets",
    "market intelligence",
    "Decifer Learning",
    "UK National Curriculum learning app",
    "Decifer Marketing",
    "marketing intelligence",
    "make sense of complex information",
  ],
  icons: {
    icon: [{ url: "/brand/decifer-favicon.svg", type: "image/svg+xml" }],
    apple: "/brand/decifer-app-icon.svg",
  },
  openGraph: {
    title: "DECIFER: Information is everywhere. Understanding is not.",
    description:
      "DECIFER builds AI intelligence products that help people make sense of complex information.",
    url: "https://www.decifer.io",
    siteName: "DECIFER",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECIFER: Information is everywhere. Understanding is not.",
    description:
      "DECIFER builds AI intelligence products that help people make sense of complex information.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
