import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
        "DECIFER builds structured intelligence systems — for markets, learning, and the world.",
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
    default: "DECIFER — Structured Intelligence",
    template: "%s | DECIFER",
  },
  description:
    "DECIFER builds structured intelligence systems. We organise complex signals into plain-language context — for markets, learning, and the world.",
  metadataBase: new URL("https://www.decifer.io"),
  icons: {
    icon: [{ url: "/brand/decifer-favicon.svg", type: "image/svg+xml" }],
    apple: "/brand/decifer-app-icon.svg",
  },
  openGraph: {
    title: "DECIFER — Structured Intelligence",
    description: "The layer between noise and understanding.",
    url: "https://www.decifer.io",
    siteName: "DECIFER",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECIFER — Structured Intelligence",
    description: "The layer between noise and understanding.",
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
        <Analytics />
        <SpeedInsights />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
