import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";

export function StickyNotes() {
  const { track } = useLab();
  const config = getSiteConfig(track);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-32 z-notes hidden min-h-full overflow-hidden px-4 md:block">
      {config.thinkerNotes.map((note, index) => (
        <div key={note} className={`floating-note floating-note-${index + 1}`}>
          {note}
        </div>
      ))}
    </div>
  );
}
