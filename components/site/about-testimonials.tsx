"use client";

import { useMemo, useState } from "react";

type AboutTestimonial = {
  name?: string;
  role?: string;
  company?: string;
  quote?: string;
  rating?: number;
};

function Stars({ rating = 5 }: { rating?: number }) {
  const safe = Math.max(1, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < safe ? "text-yellow-400" : "text-black/15"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function AboutTestimonials({
  title = "Testimonials",
  testimonials,
}: {
  title?: string;
  testimonials?: AboutTestimonial[];
}) {
  const items = useMemo(() => {
    if (testimonials && testimonials.length > 0) return testimonials;
    return [
      {
        name: "Whitney Stone",
        role: "CEO",
        company: "MJ Admin",
        rating: 5,
        quote:
          "Alvonn and his team are dedicated professionals who provide excellent accounting services. Alvonn is very detailed and conscientious in his work and has solved many bookkeeping and accounting problems.",
      },
    ] satisfies AboutTestimonial[];
  }, [testimonials]);

  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] || items[0];
  const activeRating = active?.rating ?? 5;

  const canNavigate = items.length > 1;
  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  const authorLine = [
    active?.name?.trim(),
    active?.role?.trim(),
    active?.company?.trim(),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-tight text-black">
              {title}
            </h2>
            <div className="mt-3 flex items-center gap-2 text-black/70">
              <Stars rating={activeRating} />
              <span className="text-sm font-light">
                {activeRating.toFixed(1)}
              </span>
            </div>
          </div>

          {canNavigate && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-black text-black flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          )}
        </div>

        <div className="pt-6 border-t border-black/10">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-extralight text-black leading-relaxed tracking-tight">
            <span className="text-black/25 select-none">“</span>
            {active?.quote || ""}
            <span className="text-black/25 select-none">”</span>
          </blockquote>
          {authorLine && (
            <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-black/45 font-light">
              {authorLine}
            </p>
          )}

          {canNavigate && (
            <div className="mt-7 flex items-center gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "w-7 bg-black/60" : "w-2.5 bg-black/15"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


