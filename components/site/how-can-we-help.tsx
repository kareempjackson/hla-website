import Image from "next/image";

const helpItems = [
  {
    id: 1,
    image: "/window.svg",
    title: "SaaS & Subscription Businesses",
    description:
      "Get investor-ready financials, accurate revenue recognition, and KPI tracking that actually matches your operations. Know your runway, your churn, and your margins.",
  },
  {
    id: 2,
    image: "/window.svg",
    title: "Marketing & Creative Agencies",
    description:
      "See which projects are really profitable, keep cash flow predictable, and make scaling decisions with confidence.",
  },
  {
    id: 3,
    image: "/window.svg",
    title: "Cannabis & Hemp Retail",
    description:
      "Stay compliant, avoid costly fines, and track profitability by location or product without drowning in the complexities of 280E.",
  },
];

export default function HowCanWeHelp() {
  return (
    <section className="bg-white min-h-screen flex items-center py-12 md:py-12 pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black tracking-tight">
            Industry focus
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {helpItems.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="mb-3 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={350}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-light text-black group-hover:text-black/70 transition-colors leading-snug mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-black/60 leading-relaxed font-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 max-w-3xl">
          <h4 className="text-base font-light text-black mb-2">
            Not in these industries?
          </h4>
          <p className="text-sm text-black/60 leading-relaxed font-light">
            No problem. The same clarity, compliance, and strategic guidance
            apply to any business that values accurate numbers and smart growth.
          </p>
        </div>
      </div>
    </section>
  );
}
