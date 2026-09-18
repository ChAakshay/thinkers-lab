import { Bot, Cable, Code2, Cpu, Gauge, Radio, Wrench } from "lucide-react";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSound } from "@/hooks/useSound";

const icons = { Cpu, Radio, Wrench, Code2, Cable, Gauge, Bot };
const colorClasses: Record<string, string> = {
  yellow: "hover:bg-pop-yellow",
  cyan: "hover:bg-cyan",
  coral: "hover:bg-coral",
  green: "hover:bg-phosphor",
  lavender: "hover:bg-lavender",
};

export function SkillsWorkbench() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "skills" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const { tickSound } = useSound();

  return (
    <section id="skills" ref={sectionRef} className="reveal-scope snap-start px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child mb-8 max-w-3xl">
          <p className="stencil mb-2 text-sm">Pegboard Inventory</p>
          <h2 className="text-4xl font-black leading-none sm:text-5xl">From firmware registers to React components.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {config.skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? Cpu;
            return (
              <article className="reveal-child tactile-card p-5" key={category.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-lg border-comic bg-pop-yellow shadow-hard-sm">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-xl font-black leading-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      className={`skill-badge ${colorClasses[category.color] ?? "hover:bg-pop-yellow"}`}
                      onMouseEnter={tickSound}
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
