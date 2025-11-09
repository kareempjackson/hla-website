import type { Metadata } from "next";
import Navbar from "../../../components/site/navbar";
import Footer from "../../../components/site/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { getInsightBySlug, getRecentInsights } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// Generate dynamic metadata for each insight
export async function generateMetadata({
  params,
}: {
  params: { insightId: string };
}): Promise<Metadata> {
  const insight = await getInsightBySlug(params.insightId);

  if (!insight) {
    return {
      title: "Insight Not Found | Higher Level Accounting",
      description: "The insight you're looking for doesn't exist.",
    };
  }

  const description = insight.excerpt || "";
  const imageUrl = insight.mainImage
    ? urlFor(insight.mainImage).width(1200).height(630).url()
    : "";

  return {
    title: `${insight.title} | Higher Level Accounting Insights`,
    description: description,
    keywords: `${insight.category?.toLowerCase()}, accounting insights, financial management, ${insight.title.toLowerCase()}`,
    authors: [{ name: insight.author }],
    openGraph: {
      title: insight.title,
      description: description,
      url: `https://higherlevelacct.com/insight/${insight.slug.current}`,
      siteName: "Higher Level Accounting",
      type: "article",
      publishedTime: insight.publishedAt,
      authors: [insight.author],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: insight.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://higherlevelacct.com/insight/${insight.slug.current}`,
    },
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Article image"}
            width={800}
            height={600}
            className="rounded-sm"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} className="text-accent hover:underline">
          {children}
        </a>
      );
    },
  },
};

export default async function InsightPage({
  params,
}: {
  params: { insightId: string };
}) {
  const insight = await getInsightBySlug(params.insightId);

  if (!insight) {
    notFound();
  }

  // Get related articles
  const relatedInsights = await getRecentInsights(4);
  const related = relatedInsights
    .filter((i) => i._id !== insight._id)
    .slice(0, 3);

  // Structured data for individual blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    author: {
      "@type": "Person",
      name: insight.author,
    },
    datePublished: insight.publishedAt,
    description: insight.excerpt || "",
    image: insight.mainImage ? urlFor(insight.mainImage).url() : "",
    publisher: {
      "@type": "Organization",
      name: "Higher Level Accounting",
      logo: {
        "@type": "ImageObject",
        url: "https://higherlevelacct.com/images/logo/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://higherlevelacct.com/insight/${insight.slug.current}`,
    },
  };

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = insight.body
    ? JSON.stringify(insight.body).split(" ").length
    : 0;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="relative bg-white">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar sticky={true} />

      {/* Hero Section with Featured Image */}
      <section className="relative pt-24 pb-12 bg-bg">
        <div className="mx-auto max-w-4xl px-6">
          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            {insight.category && (
              <span className="text-xs font-light uppercase tracking-wider text-accent">
                {insight.category.replace("-", " ")}
              </span>
            )}
            {insight.category && (
              <span className="text-xs text-white/50">•</span>
            )}
            <span className="text-xs text-white/50">{readTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream mb-6 leading-tight">
            {insight.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center">
                <span className="text-sm font-light text-cream">
                  {insight.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-light text-cream">
                  {insight.author}
                </p>
                <p className="text-xs text-white/50">
                  {new Date(insight.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {insight.mainImage && (
        <section className="relative -mt-6 mb-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] md:h-[500px]">
              <Image
                src={urlFor(insight.mainImage).width(1200).height(800).url()}
                alt={insight.mainImage.alt || insight.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="relative bg-white py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-extralight prose-headings:text-black prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-black/70 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:font-normal prose-strong:text-black
              prose-ul:text-black/70 prose-ul:font-light
              prose-ol:text-black/70 prose-ol:font-light"
          >
            {insight.body && (
              <PortableText
                value={insight.body}
                components={portableTextComponents}
              />
            )}
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="relative bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-sm font-light text-black/50 mb-2">
                Share this article
              </p>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
            <Link href="/insights">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="relative bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl sm:text-3xl font-extralight text-black mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((article) => (
                <Link
                  key={article._id}
                  href={`/insight/${article.slug.current}`}
                >
                  <article className="group cursor-pointer">
                    <div className="mb-3 overflow-hidden rounded-sm bg-gray-200">
                      {article.mainImage ? (
                        <Image
                          src={urlFor(article.mainImage)
                            .width(400)
                            .height(300)
                            .url()}
                          alt={article.mainImage.alt || article.title}
                          width={400}
                          height={300}
                          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            No image
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-black/50 font-light mb-2">
                      Published in{" "}
                      {article.category
                        ? article.category.replace("-", " ")
                        : "Insights"}{" "}
                      •{" "}
                      {new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                    <h3 className="text-lg font-extralight text-black leading-tight mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-sm text-black/50 leading-relaxed font-light">
                        {article.excerpt}
                      </p>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
