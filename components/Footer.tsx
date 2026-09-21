import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full py-10 px-5 sm:px-8 lg:px-12"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Top row: logos + tagline */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">

          {/* Left: initials mark + name */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/initials-logo-2.svg"
              alt="Debbie Maquidato"
              width={44}
              height={26}
              className="h-7 w-auto brightness-0 invert"
            />
            <div>
              <p
                className="text-sm font-bold leading-snug"
                style={{ color: "white", fontFamily: "var(--font-body)" }}
              >
                Debbie Maquidato
              </p>
              <p
                className="text-xs leading-snug"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
              >
                BSN, RN · PNAA NCR VP Candidate 2026
              </p>
            </div>
          </div>

          {/* Center: tagline */}
          <p
            className="text-sm sm:text-base text-center italic max-w-xs"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-display)" }}
          >
            One PNAA — United in Purpose, Diverse in Voices
          </p>

          {/* Right: campaign logos */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Image
              src="/photos/logos/pnna-cnky logo.png"
              alt="Philippine Nurses Association Cincinnati–Northern Kentucky"
              width={56}
              height={56}
              className="h-14 w-auto opacity-90"
            />
            <Image
              src="/photos/logos/logo-teal-text (1).png"
              alt="One PNAA campaign"
              width={56}
              height={56}
              className="h-14 w-auto opacity-90"
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} />

        {/* Bottom row: copyright */}
        <p
          className="text-xs text-center sm:text-left"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
        >
          © 2026 Philippine Nurses Association of America · North Central Region
        </p>

      </div>
    </footer>
  );
}
