"use client";

import { NavbarDemo } from "./NavbarDemo";
import ClientOnly from "./ClientOnly";

import { lazy } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const FeaturesSection = lazy(() => import('./FeaturesSection'));
const ERPAgentsSection = lazy(() => import('./ErpAgentSection'));
const ContractFlowSection = lazy(() => import('./ContractflowSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const FooterSection = lazy(() => import('./FooterSection'));


export default function Main() {
  return (
    <>
      <ClientOnly>
        <NavbarDemo />
      </ClientOnly>

      <HeroSection/>
      <FeaturesSection />

      <div id="modules">
        <ERPAgentsSection />
      </div>
      <div id="contractflow">
        <ContractFlowSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}
