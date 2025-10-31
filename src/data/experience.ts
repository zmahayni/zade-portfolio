export type Experience = {
  type: "Work" | "Research";
  org: string;
  role: string;
  date: string;      // Single string, not start/end
  location?: string;
  bullets?: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    type: "Work",
    org: "Private",
    role: "Software Engineer (Part-time)",
    date: "Starting December 2025",
    location: "Tulsa, OK",
    bullets: [],
    tech: ["C#", ".NET", "Angular", "Azure"]
  },
  {
    type: "Research",
    org: "University of Tulsa",
    role: "Research Intern — SEC EDGAR NLP",
    date: "May 2025 — Present",
    location: "Tulsa, OK",
    bullets: [
      "Built Python pipeline to fetch and parse SEC filings.",
      "Implemented crypto-term extraction and snippet generation.",
      "Organized outputs for downstream classification and analysis."
    ],
    tech: ["Python", "pandas", "regex", "NLP"]
  },
  {
    type: "Research",
    org: "University of Tulsa",
    role: "Research Intern — Smart Environments (IoT)",
    date: "Apr 2024 — Aug 2024",
    location: "Tulsa, OK",
    bullets: [
      "Analyzed network traffic across heterogeneous IoT devices.",
      "Used nmap, p0f, and satori to improve device fingerprinting.",
      "Explored DHCP signal features for identification."
    ],
    tech: ["nmap", "p0f", "satori", "Wireshark", "Python"]
  },
  {
    type: "Research",
    org: "University of Oklahoma",
    role: "Research Intern — Solar Optimization",
    date: "Jun 2023 — Aug 2023",
    location: "Norman, OK",
    bullets: [
      "Modeled energy needs for RWIS highway monitoring sites.",
      "Built statistical baselines and compared seasonal performance.",
      "Summarized recommendations for power planning."
    ],
    tech: ["Python", "pandas", "statsmodels", "Jupyter"]
  }
];
