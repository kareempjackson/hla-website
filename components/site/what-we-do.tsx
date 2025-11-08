import Image from "next/image";
import { Button } from "../ui/button";

export default function WhatWeDo() {
  return (
    <section className="bg-white min-h-screen flex items-center py-12 md:py-12 pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 w-full">
        {/* Left content */}
        <div>
          <p className="text-xs font-light uppercase tracking-wider text-black/50 mb-2.5">
            What we do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black leading-tight tracking-tight mb-4">
            You can't scale with unreliable books. But you can with us
          </h2>
          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light mb-2.5">
            Higher Level Accounting focuses on the work that drives growth,
            compliance, and confidence.
          </p>
          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light mb-5">
            We're not just bookkeepers. We're strategic partners who help our
            clients grow by providing accrual-based bookkeeping,
            controller-level insights, and reports you can actually run a
            business on.
          </p>
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <Button
              size="sm"
              className="rounded-pill bg-accent text-black hover:brightness-95 focus-visible:ring-0 h-10 px-7 text-xs font-light tracking-wide"
            >
              Contact US
            </Button>
            <Button
              size="sm"
              className="rounded-pill bg-black text-white hover:bg-black/90 border-0 focus-visible:ring-0 h-10 px-7 text-xs font-light tracking-wide"
            >
              Learn More
            </Button>
          </div>

          <h3 className="text-sm font-light text-black mb-4">Our Services</h3>

          {/* Service cards in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h4 className="text-sm font-light text-black mb-1.5">
                Accrual-Based Bookkeeping
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light">
                Get books that match economic reality, not just cash deposits.
                See true revenue, margins, and monthly performance.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-light text-black mb-1.5">
                Controller-Level Insight
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light">
                Understand what's driving profit (or killing it) and get expert
                eyes on your financials so that nothing slips through.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-light text-black mb-1.5">
                Compliance & Risk Management
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light">
                Stay on the right side of industry regulations, and investor
                expectations. Avoid fines, delays, and license headaches.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative max-w-lg mx-auto md:mx-0">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/window.svg"
              alt="Team collaboration"
              width={600}
              height={750}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
