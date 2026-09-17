import { useEffect, useRef, useState } from "react";
import { MapPin, RadioTower } from "lucide-react";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useSound } from "@/hooks/useSound";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IntentDecoder } from "./IntentDecoder";

export function Hero() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "hero" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const [greeting, setGreeting] = useState(config.greetings.afternoon);
  const [showAlias, setShowAlias] = useState(false);
  const [popName, setPopName] = useState(false);
  const clickCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);
  const { thunkSound } = useSound();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting(config.greetings.morning);
    else if (hour >= 12 && hour < 17) setGreeting(config.greetings.afternoon);
    else if (hour >= 17 && hour < 23) setGreeting(config.greetings.evening);
    else setGreeting(config.greetings.lateNight);
  }, [config.greetings]);

  const handleNameClick = () => {
    clickCountRef.current += 1;
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
    }, 500);
    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      setShowAlias((value) => !value);
      setPopName(true);
      thunkSound();
      window.setTimeout(() => setPopName(false), 300);
    }
  };

  return (
    <section id="top" ref={sectionRef} className="reveal-scope snap-start px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="sticker rotate-3 bg-lavender">{config.profile.role}</span>
              <span className="rounded-full border-comic bg-card-stock px-3 py-1 font-mono text-xs uppercase">
                <MapPin className="mr-1 inline size-3" /> {config.profile.locationBadge}
              </span>
            </div>
            <p className="mb-4 font-mono text-sm uppercase tracking-lab-wide text-muted-foreground">{greeting}</p>
            <h1 className="max-w-5xl text-balance text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
              <button type="button" className={`hero-name ${popName ? "name-pop" : ""}`} onClick={handleNameClick}>
                {showAlias ? config.profile.alias : config.profile.name}
              </button>
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-bold leading-snug sm:text-2xl">{config.profile.tagline}</p>
          </div>
          <aside className="speech-bubble rotate-1 text-lg font-black leading-tight lg:mt-16">
            <RadioTower className="mb-3 size-8" /> Mad Thinker's Lab now accepting strange constraints, stubborn boards, and impossible timelines.
          </aside>
        </div>
        <div className="reveal-child">
          <IntentDecoder />
        </div>
      </div>
    </section>
  );
}
