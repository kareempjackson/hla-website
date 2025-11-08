import Image from "next/image";
import { Button } from "../ui/button";

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

export default function WhyGreat() {
  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-12 pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 w-full">
        {/* Left content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-brand-deep leading-tight tracking-tight">
            Your numbers might be lying
          </h2>
          <div className="mt-4 space-y-1 text-xs md:text-sm text-brand-deep/70 font-light">
            <p>Revenue reports not matching what's in the bank?</p>
            <p>"Profit" disappearing right after you pay your vendors?</p>
            <p>Your books are "done" but things still feel out of whack</p>
          </div>

          <p className="mt-5 text-xs md:text-sm text-brand-deep font-light">
            Bad numbers can quickly tank your next move and most businesses
            don't see it coming until it's too late.
          </p>

          <div className="mt-5">
            <p className="text-xs md:text-sm text-brand-deep/70 mb-2.5 font-light">
              When revenue and costs don't line up, you make bad calls:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-brand-deep/70 font-light">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Hire too soon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Underprice services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Spend cash you don't really have</span>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-xs md:text-sm text-brand-deep/70 leading-relaxed font-light">
            The cost isn't just money but maybe a fine you never saw coming, a
            license you can't get back, or an investor walking away before
            you've even finished your pitch.
          </p>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/window.svg"
              alt="Team collaboration"
              width={700}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
