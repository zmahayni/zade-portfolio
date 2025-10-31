export type Project = {
  slug: string;
  title: string;
  summary: string;        // short one-liner for cards
  overview: string;       // paragraph at top of detail
  highlights: string[];   // bullet points
  tech: string[];         // badges
  images: string[];       // first = cover image
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "byterank",
    title: "ByteRank",
    summary: "A web app that gamifies coding with GitHub-based leaderboards.",
    overview:
      "A web app that lets developers compete on GitHub activity with friends. Weekly leaderboards and friendly rivalry.",
    highlights: [
      "GitHub OAuth and profile syncing",
      "Group leaderboards with activity scoring and tie rules",
      "Secure user data with Supabase RLS",
      "Responsive UI in Next.js and Tailwind",
      "Roadmap: LeetCode stats and weekly events"
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind", "GitHub API"],
    images: [
      "/projects/byterank/hero.png",
      "/projects/byterank/ui-1.png",
      "/projects/byterank/ui-2.png",
      "/projects/byterank/ui-3.png"
    ],
    githubUrl: "https://github.com/zademahayni/byterank"
  },
  {
    slug: "crane-preservation",
    title: "Whooping Crane Conservation Project",
    summary: "CNN classifier for endangered whooping crane detection.",
    overview:
      "A wildlife classifier to detect endangered whooping cranes in camera trap images and support conservation efforts.",
    highlights: [
      "Trained a PyTorch CNN targeting high recall",
      "92% recall on held-out data",
      "Flask API with AWS Lambda and S3 for low-cost deployment",
      "Earned 2nd place in the Pelton Endowed Award 🏆"
    ],
    tech: ["PyTorch", "Flask", "AWS Lambda", "AWS S3"],
    images: [
      "/projects/crane-preservation/hero.jpg"
    ],
    githubUrl: "https://github.com/zademahayni/whooping-crane"
  },
  {
    slug: "docsmith",
    title: "DocSmith",
    summary: "Client-side AI document assistant with on-device inference.",
    overview:
      "Summarizes and translates PDFs and DOCX files in the browser using Chrome on-device AI. Zero cost inference.",
    highlights: [
      "Fully local extraction and summarization",
      "Optional Supabase sync with RLS for privacy",
      "Drag and drop UI with clear status and results",
      "Works offline on supported browsers"
    ],
    tech: ["Next.js", "TypeScript", "Chrome AI APIs"],
    images: [
      "/projects/docsmith/hero.png"
    ],
    githubUrl: "https://github.com/zademahayni/docsmith"
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock-Paper-Scissors on STM32 LCD",
    summary: "Keypad-controlled LCD game on a microcontroller.",
    overview:
      "A keypad-controlled LCD game running on an STM32 board with real-time input and display.",
    highlights: [
      "Hardware I/O with STM32CubeIDE",
      "Low latency input handling and display updates",
      "Simple state machine for game flow"
    ],
    tech: ["C", "STM32CubeIDE"],
    images: [
      "/projects/rock-paper-scissors/hero.png"
    ],
    githubUrl: "https://github.com/zademahayni/rps-lcd"
  },
  {
    slug: "pokemon-rl-agent",
    title: "Pokémon VGC Reinforcement Learning Agent",
    summary: "Self-play RL agent for the VGC doubles format.",
    overview:
      "A self-play reinforcement learning agent that learns competitive decision making for the VGC doubles format.",
    highlights: [
      "Custom environment and reward shaping",
      "PyTorch policy network trained on simulated matches",
      "Automated data collection from Pokémon Showdown",
      "Evaluation with an ELO-style metric"
    ],
    tech: ["PyTorch", "Python", "RL", "Pokémon Showdown API"],
    images: [
      "/projects/pokemon-rl-agent/hero.png"
    ],
    githubUrl: "https://github.com/zademahayni/pokemon-vgc-rl"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

export const getPrevProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  return projects[prevIndex];
};
