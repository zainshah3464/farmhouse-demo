"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-2">
          🏡 Family Farmhouse
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-200">
          <Link href="/farmhouses" className="hover:text-emerald-400 transition">All Farmhouses</Link>
          <Link href="/admin" className="hover:text-emerald-400 transition">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden glass border-t border-gray-700">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-200">
            <Link href="/farmhouses" className="hover:text-emerald-400 transition" onClick={() => setOpen(false)}>All Farmhouses</Link>
            <Link href="/admin" className="hover:text-emerald-400 transition" onClick={() => setOpen(false)}>Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
}