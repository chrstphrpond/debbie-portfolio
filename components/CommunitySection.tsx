"use client";

import { motion } from "motion/react";
import { Users } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="section-divider mb-3" />
        <h2
          className="font-bold text-3xl tracking-tight"
          style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
        >
          Community & Culture
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl p-5"
        style={{
          background: "linear-gradient(135deg, rgba(26,122,138,0.08) 0%, rgba(255,255,255,0.9) 100%)",
          border: "1.5px solid rgba(26,122,138,0.2)",
          boxShadow: "0 2px 12px rgba(26,122,138,0.07)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="rounded-full p-2.5"
            style={{ background: "var(--teal-badge)" }}
          >
            <Users size={20} color="white" strokeWidth={1.8} />
          </div>
          <p
            className="font-semibold text-base"
            style={{ color: "var(--teal-badge)", fontFamily: "var(--font-body)" }}
          >
            Asianati
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {[
            "Supports Asian-American community initiatives through Asianati",
            "Promotes multicultural collaboration, visibility, and community partnership",
            "Engages in professional and cultural outreach beyond nursing organizations",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "var(--teal-badge)" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
