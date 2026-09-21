"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ClosingQuote() {
  return (
    <section className="relative pt-0 pb-16 text-center">

      {/* Top: full-bleed photo — no animation */}
      <div
        className="relative h-[360px] sm:h-[480px] md:h-[600px] overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem]"
        style={{
          width: "100vw",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src="/photos/headshots/formal-headshot-1-wide.webp"
          alt="Debbie Maquidato"
          fill
          unoptimized
          className="object-cover object-top"
          style={{
            maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
          sizes="100vw"
        />
      </div>

      {/* Quote */}
      <BlurFade delay={0.1} inView className="relative z-10 mt-6 sm:-mt-12">
        <blockquote
          className="text-2xl sm:text-4xl md:text-[3.75rem] lg:text-[4.25rem] italic leading-[1.15] tracking-tight max-w-4xl mx-auto px-2"
          style={{ color: "var(--navy)", fontFamily: "var(--font-display)" }}
        >
          &ldquo;Leadership is not about having the loudest voice — It is making space for every member to be heard.&rdquo;
        </blockquote>
      </BlurFade>

      {/* Attribution — full bleed row */}
      <BlurFade delay={0.3} inView>
        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-5 sm:px-8 lg:px-12"
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Name + subheader */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p
              className="text-[3.25rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-black leading-[1.05] tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, var(--navy), var(--crimson))",
                fontFamily: "var(--font-body)",
              }}
            >
              Debbie<br className="sm:hidden" /> Maquidato
            </p>
            <p
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
            >
              PNAA North Central Region · VP Candidate 2026
            </p>
          </div>

          {/* Pill tags */}
          <div className="flex sm:flex-col gap-2 flex-shrink-0">
            {["BSN, RN", "PNAA 2026"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border-2"
                style={{
                  color: "var(--navy)",
                  borderColor: "var(--navy)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </BlurFade>

    </section>
  );
}
