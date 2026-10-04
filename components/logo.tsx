"use client";
import { motion } from "motion/react";

/** Tali mark: two linked rings (orange + ink) with the wordmark. */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <motion.span className="inline-flex items-center gap-2" whileHover="hover">
      <motion.svg width={size * 2} height={size} viewBox="0 0 120 60" fill="none" aria-hidden>
        <motion.circle cx="46" cy="30" r="22" stroke="#222222" strokeWidth="6" variants={{ hover: { x: -4 } }} />
        <motion.circle cx="74" cy="30" r="22" stroke="#FA8112" strokeWidth="6" variants={{ hover: { x: 4 } }} />
      </motion.svg>
      <span className="text-2xl font-extrabold tracking-tight">tali</span>
    </motion.span>
  );
}
