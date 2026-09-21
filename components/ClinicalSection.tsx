"use client";

import { motion } from "motion/react";
import { Stethoscope, Shield, Heart, BookOpen, LucideIcon } from "lucide-react";
import { clinicalHighlights } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Shield,
  Heart,
  BookOpen,
};

export default function ClinicalSection() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="section-divider mb-3" />
        <h2
          className="font-bold text-3xl lg:text-4xl tracking-tight"
          style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
        >
          Clinical Leadership
        </h2>
      </motion.div>

      {/* 2 cols mobile → 4 cols desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {clinicalHighlights.map((item, i) => {
          const Icon = iconMap[item.icon];
          const isDark = i % 2 === 0;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: isDark ? "var(--navy)" : "rgba(255,255,255,0.9)",
                border: `1.5px solid ${isDark ? "transparent" : "rgba(26,53,99,0.12)"}`,
                boxShadow: "0 2px 12px rgba(26,53,99,0.07)",
              }}
            >
              <Icon
                size={22}
                style={{ color: isDark ? "var(--ice-blue)" : "var(--navy)" }}
                strokeWidth={1.8}
              />
              <p
                className="text-sm font-semibold leading-tight"
                style={{
                  color: isDark ? "white" : "var(--navy)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.label}
              </p>
              <p
                className="text-xs leading-snug"
                style={{
                  color: isDark ? "rgba(255,255,255,0.65)" : "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.sub}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
