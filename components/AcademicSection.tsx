"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function AcademicSection() {
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
          Academic Growth
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl p-5 flex items-start gap-4"
        style={{
          background: "linear-gradient(135deg, #e8f4f9 0%, #ffffff 100%)",
          border: "1.5px solid rgba(26,53,99,0.12)",
          boxShadow: "0 2px 12px rgba(26,53,99,0.07)",
        }}
      >
        <div
          className="rounded-full p-2.5 flex-shrink-0"
          style={{ background: "var(--navy)" }}
        >
          <GraduationCap size={22} color="white" strokeWidth={1.8} />
        </div>
        <div>
          <p
            className="font-semibold text-base"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            MSN–FNP Student
          </p>
          <p
            className="text-sm font-medium mt-0.5"
            style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
          >
            Xavier University
          </p>
          <p
            className="text-sm mt-1.5 leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            Focused on advanced nursing practice, ethics, and leadership — building toward nurse practitioner certification.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
