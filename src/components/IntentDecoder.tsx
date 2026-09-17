import { useMemo, useState, type FormEvent } from "react";
import { Beaker, BriefcaseBusiness, Download, Github, Linkedin, Mail, Radar, Search, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/config/siteConfig";
import { useLab } from "@/contexts/LabContext";
import { useSound } from "@/hooks/useSound";

const channels = [
  { id: "hire", label: "📡 HERE TO HIRE", icon: BriefcaseBusiness },
  { id: "challenge", label: "🧪 GOT A CHALLENGE", icon: Beaker },
  { id: "scouting", label: "🔍 SCOUTING", icon: Search },
  { id: "builder", label: "🛠️ FELLOW BUILDER", icon: Wrench },
] as const;

type ChannelId = (typeof channels)[number]["id"];

export function IntentDecoder() {
  const { track } = useLab();
  const config = getSiteConfig(track);
  const [active, setActive] = useState<ChannelId>("hire");
  const [problem, setProblem] = useState("");
  const [contact, setContact] = useState("");
  const [copied, setCopied] = useState(false);
  const [bursting, setBursting] = useState(false);
  const { clickSound, confirmSound, snapSound, thunkSound } = useSound();

  const mailtoUrl = (subject: string, body: string) => {
    return `mailto:${config.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const activeChannel = useMemo(() => channels.find((channel) => channel.id === active), [active]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(config.contact.email);
    confirmSound();
    setCopied(true);
    setBursting(true);
    window.setTimeout(() => setCopied(false), 2000);
    window.setTimeout(() => setBursting(false), 700);
  };

  const submitChallenge = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    confirmSound();
    window.location.href = mailtoUrl(
      "Lab challenge for Aakshay",
      `Challenge:\n${problem || "I'll explain the constraint."}\n\nReach me at:\n${contact || "I'll include contact details."}`,
    );
  };

  return (
    <div className="mt-8 w-full max-w-5xl">
      <div className="stencil mb-3 flex flex-wrap items-center gap-2 text-sm">
        <Radar className="size-4" /> INCOMING TRANSMISSION — IDENTIFY YOURSELF <span className="cursor-blink" />
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const selected = active === channel.id;
          return (
            <button
              type="button"
              key={channel.id}
              className={`decoder-tab ${selected ? "is-active" : ""}`}
              aria-pressed={selected}
              onMouseEnter={clickSound}
              onClick={() => {
                setActive(channel.id);
                snapSound();
              }}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span>{channel.label}</span>
            </button>
          );
        })}
      </div>

      <div className="decoder-panel mt-4" key={active}>
        <div className="category-strip bg-cyan" />
        <div className="p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-lab-wide text-muted-foreground">
            {activeChannel ? <activeChannel.icon className="size-4" /> : null}
            Channel {active.slice(0, 1).toUpperCase()}
          </div>
          {active === "hire" ? (
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="flex flex-wrap gap-2">
                {config.hotlineChannels.hire.valuePills.map((pill) => (
                  <span className="pill-badge bg-pop-yellow" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <Button variant="lab" size="touch" onClick={copyEmail} className={bursting ? "squash-pop" : ""}>
                    <Mail /> {copied ? "COPIED! 💥" : config.hotlineChannels.hire.ctaText}
                  </Button>
                  {bursting ? <SparkBurst /> : null}
                </div>
                <Button asChild variant="labSecondary" size="touch">
                  <a href={mailtoUrl("Schedule a call with Aakshay", "Hi Aakshay, let's find a time to talk.")} onClick={thunkSound}>
                    Schedule a call
                  </a>
                </Button>
              </div>
            </div>
          ) : null}

          {active === "challenge" ? (
            <form className="grid gap-3" onSubmit={submitChallenge}>
              <p className="speech-bubble max-w-2xl text-sm">{config.hotlineChannels.challenge.promptText}</p>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  value={problem}
                  onChange={(event) => setProblem(event.target.value)}
                  className="lab-input"
                  placeholder="What needs building or debugging?"
                  aria-label="Challenge description"
                />
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="lab-input"
                  placeholder="Best way to reach you"
                  aria-label="Contact details"
                />
              </div>
              <Button type="submit" variant="labCoral" size="touch" className="justify-self-start">
                {config.hotlineChannels.challenge.submitText}
              </Button>
            </form>
          ) : null}

          {active === "scouting" ? (
            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="envelope-reveal" aria-hidden="true">
                <span />
              </div>
              <ul className="grid gap-2 text-sm">
                {config.hotlineChannels.scouting.bullets.map((bullet) => (
                  <li className="flex gap-2" key={bullet}>
                    <span className="mt-1 size-2 rounded-full bg-phosphor" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="lab" size="touch">
                <a href={config.contact.resumeUrl} onClick={confirmSound}>
                  <Download /> {config.hotlineChannels.scouting.resumeCtaText}
                </a>
              </Button>
              <p className="font-mono text-xs uppercase text-muted-foreground md:col-span-3">
                {config.hotlineChannels.scouting.footnote}
              </p>
            </div>
          ) : null}

          {active === "builder" ? (
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-lg font-black">{config.hotlineChannels.builder.greeting}</p>
                <p className="mt-2 text-sm">
                  Current obsession: <strong>{config.profile.currentObsession}</strong>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{config.hotlineChannels.builder.currentProject}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="labSecondary" size="touch">
                  <a href={config.contact.githubUrl} target="_blank" rel="noreferrer" onClick={clickSound}>
                    <Github /> GitHub
                  </a>
                </Button>
                <Button asChild variant="labSecondary" size="touch">
                  <a href={config.contact.linkedinUrl} target="_blank" rel="noreferrer" onClick={clickSound}>
                    <Linkedin /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="labCoral" size="touch">
                  <a href={mailtoUrl("Let's jam", "Hey Aakshay, I build things too.")} onClick={confirmSound}>
                    {config.hotlineChannels.builder.ctaText}
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SparkBurst() {
  return (
    <span className="spark-burst" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <span key={index} className={`spark spark-${index + 1}`} />
      ))}
    </span>
  );
}
