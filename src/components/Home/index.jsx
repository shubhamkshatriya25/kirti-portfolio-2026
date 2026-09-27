import { About } from "../About";
import { Contact } from "../Contact";
import { CveSection } from "../CVEs/HomeSection";
import { Hero } from "../Hero";
import { HonoursSection } from "../Honours/HomeSection";
import { Skills } from "../Skill";

export function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <CveSection></CveSection>
      <HonoursSection></HonoursSection>
      <Contact></Contact>
    </>
  );
}