import Image from "next/image";
import Link from "next/link";
import { getRecentInsights } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function BlogPosts() {
  const posts = await getRecentInsights(3);

  return (
    <section className="relative bg-cream min-h-screen flex items-center py-12 md:py-12 pt-20 overflow-hidden">
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
        <div className="absolute top-[28%] right-[20%] w-[20%] h-px bg-black/8"></div>
        <div className="absolute top-[28%] right-[20%] w-px h-[32%] bg-black/8"></div>
        <div className="absolute top-[60%] right-[38%] w-[18%] h-px bg-black/8"></div>
        <div className="absolute top-[60%] right-[38%] w-px h-[40%] bg-black/8"></div>
        <div className="absolute bottom-0 left-0 w-[62%] h-px bg-black/8"></div>

        {/* Pattern 3 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[18%] w-px h-[20%] bg-black/7"></div>
        <div className="absolute top-[20%] left-[8%] w-[10%] h-px bg-black/7"></div>
        <div className="absolute top-[20%] left-[8%] w-px h-[46%] bg-black/7"></div>
        <div className="absolute top-[66%] left-0 w-[8%] h-px bg-black/7"></div>
        <div className="absolute top-[66%] left-0 w-px h-[34%] bg-black/7"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[15%] w-px h-[22%] bg-black/9"></div>
        <div className="absolute top-[22%] right-[28%] w-[13%] h-px bg-black/9"></div>
        <div className="absolute top-[22%] right-[28%] w-px h-[26%] bg-black/9"></div>
        <div className="absolute top-[48%] right-[15%] w-[13%] h-px bg-black/9"></div>
        <div className="absolute top-[48%] right-[15%] w-px h-[52%] bg-black/9"></div>
        <div className="absolute bottom-0 right-[15%] w-[15%] h-px bg-black/9"></div>

        {/* Pattern 5 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[38%] w-px h-[16%] bg-black/6"></div>
        <div className="absolute top-[16%] left-[38%] w-[18%] h-px bg-black/6"></div>
        <div className="absolute top-[16%] left-[56%] w-px h-[24%] bg-black/6"></div>
        <div className="absolute top-[40%] left-[56%] w-[22%] h-px bg-black/6"></div>
        <div className="absolute top-[40%] left-[78%] w-px h-[60%] bg-black/6"></div>
        <div className="absolute bottom-0 left-[78%] w-[22%] h-px bg-black/6"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[32%] w-px h-[18%] bg-black/5"></div>
        <div className="absolute top-[18%] right-[48%] w-[16%] h-px bg-black/5"></div>
        <div className="absolute top-[18%] right-[48%] w-px h-[40%] bg-black/5"></div>
        <div className="absolute top-[58%] right-[62%] w-[14%] h-px bg-black/5"></div>
        <div className="absolute top-[58%] right-[62%] w-px h-[42%] bg-black/5"></div>
        <div className="absolute bottom-0 left-0 w-[38%] h-px bg-black/5"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black tracking-tight">
            Our Insights
          </h2>
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/60 hover:border-black/20 hover:text-black transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/60 hover:border-black/20 hover:text-black transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/insight/${post.slug.current}`}
              className="group cursor-pointer"
            >
              <article>
                {/* Image */}
                <div className="mb-3 overflow-hidden rounded-sm bg-gray-200">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(400).height(300).url()}
                      alt={post.mainImage.alt || post.title}
                      width={400}
                      height={300}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-48 w-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No image</span>
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="mb-2 flex items-center gap-2 text-xs text-black/50 font-light">
                  {post.category && (
                    <>
                      <span className="capitalize">
                        {post.category.replace("-", " ")}
                      </span>
                      <span>•</span>
                    </>
                  )}
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>by: {post.author}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-light text-black group-hover:text-black/70 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-xs text-black/60 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                )}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
