"use client";

import { useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface TestimonialData {
  name?: string;
  title?: string;
  organization?: string;
  quote?: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

interface TestimonialSectionData {
  showTestimonials?: boolean;
  testimonials?: TestimonialData[];
}

export default function Testimonial({
  data,
}: {
  data?: TestimonialSectionData;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  };

  const defaultTestimonial: TestimonialData = {
    name: "Dr. Ron Daniels",
    title: "President",
    organization: "Institute of the Black World 21st Century, Inc.",
    quote: `Working with Higher Level Accounting has been transformative for
              the Institute of the Black World 21st Century. They meticulously
              cleaned up our financial records, prepared us for audits, and
              introduced advanced solutions that boosted efficiency and
              transparency. Their professionalism, expertise, and dedication
              have been invaluable to our organization.`,
  };

  const testimonials =
    data?.testimonials && data.testimonials.length > 0
      ? data.testimonials
      : [defaultTestimonial];

  return (
    <section className="relative bg-cream-200 min-h-screen flex items-center py-16 md:py-16 pt-20 overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[24%] bg-black/10"></div>
        <div className="absolute top-[24%] left-0 w-[32%] h-px bg-black/10"></div>
        <div className="absolute top-[24%] left-[32%] w-px h-[26%] bg-black/10"></div>
        <div className="absolute top-[50%] left-[32%] w-[28%] h-px bg-black/10"></div>
        <div className="absolute top-[50%] left-[60%] w-px h-[50%] bg-black/10"></div>
        <div className="absolute bottom-0 left-[60%] w-[40%] h-px bg-black/10"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
        <div className="absolute top-[28%] right-[18%] w-[18%] h-px bg-black/8"></div>
        <div className="absolute top-[28%] right-[18%] w-px h-[30%] bg-black/8"></div>
        <div className="absolute top-[58%] right-[36%] w-[18%] h-px bg-black/8"></div>
        <div className="absolute top-[58%] right-[36%] w-px h-[42%] bg-black/8"></div>
        <div className="absolute bottom-0 left-0 w-[64%] h-px bg-black/8"></div>

        {/* Pattern 3 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[18%] w-px h-[20%] bg-black/9"></div>
        <div className="absolute top-[20%] left-[8%] w-[10%] h-px bg-black/9"></div>
        <div className="absolute top-[20%] left-[8%] w-px h-[52%] bg-black/9"></div>
        <div className="absolute top-[72%] left-0 w-[8%] h-px bg-black/9"></div>
        <div className="absolute top-[72%] left-0 w-px h-[28%] bg-black/9"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[10%] w-px h-[22%] bg-black/7"></div>
        <div className="absolute top-[22%] right-[22%] w-[12%] h-px bg-black/7"></div>
        <div className="absolute top-[22%] right-[22%] w-px h-[26%] bg-black/7"></div>
        <div className="absolute top-[48%] right-[10%] w-[12%] h-px bg-black/7"></div>
        <div className="absolute top-[48%] right-[10%] w-px h-[52%] bg-black/7"></div>
        <div className="absolute bottom-0 right-[10%] w-[10%] h-px bg-black/7"></div>

        {/* Pattern 5 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[28%] w-px h-[26%] bg-black/11"></div>
        <div className="absolute top-[26%] right-[46%] w-[18%] h-px bg-black/11"></div>
        <div className="absolute top-[26%] right-[46%] w-px h-[30%] bg-black/11"></div>
        <div className="absolute top-[56%] right-[58%] w-[12%] h-px bg-black/11"></div>
        <div className="absolute top-[56%] right-[58%] w-px h-[44%] bg-black/11"></div>
        <div className="absolute bottom-0 left-0 w-[42%] h-px bg-black/11"></div>

        {/* Pattern 6 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[40%] w-px h-[18%] bg-black/6"></div>
        <div className="absolute top-[18%] left-[40%] w-[22%] h-px bg-black/6"></div>
        <div className="absolute top-[18%] left-[62%] w-px h-[24%] bg-black/6"></div>
        <div className="absolute top-[42%] left-[62%] w-[24%] h-px bg-black/6"></div>
        <div className="absolute top-[42%] left-[86%] w-px h-[58%] bg-black/6"></div>
        <div className="absolute bottom-0 left-[86%] w-[14%] h-px bg-black/6"></div>
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-10">
        {/* Header with Arrows */}
        {testimonials.length > 1 && (
          <div className="flex items-center justify-end mb-6 px-6">
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black transition-colors group"
                aria-label="Previous testimonial"
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
                aria-label="Next testimonial"
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
        )}

        {/* Scrollable Testimonials */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-6 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-full max-w-5xl grid grid-cols-1 items-center gap-8 md:grid-cols-2"
            >
              {/* Left - Image */}
              <div className="relative max-w-sm mx-auto md:mx-0">
                <div className="relative overflow-hidden rounded-sm">
                  {testimonial?.image?.asset ? (
                    <Image
                      src={urlFor(testimonial.image)
                        .width(450)
                        .height(550)
                        .url()}
                      alt={
                        testimonial.image.alt ||
                        testimonial.name ||
                        "Testimonial"
                      }
                      width={450}
                      height={550}
                      className="h-auto w-full object-cover"
                    />
                  ) : (
                    <Image
                      src="/images/image/ibw21_president_dr_ron_daniels-400x400.jpg"
                      alt={testimonial.name || "Testimonial"}
                      width={450}
                      height={550}
                      className="h-auto w-full object-cover"
                    />
                  )}
                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-2">
                    <p className="text-xs text-white font-light">
                      <span className="text-accent font-light">
                        {testimonial?.name || "Dr. Ron Daniels"}
                      </span>
                      , {testimonial?.title || "President"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <blockquote className="mb-4">
                  <p className="text-sm md:text-base text-black/70 leading-relaxed font-light mb-3">
                    "{testimonial?.quote || defaultTestimonial.quote}"
                  </p>
                  <footer className="text-xs text-black/50 font-light">
                    — {testimonial?.name || defaultTestimonial.name},{" "}
                    {testimonial?.title || defaultTestimonial.title},{" "}
                    {testimonial?.organization ||
                      defaultTestimonial.organization}
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
