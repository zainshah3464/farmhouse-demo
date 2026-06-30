import { farmhouses } from "@/data/farmhouses";
import FarmhouseCard from "@/Component/FarmhouseCard";
import ScrollReveal from "@/Component/ScrollReveal";

export default function FarmhousesPage() {
  return (
    <section className="pt-20 md:pt-24 pb-16 md:pb-20 px-4 max-w-7xl mx-auto">
      <ScrollReveal>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10">All 25 Farmhouses</h1>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {farmhouses.map((fh) => (
          <ScrollReveal key={fh.slug}>
            <FarmhouseCard farmhouse={fh} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}