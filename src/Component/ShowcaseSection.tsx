import { farmhouses } from "@/data/farmhouses";
import HotelGallery from "./HotelGallery";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Users, Star, Quote } from "lucide-react";
import Link from "next/link";

export default function ShowcaseSection() {
  const showcase = farmhouses.find((f) => f.featured);
  if (!showcase) return null;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background subtle gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Experience the <span className="text-emerald-400 animate-pulse-glow">Luxury</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 md:mb-14 text-sm md:text-base">
            Handpicked farmhouses where every moment feels extraordinary
          </p>
        </ScrollReveal>

        {/* Gallery with hover zoom and floating effect */}
        <ScrollReveal className="mb-10 md:mb-14">
          <div className="transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl shadow-emerald-500/10 rounded-2xl">
            <HotelGallery images={showcase.images} name={showcase.name} />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Left side – Name, Description, Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {showcase.name}
                </h3>
                <p className="flex items-center gap-2 text-gray-400 mt-2 text-sm md:text-base">
                  <MapPin size={18} className="text-emerald-400" /> {showcase.location}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg border-l-4 border-emerald-600 pl-5 italic">
                &ldquo;{showcase.description}&rdquo;
              </p>
            </ScrollReveal>

            {/* Reviews – elegant cards with hover lift */}
            {showcase.reviews && showcase.reviews.length > 0 && (
              <ScrollReveal>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    What Guests Say
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {showcase.reviews.slice(0, 2).map((review, i) => (
                      <div
                        key={i}
                        className="bg-gray-800/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                      >
                        <Quote className="text-emerald-600/30 w-8 h-8 mb-2" />
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">
                            {review.name}
                          </span>
                          <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }, (_, j) => (
                              <Star
                                key={j}
                                size={13}
                                fill={j < review.rating ? "currentColor" : "none"}
                                className={j < review.rating ? "animate-pulse" : ""}
                                style={{ animationDelay: `${j * 0.1}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right side – Map & Booking CTA */}
          <div className="space-y-6">
            {showcase.mapEmbedUrl && (
              <ScrollReveal>
                <div className="rounded-xl overflow-hidden border border-gray-700 shadow-xl aspect-[4/3]">
                  <iframe
                    src={showcase.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${showcase.name} location`}
                  ></iframe>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 text-center space-y-5 shadow-2xl">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Starting from</p>
                  <p className="text-3xl font-extrabold text-emerald-400 animate-pulse">
                    {showcase.priceDisplay.split(" ").pop()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per night</p>
                </div>
                <Link href={`/farmhouses/${showcase.slug}`}>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                    Reserve Now
                  </button>
                </Link>
                <p className="text-xs text-gray-500">No booking fees · Instant confirmation</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}