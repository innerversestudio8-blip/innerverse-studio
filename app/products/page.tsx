export default function ProductsPage() {
  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Products
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F3D2B] leading-tight mb-6">
            Tools for Clear Thinking & Inner Authority
          </h1>

          <p className="text-xl text-[#3F4F4B] mb-8">
            Innerverse products are not merchandise.
            They are structured tools designed to help leaders slow down,
            reflect deeply, and make aligned decisions.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Each product supports clarity, identity, and intentional action —
            without noise or complexity.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            Why Journals Still Matter
          </h2>

          <p className="text-lg text-[#4A5A55] mb-6">
            Clarity does not come from consuming more information.
            It comes from creating space to think, reflect, and decide.
          </p>

          <p className="text-lg text-[#4A5A55] mb-6">
            Writing slows the mind, organizes thought, and reveals patterns
            that remain invisible when everything stays internal.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Innerverse journals are designed as companions —
            guiding structured reflection without overwhelming the mind.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
            What Makes These Different
          </h3>

          <ul className="space-y-4 text-[#4A5A55]">
            <li>• No motivational noise or fluff</li>
            <li>• Thought-provoking prompts, not instructions</li>
            <li>• Designed for leaders, not daily diary writing</li>
            <li>• Supports clarity across work and personal life</li>
          </ul>
        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">

          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-12">
            Available Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* PRODUCT 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
                Innerverse Clarity Journal
              </h3>

              <p className="text-[#4A5A55] mb-6">
                A guided journal designed to help you untangle thoughts,
                regain mental clarity, and reconnect with your inner authority.
              </p>

              <ul className="space-y-3 text-[#4A5A55] mb-6">
                <li>• Daily clarity prompts</li>
                <li>• Weekly reflection frameworks</li>
                <li>• Decision-alignment exercises</li>
              </ul>

              <p className="text-sm text-[#6B7F6A]">
                Ideal for leaders navigating complexity and responsibility.
              </p>
            </div>

            {/* PRODUCT 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
                Innerverse Decision Journal
              </h3>

              <p className="text-[#4A5A55] mb-6">
                A structured decision-making journal for leaders who want
                to reduce overthinking and make cleaner, more confident choices.
              </p>

              <ul className="space-y-3 text-[#4A5A55] mb-6">
                <li>• Decision mapping templates</li>
                <li>• Risk vs alignment prompts</li>
                <li>• Post-decision reflection</li>
              </ul>

              <p className="text-sm text-[#6B7F6A]">
                Best used during high-stakes decision periods.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-28 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
          These Tools Work Best With Guidance
        </h2>

        <p className="text-lg text-[#4A5A55] mb-10 max-w-2xl mx-auto">
          Journals support clarity.
          Private conversations accelerate it.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Explore Working Together
        </a>

      </section>

    </main>
  );
}
