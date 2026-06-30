import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-950" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-pulse-glow px-2">
          Your <span className="text-emerald-400">Luxury Farmstay</span> Awaits
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Discover 25 handpicked farmhouses for perfect family getaways
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <SearchBar />
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <Link href="/farmhouses" className="inline-block text-base md:text-lg underline underline-offset-4 hover:text-emerald-400 transition text-gray-200">
            View all 25 farmhouses →
          </Link>
        </div>
      </div>
    </section>
  );
}