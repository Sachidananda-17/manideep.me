import { AboutMeSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { HomeSection } from "@/components/home";
import { Projects } from "@/components/projects";
import SkillsSession from "@/components/skills";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <HomeSection />
      <AboutMeSection />
      <SkillsSession />
      <ExperienceSection />
      <Projects />
      <ContactSection />
    </div>
  );
}
