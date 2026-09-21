"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Expertise", href: "#expertise" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(26,53,99,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/initials-logo-2.svg"
              alt="Debbie Maquidato"
              width={52}
              height={30}
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav — center */}
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium transition-opacity hover:opacity-50 whitespace-nowrap"
                style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold transition-opacity hover:opacity-70 whitespace-nowrap"
            style={{
              color: "var(--navy)",
              fontFamily: "var(--font-body)",
              borderBottom: "2px solid var(--navy)",
            }}
          >
            One PNAA
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden flex items-center justify-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} style={{ color: "var(--navy)" }} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} style={{ color: "var(--navy)" }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu — full-width panel below header */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 sm:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(26,53,99,0.08)",
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[15px] font-medium transition-opacity hover:opacity-50"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "var(--font-body)",
                    borderBottom: "1px solid rgba(26,53,99,0.06)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="mt-2 py-3 text-[15px] font-semibold"
                style={{ color: "var(--crimson)", fontFamily: "var(--font-body)" }}
              >
                One PNAA →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
