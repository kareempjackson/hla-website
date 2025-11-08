import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";

export default function InsightsPage() {
  return (
    <div className="relative bg-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        id="insights-hero"
        className="relative min-h-[50vh] flex items-center pt-20 bg-bg"
      >
        <div className="mx-auto max-w-6xl w-full px-6 py-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
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
          </div>
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
            <div className="flex gap-5">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 1</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
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
            </div>

            {/* Blog Post Card 2 */}
            <div className="flex gap-5">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 2</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
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
            </div>

            {/* Blog Post Card 3 */}
            <div className="flex gap-5">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 3</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
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
            </div>

            {/* Blog Post Card 4 */}
            <div className="flex gap-5">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 w-[200px] h-[200px] flex-shrink-0">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">Post 4</p>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
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
            </div>
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
            <div className="flex-shrink-0 w-[500px] space-y-4">
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
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
                  Practice making User Flow
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  In this article, we'll cover how to create user flows
                </p>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="flex-shrink-0 w-[500px] space-y-4">
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
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
                  Overview of the Design Principles
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  What are Design Principles?... To understand design
                  principles, we first discuss the principles.
                </p>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="flex-shrink-0 w-[500px] space-y-4 pr-6">
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
                <h3 className="text-xl sm:text-2xl font-extralight text-black leading-tight">
                  Using Grid in website design
                </h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  Andi: "What's the grid like?" Toni: "Like below"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
