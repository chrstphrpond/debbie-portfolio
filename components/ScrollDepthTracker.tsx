"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function ScrollDepthTracker() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const m of milestones) {
        if (percent >= m && !reached.has(m)) {
          reached.add(m);
          track("scroll_depth", { depth: m });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
