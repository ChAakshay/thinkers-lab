import { IntentDecoder } from "./IntentDecoder";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ConversionSection() {
  const sectionRef = useScrollReveal<HTMLElement>({ variant: "hero" });

  return (
    <section id="connect" ref={sectionRef} className="reveal-scope snap-start border-t-comic px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-child">
          <IntentDecoder />
        </div>
      </div>
    </section>
  );
}
