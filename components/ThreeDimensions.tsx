"use client";

import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Clinical",
    title: "Operating Room Expertise",
    content:
      "Serving as an Operating Room Nurse III and SPHM Advocate to deliver veteran-centered, evidence-based perioperative care.",
    image: "/photos/clinical.webp",
    imageFit: "contain" as const,
  },
  {
    step: "Academic",
    title: "Advanced Nursing Practice",
    content:
      "Currently an MSN Student pushing the boundaries of nursing practice with a strong focus on healthcare ethics and leadership.",
    image: "/photos/headshots/formal-headshot-1 (1).webp",
  },
  {
    step: "Culture",
    title: "Partnership & Visibility",
    content:
      "Fostering multicultural collaboration and shared purpose through active engagement with Asianati and community partnerships.",
    image:
      "/photos/community-outreach/481194831_1026167662874492_7089204945424779009_n.webp",
  },
];

export default function ThreeDimensions() {
  return (
    <section id="expertise" className="py-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-10">
        <BlurFade delay={0.1} inView>
          <div className="section-divider mb-3" />
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight leading-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            Three Dimensions
            <br />
            <span
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--teal-dark)",
              }}
            >
              of Leadership
            </span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} inView className="flex-shrink-0 self-end mb-1">
          <a
            href="#leadership"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            View Timeline
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </BlurFade>
      </div>

      {/* Feature steps */}
      <BlurFade delay={0.25} inView>
        <FeatureSteps features={features} autoPlayInterval={4000} />
      </BlurFade>
    </section>
  );
}
