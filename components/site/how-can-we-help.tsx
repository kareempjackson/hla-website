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
    <section className="bg-white min-h-screen flex items-center py-12 md:py-16 pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Industry focus
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpItems.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={350}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black group-hover:text-black/80 transition-colors leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black/70 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 max-w-3xl">
          <h4 className="text-lg font-semibold text-black mb-2">
            Not in these industries?
          </h4>
          <p className="text-base text-black/70 leading-relaxed">
            No problem. The same clarity, compliance, and strategic guidance
            apply to any business that values accurate numbers and smart growth.
          </p>
        </div>
      </div>
    </section>
  );
}
