import Image from "next/image";
import { Button } from "../ui/button";
import { urlFor } from "@/sanity/lib/image";

interface WhatWeDoSectionData {
  label?: string;
  title?: string;
  description1?: string;
  description2?: string;
  ctaButton1?: string;
  ctaButton2?: string;
  servicesTitle?: string;
  services?: Array<{
    title?: string;
    description?: string;
  }>;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export default function WhatWeDo({ data }: { data?: WhatWeDoSectionData }) {
  return (
    <section className="relative bg-white min-h-screen flex items-center py-12 md:py-12 pt-32 overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[22%] bg-black/12"></div>
        <div className="absolute top-[22%] left-0 w-[30%] h-px bg-black/12"></div>
        <div className="absolute top-[22%] left-[30%] w-px h-[28%] bg-black/12"></div>
        <div className="absolute top-[50%] left-[30%] w-[32%] h-px bg-black/12"></div>
        <div className="absolute top-[50%] left-[62%] w-px h-[50%] bg-black/12"></div>
        <div className="absolute bottom-0 left-[62%] w-[38%] h-px bg-black/12"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[30%] bg-black/10"></div>
        <div className="absolute top-[30%] right-[18%] w-[18%] h-px bg-black/10"></div>
        <div className="absolute top-[30%] right-[18%] w-px h-[25%] bg-black/10"></div>
        <div className="absolute top-[55%] right-[35%] w-[17%] h-px bg-black/10"></div>
        <div className="absolute top-[55%] right-[35%] w-px h-[45%] bg-black/10"></div>
        <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/10"></div>

        {/* Pattern 3 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[18%] w-px h-[18%] bg-black/8"></div>
        <div className="absolute top-[18%] left-[18%] w-[22%] h-px bg-black/8"></div>
        <div className="absolute top-[18%] left-[40%] w-px h-[32%] bg-black/8"></div>
        <div className="absolute top-[50%] left-[40%] w-[28%] h-px bg-black/8"></div>
        <div className="absolute top-[50%] left-[68%] w-px h-[50%] bg-black/8"></div>
        <div className="absolute bottom-0 left-[68%] w-[32%] h-px bg-black/8"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[10%] w-px h-[20%] bg-black/7"></div>
        <div className="absolute top-[20%] right-[22%] w-[12%] h-px bg-black/7"></div>
        <div className="absolute top-[20%] right-[22%] w-px h-[40%] bg-black/7"></div>
        <div className="absolute top-[60%] right-[10%] w-[12%] h-px bg-black/7"></div>
        <div className="absolute top-[60%] right-[10%] w-px h-[40%] bg-black/7"></div>
        <div className="absolute bottom-0 right-[10%] w-[10%] h-px bg-black/7"></div>

        {/* Pattern 5 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[35%] w-px h-[18%] bg-black/6"></div>
        <div className="absolute top-[18%] left-[10%] w-[25%] h-px bg-black/6"></div>
        <div className="absolute top-[18%] left-[10%] w-px h-[47%] bg-black/6"></div>
        <div className="absolute top-[65%] left-[0] w-[10%] h-px bg-black/6"></div>
        <div className="absolute top-[65%] left-0 w-px h-[35%] bg-black/6"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[24%] w-px h-[24%] bg-black/9"></div>
        <div className="absolute top-[24%] right-[44%] w-[20%] h-px bg-black/9"></div>
        <div className="absolute top-[24%] right-[44%] w-px h-[30%] bg-black/9"></div>
        <div className="absolute top-[54%] right-[56%] w-[12%] h-px bg-black/9"></div>
        <div className="absolute top-[54%] right-[56%] w-px h-[46%] bg-black/9"></div>
        <div className="absolute bottom-0 left-0 w-[44%] h-px bg-black/9"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 w-full relative z-10 pt-8">
        {/* Left content */}
        <div className="mt-8">
          <p className="text-xs font-light uppercase tracking-wider text-black/50 mb-2.5">
            {data?.label || "What we do"}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black leading-tight tracking-tight mb-4">
            {data?.title || "You can't scale with unreliable books. But you can with us"}
          </h2>
          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light mb-2.5">
            {data?.description1 ||
              "Higher Level Accounting focuses on the work that drives growth, compliance, and confidence."}
          </p>
          <p className="text-xs md:text-sm text-black/60 leading-relaxed font-light mb-5">
            {data?.description2 ||
              "We're not just bookkeepers. We're strategic partners who help our clients grow by providing accrual-based bookkeeping, controller-level insights, and reports you can actually run a business on."}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <Button
              size="sm"
              className="rounded-pill bg-accent text-black hover:brightness-95 focus-visible:ring-0 h-10 px-7 text-xs font-light tracking-wide"
            >
              {data?.ctaButton1 || "Contact US"}
            </Button>
            <Button
              size="sm"
              className="rounded-pill bg-black text-white hover:bg-black/90 border-0 focus-visible:ring-0 h-10 px-7 text-xs font-light tracking-wide"
            >
              {data?.ctaButton2 || "Learn More"}
            </Button>
          </div>

          <h3 className="text-sm font-light text-black mb-4">
            {data?.servicesTitle || "Our Services"}
          </h3>

          {/* Service cards in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(data?.services?.length
              ? data.services
              : [
                  {
                    title: "Accrual-Based Bookkeeping",
                    description:
                      "Get books that match economic reality, not just cash deposits. See true revenue, margins, and monthly performance.",
                  },
                  {
                    title: "Controller-Level Insight",
                    description:
                      "Understand what's driving profit (or killing it) and get expert eyes on your financials so that nothing slips through.",
                  },
                  {
                    title: "Compliance & Risk Management",
                    description:
                      "Stay on the right side of industry regulations, and investor expectations. Avoid fines, delays, and license headaches.",
                  },
                ]
            ).map((service, idx) => (
              <div key={idx}>
              <h4 className="text-sm font-light text-black mb-1.5">
                  {service.title}
              </h4>
              <p className="text-xs text-black/60 leading-relaxed font-light">
                  {service.description}
              </p>
            </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative max-w-sm mx-auto md:mx-0 mt-8">
          <div className="relative overflow-hidden rounded-sm">
            {data?.image?.asset ? (
              <Image
                src={urlFor(data.image).width(900).height(1100).url()}
                alt={data.image.alt || data.title || "What We Do"}
                width={450}
                height={550}
                className="h-auto w-full object-cover"
              />
            ) : (
            <Image
              src="/images/image/alexander-grey-tn57JI3CewI-unsplash.jpg"
              alt="Team collaboration"
              width={450}
              height={550}
              className="h-auto w-full object-cover"
            />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
