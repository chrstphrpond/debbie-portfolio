"use client";

import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 max-w-xs w-full"
                style={{
                  background: "white",
                  border: "1px solid rgba(26,53,99,0.1)",
                  boxShadow: "0 4px 24px rgba(26,53,99,0.07)",
                }}
              >
                {/* Opening quote */}
                <span
                  className="text-3xl leading-none font-serif block mb-2"
                  style={{ color: "var(--crimson)" }}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {text}
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(26,53,99,0.07)" }}>
                  <img
                    src={image}
                    alt={name}
                    width={36}
                    height={36}
                    className="rounded-full flex-shrink-0 object-cover"
                    style={{ width: 36, height: 36 }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold leading-snug"
                      style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
                    >
                      {name}
                    </p>
                    <p
                      className="text-[11px] leading-snug opacity-60"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
