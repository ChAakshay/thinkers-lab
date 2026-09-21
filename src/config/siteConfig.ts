export type LabTrack = "hardware" | "software";

export interface LabReportData {
  problem: string;
  approach: string[];
  results: string[];
  keyTakeaway: string;
}

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
  labReport?: LabReportData;
}

export interface SkillItem {
  name: string;
  tier?: "production" | "core" | "exploring";
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: (string | SkillItem)[];
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

const softwareBenchStatus: BenchStatusData = {
  ...commonBenchStatus,
  currentlyOnDesk: {
    title: "What's On My Desk Right Now",
    items: [
      {
        topic: "SCADA Ingestion & Telemetry Pipelines",
        desc: "Automating high-throughput time-series data parsing, IQR noise filters, and OPC-UA sync for real-time monitoring.",
        tag: "Data Pipelines",
        tagColor: "bg-cyan",
      },
      {
        topic: "Physics-Constrained ML & Explainability",
        desc: "Benchmarking Kolmogorov-Arnold Networks (KAN) against standard MLPs for low-latency physical systems modeling.",
        tag: "Applied AI",
        tagColor: "bg-pop-yellow",
      },
      {
        topic: "Offline-First Client Architectures",
        desc: "Building zero-cloud dependency Progressive Web Apps with Service Workers, local IndexedDB, and Web Audio synthesis.",
        tag: "Web Systems",
        tagColor: "bg-phosphor",
      },
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
      labReport: {
        problem:
          "Industrial Roll-to-Roll chemical reactors for carbon nanotube manufacturing suffered from mechanical stepper motor jitter and 66 noisy analog sensor streams, leading to inconsistent tension and batch yields.",
        approach: [
          "Developed dual-priority FreeRTOS firmware (ANIC) on ESP32, isolating motor timing critical loops from network telemetry.",
          "Integrated 24-bit HX711 ADCs with customized digital moving-average filters for ±0.5g precision substrate tension monitoring.",
          "Engineered a Python background daemon polling OPC-UA and Modbus TCP with automated IQR outlier rejection.",
        ],
        results: [
          "Eliminated motor jitter by 40% on live production manufacturing rig.",
          "Automated daily reporting across 66 sensor tags over 6 reactors with zero manual intervention.",
          "Firmware deployed and running 24/7 in an industrial manufacturing facility.",
        ],
        keyTakeaway:
          "Real-world hardware is unpredictable. Robust firmware requires defensive timing budgets, task isolation, and noise filtering before data ever touches software.",
      },
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
      labReport: {
        problem:
          "Standard deep learning black-box models recommended unphysical reactor setpoints (negative pressures, thermodynamic violations) and required heavy GPU servers that couldn't run inside the factory loop.",
        approach: [
          "Implemented Kolmogorov-Arnold Networks (KAN) utilizing learnable B-spline activation functions on edges rather than fixed nodes.",
          "Encoded physical boundary constraints into custom PyTorch loss functions penalizing non-physical gradient jumps.",
          "Extracted symbolic equations via SymPy to allow chemical engineers to verify the learned physical laws.",
        ],
        results: [
          "Compressed model to only 1,305 parameters with higher fidelity than a 50,000-parameter MLP.",
          "Sub-25ms inference latency on standard CPU, enabling real-time closed-loop setpoint advisory.",
          "Accurately predicted 9 concurrent synthesis quality targets.",
        ],
        keyTakeaway:
          "Encoding domain physics directly into model architectures beats brute-force parameter scaling every time for edge engineering applications.",
      },
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
      labReport: {
        problem:
          "Continuous edge computer vision rapidly drained mobile rover batteries, while monolithic control scripts caused watchdog timeouts and drive freezes during heavy camera frame processing.",
        approach: [
          "Decoupled control into isolated ROS 2 nodes (drive_control, turret_manager, vision_detector, power_monitor) using QoS policies.",
          "Designed a hardware PIR interrupt sleep state: rover idles at low milliamp draw until thermal motion wakes the video pipeline in <15ms.",
          "Optimized YOLOv5-nano with OpenCV DNN backend for 1080p@30fps inference on Raspberry Pi 4.",
        ],
        results: [
          "Extended autonomous battery patrol runtime to over 4 hours on a compact 2S Li-Po pack.",
          "Sub-80ms total loop latency from motion trigger to target tracking classification.",
          "Resilient node fault tolerance — vision crash does not affect rover drive safety.",
        ],
        keyTakeaway:
          "Hardware-aware power states and loose ROS 2 pub/sub coupling allow resource-constrained robots to punch far above their weight class.",
      },
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
      labReport: {
        problem:
          "In natural disaster and crisis zones, victims often encounter hazard perimeters without warning, while native mobile apps suffer from installation friction and server latency.",
        approach: [
          "Constructed client-side Haversine spatial indexing in web workers to evaluate active geofence perimeters in under 100ms.",
          "Engineered an in-browser acoustic siren using the Web Audio API (zero audio file downloads required).",
          "Implemented offline-first Service Worker caching to maintain emergency map tiles even with degraded cellular connectivity.",
        ],
        results: [
          "Sub-100ms perimeter breach warning directly in any mobile web browser.",
          "Continuous sub-3 second geolocation tracking with low battery footprint.",
          "Zero app-store friction for emergency dispatch and traveler safety.",
        ],
        keyTakeaway:
          "Emergency software must be zero-friction and work without cloud dependencies when networks are failing.",
      },
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
      labReport: {
        problem:
          "Lending regulations prohibit black-box algorithmic credit decisions without explicit, adverse-action explanations for borrowers.",
        approach: [
          "Trained gradient-boosted decision trees paired with TreeSHAP for exact local Shapley value feature attribution.",
          "Built interactive parameter adjustment sliders in Streamlit to simulate how applicant profile tweaks affect default probability.",
        ],
        results: [
          "Generates compliant, plain-language explanations for every credit evaluation in real time.",
          "Deconstructs complex non-linear feature interactions into clear visual waterfall charts.",
        ],
        keyTakeaway:
          "In regulated domains, an accurate model that cannot explain its reasoning is a liability, not an asset.",
      },
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
      labReport: {
        problem:
          "Existing fitness tracking software monetizes personal biometric data, demands constant cloud connectivity, and locks historical analysis behind subscriptions.",
        approach: [
          "Architected 100% local-first PWA using IndexedDB for persistent encrypted client storage.",
          "Implemented rolling non-linear TDEE solver calculating metabolic expenditure from weight deltas and caloric intake.",
          "Rendered high-density 180-day consistency matrix using native HTML5 Canvas API.",
        ],
        results: [
          "Zero telemetry, zero subscriptions, instant offline boot in <200ms.",
          "Accurate adaptive metabolic estimates smoothed against daily water retention fluctuations.",
        ],
        keyTakeaway:
          "Private, offline-first personal tools are vastly more reliable and respectful of user data than bloated cloud apps.",
      },
    },
  ],
  skillCategories: [
    {
      title: "Firmware & Embedded",
      icon: "Cpu",
      color: "yellow",
      skills: [
        { name: "FreeRTOS (Tasks, Queues, ISRs)", tier: "production" },
        { name: "ESP32 & STM32 (ARM Cortex-M)", tier: "production" },
        { name: "C / Embedded C++17", tier: "production" },
        { name: "OPC-UA & Modbus RTU/TCP", tier: "production" },
        { name: "I2C, SPI, UART, CAN Bus", tier: "core" },
        { name: "24-Bit ADCs & Sensor Calibration", tier: "core" },
        { name: "PID Closed-Loop Motor Control", tier: "core" },
        { name: "PCB Layout (KiCad)", tier: "exploring" },
        { name: "Field-Oriented Control (FOC)", tier: "exploring" },
        { name: "Oscilloscopes & Logic Analyzers", tier: "core" },
      ],
    },
    {
      title: "Robotics & Controls",
      icon: "Bot",
      color: "green",
      skills: [
        { name: "ROS 2 Humble (Nodes & QoS)", tier: "production" },
        { name: "OpenCV & YOLOv5 Edge CV", tier: "core" },
        { name: "Differential Drive Kinematics", tier: "core" },
        { name: "Embedded Linux & Raspberry Pi", tier: "core" },
        { name: "MATLAB & Simulink", tier: "core" },
        { name: "Sensor Fusion (Kalman Filters)", tier: "core" },
        { name: "6-DOF Flight Dynamics", tier: "exploring" },
      ],
    },
    {
      title: "ML & Data Science",
      icon: "Gauge",
      color: "coral",
      skills: [
        { name: "SCADA Data Engineering & Pandas", tier: "production" },
        { name: "PyTorch & Physics-Informed ML", tier: "core" },
        { name: "Scikit-learn & XGBoost", tier: "core" },
        { name: "SHAP Explainable AI", tier: "core" },
        { name: "KAN Networks (B-Splines)", tier: "exploring" },
        { name: "Streamlit & Plotly Dashboards", tier: "core" },
        { name: "NumPy, SciPy & SymPy", tier: "core" },
      ],
    },
    {
      title: "Software & Web",
      icon: "Cable",
      color: "cyan",
      skills: [
        { name: "Python (FastAPI & Data)", tier: "production" },
        { name: "TypeScript & JavaScript", tier: "production" },
        { name: "Next.js & React", tier: "core" },
        { name: "Tailwind CSS & Radix UI", tier: "core" },
        { name: "PostgreSQL & SQLite", tier: "core" },
        { name: "Progressive Web Apps (PWA)", tier: "core" },
        { name: "Docker & Microservices", tier: "exploring" },
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
  benchStatus: softwareBenchStatus,
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
      labReport: {
        problem:
          "Operators manually copied sensor values from industrial chemical reactors into spreadsheets, causing transcription errors and missing critical temperature/pressure anomalies.",
        approach: [
          "Engineered an automated Python pipeline connecting via OPC-UA and Modbus TCP to 6 reactor PLCs.",
          "Implemented IQR (Interquartile Range) statistical outlier filtering to separate true process deviations from noisy analog sensor blips.",
          "Generated structured daily workbooks and analytical trend charts automatically at shift changes.",
        ],
        results: [
          "Processed 66 continuous sensor tags with 100% automated reliability.",
          "Eliminated 3+ hours of daily manual data transcription per shift.",
          "Provided engineering team with clean datasets for reactor yield optimization.",
        ],
        keyTakeaway:
          "Industrial data pipelines are only as good as their edge validation. Cleaning noise at ingestion prevents garbage downstream.",
      },
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
      labReport: {
        problem:
          "Standard ML models hallucinated unphysical reactor setpoints (negative pressures, impossible thermal transitions) during carbon nanotube manufacturing.",
        approach: [
          "Implemented Kolmogorov-Arnold Networks (KAN) utilizing learnable 1D B-spline activation functions on edges.",
          "Formulated thermodynamic penalty functions in PyTorch to constrain gradients to physically valid states.",
          "Extracted symbolic analytical formulas via SymPy for transparent process engineering verification.",
        ],
        results: [
          "Compact 1,305-parameter footprint — runs on low-power edge CPU in <25ms.",
          "High accuracy across 9 simultaneous quality targets.",
          "Replaced expensive cloud compute with on-premise industrial inference.",
        ],
        keyTakeaway:
          "Physics constraints turn machine learning from an unpredictable statistical guessing machine into a robust engineering instrument.",
      },
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
      labReport: {
        problem:
          "Travelers during extreme weather and flood events receive warnings too late because mobile apps require downloads and depend on remote cloud push services.",
        approach: [
          "Built a zero-install Next.js web application utilizing Web Workers for client-side spatial boundary checks.",
          "Used the Web Audio API to synthesize dual-tone evacuation sirens directly in the browser.",
          "Integrated Leaflet mapping with offline service worker tile caching.",
        ],
        results: [
          "Sub-100ms perimeter warning execution.",
          "Sub-3 second GPS polling frequency.",
          "Zero app-store barrier to entry for emergency advisories.",
        ],
        keyTakeaway:
          "In critical systems, push intelligence to the edge client to eliminate server bottleneck points of failure.",
      },
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
      labReport: {
        problem:
          "Monolithic robotics codebases frequently freeze when intensive computer vision algorithms starve motor drive watchdogs of CPU cycles.",
        approach: [
          "Structured autonomous rover using ROS 2 pub/sub nodes with strict Quality-of-Service (QoS) priorities.",
          "Engineered motion-triggered sleep/wake cycle via hardware PIR interrupts.",
          "Tuned YOLOv5 inference engine on Raspberry Pi 4 with OpenCV hardware acceleration.",
        ],
        results: [
          "4+ hours continuous operation on 2S battery pack.",
          "1080p@30fps video stream with sub-80ms edge object tracking.",
          "Total drive subsystem stability even during vision pipeline crashes.",
        ],
        keyTakeaway:
          "Loose node coupling and modular message queues are essential for robust cyber-physical systems.",
      },
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
      labReport: {
        problem:
          "Modern credit risk models can be biased or unexplainable, violating regulatory standards and failing auditability.",
        approach: [
          "Trained gradient boosted trees with TreeSHAP feature attribution to calculate local borrower risk factors.",
          "Built a live interactive Streamlit application with interactive Plotly waterfall graphs.",
        ],
        results: [
          "Transparent adverse-action explanations for each underwriting score.",
          "Instant scenario testing for risk assessment officers.",
        ],
        keyTakeaway:
          "Interpretability and safety must be designed into ML pipelines from day one, not bolted on after training.",
      },
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
      labReport: {
        problem:
          "Subscription fitness apps leak sensitive biometric telemetry to third-party ad networks and fail when offline in gym basements.",
        approach: [
          "Engineered 100% local-first PWA using IndexedDB for private on-device biometric storage.",
          "Implemented numerical TDEE solver with 14-day rolling expenditure dampening.",
          "Developed custom Canvas API graphics for millisecond visual heatmap renders.",
        ],
        results: [
          "Zero telemetry, zero cloud dependencies, instant offline access.",
          "Continuous metabolic adaptation tracking without monthly fees.",
        ],
        keyTakeaway:
          "Building client-first applications is a powerful pattern for privacy, performance, and operational simplicity.",
      },
    },
  ],
  skillCategories: [
    {
      title: "Data Pipelines & Backend",
      icon: "Cable",
      color: "cyan",
      skills: [
        { name: "Python (FastAPI & Async)", tier: "production" },
        { name: "OPC-UA & Modbus TCP Ingestion", tier: "production" },
        { name: "SCADA Data Engineering & Pandas", tier: "production" },
        { name: "PostgreSQL, SQLite & Supabase", tier: "core" },
        { name: "MQTT & WebSocket Telemetry", tier: "core" },
        { name: "Docker & Microservices", tier: "exploring" },
      ],
    },
    {
      title: "ML & Applied AI",
      icon: "Gauge",
      color: "coral",
      skills: [
        { name: "Physics-Informed Neural Nets (PINNs)", tier: "core" },
        { name: "PyTorch & Deep Learning", tier: "core" },
        { name: "Scikit-learn & XGBoost", tier: "core" },
        { name: "SHAP & Explainable AI", tier: "core" },
        { name: "YOLOv5 Edge Computer Vision", tier: "core" },
        { name: "Streamlit & Plotly Dashboards", tier: "core" },
        { name: "KAN Networks (B-Splines)", tier: "exploring" },
      ],
    },
    {
      title: "Frontend & Web",
      icon: "Code2",
      color: "green",
      skills: [
        { name: "TypeScript & JavaScript", tier: "production" },
        { name: "Progressive Web Apps (Offline PWA)", tier: "production" },
        { name: "Next.js 14 & React 19", tier: "core" },
        { name: "Tailwind CSS & Radix UI", tier: "core" },
        { name: "Web Audio API Synthesis", tier: "core" },
        { name: "Leaflet & Geospatial Mapping", tier: "core" },
        { name: "Vercel & Cloudflare Edge", tier: "core" },
      ],
    },
    {
      title: "Systems & Hardware Foundation",
      icon: "Cpu",
      color: "yellow",
      skills: [
        { name: "FreeRTOS (Tasks & Semaphores)", tier: "production" },
        { name: "Embedded C / C++17", tier: "production" },
        { name: "ROS 2 Humble (Robotics)", tier: "production" },
        { name: "ESP32 & STM32 Microcontrollers", tier: "core" },
        { name: "Sensor Calibration & Signal Conditioning", tier: "core" },
        { name: "MATLAB & Simulink", tier: "core" },
        { name: "RISC-V / 8051 Assembly", tier: "exploring" },
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
