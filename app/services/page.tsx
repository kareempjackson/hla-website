import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";
import { getServicesPageData } from "@/sanity/lib/servicesPageQueries";
import { urlFor } from "@/sanity/lib/image";

export default async function ServicesPage() {
  const servicesData = await getServicesPageData();
  return (
    <div className="relative bg-cream">
      <Navbar sticky={true} />

      {/* Hero Section */}
      <section
        id="services-hero"
        className="relative bg-cream py-16 md:py-20 -mt-20 pt-32 md:pt-36 overflow-hidden"
      >
        {/* Decorative Lines - Dark on cream background */}
        <div
          className="absolute inset-0 top-0 pointer-events-none z-150"
          style={{ marginTop: "-5rem" }}
        >
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          {/* Top Section - Content */}
          <div className="max-w-4xl mb-12 md:mb-16">
            {/* Label */}
            <p className="text-xs font-light uppercase tracking-wider text-black/50 mb-4">
              {servicesData?.heroSection?.label || "Our Services"}
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-black mb-6 leading-tight">
              {servicesData?.heroSection?.title ||
                "Financial clarity. Compliance without the headaches. Reports you can trust."}
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                {servicesData?.heroSection?.ctaText ||
                  "Schedule Your Consultation"}
              </Button>
            </div>
          </div>

          {/* Bottom Section - Image */}
          <div className="relative overflow-hidden rounded-sm bg-gray-300 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
            {servicesData?.heroSection?.heroImage?.asset ? (
              <img
                src={urlFor(servicesData.heroSection.heroImage).url()}
                alt={servicesData.heroSection.heroImage.alt || "Service Hero"}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Placeholder for image */
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <p className="text-gray-500 text-sm font-light">
                  Service Image Placeholder
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accrual-Based Bookkeeping Section */}
      <section
        id="services-bookkeeping"
        className="relative bg-bg py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Lines - White on dark teal background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-white/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/12"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/10"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-white/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/8"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/7"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/7"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/6"></div>

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/5"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/6"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/7"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/4"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4 md:space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight">
                {servicesData?.bookkeepingService?.title ||
                  "Accrual-Based Bookkeeping"}
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                {servicesData?.bookkeepingService?.subtitle ||
                  "Your books should reflect economic reality, not just deposits in the bank."}
              </p>

              {/* We deliver section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-white/70 font-light">
                  {servicesData?.bookkeepingService?.deliveryTitle ||
                    "We deliver:"}
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                  {(
                    servicesData?.bookkeepingService?.deliveryItems || [
                      "Monthly reconciliations across bank, credit card, merchant, and POS systems.",
                      "Revenue recognition for subscription businesses (MRR, ARR, churn).",
                      "Project profitability tracking for agencies and service firms.",
                      "Clear financial statements (P&L, balance sheet, cash flow) you can actually use.",
                    ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span>{" "}
                  {servicesData?.bookkeepingService?.outcome ||
                    "Numbers that finally match your operations, your margins, and your investor conversations."}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  {servicesData?.bookkeepingService?.ctaText ||
                    "Schedule Your Consultation"}
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {servicesData?.bookkeepingService?.image?.asset ? (
                  <img
                    src={urlFor(servicesData.bookkeepingService.image).url()}
                    alt={
                      servicesData.bookkeepingService.image.alt ||
                      "Bookkeeping Service"
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder for image */
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Team Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFO Level Service Section */}
      <section
        id="services-controller"
        className="relative bg-cream py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Lines - Dark on cream background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

          {/* Pattern 2 */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

          {/* Pattern 3 */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

          {/* Pattern 4 */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

          {/* Pattern 5 */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

          {/* Pattern 6 */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

          {/* Pattern 7 */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

          {/* Pattern 8 */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

          {/* Pattern 9 */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

          {/* Pattern 10 */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {servicesData?.controllerService?.image?.asset ? (
                  <img
                    src={urlFor(servicesData.controllerService.image).url()}
                    alt={
                      servicesData.controllerService.image.alt ||
                      "Controller Service"
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder for image */
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Controller Service Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
                {servicesData?.controllerService?.title ||
                  "Controller-Level Services"}
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-black/80 leading-relaxed font-light">
                {servicesData?.controllerService?.subtitle ||
                  "Bookkeeping gets the numbers in. Controller oversight makes sure they tell the truth."}
              </p>

              {/* We offer section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-black/70 font-light">
                  {servicesData?.controllerService?.offerTitle || "We offer:"}
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-black/60 font-light">
                  {(
                    servicesData?.controllerService?.offerItems || [
                      "Variance analysis to spot where performance doesn't align with expectations.",
                      "Cost accounting and inventory tracking for regulated industries.",
                      "Accrual adjustments for payables, deferred revenue, loans, and inter-company activity.",
                      "Internal control reminders and oversight so nothing slips through.",
                    ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-sm md:text-base text-black/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span>{" "}
                  {servicesData?.controllerService?.outcome ||
                    "Audit-ready books, investor-ready reporting, and expert insight into what's driving (or limiting) profitability."}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  {servicesData?.controllerService?.ctaText ||
                    "Schedule Your Consultation"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Risk Management Section */}
      <section
        id="services-compliance"
        className="relative bg-bg py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Lines - White on dark teal background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-white/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-white/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-white/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-white/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-white/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-white/12"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-white/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-white/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-white/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-white/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-white/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-white/10"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-white/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-white/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-white/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-white/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-white/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-white/8"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-white/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-white/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-white/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-white/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-white/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-white/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-white/7"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-white/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-white/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-white/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-white/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-white/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/7"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-white/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-white/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-white/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-white/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-white/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-white/6"></div>

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-white/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-white/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-white/5"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-white/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-white/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-white/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-white/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-white/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-white/6"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-white/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-white/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-white/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-white/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-white/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/7"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-white/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-white/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-white/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-white/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-white/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-white/4"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4 md:space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight">
                {servicesData?.complianceService?.title ||
                  "Compliance & Risk Management"}
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                {servicesData?.complianceService?.subtitle ||
                  "In regulated industries and high-growth SaaS or agency environments compliance isn't optional."}
              </p>

              {/* We provide section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-white/70 font-light">
                  {servicesData?.complianceService?.provideTitle ||
                    "We provide:"}
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                  {(
                    servicesData?.complianceService?.provideItems || [
                      "1099 issuance and contractor oversight (W-9s collected, no last-minute scrambles).",
                      "Tax-ready financial packages for your CPA or tax preparer.",
                      "Audit-prep documentation that satisfies regulators and investors.",
                    ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span>{" "}
                  {servicesData?.complianceService?.outcome ||
                    "No fines. No lost licenses. No investor red flags. Just peace of mind that you're covered."}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  {servicesData?.complianceService?.ctaText ||
                    "Schedule Your Consultation"}
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {servicesData?.complianceService?.image?.asset ? (
                  <img
                    src={urlFor(servicesData.complianceService.image).url()}
                    alt={
                      servicesData.complianceService.image.alt ||
                      "Compliance Service"
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder for image */
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Compliance Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning Section */}
      <section
        id="services-addons"
        className="relative bg-cream py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Lines - Dark on cream background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="space-y-6 md:space-y-8">
            {/* Content - Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left - Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
                  {servicesData?.strategicAddons?.title ||
                    "Optional Strategic Add-Ons"}
                </h2>
                <p className="text-base md:text-lg text-black/80 leading-relaxed font-light mt-4">
                  {servicesData?.strategicAddons?.subtitle ||
                    "Beyond keeping the books accurate, we help clients plan their next move."}
                </p>
              </div>

              {/* Right - List */}
              <div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-black/70 font-light">
                    {servicesData?.strategicAddons?.offerTitle || "We offer:"}
                  </p>
                  <ul className="space-y-3 text-xs md:text-sm text-black/60 font-light">
                    {(
                      servicesData?.strategicAddons?.offerItems || [
                        "Cash flow forecasting and budgeting that make hiring and scaling decisions clear.",
                        "Pricing and margin guidance so you know if your services are sustainable.",
                        "Fundraising prep for SaaS companies (investor-ready decks and numbers).",
                        "Industry-specific advisory tailored to agencies and cannabis retailers.",
                      ]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image - Full Width at Bottom */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
                {servicesData?.strategicAddons?.image?.asset ? (
                  <img
                    src={urlFor(servicesData.strategicAddons.image).url()}
                    alt={
                      servicesData.strategicAddons.image.alt ||
                      "Strategic Planning"
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder for image */
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Strategic Planning Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                {servicesData?.strategicAddons?.ctaText ||
                  "Schedule Your Consultation"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section
        id="services-specialized"
        className="relative bg-black py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Lines - White on black background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[56%] bg-white/8"></div>
          <div className="absolute top-[56%] left-0 w-[68%] h-px bg-white/8"></div>
          <div className="absolute top-[56%] left-[68%] w-px h-[44%] bg-white/8"></div>
          <div className="absolute bottom-0 left-[68%] w-[32%] h-px bg-white/8"></div>

          {/* Pattern 2 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[62%] bg-white/6"></div>
          <div className="absolute top-[62%] left-[18%] w-[82%] h-px bg-white/6"></div>
          <div className="absolute top-[62%] left-[18%] w-px h-[38%] bg-white/6"></div>
          <div className="absolute bottom-0 left-0 w-[18%] h-px bg-white/6"></div>

          {/* Pattern 3 - Top Center to Bottom */}
          <div className="absolute top-0 left-[38%] w-px h-[68%] bg-white/5"></div>
          <div className="absolute top-[68%] left-[38%] w-[44%] h-px bg-white/5"></div>
          <div className="absolute top-[68%] left-[82%] w-px h-[32%] bg-white/5"></div>
          <div className="absolute bottom-0 left-[82%] w-[18%] h-px bg-white/5"></div>

          {/* Pattern 4 - Top Left to Bottom Center */}
          <div className="absolute top-0 left-[12%] w-px h-[50%] bg-white/4"></div>
          <div className="absolute top-[50%] left-[12%] w-[54%] h-px bg-white/4"></div>
          <div className="absolute top-[50%] left-[66%] w-px h-[50%] bg-white/4"></div>
          <div className="absolute bottom-0 left-[66%] w-[34%] h-px bg-white/4"></div>

          {/* Pattern 5 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[60%] bg-white/3"></div>
          <div className="absolute top-[60%] right-[30%] w-[18%] h-px bg-white/3"></div>
          <div className="absolute top-[60%] right-[30%] w-px h-[40%] bg-white/3"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-white/3"></div>
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="space-y-6 md:space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight max-w-3xl">
              {servicesData?.specializedServices?.title ||
                "Specialized Services"}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light max-w-3xl">
              {servicesData?.specializedServices?.description ||
                "Sometimes growth requires a reset and specialized services to bring your finances up to speed."}
            </p>

            {/* We provide section */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 font-light">
                {servicesData?.specializedServices?.provideTitle ||
                  "We provide:"}
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                {(
                  servicesData?.specializedServices?.provideItems || [
                    "Historical cleanup for clean, accurate records across prior periods.",
                    "Setup & onboarding enhancements for streamlined COA setup, workflow mapping, KPI dashboards.",
                    "POS integration audits for retailers needing accurate sales and tax reporting.",
                    "Tax strategy sessions and annual planning for U.S. expat clients or specialized needs.",
                  ]
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                {servicesData?.specializedServices?.ctaText ||
                  "Schedule Your Consultation"}
              </Button>
            </div>

            {/* Three Column Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {servicesData?.specializedServices?.images &&
              servicesData.specializedServices.images.length > 0 ? (
                <>
                  {/* Left Image */}
                  {servicesData.specializedServices.images[0]?.asset && (
                    <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[350px] md:h-[400px] flex items-center justify-center">
                      <img
                        src={urlFor(
                          servicesData.specializedServices.images[0]
                        ).url()}
                        alt={
                          servicesData.specializedServices.images[0].alt ||
                          "Specialized Service 1"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Middle Column - Two Images */}
                  {servicesData.specializedServices.images[1]?.asset && (
                    <div className="space-y-4 md:space-y-5">
                      <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[240px] md:h-[280px] flex items-center justify-center">
                        <img
                          src={urlFor(
                            servicesData.specializedServices.images[1]
                          ).url()}
                          alt={
                            servicesData.specializedServices.images[1].alt ||
                            "Specialized Service 2"
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[85px] md:h-[95px] flex items-center justify-center">
                        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                          <p className="text-gray-500 text-sm font-light">
                            Image Placeholder
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Image */}
                  {servicesData.specializedServices.images[2]?.asset && (
                    <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[350px] md:h-[400px] flex items-center justify-center">
                      <img
                        src={urlFor(
                          servicesData.specializedServices.images[2]
                        ).url()}
                        alt={
                          servicesData.specializedServices.images[2].alt ||
                          "Specialized Service 3"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Default placeholder images */}
                  <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[350px] md:h-[400px] flex items-center justify-center">
                    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-light">
                        Image Placeholder 1
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-5">
                    <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[240px] md:h-[280px] flex items-center justify-center">
                      <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                        <p className="text-gray-500 text-sm font-light">
                          Image Placeholder 2
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[85px] md:h-[95px] flex items-center justify-center">
                      <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                        <p className="text-gray-500 text-sm font-light">
                          Image Placeholder
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-sm bg-gray-300 h-[350px] md:h-[400px] flex items-center justify-center">
                    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-light">
                        Image Placeholder 3
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="services-cta"
        className="relative bg-cream py-20 md:py-32 overflow-hidden"
      >
        {/* Decorative Lines - Dark on cream background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pattern 1 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-0 w-px h-[25%] bg-black/12"></div>
          <div className="absolute top-[25%] left-0 w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[25%] left-[35%] w-px h-[30%] bg-black/12"></div>
          <div className="absolute top-[55%] left-[35%] w-[35%] h-px bg-black/12"></div>
          <div className="absolute top-[55%] left-[70%] w-px h-[45%] bg-black/12"></div>
          <div className="absolute bottom-0 left-[70%] w-[30%] h-px bg-black/12"></div>

          {/* Pattern 2 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[15%] w-px h-[30%] bg-black/10"></div>
          <div className="absolute top-[30%] left-[15%] w-[30%] h-px bg-black/10"></div>
          <div className="absolute top-[30%] left-[45%] w-px h-[28%] bg-black/10"></div>
          <div className="absolute top-[58%] left-[45%] w-[32%] h-px bg-black/10"></div>
          <div className="absolute top-[58%] right-[23%] w-px h-[42%] bg-black/10"></div>
          <div className="absolute bottom-0 right-[23%] w-[23%] h-px bg-black/10"></div>

          {/* Pattern 3 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-0 w-px h-[28%] bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-[12%] h-px bg-black/8"></div>
          <div className="absolute top-[28%] right-[12%] w-px h-[32%] bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-[16%] h-px bg-black/8"></div>
          <div className="absolute top-[60%] right-[28%] w-px h-[40%] bg-black/8"></div>
          <div className="absolute bottom-0 left-0 w-[72%] h-px bg-black/8"></div>

          {/* Pattern 4 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[8%] w-px h-[22%] bg-black/7"></div>
          <div className="absolute top-[22%] left-[8%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[22%] left-[26%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[47%] left-[26%] w-[30%] h-px bg-black/7"></div>
          <div className="absolute top-[47%] left-[56%] w-px h-[28%] bg-black/7"></div>
          <div className="absolute top-[75%] left-[56%] w-[44%] h-px bg-black/7"></div>
          <div className="absolute top-[75%] right-0 w-px h-[25%] bg-black/7"></div>

          {/* Pattern 5 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[52%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] left-[52%] w-[22%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[26%] w-px h-[18%] bg-black/7"></div>
          <div className="absolute top-[38%] right-[26%] w-[18%] h-px bg-black/7"></div>
          <div className="absolute top-[38%] right-[8%] w-px h-[62%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-black/7"></div>

          {/* Pattern 6 - Top Right to Bottom Left */}
          <div className="absolute top-0 right-[25%] w-px h-[18%] bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-[25%] h-px bg-black/6"></div>
          <div className="absolute top-[18%] right-[50%] w-px h-[35%] bg-black/6"></div>
          <div className="absolute top-[53%] right-[50%] w-[15%] h-px bg-black/6"></div>
          <div className="absolute top-[53%] right-[35%] w-px h-[47%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[65%] h-px bg-black/6"></div>

          {/* Pattern 7 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[22%] w-px h-[15%] bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-[17%] h-px bg-black/5"></div>
          <div className="absolute top-[15%] left-[5%] w-px h-[85%] bg-black/5"></div>

          {/* Pattern 8 - Top Left to Bottom Left */}
          <div className="absolute top-0 left-[40%] w-px h-[12%] bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-[20%] h-px bg-black/6"></div>
          <div className="absolute top-[12%] left-[20%] w-px h-[38%] bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-[17%] h-px bg-black/6"></div>
          <div className="absolute top-[50%] left-[3%] w-px h-[50%] bg-black/6"></div>
          <div className="absolute bottom-0 left-0 w-[3%] h-px bg-black/6"></div>

          {/* Pattern 9 - Top Right to Bottom Right */}
          <div className="absolute top-0 right-[12%] w-px h-[20%] bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-[3%] h-px bg-black/7"></div>
          <div className="absolute top-[20%] right-[15%] w-px h-[25%] bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-[15%] h-px bg-black/7"></div>
          <div className="absolute top-[45%] right-[30%] w-px h-[55%] bg-black/7"></div>
          <div className="absolute bottom-0 right-[30%] w-[30%] h-px bg-black/7"></div>

          {/* Pattern 10 - Top Left to Bottom Right */}
          <div className="absolute top-0 left-[18%] w-px h-[24%] bg-black/4"></div>
          <div className="absolute top-[24%] left-[18%] w-[28%] h-px bg-black/4"></div>
          <div className="absolute top-[24%] left-[46%] w-px h-[36%] bg-black/4"></div>
          <div className="absolute top-[60%] left-[46%] w-[38%] h-px bg-black/4"></div>
          <div className="absolute top-[60%] right-[16%] w-px h-[40%] bg-black/4"></div>
          <div className="absolute bottom-0 right-[16%] w-[16%] h-px bg-black/4"></div>
        </div>

        <div className="mx-auto max-w-4xl w-full px-6 text-center relative z-10">
          <div className="space-y-6 md:space-y-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-black leading-tight">
              {servicesData?.ctaSection?.title || "Ready for Clarity?"}
            </h2>

            {/* Subheading */}
            <p className="text-base md:text-lg text-black/70 leading-relaxed font-light">
              {servicesData?.ctaSection?.subtitle ||
                "Your next decision deserves numbers you can trust."}
            </p>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 px-7 py-3 text-xs font-light tracking-wide"
              >
                {servicesData?.ctaSection?.buttonText ||
                  "Schedule Your Consultation"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
