import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { getSiteConfig, type ProjectSlot } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSound } from "@/hooks/useSound";
import { ProjectCard } from "./ProjectCard";

const categoryOrder = ["hardware", "software", "experiment"] as const;
type CategoryType = (typeof categoryOrder)[number];
type Filter = "all" | CategoryType;

function labelFor(filter: Filter): string {
  switch (filter) {
    case "all":
      return "ALL";
    case "experiment":
      return "EXPERIMENTS / AI";
    case "hardware":
      return "HARDWARE";
    case "software":
      return "SOFTWARE";
    default:
      return filter;
  }
}

export function WorkshopFloor() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "cards" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const [filter, setFilter] = useState<Filter>("all");
  const { snapSound } = useSound();

  const availableFilters = useMemo<Filter[]>(() => {
    const present = new Set(config.projectSlots.map((p) => p.category));
    const active = categoryOrder.filter((cat) => present.has(cat));
    return ["all", ...active];
  }, [config.projectSlots]);

  useEffect(() => {
    if (!availableFilters.includes(filter)) {
      setFilter("all");
    }
  }, [availableFilters, filter]);

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
            {availableFilters.map((item) => (
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
            <ProjectCard project={project} index={index} key={project.id} isHero={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
