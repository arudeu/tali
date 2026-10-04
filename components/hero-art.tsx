"use client";
import { useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Gift, Heart, Mail, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function Float({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={cn("absolute z-10", className)}
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4 + delay, type: "spring" }}>
      <motion.div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-lg"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }} transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroArt() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });
  const rotateY = useTransform(sx, [-1, 1], [-10, 10]);
  const rotateX = useTransform(sy, [-1, 1], [8, -8]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <div className="relative mx-auto h-[540px] w-[300px]" style={{ perspective: 1000 }}>
      <motion.div className="absolute -inset-8 rounded-full bg-sand" initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 3.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
      <motion.div className="relative h-full w-full" style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="flex h-full flex-col items-center rounded-[2.5rem] border-[8px] border-ink bg-cream px-6 pt-14 text-center shadow-2xl">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" aria-hidden>
            <motion.circle cx="46" cy="30" r="22" stroke="#222222" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4, duration: 1.2 }} />
            <motion.circle cx="74" cy="30" r="22" stroke="#FA8112" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 4.5, duration: 1.2 }} />
          </svg>
          <p className="mt-6 text-sm font-semibold text-muted-foreground">You are invited</p>
          <p className="mt-2 text-4xl font-extrabold leading-tight tracking-tight">Anna<br />&amp; Ben</p>
          <div className="my-5 h-px w-16 bg-accent" />
          <p className="text-sm font-semibold">November 28, 10:30 AM</p>
          <p className="mt-1 text-xs text-muted-foreground">Your venue goes here</p>
          <motion.div className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-bold"
            animate={{ scale: [1, 1.08, 1] }} transition={{ delay: 5.5, duration: 1.6, repeat: Infinity }}>
            RSVP
          </motion.div>
        </div>
      </motion.div>
      <Float className="-left-10 top-16"><Heart className="h-6 w-6 text-accent" /></Float>
      <Float className="-right-10 top-40" delay={0.3}><Sparkles className="h-6 w-6 text-accent" /></Float>
      <Float className="-left-8 bottom-32" delay={0.6}><Mail className="h-6 w-6 text-accent" /></Float>
      <Float className="-right-8 bottom-10" delay={0.9}><Gift className="h-6 w-6 text-accent" /></Float>
      <Float className="left-1/2 -top-6" delay={1.2}><MapPin className="h-6 w-6 text-accent" /></Float>
    </div>
  );
}
