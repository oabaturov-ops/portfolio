import { LangProvider } from "@/components/portfolio/LanguageContext";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsSection from "@/components/portfolio/StatsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WorkflowSection from "@/components/portfolio/WorkflowSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <WorkflowSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </LangProvider>
  );
}