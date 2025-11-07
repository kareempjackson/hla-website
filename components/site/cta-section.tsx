import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-bg py-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-4xl px-6 text-center w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-cream mb-6 tracking-tight leading-tight">
          Running blind is a risk you can't afford
        </h2>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3 text-xs font-light text-bg bg-accent rounded-full hover:bg-accent/90 transition-colors tracking-wide"
        >
          Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
}
