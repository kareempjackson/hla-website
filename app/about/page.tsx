"use client";

import Image from "next/image";
import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";

export default function AboutPage() {
  return (
    <div className="relative bg-bg">
      <Navbar />

      {/* Hero Section */}
      <div id="about-hero" className="sticky top-0 z-10">
        <section className="relative min-h-screen flex flex-col pt-20 bg-bg">
          {/* Top Section - About Us Text and Trusted Clients */}
          <div className="mx-auto max-w-6xl w-full px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">
              {/* About Us Content */}
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight text-cream">
                  Why Higher Level Exists
                </h1>

                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                  We exist because financial guesswork doesn't scale. Too many
                  firms stop at 'good enough'. We go a step further to uncover
                  the gaps so that you have financial clarity you can trust to
                  make the right moves.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                  <Button
                    size="md"
                    className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                  >
                    Contact US
                  </Button>
                  <Button
                    size="md"
                    variant="ghost"
                    className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/80 h-10 px-7 text-xs font-light tracking-wide border border-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Customer Service Image */}
          <div className="mx-auto max-w-6xl w-full px-6 pb-12">
            <div className="relative overflow-hidden rounded-sm bg-surface/30 min-h-[400px] flex items-center justify-center">
              {/* Placeholder for customer service image - replace with actual image when available */}
              <div className="w-full h-[400px] bg-linear-to-br from-surface to-bg flex items-center justify-center">
                <p className="text-white/50 text-sm font-light">
                  Customer Service Image Placeholder
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission & Vision Section */}
      <div id="about-mission" className="sticky top-0 z-20">
        <section className="relative bg-cream py-24 min-h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[550px] lg:h-[650px] flex items-center justify-center">
                  {/* Placeholder for working professional image */}
                  <p className="text-gray-500 text-sm font-light">
                    Professional Working Image
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col space-y-5 justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight text-black whitespace-nowrap">
                  About Higher Level Accounting
                </h2>

                <div className="space-y-3.5">
                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    Higher Level Accounting provides strategic, controller-level
                    accounting services for growth-minded businesses. Our focus
                    is on delivering accurate, accrual-based financials,
                    actionable insights, and rock-solid compliance, so you can
                    scale confidently and never wonder if your numbers are
                    telling the truth.
                  </p>

                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    Over the years, we've worked closely with founders,
                    operators, and leadership teams across our three core
                    verticals and beyond. In every case, the business leaders we
                    meet are experts in their craft. However, without the right
                    financial processes, even great companies risk fines, lost
                    licenses, missed funding rounds, or costly missteps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Who We Serve Section */}
      <div id="about-who-we-serve" className="sticky top-0 z-30">
        <section className="relative bg-black py-24 min-h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Image Grid */}
              <div className="relative">
                <div className="relative grid grid-cols-12 gap-3">
                  {/* Top Left - Team High Five (larger, spans more) */}
                  <div className="col-span-7 relative overflow-hidden rounded-sm bg-gray-700 h-72">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <p className="text-gray-400 text-xs font-light">
                        Team Image
                      </p>
                    </div>
                  </div>

                  {/* Top Right - Person at Computer (smaller, positioned higher) */}
                  <div className="col-span-5 relative overflow-hidden rounded-sm bg-gray-700 h-64 mt-6">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <p className="text-gray-400 text-xs font-light">
                        Computer Image
                      </p>
                    </div>
                  </div>

                  {/* Bottom - Person Working at Desk (large, overlaps) */}
                  <div className="col-span-8 col-start-3 relative overflow-hidden rounded-sm bg-gray-700 h-80 -mt-10">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <p className="text-gray-400 text-xs font-light">
                        Desk Work Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
                  Who We Serve
                </h2>

                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light max-w-lg">
                  We work exclusively with businesses that understand accounting
                  isn't just compliance — it's a growth tool. Our clients:
                </p>

                <div className="space-y-3 max-w-lg">
                  <div>
                    <h3 className="text-sm md:text-base text-white font-light mb-1.5">
                      SaaS / Subscription-Based Companies:
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                      Need investor-ready financials, real runway visibility,
                      and clean MRR/ARR reporting.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base text-white font-light mb-1.5">
                      Marketing & Creative Agencies:
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                      Need project-by-project profitability tracking and cash
                      flow clarity to scale without nasty surprises.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base text-white font-light mb-1.5">
                      Retailers in Highly Regulated Industries:
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                      Need compliance handled right, location-level
                      profitability tracking, and peace of mind that they won't
                      get blindsided by a regulatory misstep.
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light max-w-lg">
                  We don't do bill pay, payroll, or collections. Our work lives
                  at the controller-level, where decisions get made and growth
                  happens.
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <Button
                    size="md"
                    className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                  >
                    Contact US
                  </Button>
                  <Button
                    size="md"
                    variant="ghost"
                    className="rounded-pill focus-visible:ring-0 bg-white text-black hover:bg-white/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Approach Section */}
      <div id="about-approach" className="sticky top-0 z-40">
        <section className="relative bg-cream py-24 min-h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xs font-light tracking-wider uppercase text-brand-deep">
                    Our Methodology
                  </p>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
                    Our Approach
                  </h2>

                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    We deliver clear, actionable financial guidance so you can
                    stay compliant, maintain financial stability, and grow with
                    confidence. That means:
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button
                      size="md"
                      className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                    >
                      Contact US
                    </Button>
                    <Button
                      size="md"
                      className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Structured financial processes that make decision-making
                      easier.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Strong internal controls to safeguard assets and prevent
                      costly errors.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Technology-driven solutions to streamline reporting and
                      keep you audit-ready.
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-3">
                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    We also tap into a trusted network of tax and audit
                    professionals to help you navigate evolving regulations,
                    industry-specific accounting requirements, and financial
                    best practices.
                  </p>

                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    Whether it's optimizing cash flow, strengthening financial
                    controls, or ensuring your reporting stands up to investor
                    or regulatory scrutiny, our goal is simple:
                  </p>
                </div>

                {/* Bottom Description */}
                <div className="pt-4 border-t border-black/10">
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                    Build you a solid financial foundation so you can focus on
                    growth, compliance, and long-term success.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[550px] lg:h-[650px] flex items-center justify-center">
                  {/* Placeholder for office corridor image */}
                  <p className="text-gray-500 text-sm font-light">
                    Office Corridor Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Leadership & Team Section */}
      <div id="about-team" className="sticky top-0 z-50">
        <section className="relative bg-white py-32">
          <div className="mx-auto max-w-6xl w-full px-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
                Our leadership & Team
              </h2>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Team Member Card 1 */}
              <div className="relative overflow-hidden rounded-sm bg-gray-200 h-[500px] group">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-xs font-light">
                    Team Member Photo
                  </p>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-black/80 backdrop-blur-sm rounded-full px-5 py-2.5">
                    <p className="text-white text-xs font-light">
                      <span className="text-accent font-normal">
                        Mattew Jane
                      </span>
                      , Senior Consultant
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative overflow-hidden rounded-sm bg-[#E8F5E9] p-6 h-[500px] flex flex-col justify-between">
                <div className="space-y-5">
                  <h3 className="text-xl md:text-2xl font-light text-black leading-tight">
                    "When you have a dream, you've got to grab it and never let
                    go"
                  </h3>

                  <p className="text-xs text-black/70 leading-relaxed font-light">
                    When it comes to your cannabis business, accounting can be
                    challenging but we are here to help through it all. Since
                    our inception, Higher Level Accounting has focused on
                    providing accounting and
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </a>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-accent text-xs font-light hover:underline"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member Card 2 */}
              <div className="relative overflow-hidden rounded-sm bg-gray-200 h-[500px] group">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-xs font-light">
                    Team Member Photo
                  </p>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-black/80 backdrop-blur-sm rounded-full px-5 py-2.5">
                    <p className="text-white text-xs font-light">
                      <span className="text-accent font-normal">
                        Mattew Jane
                      </span>
                      , Senior Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <div id="about-testimonials" className="sticky top-0 z-55">
        <section className="relative bg-cream py-32 min-h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-6">
            <div className="max-w-3xl mx-auto">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight text-black mb-5">
                Testimonials
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-base font-light text-black ml-1.5">
                  5.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-black leading-relaxed mb-8">
                Alvonn and his team are dedicated professionals who provide
                excellent accounting services. Alvonn is very detailed and
                conscientious in his work and has solved many bookkeeping and
                accounting problems. I recommend Alvonn and Higher Level
                Accounting to any business owner that needs someone to watch
                their financial back!
              </blockquote>

              {/* Author Card and Navigation */}
              <div className="flex items-end justify-between">
                {/* Author Card */}
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-12 h-12 rounded-md bg-gray-300 overflow-hidden flex-shrink-0">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white text-xs font-light">
                        Photo
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-black">
                      Whitney Stone
                    </h3>
                    <p className="text-xs text-gray-500 font-light uppercase tracking-wide">
                      CEO MJ ADMIN
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <div id="about-cta" className="sticky top-0 z-60">
        <section className="relative bg-bg py-32 min-h-screen flex items-center">
          <div className="mx-auto max-w-4xl w-full px-6 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream">
                Get Started
              </h2>

              <p className="text-base md:text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
                Whether you're operating in a highly regulated industry, scaling
                a SaaS platform, or running a high-performing agency, we can
                help you see — and trust — the numbers you're making decisions
                on.
              </p>

              <div className="pt-4">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-12 px-10 text-base font-normal tracking-wide"
                >
                  Schedule Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
