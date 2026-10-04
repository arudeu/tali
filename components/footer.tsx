import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
        <Logo size={24} />
        <p>&copy; {new Date().getFullYear()} Tali. A project by Aldous Conde.</p>
      </div>
    </footer>
  );
}
