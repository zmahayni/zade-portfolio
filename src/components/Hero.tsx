"use client";
import { site } from "@/content/site";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-black to-[#0B0F19]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-[#EAD7B7]">Based in {site.location}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">Hey, I’m Zade</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">CS + Cybersecurity | AI Research | Builder & Learner</p>
          <p className="mt-2 max-w-2xl text-zinc-400">Current goal: {site.goal}.</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-full bg-[#2563EB] px-5 py-2 text-white">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-2 text-zinc-100">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
