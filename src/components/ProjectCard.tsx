import { ExternalLink, FileText, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectSlot } from "@/config/siteConfig";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useSound } from "@/hooks/useSound";

const categoryStrip: Record<ProjectSlot["category"], string> = {
  hardware: "bg-pop-yellow",
  software: "bg-cyan",
  experiment: "bg-coral",
};

const soundWords: Record<ProjectSlot["category"], string> = {
  hardware: "NEAT!",
  software: "WHOA!",
  experiment: "ZAP!",
};

interface ProjectCardProps {
  project: ProjectSlot;
  index: number;
  isHero?: boolean;
  onOpenLabReport?: (project: ProjectSlot) => void;
}

export function ProjectCard({ project, index, isHero, onOpenLabReport }: ProjectCardProps) {
  const { track } = useLab();
  const config = getSiteConfig(track);
  const { tickSound, thunkSound, confirmSound } = useSound();
  const href = project.githubUrl ?? `mailto:${config.contact.email}?subject=${encodeURIComponent(project.title)}`;

  return (
    <article
      className={`project-card reveal-child tape-corner ${project.status === "coming-soon" ? "project-card-soon" : ""} ${isHero ? "lg:col-span-2" : ""}`}
      data-card-direction={index % 2 === 0 ? "left" : "right"}
      onMouseEnter={tickSound}
    >
      <span className="comic-sound" aria-hidden="true">{soundWords[project.category]}</span>
      <div className={`category-strip ${categoryStrip[project.category]}`} />
      <Paperclip className="paperclip" aria-hidden="true" />
      {project.status === "wip" ? <div className="caution-badge">🚧 BENCH TESTING</div> : null}
      <div className="ruled-lines" aria-hidden="true" />
      <div className="p-5 pt-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.domainTag ? (
            <span className="rounded-full border-comic bg-pop-yellow px-2.5 py-1 font-mono text-xs font-bold uppercase">
              {project.domainTag}
            </span>
          ) : null}
          <span className="rounded-full border-comic bg-card-stock px-2 py-1 font-mono text-xs uppercase">
            {project.category}
          </span>
          <span className="rounded-full border-comic bg-canvas px-2 py-1 font-mono text-xs uppercase">
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
        <p className="mt-2 min-h-12 text-sm text-muted-foreground">{project.summary}</p>
        <div className="graph-window mt-5">
          {project.status === "coming-soon" ? (
            <div className="steam-rig" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div className="schematic-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metricBadges.map((badge) => (
            <span className="pill-badge bg-lavender" key={badge}>{badge}</span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techBadges.map((badge) => (
            <span className="tech-badge" key={badge}>{badge}</span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {onOpenLabReport && project.labReport ? (
            <Button
              type="button"
              variant="lab"
              size="touch"
              onClick={() => {
                onOpenLabReport(project);
                confirmSound();
              }}
            >
              <FileText className="size-4" /> Inspect Lab Report
            </Button>
          ) : null}
          <Button asChild variant="labSecondary" size="touch">
            <a href={href} target={project.githubUrl ? "_blank" : undefined} rel={project.githubUrl ? "noreferrer" : undefined} onClick={thunkSound}>
              {project.githubUrl ? "GitHub" : "Ask About This"} <ExternalLink className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
