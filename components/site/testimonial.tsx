"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
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

                <div className="pt-2">
                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    {(testimonial?.socialLinks?.twitter ||
                      !testimonial.socialLinks) && (
                      <Link
                        href={testimonial?.socialLinks?.twitter || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
                        aria-label="Twitter"
                      >
                        <TwitterIcon className="size-3.5" />
                      </Link>
                    )}
                    {(testimonial?.socialLinks?.linkedin ||
                      !testimonial.socialLinks) && (
                      <Link
                        href={testimonial?.socialLinks?.linkedin || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon className="size-3" />
                      </Link>
                    )}
                    {(testimonial?.socialLinks?.instagram ||
                      !testimonial.socialLinks) && (
                      <Link
                        href={testimonial?.socialLinks?.instagram || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
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
