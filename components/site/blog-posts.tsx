import Image from "next/image";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth={2}
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
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const blogPosts = [
  {
    id: 1,
    image: "/window.svg",
    category: "Insight",
    date: "Jan 30, 2021",
    title: "Practice making User Flow",
    excerpt: "In this article, we'll cover how to create user flows",
  },
  {
    id: 2,
    image: "/window.svg",
    category: "Insight",
    date: "Jan 30, 2021",
    author: "Albert Sans",
    title: "Overview of the Design Principles",
    excerpt:
      "What are Design Principles?... To understand design principles, we first discuss the principles.",
  },
  {
    id: 3,
    image: "/window.svg",
    category: "Insight",
    date: "Jan 30, 2021",
    title: "Using Grid in website design",
    excerpt: 'Andi: "What\'s the grid like?" Toni: "Like below"',
  },
];

export default function BlogPosts() {
  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
            Our Insights
          </h2>
          <div className="flex items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black/60 hover:border-black/40 hover:text-black transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black/60 hover:border-black/40 hover:text-black transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="mb-2 flex items-center gap-2 text-xs text-black/60">
                <span>Published in {post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                {post.author && (
                  <>
                    <span>•</span>
                    <span>by: {post.author}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-black group-hover:text-black/80 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-black/70 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
