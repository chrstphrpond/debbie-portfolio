"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const stats = [
  { number: "20+", label: "Years of Service" },
  { number: "8", label: "Leadership Roles" },
  { number: "3", label: "Levels of Leadership" },
  { number: "1", label: "Mission: One PNAA" },
];

export default function ImpactNumbers() {
  return (
    <section className="py-10 border-y" style={{ borderColor: "rgba(26,53,99,0.07)" }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
        {stats.map((stat, i) => (
          <BlurFade key={stat.label} delay={0.1 + i * 0.08} inView>
            <div className="flex flex-col items-center text-center">
              <span
                className="text-[4rem] sm:text-[5rem] font-black leading-none tracking-tight"
                style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
              >
                {stat.number}
              </span>
              <span
                className="mt-2 text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--teal-dark)", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </span>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
