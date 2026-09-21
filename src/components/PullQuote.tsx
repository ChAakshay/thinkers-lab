import { Lightbulb } from "lucide-react";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";

export function PullQuote() {
  const { track } = useLab();
  const config = getSiteConfig(track);

  return (
    <div className="border-y-comic bg-lavender/15 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl items-start gap-4">
        <Lightbulb className="mt-1 size-6 shrink-0 text-ink" aria-hidden="true" />
        <blockquote className="text-base font-bold leading-relaxed text-ink sm:text-lg">
          "{config.benchStatus.whoAmI.philosophyQuote}"
        </blockquote>
      </div>
    </div>
  );
}
