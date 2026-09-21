import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import PlatformPillars from "@/components/PlatformPillars";
import PhotoStrip from "@/components/PhotoStrip";
import ThreeDimensions from "@/components/ThreeDimensions";
import LeadershipTimeline from "@/components/LeadershipTimeline";
import ClinicalHighlights from "@/components/ClinicalHighlights";
import Endorsements from "@/components/Endorsements";
import LinksSection from "@/components/LinksSection";
import EmailSignup from "@/components/EmailSignup";
import ClosingQuote from "@/components/ClosingQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12 pb-20">
        <ImpactNumbers />
        <PlatformPillars />
        <PhotoStrip />
        <ThreeDimensions />
        <div
          id="leadership"
          className="-mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 py-4 [overflow:clip]"
        >
          <LeadershipTimeline />
        </div>
        <ClinicalHighlights />
        <Endorsements />
        <div id="connect">
          <LinksSection />
        </div>
        <EmailSignup />
        <div className="mt-16 md:mt-24">
          <ClosingQuote />
        </div>
      </main>
      <Footer />
    </>
  );
}
