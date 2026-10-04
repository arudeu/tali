"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Placeholder } from "@/components/placeholder";
import { VideoModal } from "@/components/video-modal";
import { templates, tiers, type Template } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { id: 0, label: "All", color: "" },
  ...tiers.map((t, i) => ({ id: i + 1, label: `${t.name}: ${t.title}`, color: t.color })),
];

export default function TemplatesPage() {
  const [tier, setTier] = useState(0);
  const [video, setVideo] = useState<Template | null>(null);
  const shown = templates.filter((t) => tier === 0 || t.tier === tier);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h1 className="text-4xl font-extrabold tracking-tight md:text-6xl"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Templates
      </motion.h1>
      <p className="mt-3 max-w-lg text-muted-foreground">Browse our invitation templates, then choose the one you like.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f.id} onClick={() => setTier(f.id)}
            className={cn("relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer",
              tier === f.id ? "border-ink text-cream" : "border-ink/20 hover:bg-sand")}>
            {tier === f.id && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            {f.color && <span className="relative h-2.5 w-2.5 rounded-full" style={{ backgroundColor: f.color }} />}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((t) => {
            const available = Boolean(t.image);
            const tierInfo = tiers[t.tier - 1];
            return (
              <motion.div key={t.slug} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}
                whileHover={available ? { y: -6 } : undefined}>
                <Card className={cn("overflow-hidden", !available && "bg-transparent")}>
                  <CardContent className="p-3">
                    <div className="group relative">
                      {available ? (
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                          <Image src={t.image!} alt={`${t.name} template`} fill sizes="(min-width: 1024px) 33vw, 50vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                        </div>
                      ) : (
                        <Placeholder label="Coming soon" />
                      )}
                      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs font-bold shadow-sm">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tierInfo.color }} />
                        {tierInfo.name}
                      </span>
                      {t.videoUrl && (
                        <button onClick={() => setVideo(t)} aria-label={`Watch ${t.name} video preview`}
                          className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-2xl">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/95 text-ink shadow-lg transition-transform group-hover:scale-110">
                            <Play className="ml-0.5 h-6 w-6 fill-current" />
                          </span>
                        </button>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3 px-1">
                      <h3 className={cn("font-bold", !available && "text-muted-foreground")}>{t.name}</h3>
                      {available ? (
                        <Button asChild size="sm" variant="dark"><Link href="/#contact">Choose</Link></Button>
                      ) : (
                        <span className="text-xs font-semibold text-muted-foreground">Coming soon</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {video?.videoUrl && <VideoModal src={video.videoUrl} poster={video.image} title={video.name} onClose={() => setVideo(null)} />}
      </AnimatePresence>
    </section>
  );
}
