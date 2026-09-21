"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
  imageFit?: "cover" | "contain";
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
}

export function FeatureSteps({
  features,
  className,
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 md:items-center">

        {/* Left — step list */}
        <div className="order-2 md:order-1 space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 cursor-pointer"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.35 }}
              transition={{ duration: 0.4 }}
              onClick={() => { setCurrentFeature(index); setProgress(0); }}
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0 mt-0.5">
                <motion.div
                  className="w-9 h-9 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-colors duration-300"
                  style={{
                    background:
                      index <= currentFeature ? "var(--navy)" : "transparent",
                    borderColor:
                      index <= currentFeature
                        ? "var(--navy)"
                        : "rgba(26,53,99,0.25)",
                    color: index <= currentFeature ? "white" : "var(--navy)",
                  }}
                  animate={{ scale: index === currentFeature ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {index < currentFeature ? "✓" : index + 1}
                </motion.div>

                {/* Progress line */}
                {index < features.length - 1 && (
                  <div
                    className="w-px h-12 rounded-full"
                    style={{ background: "rgba(26,53,99,0.1)" }}
                  >
                    {index === currentFeature && (
                      <motion.div
                        className="w-full rounded-full"
                        style={{ background: "var(--navy)" }}
                        initial={{ height: "0%" }}
                        animate={{ height: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="pb-2">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--teal-dark)", fontFamily: "var(--font-body)" }}
                >
                  {feature.step}
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold leading-snug mb-1"
                  style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
                >
                  {feature.title || feature.step}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {feature.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — animated photo */}
        <div className="order-1 md:order-2 relative h-[240px] md:h-[420px] overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    initial={{ y: 60, opacity: 0, rotateX: -10 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -60, opacity: 0, rotateX: 10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {feature.imageFit === "contain" && (
                      <Image
                        src={feature.image}
                        alt=""
                        fill
                        className="object-cover blur-2xl scale-110 opacity-60"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        aria-hidden
                      />
                    )}
                    <Image
                      src={feature.image}
                      alt={feature.title || feature.step}
                      fill
                      className={feature.imageFit === "contain" ? "object-contain" : "object-cover"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/30 to-transparent" />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
