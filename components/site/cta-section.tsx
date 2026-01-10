import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";

interface CTAData {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({ data }: { data?: CTAData }) {
  const href = data?.buttonLink?.trim() ? data.buttonLink : CALENDLY_URL;
  const isExternal = href.startsWith("http");

  return (
    <section className="relative bg-bg py-24 min-h-screen flex items-center overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[28%] bg-white/12"></div>
        <div className="absolute top-[28%] left-0 w-[32%] h-px bg-white/12"></div>
        <div className="absolute top-[28%] left-[32%] w-px h-[30%] bg-white/12"></div>
        <div className="absolute top-[58%] left-[32%] w-[28%] h-px bg-white/12"></div>
        <div className="absolute top-[58%] left-[60%] w-px h-[42%] bg-white/12"></div>
        <div className="absolute bottom-0 left-[60%] w-[40%] h-px bg-white/12"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[32%] bg-white/10"></div>
        <div className="absolute top-[32%] right-[16%] w-[16%] h-px bg-white/10"></div>
        <div className="absolute top-[32%] right-[16%] w-px h-[28%] bg-white/10"></div>
        <div className="absolute top-[60%] right-[32%] w-[16%] h-px bg-white/10"></div>
        <div className="absolute top-[60%] right-[32%] w-px h-[40%] bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-[68%] h-px bg-white/10"></div>

        {/* Pattern 3 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[18%] w-px h-[22%] bg-white/8"></div>
        <div className="absolute top-[22%] left-[18%] w-[26%] h-px bg-white/8"></div>
        <div className="absolute top-[22%] left-[44%] w-px h-[26%] bg-white/8"></div>
        <div className="absolute top-[48%] left-[44%] w-[24%] h-px bg-white/8"></div>
        <div className="absolute top-[48%] left-[68%] w-px h-[52%] bg-white/8"></div>
        <div className="absolute bottom-0 left-[68%] w-[32%] h-px bg-white/8"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[10%] w-px h-[26%] bg-white/11"></div>
        <div className="absolute top-[26%] right-[22%] w-[12%] h-px bg-white/11"></div>
        <div className="absolute top-[26%] right-[22%] w-px h-[32%] bg-white/11"></div>
        <div className="absolute top-[58%] right-[10%] w-[12%] h-px bg-white/11"></div>
        <div className="absolute top-[58%] right-[10%] w-px h-[42%] bg-white/11"></div>
        <div className="absolute bottom-0 right-[10%] w-[10%] h-px bg-white/11"></div>

        {/* Pattern 5 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[30%] w-px h-[20%] bg-white/7"></div>
        <div className="absolute top-[20%] left-[12%] w-[18%] h-px bg-white/7"></div>
        <div className="absolute top-[20%] left-[12%] w-px h-[52%] bg-white/7"></div>
        <div className="absolute top-[72%] left-0 w-[12%] h-px bg-white/7"></div>
        <div className="absolute top-[72%] left-0 w-px h-[28%] bg-white/7"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[28%] w-px h-[24%] bg-white/9"></div>
        <div className="absolute top-[24%] right-[46%] w-[18%] h-px bg-white/9"></div>
        <div className="absolute top-[24%] right-[46%] w-px h-[30%] bg-white/9"></div>
        <div className="absolute top-[54%] right-[58%] w-[12%] h-px bg-white/9"></div>
        <div className="absolute top-[54%] right-[58%] w-px h-[46%] bg-white/9"></div>
        <div className="absolute bottom-0 left-0 w-[42%] h-px bg-white/9"></div>

        {/* Pattern 7 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[8%] w-px h-[16%] bg-white/5"></div>
        <div className="absolute top-[16%] left-[8%] w-[16%] h-px bg-white/5"></div>
        <div className="absolute top-[16%] left-[24%] w-px h-[24%] bg-white/5"></div>
        <div className="absolute top-[40%] left-[24%] w-[20%] h-px bg-white/5"></div>
        <div className="absolute top-[40%] left-[44%] w-px h-[60%] bg-white/5"></div>
        <div className="absolute bottom-0 left-[44%] w-[56%] h-px bg-white/5"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center w-full relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-cream mb-6 tracking-tight leading-tight">
          {data?.title || "Running blind is a risk you can't afford"}
        </h2>
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center px-7 py-3 text-xs font-light text-bg bg-accent rounded-full hover:bg-accent/90 transition-colors tracking-wide"
        >
          {data?.buttonText || "Schedule Your Consultation"}
        </Link>
      </div>
    </section>
  );
}
