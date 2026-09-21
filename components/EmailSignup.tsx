"use client";

import { useState } from "react";
import { CheckCircle, Loader2, ArrowRight, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function EmailSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/email/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="py-12">
      <BlurFade delay={0.1} inView>
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {/* Decorative gradient orb */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--crimson) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--crimson-light) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <CheckCircle
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>
                <p
                  className="font-bold text-2xl text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thank you for your support!
                </p>
                <p
                  className="text-sm max-w-xs"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  A personal message from Debbie is on its way to your inbox.
                </p>
              </div>
            ) : (
              <>
                {/* Social proof badge */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <Users size={11} />
                    Join PNAA Supporters
                  </div>

                  {/* Loss-aversion heading */}
                  <h2
                    className="text-5xl sm:text-6xl text-white leading-[1.0] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Don&apos;t miss the next milestone
                  </h2>

                  {/* Specific value prop */}
                  <p
                    className="text-sm sm:text-base max-w-md leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Get Debbie&apos;s Monday briefing — volunteer events,
                    endorsement announcements, and election countdown updates.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 rounded-xl border-0 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-900/20 disabled:opacity-60 disabled:hover:scale-100"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--crimson) 0%, var(--crimson-light) 100%)",
                        color: "white",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {status === "loading" ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          Count Me In
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--crimson-light)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  <p
                    className="text-[11px] pt-1"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    No spam. Unsubscribe with one click.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
