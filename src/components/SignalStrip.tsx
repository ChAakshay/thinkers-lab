import { Award, CheckCircle2, Cpu, Factory, GitBranch } from "lucide-react";

export function SignalStrip() {
  const signals = [
    {
      icon: Factory,
      title: "24/7 Industrial Rig",
      desc: "Shipped FreeRTOS motor firmware running on live manufacturing reactor",
      color: "bg-pop-yellow",
    },
    {
      icon: Cpu,
      title: "Sub-25ms PINN Model",
      desc: "1,305-param physics-informed neural network for edge chemical steering",
      color: "bg-cyan",
    },
    {
      icon: GitBranch,
      title: "Verified Open Code",
      desc: "Public reproducible GitHub repositories across embedded, ML & web",
      color: "bg-phosphor",
    },
    {
      icon: Award,
      title: "PES University ECE",
      desc: "Bengaluru, India · 3rd-year Electronics & Communication Engineering",
      color: "bg-lavender",
    },
  ];

  return (
    <div className="border-y-comic bg-card-stock/80 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-lab-wide text-muted-foreground flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-phosphor" /> Field Verification & Signal Strength
          </span>
          <span className="rounded-full border-comic bg-pop-yellow px-2 py-0.5 font-mono text-[10px] font-black uppercase text-ink">
            Vetted Metrics
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((sig) => {
            const Icon = sig.icon;
            return (
              <div
                key={sig.title}
                className="group relative rounded-lg border-2 border-ink bg-canvas p-4 shadow-hard-sm transition-transform hover:-translate-y-0.5 hover:shadow-hard"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <span className={`grid size-7 place-items-center rounded border-comic ${sig.color} text-ink shadow-hard-sm`}>
                    <Icon className="size-3.5" />
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-ink">{sig.title}</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground leading-snug">{sig.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
