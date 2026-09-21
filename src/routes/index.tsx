import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { BenchStatus } from "@/components/BenchStatus";
import { BootSequence } from "@/components/BootSequence";
import { ConversionSection } from "@/components/ConversionSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LabTimeline } from "@/components/LabTimeline";
import { PullQuote } from "@/components/PullQuote";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkillsWorkbench } from "@/components/SkillsWorkbench";
import { StickyNotes } from "@/components/StickyNotes";
import { WorkshopFloor } from "@/components/WorkshopFloor";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CH Aakshay — Embedded Systems, Firmware & Robotics Portfolio" },
      {
        name: "description",
        content:
          "A tactile Mad Thinker's Lab portfolio for CH Aakshay, an embedded systems, firmware, and robotics engineer in Bengaluru.",
      },
      { property: "og:title", content: "CH Aakshay — Mad Thinker's Lab Portfolio" },
      {
        property: "og:description",
        content:
          "Explore a tactile, animated portfolio built for cold outreach across firmware, robotics, hardware, and real-time systems work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  const [showEureka, setShowEureka] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  const unlockSecret = useCallback(() => {
    setSecretUnlocked(true);
    setShowEureka(true);
    window.setTimeout(() => setShowEureka(false), 1500);
  }, []);

  useKonamiCode(unlockSecret);

  return (
    <div className={`lab-page min-h-screen bg-halftone text-ink ${ready ? "is-ready" : "is-booting"}`}>
      <BootSequence onComplete={() => setReady(true)} />
      <ScrollProgress />
      {showEureka ? <div className="eureka-overlay">EUREKA!</div> : null}
      <Header />
      <div className="relative overflow-hidden">
        <StickyNotes />
        <main className="snap-y snap-proximity">
          {/* 1. Hero — name, value prop, 2 CTAs */}
          <Hero />
          {/* 2. Pull-quote — philosophy strip, high-personality break */}
          <PullQuote />
          {/* 3. About — who I am, what's on my desk, off the clock */}
          <BenchStatus />
          {/* 4. Projects — featured work, proof of capability */}
          <WorkshopFloor />
          {/* 5. Skills — pegboard inventory */}
          <SkillsWorkbench />
          {/* 6. Connect — Intent Decoder CTA (placed after proof) */}
          <ConversionSection />
          {/* 7. Timeline — experience & education */}
          <LabTimeline />
          {/* 8. Footer — closing argument */}
          <Footer secretUnlocked={secretUnlocked} />
        </main>
      </div>
    </div>
  );
}
