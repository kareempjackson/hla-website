export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "We learn your business inside out, review your tech stack, and set up standardized reporting.",
    },
    {
      number: "02",
      title: "Monthly Bookkeeping & Controller Services",
      description:
        "We reconcile accounts, implement internal controls, track the right metrics, and deliver accrual-based financial reports that show the metrics that matter for growth.",
    },
    {
      number: "03",
      title: "Compliance & Advisory",
      description:
        "We keep you compliant, prep year-end docs, and offer growth-focused advisory when you need it.",
    },
  ];

  return (
    <section className="bg-brand-deep min-h-screen flex items-center py-16 md:py-20 pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream mb-3 tracking-tight">
            Our Process
          </h2>
          <p className="text-base md:text-lg text-white/60 font-light">
            Your path to financial clarity in 3 steps
          </p>
        </div>

        {/* Steps - Vertical Layout for Premium Feel */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Step Number - Large & Elegant */}
                <div className="shrink-0">
                  <div className="text-5xl md:text-6xl font-light text-accent/30 leading-none">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-cream mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-2xl font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Subtle Divider - Not on last item */}
              {index !== steps.length - 1 && (
                <div className="mt-8 md:mt-10 w-full h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
