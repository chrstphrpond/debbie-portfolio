import Hero from "@/components/Hero";
import LeadershipTimeline from "@/components/LeadershipTimeline";
import ClinicalSection from "@/components/ClinicalSection";
import AcademicSection from "@/components/AcademicSection";
import CommunitySection from "@/components/CommunitySection";
import LinksSection from "@/components/LinksSection";
import ClosingQuote from "@/components/ClosingQuote";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-16 pb-20">
      <Hero />
      <LeadershipTimeline />
      <ClinicalSection />
      {/* Academic + Community side-by-side on desktop */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <AcademicSection />
        <CommunitySection />
      </div>
      <LinksSection />
      <ClosingQuote />
    </main>
  );
}
