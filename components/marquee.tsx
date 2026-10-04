const items = ["Save the date", "RSVP online", "Love story", "Photo gallery", "Countdown", "Music", "Map and directions", "Gift details", "Works on every phone"];

function Ring() {
  return (
    <svg aria-hidden width="40" height="18" viewBox="0 0 40 18" fill="none" className="shrink-0">
      <path d="M2,9 C8,1 13,17 20,9 C27,1 32,17 38,9" stroke="#3A0A12" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Marquee() {
  const row = items.map((t) => (
    <span key={t} className="flex items-center gap-8 whitespace-nowrap">
      {t}
      <Ring />
    </span>
  ));
  return (
    <div className="marquee overflow-hidden border-y border-ink bg-accent py-4 text-lg font-extrabold">
      <div className="marquee-track flex w-max gap-8">
        <div className="flex gap-8">{row}</div>
        <div className="flex gap-8" aria-hidden>{row}</div>
      </div>
    </div>
  );
}
