"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        w-full
        bg-[#F9FAF9]
        border-b border-[#E1ECE7]
        sticky top-0 z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/illustrations/logo-01.png"
            alt="Innerverse Studio"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1F3D2B]">
          <Link href="/about" className="hover:text-[#6B7F6A] transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#6B7F6A] transition">
            Services
          </Link>
          <Link href="/retreats" className="hover:text-[#6B7F6A] transition">
            Retreats
          </Link>
          <Link href="/products" className="hover:text-[#6B7F6A] transition">
            Products
          </Link>
          <Link href="/contact" className="hover:text-[#6B7F6A] transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="
              px-6 py-3 rounded-full
              bg-[#E8C547] text-[#1F3D2B]
              text-sm font-medium
              shadow-md hover:scale-105 transition
            "
          >
            Apply
          </Link>
        </div>

      </div>
    </header>
  );
}
