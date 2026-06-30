import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923102787627?text=Hi%2C%20I%27m%20interested%20in%20your%20farmhouses"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3 md:p-4 rounded-full shadow-2xl transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="md:size-7" />
    </a>
  );
}