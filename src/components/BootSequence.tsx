import { useEffect, useState } from "react";

const bootMessage = "Initializing lab systems...";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyBooted = sessionStorage.getItem("aakshay-lab-booted") === "true";
    if (reduceMotion || alreadyBooted) {
      const quick = window.setTimeout(onComplete, reduceMotion ? 0 : 200);
      return () => window.clearTimeout(quick);
    }

    setVisible(true);
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        let cursor = 0;
        const typer = window.setInterval(() => {
          cursor += 1;
          setText(bootMessage.slice(0, cursor));
          if (cursor >= bootMessage.length) window.clearInterval(typer);
        }, 16);
        timers.push(typer);
      }, 400),
    );
    timers.push(
      window.setTimeout(() => {
        sessionStorage.setItem("aakshay-lab-booted", "true");
        setVisible(false);
        onComplete();
      }, 1800),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-boot grid place-items-center bg-canvas text-ink">
      <div className="font-mono text-sm uppercase tracking-lab-wide sm:text-base">
        {text || <span className="boot-cursor" aria-label="Boot cursor" />}
        {text ? <span className="boot-cursor ml-1" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
