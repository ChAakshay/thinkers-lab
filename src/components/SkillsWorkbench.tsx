import { Bot, Cable, Code2, Cpu, Gauge, Radio, Wrench, Zap, Star, Microscope } from "lucide-react";
import { getSiteConfig, type SkillItem } from "@/config/siteConfig";
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
        {/* Header & Confidence Legend */}
        <div className="reveal-child mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="stencil mb-2 text-sm">Pegboard Inventory</p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl">From firmware registers to React components.</h2>
          </div>
          {/* Tiers Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1 rounded-full border border-ink bg-pop-yellow px-2.5 py-1 font-bold text-ink">
              <Zap className="size-3" /> Production / Deployed
            </span>
            <span className="flex items-center gap-1 rounded-full border border-ink bg-card-stock px-2.5 py-1 font-bold text-ink">
              <Star className="size-3" /> Core Stack
            </span>
            <span className="flex items-center gap-1 rounded-full border border-dashed border-ink bg-canvas px-2.5 py-1 font-bold text-muted-foreground">
              <Microscope className="size-3" /> Active Bench Research
            </span>
          </div>
        </div>

        {/* 4-Category Grid */}
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
                  {category.skills.map((skillEntry) => {
                    const skillName = typeof skillEntry === "string" ? skillEntry : skillEntry.name;
                    const tier = typeof skillEntry === "string" ? undefined : skillEntry.tier;

                    const tierStyles =
                      tier === "production"
                        ? "border-2 border-ink shadow-hard-sm font-black"
                        : tier === "exploring"
                          ? "border-dashed opacity-85"
                          : "";

                    return (
                      <span
                        className={`skill-badge flex items-center gap-1.5 ${colorClasses[category.color] ?? "hover:bg-pop-yellow"} ${tierStyles}`}
                        onMouseEnter={tickSound}
                        key={skillName}
                      >
                        {tier === "production" && <Zap className="size-3 text-ink shrink-0" />}
                        {tier === "exploring" && <Microscope className="size-3 text-muted-foreground shrink-0" />}
                        <span>{skillName}</span>
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {/* Architecture Recipe Box */}
        <div className="reveal-child mt-8 rounded-lg border-2 border-ink bg-card-stock p-4 sm:p-5 shadow-hard">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-lab-wide text-muted-foreground">
                Applied Systems Architecture // Standard Blueprint
              </span>
              <p className="mt-1 text-sm font-bold text-ink sm:text-base">
                {track === "hardware"
                  ? "Sensor → 24-Bit ADC → ESP32 FreeRTOS Task → Modbus/OPC-UA → Python Ingestion → WebGL/React Dashboard"
                  : "OPC-UA Stream → Python SCADA Daemon → IQR Noise Rejection → SQLite/Supabase → Next.js Real-time Dispatch"}
              </p>
            </div>
            <span className="shrink-0 self-start sm:self-center rounded border-comic bg-pop-yellow px-2 py-1 font-mono text-xs font-black uppercase text-ink">
              End-to-End Stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
