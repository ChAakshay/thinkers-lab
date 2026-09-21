export type LabTrack = "hardware" | "software";

export interface ProjectSlot {
  id: string;
  title: string;
  category: "hardware" | "software" | "experiment";
  domainTag?: string;
  status: "featured" | "wip" | "coming-soon";
  summary: string;
  metricBadges: string[];
  techBadges: string[];
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface TimelineEntry {
  date: string;
  title: string;
  subtitle: string;
  stamp?: string;
  description?: string;
}

export interface BenchStatusData {
  headline: string;
  subheadline: string;
  statusBadge: string;
  whoAmI: {
    title: string;
    body: string[];
    philosophyQuote: string;
  };
  currentlyOnDesk: {
    title: string;
    items: {
      topic: string;
      desc: string;
      tag: string;
      tagColor: string;
    }[];
  };
  offTheClock: {
    title: string;
    items: string[];
  };
}

export interface SiteConfig {
  profile: {
    name: string;
    alias: string;
    role: string;
    tagline: string;
    locationBadge: string;
    statusText: string;
    currentObsession: string;
  };
  contact: {
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    resumeUrl: string;
  };
  greetings: {
    morning: string;
    afternoon: string;
    evening: string;
    lateNight: string;
  };
  thinkerNotes: string[];
  hotlineChannels: {
    hire: { valuePills: string[]; ctaText: string };
    challenge: { promptText: string; submitText: string };
    scouting: { bullets: string[]; resumeCtaText: string; footnote: string };
    builder: { greeting: string; currentProject: string; ctaText: string };
  };
  benchStatus: BenchStatusData;
  projectSlots: ProjectSlot[];
  skillCategories: SkillCategory[];
  timeline: TimelineEntry[];
}

/* ─── shared constants ─── */

const commonContact = {
  email: "aakshayproductive@gmail.com",
  phone: "+91 98865 21033",
  githubUrl: "https://github.com/ChAakshay",
  linkedinUrl: "https://linkedin.com/in/chaakshay",
  resumeUrl: "/CH_Aakshay_Resume_Sep2026.pdf",
};

const commonGreetings = {
  morning: "Good morning! The coffee is fresh and the workbench is fired up.",
  afternoon: "Hey there! Pull up a chair — happy to walk you through what's on the bench.",
  evening: "Evening session. The best bugs always surrender after dark.",
  lateNight: "Late night tinkering? Grab a mug and let's talk systems.",
};

const commonThinkerNotes = [
  "Note to self: sleep() is just a compiler optimization for humans",
  "If it works on the first try, check if the power supply is actually on",
  "The oscilloscope never lies. The datasheet, however, occasionally tells polite fiction",
  "Semaphores: because my RTOS tasks need personal space too",
  "Debugging: playing detective in a crime movie where you also wrote the code",
  "Industrial SCADA telemetry and financial order books are basically the same problem wearing different hats",
  "The best code I ever wrote was a simple 3-point sensor calibration — it just worked",
];

const commonBenchStatus: BenchStatusData = {
  headline: "About",
  subheadline: "The human behind the oscilloscope, terminals, and solder smoke.",
  statusBadge: "⚡ BENCH ONLINE · PES UNIVERSITY, BENGALURU",
  whoAmI: {
    title: "Who I Am & What I Do",
    body: [
      "I'm Aakshay — a 3rd-year ECE student at PES University, Bengaluru. During my internship at NoPo Nanotechnologies, I wrote FreeRTOS firmware that runs 24/7 on a carbon nanotube manufacturing reactor, then built the Python SCADA pipeline that turns 66 noisy sensor tags into clean daily reports.",
      "I don't stay in one silo. If a problem needs a PID loop tuned on bare metal, a messy dataset cleaned, an edge ML model trained, or a React dashboard built to visualize it all — I enjoy doing every part of it.",
    ],
    philosophyQuote:
      "Software is fast, but atoms don't care about your unit tests. Building hardware keeps you humble, and building software gives your hardware reach.",
  },
  currentlyOnDesk: {
    title: "What's On My Desk Right Now",
    items: [
      {
        topic: "Field-Oriented Motor Control (FOC)",
        desc: "Experimenting with BLDC motors, magnetic AS5600 angle encoders, and SimpleFOC to create dynamic digital resistance simulations.",
        tag: "Robotics & Hardware",
        tagColor: "bg-pop-yellow",
      },
      {
        topic: "Ultra-Low-Power BLE Telemetry",
        desc: "Designing compact sensor nodes in KiCad optimized for micro-amp sleep budgets, Li-Po charging, and custom BLE GATT services.",
        tag: "IoT & Circuits",
        tagColor: "bg-cyan",
      },
      {
        topic: "Industrial Telemetry & SCADA Workflows",
        desc: "Studying high-reliability time-series ingestion, automated outlier filtering (IQR), and OPC-UA / Modbus synchronization.",
        tag: "Data Pipelines",
        tagColor: "bg-phosphor",
      },
    ],
  },
  offTheClock: {
    title: "Off the Clock",
    items: [
      "🏋️ Heavy compound lifting & body recomposition tracking (built my own offline PWA, recomp-180, to track it).",
      "☕ Hunting down great specialty coffee across Bengaluru.",
      "🔧 Opening up broken consumer gadgets to see how their circuit boards were cost-optimized.",
      "📖 Reading engineering post-mortems and industrial history.",
    ],
  },
};

const commonTimeline: TimelineEntry[] = [
  {
    date: "Jun 2026 — Aug 2026",
    title: "Industrial Embedded Firmware & Data Intern",
    subtitle: "NoPo Nanotechnologies India Pvt. Ltd. · HiPCO CNT Division · Bengaluru",
    stamp: "FACTORY DEPLOYED",
    description:
      "Worked across the full reactor loop: wrote dual-priority FreeRTOS firmware (ANIC) for a Roll-to-Roll nanotube manufacturing rig to cut motor jitter by 40%, built an automated Python SCADA pipeline handling 66 sensor tags across 6 reactors, and trained a compact physics-informed model predicting nanotube synthesis quality.",
  },
  {
    date: "2023 — 2027",
    title: "B.Tech in Electronics & Communication Engineering",
    subtitle: "PES University, Bengaluru",
    stamp: "IN PROGRESS",
    description:
      "Core coursework and lab focus: Embedded Microcontroller Systems, Computer Architecture & RISC-V, Digital Signal Processing (DSP), Signals & Systems, Linear Algebra, and Probability & Statistics.",
  },
];

/* ─── "Systems & Hardware" track ─── */

export const hardwareSiteConfig: SiteConfig = {
  profile: {
    name: "CH Aakshay",
    alias: "Tinkerer & Systems Builder",
    role: "Systems Engineer · Firmware, Pipelines & Web",
    tagline:
      "I build systems that bridge hardware and software — from real-time microcontroller firmware and industrial sensor pipelines to clean web dashboards.",
    locationBadge: "Bengaluru, IN",
    statusText: "BENCH ONLINE",
    currentObsession: "closed-loop FOC motor control, low-power BLE sensor nodes, and real-time data pipelines",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  benchStatus: commonBenchStatus,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Shipped production FreeRTOS firmware running 24/7 on an industrial chemical manufacturing rig",
        "End-to-end builder: wrote the firmware, the SCADA data pipeline, and the ML model during my internship",
        "Focused outreach — I only reach out to teams whose products I genuinely want to help build",
      ],
      ctaText: "Copy email & let's talk",
    },
    challenge: {
      promptText: "Got a tricky puzzle — stubborn firmware, a noisy sensor bus, or a data pipeline bottleneck? Send it over.",
      submitText: "SEND TO BENCH",
    },
    scouting: {
      bullets: [
        "Full-vertical engineering — C/C++ firmware, Python SCADA pipelines, applied ML, and React/Next.js web apps",
        "Real factory floor experience — 24/7 industrial rigs, 66-tag sensor schemas, and calibration precision",
        "Hardware intuition with software reach — comfortable with an oscilloscope in one hand and VS Code in the other",
      ],
      resumeCtaText: "Download Resume (PDF)",
      footnote: "P.S. — The best proof is in the code. Scroll down to see the project repositories.",
    },
    builder: {
      greeting: "Hey! What are you building right now? I'm currently tinkering with",
      currentProject: "closed-loop BLDC motor control, low-power BLE sensor nodes, and time-series industrial telemetry",
      ctaText: "Let's talk shop — always happy to jam on interesting engineering puzzles",
    },
  },
  projectSlots: [
    {
      id: "nopo-factory-stack",
      title: "NoPo: Factory Floor to Data Pipeline",
      category: "hardware",
      domainTag: "🏭 Industrial IoT",
      status: "featured",
      summary:
        "Automated data collection and motor control on an industrial chemical reactor at NoPo Nanotechnologies. Built FreeRTOS motor firmware to cut mechanical jitter by 40%, then engineered a Python pipeline to ingest, clean, and map 66 noisy sensor tags into clean daily reports.",
      metricBadges: ["40% JITTER REDUCTION", "±0.5g PRECISION", "66 SCADA TAGS"],
      techBadges: ["FreeRTOS", "ESP32", "HX711 ADC", "OPC-UA", "Modbus TCP", "Python"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "kan-hipco",
      title: "Physics-Informed Neural Networks for Nanotubes",
      category: "experiment",
      domainTag: "🧪 ML Research",
      status: "featured",
      summary:
        "A neural network that respects physics. Built a compact 1,305-parameter KAN model predicting carbon nanotube synthesis quality from 7 reactor inputs in <25ms, delivering closed-loop setpoint recommendations without needing massive cloud clusters.",
      metricBadges: ["1,305 PARAMETERS", "<25ms OPTIMIZATION", "9 QUALITY TARGETS"],
      techBadges: ["PyTorch", "KAN Networks", "SymPy", "XGBoost", "WebGL Digital Twin"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "ros2-rover",
      title: "Autonomous Surveillance Rover (ROS 2 + YOLOv5)",
      category: "software",
      domainTag: "🤖 Robotics",
      status: "featured",
      summary:
        "4WD autonomous patrol rover running ROS 2 on Raspberry Pi 4. Built modular pub/sub nodes orchestrating motor drive, telemetry, and a 2-DOF pan-tilt camera turret with motion-triggered wake and YOLOv5 edge computer vision.",
      metricBadges: ["<15ms PIR WAKE", "1080p@30fps EDGE CV", "4-HOUR RUNTIME"],
      techBadges: ["ROS 2 Humble", "YOLOv5", "Raspberry Pi 4", "OpenCV", "Embedded Linux"],
      githubUrl: "https://github.com/ChAakshay/ai_theft",
    },
    {
      id: "safemate-beacon",
      title: "Real-Time Crisis Engine & Dispatch Hub",
      category: "software",
      domainTag: "🌍 Crisis Systems",
      status: "featured",
      summary:
        "A real-time emergency safety dashboard that fuses live disaster feeds, weather telemetry, and GPS geofencing to alert travelers before they walk into dangerous zones. Includes sub-100ms breach detection and an in-browser synthesized acoustic siren.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "LIVE TELEMETRY"],
      techBadges: ["Next.js 14", "TypeScript", "Leaflet", "Web Audio API", "Haversine Engine"],
      githubUrl: "https://github.com/ChAakshay/safe_mate",
    },
    {
      id: "loan-risk-explainer",
      title: "Explainable AI Credit Risk Scoring",
      category: "experiment",
      domainTag: "💳 Fintech ML",
      status: "wip",
      summary:
        "Algorithmic credit underwriting focused on explainability. Predicts loan default probabilities and breaks down exactly why using SHAP force plots and interactive risk sliders, making black-box ML decisions transparent.",
      metricBadges: ["SHAP EXPLAINABILITY", "LIVE RISK SCORING", "REGULATORY READY"],
      techBadges: ["Scikit-learn", "SHAP", "Streamlit", "Pandas", "Plotly"],
      githubUrl: "https://github.com/ChAakshay/fincal",
    },
    {
      id: "recomp-180",
      title: "180-Day Body Recomposition PWA",
      category: "software",
      domainTag: "🏋️ Health Tech",
      status: "wip",
      summary:
        "An offline-first Progressive Web App for long-term metabolic health and body recomposition tracking. Runs 100% in the browser with zero cloud dependencies, calculating 14-day rolling TDEE, body fat % trends, and consistency heatmaps.",
      metricBadges: ["180-DAY MATRIX", "OFFLINE-FIRST PWA", "ZERO CLOUD DEPS"],
      techBadges: ["Vanilla JS", "Service Worker", "Canvas API", "FastAPI", "PWA"],
      githubUrl: "https://github.com/ChAakshay/recomp-180",
    },
  ],
  skillCategories: [
    {
      title: "Firmware & Embedded",
      icon: "Cpu",
      color: "yellow",
      skills: [
        "C / Embedded C++17",
        "FreeRTOS (Tasks, Queues, Semaphores)",
        "ESP32 / STM32 / ARM Cortex-M",
        "RISC-V / 8051 Assembly",
        "OPC-UA / Modbus RTU/TCP",
        "I2C / SPI / UART / CAN Bus",
        "24-Bit ADCs / Strain Gauges",
        "PID Closed-Loop Motor Control",
        "PCB Design (KiCad)",
        "Oscilloscopes / Logic Analyzers / JTAG",
      ],
    },
    {
      title: "Robotics & Controls",
      icon: "Bot",
      color: "green",
      skills: [
        "ROS 2 Humble (Nodes, QoS, Pub/Sub)",
        "MATLAB / Simulink",
        "OpenCV / YOLOv5",
        "6-DOF Flight Dynamics",
        "Sensor Fusion (Kalman Filters)",
        "Differential Drive Kinematics",
        "Field-Oriented Control (FOC)",
        "Embedded Linux / Raspberry Pi",
      ],
    },
    {
      title: "ML & Data Science",
      icon: "Gauge",
      color: "coral",
      skills: [
        "PyTorch / TensorFlow Lite",
        "Scikit-learn / XGBoost",
        "SHAP / Explainable AI",
        "Physics-Informed Neural Nets (PINNs)",
        "KAN Networks / VRBF",
        "Pandas / NumPy / SciPy",
        "Streamlit / Plotly",
        "SCADA Data Engineering",
      ],
    },
    {
      title: "Software & Web",
      icon: "Cable",
      color: "cyan",
      skills: [
        "Python (FastAPI / Django)",
        "TypeScript / JavaScript",
        "Next.js / React",
        "Tailwind CSS / Radix UI",
        "PostgreSQL / SQLite / Supabase",
        "Docker / Microservices",
        "Progressive Web Apps (PWA)",
        "Vercel / Cloudflare Deployment",
      ],
    },
  ],
  timeline: commonTimeline,
};

/* ─── "Software & Data" track ─── */

export const softwareSiteConfig: SiteConfig = {
  profile: {
    name: "CH Aakshay",
    alias: "Tinkerer & Systems Builder",
    role: "Software & Systems Engineer",
    tagline:
      "I architect data pipelines, real-time web applications, and applied ML models — backed by the hardware intuition to understand what's upstream of the API.",
    locationBadge: "Bengaluru, IN",
    statusText: "BENCH ONLINE",
    currentObsession: "real-time telemetry pipelines, applied ML on production constraints, and offline-first web apps",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  benchStatus: commonBenchStatus,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Built industrial Python pipelines processing 66 sensor tags across 6 chemical reactors",
        "Trained physics-informed neural networks running setpoint optimization in <25ms",
        "Ships full-stack software: FastAPI backends, Next.js dashboards, and offline-first PWAs",
      ],
      ctaText: "Copy email & let's talk",
    },
    challenge: {
      promptText: "Got a data pipeline bottleneck, an ML model that won't converge, or a real-time web app that stutters? Let's fix it.",
      submitText: "SEND TO BENCH",
    },
    scouting: {
      bullets: [
        "Industrial data pipelines — OPC-UA SCADA ingestion, IQR outlier filtering, and automated Excel reporting",
        "Applied ML with production constraints — Physics-informed KAN models, SHAP explainability, and fast inference",
        "Full-stack software — Next.js, FastAPI, Streamlit, and PWAs with offline-first client architecture",
      ],
      resumeCtaText: "Download Resume (PDF)",
      footnote: "Systems thinking meets software craft. Scroll down to inspect the code.",
    },
    builder: {
      greeting: "Hey! What are you building? I'm currently deep in",
      currentProject: "physics-informed neural networks, SCADA data engineering, and explainable financial risk models",
      ctaText: "Let's talk shop — I'll bring the terminal and the coffee",
    },
  },
  projectSlots: [
    {
      id: "kan-hipco",
      title: "Physics-Informed Neural Networks for Nanotubes",
      category: "experiment",
      domainTag: "🧪 ML Research",
      status: "featured",
      summary:
        "A neural network that respects physics. Built a compact 1,305-parameter KAN model predicting carbon nanotube synthesis quality from 7 reactor inputs in <25ms, delivering closed-loop setpoint recommendations without needing massive cloud clusters.",
      metricBadges: ["1,305 PARAMETERS", "<25ms OPTIMIZATION", "9 QUALITY TARGETS"],
      techBadges: ["PyTorch", "KAN Networks", "SymPy", "XGBoost", "WebGL Digital Twin"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "nopo-data-pipeline",
      title: "Industrial SCADA → PLC Data Pipeline",
      category: "software",
      domainTag: "🏭 Industrial IoT",
      status: "featured",
      summary:
        "Production data pipeline ingesting raw SCADA time-series across 6 chemical reactors (66 sensor tags). Automated phase windowing, IQR outlier filtering, sensor fault detection, and direct translation into standardized daily workbooks.",
      metricBadges: ["66 SCADA TAGS", "6 REACTORS", "PRODUCTION DEPLOYED"],
      techBadges: ["Python", "OPC-UA", "Modbus TCP", "Pandas", "CustomTkinter"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "safemate-beacon",
      title: "Real-Time Crisis Engine & Dispatch Hub",
      category: "software",
      domainTag: "🌍 Crisis Systems",
      status: "featured",
      summary:
        "A real-time emergency safety dashboard that fuses live disaster feeds, weather telemetry, and GPS geofencing to alert travelers before they walk into dangerous zones. Includes sub-100ms breach detection and an in-browser synthesized acoustic siren.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "LIVE TELEMETRY"],
      techBadges: ["Next.js 14", "TypeScript", "Leaflet", "Web Audio API", "Server-Sent Events"],
      githubUrl: "https://github.com/ChAakshay/safe_mate",
    },
    {
      id: "ros2-rover",
      title: "Autonomous Surveillance Rover (ROS 2 + YOLOv5)",
      category: "software",
      domainTag: "🤖 Robotics",
      status: "featured",
      summary:
        "4WD autonomous patrol rover running ROS 2 on Raspberry Pi 4. Built modular pub/sub nodes orchestrating motor drive, telemetry, and a 2-DOF pan-tilt camera turret with motion-triggered wake and YOLOv5 edge computer vision.",
      metricBadges: ["<15ms PIR WAKE", "1080p@30fps EDGE CV", "5-NODE ROS 2 GRAPH"],
      techBadges: ["ROS 2 Humble", "Python", "YOLOv5", "OpenCV", "Embedded Linux"],
      githubUrl: "https://github.com/ChAakshay/ai_theft",
    },
    {
      id: "loan-risk-explainer",
      title: "Explainable AI Credit Risk Scoring",
      category: "experiment",
      domainTag: "💳 Fintech ML",
      status: "wip",
      summary:
        "Algorithmic credit underwriting focused on explainability. Predicts loan default probabilities and breaks down exactly why using SHAP force plots and interactive risk sliders, making black-box ML decisions transparent.",
      metricBadges: ["SHAP EXPLAINABILITY", "LIVE RISK SCORING", "REGULATORY READY"],
      techBadges: ["Scikit-learn", "SHAP", "Streamlit", "Pandas", "Plotly"],
      githubUrl: "https://github.com/ChAakshay/fincal",
    },
    {
      id: "recomp-180",
      title: "180-Day Body Recomposition PWA",
      category: "software",
      domainTag: "🏋️ Health Tech",
      status: "wip",
      summary:
        "An offline-first Progressive Web App for long-term metabolic health and body recomposition tracking. Runs 100% in the browser with zero cloud dependencies, calculating 14-day rolling TDEE, body fat % trends, and consistency heatmaps.",
      metricBadges: ["180-DAY MATRIX", "OFFLINE-FIRST PWA", "ZERO CLOUD DEPS"],
      techBadges: ["Vanilla JS", "Service Worker", "Canvas API", "FastAPI", "PWA"],
      githubUrl: "https://github.com/ChAakshay/recomp-180",
    },
  ],
  skillCategories: [
    {
      title: "Data Pipelines & Backend",
      icon: "Cable",
      color: "cyan",
      skills: [
        "Python (FastAPI / Django)",
        "OPC-UA / Modbus TCP",
        "PostgreSQL / SQLite / Supabase",
        "Docker / Microservices",
        "SCADA Data Engineering",
        "Pandas / OpenPyXL / NumPy",
        "MQTT / WebSockets",
        "JWT / OAuth2 Authentication",
      ],
    },
    {
      title: "ML & Applied AI",
      icon: "Gauge",
      color: "coral",
      skills: [
        "PyTorch / TensorFlow",
        "Scikit-learn / XGBoost",
        "SHAP / Explainable AI",
        "Physics-Informed Neural Nets (PINNs)",
        "KAN Networks / VRBF",
        "Computer Vision (YOLOv5 / OpenCV)",
        "Streamlit / Plotly Dashboards",
        "TinyML / Edge Inference",
      ],
    },
    {
      title: "Frontend & Web",
      icon: "Code2",
      color: "green",
      skills: [
        "TypeScript / JavaScript",
        "Next.js / React 19",
        "Tailwind CSS / Radix UI",
        "Progressive Web Apps (PWA)",
        "Leaflet / Geospatial APIs",
        "Web Audio API Synthesis",
        "Vercel / Cloudflare Deployment",
        "Supabase / Real-time Subscriptions",
      ],
    },
    {
      title: "Systems & Hardware Foundation",
      icon: "Cpu",
      color: "yellow",
      skills: [
        "Embedded C / C++17",
        "FreeRTOS / Zephyr RTOS",
        "ROS 2 Humble",
        "ESP32 / STM32 / ARM Cortex-M",
        "RISC-V / 8051 Assembly",
        "MATLAB / Simulink",
        "Sensor Calibration & Signal Conditioning",
        "Oscilloscopes / Logic Analyzers / JTAG",
      ],
    },
  ],
  timeline: commonTimeline,
};

/* ─── helper ─── */

export function getSiteConfig(track: LabTrack = "hardware"): SiteConfig {
  return track === "software" ? softwareSiteConfig : hardwareSiteConfig;
}

export const siteConfig: SiteConfig = hardwareSiteConfig;
