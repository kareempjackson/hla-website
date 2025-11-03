import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-bg py-20 md:py-24 pt-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-8 tracking-tight leading-tight">
          Running blind is a risk you can't afford
        </h2>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-bg bg-accent rounded-full hover:bg-accent/90 transition-colors"
        >
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
