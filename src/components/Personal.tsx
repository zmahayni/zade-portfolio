import { personal } from "@/content/personal";

export default function Personal() {
  return (
    <ul className="space-y-2">
      {personal.bullets.map((b, i) => (
        <li key={i} className="text-zinc-300">{b}</li>
      ))}
    </ul>
  );
}
