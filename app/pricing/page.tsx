import Navbar from "../../components/site/navbar";
import DecorativeLines from "../../components/site/decorative-lines";
import PricingCalculator from "../../components/site/pricing-calculator";

export default function PricingPage() {
  return (
    <div className="relative bg-bg">
      <Navbar sticky={true} />

      {/* Hero Section */}
      <section
        id="pricing-hero"
        className="relative min-h-[50vh] flex items-center bg-bg -mt-20 pt-20 overflow-hidden"
      >
        {/* Decorative Stepped Lines (match Services page behavior) */}
        <DecorativeLines
          variant="dark"
          className="overflow-visible z-[150]"
          style={{ marginTop: "-5rem" }}
        />

        <div className="mx-auto max-w-6xl w-full px-6 py-12 relative z-10">
          <div className="max-w-4xl">
            {/* Label */}
            <p className="text-xs font-light uppercase tracking-wider text-white/50 mb-4">
              Pricing
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream mb-6 leading-tight">
              Build Your Estimate
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-3xl">
              Select the services your business needs. You&apos;ll get an
              instant range. A precise proposal follows a short discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section - overflow-clip (not hidden) so the estimate panel can stick */}
      <section
        id="pricing-calculator"
        className="relative bg-white py-16 md:py-24 overflow-clip"
      >
        <DecorativeLines variant="light" />
        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <PricingCalculator />
        </div>
      </section>
    </div>
  );
}
