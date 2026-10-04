"use client";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const EMAIL = "devaldous@gmail.com"; // replace with your real email

const field =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Tali inquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us your wedding date and the tier you like. We reply within a
            day.
          </p>
          <p className="mt-8 flex items-center gap-2 break-all font-semibold">
            <Mail className="h-5 w-5 text-accent" />
            {EMAIL}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className={field}
              aria-label="Your name"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className={field}
              aria-label="Email address"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Wedding date, tier, and any ideas"
              className={field}
              aria-label="Message"
            />
            <Button type="submit" size="lg">
              Send message
            </Button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
