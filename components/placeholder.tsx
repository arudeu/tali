import { cn } from "@/lib/utils";

/** Stand-in for a template or project screenshot. Replace with <Image /> later. */
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-sand", className)}>
      <svg aria-hidden viewBox="0 0 120 60" fill="none" className="absolute w-3/4 opacity-60">
        <circle cx="46" cy="30" r="22" stroke="#FAF3E1" strokeWidth="5" />
        <circle cx="74" cy="30" r="22" stroke="#FA8112" strokeOpacity="0.5" strokeWidth="5" />
      </svg>
      <span className="relative rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold">{label}</span>
    </div>
  );
}
