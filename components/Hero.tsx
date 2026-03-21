"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { profile } from "@/lib/data";
import OnePNAABadge from "./OnePNAABadge";

export default function Hero() {
  const textColRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLSpanElement>(null);
  const lastRef = useRef<HTMLSpanElement>(null);
  const credRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(
      [
        firstRef.current,
        lastRef.current,
        credRef.current,
        subtitleRef.current,
        regionRef.current,
        taglineRef.current,
        badgeRef.current,
      ],
      { opacity: 0, y: 24 }
    );
    gsap.set(photoRef.current, { opacity: 0, scale: 0.9 });

    tl.to(photoRef.current, { opacity: 1, scale: 1, duration: 0.7 })
      .to(firstRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
      .to(lastRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(credRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
      .to(regionRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
      .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1");

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="py-12 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:gap-16">

      {/* ── Text column ── */}
      <div
        ref={textColRef}
        className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
      >
        {/* Name */}
        <div className="mb-2">
          <span
            ref={firstRef}
            className="font-bold block text-5xl lg:text-7xl leading-none tracking-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            {profile.name.first}
          </span>
          <span
            ref={lastRef}
            className="font-black block text-5xl lg:text-7xl leading-none tracking-tight gradient-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {profile.name.last}
          </span>
          <span
            ref={credRef}
            className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "var(--crimson)",
              color: "white",
              fontFamily: "var(--font-body)",
            }}
          >
            {profile.name.credentials}
          </span>
        </div>

        {/* Title */}
        <p
          ref={subtitleRef}
          className="mt-4 text-sm lg:text-base leading-relaxed max-w-md"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}
        >
          {profile.title}
        </p>

        {/* Region + candidacy */}
        <div ref={regionRef} className="mt-5">
          <div className="section-divider mb-3 mx-auto lg:mx-0" />
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            {profile.region}
          </p>
          <p
            className="text-lg font-semibold mt-0.5"
            style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
          >
            {profile.candidacy}
          </p>
          <p
            className="text-xs tracking-wide mt-0.5"
            style={{ color: "var(--text-light)", fontFamily: "var(--font-body)" }}
          >
            {profile.election}
          </p>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-5 text-base lg:text-lg italic leading-snug max-w-sm"
          style={{ color: "var(--navy)", fontFamily: "var(--font-display)" }}
        >
          &ldquo;{profile.tagline}&rdquo;
        </p>

        {/* Badge */}
        <div ref={badgeRef} className="mt-6">
          <OnePNAABadge />
        </div>
      </div>

      {/* ── Photo column ── */}
      <div
        ref={photoRef}
        className="order-1 lg:order-2 flex-shrink-0 flex flex-col items-center mb-8 lg:mb-0"
      >
        {/* Decorative ring backdrop on desktop */}
        <div className="relative">
          {/* Background glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20 scale-110"
            style={{ background: "var(--ice-blue)" }}
          />
          {/* Photo */}
          <div
            className="photo-ring rounded-full overflow-hidden relative z-10 w-[160px] h-[160px] lg:w-[260px] lg:h-[260px]"
          >
            <Image
              src="/photo-placeholder.svg"
              alt="Debbie Maquidato"
              width={260}
              height={260}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Campaign quote under photo */}
        <p
          className="mt-5 text-xs text-center italic max-w-[200px] lg:max-w-[260px]"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
        >
          &ldquo;{profile.quote}&rdquo;
        </p>

        {/* Platform pills */}
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {profile.platform.split(" · ").map((p) => (
            <span
              key={p}
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(26,53,99,0.08)",
                color: "var(--navy)",
                fontFamily: "var(--font-body)",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
