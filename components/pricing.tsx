"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { CURRENCY, tiers } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="bg-sand/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Pricing</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">Pick a ready-made template, or have one designed just for you.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
                <Card className={cn("h-full", t.featured && "border-accent bg-ink text-cream")}>
                  <CardContent className="flex h-full flex-col p-8">
                    <p className="flex items-center gap-2 text-sm font-semibold"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: t.color }} />{t.name}</p>
                    <h3 className="mt-1 text-2xl font-extrabold">{t.title}</h3>
                    <p className="mt-6 text-5xl font-extrabold tracking-tight">
                      {CURRENCY}{t.price}
                    </p>
                    <p className={cn("mt-2 text-sm", t.featured ? "text-cream/70" : "text-muted-foreground")}>{t.note}</p>
                    <ul className="mt-6 flex-1 space-y-3 text-sm">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8" variant={t.featured ? "default" : "dark"}>
                      <Link href="/#contact">Choose {t.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
