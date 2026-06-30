"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HotelGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prev = () => setActive((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setActive((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="space-y-2">
        <div
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-none md:rounded-2xl cursor-pointer group"
          onClick={() => setShowModal(true)}
        >
          <img src={images[active]} alt={`${name} - main`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          <span className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/60 text-white text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
            {active + 1} / {images.length}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 px-1 md:px-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition ${
                idx === active ? "border-emerald-400 scale-105" : "border-gray-700 hover:border-gray-500"
              }`}
            >
              <img src={img} alt={`${name} thumb`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 md:top-4 md:right-4 text-white p-2 hover:bg-white/10 rounded-full">
            <X size={28} />
          </button>
          <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full">
            <ChevronLeft size={36} />
          </button>
          <img src={images[active]} alt={`${name} large`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg" />
          <button onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full">
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2.5 h-2.5 rounded-full ${idx === active ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}