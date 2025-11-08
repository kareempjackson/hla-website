import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-bg overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute top-[24%] left-[10%] w-[8%] h-px bg-white/5"></div>
        <div className="absolute top-[24%] left-[10%] w-px h-[32%] bg-white/5"></div>
        <div className="absolute top-[56%] left-[2%] w-[8%] h-px bg-white/5"></div>
        <div className="absolute top-[56%] left-[2%] w-px h-[44%] bg-white/5"></div>
        <div className="absolute bottom-0 left-0 w-[2%] h-px bg-white/5"></div>

        {/* Pattern 11 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[8%] w-px h-[22%] bg-white/7"></div>
        <div className="absolute top-[22%] right-[22%] w-[14%] h-px bg-white/7"></div>
        <div className="absolute top-[22%] right-[22%] w-px h-[30%] bg-white/7"></div>
        <div className="absolute top-[52%] right-[22%] w-[10%] h-px bg-white/7"></div>
        <div className="absolute top-[52%] right-[12%] w-px h-[48%] bg-white/7"></div>
        <div className="absolute bottom-0 right-[12%] w-[12%] h-px bg-white/7"></div>

        {/* Pattern 12 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[62%] w-px h-[32%] bg-white/8"></div>
        <div className="absolute top-[32%] left-[62%] w-[23%] h-px bg-white/8"></div>
        <div className="absolute top-[32%] right-[15%] w-px h-[28%] bg-white/8"></div>
        <div className="absolute top-[60%] right-[15%] w-[15%] h-px bg-white/8"></div>
        <div className="absolute top-[60%] right-0 w-px h-[40%] bg-white/8"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-12 w-full relative z-10">
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
          <div className="relative overflow-hidden rounded-sm bg-surface/80">
            <Image
              src="/images/image/morgan-housel-PcDGGex9-jA-unsplash.jpg"
              alt="Team collaboration"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
