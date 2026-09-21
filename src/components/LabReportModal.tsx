import { ExternalLink, Mail, Terminal, Wrench, X, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ProjectSlot } from "@/config/siteConfig";
import { useSound } from "@/hooks/useSound";

interface LabReportModalProps {
  project: ProjectSlot | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
}

export function LabReportModal({ project, open, onOpenChange, email }: LabReportModalProps) {
  const { clickSound, snapSound } = useSound();

  if (!project || !project.labReport) return null;

  const { labReport } = project;
  const discussMailto = `mailto:${email}?subject=${encodeURIComponent(`Let's discuss ${project.title}`)}&body=${encodeURIComponent(`Hi Aakshay,\n\nI was reading through your lab report on "${project.title}" and would like to learn more about how you approached...`)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border-comic bg-card-stock p-6 sm:p-8 shadow-hard-deep text-ink sm:rounded-xl">
        <div className="category-strip bg-pop-yellow" />
        
        {/* Header */}
        <DialogHeader className="space-y-2 border-b-2 border-ink/20 pb-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-lab-wide text-muted-foreground">
            <Terminal className="size-3.5 text-ink" /> Field Inspection Report // ID: {project.id}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.domainTag ? (
              <span className="rounded-full border-comic bg-pop-yellow px-2.5 py-0.5 font-mono text-xs font-bold uppercase">
                {project.domainTag}
              </span>
            ) : null}
            <span className="rounded-full border-comic bg-card-stock px-2 py-0.5 font-mono text-xs uppercase">
              {project.category}
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-black leading-tight text-ink">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm font-medium text-muted-foreground">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        {/* Content Body */}
        <div className="space-y-6 pt-4 text-sm leading-relaxed">
          {/* Problem */}
          <div className="rounded-lg border-2 border-ink bg-canvas p-4 shadow-hard-sm">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs font-black uppercase text-coral">
              <AlertTriangle className="size-4" /> The Physical / Engineering Constraint
            </div>
            <p className="text-ink font-medium">{labReport.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-xs font-black uppercase text-ink">
              <Wrench className="size-4 text-ink" /> Architecture & Implementation Decisions
            </div>
            <ul className="space-y-2.5">
              {labReport.approach.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-ink/90">
                  <span className="grid size-5 shrink-0 place-items-center rounded bg-pop-yellow border border-ink text-xs font-black font-mono">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="rounded-lg border-2 border-ink bg-phosphor/15 p-4 shadow-hard-sm">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs font-black uppercase text-ink">
              <CheckCircle className="size-4 text-phosphor" /> Verified Bench Results
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium">
              {labReport.results.map((res, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-ink shrink-0" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Takeaway */}
          <div className="speech-bubble border-2 border-comic bg-lavender/30 p-4 text-xs sm:text-sm font-bold leading-snug">
            <Lightbulb className="size-4 text-ink inline mr-2 mb-0.5" />
            <span>"{labReport.keyTakeaway}"</span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techBadges.map((badge) => (
              <span key={badge} className="tech-badge text-xs">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink/20 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.githubUrl ? (
              <Button asChild variant="lab" size="touch">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={clickSound}>
                  <ExternalLink className="size-4" /> Inspect Code on GitHub
                </a>
              </Button>
            ) : null}
            <Button asChild variant="labSecondary" size="touch">
              <a href={discussMailto} onClick={clickSound}>
                <Mail className="size-4" /> Discuss This System
              </a>
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              onOpenChange(false);
              snapSound();
            }}
            className="text-xs font-bold uppercase tracking-lab-wide text-muted-foreground hover:text-ink cursor-pointer"
          >
            <X className="size-3.5 mr-1" /> Close Log
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
