import PortfolioNavbar from "./portfolio/PortfolioNavbar";
import SiteLoader from "./portfolio/SiteLoader";
import HeroShowcase from "./portfolio/HeroShowcase";
import AboutJourney from "./portfolio/AboutJourney";
import SkillsStack from "./portfolio/SkillsStack";
import ProjectsShowcase from "./portfolio/ProjectsShowcase";
import ExperienceTimeline from "./portfolio/ExperienceTimeline";
import CertificationsVault from "./portfolio/CertificationsVault";
import ContactPanel from "./portfolio/ContactPanel";
import PortfolioFooter from "./portfolio/PortfolioFooter";

export default function Home() {
  return (
    <main className="grain" style={{ background: "#040608" }}>
      <SiteLoader />
      <PortfolioNavbar />
      <HeroShowcase />
      <AboutJourney />
      <SkillsStack />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <CertificationsVault />
      
      {/* Unified Container for Contact & Footer without image */}
      <div className="relative w-full overflow-hidden bg-[#040608]">
        <div className="relative z-10">
          <ContactPanel />
          <PortfolioFooter />
        </div>
      </div>
    </main>
  );
}



