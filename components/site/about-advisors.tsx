"use client";

import { useRef } from "react";
import Image from "next/image";

interface Advisor {
  name: string;
  title: string;
  photo: string;
  bio: string[];
}

// Bios are client-approved copy — keep wording exactly as provided.
const advisors: Advisor[] = [
  {
    name: "Karlene Campbell",
    title: "Advisor",
    photo: "/images/team/karlene.jpg",
    bio: [
      "Karlene brings over a decade of accounting experience with deep expertise in cost accounting, accounts payable, and financial process design. She helps businesses in complex and highly regulated industries bring structure and discipline to their operations - building the systems and controls that keep financials accurate and audit-ready. Karlene holds a Bachelor's in Accounting from Midwestern State University and a Master's in Health Administration with a focus in Financial Management.",
    ],
  },
  {
    name: "Krystel Lett",
    title: "Advisor",
    photo: "/images/team/krystel.jpg",
    bio: [
      "Krystel is a senior accountant with over a decade of experience spanning full-cycle accounting, month-end close, and financial reporting under US GAAP. She has deep expertise in balance sheet and account reconciliation, internal controls, and multi-entity accounting, along with hands-on experience implementing and optimizing ERP systems. Krystel has worked across complex and highly regulated industries, and is known for bringing structure, accuracy, and audit-ready discipline to the businesses she supports. She holds a Bachelor's in Accounting from the University of Houston-Downtown.",
    ],
  },
  {
    name: "Kelon Wilson",
    title: "Advisor",
    photo: "/images/team/kelon.jpg",
    bio: [
      "Kelon is an accomplished tax professional specializing in sales and use tax compliance, with more than eight years of experience advising and supporting businesses in navigating complex multistate tax requirements across the United States. His expertise spans sales and use tax compliance, tax research, audit support, regulatory requirements, and the development of effective processes designed to help organizations manage their tax obligations with greater accuracy and efficiency.",
      "Drawing on experience in tax administration, Kelon brings a comprehensive perspective to state and local taxation. This experience enables him to understand the challenges businesses face while navigating the regulatory and administrative framework governing tax compliance.",
      "Based in Houston, Texas, Kelon holds a Bachelor's degree in Accounting from Midwestern State University. He is recognized for his analytical approach, attention to detail, and ability to translate complex tax requirements into practical solutions that support business operations and long-term compliance.",
    ],
  },
];

// Mirrors the "Our leadership & Team" carousel on the About page.
// Cards use min-h so the whole row grows together if a bio runs long.
export default function AboutAdvisors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (left: number) => {
    scrollContainerRef.current?.scrollBy({ left, behavior: "smooth" });
  };

  return (
    <section className="relative bg-black py-32 overflow-visible md:overflow-hidden">
      <div className="mx-auto max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 px-6">
          <div>
            <p className="text-xs font-light uppercase tracking-wider text-white/50 mb-3">
              Fractional Consultants
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              Advisors
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-400)}
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Scroll advisors left"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-black"
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
              onClick={() => scrollBy(400)}
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Scroll advisors right"
            >
              <svg
                className="w-5 h-5 text-white group-hover:text-black"
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

        {/* Scrollable Advisor Cards */}
        <div
          ref={scrollContainerRef}
          className="advisors-scroll flex gap-5 overflow-x-auto scroll-smooth px-6 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {advisors.flatMap((advisor) => [
            <div key={`${advisor.name}-photo`} className="shrink-0 w-[350px]">
              <div className="relative overflow-hidden rounded-sm bg-gray-200 h-full min-h-[500px]">
                <Image
                  src={advisor.photo}
                  alt={advisor.name}
                  fill
                  sizes="350px"
                  className="object-cover object-top"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-black/80 backdrop-blur-sm rounded-full px-5 py-2.5">
                    <p className="text-white text-xs font-light">
                      <span className="text-accent font-normal">
                        {advisor.name}
                      </span>
                      , {advisor.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>,
            <div key={`${advisor.name}-bio`} className="shrink-0 w-[350px]">
              <div className="relative overflow-hidden rounded-sm bg-[#E8F5E9] p-6 h-full min-h-[500px]">
                <div className="space-y-5">
                  <h3 className="text-xl md:text-2xl font-light text-black leading-tight">
                    {advisor.name}
                  </h3>
                  <div className="space-y-2">
                    {advisor.bio.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-xs text-black/70 leading-relaxed font-light"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>,
          ])}
        </div>
      </div>

      {/* Add CSS to hide scrollbar */}
      <style jsx>{`
        .advisors-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
