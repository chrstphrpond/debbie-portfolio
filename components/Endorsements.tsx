"use client";

import { motion } from "motion/react";
import { endorsements } from "@/lib/data";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { BlurFade } from "@/components/ui/blur-fade";

const col1 = endorsements.slice(0, 3);
const col2 = endorsements.slice(3, 6);
const col3 = endorsements.slice(6, 9);

export default function Endorsements() {
  return (
    <section className="py-12 overflow-hidden">
      {/* Heading */}
      <BlurFade delay={0.1} inView>
        <div className="mb-8">
          <div className="section-divider mb-3" />
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            Voices of the Community
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Trusted by those who serve alongside her
          </p>
        </div>
      </BlurFade>

      {/* Scrolling columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden"
      >
        <TestimonialsColumn testimonials={col1} duration={18} />
        <TestimonialsColumn
          testimonials={col2}
          duration={22}
          className="hidden md:block"
        />
        <TestimonialsColumn
          testimonials={col3}
          duration={20}
          className="hidden lg:block"
        />
      </motion.div>
    </section>
  );
}
