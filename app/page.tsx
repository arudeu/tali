import { Marquee } from "@/components/marquee";
import { StringDivider } from "@/components/string-divider";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pricing />
      <Projects />
      <About />
      <StringDivider />
      <Contact />
    </>
  );
}
