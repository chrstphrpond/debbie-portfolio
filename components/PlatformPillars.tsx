"use client";

import { Zap, Shield, Star } from "lucide-react";
import { pillars } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicText } from "@/components/ui/magic-text";

const iconMap = { Zap, Shield, Star } as const;

const PLATFORM_TEXT =
  "A platform built through 20+ years of service. Adaptive to our members needs. Resilient under pressure. Empowered by the voices of every Filipino American nurse.";

export default function PlatformPillars() {
  return (
    <section className="py-12">
      {/* Heading */}
      <BlurFade delay={0.1} inView>
        <div className="mb-2">
          <div className="section-divider mb-3" />
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            One PNAA Platform
          </h2>
        </div>
      </BlurFade>

      {/* Scroll-reveal platform statement */}
      <div style={{ color: "var(--navy)" }}>
        <MagicText
          text={PLATFORM_TEXT}
          className="text-2xl sm:text-3xl font-semibold"
        />
      </div>

      {/* Numbered pillar list */}
      <div className="mt-6 flex flex-col">
        {pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          return (
            <BlurFade key={pillar.word} delay={0.1 + i * 0.1} inView>
              <div
                className="flex items-start gap-5 py-6"
                style={{
                  borderTop: "1px solid rgba(26,53,99,0.1)",
                  ...(i === pillars.length - 1
                    ? { borderBottom: "1px solid rgba(26,53,99,0.1)" }
                    : {}),
                }}
              >
                {/* Number */}
                <span
                  className="text-xs font-bold pt-2 flex-shrink-0 w-5 tabular-nums"
                  style={{ color: "var(--teal-dark)", fontFamily: "var(--font-body)" }}
                >
                  0{i + 1}
                </span>

                {/* Word + description */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-4xl sm:text-5xl italic leading-none tracking-tight mb-2"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {pillar.word}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Icon badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: "var(--navy)" }}
                >
                  <Icon size={16} strokeWidth={2.5} color="white" />
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
