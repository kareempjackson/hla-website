"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(pathname === "/" ? true : true); // Start with dark for both pages

  useEffect(() => {
    const handleScroll = () => {
      // Get all section wrappers - Home page
      const hero = document.getElementById("hero");
      const whyGreat = document.getElementById("why-great");
      const whatWeDo = document.getElementById("what-we-do");
      const blogPosts = document.getElementById("blog-posts");
      const howCanWeHelp = document.getElementById("how-can-we-help");
      const ourProcess = document.getElementById("our-process");
      const testimonial = document.getElementById("testimonial");
      const ctaSection = document.getElementById("cta-section");

      // Get all section wrappers - About page
      const aboutHero = document.getElementById("about-hero");
      const aboutMission = document.getElementById("about-mission");
      const aboutWhoWeServe = document.getElementById("about-who-we-serve");
      const aboutApproach = document.getElementById("about-approach");
      const aboutTeam = document.getElementById("about-team");
      const aboutTestimonials = document.getElementById("about-testimonials");
      const aboutCta = document.getElementById("about-cta");

      // Check which section is currently visible at the top
      // Since sections are sticky, we check if they're stuck at top-0
      const checkSection = (element: HTMLElement | null, isDarkBg: boolean) => {
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        // If section is at or near the top (within 120px), it's the visible one
        if (rect.top <= 120 && rect.bottom > 120) {
          return isDarkBg;
        }
        return null;
      };

      // Check sections in reverse order (bottom to top) since they stack
      let newIsDark: boolean | null = null;

      // Check Home page sections
      newIsDark = checkSection(ctaSection, true);
      if (newIsDark === null) newIsDark = checkSection(testimonial, false);
      if (newIsDark === null) newIsDark = checkSection(ourProcess, true);
      if (newIsDark === null) newIsDark = checkSection(howCanWeHelp, false);
      if (newIsDark === null) newIsDark = checkSection(blogPosts, false);
      if (newIsDark === null) newIsDark = checkSection(whatWeDo, false);
      if (newIsDark === null) newIsDark = checkSection(whyGreat, false);
      if (newIsDark === null) newIsDark = checkSection(hero, true);

      // Check About page sections
      if (newIsDark === null) newIsDark = checkSection(aboutCta, true);
      if (newIsDark === null)
        newIsDark = checkSection(aboutTestimonials, false);
      if (newIsDark === null) newIsDark = checkSection(aboutTeam, false);
      if (newIsDark === null) newIsDark = checkSection(aboutApproach, false);
      if (newIsDark === null) newIsDark = checkSection(aboutWhoWeServe, true);
      if (newIsDark === null) newIsDark = checkSection(aboutMission, false);
      if (newIsDark === null) newIsDark = checkSection(aboutHero, true);

      if (newIsDark !== null) {
        setIsDark(newIsDark);
      }
    };

    // Run immediately and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also run after short delays to ensure DOM is ready
    const timer1 = setTimeout(handleScroll, 100);
    const timer2 = setTimeout(handleScroll, 300);
    const timer3 = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  // Color classes based on background
  // For dark green #00433E: using a more precise filter
  const logoFilter = isDark
    ? "brightness(0) saturate(100%) invert(95%) sepia(13%) saturate(573%) hue-rotate(329deg) brightness(103%) contrast(95%)" // cream on dark
    : "brightness(0) saturate(100%) invert(15%) sepia(20%) saturate(1200%) hue-rotate(130deg) brightness(90%) contrast(95%)"; // dark green #00433E on light

  const navBg = isDark ? "bg-[#0000003D]" : "bg-white/40";
  const navTextColor = isDark
    ? "text-white/90 hover:text-white"
    : "text-black/70 hover:text-black";
  const activeTabBg = isDark ? "bg-white text-black" : "bg-black text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.svg"
            width={130}
            height={28}
            alt="Higher Level Accounting"
            style={{ filter: logoFilter }}
            className="transition-all duration-300"
          />
        </Link>

        {/* Center: Nav links - single capsule background */}
        <div className="hidden md:flex items-center justify-center flex-nowrap">
          <div
            className={`flex items-center gap-4 rounded-pill h-10 pl-0 pr-2.5 overflow-hidden transition-colors duration-300 ${navBg} backdrop-blur-sm`}
          >
            <Link
              href="/"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                pathname === "/" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                pathname === "/about"
                  ? `${activeTabBg} shadow-sm`
                  : navTextColor
              }`}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center gap-2 transition-colors duration-300 ${navTextColor}`}
            >
              <span>Services</span>
            </Link>
            <Link
              href="#insights"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
            >
              Insights
            </Link>
            <Link
              href="#industries"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
            >
              Industries
            </Link>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0">
          <Button
            variant="soft"
            className="h-10 px-5 text-sm font-light rounded-pill border-0 focus-visible:ring-0 transition-colors duration-300"
          >
            Client Portal
          </Button>
        </div>
      </div>
    </nav>
  );
}
