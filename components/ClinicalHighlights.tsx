"use client";

import { Stethoscope, Shield, Heart, BookOpen } from "lucide-react";
import { clinicalHighlights } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const iconMap = { Stethoscope, Shield, Heart, BookOpen } as const;

export default function ClinicalHighlights() {
  const [featured, ...rest] = clinicalHighlights;
  const FeaturedIcon = iconMap[featured.icon as keyof typeof iconMap];

  return (
    <section className="py-12">
      {/* Heading */}
      <BlurFade delay={0.1} inView>
        <div className="mb-6">
          <div className="section-divider mb-3" />
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            Clinical Excellence
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Bedside expertise that informs leadership
          </p>
        </div>
      </BlurFade>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:h-[340px] gap-4">

        {/* Featured — navy, col-span-2 row-span-3 */}
        <BlurFade
          delay={0.15}
          inView
          className="col-span-1 md:col-span-2 md:row-span-3 h-[220px] md:h-auto"
        >
          <div
            className="group relative flex flex-col justify-between w-full h-full rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: "var(--navy)" }}
          >
            {/* Decorative background icon */}
            <FeaturedIcon
              size={180}
              strokeWidth={0.6}
              color="white"
              className="absolute -right-8 -bottom-8 opacity-[0.06] pointer-events-none"
            />

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.07), transparent 70%)",
              }}
            />

            {/* Top tag */}
            <span
              className="text-[10px] font-bold uppercase tracking-widest opacity-50"
              style={{ color: "white", fontFamily: "var(--font-body)" }}
            >
              Primary Role
            </span>

            {/* Bottom text */}
            <div className="relative">
              <p
                className="font-bold text-2xl md:text-[1.75rem] leading-snug mb-1.5"
                style={{ color: "white", fontFamily: "var(--font-body)" }}
              >
                {featured.label}
              </p>
              <p
                className="text-sm opacity-60"
                style={{ color: "white", fontFamily: "var(--font-body)" }}
              >
                {featured.sub}
              </p>
            </div>
          </div>
        </BlurFade>

        {/* 3 compact supporting cards */}
        {rest.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isCrimson = i === 2; // last card — accent colour

          return (
            <BlurFade
              key={item.label}
              delay={0.2 + i * 0.08}
              inView
              className="col-span-1 h-[90px] md:h-auto"
            >
              <div
                className="group flex items-center gap-4 w-full h-full rounded-2xl px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  background: isCrimson
                    ? "var(--crimson)"
                    : "#f0f4fa",
                  border: isCrimson
                    ? "none"
                    : "1.5px solid rgba(26,53,99,0.08)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isCrimson
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(0,128,128,0.12)",
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                    color={isCrimson ? "white" : "var(--teal-dark)"}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="font-bold text-sm leading-snug"
                    style={{
                      color: isCrimson ? "white" : "var(--navy)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs mt-0.5 leading-snug truncate"
                    style={{
                      color: isCrimson
                        ? "rgba(255,255,255,0.65)"
                        : "var(--text-muted)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
