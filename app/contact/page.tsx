import Navbar from "../../components/site/navbar";
import { CALENDLY_URL } from "@/lib/calendly";

export default function ContactPage() {
  // Structured data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Higher Level Accounting",
    description:
      "Contact Higher Level Accounting for strategic accounting services",
    url: "https://higherlevelaccounting.co/contact",
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
              Thank you for your interest in Higher Level Accounting. Schedule a
              quick call and we’ll point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl w-full px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-bg mb-6 leading-tight">
            Book a call
                  </h2>
          <p className="text-sm md:text-base text-black/60 font-light max-w-2xl mx-auto mb-10">
            Choose a time that works for you and we’ll learn about your business
            and goals.
                      </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 bg-accent text-black hover:brightness-95 active:brightness-90 h-11 px-7 text-sm"
          >
            Schedule a fit call
          </a>
        </div>
      </section>
    </div>
  );
}
