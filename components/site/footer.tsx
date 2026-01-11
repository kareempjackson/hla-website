import Image from "next/image";
import Link from "next/link";

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 8h8v8" stroke="currentColor" strokeWidth={1.5} />
      <path d="M16 8 8 16" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3.5 6.5h17v11h-17z" stroke="currentColor" strokeWidth={1.2} />
      <path d="m4 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth={1.2} />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-6 7-11.2A7 7 0 0 0 5 9.8C5 15 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <circle
        cx="12"
        cy="9.8"
        r="2.5"
        stroke="currentColor"
        strokeWidth={1.2}
      />
    </svg>
  );
}

// Removed X/Instagram/Facebook icons per request (LinkedIn only)

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white/90">
      {/* top row */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo/logo.svg"
            alt="HLA"
            width={130}
            height={28}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(95%) sepia(13%) saturate(573%) hue-rotate(329deg) brightness(103%) contrast(95%)",
            }}
          />
          <nav className="hidden gap-6 md:flex text-white/70 text-sm font-light">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="hover:text-white transition-colors"
            >
              Insight
            </Link>
          </nav>
        </div>
      </div>

      {/* full-width divider */}
      <div className="w-full border-t border-white/10" />

      {/* client portal row */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-extralight text-cream flex items-center gap-3">
            <a
              href="https://calendly.com/af--hla/ccc"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
              aria-label="Client Portal"
            >
              Client Portal
              <ArrowUpRight className="size-7 text-cream" />
            </a>
          </h2>
          <div className="hidden items-center md:flex">
            <a
              href="https://www.linkedin.com/company/higher-level-accounting/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors text-sm font-light"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-5" />
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* full-width divider */}
      <div className="w-full border-t border-white/10" />

      {/* columns */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-3">
            <Image
              src="/images/icon/icon.png"
              alt="HLA icon"
              width={40}
              height={40}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(95%) sepia(13%) saturate(573%) hue-rotate(329deg) brightness(103%) contrast(95%)",
              }}
            />
            <p className="max-w-md text-white/60 text-xs leading-relaxed font-light">
              we aim to take care of the financial aspects of the business so
              that our clients can focus on what is most important, which is
              gaining customers and growing the business. We are specifically
              trained to implement world class accounting methods
            </p>
          </div>
          <div>
            <h3 className="text-white/70 text-sm font-light mb-4">Contacts</h3>
            <ul className="space-y-3 text-white/60 text-xs font-light">
              <li className="flex items-center gap-2.5">
                <MailIcon className="size-4" /> Info@higherlevelacct.com
              </li>
              <li className="flex items-center gap-2.5">
                <PinIcon className="size-4" /> 1930 Village Center Cir, Las
                Vegas, NV 89134
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
