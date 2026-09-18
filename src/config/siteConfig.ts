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
  projectSlots: ProjectSlot[];
  skillCategories: SkillCategory[];
  timeline: TimelineEntry[];
}

/* ─── shared constants ─── */

const commonContact = {
  email: "aakshayfreelance@gmail.com",
  phone: "+91 98865 21033",
  githubUrl: "https://github.com/ChAakshay",
  linkedinUrl: "https://linkedin.com/in/chaakshay",
  resumeUrl: "#",
};

const commonGreetings = {
  morning: "Good morning. The soldering iron's warm and the code is compiling.",
  afternoon: "Afternoon. Pull up a chair — I'll walk you through what's on the bench.",
  evening: "Evening session. The best bugs get squashed after hours.",
  lateNight: "Late night, huh? Same. Grab some coffee and let's talk systems.",
};

const commonThinkerNotes = [
  "Note to self: sleep() is just a compiler optimization for humans",
  "If it works on the first try, you forgot to plug it in",
  "TODO: prove P ≠ NP (right after fixing this UART baud rate)",
  "The oscilloscope never lies. The datasheet, however...",
  "Semaphores: because my tasks need personal space too",
  "Debugging is being the detective in a crime movie where you're also the murderer",
  "SCADA pipelines and trading systems are the same problem wearing different hats",
  "The best code I ever wrote was a 3-point calibration routine — it just worked",
];

const commonTimeline: TimelineEntry[] = [
  {
    date: "Jun 2026 — Aug 2026",
    title: "Industrial Embedded Firmware Intern",
    subtitle: "NoPo Nanotechnologies India Pvt. Ltd. · HiPCO CNT Division · Bengaluru",
    stamp: "DEPLOYED TO PRODUCTION",
    description:
      "Owned the full signal chain: Built dual-priority FreeRTOS firmware (ANIC_V7_6_8Val) for a Roll-to-Roll nanotube manufacturing rig — cut motor jitter by 40%. Constructed a 66-tag OPC-UA SCADA data pipeline across 6 reactors. Trained a physics-informed neural network predicting nanotube quality. One internship. Three layers of the stack. Zero handoffs.",
  },
  {
    date: "2023 — 2027",
    title: "B.Tech in Electronics & Communication Engineering",
    subtitle: "PES University, Bengaluru",
    stamp: "SYSTEMS TRACK",
    description:
      "Specializing in Real-Time Operating Systems (RTOS), Embedded Microcontroller Systems, Robotic Systems, Digital Signal Processing (DSP), Computer Architecture & RISC-V, FPGA/VLSI Design, and full-stack software development.",
  },
  {
    date: "2023",
    title: "Karnataka Pre-University Certificate (PUC II) — 86.2%",
    subtitle: "BASE PU College, Bengaluru",
    stamp: "PASSED INSPECTION",
  },
  {
    date: "2021",
    title: "ICSE Class X — 89.8%",
    subtitle: "Innisfree House School, Bengaluru",
    stamp: "FIRST CIRCUIT BUILT",
  },
];

/* ─── "Systems & Hardware" track ─── */

export const hardwareSiteConfig: SiteConfig = {
  profile: {
    name: "CH Aakshay",
    alias: "The Breadboard Whisperer",
    role: "Systems Engineer · Hardware → Cloud",
    tagline:
      "I build systems from silicon to screen — deterministic firmware, industrial data pipelines, physics-informed ML, and the dashboards that make sense of it all.",
    locationBadge: "Bengaluru, IN",
    statusText: "LAB ONLINE",
    currentObsession: "bridging factory-floor firmware with cloud-scale data pipelines",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Ships production FreeRTOS firmware — deployed on 24/7 industrial manufacturing rigs",
        "Builds end-to-end: same internship → firmware + SCADA pipeline + ML model. Zero handoffs.",
        "Won't mass-apply — if I'm reaching out, I've studied your product and I want in",
      ],
      ctaText: "Copy my email & let's talk",
    },
    challenge: {
      promptText: "Throw me a systems puzzle — firmware, data pipeline, sensor integration, or anything in between.",
      submitText: "TRANSMIT TO LAB",
    },
    scouting: {
      bullets: [
        "Full-vertical engineering — FreeRTOS firmware, OPC-UA SCADA pipelines, physics-informed ML, and React dashboards",
        "Industrial production experience — 24/7 manufacturing rigs, 66-tag sensor schemas, ±0.5g calibration precision",
        "Hardware foundation + software reach — the engineer who translates between the physical world and the digital world",
      ],
      resumeCtaText: "Download Full Dossier (Resume PDF)",
      footnote: "P.S. — The interesting stuff isn't on the resume. Scroll down and poke around.",
    },
    builder: {
      greeting: "Hey! What are you building? I'm currently deep in",
      currentProject: "industrial IoT telemetry pipelines, physics-informed neural networks, and ROS 2 edge robotics",
      ctaText: "Let's jam — I'll bring the oscilloscope AND the terminal",
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
        "Three layers of the stack, one internship. Dual-priority FreeRTOS firmware (ANIC_V7_6_8Val) for Roll-to-Roll nanotube manufacturing — PID motor control + 6-channel 24-bit ADC telemetry. Plus a 66-tag OPC-UA SCADA pipeline cleaning data across 6 reactors with IQR filtering and frozen sensor detection.",
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
        "PI-VRBF-KAN model predicting 9 nanotube quality targets from 7 actuator inputs. 17-equation hydrodynamic transport solver, compact 1,305-parameter neural network, and an Augmented Lagrangian inverse optimizer delivering <25ms setpoint backtracking for real-time SCADA closed-loop control.",
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
        "4WD autonomous patrol rover running ROS 2 Humble on Raspberry Pi 4 with Ubuntu Linux. 5 modular pub/sub nodes orchestrating locomotion, telemetry, and a 2-DOF pan-tilt camera turret with PIR motion-triggered wake and real-time YOLOv5 edge inference at 1080p@30fps.",
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
        "Hackathon-winning geospatial crisis beacon + companion dispatch dashboard. Sub-3s GPS telemetry streaming into a 60-point circular breadcrumb buffer with Haversine proximity geofencing, 4-source data fusion (UN GDACS, Open-Meteo, Google News, OSM), and 120dB synthesized acoustic SOS siren.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "🏆 HACKATHON WINNER"],
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
        "Algorithmic credit underwriting with full transparency. Predicts loan default probability and exposes feature importance via SHAP force plots and summary distributions. Interactive risk scoring sliders for real-time what-if analysis — built for regulatory-compliant explainability.",
      metricBadges: ["SHAP EXPLAINABILITY", "LIVE RISK SCORING", "REGULATORY READY"],
      techBadges: ["Scikit-learn", "SHAP", "Streamlit", "Pandas", "Plotly"],
      githubUrl: "https://github.com/ChAakshay",
    },
    {
      id: "recomp-180",
      title: "180-Day Body Recomposition PWA",
      category: "software",
      domainTag: "🏋️ Health Tech",
      status: "wip",
      summary:
        "Offline-first Progressive Web App for long-term metabolic health tracking. GitHub-style 180-day compliance matrix, adaptive 14-day rolling TDEE calculations, US Navy Body Fat % estimation, 7-day EMA scale smoothing, and interactive before/after photo comparison — all running on browser LocalStorage, zero cloud dependency.",
      metricBadges: ["180-DAY MATRIX", "OFFLINE-FIRST PWA", "ZERO CLOUD DEPS"],
      techBadges: ["Vanilla JS", "Service Worker", "Canvas API", "FastAPI", "PWA"],
      githubUrl: "https://github.com/ChAakshay/recomp-180",
    },
    {
      id: "risc-v-processor",
      title: "RISC-V 5-Stage Pipeline + 8051 Bare-Metal",
      category: "hardware",
      domainTag: "⚡ Silicon",
      status: "coming-soon",
      summary:
        "Instruction-set architecture from scratch. RISC-V 5-stage pipelined processor simulation with data forwarding and hazard mitigation. Plus bare-metal 8051 peripheral drivers — 16-bit timer ISRs and deterministic 115,200 baud full-duplex UART with zero packet corruption.",
      metricBadges: ["115,200 BAUD", "ZERO PACKET CORRUPTION", "5-STAGE PIPELINE"],
      techBadges: ["RISC-V Assembly", "Bare-Metal C", "8051", "UART", "Timer ISRs"],
      githubUrl: "https://github.com/ChAakshay",
    },
    {
      id: "drone-sim",
      title: "6-DOF Quadrotor Flight Dynamics",
      category: "hardware",
      domainTag: "🤖 Aerospace",
      status: "coming-soon",
      summary:
        "Full nonlinear 6-DOF equations of motion for quadrotor UAV simulation. Attitude stabilization via PID and state-feedback control with trajectory tracking under aerodynamic disturbances. Mathematical foundations for precision agricultural spraying and autonomous reforestation drones.",
      metricBadges: ["6-DOF MODEL", "PID + STATE FEEDBACK", "TRAJECTORY TRACKING"],
      techBadges: ["MATLAB", "Simulink", "Control Theory", "Nonlinear Dynamics"],
      githubUrl: "https://github.com/ChAakshay",
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
    alias: "The Breadboard Whisperer",
    role: "Software & Systems Engineer",
    tagline:
      "I architect data pipelines, real-time web systems, and ML models — with the hardware intuition to debug what's upstream of the API.",
    locationBadge: "Bengaluru, IN",
    statusText: "LAB ONLINE",
    currentObsession: "physics-informed ML, real-time telemetry pipelines, and explainable AI",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Built OPC-UA SCADA pipelines processing 66 industrial sensor tags across 6 reactors",
        "Trained physics-informed neural networks with <25ms inverse optimization for real-time control",
        "Ships full-stack: FastAPI backends, Next.js dashboards, Streamlit analytics, and PWAs",
      ],
      ctaText: "Copy my email & let's talk",
    },
    challenge: {
      promptText: "Got a data pipeline bottleneck, an ML model that won't converge, or a real-time system that stutters? Let's debug it.",
      submitText: "TRANSMIT TO LAB",
    },
    scouting: {
      bullets: [
        "Industrial data pipelines — OPC-UA SCADA ingestion, IQR outlier filtering, frozen sensor detection, PLC synchronization",
        "Applied ML with production constraints — Physics-informed KAN networks, SHAP explainability, <25ms inference budgets",
        "Full-stack software — Next.js, FastAPI, Streamlit, PWAs with offline-first architecture and zero cloud dependencies",
      ],
      resumeCtaText: "Download Software Dossier",
      footnote: "Systems thinking meets software craft. The interesting stuff is below.",
    },
    builder: {
      greeting: "Hey! What are you building? I'm currently deep in",
      currentProject: "physics-informed neural networks, SCADA data engineering, and explainable credit risk models",
      ctaText: "Let's jam — I'll bring the Jupyter notebook",
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
        "PI-VRBF-KAN model predicting 9 nanotube quality targets from 7 actuator inputs. 17-equation hydrodynamic transport solver, compact 1,305-parameter neural network, and an Augmented Lagrangian inverse optimizer delivering <25ms setpoint backtracking for real-time closed-loop control.",
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
        "Production data engineering pipeline ingesting raw SCADA time-series across 6 chemical reactors (66 instrument tags). Automated phase windowing, IQR outlier filtering, frozen sensor detection, and direct translation into PLC register workbooks via OPC-UA and Modbus TCP.",
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
        "Hackathon-winning geospatial crisis beacon + companion dispatch dashboard. Sub-3s GPS telemetry streaming, 4-source data fusion, Haversine proximity geofencing, and 120dB synthesized acoustic SOS siren. Full Next.js stack with real-time telemetry.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "🏆 HACKATHON WINNER"],
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
        "ROS 2 distributed edge pipeline on Raspberry Pi 4. 5 modular pub/sub nodes orchestrating locomotion, telemetry, and real-time YOLOv5 inference. Computer vision theft detection streaming 1080p@30fps across a 150m² patrol perimeter.",
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
        "Algorithmic credit underwriting with full SHAP explainability. Predicts loan default probability and exposes feature importance via force plots and summary distributions. Interactive risk scoring sliders for real-time what-if analysis — built for regulatory-compliant transparency.",
      metricBadges: ["SHAP EXPLAINABILITY", "LIVE RISK SCORING", "REGULATORY READY"],
      techBadges: ["Scikit-learn", "SHAP", "Streamlit", "Pandas", "Plotly"],
      githubUrl: "https://github.com/ChAakshay",
    },
    {
      id: "recomp-180",
      title: "180-Day Body Recomposition PWA",
      category: "software",
      domainTag: "🏋️ Health Tech",
      status: "wip",
      summary:
        "Offline-first Progressive Web App for long-term metabolic health tracking. GitHub-style 180-day compliance matrix, adaptive TDEE calculations, US Navy Body Fat % estimation, and interactive before/after photo comparison — 100% serverless via browser LocalStorage.",
      metricBadges: ["180-DAY MATRIX", "OFFLINE-FIRST PWA", "ZERO CLOUD DEPS"],
      techBadges: ["Vanilla JS", "Service Worker", "Canvas API", "FastAPI", "PWA"],
      githubUrl: "https://github.com/ChAakshay/recomp-180",
    },
    {
      id: "reality-check",
      title: "Wealth Trajectory Forecasting Dashboard",
      category: "experiment",
      domainTag: "💳 Fintech",
      status: "coming-soon",
      summary:
        "Long-term asset compounding, cash flow modeling, savings rate impact simulations, and net-worth milestone visualization. Custom dark-themed Streamlit dashboard with interactive Plotly charts for personal financial planning.",
      metricBadges: ["COMPOUNDING MODEL", "CASH FLOW SIM", "MILESTONE TRACKER"],
      techBadges: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
      githubUrl: "https://github.com/ChAakshay",
    },
    {
      id: "cyberrakshak",
      title: "Cybercrime Fraud Response Platform",
      category: "software",
      domainTag: "🛡️ Civic Tech",
      status: "coming-soon",
      summary:
        "Emergency response platform for cyber financial fraud victims. Trauma-informed UI with one-tap emergency workflows (1930 helpline), automated bank account freeze notices, Section 503 Magistrate restitution petition drafting, and standardized FIR complaint dossier generation.",
      metricBadges: ["1-TAP EMERGENCY", "AUTO PDF GENERATION", "LEGAL COMPLIANCE"],
      techBadges: ["Next.js", "TypeScript", "PDF Generation", "Legal Forms"],
      githubUrl: "https://github.com/ChAakshay",
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
