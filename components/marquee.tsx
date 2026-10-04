const items = [
  "Save the date",
  "RSVP online",
  "Love story",
  "Photo gallery",
  "Countdown",
  "Music",
  "Map and directions",
  "Gift details",
  "Works on every phone",
];

function Ring() {
  return (
    <svg
      aria-hidden
      width="36"
      height="18"
      viewBox="0 0 120 60"
      fill="none"
      className="shrink-0"
    >
      <circle cx="46" cy="30" r="22" stroke="#222222" strokeWidth="8" />
      <circle cx="74" cy="30" r="22" stroke="#222222" strokeWidth="8" />
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
        <div className="flex gap-8" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  );
}
