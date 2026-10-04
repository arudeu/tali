"use client";
import { motion } from "motion/react";
import { BAR, STEM } from "@/lib/string";

/** Tali logo: a red string written as a cursive "t" with a looped tail, followed by "ali". Hover to redraw the string. */
export function Logo({ size = 34 }: { size?: number }) {
  return (
    <motion.span role="img" aria-label="Tali" className="inline-flex items-center" whileHover="hover">
      <motion.svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden className="shrink-0 overflow-visible">
        <motion.path d={STEM} stroke="#F62440" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"
          variants={{ hover: { pathLength: [1, 0, 1] } }} transition={{ duration: 0.8 }} />
        <motion.path d={BAR} stroke="#F62440" strokeWidth="10" strokeLinecap="round"
          variants={{ hover: { pathLength: [1, 0, 1] } }} transition={{ duration: 0.8, delay: 0.3 }} />
      </motion.svg>
      <span aria-hidden className="-ml-0.5 font-extrabold tracking-tight" style={{ fontSize: size * 0.85 }}>ali</span>
    </motion.span>
  );
}
