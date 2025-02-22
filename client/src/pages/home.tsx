import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { About } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <About />
      <ContactSection />
    </main>
  );
}