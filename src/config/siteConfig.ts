export type LabTrack = "hardware" | "software";

export interface ProjectSlot {
  id: string;
  title: string;
  category: "hardware" | "software" | "experiment";
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

const commonContact = {
  email: "aakshayfreelance@gmail.com",
  phone: "+91 98865 21033",
  githubUrl: "https://github.com/ChAakshay",
  linkedinUrl: "https://linkedin.com/in/chaakshay",
  resumeUrl: "#",
};

const commonGreetings = {
  morning: "Good morning. The soldering iron's warm and the firmware is compiling.",
  afternoon: "Afternoon. Pull up a chair — I'll walk you through what's on the bench.",
  evening: "Evening session. The best bugs get squashed after hours.",
  lateNight: "Late night, huh? Same. Grab some coffee and let's talk hardware.",
};

const commonThinkerNotes = [
  "Note to self: sleep() is just a compiler optimization for humans",
  "If it works on the first try, you forgot to plug it in",
  "TODO: prove P ≠ NP (right after fixing this UART baud rate)",
  "The oscilloscope never lies. The datasheet, however...",
  "Semaphores: because my tasks need personal space too",
  "Debugging is being the detective in a crime movie where you're also the murderer",
];

const commonTimeline: TimelineEntry[] = [
  {
    date: "Jun 2026 — Aug 2026",
    title: "Industrial Embedded Firmware Intern",
    subtitle: "NoPo Nanotechnologies India Pvt. Ltd. · HiPCO CNT Division · Bengaluru",
    stamp: "DEPLOYED TO PRODUCTION",
    description:
      "Engineered dual-priority FreeRTOS firmware (ANIC_V7_6_8Val) for a Roll-to-Roll nanotube manufacturing rig — cut motor jitter by 40%. Built 6-channel 24-bit ADC load-cell telemetry with 3-point bench calibration achieving ±0.5g precision. Integrated 66-tag OPC-UA SCADA sensor schema across 6 HiPCO chemical reactors. Ported a 167-formula thermodynamics model into a fixed-point numerical solver running in <50ms.",
  },
  {
    date: "2023 — 2027",
    title: "B.Tech in Electronics & Communication Engineering",
    subtitle: "PES University, Bengaluru",
    stamp: "CORE SYSTEMS TRACK",
    description:
      "Specializing in Real-Time Operating Systems (RTOS), Embedded Microcontroller Systems, Robotic Systems, Digital Signal Processing (DSP), Computer Architecture & RISC-V, and FPGA/VLSI Design.",
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

export const hardwareSiteConfig: SiteConfig = {
  profile: {
    name: "CH Aakshay",
    alias: "The Breadboard Whisperer",
    role: "Embedded Hardware & Firmware Engineer",
    tagline:
      "I build deterministic real-time firmware, closed-loop motion control, and physical hardware systems that communicate flawlessly — and don't catch fire.",
    locationBadge: "Bengaluru, IN",
    statusText: "LAB ONLINE",
    currentObsession: "multi-threaded FreeRTOS architectures & sensor signal conditioning on production rigs",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Ships production RTOS firmware — deployed on 24/7 industrial manufacturing rigs",
        "Debugs hardware at 3am voluntarily — owns problems end-to-end from schematic to telemetry",
        "Won't mass-apply — if I'm reaching out, I've studied your product and I want in",
      ],
      ctaText: "Copy my email & let's talk",
    },
    challenge: {
      promptText: "Tell me what you're building and what's broken — I love a good hardware puzzle.",
      submitText: "TRANSMIT TO LAB",
    },
    scouting: {
      bullets: [
        "Hands-on industrial firmware — FreeRTOS, bare-metal C/C++, real sensor calibration on production rigs",
        "Hardware-level diagnostics — Oscilloscopes, logic analyzers, 24-bit ADCs, JTAG/SWD, PlatformIO",
        "Reliable physical hardware — zero packet loss telemetry, ±0.5g sensor precision, 40% jitter reduction in production",
      ],
      resumeCtaText: "Download Full Dossier (Resume PDF)",
      footnote: "P.S. — The interesting stuff isn't on the resume. Scroll down and poke around.",
    },
    builder: {
      greeting: "Hey! What are you hacking on? I'm currently deep in",
      currentProject: "multi-threaded FreeRTOS architectures, strain gauge calibration, and industrial telemetry pipelines on ESP32",
      ctaText: "Let's jam — I'll bring the breadboard",
    },
  },
  projectSlots: [
    {
      id: "nopo-rtos-firmware",
      title: "The Nanotech Rig Master",
      category: "hardware",
      status: "featured",
      summary:
        "Dual-priority FreeRTOS firmware for an industrial Roll-to-Roll carbon nanotube manufacturing rig at NoPo Nanotechnologies. Optical encoder interrupt-driven PID velocity control + 6-channel 24-bit ADC load-cell telemetry with binary semaphore task isolation. Deployed on a 24/7 production floor.",
      metricBadges: ["40% JITTER REDUCTION", "±0.5g PRECISION", "10Hz ZERO-LOSS TELEMETRY"],
      techBadges: ["FreeRTOS", "ESP32", "HX711 24-Bit ADC", "AccelStepper PID", "Strain Gauges", "UART"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "ros2-rover",
      title: "The Autonomous Night Watchman",
      category: "software",
      status: "featured",
      summary:
        "4WD autonomous surveillance rover running ROS 2 Humble on Raspberry Pi 4 with Ubuntu Linux. 5 modular pub/sub nodes orchestrating locomotion, telemetry, and a 2-DOF pan-tilt camera turret with PIR motion-triggered wake and 1080p CSI edge streaming over 150m² patrol perimeter.",
      metricBadges: ["<15ms PIR WAKE LATENCY", "1080p@30fps EDGE VIDEO", "4-HOUR BATTERY RUNTIME"],
      techBadges: ["ROS 2 Humble", "Raspberry Pi 4", "Embedded Linux", "CSI Camera", "SG90 Servos", "PIR GPIO"],
      githubUrl: "https://github.com/ChAakshay/ai_theft",
    },
    {
      id: "safemate-beacon",
      title: "SafeMate: The Emergency Guardian",
      category: "experiment",
      status: "wip",
      summary:
        "Real-time geospatial crisis beacon — hackathon winner. Sub-3s GPS telemetry streaming into a 60-point circular breadcrumb buffer with Haversine proximity geofencing, 4-source data fusion (UN GDACS, Google News, Open-Meteo, OSM), and a 120dB synthesized acoustic SOS siren.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "🏆 HACKATHON WINNER"],
      techBadges: ["Next.js 14", "GPS API", "Haversine Engine", "Web Audio Synthesis", "Multi-Source Fusion"],
      githubUrl: "https://github.com/ChAakshay/safe_mate",
    },
    {
      id: "risc-v-processor",
      title: "Silicon From Scratch",
      category: "hardware",
      status: "coming-soon",
      summary:
        "RISC-V 5-stage pipelined processor & bare-metal 8051 peripheral drivers. Instruction hazard mitigation, 16-bit timer ISRs, and deterministic 115,200 baud full-duplex UART framing with zero packet corruption. Lab notes incoming.",
      metricBadges: ["115,200 BAUD", "ZERO PACKET CORRUPTION", "5-STAGE PIPELINE"],
      techBadges: ["RISC-V Assembly", "Bare-Metal C", "8051", "UART", "Timer ISRs"],
      githubUrl: "https://github.com/ChAakshay",
    },
  ],
  skillCategories: [
    {
      title: "Firmware & RTOS",
      icon: "Cpu",
      color: "yellow",
      skills: [
        "FreeRTOS (Tasks, Queues, Semaphores, Mutexes)",
        "Bare-Metal C/C++",
        "ESP32",
        "STM32 / ARM Cortex",
        "Arduino",
        "Watchdog Timers (WDT)",
        "Interrupt Latency Profiling",
        "OTA Bootloaders",
      ],
    },
    {
      title: "Protocols & Buses",
      icon: "Cable",
      color: "cyan",
      skills: [
        "CAN Bus",
        "Modbus RTU/TCP",
        "RS-485",
        "OPC-UA PLC",
        "UART",
        "SPI",
        "I2C",
        "GPIO / CSI Ribbon",
        "ADC/DAC",
        "PWM",
        "Timer ISRs",
      ],
    },
    {
      title: "Sensors, Actuators & Control",
      icon: "Gauge",
      color: "coral",
      skills: [
        "24-Bit ADCs (HX711)",
        "Strain Gauges",
        "Pressure Transducers",
        "Optical Encoders",
        "Stepper Motors (AccelStepper)",
        "PID Closed-Loop Control",
        "SG90 Micro Servos",
        "PIR Motion Sensors",
        "Digital Filtering & Auto-Zeroing",
      ],
    },
    {
      title: "Robotics & Edge Systems",
      icon: "Bot",
      color: "green",
      skills: [
        "ROS 2 Humble (Nodes, QoS, Pub/Sub)",
        "Embedded Linux",
        "Raspberry Pi 4",
        "Camera Serial Interface (CSI)",
        "Differential Drive Kinematics",
        "Pan-Tilt Gimbal Actuation",
      ],
    },
    {
      title: "Languages & Bench Tools",
      icon: "Wrench",
      color: "lavender",
      skills: [
        "C",
        "Embedded C++17",
        "Python",
        "RISC-V Assembly",
        "8051 Assembly",
        "TypeScript",
        "Bash",
        "Oscilloscopes (DSO)",
        "Logic Analyzers",
        "JTAG/SWD Debuggers",
        "Multimeters",
        "PlatformIO",
        "Vivado / Vitis HLS",
        "Git",
      ],
    },
  ],
  timeline: commonTimeline,
};

export const softwareSiteConfig: SiteConfig = {
  profile: {
    name: "CH Aakshay",
    alias: "The Breadboard Whisperer",
    role: "Embedded Software & Real-Time Systems Engineer",
    tagline:
      "I architect deterministic FreeRTOS kernels, ROS 2 distributed edge pipelines, and low-latency IoT telemetry architectures.",
    locationBadge: "Bengaluru, IN",
    statusText: "LAB ONLINE",
    currentObsession: "multi-threaded FreeRTOS task starvation avoidance & zero-loss serial telemetry",
  },
  contact: commonContact,
  greetings: commonGreetings,
  thinkerNotes: commonThinkerNotes,
  hotlineChannels: {
    hire: {
      valuePills: [
        "Engineered dual-priority FreeRTOS multi-threading (cut motor jitter by 40%)",
        "Constructed ROS 2 distributed pub/sub node graphs & 1080p CSI edge video streaming",
        "Ported 167-formula thermodynamics physics models to numerical solvers in <50ms",
      ],
      ctaText: "Copy my email & let's talk",
    },
    challenge: {
      promptText: "Throw your concurrency race condition, RTOS priority inversion, or latency bottleneck at me.",
      submitText: "TRANSMIT TO LAB",
    },
    scouting: {
      bullets: [
        "Deterministic RTOS software — FreeRTOS preemptive scheduling, binary semaphores, queues, mutexes",
        "Robotics & edge software — ROS 2 Humble node topologies, QoS profiles, subscriber/publisher patterns",
        "High-throughput data pipelines — 66-tag OPC-UA SCADA ingestion, circular breadcrumb buffers, real-time geofencing",
      ],
      resumeCtaText: "Download Software Dossier",
      footnote: "Production-tested C/C++17, Python, and ROS 2 middleware architectures.",
    },
    builder: {
      greeting: "Hey! What are you hacking on? I'm currently deep in",
      currentProject: "ROS 2 Humble node graph topologies and deterministic telemetry pipelines on Linux/RTOS",
      ctaText: "Let's jam — I'll bring the terminal",
    },
  },
  projectSlots: [
    {
      id: "ros2-rover",
      title: "The Autonomous Night Watchman",
      category: "software",
      status: "featured",
      summary:
        "4WD autonomous surveillance rover running ROS 2 Humble on Raspberry Pi 4 with Ubuntu Linux. 5 modular pub/sub nodes managing locomotion, power telemetry, and a 2-DOF Pan-Tilt gimbal with GPIO interrupt wake and 1080p@30fps CSI edge streaming.",
      metricBadges: ["<15ms PIR WAKE LATENCY", "1080p@30fps EDGE VIDEO", "5-NODE ROS 2 GRAPH"],
      techBadges: ["ROS 2 Humble", "Raspberry Pi 4", "Embedded Linux", "CSI Camera", "Python", "QoS Pub/Sub"],
      githubUrl: "https://github.com/ChAakshay/ai_theft",
    },
    {
      id: "nopo-rtos-firmware",
      title: "The Nanotech Rig Master",
      category: "hardware",
      status: "featured",
      summary:
        "Fail-safe dual-priority FreeRTOS firmware (ANIC_V7_6_8Val) isolating optical encoder interrupt PID velocity control from asynchronous 6-channel load-cell telemetry; eliminated task starvation and cut jitter by 40% using semaphores and non-blocking yields.",
      metricBadges: ["40% JITTER REDUCTION", "NON-BLOCKING YIELDS", "10Hz ZERO-LOSS TELEMETRY"],
      techBadges: ["FreeRTOS", "Embedded C++17", "Binary Semaphores", "Task Priorities", "PID Loops", "UART"],
      githubUrl: "https://github.com/ChAakshay/kan_hipco_model",
    },
    {
      id: "safemate-beacon",
      title: "SafeMate: The Emergency Guardian",
      category: "experiment",
      status: "wip",
      summary:
        "Event-driven crisis intelligence engine ingesting 4 live data sources via LLM reasoning cascade. High-frequency GPS telemetry streaming into in-memory 60-point circular breadcrumb buffer with Haversine proximity evaluation.",
      metricBadges: ["SUB-3s GPS TELEMETRY", "<100ms GEOFENCE BREACH", "🏆 HACKATHON WINNER"],
      techBadges: ["Next.js 14", "TypeScript", "Haversine Engine", "Circular Buffers", "Web Audio API"],
      githubUrl: "https://github.com/ChAakshay/safe_mate",
    },
    {
      id: "risc-v-processor",
      title: "Silicon From Scratch",
      category: "hardware",
      status: "coming-soon",
      summary:
        "Bare-metal C & RISC-V assembly routines on a 5-stage pipelined architecture. Instruction hazard mitigation, memory-mapped I/O registers, and deterministic 115,200 baud full-duplex UART serial packet framing.",
      metricBadges: ["115,200 BAUD", "HAZARD MITIGATION", "5-STAGE PIPELINE"],
      techBadges: ["RISC-V Assembly", "Bare-Metal C", "8051", "UART Framing", "Timer ISRs"],
      githubUrl: "https://github.com/ChAakshay",
    },
  ],
  skillCategories: [
    {
      title: "Embedded Software & RTOS",
      icon: "Cpu",
      color: "yellow",
      skills: [
        "FreeRTOS (Preemptive Scheduling, Queues, Semaphores)",
        "Bare-Metal C",
        "Modern C++17",
        "Task Priority Inversion Mitigation",
        "Watchdog Timers (WDT)",
        "Interrupt Latency Profiling",
        "Bootloaders / OTA",
      ],
    },
    {
      title: "Robotics & Edge Systems",
      icon: "Bot",
      color: "green",
      skills: [
        "ROS 2 Humble (Nodes, QoS, Pub/Sub)",
        "Embedded Linux",
        "Raspberry Pi 4",
        "Camera Serial Interface (CSI)",
        "Differential Drive Kinematics",
        "Pan-Tilt Gimbal Actuation",
      ],
    },
    {
      title: "Protocols & Data Pipelines",
      icon: "Cable",
      color: "cyan",
      skills: [
        "OPC-UA SCADA Ingestion",
        "CAN Bus",
        "Modbus RTU/TCP",
        "RS-485",
        "UART Serial Framing",
        "SPI",
        "I2C",
        "Web Audio API Synthesis",
        "Haversine Geofencing",
      ],
    },
    {
      title: "Languages",
      icon: "Code2",
      color: "coral",
      skills: [
        "Embedded C",
        "C++17",
        "Python",
        "TypeScript",
        "RISC-V Assembly",
        "8051 Assembly",
        "Bash Shell Scripting",
      ],
    },
    {
      title: "Bench & Testing Tools",
      icon: "Wrench",
      color: "lavender",
      skills: [
        "Logic Analyzers",
        "Digital Storage Oscilloscopes (DSO)",
        "JTAG / SWD In-Circuit Debuggers",
        "PlatformIO",
        "Vivado / Vitis HLS",
        "Ripes Simulator",
        "Git",
      ],
    },
  ],
  timeline: commonTimeline,
};

export function getSiteConfig(track: LabTrack = "hardware"): SiteConfig {
  return track === "software" ? softwareSiteConfig : hardwareSiteConfig;
}

export const siteConfig: SiteConfig = hardwareSiteConfig;
