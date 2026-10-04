"use client";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink py-24 text-cream"
    >
      <motion.svg
        aria-hidden
        viewBox="0 0 120 60"
        fill="none"
        className="pointer-events-none absolute -right-32 -top-20 w-[560px] max-w-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="46"
          cy="30"
          r="22"
          stroke="#FAF3E1"
          strokeOpacity="0.08"
          strokeWidth="5"
        />
        <circle
          cx="74"
          cy="30"
          r="22"
          stroke="#FA8112"
          strokeOpacity="0.25"
          strokeWidth="5"
        />
      </motion.svg>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:items-center">
        <Reveal>
          <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-cream/10 text-sm font-semibold text-cream/70">
            <img
              src="/images/profile.png"
              alt="Aldous Conde"
              className="rounded-3xl"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About Tali
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Tali is a personal project by Aldous Conde, a web developer. The
            name means &ldquo;tie&rdquo; in Filipino, and that is the idea:
            every invitation ties together the couple, their guests, and the
            day.
          </p>
          <p className="mt-4 max-w-xl text-cream/70">
            Each site is built by hand, so it loads fast, works on every phone,
            and feels like it belongs to the people getting married.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
