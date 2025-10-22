"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
        <motion.div
          className="mt-6 text-zinc-300"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
