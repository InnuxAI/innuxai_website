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
import { Moon, Sun } from "lucide-react";

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

  const handleToggle = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    console.log(`[ThemeToggle] clicked: switching from ${currentTheme} → ${nextTheme}`);
    setTheme(nextTheme);
    setTimeout(() => {
      console.log(`[ThemeToggle] document.documentElement.classList =`, document.documentElement.classList.value);
    }, 100);
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              onClick={handleToggle}
              variant="dark"
            >
              {currentTheme === "dark" ? <Sun /> : <Moon />}
            </NavbarButton>
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          </div>
        </NavBody>

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
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
              >
                {currentTheme === "dark" ? <Moon /> : <Sun />}
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
