import { farmhouses } from "@/data/farmhouses";
import { notFound } from "next/navigation";
import HotelGallery from "@/Component/HotelGallery";
import FarmhouseCard from "@/Component/FarmhouseCard";
import ScrollReveal from "@/Component/ScrollReveal";
import { MapPin, Users, Star, Waves, Flame, Wifi, ChefHat, Car, Utensils } from "lucide-react";
import Link from "next/link";

const amenityIcons: Record<string, any> = {
  Pool: Waves,
  BBQ: Flame,
  Bonfire: Flame,
  WiFi: Wifi,
  Chef: ChefHat,
  Jacuzzi: Waves,
  "Lake Access": MapPin,
  Breakfast: Utensils,
  Parking: Car,
};

export default function FarmhouseDetail({ params }: { params: { slug: string } }) {
  const fh = farmhouses.find((f) => f.slug === params.slug);
  if (!fh) notFound();
  const related = farmhouses.filter((f) => f.slug !== fh.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 pb-2 md:pb-4 max-w-7xl mx-auto px-4 md:px-6">
        <nav className="text-sm text-gray-400 flex flex-wrap gap-x-2">
          <Link href="/" className="hover:text-emerald-400">Home</Link> /
          <Link href="/farmhouses" className="hover:text-emerald-400">Farmhouses</Link> /
          <span className="text-gray-200">{fh.name}</span>
        </nav>
      </div>

      {/* Gallery */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-0 md:px-6 mb-6 md:mb-12">
          <div className="md:rounded-2xl overflow-hidden">
            <HotelGallery images={fh.images} name={fh.name} />
          </div>
        </div>
      </ScrollReveal>

      {/* Content: 2 columns on desktop, stacked on mobile */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        {/* Main details */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <ScrollReveal>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{fh.name}</h1>
              <p className="flex items-center gap-1.5 text-gray-400 mt-1.5">
                <MapPin size={16} /> {fh.location}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">{fh.description}</p>
          </ScrollReveal>

          {/* Amenities */}
          <ScrollReveal>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {fh.amenities.map((a) => {
                  const Icon = amenityIcons[a] || Utensils;
                  return (
                    <span
                      key={a}
                      className="flex items-center gap-1.5 bg-gray-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-gray-200"
                    >
                      <Icon size={15} /> {a}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Google Map */}
          {fh.mapEmbedUrl && (
            <ScrollReveal>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Location</h2>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                  <iframe
                    src={fh.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Reviews */}
          {fh.reviews && (
            <ScrollReveal>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Guest Reviews</h2>
                <div className="space-y-3 md:space-y-4">
                  {fh.reviews.map((review, i) => (
                    <div key={i} className="bg-gray-800 p-3 md:p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-semibold text-white text-sm md:text-base">
                          {review.name}
                        </span>
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }, (_, j) => (
                            <Star
                              key={j}
                              size={14}
                              fill={j < review.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Sidebar - Sticky on desktop, normal on mobile */}
        <div className="lg:col-span-1">
          <ScrollReveal>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5 md:p-6 shadow-xl space-y-4 lg:sticky lg:top-24">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">{fh.priceDisplay}</div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={16} /> <span className="text-sm">Up to {fh.capacity} guests</span>
              </div>
              <a
                href={`https://wa.me/923102787627?text=Hi%2C%20I%27m%20interested%20in%20booking%20${encodeURIComponent(fh.name)}%20at%20${encodeURIComponent(fh.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-base md:text-lg font-semibold py-3.5 md:py-4 rounded-xl transition">
                  Chat for Best Price
                </button>
              </a>
              <p className="text-xs text-center text-gray-500">
                Direct WhatsApp, no booking fees
              </p>
              <div className="pt-4 border-t border-gray-700 text-sm text-gray-400 space-y-1.5">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span> Best price guaranteed
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span> Instant response
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span> No hidden charges
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Related Farmhouses */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
            You May Also Like
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {related.map((r) => (
            <ScrollReveal key={r.slug}>
              <FarmhouseCard farmhouse={r} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}