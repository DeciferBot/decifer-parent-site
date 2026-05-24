import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "DECIFER — AI Intelligence",
  description:
    "DECIFER combines structured data, verified sources, and AI-assisted interpretation to deliver plain-language intelligence on markets, learning, and the world.",
  metadataBase: new URL("https://www.decifer.io"),
  icons: {
    icon: [
      { url: "/brand/decifer-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/decifer-app-icon.svg",
  },
  openGraph: {
    title: "DECIFER — AI Intelligence",
    description: "Make sense of complex worlds.",
    url: "https://www.decifer.io",
    siteName: "DECIFER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECIFER — AI Intelligence",
    description: "Make sense of complex worlds.",
  },
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
      </body>
    </html>
  );
}
