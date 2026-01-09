import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2B] text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <Image
              src="/illustrations/logo.png"
              alt="Innerverse Studio"
              width={160}
              height={40}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">
              Clarity for leaders who carry real responsibility — professionally,
              personally, and socially.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/retreats" className="hover:text-white">Retreats</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Private Work
            </h4>
            <p className="text-sm leading-relaxed mb-6">
              Selective, confidential conversations for leaders ready to
              regain clarity and calm authority.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-white text-[#1F3D2B] text-sm font-medium hover:scale-105 transition"
            >
              Apply for a Conversation
            </Link>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Innerverse Studio. All rights reserved.</p>
          <p>Selective · Confidential · Transformational</p>
        </div>

      </div>
    </footer>
  );
}
