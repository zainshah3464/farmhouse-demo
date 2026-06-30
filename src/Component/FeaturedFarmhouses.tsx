import { farmhouses } from "@/data/farmhouses";
import FarmhouseCard from "./FarmhouseCard";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedFarmhouses() {
  const featured = farmhouses.filter(f => f.featured);
  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14 text-white">Trending Now</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featured.map((fh) => (
          <ScrollReveal key={fh.slug}>
            <FarmhouseCard farmhouse={fh} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}