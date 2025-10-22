export type ProjectItem = {
  title: string;
  blurb: string;
  tags: string[];
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "DocSmith",
    blurb:
      "Client-side AI document assistant (Next.js/TS/Tailwind, Supabase). On-device Chrome summarizer/translator; offline",
    tags: ["Next.js", "TypeScript", "Supabase", "AI"],
  },
  {
    title: "Pokémon VGC RL Agent",
    blurb:
      "Deep RL in PyTorch with self-play and reward shaping; competitive ELO in Pokémon Showdown’s VGC.",
    tags: ["PyTorch", "Reinforcement Learning"],
  },
  {
    title: "Whooping Crane CNN",
    blurb:
      "Flask + AWS Lambda/S3; 10k+ images; 92% recall; Pelton Endowed Award 2nd place.",
    tags: ["Flask", "AWS", "CNN"],
  },
  {
    title: "To-Do List App",
    blurb:
      "Full-stack Flask + SQLite + HTML/CSS/JS; journals, categorized tasks, calendar features.",
    tags: ["Flask", "SQLite", "Full-Stack"],
  },
  {
    title: "Rock-Paper-Scissors LCD",
    blurb:
      "Arduino + STM32CubeIDE; LCD + keypad; embedded UI and real-time interaction.",
    tags: ["Arduino", "Embedded"],
  },
  {
    title: "PromptVault",
    blurb:
      "Notion-meets-GitHub for prompt engineering. Save, tag, version, and share prompts. Stretch: AI auto-tagging, diffs, prompt linting.",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    title: "ByteRank (Team Edition)",
    blurb:
      "Team leaderboard from GitHub activity (commits, PRs, reviews, stars). Weekly highlights and social gamification.",
    tags: ["Next.js", "Supabase", "GitHub API"],
  },
];
