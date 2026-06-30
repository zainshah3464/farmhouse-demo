"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative group">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl">
        <img src={images[current]} alt={`${name} ${current + 1}`} className="w-full h-full object-cover transition" />
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-2.5 h-2.5 rounded-full transition ${idx === current ? "bg-white scale-110" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}