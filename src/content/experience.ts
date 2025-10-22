export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "University of Oklahoma",
    role: "Research Intern",
    period: "Jun–Aug 2023",
    bullets: [
      "Analyzed RWIS highway energy consumption using solar optimization models and statistical methods.",
    ],
  },
  {
    org: "University of Tulsa",
    role: "Research Intern",
    period: "Apr–Aug 2024",
    bullets: [
      "Analyzed network traffic and improved device fingerprinting using nmap, p0f, and satori; increased detection precision from DHCP signals.",
    ],
  },
  {
    org: "University of Tulsa",
    role: "Research Intern",
    period: "May 2025–Present",
    bullets: [
      "Built a Python pipeline to scrape and preprocess SEC EDGAR filings; grounded-theory classifications on crypto discourse; evaluated NLP on filings.",
    ],
  },
  {
    org: "Decision Tree",
    role: "Volunteer SWE (Starting)",
    period: "2025",
    bullets: [
      "Contributing as a volunteer software engineer; details incoming as engagement begins.",
    ],
  },
  {
    org: "Reading Partners",
    role: "Tutor",
    period: "Jan–May 2024",
    bullets: [
      "Volunteered as a reading tutor, supporting literacy development.",
    ],
  },
];
