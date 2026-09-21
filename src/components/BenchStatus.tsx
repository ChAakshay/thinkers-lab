import { Activity, Coffee, Terminal, Wrench } from "lucide-react";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSound } from "@/hooks/useSound";

export function BenchStatus() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "cards" });
  const { track } = useLab();
  const config = getSiteConfig(track);
  const bench = config.benchStatus;
  const { tickSound, thunkSound } = useSound();

  return (
    <section id="bench" ref={sectionRef} className="reveal-scope snap-start border-t-comic bg-card-stock/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal-child mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-lab-wide text-muted-foreground">
              <Terminal className="size-4 text-ink" /> Field Log & Live Status
            </div>
            <h2 className="text-4xl font-black leading-none tracking-tight sm:text-5xl">
              {bench.headline}
            </h2>
            <p className="mt-2 text-base font-bold text-muted-foreground sm:text-lg">
              {bench.subheadline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border-comic bg-phosphor px-3 py-1 font-mono text-xs font-black uppercase text-ink shadow-hard-sm">
              <span className="mr-1.5 inline-block size-2 animate-pulse rounded-full bg-ink" />
              {bench.statusBadge}
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Who I Am & Philosophy */}
          <article className="reveal-child tactile-card tape-corner relative p-6 sm:p-8">
            <div className="category-strip bg-pop-yellow" />
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg border-comic bg-pop-yellow shadow-hard-sm">
                <Wrench className="size-5 text-ink" />
              </span>
              <h3 className="text-2xl font-black leading-tight text-ink">
                {bench.whoAmI.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm font-medium leading-relaxed text-ink/90 sm:text-base">
              {bench.whoAmI.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>

          {/* Right Column: Currently On Desk & Off The Clock */}
          <div className="flex flex-col gap-6">
            {/* Currently On Desk */}
            <article className="reveal-child tactile-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-lg border-comic bg-cyan shadow-hard-sm">
                    <Activity className="size-4 text-ink" />
                  </span>
                  <h4 className="text-xl font-black text-ink">
                    {bench.currentlyOnDesk.title}
                  </h4>
                </div>
                <span className="font-mono text-xs uppercase text-muted-foreground">Active Sprints</span>
              </div>

              <div className="space-y-3">
                {bench.currentlyOnDesk.items.map((item) => (
                  <div
                    key={item.topic}
                    onMouseEnter={tickSound}
                    className="group rounded-md border-comic bg-card-stock p-3.5 transition-transform hover:-translate-y-0.5 hover:shadow-hard-sm"
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-black uppercase text-ink">
                        {item.topic}
                      </span>
                      <span className={`pill-badge ${item.tagColor} text-[10px]`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Off the Clock */}
            <article className="reveal-child tactile-card p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-lg border-comic bg-coral shadow-hard-sm">
                  <Coffee className="size-4 text-ink" />
                </span>
                <h4 className="text-xl font-black text-ink">
                  {bench.offTheClock.title}
                </h4>
              </div>

              <ul className="space-y-2">
                {bench.offTheClock.items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={thunkSound}
                    className="flex items-start gap-2 text-xs font-medium text-ink/90 sm:text-sm"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
