import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CALENDLY_URL } from "@/lib/calendly";

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  heroMedia?: {
    mediaType?: "image" | "video";
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
    video?: {
      asset?: {
        url?: string;
      };
    };
    posterImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
      alt?: string;
    };
  };
  heroImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export default function Hero({ data }: { data?: HeroData }) {
  const mediaType = data?.heroMedia?.mediaType;
  const videoUrl = data?.heroMedia?.video?.asset?.url;
  const isHeroVideo = mediaType === "video" && !!videoUrl;
  const posterUrl = data?.heroMedia?.posterImage
    ? urlFor(data.heroMedia.posterImage).width(1200).height(900).url()
    : undefined;
  const imageSource = data?.heroMedia?.image || data?.heroImage;

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

      <div
        className={`mx-auto grid grid-cols-1 items-center gap-10 px-6 py-8 w-full relative z-10 md:py-12 ${
          isHeroVideo
            ? "max-w-7xl md:grid-cols-[1fr_1.25fr] lg:grid-cols-[1fr_1.35fr]"
            : "max-w-6xl md:grid-cols-2"
        }`}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-cream tracking-tight">
            {data?.title || "Higher Level Accounting"}
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-light text-white/80">
            {data?.subtitle ||
              "Financial clarity for growth-focused businesses"}
          </p>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed font-light">
            {data?.description ||
              "Higher Level Accounting offers accrual-based bookkeeping and controller-level insights for SaaS companies, agencies, and highly regulated industries. We help you trust your numbers so you can raise capital, scale smart and stay compliant"}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 bg-accent text-black hover:brightness-95 active:brightness-90 h-10 px-7 text-xs font-light tracking-wide"
            >
              {data?.ctaText || "Schedule Your Consultation"}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className={`relative overflow-hidden rounded-sm ${
              mediaType === "video" && videoUrl
                ? "w-full aspect-video bg-transparent"
                : "bg-surface/80"
            }`}
          >
            {mediaType === "video" && videoUrl ? (
              <video
                src={videoUrl}
                poster={posterUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : imageSource ? (
              <Image
                src={urlFor(imageSource).width(1200).height(900).url()}
                alt={imageSource.alt || "Team collaboration"}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            ) : (
              <Image
                src="/images/image/morgan-housel-PcDGGex9-jA-unsplash.jpg"
                alt="Team collaboration"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
