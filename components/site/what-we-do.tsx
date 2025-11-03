import Image from "next/image";
import { Button } from "../ui/button";

export default function WhatWeDo() {
  return (
    <section className="bg-white min-h-screen flex items-center py-12 md:py-16 pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 w-full">
        {/* Left content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-3">
            What we do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
            You can't scale with unreliable books. But you can with us
          </h2>
          <p className="text-sm md:text-base text-black/70 leading-relaxed mb-3">
            Higher Level Accounting focuses on the work that drives growth,
            compliance, and confidence.
          </p>
          <p className="text-sm md:text-base text-black/70 leading-relaxed mb-6">
            We're not just bookkeepers. We're strategic partners who help our
            clients grow by providing accrual-based bookkeeping,
            controller-level insights, and reports you can actually run a
            business on.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Button
              size="sm"
              className="rounded-pill bg-accent text-black hover:brightness-95 focus-visible:ring-0"
            >
              Contact US
            </Button>
            <Button
              size="sm"
              className="rounded-pill bg-black text-white hover:bg-black/90 border-0 focus-visible:ring-0"
            >
              Learn More
            </Button>
          </div>

          <h3 className="text-base font-bold text-black mb-5">Our Services</h3>

          {/* Service cards in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-bold text-black mb-2">
                Accrual-Based Bookkeeping
              </h4>
              <p className="text-xs md:text-sm text-black/60 leading-relaxed">
                Get books that match economic reality, not just cash deposits.
                See true revenue, margins, and monthly performance.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-black mb-2">
                Controller-Level Insight
              </h4>
              <p className="text-xs md:text-sm text-black/60 leading-relaxed">
                Understand what's driving profit (or killing it) and get expert
                eyes on your financials so that nothing slips through.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-black mb-2">
                Compliance & Risk Management
              </h4>
              <p className="text-xs md:text-sm text-black/60 leading-relaxed">
                Stay on the right side of industry regulations, and investor
                expectations. Avoid fines, delays, and license headaches.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative max-w-lg mx-auto md:mx-0">
          <div className="relative overflow-hidden rounded-2xl">
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
