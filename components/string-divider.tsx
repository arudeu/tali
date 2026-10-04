"use client";
import { motion } from "motion/react";

const WAVE = "M8,44 C60,44 90,44 120,36 C140,31 160,18 150,12 C140,6 126,16 134,32 C142,48 170,52 200,48 C240,44 270,40 292,34";

/** A red string with a loop that draws between two people (the dots) as you scroll to it. */
export function StringDivider() {
  return (
    <div className="flex justify-center px-6 py-8" aria-hidden>
      <svg viewBox="0 0 300 64" fill="none" className="w-full max-w-md">
        <motion.path d={WAVE} stroke="#F62440" strokeWidth="3.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.2, ease: "easeInOut" }} />
        <motion.circle cx="8" cy="44" r="6" fill="#3A0A12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
        <motion.circle cx="292" cy="34" r="6" fill="#3A0A12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 2 }} />
      </svg>
    </div>
  );
}
