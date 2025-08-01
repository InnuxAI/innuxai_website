"use client";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ERPAgentsSection from "./ErpAgentSection";
import { NavbarDemo } from "./NavbarDemo";
import ClientOnly from "./ClientOnly";
import { FooterSection } from "./FooterSection";
import { ContactSection } from "./ContactSection";
import FeaturesSection2 from "./FeaturesSection2";

export default function InnuxAIBento() {
  return (
    <>
      <ClientOnly>
        <NavbarDemo />
      </ClientOnly>

      <HeroSection />
      <FeaturesSection />

      <div id="modules">
        <ERPAgentsSection />
      </div>
      <FeaturesSection2 />
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}
