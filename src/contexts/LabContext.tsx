import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type LabMode = "focus" | "ambient" | "overclock";
export type LabTrack = "hardware" | "software";

interface LabContextValue {
  mode: LabMode;
  track: LabTrack;
  soundEnabled: boolean;
  cycleMode: () => void;
  setMode: (mode: LabMode) => void;
  setTrack: (track: LabTrack) => void;
  toggleTrack: () => void;
  toggleSound: () => void;
}

const LabContext = createContext<LabContextValue | undefined>(undefined);
const labModes: LabMode[] = ["focus", "ambient", "overclock"];

export function LabProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<LabMode>("ambient");
  const [track, setTrack] = useState<LabTrack>("hardware");
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("lab-focus", "lab-ambient", "lab-overclock");
    root.classList.add(`lab-${mode}`);
    root.dataset["labMode"] = mode;
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset["labTrack"] = track;
  }, [track]);

  const value = useMemo<LabContextValue>(
    () => ({
      mode,
      track,
      soundEnabled,
      cycleMode: () => {
        setMode((current) => labModes[(labModes.indexOf(current) + 1) % labModes.length] ?? "ambient");
      },
      setMode,
      setTrack,
      toggleTrack: () => setTrack((curr) => (curr === "hardware" ? "software" : "hardware")),
      toggleSound: () => setSoundEnabled((enabled) => !enabled),
    }),
    [mode, track, soundEnabled],
  );

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
}

export function useLab() {
  const context = useContext(LabContext);
  if (!context) {
    throw new Error("useLab must be used within LabProvider");
  }
  return context;
}
