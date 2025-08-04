import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ServicesSection } from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
// import { DebugSectionTracker } from "../components/DebugSectionTracker";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
            {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Debug Component (Development Only) - Temporarily disabled */}
      {/* <DebugSectionTracker /> */}
    </div>
  );
};
