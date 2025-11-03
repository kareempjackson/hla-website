import Navbar from "../components/site/navbar";
import Hero from "../components/site/hero";
import WhyGreat from "../components/site/why-great";
import WhatWeDo from "../components/site/what-we-do";
import BlogPosts from "../components/site/blog-posts";
import HowCanWeHelp from "../components/site/how-can-we-help";
import OurProcess from "../components/site/our-process";
import Testimonial from "../components/site/testimonial";
import CTASection from "../components/site/cta-section";

export default function Home() {
  return (
    <div className="relative bg-bg">
      <Navbar />

      {/* Each section has sticky positioning to create the slide-over effect */}
      <div id="hero" className="sticky top-0">
        <Hero />
      </div>

      <div id="why-great" className="sticky top-0">
        <WhyGreat />
      </div>

      <div id="what-we-do" className="sticky top-0">
        <WhatWeDo />
      </div>

      <div id="blog-posts" className="sticky top-0">
        <BlogPosts />
      </div>

      <div id="how-can-we-help" className="sticky top-0">
        <HowCanWeHelp />
      </div>

      <div id="our-process" className="sticky top-0">
        <OurProcess />
      </div>

      <div id="testimonial" className="sticky top-0">
        <Testimonial />
      </div>

      <div id="cta-section" className="sticky top-0">
        <CTASection />
      </div>
    </div>
  );
}
