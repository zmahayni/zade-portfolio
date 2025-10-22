import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <ol className="relative border-l border-white/10">
      {experience.map((item, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <div className="absolute -left-3 mt-1 h-5 w-5 rounded-full border border-white/20 bg-[#121826]"></div>
          <h3 className="text-lg font-medium text-zinc-100">{item.org} — {item.role}</h3>
          <p className="text-sm text-zinc-400">{item.period}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
