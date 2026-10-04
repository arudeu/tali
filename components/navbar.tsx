"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/templates", label: "Templates" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Tali home"><Logo size={28} /></Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
          ))}
          <Button asChild size="sm"><Link href="/#contact">Contact</Link></Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-4 text-sm font-semibold md:hidden">
          {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
