"use client";

import { useState } from "react";

export default function UnsubscribePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const params = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : null;
  const email = params?.get("email") ?? "";

  async function handleUnsubscribe() {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e8ecf0] to-white px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-2xl text-[#1a3563] mb-4">
          Unsubscribe
        </h1>

        {status === "done" ? (
          <p className="font-body text-gray-600">
            You have been unsubscribed. You will no longer receive campaign emails.
          </p>
        ) : status === "error" ? (
          <p className="font-body text-red-600">
            Something went wrong. Please try again or contact us directly.
          </p>
        ) : !email ? (
          <p className="font-body text-gray-600">
            Invalid unsubscribe link. Please use the link from your email.
          </p>
        ) : (
          <div>
            <p className="font-body text-gray-600 mb-6">
              Click below to unsubscribe <strong>{email}</strong> from campaign emails.
            </p>
            <button
              onClick={handleUnsubscribe}
              disabled={status === "loading"}
              className="bg-[#1a3563] text-white px-6 py-3 rounded-md font-body font-semibold hover:bg-[#142a4f] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Processing..." : "Unsubscribe"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
