export default function Footer() {
  return (
    <footer className="bg-[#F4F7F3] border-t border-[#E1ECE7]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* BRAND */}
          <div>
            <img
              src="/illustrations/logo-01.png"
              alt="Innerverse Studio"
              className="w-[160px] mb-4"
            />
            <p className="text-sm text-[#4A5A55] max-w-xs">
              Clarity for leaders who carry real responsibility —
              professionally, personally, and socially.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-sm font-semibold text-[#1F3D2B] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#4A5A55]">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/retreats" className="hover:underline">Retreats</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-[#1F3D2B] mb-4">
              Private Work
            </h4>
            <p className="text-sm text-[#4A5A55] mb-4">
              Innerverse Studio works selectively with leaders
              seeking clarity, authority, and alignment.
            </p>
            <a
              href="/contact"
              className="
                inline-block px-6 py-3 rounded-full
                bg-[#E8C547] text-[#1F3D2B]
                text-sm font-medium
                shadow-md hover:scale-105 transition
              "
            >
              Apply for a Conversation
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-[#E1ECE7]
                        text-sm text-[#6B7F6A]
                        flex flex-col md:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Innerverse Studio. All rights reserved.
          </span>
          <span>
            Designed with clarity & intention.
          </span>
        </div>

      </div>
    </footer>
  );
}
