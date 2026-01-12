"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ sticky = false }: { sticky?: boolean }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHeaderBg, setMobileHeaderBg] = useState<string>("bg-bg");

  // Avoid hydration mismatches by not relying on pathname during the initial render
  const path = mounted ? pathname : null;

  // Compute initial dark state based on pathname and sticky prop
  const getInitialDarkState = () => {
    if (path === "/services" && sticky) return false;
    if (path === "/insights" && sticky) return true;
    if (path === "/pricing" && sticky) return true;
    return true;
  };

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scroll while mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  // Update state when pathname or sticky changes
  useEffect(() => {
    if (!mounted) return;
    setIsDark(getInitialDarkState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, pathname, sticky]);

  useEffect(() => {
    if (!mounted) return;
    // Skip scroll-based color changes on specific pages when sticky
    if (
      sticky &&
      (path === "/services" || path === "/insights" || path === "/pricing") &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      return;
    }

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

      // Get all section wrappers - Services page
      const servicesHero = document.getElementById("services-hero");
      const servicesBookkeeping = document.getElementById(
        "services-bookkeeping"
      );
      const servicesController = document.getElementById("services-controller");
      const servicesCompliance = document.getElementById("services-compliance");
      const servicesAddons = document.getElementById("services-addons");
      const servicesSpecialized = document.getElementById(
        "services-specialized"
      );
      const servicesCta = document.getElementById("services-cta");

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
        newIsDark = checkSection(aboutTestimonials, false); // cream - light
      if (newIsDark === null) newIsDark = checkSection(aboutTeam, false); // white - light
      if (newIsDark === null) newIsDark = checkSection(aboutApproach, false); // cream - light
      if (newIsDark === null) newIsDark = checkSection(aboutWhoWeServe, true);
      if (newIsDark === null) newIsDark = checkSection(aboutMission, false); // cream - light
      if (newIsDark === null) newIsDark = checkSection(aboutHero, true);

      // Check Services page sections
      if (newIsDark === null) newIsDark = checkSection(servicesCta, false); // cream
      if (newIsDark === null)
        newIsDark = checkSection(servicesSpecialized, true); // black
      if (newIsDark === null) newIsDark = checkSection(servicesAddons, false); // cream
      if (newIsDark === null)
        newIsDark = checkSection(servicesCompliance, true); // dark green
      if (newIsDark === null)
        newIsDark = checkSection(servicesController, false); // cream
      if (newIsDark === null)
        newIsDark = checkSection(servicesBookkeeping, true); // dark green
      if (newIsDark === null) newIsDark = checkSection(servicesHero, false); // cream

      if (newIsDark !== null) {
        setIsDark(newIsDark);
      }

      // Mobile-only: make the header background match the section ("card") currently under it.
      // Desktop behavior remains unchanged.
      if (window.matchMedia("(max-width: 767px)").matches) {
        const navEl = document.querySelector("nav");
        const headerHeight = Math.ceil(
          navEl?.getBoundingClientRect().height ?? 72
        );
        const threshold = headerHeight + 1;

        const checkBg = (element: HTMLElement | null, bg: string) => {
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) return bg;
          return null;
        };

        let nextBg: string | null = null;

        if (path === "/") {
          nextBg = checkBg(hero, "bg-bg");
          if (nextBg === null) nextBg = checkBg(whyGreat, "bg-cream");
          if (nextBg === null) nextBg = checkBg(whatWeDo, "bg-white");
          if (nextBg === null) nextBg = checkBg(blogPosts, "bg-cream");
          if (nextBg === null) nextBg = checkBg(howCanWeHelp, "bg-white");
          if (nextBg === null) nextBg = checkBg(ourProcess, "bg-brand-deep");
          if (nextBg === null) nextBg = checkBg(testimonial, "bg-cream-200");
          if (nextBg === null) nextBg = checkBg(ctaSection, "bg-bg");
        } else if (path === "/about") {
          nextBg = checkBg(aboutHero, "bg-bg");
          if (nextBg === null) nextBg = checkBg(aboutMission, "bg-cream");
          if (nextBg === null) nextBg = checkBg(aboutWhoWeServe, "bg-black");
          if (nextBg === null) nextBg = checkBg(aboutApproach, "bg-cream");
          if (nextBg === null) nextBg = checkBg(aboutTeam, "bg-white");
          if (nextBg === null) nextBg = checkBg(aboutTestimonials, "bg-cream");
          if (nextBg === null) nextBg = checkBg(aboutCta, "bg-bg");
        } else if (path === "/services") {
          nextBg = checkBg(servicesHero, "bg-cream");
          if (nextBg === null) nextBg = checkBg(servicesBookkeeping, "bg-bg");
          if (nextBg === null) nextBg = checkBg(servicesController, "bg-cream");
          if (nextBg === null) nextBg = checkBg(servicesCompliance, "bg-bg");
          if (nextBg === null) nextBg = checkBg(servicesAddons, "bg-cream");
          if (nextBg === null)
            nextBg = checkBg(servicesSpecialized, "bg-black");
          if (nextBg === null) nextBg = checkBg(servicesCta, "bg-cream");
        } else if (path === "/contact") {
          nextBg = "bg-white";
        } else if (typeof path === "string" && path.startsWith("/insight")) {
          nextBg = "bg-white";
        }

        if (nextBg) {
          setMobileHeaderBg((prev) => (prev === nextBg ? prev : nextBg));
        }
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
  }, [mounted, path, sticky]);

  // Color classes based on background
  // For dark green #00433E: using a more precise filter
  const isServicesPage = path === "/services";
  const isAboutPage = path === "/about";
  const isHomePage = path === "/";
  const isInsightsPage = path === "/insights";
  const isPricingPage = path === "/pricing";

  // On about page or home page cream/light sections, use special styling
  const isAboutCreamSection = isAboutPage && !isDark;
  const isHomeLightSection = isHomePage && !isDark;

  const logoFilter =
    isDark || (sticky && !isServicesPage)
      ? "brightness(0) saturate(100%) invert(95%) sepia(13%) saturate(573%) hue-rotate(329deg) brightness(103%) contrast(95%)" // cream on dark
      : "brightness(0) saturate(100%) invert(15%) sepia(20%) saturate(1200%) hue-rotate(130deg) brightness(90%) contrast(95%)"; // dark green #00433E on light

  const navBg =
    (isDark && isAboutPage) ||
    (isDark && isHomePage) ||
    (isDark && isInsightsPage && sticky) ||
    (isDark && isPricingPage && sticky)
      ? "bg-cream"
      : isDark
        ? "bg-[#0000003D]"
        : isServicesPage && sticky
          ? "bg-bg"
          : isAboutCreamSection || isHomeLightSection
            ? "bg-bg"
            : "bg-white/40";
  const navTextColor =
    (isDark && isAboutPage) ||
    (isDark && isHomePage) ||
    (isDark && isInsightsPage && sticky) ||
    (isDark && isPricingPage && sticky)
      ? "text-bg hover:text-bg/80"
      : isDark || sticky || isAboutCreamSection || isHomeLightSection
        ? "text-white/90 hover:text-white"
        : "text-black/70 hover:text-black";
  const activeTabBg =
    (isDark && isAboutPage) ||
    (isDark && isHomePage) ||
    (isDark && isInsightsPage && sticky) ||
    (isDark && isPricingPage && sticky)
      ? "bg-bg text-white"
      : isDark || sticky || isAboutCreamSection || isHomeLightSection
        ? "bg-white text-black"
        : "bg-black text-white";

  // Client Portal button styling
  const clientPortalClasses =
    isAboutCreamSection || isHomeLightSection
      ? "h-10 px-5 text-sm font-light rounded-pill border-0 focus-visible:ring-0 transition-colors duration-300 bg-bg text-white hover:bg-bg/90"
      : "h-10 px-5 text-sm font-light rounded-pill border-0 focus-visible:ring-0 transition-colors duration-300";

  // Determine sticky background color based on page
  const desktopStickyBgColor =
    path === "/services" ? "md:bg-cream" : "md:bg-bg";

  // Mobile should be sticky (non-overlapping). Desktop keeps existing behavior.
  const desktopPositionClass = sticky
    ? `md:sticky ${desktopStickyBgColor}`
    : "md:fixed md:bg-transparent";

  return (
    <nav
      className={`${desktopPositionClass} sticky top-0 left-0 right-0 z-100 transition-colors duration-300 ${
        // Solid, section-matching background on mobile
        mobileHeaderBg
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.svg"
            width={110}
            height={24}
            alt="Higher Level Accounting"
            style={{ filter: logoFilter }}
            className="transition-all duration-300"
          />
        </Link>

        {/* Center: Nav links - single capsule background */}
        <div className="hidden md:flex items-center justify-center flex-nowrap">
          <div
            className={`flex items-center gap-4 rounded-pill h-10 pl-3 pr-2.5 overflow-hidden transition-colors duration-300 ${navBg} backdrop-blur-sm`}
          >
            <Link
              href="/"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                path === "/" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                path === "/about" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center gap-2 transition-colors duration-300 ${
                path === "/services" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              <span>Services</span>
            </Link>
            <Link
              href="/insights"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                path === "/insights" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              Insights
            </Link>
            <Link
              href="/pricing"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                path === "/pricing" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              Pricing
            </Link>
            {isHomePage && (
              <Link
                href="/#how-can-we-help"
                onClick={(e) => {
                  // If we're already on home page, prevent default and smooth scroll
                  if (path === "/") {
                    e.preventDefault();
                    const section = document.getElementById("how-can-we-help");
                    if (section) {
                      const offset = section.offsetTop;
                      window.scrollTo({
                        top: offset,
                        behavior: "smooth",
                      });
                    }
                  }
                  // Otherwise, let the link navigate normally to /#how-can-we-help
                }}
                className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${navTextColor}`}
              >
                Industries
              </Link>
            )}
            <Link
              href="/contact"
              className={`rounded-pill h-full px-5 text-sm font-light whitespace-nowrap flex items-center transition-colors duration-300 ${
                path === "/contact" ? `${activeTabBg} shadow-sm` : navTextColor
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0 flex items-center gap-2">
          <div className="hidden md:block">
            <Button
              variant="soft"
              className={clientPortalClasses}
              type="button"
              onClick={() => {
                window.location.assign(
                  "https://clients.higherlevelaccounting.co/client-login"
                );
              }}
            >
              Client Portal
            </Button>
          </div>

          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-pill transition-colors duration-300 ${navBg} backdrop-blur-sm ${navTextColor}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (right-side drawer) */}
      <div
        className={`md:hidden fixed inset-0 z-200 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-[min(88vw,380px)] bg-bg/95 backdrop-blur-xl border-l border-white/10 shadow-[0_12px_50px_rgba(0,0,0,0.45)] transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col min-h-0">
            <div className="px-6 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-4 flex items-center justify-between">
              <div className="text-cream/70 text-xs tracking-[0.2em] uppercase">
                Menu
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center h-10 w-10 rounded-pill border border-white/10 bg-white/5 text-cream/90 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-6 flex-1 min-h-0 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
              <div className="flex flex-col">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/about"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/services"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/insights"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  Insights
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/pricing"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  Pricing
                </Link>

                {isHomePage && (
                  <Link
                    href="/#how-can-we-help"
                    onClick={(e) => {
                      setMobileOpen(false);
                      // If we're already on home page, prevent default and smooth scroll
                      if (path === "/") {
                        e.preventDefault();
                        const section =
                          document.getElementById("how-can-we-help");
                        if (section) {
                          const offset = section.offsetTop;
                          window.scrollTo({
                            top: offset,
                            behavior: "smooth",
                          });
                        }
                      }
                      // Otherwise, let the link navigate normally to /#how-can-we-help
                    }}
                    className="py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors text-cream/70 hover:text-cream"
                  >
                    Industries
                  </Link>
                )}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[15px] font-light tracking-wide border-b border-white/10 transition-colors ${
                    path === "/contact"
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </nav>

            <div className="shrink-0 px-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-6">
              <button
                type="button"
                className="w-full h-12 rounded-pill bg-cream text-bg text-sm font-medium tracking-wide transition-colors hover:bg-cream/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/50"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.assign(
                    "https://clients.higherlevelaccounting.co/client-login"
                  );
                }}
              >
                Client Portal
              </button>
            </div>
          </div>
        </aside>
      </div>
    </nav>
  );
}
