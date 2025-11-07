import Navbar from "../../components/site/navbar";
import Footer from "../../components/site/footer";

export default function ServicesPage() {
  return (
    <div className="relative bg-bg">
      <Navbar />

      <section className="relative min-h-screen flex items-center pt-20 bg-bg">
        <div className="mx-auto max-w-6xl w-full px-6 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-cream tracking-tight mb-6">
            Services
          </h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
            Coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
