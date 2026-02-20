"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1F3D2B]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">

        {/* BRAND NAME ONLY */}
        <Link
          href="/"
          className="text-white text-lg md:text-xl font-semibold tracking-wide"
        >
          Innerverse Studio
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-white/90 text-sm">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          {/* <Link href="/retreats" className="hover:text-white transition">
            Retreats
          </Link>
          <Link href="/products" className="hover:text-white transition">
            Products
          </Link> */}

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-white text-[#1F3D2B] font-medium hover:scale-105 transition"
          >
            Apply
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#1F3D2B] px-6 pb-6 space-y-5 text-white/90 text-base">
          <Link onClick={() => setOpen(false)} href="/about" className="block">
            About
          </Link>
          <Link onClick={() => setOpen(false)} href="/services" className="block">
            Services
          </Link>
          <Link onClick={() => setOpen(false)} href="/retreats" className="block">
            Retreats
          </Link>
          <Link onClick={() => setOpen(false)} href="/products" className="block">
            Products
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-[#1F3D2B] font-medium"
          >
            Apply for Conversation
          </Link>
        </div>
      )}
    </header>
  );
}
