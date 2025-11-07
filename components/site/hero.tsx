import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-bg">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-12 w-full">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-cream tracking-tight">
            Higher Level Accounting
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-light text-white/80">
            Financial clarity for growth-focused businesses
          </p>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed font-light">
            Higher Level Accounting offers accrual-based bookkeeping and
            controller-level insights for SaaS companies, agencies, and highly
            regulated industries. We help you trust your numbers so you can
            raise capital, scale smart and stay compliant
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Button
              size="md"
              className="rounded-pill focus-visible:ring-0 h-10 px-7 text-xs font-light tracking-wide"
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-surface/80">
            <Image
              src="/window.svg"
              alt="Team collaboration"
              width={780}
              height={560}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
