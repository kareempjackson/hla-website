import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

interface WhyGreatSectionData {
  title?: string;
  problems?: string[];
  description?: string;
  consequencesTitle?: string;
  consequences?: string[];
  closingText?: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export default function WhyGreat({ data }: { data?: WhyGreatSectionData }) {
  return (
    <section className="relative bg-cream min-h-screen flex items-center py-12 md:py-12 pt-20 overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[20%] bg-black/10"></div>
        <div className="absolute top-[20%] left-0 w-[28%] h-px bg-black/10"></div>
        <div className="absolute top-[20%] left-[28%] w-px h-[35%] bg-black/10"></div>
        <div className="absolute top-[55%] left-[28%] w-[42%] h-px bg-black/10"></div>
        <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/10"></div>
        <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/10"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[25%] bg-black/8"></div>
        <div className="absolute top-[25%] right-[15%] w-[15%] h-px bg-black/8"></div>
        <div className="absolute top-[25%] right-[15%] w-px h-[30%] bg-black/8"></div>
        <div className="absolute top-[55%] right-[30%] w-[15%] h-px bg-black/8"></div>
        <div className="absolute top-[55%] right-[30%] w-px h-[45%] bg-black/8"></div>
        <div className="absolute bottom-0 left-0 w-[70%] h-px bg-black/8"></div>

        {/* Pattern 3 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[12%] w-px h-[22%] bg-black/6"></div>
        <div className="absolute top-[22%] left-[12%] w-[25%] h-px bg-black/6"></div>
        <div className="absolute top-[22%] left-[37%] w-px h-[28%] bg-black/6"></div>
        <div className="absolute top-[50%] left-[37%] w-[30%] h-px bg-black/6"></div>
        <div className="absolute top-[50%] left-[67%] w-px h-[50%] bg-black/6"></div>
        <div className="absolute bottom-0 left-[67%] w-[33%] h-px bg-black/6"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[12%] w-px h-[18%] bg-black/7"></div>
        <div className="absolute top-[18%] right-[20%] w-[8%] h-px bg-black/7"></div>
        <div className="absolute top-[18%] right-[20%] w-px h-[32%] bg-black/7"></div>
        <div className="absolute top-[50%] right-[8%] w-[12%] h-px bg-black/7"></div>
        <div className="absolute top-[50%] right-[8%] w-px h-[50%] bg-black/7"></div>
        <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

        {/* Pattern 5 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[45%] w-px h-[15%] bg-black/5"></div>
        <div className="absolute top-[15%] left-[15%] w-[30%] h-px bg-black/5"></div>
        <div className="absolute top-[15%] left-[15%] w-px h-[58%] bg-black/5"></div>
        <div className="absolute top-[73%] left-[0] w-[15%] h-px bg-black/5"></div>
        <div className="absolute top-[73%] left-0 w-px h-[27%] bg-black/5"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[25%] w-px h-[15%] bg-black/6"></div>
        <div className="absolute top-[15%] right-[45%] w-[20%] h-px bg-black/6"></div>
        <div className="absolute top-[15%] right-[45%] w-px h-[28%] bg-black/6"></div>
        <div className="absolute top-[43%] right-[55%] w-[10%] h-px bg-black/6"></div>
        <div className="absolute top-[43%] right-[55%] w-px h-[57%] bg-black/6"></div>
        <div className="absolute bottom-0 left-0 w-[45%] h-px bg-black/6"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 w-full relative z-10">
        {/* Left content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-brand-deep leading-tight tracking-tight">
            {data?.title || "Your numbers might be lying"}
          </h2>
          <div className="mt-4 space-y-1 text-xs md:text-sm text-brand-deep/70 font-light">
            {(data?.problems?.length ? data.problems : undefined)?.map(
              (problem, idx) => (
                <p key={idx}>{problem}</p>
              )
            ) || (
              <>
            <p>Revenue reports not matching what's in the bank?</p>
            <p>"Profit" disappearing right after you pay your vendors?</p>
            <p>Your books are "done" but things still feel out of whack</p>
              </>
            )}
          </div>

          <p className="mt-5 text-xs md:text-sm text-brand-deep font-light">
            {data?.description ||
              "Bad numbers can quickly tank your next move and most businesses don't see it coming until it's too late."}
          </p>

          <div className="mt-5">
            <p className="text-xs md:text-sm text-brand-deep/70 mb-2.5 font-light">
              {data?.consequencesTitle ||
                "When revenue and costs don't line up, you make bad calls:"}
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-brand-deep/70 font-light">
              {(data?.consequences?.length
                ? data.consequences
                : ["Hire too soon", "Underprice services", "Spend cash you don't really have"]
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
              </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-xs md:text-sm text-brand-deep/70 leading-relaxed font-light">
            {data?.closingText ||
              "The cost isn't just money but maybe a fine you never saw coming, a license you can't get back, or an investor walking away before you've even finished your pitch."}
          </p>
        </div>

        {/* Right image */}
        <div className="relative max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
            {data?.image?.asset ? (
              <Image
                src={urlFor(data.image).width(900).height(1200).url()}
                alt={data.image.alt || data.title || "Why Great"}
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            ) : (
            <Image
              src="/images/image/annie-spratt-tuJ3tXSayco-unsplash.jpg"
              alt="Team collaboration"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
