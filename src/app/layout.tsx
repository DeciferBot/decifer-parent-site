import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decifer — AI Intelligence",
  description:
    "Decifer uses AI-assisted intelligence to reduce noise, organise context, and explain what matters, starting with markets and learning.",
  metadataBase: new URL("https://www.decifer.io"),
  openGraph: {
    title: "Decifer — AI Intelligence",
    description: "Make sense of complex worlds.",
    url: "https://www.decifer.io",
    siteName: "Decifer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
