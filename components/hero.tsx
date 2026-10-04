"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { HeroArt } from "@/components/hero-art";

const words = "Wedding invitations that feel like your story.".split(" ");

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 pt-20 md:grid-cols-[1.2fr_1fr] md:pt-28">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {words.map((w, i) => (
              <motion.span key={i} className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p className="mt-6 max-w-xl text-lg text-muted-foreground"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 0.8 }}>
            Tali designs and builds wedding invitation websites, so your guests can see the details, RSVP, and feel the day before it happens.
          </motion.p>
          <motion.div className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.2, duration: 0.8 }}>
            <Button asChild size="lg"><Link href="/templates">Browse templates</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/#pricing">See pricing</Link></Button>
          </motion.div>
        </div>
        <div className="hidden md:block"><HeroArt /></div>
      </div>
    </section>
  );
}
