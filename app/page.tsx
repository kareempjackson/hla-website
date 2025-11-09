import type { Metadata } from "next";
import Navbar from "../components/site/navbar";
import Hero from "../components/site/hero";
import WhyGreat from "../components/site/why-great";
import WhatWeDo from "../components/site/what-we-do";
import BlogPosts from "../components/site/blog-posts";
import HowCanWeHelp from "../components/site/how-can-we-help";
import OurProcess from "../components/site/our-process";
import Testimonial from "../components/site/testimonial";
import CTASection from "../components/site/cta-section";
import { getHomePageData } from "@/sanity/lib/homePageQueries";

export const metadata: Metadata = {
  title:
    "Higher Level Accounting | Controller-Level Accounting Services for Growth-Minded Businesses",
  description:
    "Strategic, controller-level accounting services for SaaS companies, marketing agencies, and regulated retailers. Get accurate financials, actionable insights, and rock-solid compliance to scale confidently.",
  keywords:
    "controller accounting services, accrual accounting, SaaS accounting, agency accounting, cannabis retail accounting, financial compliance, strategic accounting, investor-ready financials, bookkeeping services",
  authors: [{ name: "Higher Level Accounting" }],
  openGraph: {
    title: "Higher Level Accounting | Controller-Level Accounting Services",
    description:
      "Strategic accounting services for growth-minded businesses. Accurate financials, actionable insights, and rock-solid compliance.",
    url: "https://higherlevelacct.com",
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
    title: "Higher Level Accounting | Controller-Level Accounting Services",
    description:
      "Strategic accounting services for growth-minded businesses. Accurate financials, actionable insights, and rock-solid compliance.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelacct.com",
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
        <WhyGreat />
      </div>

      <div id="what-we-do" className="sticky top-0">
        <WhatWeDo />
      </div>

      {homePageData?.showBlogPosts !== false && (
        <div id="blog-posts" className="sticky top-0">
          <BlogPosts />
        </div>
      )}

      {homePageData?.showHowCanWeHelp !== false && (
        <div id="how-can-we-help" className="sticky top-0">
          <HowCanWeHelp />
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
