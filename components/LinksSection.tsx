"use client";

import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

// Facebook SVG icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Bento card configurations
const bentoCards = [
  {
    ...links[0], // Personal Profile
    size: "large", // col-span-2 row-span-1
    bg: "var(--navy)",
    textColor: "white",
    accentColor: "rgba(255,255,255,0.15)",
    tagline: "Stay connected",
  },
  {
    ...links[1], // Chapter Page
    size: "small",
    bg: "#f0f4fa",
    textColor: "var(--navy)",
    accentColor: "var(--navy)",
    tagline: "Local chapter",
  },
  {
    ...links[2], // PNAA Community
    size: "small",
    bg: "var(--crimson)",
    textColor: "white",
    accentColor: "rgba(255,255,255,0.15)",
    tagline: "National network",
  },
  {
    ...links[3], // Asianati
    size: "large",
    bg: "#f0f4fa",
    textColor: "var(--navy)",
    accentColor: "var(--navy)",
    tagline: "Community roots",
  },
];

export default function LinksSection() {
  return (
    <section className="py-12" id="connect">
      {/* Heading */}
      <BlurFade delay={0.1} inView>
        <div className="mb-6">
          <div className="section-divider mb-3" />
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            Connect
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Follow along across platforms
          </p>
        </div>
      </BlurFade>

      {/* Bento Grid — 2×2 on mobile, bento on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:h-[420px]">
        {/* Card 0 — col-span-1 mobile / col-span-2 desktop */}
        <BlurFade delay={0.15} inView className="col-span-1 md:col-span-2 h-[160px] md:h-auto">
          <BentoCard card={bentoCards[0]} />
        </BlurFade>

        {/* Card 1 — col-span-1 both */}
        <BlurFade delay={0.2} inView className="col-span-1 h-[160px] md:h-auto">
          <BentoCard card={bentoCards[1]} />
        </BlurFade>

        {/* Card 2 — col-span-1 both */}
        <BlurFade delay={0.25} inView className="col-span-1 h-[160px] md:h-auto">
          <BentoCard card={bentoCards[2]} />
        </BlurFade>

        {/* Card 3 — col-span-1 mobile / col-span-2 desktop */}
        <BlurFade delay={0.3} inView className="col-span-1 md:col-span-2 h-[160px] md:h-auto">
          <BentoCard card={bentoCards[3]} />
        </BlurFade>
      </div>
    </section>
  );
}

function BentoCard({
  card,
}: {
  card: (typeof bentoCards)[0];
}) {
  const isLight = card.bg === "#f0f4fa";

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between w-full h-full rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{ background: card.bg }}
    >
      {/* Top row: tagline + arrow */}
      <div className="flex items-start justify-between">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest opacity-50"
          style={{ color: card.textColor, fontFamily: "var(--font-body)" }}
        >
          {card.tagline}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{
            background: isLight ? "var(--navy)" : "rgba(255,255,255,0.15)",
            color: isLight ? "white" : "white",
          }}
        >
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </span>
      </div>

      {/* Bottom row: icon + text */}
      <div className="flex items-end justify-between">
        <div>
          <p
            className="font-bold text-lg md:text-xl leading-tight mb-0.5"
            style={{ color: card.textColor, fontFamily: "var(--font-body)" }}
          >
            {card.label}
          </p>
          <p
            className="text-xs opacity-60 leading-snug"
            style={{ color: card.textColor, fontFamily: "var(--font-body)" }}
          >
            {card.sub}
          </p>
        </div>

        {/* Facebook icon — large decorative */}
        <FacebookIcon
          className="w-12 h-12 md:w-14 md:h-14 opacity-10 transition-opacity duration-300 group-hover:opacity-20 flex-shrink-0"
          // @ts-ignore inline style on svg
          style={{ color: card.textColor }}
        />
      </div>

      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: isLight
            ? "radial-gradient(circle at 80% 80%, rgba(26,53,99,0.06), transparent 70%)"
            : "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
    </a>
  );
}
