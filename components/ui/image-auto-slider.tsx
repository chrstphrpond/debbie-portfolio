"use client";

import React from "react";

interface ImageAutoSliderProps {
  images: string[];
  speed?: number; // seconds for one full loop
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  images,
  speed = 28,
}) => {
  const duplicated = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes slider-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slider-track {
          animation: slider-scroll ${speed}s linear infinite;
        }
        .slider-mask {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
        .slider-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .slider-item:hover {
          transform: scale(1.04);
          box-shadow: 0 12px 32px rgba(26,53,99,0.18);
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="slider-mask w-full overflow-hidden">
        <div className="slider-track flex gap-4 w-max">
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="slider-item flex-shrink-0 w-52 h-44 sm:w-64 sm:h-52 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 4px 18px rgba(26,53,99,0.1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
