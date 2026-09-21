"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";


const photos = [
  {
    src: "/photos/headshots/formal-headshot-1 (1).webp",
    alt: "Debbie formal portrait",
    position: "50% 20%",
  },
  {
    src: "/photos/headshots/formal-headshot-2 (1).webp",
    alt: "Debbie professional headshot",
    position: "50% 20%",
  },
  {
    src: "/photos/46th PNAA National Convention/518452505_1127857659372158_3139828753740710107_n.webp",
    alt: "Debbie at 46th PNAA National Convention",
    position: "50% 25%",
  },
  {
    src: "/photos/2024 PNA NCR Regional Conference/481055381_1021296776694914_886846683145490923_n.webp",
    alt: "Debbie at 2024 PNA NCR Regional Conference",
    position: "50% 25%",
  },
  {
    src: "/photos/community-outreach/547276100_1177376797753577_4978298049702057117_n.webp",
    alt: "Debbie community outreach",
    position: "50% 30%",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % photos.length),
    []
  );

  /* Auto-advance slideshow */
  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ background: "#f2f5f8" }}
    >
      {/* ── Photo slideshow ── */}
      <div
        className="absolute inset-x-0 top-0 bottom-[32%] md:left-[22%] md:bottom-[5%]"
      >
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              objectPosition: photo.position,
              maskImage:
                "linear-gradient(to bottom, black 45%, transparent 92%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 45%, transparent 92%)",
            }}
            priority={i === 0}
            sizes="100vw"
          />
        ))}

        {/* Desktop: left-edge fade */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, #f2f5f8 0%, transparent 35%)",
          }}
        />
      </div>

      {/* ── Content — bottom-left ── */}
      <div className="relative z-10 flex flex-col justify-end min-h-[100dvh] px-5 sm:px-8 md:px-14 lg:px-20 pb-8 md:pb-14">
        {/* Subtitle */}
        <BlurFade delay={0.1} inView>
          <p
            className="text-[1.6875rem] sm:text-[1.875rem] font-semibold mb-4"
            style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
          >
            PNAA North Central Region · VP Candidate 2026
          </p>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.2} inView duration={0.5}>
        <h1
          className="text-[3.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-[540px] lg:max-w-[680px]"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-body)",
          }}
        >
          United in{" "}
          <span
            className="italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Purpose,
          </span>
          <br />
          Diverse in Voices
        </h1>
        </BlurFade>

        {/* CTA + slideshow dots */}
        <BlurFade delay={0.3} inView>
        <div className="flex items-center gap-5 mt-7">
          <a
            href="#leadership"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              border: "1.5px solid var(--navy)",
              color: "var(--navy)",
              fontFamily: "var(--font-body)",
            }}
          >
            View Timeline
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--navy)" }}
            >
              <ArrowRight size={14} className="text-white" />
            </span>
          </a>

          {/* Slideshow indicators */}
          <div className="flex items-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2"
                    : "w-2 h-2 opacity-40 hover:opacity-70"
                }`}
                style={{ background: "var(--navy)" }}
                aria-label={`Show photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
        </BlurFade>

        {/* Logos — bottom-right */}
        <BlurFade delay={0.35} inView className="hidden md:flex items-end gap-5 absolute bottom-14 right-14 lg:right-20">
          <Image
            src="/photos/logos/pnna-cnky logo.png"
            alt="PNNA-CNKY logo"
            width={120}
            height={120}
            className="drop-shadow-md h-[120px] w-auto"
          />
          <Image
            src="/photos/logos/logo-teal-text (1).png"
            alt="Campaign logo"
            width={120}
            height={120}
            className="drop-shadow-md h-[120px] w-auto"
          />
        </BlurFade>
      </div>
    </section>
  );
}
