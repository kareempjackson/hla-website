import Navbar from "../../components/site/navbar";
import { CALENDLY_URL } from "@/lib/calendly";
import DecorativeLines from "../../components/site/decorative-lines";
import Image from "next/image";

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
              Simple packages that keep you audit-ready and in control
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-3xl">
              We deliver audit-ready books, faster closes, and actionable
              reporting. Choose the package that fits your business size and
              reporting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <DecorativeLines variant="light" />
        <div className="mx-auto max-w-7xl w-full px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Essential */}
            <div className="rounded-lg bg-[#F5EED7] p-8 flex flex-col">
              <h3 className="text-xl font-normal text-black mb-2">Essential</h3>
              <p className="text-2xl font-semibold text-black mb-6">
                Starting from $1,000/month
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent text-black rounded-pill py-3 text-sm font-normal mb-8 hover:brightness-95 transition-all inline-flex items-center justify-center"
              >
                Book a fit call
              </a>

              <p className="text-xs font-normal text-black/50 uppercase tracking-wider mb-3">
                What You Get
              </p>
              <ul className="space-y-4 text-sm font-normal text-black flex-grow mb-8">
                <li className="border-b border-black/10 pb-4">
                  Monthly close by day 15
                </li>
                <li className="border-b border-black/10 pb-4">
                  Audit-ready accrual books
                </li>
                <li className="border-b border-black/10 pb-4">
                  Core financial reporting (P&amp;L, Balance Sheet, cash position)
                </li>
                <li className="border-b border-black/10 pb-4">
                  Monthly KPI dashboard with Loom walkthrough
                </li>
                <li className="border-b border-black/10 pb-4">
                  30-minute monthly review call
                </li>
                <li className="border-b border-black/10 pb-4">
                  2 business day response time
                </li>
              </ul>

              <p className="text-xs font-normal text-black/50 uppercase tracking-wider mb-3">
                Best For
              </p>
              <ul className="space-y-3 text-sm font-normal text-black">
                <li className="border-b border-black/10 pb-3">
                  $500K–$1.5M annual revenue
                </li>
                <li className="text-black/70 font-light leading-relaxed">
                  Single-entity businesses needing clean books for management decisions and tax preparation
                </li>
              </ul>
            </div>

            {/* Growth */}
            <div className="rounded-lg bg-[#D4F1F4] p-8 flex flex-col">
              <h3 className="text-xl font-normal text-black mb-2">Growth</h3>
              <p className="text-2xl font-semibold text-black mb-6">
                Starting from $2,000/month
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent text-black rounded-pill py-3 text-sm font-normal mb-8 hover:brightness-95 transition-all inline-flex items-center justify-center"
              >
                Book a fit call
              </a>

              <p className="text-xs font-normal text-black/50 uppercase tracking-wider mb-3">
                What You Get
              </p>
              <ul className="space-y-4 text-sm font-normal text-black flex-grow mb-8">
                <li className="border-b border-black/10 pb-4">
                  Monthly close by day 10
                </li>
                <li className="border-b border-black/10 pb-4">
                  Audit-ready books with variance analysis
                </li>
                <li className="border-b border-black/10 pb-4">
                  Expanded KPI reporting with trend analysis
                </li>
                <li className="border-b border-black/10 pb-4">
                  Deferred revenue schedules (SaaS, subscriptions, retainers)
                </li>
                <li className="border-b border-black/10 pb-4">
                  Project/product-level P&amp;L tracking
                </li>
                <li className="border-b border-black/10 pb-4">
                  Quarterly rolling forecast
                </li>
                <li className="border-b border-black/10 pb-4">
                  45-minute monthly strategy call
                </li>
                <li className="border-b border-black/10 pb-4">
                  1 business day response time
                </li>
              </ul>

              <p className="text-xs font-normal text-black/50 uppercase tracking-wider mb-3">
                Best For
              </p>
              <ul className="space-y-3 text-sm font-normal text-black">
                <li className="border-b border-black/10 pb-3">
                  $1.5M–$5M annual revenue
                </li>
                <li className="border-b border-black/10 pb-3 text-black/70 font-light leading-relaxed">
                  Project-based businesses, SaaS companies requiring revenue recognition (ASC 606)
                </li>
                <li className="text-black/70 font-light leading-relaxed">
                  Companies raising capital or seeking investor-ready financials
                </li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="rounded-lg bg-bg text-white p-8 flex flex-col">
              <h3 className="text-xl font-normal mb-2">Leadership</h3>
              <p className="text-2xl font-semibold mb-6">
                Starting from $3,300/month
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent text-black rounded-pill py-3 text-sm font-normal mb-8 hover:brightness-95 transition-all inline-flex items-center justify-center"
              >
                Book a fit call
              </a>

              <p className="text-xs font-normal text-white/40 uppercase tracking-wider mb-3">
                What You Get
              </p>
              <ul className="space-y-4 text-sm font-normal flex-grow mb-8">
                <li className="border-b border-white/10 pb-4">
                  Monthly close by day 7
                </li>
                <li className="border-b border-white/10 pb-4">
                  Audit-ready board package with controller oversight
                </li>
                <li className="border-b border-white/10 pb-4">
                  Rolling 12-month cash flow model
                </li>
                <li className="border-b border-white/10 pb-4">
                  Compliance and internal controls framework
                </li>
                <li className="border-b border-white/10 pb-4">
                  Board presentation format
                </li>
                <li className="border-b border-white/10 pb-4">
                  Monthly forecast refresh
                </li>
                <li className="border-b border-white/10 pb-4">
                  60-minute monthly executive review
                </li>
                <li className="border-b border-white/10 pb-4">
                  Same-day priority response
                </li>
              </ul>

              <p className="text-xs font-normal text-white/40 uppercase tracking-wider mb-3">
                Best For
              </p>
              <ul className="space-y-3 text-sm font-normal text-white/80">
                <li className="border-b border-white/10 pb-3">
                  $5M–$10M annual revenue
                </li>
                <li className="border-b border-white/10 pb-3 font-light leading-relaxed">
                  Companies with boards, investors, or lender requirements
                </li>
                <li className="border-b border-white/10 pb-3 font-light leading-relaxed">
                  Highly regulated industries (cannabis, healthcare, financial services)
                </li>
                <li className="font-light leading-relaxed">
                  Multi-entity structures or complex revenue recognition
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="mt-10 rounded-lg border border-black/10 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-normal text-black mb-2">Custom Solutions</h3>
              <p className="text-sm font-light text-black/60 leading-relaxed max-w-2xl">
                Need something different? We work with multi-entity structures, inventory-based businesses, and companies requiring specialized cost accounting or accelerated close timelines.
              </p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-accent text-black rounded-pill py-3 px-8 text-sm font-normal hover:brightness-95 transition-all inline-flex items-center justify-center"
            >
              Book a fit call
            </a>
          </div>
        </div>
      </section>

      {/* What Affects Price Section */}
      <section className="relative bg-bg py-16 md:py-24 overflow-hidden">
        <DecorativeLines variant="dark" />
        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-cream mb-4">
              What affects price
            </h2>
            <p className="text-sm md:text-base text-white/60 font-light">
              Factors that influence your custom pricing
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Factor 1 */}
            <div className="flex gap-6 items-start">
              <span className="text-6xl md:text-7xl font-extralight text-white/20 shrink-0">
                01
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Multi-entity structure
                </h3>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="flex gap-6 items-start">
              <span className="text-6xl md:text-7xl font-extralight text-white/20 shrink-0">
                02
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Inventory and cost accounting needs
                </h3>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="flex gap-6 items-start">
              <span className="text-6xl md:text-7xl font-extralight text-white/20 shrink-0">
                03
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Number of payment processors
                </h3>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="flex gap-6 items-start">
              <span className="text-6xl md:text-7xl font-extralight text-white/20 shrink-0">
                04
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Monthly transaction volume
                </h3>
              </div>
            </div>

            {/* Factor 5 */}
            <div className="flex gap-6 items-start">
              <span className="text-6xl md:text-7xl font-extralight text-white/20 shrink-0">
                05
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                  Reporting cadence and deadlines
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Work With Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <DecorativeLines variant="light" className="opacity-25" />
        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12 text-center">
            Tools we work with
          </h2>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* QuickBooks Online */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-16">
                <Image
                  src="/images/logo/tool-logo/quickbooks-brand-preferred-logo-50-50-black-external-2-1024x262.png"
                  alt="QuickBooks Online"
                  fill
                  sizes="(min-width: 768px) 160px, 40vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>

            {/* Xero */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-16">
                <Image
                  src="/images/logo/tool-logo/Xero_software_logo.svg.png"
                  alt="Xero"
                  fill
                  sizes="(min-width: 768px) 160px, 40vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>

            {/* Double */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-16">
                <Image
                  src="/images/logo/tool-logo/doubleFooterLogo.webp"
                  alt="Double"
                  fill
                  sizes="(min-width: 768px) 160px, 40vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>

            {/* Stripe */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="relative w-full h-16">
                <Image
                  src="/images/logo/tool-logo/stripe-logo-black-transparent.png"
                  alt="Stripe"
                  fill
                  sizes="(min-width: 768px) 160px, 40vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-black/60 font-light leading-relaxed text-center max-w-3xl mx-auto">
            We do not run bill pay or payroll inside our scope.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-cream py-16 md:py-24 overflow-hidden">
        <DecorativeLines variant="light" />
        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-12">
            FAQ
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                Do you do taxes?
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                We do not file taxes. We keep your books tax-ready and
                coordinate with your CPA.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                Do you run payroll or pay bills?
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                No. We record payroll and AP in the books but do not process
                payments or collections.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                What is onboarding?
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                Cleanup and system setup to get you audit-ready. It typically
                runs 1x to 2x a monthly fee.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                How fast is your close?
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                Essential day 15. Growth day 10. Leadership day 7. An
                accelerated close is available as an add-on.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                Contract term
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                Month to month. Adjustments occur if scope changes.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="text-lg md:text-xl font-normal text-black mb-3">
                Who is a fit?
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                Businesses that need accrual accounting and controller
                discipline, not cash-only bookkeeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Testimonial Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <DecorativeLines variant="light" />
        <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote 1 */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed italic">
                &quot;Communication 5/5, execution 5/5, professionalism 5/5,
                timeliness 5/5. HLA delivered.&quot;
              </p>
              <p className="text-xs text-black/50 font-light">
                — Jack Ryan, Founder and CEO, Last Lock Inc.
              </p>
            </div>

            {/* Quote 2 */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed italic">
                &quot;Grateful for the support, Alvonn. Accurate, responsive, and
                easy to work with.&quot;
              </p>
              <p className="text-xs text-black/50 font-light">
                — David Hyland, Owner, Stackview Farms
              </p>
            </div>

            {/* Quote 3 */}
            <div className="space-y-4">
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed italic">
                &quot;HLA kept our books organized, up to date, and easy to work
                with. Communication was always clear and the service was
                consistently reliable.&quot;
              </p>
              <p className="text-xs text-black/50 font-light">
                — Kevaughan Graham, Owner, Graham Sports &amp; Fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-bg py-20 md:py-32 overflow-hidden">
        <DecorativeLines variant="dark" />
        <div className="mx-auto max-w-4xl w-full px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream mb-8 leading-tight">
            Ready for financial clarity?
          </h2>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black rounded-pill py-3 px-8 text-sm font-normal hover:brightness-95 transition-all inline-flex items-center justify-center"
          >
            Book a 20-minute fit call
          </a>
        </div>
      </section>
    </div>
  );
}

