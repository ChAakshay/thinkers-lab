import { useEffect, useRef } from "react";

const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onUnlock: () => void) {
  const indexRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const expected = konamiSequence[indexRef.current];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key === expected) {
        indexRef.current += 1;
        if (indexRef.current === konamiSequence.length) {
          indexRef.current = 0;
          onUnlock();
        }
        return;
      }
      indexRef.current = key === konamiSequence[0] ? 1 : 0;
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onUnlock]);
}
