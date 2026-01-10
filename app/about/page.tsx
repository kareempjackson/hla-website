"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";
import {
  getAboutPageData,
  type AboutPage,
} from "@/sanity/lib/aboutPageQueries";
import {
  makeSanityImageLoader,
  sanityImageUrl,
  urlFor,
} from "@/sanity/lib/image";
import { CALENDLY_URL } from "@/lib/calendly";
import AboutTestimonials from "@/components/site/about-testimonials";
import HeroVideo from "@/components/site/hero-video";

// Note: metadata export doesn't work in client components,
// so we'll need to add metadata via layout or convert to server component
// For now, adding structured data via script tag in the component

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [aboutData, setAboutData] = useState<AboutPage | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAboutPageData();
      setAboutData(data);
    }
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Higher Level Accounting",
    description:
      "Higher Level Accounting provides strategic, controller-level accounting services for growth-minded businesses. Our focus is on delivering accurate, accrual-based financials, actionable insights, and rock-solid compliance.",
    url: "https://higherlevelaccounting.co/about",
    serviceType: [
      "Controller-Level Accounting",
      "Accrual-Based Bookkeeping",
      "Financial Compliance",
      "Strategic Financial Management",
    ],
    areaServed: ["United States"],
    knowsAbout: [
      "SaaS Accounting",
      "Agency Accounting",
      "Cannabis Retail Accounting",
      "Financial Compliance",
      "Strategic Planning",
    ],
  };

  // About hero media (match home hero spacing/sizing)
  const mediaType = aboutData?.heroSection?.heroMedia?.mediaType;
  const videoUrl = aboutData?.heroSection?.heroMedia?.video?.asset?.url;
  const isHeroVideo = mediaType === "video" && !!videoUrl;
  const posterUrl = aboutData?.heroSection?.heroMedia?.posterImage
    ? urlFor(aboutData.heroSection.heroMedia.posterImage)
        .width(1200)
        .height(900)
        .url()
    : undefined;
  const imageSource =
    aboutData?.heroSection?.heroMedia?.image ||
    aboutData?.heroSection?.heroImage;

  const teamMembers =
    aboutData?.teamSection?.teamMembers &&
    aboutData.teamSection.teamMembers.length > 0
      ? aboutData.teamSection.teamMembers
      : [
          {
            name: "Mattew Jane",
            role: "Senior Consultant",
            quote:
              "When you have a dream, you've got to grab it and never let go",
            bio: "When it comes to your cannabis business, accounting can be challenging but we are here to help through it all.",
          },
          {
            name: "Jane Smith",
            role: "Financial Analyst",
            quote: "Excellence is not a skill, it's an attitude",
            bio: "Our commitment to providing exceptional financial services goes beyond numbers. We believe in building lasting relationships with our clients and helping them achieve their business goals.",
          },
          {
            name: "John Doe",
            role: "Accounting Manager",
            quote:
              "Success is the sum of small efforts repeated day in and day out",
            bio: "We bring precision and dedication to every client engagement. Our team is committed to delivering financial clarity that empowers businesses to make informed decisions.",
          },
        ];

  return (
    <div className="relative bg-bg">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      {/* Hero Section */}
      <div id="about-hero" className="sticky top-0 z-10">
        <section className="relative min-h-screen flex items-center pt-20 bg-bg overflow-hidden">
          {/* Decorative Lines - White on dark teal background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-white/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/4"></div>
          </div>

          {/* Hero Content (match home hero spacing/sizing) */}
          <div
            className={`mx-auto grid grid-cols-1 items-center gap-10 px-6 py-8 w-full relative z-10 md:py-12 ${
              isHeroVideo
                ? "max-w-7xl md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.3fr]"
                : "max-w-6xl md:grid-cols-2"
            }`}
          >
            {/* Copy */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-cream tracking-tight">
                {aboutData?.heroSection?.title || "Why Higher Level Exists"}
              </h1>
              <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed font-light">
                {aboutData?.heroSection?.description ||
                  "We exist because financial guesswork doesn't scale. Too many firms stop at 'good enough'. We go a step further to uncover the gaps so that you have financial clarity you can trust to make the right moves."}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="md"
                    className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                  >
                    {aboutData?.heroSection?.primaryButtonText || "Contact Us"}
                  </Button>
                </a>
                <Link href="/services">
                  <Button
                    size="md"
                    variant="ghost"
                    className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/80 h-10 px-7 text-xs font-light tracking-wide border border-white/10"
                  >
                    {aboutData?.heroSection?.secondaryButtonText ||
                      "Learn More"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Media */}
            <div className="relative">
              <div
                className={`relative overflow-hidden rounded-sm ${
                  isHeroVideo
                    ? "w-full aspect-video bg-transparent"
                    : "bg-transparent"
                }`}
              >
                {isHeroVideo && videoUrl ? (
                  <HeroVideo
                    src={videoUrl}
                    poster={posterUrl}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                ) : imageSource ? (
                  <Image
                    src={sanityImageUrl(imageSource, {
                      width: 1200,
                      height: 900,
                    })}
                    loader={makeSanityImageLoader(imageSource, {
                      width: 1200,
                      height: 900,
                    })}
                    alt={
                      imageSource.alt ||
                      aboutData?.heroSection?.title ||
                      "About"
                    }
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-[400px] bg-linear-to-br from-surface to-bg flex items-center justify-center">
                    <p className="text-white/50 text-sm font-light">
                      Customer Service Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission & Vision Section */}
      <div id="about-mission" className="sticky top-0 z-20">
        <section className="relative bg-cream py-24 min-h-screen flex items-center overflow-hidden">
          {/* Decorative Lines - Dark on cream background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
          </div>

          <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[550px] lg:h-[650px] flex items-center justify-center">
                  {aboutData?.missionSection?.image?.asset ? (
                    <Image
                      src={sanityImageUrl(aboutData.missionSection.image, {
                        width: 1200,
                      })}
                      loader={makeSanityImageLoader(
                        aboutData.missionSection.image
                      )}
                      alt={
                        aboutData.missionSection.image.alt ||
                        "Mission Section Image"
                      }
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    /* Placeholder for working professional image */
                    <p className="text-gray-500 text-sm font-light">
                      Professional Working Image
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col space-y-5 justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight text-black whitespace-nowrap">
                  {aboutData?.missionSection?.title ||
                    "About Higher Level Accounting"}
                </h2>

                <div className="space-y-3.5">
                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    {aboutData?.missionSection?.description1 ||
                      "Higher Level Accounting provides strategic, controller-level accounting services for growth-minded businesses. Our focus is on delivering accurate, accrual-based financials, actionable insights, and rock-solid compliance, so you can scale confidently and never wonder if your numbers are telling the truth."}
                  </p>

                  <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light">
                    {aboutData?.missionSection?.description2 ||
                      "Over the years, we've worked closely with founders, operators, and leadership teams across our three core verticals and beyond. In every case, the business leaders we meet are experts in their craft. However, without the right financial processes, even great companies risk fines, lost licenses, missed funding rounds, or costly missteps."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Who We Serve Section */}
      <div id="about-who-we-serve" className="sticky top-0 z-30">
        <section className="relative bg-black py-24 min-h-screen flex items-center overflow-hidden">
          {/* Decorative Lines - White on black background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-white/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/4"></div>
          </div>

          <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Column - Image Grid */}
              <div className="relative">
                <div className="relative grid grid-cols-12 gap-3">
                  {/* Top Left - Team High Five (larger, spans more) */}
                  <div className="col-span-7 relative overflow-hidden rounded-sm bg-gray-700 h-72 flex items-center justify-center p-3">
                    {aboutData?.whoWeServeSection?.images?.[0]?.asset ? (
                      <Image
                        src={sanityImageUrl(
                          aboutData.whoWeServeSection.images[0],
                          {
                            width: 900,
                          }
                        )}
                        loader={makeSanityImageLoader(
                          aboutData.whoWeServeSection.images[0]
                        )}
                        alt={
                          aboutData.whoWeServeSection.images[0].alt ||
                          "Who we serve image"
                        }
                        fill
                        sizes="(min-width: 1024px) 30vw, 60vw"
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <p className="text-gray-400 text-xs font-light">
                          Team Image
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Top Right - Person at Computer (smaller, positioned higher) */}
                  <div className="col-span-5 relative overflow-hidden rounded-sm bg-gray-700 h-64 mt-6">
                    {aboutData?.whoWeServeSection?.images?.[1]?.asset ? (
                      <Image
                        src={sanityImageUrl(
                          aboutData.whoWeServeSection.images[1],
                          {
                            width: 900,
                          }
                        )}
                        loader={makeSanityImageLoader(
                          aboutData.whoWeServeSection.images[1]
                        )}
                        alt={
                          aboutData.whoWeServeSection.images[1].alt ||
                          "Who we serve image"
                        }
                        fill
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <p className="text-gray-400 text-xs font-light">
                          Computer Image
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom - Person Working at Desk (large, overlaps) */}
                  <div className="col-span-8 col-start-3 relative overflow-hidden rounded-sm bg-gray-700 h-80 -mt-10">
                    {aboutData?.whoWeServeSection?.images?.[2]?.asset ? (
                      <Image
                        src={sanityImageUrl(
                          aboutData.whoWeServeSection.images[2],
                          {
                            width: 1100,
                          }
                        )}
                        loader={makeSanityImageLoader(
                          aboutData.whoWeServeSection.images[2]
                        )}
                        alt={
                          aboutData.whoWeServeSection.images[2].alt ||
                          "Who we serve image"
                        }
                        fill
                        sizes="(min-width: 1024px) 35vw, 70vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <p className="text-gray-400 text-xs font-light">
                          Desk Work Image
                        </p>
                      </div>
                    )}
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
                  <Link href="/contact">
                    <Button
                      size="md"
                      className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="md"
                      className="rounded-pill focus-visible:ring-0 bg-white text-black hover:bg-white/90 h-10 px-7 text-xs font-light tracking-wide"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Approach Section */}
      <div id="about-approach" className="sticky top-0 z-40">
        <section className="relative bg-cream py-24 min-h-screen flex items-center overflow-hidden">
          {/* Decorative Lines - Dark on cream background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
          </div>

          <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
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
                    <Link href="/contact">
                      <Button
                        size="md"
                        className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                      >
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        size="md"
                        className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                      >
                        Learn More
                      </Button>
                    </Link>
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
                  {aboutData?.approachSection?.image?.asset ? (
                    <Image
                      src={sanityImageUrl(aboutData.approachSection.image, {
                        width: 1200,
                      })}
                      loader={makeSanityImageLoader(
                        aboutData.approachSection.image
                      )}
                      alt={
                        aboutData.approachSection.image.alt ||
                        "Approach Section Image"
                      }
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    /* Placeholder for office corridor image */
                    <p className="text-gray-500 text-sm font-light">
                      Office Corridor Image
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Leadership & Team Section */}
      <div id="about-team" className="sticky top-0 z-50">
        <section className="relative bg-white py-32 overflow-hidden">
          {/* Decorative Lines - Green on white background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-accent/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-accent/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-accent/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-accent/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-accent/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-accent/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-accent/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-accent/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-accent/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-accent/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-accent/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-accent/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-accent/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-accent/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-accent/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-accent/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-accent/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-accent/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-accent/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-accent/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-accent/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-accent/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-accent/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-accent/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-accent/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-accent/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-accent/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-accent/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-accent/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-accent/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-accent/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-accent/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-accent/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-accent/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-accent/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-accent/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-accent/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-accent/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-accent/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-accent/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-accent/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-accent/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-accent/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-accent/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-accent/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-accent/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-accent/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-accent/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-accent/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-accent/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-accent/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-accent/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-accent/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-accent/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-accent/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-accent/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-accent/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-accent/4"></div>
          </div>

          <div className="mx-auto max-w-7xl w-full relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-10 px-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
                {aboutData?.teamSection?.title || "Our leadership & Team"}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black transition-colors group"
                  aria-label="Scroll left"
                >
                  <svg
                    className="w-5 h-5 text-black group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black transition-colors group"
                  aria-label="Scroll right"
                >
                  <svg
                    className="w-5 h-5 text-black group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Team Cards */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-6 pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {teamMembers.flatMap((member, index) => {
                const baseKey = `${member?.name || "member"}-${index}`;
                const photoCard = (
                  <div key={`${baseKey}-photo`} className="shrink-0 w-[350px]">
                    <div className="relative overflow-hidden rounded-sm bg-gray-200 h-[500px]">
                      {member?.photo?.asset ? (
                        <Image
                          src={sanityImageUrl(member.photo, { width: 900 })}
                          loader={makeSanityImageLoader(member.photo)}
                          alt={member.photo.alt || member.name || "Team Member"}
                          fill
                          sizes="350px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <p className="text-gray-500 text-xs font-light">
                            Team Member Photo
                          </p>
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="bg-black/80 backdrop-blur-sm rounded-full px-5 py-2.5">
                          <p className="text-white text-xs font-light">
                            <span className="text-accent font-normal">
                              {member?.name || "Team Member"}
                            </span>
                            {member?.role ? `, ${member.role}` : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );

                const quoteCard = (
                  <div key={`${baseKey}-quote`} className="shrink-0 w-[350px]">
                    <div className="relative overflow-hidden rounded-sm bg-[#E8F5E9] p-6 h-[500px] flex flex-col justify-between">
                      <div className="space-y-5">
                        {member?.quote ? (
                          <h3 className="text-xl md:text-2xl font-light text-black leading-tight">
                            "{member.quote}"
                          </h3>
                        ) : (
                          <h3 className="text-xl md:text-2xl font-light text-black leading-tight">
                            "Excellence is not a skill, it's an attitude"
                          </h3>
                        )}

                        <p className="text-xs text-black/70 leading-relaxed font-light">
                          {member?.bio ||
                            "Our commitment to providing exceptional financial services goes beyond numbers. We believe in building lasting relationships with our clients and helping them achieve their business goals."}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          {member?.twitterUrl && (
                            <a
                              href={member.twitterUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                              aria-label="Twitter"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                          )}
                          {member?.linkedinUrl && (
                            <a
                              href={member.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {member?.instagramUrl && (
                            <a
                              href={member.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
                              aria-label="Instagram"
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            </a>
                          )}
                        </div>

                        {/* Learn more button removed */}
                      </div>
                    </div>
                  </div>
                );

                return [photoCard, quoteCard];
              })}
            </div>
          </div>

          {/* Add CSS to hide scrollbar */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </section>
      </div>

      {/* Testimonials Section */}
      {aboutData?.testimonialsSection?.showTestimonials !== false && (
        <div id="about-testimonials" className="sticky top-0 z-55">
          <section className="relative bg-cream py-32 min-h-screen flex items-center overflow-hidden">
            {/* Decorative Lines - Dark on cream background */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Pattern 1 - Top Left to Bottom Right */}
              <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
              <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
              <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
              <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
              <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
              <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

              {/* Pattern 2 - Top Left to Bottom Right */}
              <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
              <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
              <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
              <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
              <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
              <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

              {/* Pattern 3 - Top Right to Bottom Left */}
              <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
              <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
              <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
              <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
              <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
              <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

              {/* Pattern 4 - Top Left to Bottom Right */}
              <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
              <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
              <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
              <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
              <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
              <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
              <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

              {/* Pattern 5 - Top Left to Bottom Right */}
              <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
              <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
              <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
              <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
              <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
              <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

              {/* Pattern 6 - Top Right to Bottom Left */}
              <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
              <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
              <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
              <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
              <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
              <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

              {/* Pattern 7 - Top Left to Bottom Left */}
              <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
              <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
              <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

              {/* Pattern 8 - Top Left to Bottom Left */}
              <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
              <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
              <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
              <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
              <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
              <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

              {/* Pattern 9 - Top Right to Bottom Right */}
              <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
              <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
              <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
              <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
              <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
              <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

              {/* Pattern 10 - Top Left to Bottom Right */}
              <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
              <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
              <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
              <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
              <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
              <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
            </div>

            <AboutTestimonials
              title={aboutData?.testimonialsSection?.title || "Testimonials"}
              testimonials={aboutData?.testimonialsSection?.testimonials}
            />
          </section>
        </div>
      )}

      {/* Call to Action Section */}
      <div id="about-cta" className="sticky top-0 z-60">
        <section className="relative bg-bg py-32 min-h-screen flex items-center overflow-hidden">
          {/* Decorative Lines - White on dark teal background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pattern 1 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-white/12"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/12"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/12"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/12"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/12"></div>

            {/* Pattern 2 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/10"></div>
            <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/10"></div>
            <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/10"></div>
            <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/10"></div>
            <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/10"></div>
            <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/10"></div>

            {/* Pattern 3 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-0 w-px h-[28%] bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/8"></div>
            <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/8"></div>
            <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/8"></div>
            <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/8"></div>

            {/* Pattern 4 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/7"></div>
            <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/7"></div>
            <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/7"></div>
            <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/7"></div>
            <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/7"></div>

            {/* Pattern 5 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/7"></div>
            <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/7"></div>
            <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/7"></div>

            {/* Pattern 6 - Top Right to Bottom Left */}
            <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/6"></div>
            <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/6"></div>
            <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/6"></div>
            <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/6"></div>

            {/* Pattern 7 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/5"></div>
            <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/5"></div>

            {/* Pattern 8 - Top Left to Bottom Left */}
            <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/6"></div>
            <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/6"></div>
            <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/6"></div>
            <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/6"></div>

            {/* Pattern 9 - Top Right to Bottom Right */}
            <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/7"></div>
            <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/7"></div>
            <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/7"></div>
            <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/7"></div>

            {/* Pattern 10 - Top Left to Bottom Right */}
            <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/4"></div>
            <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/4"></div>
            <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/4"></div>
            <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/4"></div>
            <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/4"></div>
            <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/4"></div>
          </div>

          <div className="mx-auto max-w-4xl w-full px-6 text-center relative z-10">
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
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-pill font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 bg-accent text-black hover:brightness-95 active:brightness-90 h-12 px-10 text-base font-normal tracking-wide"
                >
                  Schedule Your Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
