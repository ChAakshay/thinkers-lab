import { Cpu, FileDown, Github, Linkedin, Volume2, VolumeX, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab, type LabMode } from "@/contexts/LabContext";
import { useSound } from "@/hooks/useSound";

const dialRotation: Record<LabMode, string> = {
  focus: "rotate-0",
  ambient: "rotate-45",
  overclock: "rotate-90",
};

export function Header() {
  const { mode, cycleMode, soundEnabled, toggleSound, track, setTrack } = useLab();
  const { clickSound, thunkSound, snapSound } = useSound();
  const config = getSiteConfig(track);

  const handleCycle = () => {
    cycleMode();
    thunkSound();
  };

  const handleSoundToggle = () => {
    toggleSound();
    clickSound();
  };

  return (
    <header className="sticky top-progress z-header border-b-comic bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="group relative flex items-center gap-2">
            <span className="status-beacon" aria-label={config.profile.statusText} />
            <div className="beacon-card">
              <strong>Currently:</strong> {config.profile.currentObsession}
              <br />
              <strong>Coffees today:</strong> <span className="coffee-count" />
            </div>
          </div>
          <a href="#top" className="link-draw font-black tracking-tight" onClick={clickSound}>
            {config.profile.name}
          </a>
          <span className="sticker -rotate-2 bg-pop-yellow text-xs">{config.profile.statusText}</span>
          <span className="rounded-full border-comic bg-card-stock px-3 py-1 font-mono text-xs uppercase">
            {config.profile.locationBadge}
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-lab-wide">
          <div
            className="flex items-center rounded-lg border-2 border-ink bg-card-stock p-0.5 shadow-hard-sm"
            role="group"
            aria-label="Select engineering track"
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-black uppercase transition-all ${
                track === "hardware"
                  ? "bg-pop-yellow text-ink shadow-hard-sm"
                  : "text-muted-foreground hover:text-ink"
              }`}
              onClick={() => {
                setTrack("hardware");
                snapSound();
              }}
            >
              <Wrench className="size-3" /> Hardware
            </button>
            <button
              type="button"
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-black uppercase transition-all ${
                track === "software"
                  ? "bg-cyan text-ink shadow-hard-sm"
                  : "text-muted-foreground hover:text-ink"
              }`}
              onClick={() => {
                setTrack("software");
                snapSound();
              }}
            >
              <Cpu className="size-3" /> Software
            </button>
          </div>

          <a href="#workshop" className="link-draw min-h-touch px-1 py-3" onClick={clickSound}>
            Workbench
          </a>
          <a href="#skills" className="link-draw min-h-touch px-1 py-3" onClick={clickSound}>
            Skills
          </a>
          <a href="#timeline" className="link-draw min-h-touch px-1 py-3" onClick={clickSound}>
            Timeline
          </a>
          <Button asChild variant="labSecondary" size="touch">
            <a href={config.contact.githubUrl} target="_blank" rel="noreferrer" onClick={clickSound}>
              <Github /> GitHub
            </a>
          </Button>
          <Button asChild variant="labSecondary" size="touch">
            <a href={config.contact.linkedinUrl} target="_blank" rel="noreferrer" onClick={clickSound}>
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="lab" size="touch">
            <a href={config.contact.resumeUrl} onClick={clickSound}>
              <FileDown /> Resume
            </a>
          </Button>
          <Button
            variant="labIcon"
            size="iconTouch"
            aria-label={soundEnabled ? "Turn lab sound off" : "Turn lab sound on"}
            onClick={handleSoundToggle}
          >
            {soundEnabled ? <Volume2 /> : <VolumeX />}
          </Button>
          <button type="button" className="dial-shell" onClick={handleCycle} aria-label="Cycle lab atmosphere dial">
            <span className={`dial-knob ${dialRotation[mode]}`}>
              <span className="dial-notch" />
            </span>
            <span className="dial-label">lab conditions: {mode}</span>
          </button>
          <Zap className="hidden size-5 text-coral lab-overclock:inline-block" aria-hidden="true" />
        </nav>
      </div>
    </header>
  );
}
