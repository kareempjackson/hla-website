"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true); // Start with dark (hero is dark)

  useEffect(() => {
    const handleScroll = () => {
      // Get all section wrappers
      const hero = document.getElementById("hero");
      const whyGreat = document.getElementById("why-great");
      const whatWeDo = document.getElementById("what-we-do");
      const blogPosts = document.getElementById("blog-posts");
      const howCanWeHelp = document.getElementById("how-can-we-help");
      const ourProcess = document.getElementById("our-process");
      const testimonial = document.getElementById("testimonial");
      const ctaSection = document.getElementById("cta-section");

      // Check which section is currently visible at the top
      // Since sections are sticky, we check if they're stuck at top-0
      const checkSection = (element: HTMLElement | null, isDarkBg: boolean) => {
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        // If section is at or near the top (within 100px), it's the visible one
        if (rect.top <= 100 && rect.bottom > 100) {
          return isDarkBg;
        }
        return null;
      };

      // Check sections in reverse order (bottom to top) since they stack
      let newIsDark: boolean | null = null;

      newIsDark = checkSection(ctaSection, true);
      if (newIsDark === null) newIsDark = checkSection(testimonial, false);
      if (newIsDark === null) newIsDark = checkSection(ourProcess, true);
      if (newIsDark === null) newIsDark = checkSection(howCanWeHelp, false);
      if (newIsDark === null) newIsDark = checkSection(blogPosts, false);
      if (newIsDark === null) newIsDark = checkSection(whatWeDo, false);
      if (newIsDark === null) newIsDark = checkSection(whyGreat, false);
      if (newIsDark === null) newIsDark = checkSection(hero, true);

      if (newIsDark !== null) {
        setIsDark(newIsDark);
      }
    };

    // Run immediately and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also run after a short delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Color classes based on background
  const logoFilter = isDark
    ? "brightness(0) saturate(100%) invert(95%) sepia(13%) saturate(573%) hue-rotate(329deg) brightness(103%) contrast(95%)" // cream on dark
    : "invert(14%) sepia(28%) saturate(1518%) hue-rotate(130deg) brightness(92%) contrast(97%)"; // dark green #00433E on light

  const navBg = isDark ? "bg-[#0000003D]" : "bg-white/40";
  const navTextColor = isDark
    ? "text-white/90 hover:text-white"
    : "text-black/70 hover:text-black";
  const activeTabBg = isDark ? "bg-white text-black" : "bg-black text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.svg"
            width={150}
            height={32}
            alt="Higher Level Accounting"
            style={{ filter: logoFilter }}
            className="transition-all duration-300"
          />
        </Link>

        {/* Center: Nav links - single capsule background */}
        <div className="hidden md:flex items-center justify-center flex-nowrap">
          <div
            className={`flex items-center gap-5 rounded-pill h-12 pl-0 pr-3 overflow-hidden transition-colors duration-300 ${navBg} backdrop-blur-sm`}
          >
            <Link
              href="/"
              aria-current="page"
              className={`rounded-pill shadow-sm h-full px-7 text-base md:text-lg font-medium whitespace-nowrap flex items-center transition-colors duration-300 ${activeTabBg}`}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`rounded-pill h-full px-7 text-base md:text-lg whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`rounded-pill h-full px-7 text-base md:text-lg whitespace-nowrap flex items-center gap-2 transition-colors duration-300 ${navTextColor}`}
            >
              <span>Services</span>
            </Link>
            <Link
              href="#insights"
              className={`rounded-pill h-full px-7 text-base md:text-lg whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
            >
              Insights
            </Link>
            <Link
              href="#industries"
              className={`rounded-pill h-full px-7 text-base md:text-lg whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
            >
              Industries
            </Link>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0">
          <Button
            variant="soft"
            className="h-12 px-6 rounded-pill border-0 focus-visible:ring-0 transition-colors duration-300"
          >
            Client Portal
          </Button>
        </div>
      </div>
    </nav>
  );
}
