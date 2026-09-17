import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { getSiteConfig, type ProjectSlot } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSound } from "@/hooks/useSound";
import { ProjectCard } from "./ProjectCard";

const filters = ["all", "hardware", "software", "experiment"] as const;
type Filter = (typeof filters)[number];

function labelFor(filter: Filter) {
  return filter === "all" ? "ALL" : filter === "experiment" ? "EXPERIMENTS" : filter.toUpperCase();
}

export function WorkshopFloor() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "cards" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const [filter, setFilter] = useState<Filter>("all");
  const { snapSound } = useSound();

  const projects = config.projectSlots.filter((project: ProjectSlot) => filter === "all" || project.category === filter);

  return (
    <section id="workshop" ref={sectionRef} className="reveal-scope snap-start border-y-comic bg-woodgrain px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="stencil mb-2 flex items-center gap-2 text-sm"><SlidersHorizontal className="size-4" /> Workshop Floor</p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl">Modular project slots, wired for inspection.</h2>
          </div>
          <div className="dip-row" aria-label="Project filters">
            {filters.map((item) => (
              <button
                type="button"
                className={`dip-switch ${filter === item ? "is-active" : ""}`}
                key={item}
                onClick={() => {
                  setFilter(item);
                  snapSound();
                }}
              >
                <span className="led-dot" /> {labelFor(item)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
