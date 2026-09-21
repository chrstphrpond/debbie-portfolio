import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import { Analytics } from "@vercel/analytics/react";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Debbie Maquidato, BSN, RN — PNAA North Central Region",
  description:
    "Candidate for North Central Regional Vice President, PNAA 2026 Elections. Operating Room Nurse III · SPHM Advocate · MSN Student. One PNAA — United in Purpose, Diverse in Voices.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Debbie Maquidato, BSN, RN",
    description:
      "Candidate for PNAA North Central Region Vice President — Adaptive · Resilient · Empowered",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
        <ScrollDepthTracker />
        <Analytics />
      </body>
    </html>
  );
}
