import { RadioTower } from "lucide-react";
import { IntentDecoder } from "./IntentDecoder";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ConversionSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "hero" });

  return (
    <section id="connect" ref={sectionRef} className="reveal-scope snap-start border-t-comic bg-card-stock/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child mb-6">
          <p className="stencil mb-2 flex items-center gap-2 text-sm">
            <RadioTower className="size-4" /> Dedicated Hotline
          </p>
          <h2 className="text-4xl font-black leading-none sm:text-5xl">
            Pick your frequency. Let's build something real.
          </h2>
          <p className="mt-2 text-base font-bold text-muted-foreground sm:text-lg">
            Whether you're hiring for embedded/full-stack, scouting engineering talent, or want to talk shop — select a channel below.
          </p>
        </div>
        <div className="reveal-child">
          <IntentDecoder />
        </div>
      </div>
    </section>
  );
}
