"use client";

import { leadershipRoles } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { Timeline } from "@/components/ui/timeline";

const levelColors: Record<string, string> = {
  national: "var(--teal-dark)",
  regional: "var(--teal-mid)",
  chapter: "var(--teal-badge)",
};

const levelLabels: Record<string, string> = {
  national: "National",
  regional: "Regional",
  chapter: "Chapter",
};

const groupedByLevel = [
  {
    level: "national",
    label: "National",
    roles: leadershipRoles.filter((r) => r.level === "national"),
  },
  {
    level: "regional",
    label: "Regional",
    roles: leadershipRoles.filter((r) => r.level === "regional"),
  },
  {
    level: "chapter",
    label: "Chapter",
    roles: leadershipRoles.filter((r) => r.level === "chapter"),
  },
];

const timelineData = groupedByLevel.map((group) => ({
  title: group.label,
  content: (
    <div className="flex flex-col gap-4 mb-4">
      {group.roles.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl p-4 lg:p-5 border"
          style={{
            background: "rgba(255,255,255,0.88)",
            borderColor: `${levelColors[item.level]}22`,
            boxShadow: "0 2px 14px rgba(26,53,99,0.07)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
              style={{
                background: `${levelColors[item.level]}15`,
                color: levelColors[item.level],
                fontFamily: "var(--font-body)",
              }}
            >
              {levelLabels[item.level]}
            </span>
            {item.period && (
              <span
                className="text-[10px] font-semibold tracking-wide"
                style={{
                  color: "var(--text-light)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {item.period}
              </span>
            )}
          </div>
          <h3
            className="font-semibold text-base lg:text-lg leading-snug mb-0.5"
            style={{
              color: "var(--teal-dark)",
              fontFamily: "var(--font-body)",
            }}
          >
            {item.role}
          </h3>
          <p
            className="text-xs font-semibold mb-2"
            style={{
              color: levelColors[item.level],
              fontFamily: "var(--font-body)",
            }}
          >
            {item.org}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  ),
}));

export default function LeadershipTimeline() {
  return (
    <section className="py-12">
      {/* Section Header */}
      <BlurFade delay={0.15} inView>
        <div className="mb-4 text-center">
          <h2
            className="font-bold text-3xl lg:text-4xl tracking-tight leading-tight"
            style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
          >
            A Decade of Sustained
            <br />
            <span
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--teal-dark)",
              }}
            >
              Service &amp; Leadership
            </span>
          </h2>
        </div>
      </BlurFade>

      <Timeline data={timelineData} />
    </section>
  );
}
