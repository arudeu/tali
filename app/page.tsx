import { Marquee } from "@/components/marquee";
import { InfinityDivider } from "@/components/infinity-divider";
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
      <InfinityDivider />
      <Contact />
    </>
  );
}
