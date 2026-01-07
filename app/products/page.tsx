export default function ProductsPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Products
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Tools for Clear Thinking & Inner Authority
          </h1>

          <p className="text-xl text-[#3F4F4B] mb-6 leading-relaxed">
            Innerverse products are not merchandise.
            They are structured tools designed for leaders who carry
            responsibility and need space to think clearly.
          </p>

          <p className="text-lg text-[#4A5A55]">
            These tools support clarity, identity, and intentional decision-making —
            without noise, motivation, or complexity.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Why Journals Still Matter
          </h2>

          <p className="text-lg text-[#4A5A55] mb-6 leading-relaxed">
            Clarity does not come from consuming more information.
            It comes from creating space to think, reflect, and decide.
          </p>

          <p className="text-lg text-[#4A5A55] mb-6 leading-relaxed">
            Writing slows the mind, organizes thought, and exposes patterns
            that remain invisible when everything stays internal.
          </p>

          <p className="text-lg text-[#4A5A55] leading-relaxed">
            Innerverse journals are designed as quiet companions —
            structured enough to guide, open enough to allow insight.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-6">
            What Makes These Different
          </h3>

          <ul className="space-y-4 text-[#4A5A55]">
            <li>• No motivational noise or fluff</li>
            <li>• Prompts that provoke insight, not compliance</li>
            <li>• Designed for leaders, not daily diary writing</li>
            <li>• Integrates professional and personal clarity</li>
          </ul>
        </div>

      </section>

      {/* ================= CORE JOURNALS ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">

          <h2 className="text-4xl font-semibold mb-12">
            The Innerverse Journal System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* CLARITY JOURNAL */}
            <div className="bg-white rounded-3xl p-10 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Innerverse Clarity Journal
              </h3>

              <p className="text-[#4A5A55] mb-6 leading-relaxed">
                Designed to untangle thought, reduce mental noise,
                and restore a grounded sense of inner authority.
              </p>

              <ul className="space-y-3 text-[#4A5A55] mb-6">
                <li>• Daily clarity prompts</li>
                <li>• Weekly reflection frameworks</li>
                <li>• Identity & alignment checkpoints</li>
              </ul>

              <p className="text-sm text-[#6B7F6A]">
                Ideal for leaders navigating complexity and responsibility.
              </p>
            </div>

            {/* DECISION JOURNAL */}
            <div className="bg-white rounded-3xl p-10 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Innerverse Decision Journal
              </h3>

              <p className="text-[#4A5A55] mb-6 leading-relaxed">
                A structured journal for leaders who want to reduce
                overthinking and make cleaner, more confident decisions.
              </p>

              <ul className="space-y-3 text-[#4A5A55] mb-6">
                <li>• Decision mapping templates</li>
                <li>• Risk vs alignment prompts</li>
                <li>• Post-decision clarity reviews</li>
              </ul>

              <p className="text-sm text-[#6B7F6A]">
                Best used during high-stakes decision cycles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PLANNING SERIES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">

        <h2 className="text-4xl font-semibold mb-12">
          Planning & Reflection Series
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {[
            {
              title: "Weekly Journal",
              desc: "Short, focused prompts to reset clarity and priorities every week."
            },
            {
              title: "Monthly Journal",
              desc: "Reflect, recalibrate, and realign direction without losing momentum."
            },
            {
              title: "Quarterly Journal",
              desc: "High-level reflection for strategy, leadership posture, and identity."
            },
            {
              title: "Yearly Journal",
              desc: "A deep annual reset — direction, purpose, and long-term alignment."
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-[#4A5A55] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-28 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold mb-6">
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
