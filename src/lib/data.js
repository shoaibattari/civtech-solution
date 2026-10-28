import {
  Award,
  Building2,
  Calculator,
  ClipboardList,
  Cog,
  Compass,
  Eye,
  Hammer,
  Handshake,
  HardHat,
  House,
  Lightbulb,
  Ruler,
  ScanLine,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

export const services = [
  {
    slug: "residential-construction",
    icon: House,
    title: "Residential Construction",
    desc: "From custom homes to renovations, we create spaces that reflect our clients’ unique lifestyles.",
    tags: ["Custom Homes", "Renovation"],
    featured: true,
  },
  {
    slug: "commercial-construction",
    icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail and industrial facilities built to the exact needs of the business that will run them.",
    tags: ["Offices", "Industrial", "Retail"],
    featured: true,
  },
  {
    slug: "project-management",
    icon: ClipboardList,
    title: "Project Management",
    desc: "Comprehensive oversight that keeps every project on schedule and within budget.",
    tags: ["End-to-End", "On-Site Supervision"],
    featured: true,
  },
  {
    slug: "ev-charging-infrastructure",
    icon: Zap,
    title: "EV Charging Infrastructure",
    desc: "Developer of Pakistan’s first commercial DC fast charging station, with solar canopies and retail integration.",
    tags: ["DC Fast Charging", "Solar", "EV"],
    featured: true,
  },
  {
    slug: "renovation-remodeling",
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Transforming existing spaces into modern, functional areas that improve usability and aesthetics.",
    tags: ["Modern Upgrades", "Interiors"],
  },
  {
    slug: "structural-architectural-design",
    icon: Ruler,
    title: "Structural & Architectural Design",
    desc: "Detailed structural and architectural designs that meet code and are efficient to build.",
    tags: ["Structural", "Architectural"],
  },
  {
    slug: "mechanical-works",
    icon: Cog,
    title: "Mechanical Works",
    desc: "Pre-fab structures, canopies, shades and pipeline systems delivered with quality and precision.",
    tags: ["Pre-Fab", "Pipelines", "Canopies"],
  },
  {
    slug: "engineering-surveys",
    icon: ScanLine,
    title: "Engineering Surveys",
    desc: "Topographic and as-built surveys with contour mapping and levelling plans.",
    tags: ["Topographic", "As-Built"],
  },
  {
    slug: "quantity-estimation",
    icon: Calculator,
    title: "Quantity Estimation",
    desc: "Project estimates covering interior and structural quantity evaluations.",
    tags: ["Interior QS", "Structural QS"],
  },
];

export const projectCategories = ["Fuel Stations", "Industrial", "EV Charging"];

export const projects = [
  {
    name: "Defence Filling Station",
    category: "Fuel Stations",
    location: "Khayaban-e-Bahria, DHA Karachi",
    client: "Shell Pakistan",
    featured: true,
  },
  {
    name: "Jinnah Terminal",
    category: "Fuel Stations",
    location: "Shahrah-e-Faisal, near Jinnah Airport, Karachi",
    client: "Shell Pakistan",
    featured: true,
  },
  {
    name: "Pakistan’s First DC Fast Charger",
    category: "EV Charging",
    location: "DHA Karachi",
    client: "Pioneering project",
    featured: true,
  },
  {
    name: "Malik Filling Station",
    category: "Fuel Stations",
    location: "Shahrah-e-Faisal, Karachi",
    client: "Shell Pakistan",
    highlight: "First recycled station",
  },
  {
    name: "Loonikot Filling Station",
    category: "Fuel Stations",
    location: "M-9 Motorway, southbound",
    client: "Shell Pakistan",
  },
  {
    name: "Highlang Filling Station",
    category: "Fuel Stations",
    location: "Bilal Chowrangi, Korangi Industrial Area",
    client: "Shell Pakistan",
  },
  {
    name: "Hascol Lube Blending Plant",
    category: "Industrial",
    location: "Base oil tanks & blending kettles",
    client: "Hascol",
  },
  {
    name: "Hascol Thallian Depot",
    category: "Industrial",
    location: "Punjab",
    client: "Hascol",
  },
  {
    name: "Hascol Sahiwal Depot",
    category: "Industrial",
    location: "Sahiwal, Punjab",
    client: "Hascol",
  },
];

export const industrialPortfolio = [
  { name: "Hascol Lube Blending Plant", scope: "Base Oil Tanks" },
  { name: "Hascol Lube Blending Plant", scope: "Admin Building" },
  { name: "Hascol Lube Blending Plant", scope: "Blending Kettles" },
  { name: "Hascol Thallian Depot", scope: "Oil Storage Depot" },
  { name: "Hascol Kotla Jam Depot", scope: "Oil Storage Depot" },
  { name: "Hascol Sahiwal Depot", scope: "Oil Storage Depot" },
];

export const processSteps = [
  {
    icon: Compass,
    title: "Plan",
    desc: "Site surveys, feasibility, scope and budget agreed up front.",
  },
  {
    icon: Ruler,
    title: "Design & Estimate",
    desc: "Structural and architectural design with detailed quantity estimates.",
  },
  {
    icon: HardHat,
    title: "Build & Supervise",
    desc: "Disciplined execution with experienced engineers on site every day.",
  },
  {
    icon: ShieldCheck,
    title: "Assure & Hand Over",
    desc: "Quality checks at every stage and ongoing technical support after handover.",
  },
];

export const values = [
  {
    icon: Award,
    title: "Quality",
    desc: "Precise, reliable solutions that exceed client expectations at every stage of the project.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    desc: "Honesty, transparency and ethical practice in every interaction with clients and partners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Creative, efficient answers to industry challenges and client needs.",
  },
  {
    icon: Target,
    title: "Smart Management",
    desc: "Strategic project management that optimises resources, minimises risk and delivers on time.",
  },
];

export const missionVision = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Delivering precision & innovation",
    desc: "We deliver expertly crafted civil, construction and technical solutions tailored to our clients’ evolving needs — managing complexity with innovation and precision to ensure quality, efficiency and client satisfaction.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Leading the industry",
    desc: "To lead the construction and project management industry by delivering transformative solutions for projects of every scale — exceeding expectations, enhancing communities and driving industry innovation.",
  },
];

export const structureFeatures = [
  "Minimal designs",
  "Sustainable materials",
  "High-quality finishes",
  "Durability & strength",
  "Customisable layouts",
];

export const founder = {
  name: "Wajahat Ahmed",
  role: "CEO & Founder",
  credentials: [
    "B.E. Civil Engineering (NED)",
    "Master’s in Project Management (MPM)",
    "Project Management Professional (PMP)",
    "14+ years in civil engineering",
    "Managed 50+ Shell Pakistan projects",
  ],
  experienceWith: [
    "Shell",
    "Siemens",
    "General Electric",
    "Aga Khan",
    "Hascol",
    "Meinhardt",
    "Descon",
    "AKUH",
  ],
  quote:
    "Every project is more than construction — it’s a legacy in the making.",
};

export const team = [
  {
    name: "Ahmed Khan",
    role: "Project Manager",
    qual: "B.E. Civil · 8+ years experience",
  },
  {
    name: "Sara Riaz",
    role: "Architect",
    qual: "B.Arch · Interior & exterior design",
  },
  {
    name: "Hassan Mehmood",
    role: "Site Engineer",
    qual: "Civil engineer · Site execution",
  },
  {
    name: "Zain Ali",
    role: "Structural Engineer",
    qual: "M.Sc. Structural Engineering",
  },
  {
    name: "Fatima Ali",
    role: "QS Engineer",
    qual: "Quantity surveying specialist",
  },
  {
    name: "Usman Ali",
    role: "Electrical Engineer",
    qual: "Power & infrastructure systems",
  },
  { name: "Nida Ahmed", role: "HR & Admin", qual: "Management & operations" },
];

export const contactProjectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Project Management",
  "Fuel Station / Depot",
  "EV Charging Infrastructure",
  "Renovation & Remodeling",
  "Engineering Survey",
  "Quantity Estimation",
  "Other",
];
