import { site } from "@/content/site";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="flex gap-4">
      <a aria-label="LinkedIn" href={site.links.linkedin} target="_blank" className="rounded-full border border-white/10 p-3 text-zinc-200 hover:text-white">
        <FiLinkedin size={18} />
      </a>
      <a aria-label="GitHub" href={site.links.github} target="_blank" className="rounded-full border border-white/10 p-3 text-zinc-200 hover:text-white">
        <FiGithub size={18} />
      </a>
      <a aria-label="Email" href={`mailto:${site.links.email}`} className="rounded-full border border-white/10 p-3 text-zinc-200 hover:text-white">
        <FiMail size={18} />
      </a>
    </div>
  );
}
