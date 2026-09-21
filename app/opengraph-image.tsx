import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  let photoSrc: string | null = null;
  try {
    const photoBuffer = readFileSync(
      join(process.cwd(), "public/photos/headshots/og-headshot.png")
    );
    photoSrc = `data:image/png;base64,${photoBuffer.toString("base64")}`;
  } catch {
    // Photo missing — render text-only OG image
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1a3563",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Headshot — right half (only rendered if photo exists) */}
        {photoSrc && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 460,
              height: 630,
              display: "flex",
              overflow: "hidden",
            }}
          >
            <img
              src={photoSrc}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
            {/* Left-side fade so photo blends into navy */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "60%",
                height: "100%",
                background: "linear-gradient(to right, #1a3563 0%, transparent 100%)",
                display: "flex",
              }}
            />
          </div>
        )}

        {/* Content — left */}
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 0,
            bottom: 0,
            width: 700,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {/* Election label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 40,
                height: 3,
                background: "#c0392b",
                borderRadius: 2,
                display: "flex",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
              }}
            >
              PNAA 2026 ELECTIONS
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: 80,
                fontWeight: 900,
                lineHeight: "1",
                letterSpacing: "-0.025em",
              }}
            >
              Debbie
            </span>
            <span
              style={{
                color: "white",
                fontSize: 80,
                fontWeight: 900,
                lineHeight: "1",
                letterSpacing: "-0.025em",
              }}
            >
              Maquidato
            </span>
          </div>

          {/* Credentials + role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                color: "#5bc8d0",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              BSN, RN
            </span>
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.3)",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              NCR Vice President Candidate
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 17,
              fontStyle: "italic",
              marginBottom: 28,
              display: "flex",
            }}
          >
            "One PNAA — United in Purpose, Diverse in Voices"
          </div>

          {/* Platform words */}
          <div style={{ display: "flex", gap: 10 }}>
            {["Adaptive", "Resilient", "Empowered"].map((word) => (
              <div
                key={word}
                style={{
                  padding: "7px 18px",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  borderRadius: 4,
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "flex",
                }}
              >
                {word.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Crimson bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "55%",
            height: 4,
            background: "linear-gradient(to right, #9e1b39, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
