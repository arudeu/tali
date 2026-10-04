"use client";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

export const LEFT = "M60,30 C52,16 40,8 28,8 C14,8 6,19 6,30 C6,41 14,52 28,52 C40,52 52,44 60,30";
export const RIGHT = "M60,30 C68,16 80,8 92,8 C106,8 114,19 114,30 C114,41 106,52 92,52 C80,52 68,44 60,30";

/** Draws an infinity symbol, then settles into the linked-rings logo. */
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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            role="status"
            aria-label="Loading Tali"
          >
            <svg width="240" height="120" viewBox="0 0 120 60" fill="none" aria-hidden>
              <motion.g exit={{ opacity: 0 }}>
                <motion.path d={LEFT} stroke="#222222" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                  transition={{ pathLength: { duration: 1.1, ease: "easeInOut" }, opacity: { duration: 2.3, times: [0, 0.75, 1] } }} />
                <motion.path d={RIGHT} stroke="#FA8112" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                  transition={{ pathLength: { duration: 1.1, delay: 1.0, ease: "easeInOut" }, opacity: { duration: 2.3, times: [0, 0.75, 1] } }} />
              </motion.g>
              <motion.circle cx="46" cy="30" r="22" stroke="#222222" strokeWidth="6"
                initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2, duration: 0.6 }} />
              <motion.circle cx="74" cy="30" r="22" stroke="#FA8112" strokeWidth="6"
                initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2, duration: 0.6 }} />
            </svg>
            <motion.p className="mt-2 text-3xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 0.5 }}>
              tali
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
