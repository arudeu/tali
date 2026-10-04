"use client";
import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for next/image (with `fill`) that shows a shimmering
 * skeleton over the card until the picture has loaded, then fades it away.
 * The parent must be `relative` (same rule as `fill`).
 */
export function SkeletonImage({ onLoad, onError, ...props }: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [gone, setGone] = useState(false);

  // The image may already be cached/complete before React hydrates.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  // Unmount the skeleton after its fade-out so its shimmer stops running.
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => setGone(true), 600);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <>
      <Image
        {...props}
        ref={ref}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
      />
      {!gone && (
        <Skeleton
          mark
          className={cn("pointer-events-none absolute inset-0 z-10 transition-opacity duration-500", loaded && "opacity-0")}
        />
      )}
    </>
  );
}
