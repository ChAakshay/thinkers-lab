import { useEffect, useRef } from "react";
import { useLab } from "@/contexts/LabContext";

interface RevealOptions {
  variant?: "hero" | "cards" | "skills" | "timeline" | "footer";
}

export function useScrollReveal<T extends HTMLElement>({ variant = "hero" }: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const { mode } = useLab();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.dataset["revealVariant"] = variant;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (mode === "focus" || reduceMotion) {
      element.classList.add("is-visible");
      return;
    }
    element.classList.remove("is-visible");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [mode, variant]);

  return ref;
}
