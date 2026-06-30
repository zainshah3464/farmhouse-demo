"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 glass rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
      <div className="flex-1">
        <label className="text-sm text-gray-300">Check-in</label>
        <input type="date" className="w-full mt-1 bg-transparent border border-gray-500 rounded-lg px-3 py-2 text-white text-sm md:text-base" />
      </div>
      <div className="flex-1">
        <label className="text-sm text-gray-300">Guests</label>
        <select className="w-full mt-1 bg-transparent border border-gray-500 rounded-lg px-3 py-2 text-white text-sm md:text-base">
          <option className="text-black">1-5</option>
          <option className="text-black">6-10</option>
          <option className="text-black">11-15</option>
        </select>
      </div>
      <button className="bg-emerald-600 hover:bg-emerald-500 px-6 md:px-8 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition text-sm md:text-base">
        <Search size={18} /> Search
      </button>
    </div>
  );
}