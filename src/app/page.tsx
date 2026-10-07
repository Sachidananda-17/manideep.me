import { AboutMeSection } from "@/components/about";
import { AchievementsSection } from "@/components/achievements";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { HomeSection } from "@/components/home";
import { Footer } from "@/components/footer";
import { FloatingNavbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { TestimonialsSection } from "@/components/testimonials";
import SkillsSession from "@/components/skills";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNavbar />
      <HomeSection />
      <AboutMeSection />
      <AchievementsSection />
      <ExperienceSection />
      <Projects />
      <SkillsSession />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
