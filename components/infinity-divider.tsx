"use client";
import { motion } from "motion/react";
import { LEFT, RIGHT } from "@/components/loader";

/** Infinity symbol that draws itself when scrolled into view. */
export function InfinityDivider() {
  return (
    <div className="flex justify-center py-6" aria-hidden>
      <svg width="160" height="80" viewBox="0 0 120 60" fill="none">
        <motion.path d={LEFT} stroke="#222222" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeInOut" }} />
        <motion.path d={RIGHT} stroke="#FA8112" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }} />
      </svg>
    </div>
  );
}
