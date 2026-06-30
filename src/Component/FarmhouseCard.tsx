import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import type { Farmhouse } from "@/data/farmhouses";

export default function FarmhouseCard({ farmhouse }: { farmhouse: Farmhouse }) {
  return (
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-700 h-full flex flex-col">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={farmhouse.images[0]} alt={farmhouse.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="text-white text-lg md:text-xl font-bold truncate">{farmhouse.name}</h3>
          <p className="text-gray-300 flex items-center gap-1 text-xs md:text-sm mt-1"><MapPin size={14} /> {farmhouse.location}</p>
        </div>
      </div>
      <div className="p-3 md:p-4 space-y-2 flex-1">
        <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400 flex-wrap">
          <span className="flex items-center gap-1"><Users size={14} /> {farmhouse.capacity} guests</span>
          <span>{farmhouse.amenities.slice(0,3).join(" · ")}</span>
        </div>
        <p className="text-base md:text-lg font-bold text-emerald-400 mt-1">{farmhouse.priceDisplay}</p>
      </div>
      <div className="px-3 md:px-4 pb-3 md:pb-4 flex gap-2 mt-auto">
        <Link href={`/farmhouses/${farmhouse.slug}`} className="flex-1">
          <button className="w-full border border-gray-600 text-gray-300 py-2 md:py-2.5 rounded-xl font-medium hover:bg-gray-700 transition text-xs md:text-sm">
            View Details
          </button>
        </Link>
        <a
          href={`https://wa.me/923102787627?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(farmhouse.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 md:py-2.5 rounded-xl font-medium transition text-xs md:text-sm">
            Chat Now
          </button>
        </a>
      </div>
    </div>
  );
}