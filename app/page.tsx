import type { Metadata } from "next";
import Navbar from "../components/site/navbar";
import Hero from "../components/site/hero";
import WhyGreat from "../components/site/why-great";
import WhatWeDo from "../components/site/what-we-do";
import HowCanWeHelp from "../components/site/how-can-we-help";
import OurProcess from "../components/site/our-process";
import Testimonial from "../components/site/testimonial";
import CTASection from "../components/site/cta-section";
import { getHomePageData } from "@/sanity/lib/homePageQueries";

export const metadata: Metadata = {
  title: {
    absolute: "Higher Level Accounting | Controller Services for Growth Companies",
  },
  description:
    "Higher Level Accounting provides controller-level services and accrual bookkeeping for SaaS, agencies, and cannabis businesses. Get investor-ready financials.",
  keywords:
    "controller accounting services, accrual accounting, SaaS accounting, agency accounting, cannabis retail accounting, financial compliance, strategic accounting, investor-ready financials, bookkeeping services",
  authors: [{ name: "Higher Level Accounting" }],
  openGraph: {
    title: "Higher Level Accounting | Controller Services for Growth Companies",
    description:
      "Higher Level Accounting provides controller-level services and accrual bookkeeping for SaaS, agencies, and cannabis businesses. Get investor-ready financials.",
    url: "https://higherlevelaccounting.co",
    siteName: "Higher Level Accounting",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Higher Level Accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Higher Level Accounting | Controller Services for Growth Companies",
    description:
      "Higher Level Accounting provides controller-level services and accrual bookkeeping for SaaS, agencies, and cannabis businesses. Get investor-ready financials.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelaccounting.co",
  },
};

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <div className="relative bg-bg">
      <Navbar />

      {/* Each section has sticky positioning to create the slide-over effect */}
      <div id="hero" className="sticky top-0">
        <Hero data={homePageData?.heroSection} />
      </div>

      <div id="why-great" className="sticky top-0">
        <WhyGreat data={homePageData?.whyGreatSection} />
      </div>

      <div id="what-we-do" className="sticky top-0">
        <WhatWeDo data={homePageData?.whatWeDoSection} />
      </div>

      {homePageData?.showHowCanWeHelp !== false && (
        <div id="how-can-we-help" className="sticky top-0">
          <HowCanWeHelp data={homePageData?.howCanWeHelpSection} />
        </div>
      )}

      {homePageData?.showOurProcess !== false && (
        <div id="our-process" className="sticky top-0">
          <OurProcess />
        </div>
      )}

      {homePageData?.testimonialSection?.showTestimonials !== false && (
        <div id="testimonial" className="sticky top-0">
          <Testimonial data={homePageData?.testimonialSection} />
        </div>
      )}

      <div id="cta-section" className="sticky top-0">
        <CTASection data={homePageData?.ctaSection} />
      </div>
    </div>
  );
}
