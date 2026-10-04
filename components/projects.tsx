"use client";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SkeletonImage } from "@/components/skeleton-image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const single = projects.length === 1;
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">Invitations built for real couples.</p>
        </Reveal>
        <div className={cn("mt-12 grid grid-cols-1 gap-10", !single && "sm:grid-cols-2")}>
          {projects.map((p, i) => {
            const body = (
              <>
                <div className="overflow-hidden rounded-2xl border border-ink/80 bg-card shadow-[5px_5px_0_0_#F62440] transition-shadow sm:shadow-[8px_8px_0_0_#F62440] sm:group-hover:shadow-[12px_12px_0_0_#F62440]">
                  <div className="flex min-w-0 items-center gap-1.5 border-b border-ink/80 bg-sand px-4 py-2.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cream" />
                    {p.href && <span className="ml-3 min-w-0 flex-1 truncate rounded-full bg-cream px-3 py-0.5 text-xs">{p.href.replace(/^https?:\/\//, "")}</span>}
                  </div>
                  <div className={cn("relative overflow-hidden bg-sand", single ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[16/10]")}>
                    {p.image && (
                      <SkeletonImage src={p.image} alt={`${p.name} wedding invitation website`} fill
                        sizes={single ? "(min-width: 1152px) 1100px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    )}
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 max-w-xl">
                    <h3 className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
                      {p.name}
                      {p.href && <ExternalLink className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{p.detail}</p>
                  </div>
                  {p.tags && (
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((t, k) => (
                        <motion.li key={t} className="rounded-full border border-ink/25 px-3 py-1 text-xs font-semibold"
                          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                          transition={{ delay: 0.3 + k * 0.1, type: "spring" }}>
                          {t}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            );
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.1} className="min-w-0">
                <article className="group">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="block"
                      aria-label={`${p.name}: open live site in a new tab`}>{body}</a>
                  ) : body}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
