"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function VideoModal({ src, poster, title, onClose }: { src: string; poster?: string; title: string; onClose: () => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 md:p-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      role="dialog" aria-modal="true" aria-label={`${title} video preview`}>
      <motion.div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}>
        <button onClick={onClose} aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cream text-ink hover:bg-accent">
          <X className="h-5 w-5" />
        </button>
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <video src={src} poster={poster} controls autoPlay playsInline onLoadedData={() => setReady(true)} onError={() => setReady(true)}
            className="aspect-video w-full" />
          {!ready && <Skeleton mark className="pointer-events-none absolute inset-0" />}
        </div>
        <p className="mt-3 text-center text-sm font-semibold text-cream">{title}</p>
      </motion.div>
    </motion.div>
  );
}
