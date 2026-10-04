import { cn } from "@/lib/utils";
import { BAR, STEM } from "@/lib/string";

/** Stand-in for a template or project screenshot. Replace with <Image /> later. */
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-sand", className)}>
      <svg aria-hidden viewBox="0 0 100 100" fill="none" className="absolute h-3/4 opacity-40">
        <path d={STEM} stroke="#F62440" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={BAR} stroke="#F62440" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="relative rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold">{label}</span>
    </div>
  );
}
