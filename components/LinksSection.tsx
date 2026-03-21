"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { links } from "@/lib/data";

export default function LinksSection() {
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
          Connect
        </h2>
      </motion.div>

      {/* Single column mobile → 2 columns desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            whileHover={{
              backgroundColor: "var(--navy)",
              color: "white",
              borderColor: "var(--navy)",
              transition: { duration: 0.18 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold leading-tight">
                {link.label}
              </span>
              <span
                className="text-xs opacity-60 leading-tight mt-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.sub}
              </span>
            </div>
            <ExternalLink size={16} strokeWidth={2} className="flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
