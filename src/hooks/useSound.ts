import { useCallback, useRef } from "react";
import { useLab } from "@/contexts/LabContext";

type WindowWithWebkitAudio = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

type Waveform = OscillatorType;

export function useSound() {
  const { soundEnabled } = useLab();
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    const AudioCtor = window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
    if (!AudioCtor) return null;
    if (!audioContextRef.current) audioContextRef.current = new AudioCtor();
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().catch(() => undefined);
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback(
    (frequency: number, duration: number, type: Waveform, gainValue: number) => {
      if (!soundEnabled) return;
      const context = getAudioContext();
      if (!context) return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      gain.gain.setValueAtTime(gainValue, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    },
    [getAudioContext, soundEnabled],
  );

  const confirmSound = useCallback(() => {
    if (!soundEnabled) return;
    playTone(523, 0.15, "sine", 0.15);
    playTone(659, 0.15, "sine", 0.15);
  }, [playTone, soundEnabled]);

  return {
    clickSound: useCallback(() => playTone(1000, 0.002, "square", 0.15), [playTone]),
    tickSound: useCallback(() => playTone(600, 0.05, "triangle", 0.1), [playTone]),
    thunkSound: useCallback(() => playTone(200, 0.1, "sine", 0.2), [playTone]),
    confirmSound,
    snapSound: useCallback(() => playTone(1500, 0.005, "square", 0.1), [playTone]),
  };
}
