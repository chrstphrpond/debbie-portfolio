"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingQuote() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
        },
      }
    );
  }, []);

  return (
    <section className="py-10 text-center">
      {/* Decorative blob (faint) */}
      <div
        className="w-16 h-16 rounded-full mx-auto mb-6 opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--magenta-blob), transparent)",
        }}
      />

      <div ref={ref}>
        {/* Em-dash decorators */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--navy))",
            }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
          >
            {profile.platform}
          </span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, transparent, var(--navy))",
            }}
          />
        </div>

        <blockquote
          className="font-display text-xl italic leading-relaxed"
          style={{ color: "var(--navy)" }}
        >
          &ldquo;{profile.closingQuote}&rdquo;
        </blockquote>

        <div className="section-divider mx-auto mt-6" />

        <p
          className="text-xs mt-4 tracking-widest uppercase"
          style={{
            color: "var(--text-light)",
            fontFamily: "var(--font-body)",
          }}
        >
          Debbie Maquidato, BSN, RN &nbsp;·&nbsp; PNAA 2026
        </p>
      </div>
    </section>
  );
}
