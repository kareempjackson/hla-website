import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";
import { Button } from "../../components/ui/button";

export default function ServicesPage() {
  return (
    <div className="relative bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section
        id="services-hero"
        className="relative min-h-screen flex flex-col pt-20 bg-cream"
      >
        {/* Top Section - Content */}
        <div className="mx-auto max-w-6xl w-full px-6 py-12">
          <div className="max-w-4xl">
            {/* Label */}
            <p className="text-xs font-light uppercase tracking-wider text-black/50 mb-4">
              Our Services
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black mb-6 leading-tight">
              Financial clarity. Compliance without the headaches. Reports you
              can trust.
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                Contact US
              </Button>
              <Button
                size="md"
                variant="ghost"
                className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/90 h-10 px-7 text-xs font-light tracking-wide border-0"
              >
                Client Portal
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Image */}
        <div className="mx-auto max-w-6xl w-full px-6 pb-12 flex-1 flex items-end">
          <div className="relative overflow-hidden rounded-2xl bg-gray-300 w-full min-h-[400px] flex items-center justify-center">
            {/* Placeholder for image */}
            <div className="w-full h-[400px] bg-gray-400 flex items-center justify-center">
              <p className="text-gray-500 text-sm font-light">
                Service Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accrual-Based Bookkeeping Section */}
      <section
        id="services-bookkeeping"
        className="relative bg-bg py-24 min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight">
                Accrual-Based Bookkeeping
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                Your books should reflect economic reality, not just deposits in
                the bank.
              </p>

              {/* We deliver section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-white/70 font-light">
                  We deliver:
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Monthly reconciliations across bank, credit card,
                      merchant, and POS systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Revenue recognition for subscription businesses (MRR, ARR,
                      churn).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Project profitability tracking for agencies and service
                      firms.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Clear financial statements (P&L, balance sheet, cash flow)
                      you can actually use.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span>{" "}
                  Numbers that finally match your operations, your margins, and
                  your investor conversations.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  Contact US
                </Button>
                <Button
                  size="md"
                  variant="ghost"
                  className="rounded-pill focus-visible:ring-0 bg-white text-black hover:bg-white/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                >
                  Client Portal
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Team Image Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFO Level Service Section */}
      <section
        id="services-controller"
        className="relative bg-cream py-24 min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Controller Service Image Placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
                Controller-Level Services
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-black/80 leading-relaxed font-light">
                Bookkeeping gets the numbers in. Controller oversight makes sure
                they tell the truth.
              </p>

              {/* We offer section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-black/70 font-light">
                  We offer:
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-black/60 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Variance analysis to spot where performance doesn't align
                      with expectations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Cost accounting and inventory tracking for regulated
                      industries.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Accrual adjustments for payables, deferred revenue, loans,
                      and inter-company activity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Internal control reminders and oversight so nothing slips
                      through.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-sm md:text-base text-black/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span>{" "}
                  Audit-ready books, investor-ready reporting, and expert
                  insight into what's driving (or limiting) profitability.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  Contact US
                </Button>
                <Button
                  size="md"
                  variant="ghost"
                  className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                >
                  Client Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Risk Management Section */}
      <section
        id="services-compliance"
        className="relative bg-bg py-24 min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight">
                Compliance & Risk Management
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                In regulated industries and high-growth SaaS or agency
                environments compliance isn't optional.
              </p>

              {/* We provide section */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-white/70 font-light">
                  We provide:
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      1099 issuance and contractor oversight (W-9s collected, no
                      last-minute scrambles).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Tax-ready financial packages for your CPA or tax preparer.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      Audit-prep documentation that satisfies regulators and
                      investors.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  <span className="text-accent font-normal">Outcome:</span> No
                  fines. No lost licenses. No investor red flags. Just peace of
                  mind that you're covered.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Button
                  size="md"
                  className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
                >
                  Contact US
                </Button>
                <Button
                  size="md"
                  variant="ghost"
                  className="rounded-pill focus-visible:ring-0 bg-white text-black hover:bg-white/90 h-10 px-7 text-xs font-light tracking-wide border-0"
                >
                  Client Portal
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Compliance Image Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning Section */}
      <section
        id="services-addons"
        className="relative bg-cream py-24 min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          <div className="space-y-8">
            {/* Content - Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left - Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-black leading-tight">
                  Optional Strategic Add-Ons
                </h2>
                <p className="text-base md:text-lg text-black/80 leading-relaxed font-light mt-4">
                  Beyond keeping the books accurate, we help clients plan their
                  next move.
                </p>
              </div>

              {/* Right - List */}
              <div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-black/70 font-light">
                    We offer:
                  </p>
                  <ul className="space-y-3 text-xs md:text-sm text-black/60 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Cash flow forecasting and budgeting that make hiring and
                        scaling decisions clear.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Pricing and margin guidance so you know if your services
                        are sustainable.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Fundraising prep for SaaS companies (investor-ready
                        decks and numbers).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Industry-specific advisory tailored to agencies and
                        cannabis retailers.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image - Full Width at Bottom */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Strategic Planning Image Placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                Contact US
              </Button>
              <Button
                size="md"
                variant="ghost"
                className="rounded-pill focus-visible:ring-0 bg-black text-white hover:bg-black/90 h-10 px-7 text-xs font-light tracking-wide border-0"
              >
                Client Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section
        id="services-specialized"
        className="relative bg-black py-24 min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-6xl w-full px-6">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-cream leading-tight max-w-3xl">
              Specialized Services
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light max-w-3xl">
              Sometimes growth requires a reset and specialized services to
              bring your finances up to speed.
            </p>

            {/* We provide section */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-sm md:text-base text-white/70 font-light">
                We provide:
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-white/60 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Historical cleanup for clean, accurate records across prior
                    periods.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Setup & onboarding enhancements for streamlined COA setup,
                    workflow mapping, KPI dashboards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    POS integration audits for retailers needing accurate sales
                    and tax reporting.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Tax strategy sessions and annual planning for U.S. expat
                    clients or specialized needs.
                  </span>
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                size="md"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 h-10 px-7 text-xs font-light tracking-wide"
              >
                Contact US
              </Button>
              <Button
                size="md"
                variant="ghost"
                className="rounded-pill focus-visible:ring-0 bg-white text-black hover:bg-white/90 h-10 px-7 text-xs font-light tracking-wide border-0"
              >
                Client Portal
              </Button>
            </div>

            {/* Three Column Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Left Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[400px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Image Placeholder 1
                  </p>
                </div>
              </div>

              {/* Middle Column - Image + Text */}
              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[280px] flex items-center justify-center">
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Image Placeholder 2
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[95px] flex items-center justify-center">
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-500 text-sm font-light">
                      Image Placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-300 h-[400px] flex items-center justify-center">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <p className="text-gray-500 text-sm font-light">
                    Image Placeholder 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="services-cta"
        className="relative bg-cream py-24 min-h-screen flex items-center justify-center"
      >
        <div className="mx-auto max-w-4xl w-full px-6 text-center">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-black leading-tight">
              Ready for Clarity?
            </h2>

            {/* Subheading */}
            <p className="text-base md:text-lg text-black/70 leading-relaxed font-light">
              Your next decision deserves numbers you can trust.
            </p>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="rounded-pill focus-visible:ring-0 bg-accent text-black hover:brightness-95 px-7 py-3 text-xs font-light tracking-wide"
              >
                Schedule Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
