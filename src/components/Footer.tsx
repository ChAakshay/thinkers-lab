import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSound } from "@/hooks/useSound";

export function Footer({ secretUnlocked }: { secretUnlocked: boolean }) {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "footer" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const [copied, setCopied] = useState(false);
  const [bursting, setBursting] = useState(false);
  const { clickSound, confirmSound } = useSound();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(config.contact.email);
    confirmSound();
    setCopied(true);
    setBursting(true);
    window.setTimeout(() => setCopied(false), 2000);
    window.setTimeout(() => setBursting(false), 700);
  };

  return (
    <footer ref={sectionRef} className="reveal-scope snap-start border-t-comic bg-ink px-4 py-14 text-canvas sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="stencil mb-3 text-sm text-phosphor">Connect Terminal</p>
            <h2 className="max-w-3xl text-4xl font-black leading-none sm:text-5xl">Send a signal. I’ll bring the scope.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="relative">
                <Button variant="lab" size="touch" onClick={copyEmail} className={bursting ? "squash-pop" : ""}>
                  <Mail /> {copied ? "COPIED! 💥" : config.contact.email}
                </Button>
                {bursting ? <SparkBurst /> : null}
              </div>
              <Button asChild variant="labSecondary" size="touch">
                <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`} onClick={clickSound}>
                  <Phone /> {config.contact.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
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
            <svg className="waveform" viewBox="0 0 40 12" aria-hidden="true">
              <path d="M1 6 C5 1, 9 11, 13 6 S21 1, 25 6 33 11, 39 6" />
            </svg>
          </div>
        </div>
        {secretUnlocked ? (
          <div className="secret-lab mt-10">
            <p className="stencil text-xs">Secret Lab</p>
            <p className="mt-2 text-lg font-black">{config.thinkerNotes[0]}</p>
          </div>
        ) : null}
        <p className="mt-10 text-[10px] text-muted-on-ink">
          You scrolled all the way down. That says something about you. We should{" "}
          <a className="link-draw text-canvas" href={`mailto:${config.contact.email}`} onClick={clickSound}>
            talk
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function SparkBurst() {
  return (
    <span className="spark-burst" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <span key={index} className={`spark spark-${index + 1}`} />
      ))}
    </span>
  );
}
