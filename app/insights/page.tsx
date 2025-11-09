import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="relative bg-bg">
      <Navbar sticky={true} />

      {/* Hero Section */}
      <section
        id="insights-hero"
        className="relative min-h-[50vh] flex items-center bg-bg -mt-20 pt-20"
      >
        {/* Decorative Stepped Lines - positioned absolutely to extend through navbar */}
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

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/6"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/6"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/6"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/7"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/7"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/7"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/7"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/7"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/7"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/9"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/9"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/9"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/9"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/9"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/9"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/5"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/5"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/5"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/5"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/5"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/5"></div>
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
              Our biggest challenge is making sure we're always designing and
              building products that will help you run your business better.
              Explore our latest articles, guides, and resources on accounting,
              compliance, and strategic financial management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section id="featured-post" className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl w-full px-6">
          <Link
            href="/insight/1"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center group cursor-pointer"
          >
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] lg:h-[500px] flex items-center justify-center">
                {/* Placeholder for featured image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Featured Post Image
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Label */}
              <p className="text-xs font-light uppercase tracking-wider text-black/50">
                Featured post
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight group-hover:text-accent transition-colors">
                Being the best we can be in everything accounting
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-black/50 leading-relaxed font-light">
                Build more meaningful and lasting relations better understand
                their needs, identify new opportunities to help address any
                problems faster. Build more meaningful and lasting relations
                better understand their needs, identify new opportunities to
                help address any problems faster. Build more meaningful and
                lasting relations better understand their needs, identify new
                opportunities to help address any problems faster
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-black/50 font-light">Jan 30, 2021</p>
                <p className="text-sm text-black/50 font-light">
                  by : Albert Sans
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section id="blog-posts" className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl w-full px-6">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight mb-6">
              Advertise, analyze, and optimize! We do it all for you
            </h2>
            <p className="text-sm md:text-base text-black/50 leading-relaxed font-light max-w-2xl">
              Build more meaningful and lasting relationships - better
              understand their needs, identify new opportunities to help address
              any problems faster
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post Card 1 */}
            <Link href="/insight/2" className="flex gap-5 group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 1</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Lead happiness for customers
                </h3>
                <p className="text-xs sm:text-sm text-black/50 leading-relaxed font-light">
                  Build more meaningful and lasting relations better understand
                  their needs, identify new opportunities to help address any
                  problems faster
                </p>
                <div className="flex items-center gap-8 pt-2">
                  <p className="text-xs text-black/50 font-light">
                    Jan 30, 2021
                  </p>
                  <p className="text-xs text-black/50 font-light">
                    by : Albert Sans
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Post Card 2 */}
            <Link href="/insight/1" className="flex gap-5 group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 2</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Mutually support each other
                </h3>
                <p className="text-xs sm:text-sm text-black/50 leading-relaxed font-light">
                  Build more meaningful and lasting relationships - better
                  understand their needs, identify new opportunities to help
                  address any problems faster
                </p>
                <div className="flex items-center gap-8 pt-2">
                  <p className="text-xs text-black/50 font-light">
                    Jan 30, 2021
                  </p>
                  <p className="text-xs text-black/50 font-light">
                    by : Albert Sans
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Post Card 3 */}
            <Link href="/insight/2" className="flex gap-5 group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 3</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Have fun growing together
                </h3>
                <p className="text-xs sm:text-sm text-black/50 leading-relaxed font-light">
                  Build more meaningful and lasting, better understand their
                  needs, identify new opportunities to help address any problems
                  faster
                </p>
                <div className="flex items-center gap-8 pt-2">
                  <p className="text-xs text-black/50 font-light">
                    Jan 30, 2021
                  </p>
                  <p className="text-xs text-black/50 font-light">
                    by : Albert Sans
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Post Card 4 */}
            <Link href="/insight/1" className="flex gap-5 group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 4</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Make Your Business Grow
                </h3>
                <p className="text-xs sm:text-sm text-black/50 leading-relaxed font-light">
                  Build more meaningful and lasting better understand their
                  needs, identify new opportunities to help address any problems
                  faster
                </p>
                <div className="flex items-center gap-8 pt-2">
                  <p className="text-xs text-black/50 font-light">
                    Jan 30, 2021
                  </p>
                  <p className="text-xs text-black/50 font-light">
                    by : Albert Sans
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section
        id="all-articles"
        className="relative bg-gray-50 py-16 md:py-24 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center gap-6 mb-12 pb-4">
            <button className="text-xs font-light text-black border-b-2 border-black pb-1">
              View all
            </button>
            <button className="text-xs font-light text-black/50 hover:text-black transition-colors">
              Design
            </button>
            <button className="text-xs font-light text-black/50 hover:text-black transition-colors">
              Articles
            </button>
            <button className="text-xs font-light text-black/50 hover:text-black transition-colors">
              Product
            </button>
            <button className="text-xs font-light text-black/50 hover:text-black transition-colors">
              Software Development
            </button>
            <button className="text-xs font-light text-black/50 hover:text-black transition-colors">
              Customer Success
            </button>
          </div>
        </div>

        {/* Articles Slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pl-6 md:pl-[calc((100vw-72rem)/2+1.5rem)]">
            {/* Article Card 1 */}
            <Link
              href="/insight/1"
              className="flex-shrink-0 w-[500px] space-y-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[450px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Article Image 1
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-black/50 font-light">
                  <span>Published in Insight Jan 30, 2021</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Practice making User Flow
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  In this article, we'll cover how to create user flows
                </p>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link
              href="/insight/2"
              className="flex-shrink-0 w-[500px] space-y-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[450px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Article Image 2
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-black/50 font-light">
                  <span>Published in Insight Jan 30, 2021</span>
                  <span>by : Albert Sans</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Overview of the Design Principles
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  What are Design Principles?... To understand design
                  principles, we first discuss the principles.
                </p>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link
              href="/insight/1"
              className="flex-shrink-0 w-[500px] space-y-4 pr-6 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[450px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Article Image 3
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-black/50 font-light">
                  <span>Published in Insight Jan 30, 2021</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight group-hover:text-accent transition-colors">
                  Using Grid in website design
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  Andi: "What's the grid like?" Toni: "Like below"
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
