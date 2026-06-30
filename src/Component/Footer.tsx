import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 text-gray-300 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_#05966920_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 md:pt-20 pb-8 md:pb-10">
        {/* Animated wave decoration (top) */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-2xl">🏡</span>
              <span className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-300">
                Family Farmhouse
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Curating extraordinary stays at handpicked farmhouses. Your luxury countryside escape begins here.
            </p>
            {/* Newsletter (fake) – hotel style */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Exclusive offers
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-1">
                  Subscribe <ArrowRight size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2">No spam, only dreamy deals.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "All Farmhouses", "About Us", "Contact"].map((item, idx) => {
                const href = idx === 0 ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`;
                return (
                  <li key={idx}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="mt-0.5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">Farmhouse Road, New Delhi</span>
              </li>
              <li>
                <a
                  href="tel:03102787627"
                  className="flex items-center gap-3 group hover:text-emerald-400 transition-colors"
                >
                  <Phone size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 group-hover:text-emerald-400">0310 2787627</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:arshadjamal1709@gmail.com"
                  className="flex items-center gap-3 group hover:text-emerald-400 transition-colors"
                >
                  <Mail size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 group-hover:text-emerald-400 break-all">arshadjamal1709@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Trust */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg tracking-wide relative inline-block">
              Follow Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <div className="flex gap-4 text-xl mb-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>

            {/* Trust badges (hotel style) */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1.5 bg-gray-800 rounded-full text-xs font-semibold text-gray-400 flex items-center gap-1">
                ⭐ 4.9 Rating
              </span>
              <span className="px-3 py-1.5 bg-gray-800 rounded-full text-xs font-semibold text-gray-400 flex items-center gap-1">
                🔒 Secure Booking
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Family Farmhouse. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}