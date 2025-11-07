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

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 .8-.6 1.5-1.4 1.5A16.5 16.5 0 0 1 5 5C5 4.2 5.7 3.5 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth={1.2}
      />
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m4 4 16 16M20 4 4 20" stroke="currentColor" strokeWidth={1.4} />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth={1.2} />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8h2V5h-2c-2 0-3 1.3-3 3.2V11H9v3h2v5h3v-5h2.2l.3-3H14V8.9C14 8.4 14.4 8 15 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white/90">
      {/* top row */}
      <div className="mx-auto max-w-6xl px-6 py-16">
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
            <Link href="#about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#insight"
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
        <div className="flex items-center justify-between py-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-extralight text-cream flex items-center gap-3">
            Client Portal
            <ArrowUpRight className="size-7 text-cream" />
          </h2>
          <div className="hidden items-center gap-4 md:flex">
            <XIcon className="size-5 text-white/60 hover:text-white/80 transition-colors cursor-pointer" />
            <InstagramIcon className="size-5 text-white/60 hover:text-white/80 transition-colors cursor-pointer" />
            <FacebookIcon className="size-5 text-white/60 hover:text-white/80 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* full-width divider */}
      <div className="w-full border-t border-white/10" />

      {/* columns */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
            <h3 className="text-white/70 text-sm font-light mb-4">Services</h3>
            <ul className="space-y-2.5 text-white/60 text-xs font-light">
              <li>Full Service Accounting</li>
              <li>Offers CEOS</li>
              <li>Business Services</li>
              <li>Tax Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white/70 text-sm font-light mb-4">Contacts</h3>
            <ul className="space-y-3 text-white/60 text-xs font-light">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="size-4" /> 61 2 6724 3203
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="size-4" /> Info@higherlevelacct.com
              </li>
              <li className="flex items-center gap-2.5">
                <PinIcon className="size-4" /> 7th floor Wentworth Chambers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
