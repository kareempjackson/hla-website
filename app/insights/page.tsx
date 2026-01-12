"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/site/navbar";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  getFeaturedInsight,
  getRecentInsightsExcludingFeatured,
  getInsights,
  getInsightCategories,
  getInsightsCount,
  type Insight,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function InsightsPage() {
  const [featuredInsight, setFeaturedInsight] = useState<Insight | null>(null);
  const [recentInsights, setRecentInsights] = useState<Insight[]>([]);
  const [allInsights, setAllInsights] = useState<Insight[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [insightsCount, setInsightsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [count, featured, recent, all, cats] = await Promise.all([
          getInsightsCount(),
          getFeaturedInsight(),
          getRecentInsightsExcludingFeatured(4),
          getInsights(),
          getInsightCategories(),
        ]);

        setInsightsCount(count);
        setFeaturedInsight(featured);
        setRecentInsights(recent);
        setAllInsights(all);
        setCategories(cats);
      } catch (error) {
        console.error("Error fetching insights:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter insights based on selected category
  const filteredInsights =
    selectedCategory === "all"
      ? allInsights
      : allInsights.filter((insight) => insight.category === selectedCategory);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    const categoryMap: Record<string, string> = {
      accounting: "Accounting",
      "tax-compliance": "Tax & Compliance",
      "business-strategy": "Business Strategy",
      "cannabis-industry": "Cannabis Industry",
      "financial-planning": "Financial Planning",
      "technology-tools": "Technology & Tools",
    };
    return categoryMap[category] || category;
  };

  // Empty state
  if (!isLoading && insightsCount === 0) {
    return (
      <div className="relative bg-bg min-h-screen">
        <Navbar sticky={true} />

        {/* Hero Section */}
        <section
          id="insights-hero"
          className="relative min-h-[50vh] flex items-center bg-bg -mt-20 pt-20"
        >
          {/* Decorative Lines */}
          <div
            className="absolute inset-0 top-0 pointer-events-none overflow-visible z-[150]"
            style={{ marginTop: "-5rem" }}
          >
            {/* Pattern 1 */}
            <div className="absolute top-0 left-0 w-px h-[25%] bg-white/15"></div>
            <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/15"></div>
            <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/15"></div>
            <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/15"></div>
            <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/15"></div>
            <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/15"></div>
          </div>

          <div className="mx-auto max-w-6xl w-full px-6 py-12 relative z-10">
            <div className="max-w-4xl">
              <p className="text-xs font-light uppercase tracking-wider text-white/50 mb-4">
                Insights & Resources
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream mb-6 leading-tight">
                Financial insights and industry expertise to help you grow with
                confidence.
              </h1>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-3xl">
                Explore our latest articles, guides, and resources on
                accounting, compliance, and strategic financial management.
              </p>
            </div>
          </div>
        </section>

        {/* Empty State Section */}
        <section className="relative bg-white py-32">
          <div className="mx-auto max-w-3xl w-full px-6 text-center">
            <div className="mb-8">
              <svg
                className="mx-auto h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-black mb-4">
              No insights published yet
            </h2>
            <p className="text-base text-black/60 leading-relaxed font-light mb-8">
              We&apos;re working on creating valuable content for you. Check
              back soon for the latest insights on accounting, compliance, and
              financial strategy.
            </p>
            <Link href="/contact">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative bg-bg">
      <Navbar sticky={true} />

      {/* Hero Section */}
      <section
        id="insights-hero"
        className="relative min-h-[50vh] flex items-center bg-bg -mt-20 pt-20"
      >
        {/* Decorative Stepped Lines */}
        <div
          className="absolute inset-0 top-0 pointer-events-none overflow-visible z-[150]"
          style={{ marginTop: "-5rem" }}
        >
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-white/15"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/15"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/15"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/15"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/15"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/15"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/12"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/12"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/12"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/12"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/12"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/12"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-white/10"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/10"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/10"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/10"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/10"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/10"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/8"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/8"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/8"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/8"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/8"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/8"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/8"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/9"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/9"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/9"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/9"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/9"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/9"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/8"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/8"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/8"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/8"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/8"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/8"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 py-12 relative z-10">
          <div className="max-w-4xl">
            {/* Label */}
            <p className="text-xs font-light uppercase tracking-wider text-white/50 mb-4">
              Insights & Resources
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream mb-6 leading-tight">
              Financial insights and industry expertise to help you grow with
              confidence.
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-3xl">
              Explore our latest articles, guides, and resources on accounting,
              compliance, and strategic financial management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredInsight && (
        <section
          id="featured-post"
          className="relative bg-white py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl w-full px-6">
            <Link
              href={`/insight/${featuredInsight.slug.current}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center group cursor-pointer"
            >
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] lg:h-[500px] flex items-center justify-center">
                  {featuredInsight.mainImage?.asset ? (
                    <Image
                      src={urlFor(featuredInsight.mainImage)
                        .width(800)
                        .height(600)
                        .url()}
                      alt={
                        featuredInsight.mainImage.alt || featuredInsight.title
                      }
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-light">
                        Featured Post Image
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                {/* Label */}
                <p className="text-xs font-light uppercase tracking-wider text-black/50">
                  Featured post
                </p>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black leading-tight group-hover:text-accent transition-colors">
                  {featuredInsight.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-black/70 leading-relaxed font-light">
                  {featuredInsight.excerpt ||
                    "Discover the latest insights and best practices in accounting and financial management."}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-black/50 font-light">
                  <span className="uppercase tracking-wide">
                    {featuredInsight.category &&
                      getCategoryDisplayName(featuredInsight.category)}
                  </span>
                  <span>•</span>
                  <time>{formatDate(featuredInsight.publishedAt)}</time>
                  <span>•</span>
                  <span>By {featuredInsight.author}</span>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <span className="inline-flex items-center text-accent text-sm font-light group-hover:underline">
                    Read full article
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      {recentInsights.length > 0 && (
        <section id="recent-posts" className="relative bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl w-full px-6">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black">
                Recent Posts
              </h2>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentInsights.map((insight) => (
                <Link
                  key={insight._id}
                  href={`/insight/${insight.slug.current}`}
                  className="group cursor-pointer"
                >
                  <article className="space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[280px] flex items-center justify-center">
                      {insight.mainImage?.asset ? (
                        <Image
                          src={urlFor(insight.mainImage)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={insight.mainImage.alt || insight.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                          <p className="text-gray-500 text-sm font-light">
                            Post Image
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-black/50 font-light">
                        <span className="uppercase tracking-wide">
                          {insight.category &&
                            getCategoryDisplayName(insight.category)}
                        </span>
                        <span>•</span>
                        <time>{formatDate(insight.publishedAt)}</time>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-light text-black leading-tight group-hover:text-accent transition-colors">
                        {insight.title}
                      </h3>

                      {/* Excerpt */}
                      {insight.excerpt && (
                        <p className="text-sm text-black/70 leading-relaxed font-light line-clamp-2">
                          {insight.excerpt}
                        </p>
                      )}

                      {/* Read more */}
                      <span className="inline-flex items-center text-accent text-xs font-light group-hover:underline">
                        Read more
                        <svg
                          className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section with Category Filter */}
      {allInsights.length > 0 && (
        <section id="all-posts" className="relative bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl w-full px-6">
            {/* Section Header with Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-8">
                All Insights
              </h2>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-pill text-xs font-light tracking-wide transition-colors ${
                    selectedCategory === "all"
                      ? "bg-accent text-black"
                      : "bg-gray-100 text-black/70 hover:bg-gray-200"
                  }`}
                >
                  All Posts ({allInsights.length})
                </button>
                {categories.map((category) => {
                  const count = allInsights.filter(
                    (i) => i.category === category
                  ).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-pill text-xs font-light tracking-wide transition-colors ${
                        selectedCategory === category
                          ? "bg-accent text-black"
                          : "bg-gray-100 text-black/70 hover:bg-gray-200"
                      }`}
                    >
                      {getCategoryDisplayName(category)} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filtered Posts Grid */}
            {filteredInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredInsights.map((insight) => (
                  <Link
                    key={insight._id}
                    href={`/insight/${insight.slug.current}`}
                    className="group cursor-pointer"
                  >
                    <article className="space-y-4">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[220px] flex items-center justify-center">
                        {insight.mainImage?.asset ? (
                          <Image
                            src={urlFor(insight.mainImage)
                              .width(400)
                              .height(300)
                              .url()}
                            alt={insight.mainImage.alt || insight.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                            <p className="text-gray-500 text-xs font-light">
                              Post Image
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-black/50 font-light">
                          <span className="uppercase tracking-wide">
                            {insight.category &&
                              getCategoryDisplayName(insight.category)}
                          </span>
                          <span>•</span>
                          <time>{formatDate(insight.publishedAt)}</time>
                        </div>

                        {/* Title */}
                        <h3 className="text-base md:text-lg font-light text-black leading-tight group-hover:text-accent transition-colors">
                          {insight.title}
                        </h3>

                        {/* Read more */}
                        <span className="inline-flex items-center text-accent text-xs font-light group-hover:underline">
                          Read more
                          <svg
                            className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-base text-black/60 font-light">
                  No posts found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
