export default function ProductsPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Innerverse Products
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Tools for Clear Thinking  
            & Inner Authority
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Innerverse products are not merchandise.
            They are structured tools designed to help leaders slow down,
            think clearly, and make aligned decisions under responsibility.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Each product supports clarity, identity,
            and intentional action — without noise or complexity.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-[#F4F7F3] py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Why Journals Still Matter
            </h2>

            <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
              Clarity does not come from consuming more information.
              It comes from creating space to think, reflect, and decide.
            </p>

            <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
              Writing slows the mind, organizes thought,
              and reveals patterns that remain invisible
              when everything stays internal.
            </p>

            <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
              Innerverse journals are designed as companions —
              guiding structured reflection without overwhelming the mind.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              What Makes These Different
            </h3>

            <ul className="space-y-4 text-[#4A5A55] text-lg">
              <li>• No motivational noise or fluff</li>
              <li>• Thought-provoking prompts, not instructions</li>
              <li>• Designed for leaders, not diary writing</li>
              <li>• Supports clarity across work and personal life</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= JOURNAL SYSTEM ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <h2 className="text-4xl font-semibold mb-14">
          The Innerverse Journal System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CLARITY JOURNAL */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Innerverse Clarity Journal
            </h3>

            <p className="text-[#3F4F4B] leading-relaxed mb-6">
              Designed for leaders navigating complexity,
              pressure, and responsibility.
            </p>

            <ul className="space-y-3 text-[#4A5A55] mb-6">
              <li>• Daily clarity prompts → clear decisions daily</li>
              <li>• Weekly reflection → 2–3× faster insight cycles</li>
              <li>• Identity checkpoints → aligned presence at work & home</li>
            </ul>

            <p className="text-sm text-[#6B7F6A]">
              Best used as a daily grounding practice.
            </p>
          </div>

          {/* DECISION JOURNAL */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Innerverse Decision Journal
            </h3>

            <p className="text-[#3F4F4B] leading-relaxed mb-6">
              For leaders who want to reduce overthinking
              and make cleaner, more confident decisions.
            </p>

            <ul className="space-y-3 text-[#4A5A55] mb-6">
              <li>• Decision mapping → reduce overthinking ~50%</li>
              <li>• Risk vs alignment → confident high-stakes choices</li>
              <li>• Post-decision review → immediate clarity</li>
            </ul>

            <p className="text-sm text-[#6B7F6A]">
              Ideal during high-stakes decision periods.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PLANNING SERIES ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF] py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">
            Planning & Reflection Series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              {
                title: "Weekly Journal",
                desc: "Reset clarity and priorities efficiently."
              },
              {
                title: "Monthly Journal",
                desc: "Recalibrate direction across work and life."
              },
              {
                title: "Quarterly Journal",
                desc: "Strategic alignment for teams and projects."
              },
              {
                title: "Yearly Journal",
                desc: "Deep reset for long-term direction and identity."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4A5A55]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= GUIDANCE CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold mb-6">
          These Tools Work Best With Guidance
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          Journals create clarity.
          Private conversations accelerate it.
          Together, they help leaders reclaim mental bandwidth,
          align decisions, and operate with calm authority.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Explore Working Together
        </a>
      </section>

    </main>
  );
}
