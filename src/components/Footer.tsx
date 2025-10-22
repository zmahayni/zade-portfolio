import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-5xl px-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );}
