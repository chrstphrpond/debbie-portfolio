"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { leadershipRoles } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const levelColors: Record<string, string> = {
  national: "var(--navy)",
  regional: "var(--crimson)",
  chapter: "var(--teal-badge)",
};

const levelLabels: Record<string, string> = {
  national: "National",
  regional: "Regional",
  chapter: "Chapter",
};

export default function LeadershipTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      {/* Section Header */}
      <div ref={headingRef} className="mb-10">
        <div className="section-divider mb-3" />
        <h2 className="font-bold text-3xl lg:text-4xl tracking-tight" style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}>
          Leadership & Service
        </h2>
        <p
          className="text-sm mt-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          Philippine Nurses Association of America · 2020–2026
        </p>
      </div>

      {/* ── Mobile: left-rail timeline ── */}
      <div className="relative lg:hidden">
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line"
          style={{
            background: "linear-gradient(to bottom, var(--navy) 0%, var(--crimson) 100%)",
            transformOrigin: "top center",
          }}
          ref={lineRef}
        />
        <div className="flex flex-col gap-6 pl-12">
          {leadershipRoles.map((item, i) => (
            <TimelineCard key={item.id} item={item} i={i} fromLeft />
          ))}
        </div>
      </div>

      {/* ── Desktop: 2-column alternating timeline ── */}
      <div className="hidden lg:block relative">
        {/* Center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px timeline-line"
          style={{
            background: "linear-gradient(to bottom, var(--navy) 0%, var(--crimson) 100%)",
            transformOrigin: "top center",
          }}
        />
        <div className="flex flex-col gap-8">
          {leadershipRoles.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className="relative w-[46%]">
                  {/* Dot on center-line side */}
                  <div
                    className={`absolute top-5 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ${
                      isLeft ? "-right-[1.05rem]" : "-left-[1.05rem]"
                    }`}
                    style={{
                      background: levelColors[item.level],
                      boxShadow: `0 0 0 3px ${levelColors[item.level]}30`,
                    }}
                  />
                  {/* Connector line from card to center */}
                  <div
                    className={`absolute top-[1.35rem] h-px w-[1rem] ${
                      isLeft ? "-right-[1rem]" : "-left-[1rem]"
                    }`}
                    style={{ background: `${levelColors[item.level]}50` }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
                  >
                    <CardContent item={item} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  i,
  fromLeft,
}: {
  item: (typeof leadershipRoles)[0];
  i: number;
  fromLeft: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
      className="relative"
    >
      <div
        className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full border-2 border-white"
        style={{
          background: levelColors[item.level],
          boxShadow: `0 0 0 2px ${levelColors[item.level]}33`,
        }}
      />
      <CardContent item={item} />
    </motion.div>
  );
}

function CardContent({ item }: { item: (typeof leadershipRoles)[0] }) {
  return (
    <div
      className="rounded-2xl p-4 lg:p-5 border"
      style={{
        background: "rgba(255,255,255,0.88)",
        borderColor: `${levelColors[item.level]}22`,
        boxShadow: "0 2px 14px rgba(26,53,99,0.07)",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{
            background: `${levelColors[item.level]}15`,
            color: levelColors[item.level],
            fontFamily: "var(--font-body)",
          }}
        >
          {levelLabels[item.level]}
        </span>
        {item.period && (
          <span
            className="text-[10px] font-semibold tracking-wide"
            style={{ color: "var(--text-light)", fontFamily: "var(--font-body)" }}
          >
            {item.period}
          </span>
        )}
      </div>
      <h3
        className="font-semibold text-base lg:text-lg leading-snug mb-0.5"
        style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
      >
        {item.role}
      </h3>
      <p
        className="text-xs font-semibold mb-2"
        style={{ color: levelColors[item.level], fontFamily: "var(--font-body)" }}
      >
        {item.org}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        {item.description}
      </p>
    </div>
  );
}
