import Navbar from "../../components/site/navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Image from "next/image";

export default function ContactPage() {
  // Structured data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Higher Level Accounting",
    description:
      "Contact Higher Level Accounting for strategic accounting services",
    url: "https://higherlevelacct.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Higher Level Accounting",
      telephone: "61 2 6724 3203",
      email: "info@higherlevelacct.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7th floor, Wentworth Chambers, 180 Phillip Street",
        addressLocality: "Sydney",
        addressCountry: "AU",
      },
    },
  };

  return (
    <div className="relative bg-white">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar sticky={true} />

      {/* Hero Section - extends behind navbar */}
      <section className="relative min-h-[50vh] flex items-center bg-bg -mt-20 pt-20">
        {/* Decorative Stepped Lines - positioned absolutely to extend through navbar */}
        <div
          className="absolute inset-0 top-0 pointer-events-none overflow-visible z-[150]"
          style={{ marginTop: "-5rem" }}
        >
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
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/5"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/5"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/5"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/5"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/5"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-cream mb-6 leading-tight">
              Contact Us
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-xl">
              Thank you for your interest in Higher Level Accounting. Please
              fill out the form below to ask a question or report a technical
              problem.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Image and Form */}
      <section className="relative bg-teal-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[450px] lg:h-[550px]">
                <Image
                  src="/images/image/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right - Contact Info and Form */}
            <div className="space-y-10 order-1 lg:order-2">
              {/* Office Location and Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Office Location */}
                <div>
                  <h2 className="text-base font-light text-black/50 uppercase tracking-wider mb-3">
                    Office Location
                  </h2>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Our office is located on the 7th floor of Wentworth Chambers
                    at 180 Phillip Street, Sydney.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-base font-light text-black/50 uppercase tracking-wider mb-3">
                    Contact
                  </h2>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-black/50 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="text-sm text-black/70 font-light">
                        61 2 6724 3203
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-black/50 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm text-black/70 font-light">
                        info@higherlevelacct.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get in touch Form */}
              <div>
                <h2 className="text-base font-light text-black/50 uppercase tracking-wider mb-6">
                  Get in touch
                </h2>
                <form className="space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name Here"
                      className="w-full h-11 px-4 text-xs font-light bg-white border-0 rounded-full focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-black/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full h-11 px-4 text-xs font-light bg-white border-0 rounded-full focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-black/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 text-xs font-light bg-white border-0 rounded-sm focus:ring-1 focus:ring-accent/30 resize-none transition-all focus:outline-none placeholder:text-black/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      size="sm"
                      className="rounded-full focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-9 px-8 text-xs font-light tracking-wide transition-all"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
