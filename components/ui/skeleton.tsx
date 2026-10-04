"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BAR, STEM } from "@/lib/string";

/**
 * Shimmering placeholder block shown while something loads.
 * `mark` adds the faint Tali "t" pulsing in the middle (good for image areas).
 */
export function Skeleton({ className, mark = false }: { className?: string; mark?: boolean }) {
  return (
    <div aria-hidden className={cn("relative overflow-hidden bg-sand", className)}>
      <motion.div
        className="absolute inset-y-0 -left-full w-full"
        style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,250,243,0.75), transparent)" }}
        animate={{ x: ["0%", "200%"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {mark && (
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          className="absolute left-1/2 top-1/2 h-1/2 max-h-32 -translate-x-1/2 -translate-y-1/2"
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={STEM} stroke="#F62440" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={BAR} stroke="#F62440" strokeWidth="5" strokeLinecap="round" />
        </motion.svg>
      )}
    </div>
  );
}
