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
    <section className="relative bg-brand-deep min-h-screen flex items-center py-16 md:py-20 pt-20 overflow-hidden">
      {/* Decorative Stepped Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern 1 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-0 w-px h-[22%] bg-white/12"></div>
        <div className="absolute top-[22%] left-0 w-[30%] h-px bg-white/12"></div>
        <div className="absolute top-[22%] left-[30%] w-px h-[28%] bg-white/12"></div>
        <div className="absolute top-[50%] left-[30%] w-[35%] h-px bg-white/12"></div>
        <div className="absolute top-[50%] left-[65%] w-px h-[50%] bg-white/12"></div>
        <div className="absolute bottom-0 left-[65%] w-[35%] h-px bg-white/12"></div>

        {/* Pattern 2 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-0 w-px h-[26%] bg-white/10"></div>
        <div className="absolute top-[26%] right-[16%] w-[16%] h-px bg-white/10"></div>
        <div className="absolute top-[26%] right-[16%] w-px h-[30%] bg-white/10"></div>
        <div className="absolute top-[56%] right-[32%] w-[16%] h-px bg-white/10"></div>
        <div className="absolute top-[56%] right-[32%] w-px h-[44%] bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-[68%] h-px bg-white/10"></div>

        {/* Pattern 3 - Top Left to Bottom Right */}
        <div className="absolute top-0 left-[12%] w-px h-[20%] bg-white/8"></div>
        <div className="absolute top-[20%] left-[12%] w-[26%] h-px bg-white/8"></div>
        <div className="absolute top-[20%] left-[38%] w-px h-[28%] bg-white/8"></div>
        <div className="absolute top-[48%] left-[38%] w-[28%] h-px bg-white/8"></div>
        <div className="absolute top-[48%] left-[66%] w-px h-[52%] bg-white/8"></div>
        <div className="absolute bottom-0 left-[66%] w-[34%] h-px bg-white/8"></div>

        {/* Pattern 4 - Top Right to Bottom Right */}
        <div className="absolute top-0 right-[8%] w-px h-[24%] bg-white/11"></div>
        <div className="absolute top-[24%] right-[18%] w-[10%] h-px bg-white/11"></div>
        <div className="absolute top-[24%] right-[18%] w-px h-[32%] bg-white/11"></div>
        <div className="absolute top-[56%] right-[8%] w-[10%] h-px bg-white/11"></div>
        <div className="absolute top-[56%] right-[8%] w-px h-[44%] bg-white/11"></div>
        <div className="absolute bottom-0 right-[8%] w-[8%] h-px bg-white/11"></div>

        {/* Pattern 5 - Top Left to Bottom Left */}
        <div className="absolute top-0 left-[22%] w-px h-[18%] bg-white/7"></div>
        <div className="absolute top-[18%] left-[8%] w-[14%] h-px bg-white/7"></div>
        <div className="absolute top-[18%] left-[8%] w-px h-[56%] bg-white/7"></div>
        <div className="absolute top-[74%] left-[0] w-[8%] h-px bg-white/7"></div>
        <div className="absolute top-[74%] left-0 w-px h-[26%] bg-white/7"></div>

        {/* Pattern 6 - Top Right to Bottom Left */}
        <div className="absolute top-0 right-[24%] w-px h-[20%] bg-white/9"></div>
        <div className="absolute top-[20%] right-[44%] w-[20%] h-px bg-white/9"></div>
        <div className="absolute top-[20%] right-[44%] w-px h-[28%] bg-white/9"></div>
        <div className="absolute top-[48%] right-[56%] w-[12%] h-px bg-white/9"></div>
        <div className="absolute top-[48%] right-[56%] w-px h-[52%] bg-white/9"></div>
        <div className="absolute bottom-0 left-0 w-[44%] h-px bg-white/9"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
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
