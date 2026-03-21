import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
    "Candidate for North Central Regional Vice President, PNAA 2026 Elections. Operating Room Nurse III · SPHM Advocate · MSN-FNP Student. One PNAA — United in Purpose, Diverse in Voices.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
