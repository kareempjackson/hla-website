import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-bg">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2 md:py-16 w-full">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-cream">
            Higher Level Accounting
          </h1>
          <p className="mt-3 text-2xl md:text-3xl font-medium text-white/90">
            Financial clarity for growth-focused businesses
          </p>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
            Higher Level Accounting offers accrual-based bookkeeping and
            controller-level insights for SaaS companies, agencies, and highly
            regulated industries. We help you trust your numbers so you can
            raise capital, scale smart and stay compliant
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button size="md" className="rounded-pill focus-visible:ring-0">
              Schedule Your Consultation
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-surface/80">
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
