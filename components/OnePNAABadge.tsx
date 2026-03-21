"use client";

export default function OnePNAABadge() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="We ARE One PNAA — Built by Members, United in Purpose"
    >
      {/* Outer dashed ring */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#c41230"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Badge background */}
      <circle cx="50" cy="50" r="44" fill="#1a7a8a" />

      {/* Radial text path */}
      <defs>
        <path
          id="topArc"
          d="M 10,50 a 40,40 0 0,1 80,0"
        />
        <path
          id="bottomArc"
          d="M 14,55 a 38,38 0 0,0 72,0"
        />
      </defs>

      {/* Top arc text */}
      <text
        fontSize="6.5"
        fontFamily="var(--font-body), system-ui, sans-serif"
        fontWeight="700"
        fill="white"
        letterSpacing="1.5"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          BUILT BY MEMBERS · UNITED IN PURPOSE
        </textPath>
      </text>

      {/* Bottom arc text */}
      <text
        fontSize="6"
        fontFamily="var(--font-body), system-ui, sans-serif"
        fontWeight="600"
        fill="white"
        letterSpacing="1"
        opacity="0.85"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ADAPTIVE · RESILIENT · EMPOWERED
        </textPath>
      </text>

      {/* Center text: "We" */}
      <text
        x="50"
        y="38"
        textAnchor="middle"
        fontSize="9"
        fontFamily="var(--font-body), system-ui, sans-serif"
        fontWeight="400"
        fill="white"
        opacity="0.9"
      >
        We
      </text>

      {/* Center text: "ARE" */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fontSize="13"
        fontFamily="var(--font-body), system-ui, sans-serif"
        fontWeight="700"
        fill="white"
      >
        ARE
      </text>

      {/* Center text: "One PNAA" */}
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontSize="8.5"
        fontFamily="var(--font-body), system-ui, sans-serif"
        fontWeight="600"
        fill="white"
      >
        One PNAA
      </text>
    </svg>
  );
}
