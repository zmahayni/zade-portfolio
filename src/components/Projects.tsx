import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-[#121826] p-5 transition-transform hover:-translate-y-1"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-medium text-zinc-100">{p.title}</h3>
          </div>
          <p className="mt-2 text-zinc-300">{p.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
