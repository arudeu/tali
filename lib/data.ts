export const CURRENCY = "₱"; // change to "$" if you price in USD

export const tiers = [
  { name: "Tier 1", title: "Basic", color: "#5E9C76", price: "1,500", note: "Ready-made basic templates",
    features: ["Pick from basic templates", "Names, date and venue", "RSVP form", "Mobile-friendly page"] },
  { name: "Tier 2", title: "Premium", color: "#FA8112", price: "3,000", note: "Premium templates with extras", featured: true,
    features: ["Everything in Tier 1", "Premium animated templates", "Photo gallery and love story", "Music and countdown"] },
  { name: "Tier 3", title: "Customized", color: "#8A3F78", price: "7,000+", note: "Designed around your wedding",
    features: ["Everything in Tier 2", "Fully custom design", "Custom features and domain", "Direct support from the designer"] },
];

import templatesJson from "@/data/templates.json";
import projectsJson from "@/data/projects.json";

/** Edit data/templates.json to add, remove or update templates. tier: 1, 2 or 3. */
export type Template = { slug: string; name: string; tier: 1 | 2 | 3; image?: string; videoUrl?: string; previewUrl?: string };
/** Edit data/projects.json to add, remove or update projects. */
export type Project = { name: string; detail: string; image?: string; href?: string; tags?: string[] };

export const templates = templatesJson as Template[];
export const projects = projectsJson as Project[];
