"use client";
import { useState } from "react";

export default function TabbedGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-2xl mb-4">
        <img src={images[active]} alt={`${name} ${active+1}`} className="w-full h-full object-cover transition-opacity duration-500" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
              idx === active ? "border-emerald-400 scale-105" : "border-gray-700 hover:border-gray-500"
            }`}
          >
            <img src={img} alt={`${name} thumb`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}