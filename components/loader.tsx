"use client";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BAR, STEM } from "@/lib/string";

/** Writes the red string cursive "t" stroke by stroke (stem, then bar), and nothing else. */
export function Loader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            role="status"
            aria-label="Loading Tali"
          >
            <div className="flex items-center justify-center">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" aria-hidden className="overflow-visible">
                <motion.path d={STEM} stroke="#F62440" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, ease: "easeInOut" }} />
                <motion.path d={BAR} stroke="#F62440" strokeWidth="7" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }} />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
