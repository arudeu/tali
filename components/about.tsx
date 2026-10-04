"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BAR, STEM } from "@/lib/string";

/** A red thread that arcs behind the portrait and ends in a small loop. viewBox 0 0 320 420. */
const THREAD =
  "M6,404 C-6,300 24,196 104,146 C184,96 300,116 292,198 C286,258 214,248 226,198 C238,150 302,166 314,116";

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  // Mouse parallax: the portrait, glow and floating icons drift at different speeds.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const personX = useTransform(sx, [-1, 1], [-6, 6]);
  const glowX = useTransform(sx, [-1, 1], [18, -18]);
  const glowY = useTransform(sy, [-1, 1], [10, -10]);
  const iconX = useTransform(sx, [-1, 1], [-14, 14]);
  const iconY = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink pt-24 text-cream"
    >
      {/* Big faint "t" in the corner: draws itself, then keeps swaying */}
      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        fill="none"
        className="pointer-events-none absolute -right-24 -top-16 w-[480px] max-w-none"
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d={STEM}
          stroke="#F62440"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.path
          d={BAR}
          stroke="#F62440"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
        />
      </motion.svg>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:items-end">
        {/* Portrait: no frame, standing on the bottom edge of the section */}
        <div className="relative order-2 mx-auto w-full max-w-sm self-end md:order-1">
          {/* Pulsing red glow so the dark hoodie separates from the background */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{ x: glowX, y: glowY }}
          >
            <motion.div
              className="mx-auto aspect-square w-[110%] -translate-x-[5%] rounded-full bg-accent/30 blur-3xl"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              <motion.div
                className="h-full w-full rounded-full bg-accent/20"
                animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Red thread that draws itself around him */}
          <svg
            aria-hidden
            viewBox="0 0 320 420"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <motion.path
              d={THREAD}
              stroke="#F62440"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="314"
              cy="116"
              r="6"
              fill="#F62440"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.8, type: "spring" }}
              style={{ transformOrigin: "314px 116px" }}
            />
          </svg>

          {/* Portrait rises up from the bottom edge */}
          <motion.div
            className="relative z-10"
            style={{ x: personX }}
          >
            <motion.img
              src="/images/profile-cutout.png"
              alt="Aldous Conde"
              draggable={false}
              className="block w-full select-none"
              style={{ filter: "drop-shadow(0 0 22px rgba(246,36,64,0.35))" }}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 70, damping: 16 }}
            />
          </motion.div>

          {/* Floating icons that bob and drift with the mouse */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20"
            style={{ x: iconX, y: iconY }}
          >
            <motion.div
              className="absolute -left-2 top-20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 bg-cream/10 backdrop-blur"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-5 w-5 text-accent" />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute -right-2 top-44"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 bg-cream/10 backdrop-blur"
                animate={{ y: [0, -14, 0], rotate: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-5 w-5 text-accent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Text: heading words rise in one by one, then each paragraph follows */}
        <div className="order-1 pb-24 md:order-2">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {["About", "Tali"].map((w, i) => (
              <motion.span
                key={w}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 30, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              >
                {w}
              </motion.span>
            ))}
          </h2>
          {/* Red string underline that draws under the heading */}
          <svg
            aria-hidden
            viewBox="0 0 200 16"
            fill="none"
            className="mt-2 h-4 w-40"
          >
            <motion.path
              d="M4,10 C40,4 70,14 100,8 C130,2 160,12 196,6"
              stroke="#F62440"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-cream/85">
              Tali is a personal project by Aldous Conde, a web developer who
              builds wedding invitation websites by hand, so each one loads
              fast, works on every phone, and feels like it belongs to the
              couple.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-4 max-w-xl text-cream/75">
              The idea comes from the red string of fate, an East Asian legend.
              It says an invisible red string ties the little fingers of two
              people who are meant to meet. It can stretch and tangle, but it
              never breaks. Tali is built on that story: every invitation is a
              thread from the couple to the people they love.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-4 max-w-xl text-cream/75">
              The name fits too. In Filipino,{" "}
              <motion.em
                className="not-italic font-bold"
                initial={{ color: "#FFFAF3" }}
                whileInView={{ color: "#F62440" }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                tali
              </motion.em>{" "}
              means string or tie, and the cursive t in our logo is a single
              red string with a loop in its tail.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
