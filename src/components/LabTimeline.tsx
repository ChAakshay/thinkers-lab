import { NotebookTabs } from "lucide-react";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function LabTimeline() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "timeline" });
  const { track } = useLab();
  const config = getSiteConfig(track);

  return (
    <section id="timeline" ref={sectionRef} className="reveal-scope snap-start border-t-comic px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="reveal-child mb-8">
          <p className="stencil mb-2 flex items-center gap-2 text-sm"><NotebookTabs className="size-4" /> Field Notebook</p>
          <h2 className="text-4xl font-black leading-none sm:text-5xl">Where the lab marks came from.</h2>
        </div>
        <div className="relative grid gap-5 before:absolute before:left-4 before:top-2 before:h-full before:w-line before:bg-ink md:before:left-1/2">
          {config.timeline.map((entry, index) => (
            <article className={`reveal-child timeline-entry ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`} key={`${entry.date}-${entry.title}`}>
              <span className="timeline-pin" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border-comic bg-cyan px-3 py-1 font-mono text-xs uppercase">{entry.date}</span>
                {entry.stamp ? <span className="sticker rotate-3 bg-pop-yellow text-xs">{entry.stamp}</span> : null}
              </div>
              <h3 className="mt-3 text-2xl font-black">{entry.title}</h3>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{entry.subtitle}</p>
              {entry.description ? (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{entry.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
