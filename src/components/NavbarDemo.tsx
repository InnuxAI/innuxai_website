"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "ERP Agents", link: "#modules" },
    { name: "App Features", link: "#contractflow" },
    { name: "Contact", link: "#contact" },
  ];

  const { theme, setTheme, systemTheme } = useTheme();

  // ✅ All hooks should be at the top level
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ This is safe now — all hooks already ran
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;



  return (
    <div className="fixed top-2 left-0 right-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton
              onClick={handleToggle}
              variant="dark"
            >
              {currentTheme === "dark" ? <Sun /> : <Moon />}
            </NavbarButton> */}
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          </div>
        </NavBody>

      </Navbar>
      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative w-full p-4 text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            {/* <div className="flex gap-4 w-full">
              <NavbarButton
                onClick={() => {
                  handleToggle();
                  // Keep menu open or close it? Usually close it or let user see change.
                  // Let's keep it open so they can toggle back if they want, or close it.
                  // User request implies it wasn't working.
                }}
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-neutral-200 dark:border-neutral-800"
              >
                {currentTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{currentTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </NavbarButton>
            </div> */}

            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full h-12 text-base rounded-xl"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </div>
  );
}
