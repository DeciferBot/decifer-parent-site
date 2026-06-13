import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnalyticsEvents from "./components/AnalyticsEvents";

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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.decifer.io/#organization",
      name: "DECIFER",
      url: "https://www.decifer.io",
      logo: {
        "@type": "ImageObject",
        url: "https://www.decifer.io/brand/decifer-mark.svg",
      },
      description:
        "DECIFER builds AI intelligence products that turn complex information into clear, plain-language understanding. Parent company of Decifer Trading and Decifer Learning.",
      subOrganization: [
        { "@id": "https://www.decifer.io/#decifer-trading" },
        { "@id": "https://www.decifer.io/#decifer-learning" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.decifer.io/#decifer-trading",
      name: "Decifer Trading",
      url: "https://decifertrading.com",
      parentOrganization: { "@id": "https://www.decifer.io/#organization" },
      description:
        "Decifer Trading turns market noise into a plain-English read on what is moving, why it matters and what to watch. Market intelligence and equity research, not financial advice.",
    },
    {
      "@type": "Organization",
      "@id": "https://www.decifer.io/#decifer-learning",
      name: "Decifer Learning",
      url: "https://deciferlearning.com",
      parentOrganization: { "@id": "https://www.decifer.io/#organization" },
      description:
        "Decifer Learning is a guided companion for the UK National Curriculum. Children learn, practise and quiz through each topic while parents see real progress.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.decifer.io/#website",
      url: "https://www.decifer.io",
      name: "DECIFER",
      publisher: { "@id": "https://www.decifer.io/#organization" },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "DECIFER — Information is everywhere. Understanding is not.",
    template: "%s | DECIFER",
  },
  description:
    "DECIFER builds AI intelligence products that turn complex information into clear, plain-language understanding. Makers of Decifer Trading market intelligence and Decifer Learning.",
  metadataBase: new URL("https://www.decifer.io"),
  alternates: { canonical: "/" },
  keywords: [
    "DECIFER",
    "AI intelligence",
    "plain-language intelligence",
    "Decifer Trading",
    "market intelligence",
    "Decifer Learning",
    "UK National Curriculum learning app",
    "make sense of complex information",
  ],
  icons: {
    icon: [{ url: "/brand/decifer-favicon.svg", type: "image/svg+xml" }],
    apple: "/brand/decifer-app-icon.svg",
  },
  openGraph: {
    title: "DECIFER — Information is everywhere. Understanding is not.",
    description:
      "DECIFER builds AI intelligence products that help people make sense of complex information.",
    url: "https://www.decifer.io",
    siteName: "DECIFER",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECIFER — Information is everywhere. Understanding is not.",
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
