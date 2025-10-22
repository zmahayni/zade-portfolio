"use client";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#personal", id: "personal", label: "Personal" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(links.map((l) => l.id));
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur bg-black/50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="#home" className="text-zinc-100 font-semibold">
          Zade Mahayni
        </Link>
        <div className="hidden gap-6 text-sm md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={
                  "relative pb-1 transition-colors " +
                  (isActive ? "text-white" : "text-zinc-300 hover:text-zinc-100")
                }
              >
                {l.label}
                <span
                  className={
                    "absolute -bottom-0.5 left-0 h-0.5 bg-[#2563EB] transition-all " +
                    (isActive ? "w-full opacity-100" : "w-0 opacity-0")
                  }
                />
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
