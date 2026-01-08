import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const helpItems = [
  {
    id: 1,
    image: "/images/image/austin-distel-744oGeqpxPQ-unsplash.jpg",
    title: "SaaS & Subscription Businesses",
    description:
      "Get investor-ready financials, accurate revenue recognition, and KPI tracking that actually matches your operations. Know your runway, your churn, and your margins.",
  },
  {
    id: 2,
    image: "/images/image/kaffie-co-DJb2MdMuzbU-unsplash.jpg",
    title: "Marketing & Creative Agencies",
    description:
      "See which projects are really profitable, keep cash flow predictable, and make scaling decisions with confidence.",
  },
  {
    id: 3,
    image: "/images/image/jin-woo-lee-oNN7crvs1mY-unsplash.jpg",
    title: "Cannabis & Hemp Retail",
    description:
      "Stay compliant, avoid costly fines, and track profitability by location or product without drowning in the complexities of 280E.",
  },
];

type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
};

interface HowCanWeHelpSectionData {
  title?: string;
  items?: Array<{
    image?: SanityImage;
    title?: string;
    description?: string;
  }>;
  footerTitle?: string;
  footerDescription?: string;
}

export default function HowCanWeHelp({
  data,
}: {
  data?: HowCanWeHelpSectionData;
}) {
  const items: Array<{
    id: number;
    title: string;
    description: string;
    imageString?: string;
    imageSanity?: SanityImage;
  }> =
    data?.items && data.items.length > 0
      ? data.items.map((it, idx) => ({
          id: idx + 1,
          title: it.title || "",
          description: it.description || "",
          imageSanity: it.image,
        }))
      : helpItems.map((it) => ({
          id: it.id,
          title: it.title,
          description: it.description,
          imageString: it.image,
        }));

  return (
    <section className="relative bg-white min-h-screen flex items-center py-12 md:py-12 pt-20 overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[26%] bg-black/11"></div>
        <div className="absolute top-[26%] left-0 w-[35%] h-px bg-black/11"></div>
        <div className="absolute top-[26%] left-[35%] w-px h-[24%] bg-black/11"></div>
        <div className="absolute top-[50%] left-[35%] w-[30%] h-px bg-black/11"></div>
        <div className="absolute top-[50%] left-[65%] w-px h-[50%] bg-black/11"></div>
        <div className="absolute bottom-0 left-[65%] w-[35%] h-px bg-black/11"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[32%] bg-black/9"></div>
        <div className="absolute top-[32%] right-[18%] w-[18%] h-px bg-black/9"></div>
        <div className="absolute top-[32%] right-[18%] w-px h-[28%] bg-black/9"></div>
        <div className="absolute top-[60%] right-[36%] w-[18%] h-px bg-black/9"></div>
        <div className="absolute top-[60%] right-[36%] w-px h-[40%] bg-black/9"></div>
        <div className="absolute bottom-0 left-0 w-[64%] h-px bg-black/9"></div>

        {/* Pattern 3 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[14%] w-px h-[22%] bg-black/7"></div>
        <div className="absolute top-[22%] left-[14%] w-[24%] h-px bg-black/7"></div>
        <div className="absolute top-[22%] left-[38%] w-px h-[26%] bg-black/7"></div>
        <div className="absolute top-[48%] left-[38%] w-[28%] h-px bg-black/7"></div>
        <div className="absolute top-[48%] left-[66%] w-px h-[52%] bg-black/7"></div>
        <div className="absolute bottom-0 left-[66%] w-[34%] h-px bg-black/7"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/10"></div>
        <div className="absolute top-[20%] right-[24%] w-[12%] h-px bg-black/10"></div>
        <div className="absolute top-[20%] right-[24%] w-px h-[30%] bg-black/10"></div>
        <div className="absolute top-[50%] right-[12%] w-[12%] h-px bg-black/10"></div>
        <div className="absolute top-[50%] right-[12%] w-px h-[50%] bg-black/10"></div>
        <div className="absolute bottom-0 right-[12%] w-[12%] h-px bg-black/10"></div>

        {/* Pattern 5 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[25%] w-px h-[18%] bg-black/6"></div>
        <div className="absolute top-[18%] left-[10%] w-[15%] h-px bg-black/6"></div>
        <div className="absolute top-[18%] left-[10%] w-px h-[46%] bg-black/6"></div>
        <div className="absolute top-[64%] left-[0] w-[10%] h-px bg-black/6"></div>
        <div className="absolute top-[64%] left-0 w-px h-[36%] bg-black/6"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[28%] w-px h-[18%] bg-black/8"></div>
        <div className="absolute top-[18%] right-[46%] w-[18%] h-px bg-black/8"></div>
        <div className="absolute top-[18%] right-[46%] w-px h-[28%] bg-black/8"></div>
        <div className="absolute top-[46%] right-[58%] w-[12%] h-px bg-black/8"></div>
        <div className="absolute top-[46%] right-[58%] w-px h-[54%] bg-black/8"></div>
        <div className="absolute bottom-0 left-0 w-[42%] h-px bg-black/8"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black tracking-tight">
            {data?.title || "Industry focus"}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="mb-3 overflow-hidden rounded-sm">
                {item.imageSanity?.asset ? (
                  <Image
                    src={urlFor(item.imageSanity).width(800).height(700).url()}
                    alt={item.imageSanity.alt || item.title}
                    width={400}
                    height={350}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : item.imageString ? (
                <Image
                    src={item.imageString}
                  alt={item.title}
                  width={400}
                  height={350}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                ) : null}
              </div>

              {/* Title */}
              <h3 className="text-base font-light text-black group-hover:text-black/70 transition-colors leading-snug mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-black/60 leading-relaxed font-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 max-w-3xl">
          <h4 className="text-base font-light text-black mb-2">
            {data?.footerTitle || "Not in these industries?"}
          </h4>
          <p className="text-sm text-black/60 leading-relaxed font-light">
            {data?.footerDescription ||
              "No problem. The same clarity, compliance, and strategic guidance apply to any business that values accurate numbers and smart growth."}
          </p>
        </div>
      </div>
    </section>
  );
}
