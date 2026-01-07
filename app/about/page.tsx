export default function AboutPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-6">
            About Innerverse Studio
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Clarity Is Not a Skill.  
            <br />It’s a Position You Stand In.
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            When responsibility grows faster than clarity, everything feels heavy.
            Innerverse Studio restores the internal position from which effortless,
            aligned decisions flow — quietly, powerfully, and permanently.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            We exist for leaders who carry responsibility quietly — professionally,
            personally, and socially — and feel the weight of decisions more than
            they speak about it.
          </p>
        </div>

        {/* HERO ILLUSTRATION */}
        <img
          src="/illustrations/inner-authority.png"
          alt="Inner authority and clarity illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= MANIFESTO STATEMENT ================= */}
      <section className="bg-[#F4F7F3] py-24 px-6 md:px-16 text-center">
        <p className="max-w-4xl mx-auto text-3xl md:text-4xl font-medium leading-snug">
          This work is not about strategies, frameworks, or noise.  
          <br />
          It’s about restoring your inner authority —
          so decisions feel effortless, confident, and aligned.
        </p>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="text-4xl font-semibold mb-10">
            The Philosophy Behind Innerverse
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Most leaders don’t struggle because they lack intelligence,
            ambition, or discipline.
            They struggle because responsibility grows faster than their
            internal decision framework.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            As roles expand, expectations multiply, and visibility increases,
            the mind begins carrying more than it was designed to hold.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Innerverse Studio recalibrates the internal position from which
            decisions are made — so clarity becomes stable, reliable,
            and inherent, not situational or fleeting.
          </p>
        </div>

        {/* PHILOSOPHY VISUAL */}
        <img
          src="/illustrations/decision-making.png"
          alt="Decision framework illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= IMPACT METRICS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {[
            { value: "120+", label: "Leaders recalibrated" },
            { value: "12+ hrs/week", label: "Mental bandwidth reclaimed" },
            { value: "3× faster", label: "High-stakes decisions" },
            { value: "48 hrs", label: "Team alignment post recalibration" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl p-10 shadow-md"
            >
              <p className="text-4xl font-semibold mb-3">{item.value}</p>
              <p className="text-[#4A5A55]">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= THIS WORK IS NOT ================= */}
      <section className="bg-[#1F3D2B] py-28 px-6 md:px-16 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10">
            This Work Is Not
          </h2>

          <ul className="space-y-5 text-lg text-white/90">
            <li>• Motivation or surface-level mindset work</li>
            <li>• Productivity hacks or performance tricks</li>
            <li>• Group programs or generic leadership advice</li>
            <li>• Therapy, venting, or emotional dependency</li>
          </ul>
        </div>
      </section>

      {/* ================= ABOUT THE FOUNDER ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* FOUNDER IMAGE */}
        <img
          src="/illustrations/founder.jpeg"
          alt="Founder of Innerverse Studio"
          className="w-full max-w-md rounded-3xl shadow-xl mx-auto"
        />

        <div>
          <h2 className="text-4xl font-semibold mb-8">
            About the Founder & Coach
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            I work with founders, CXOs, and senior professionals who are
            externally successful but internally carrying unresolved
            decision weight, responsibility pressure, and quiet isolation.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            This comes from years of observing intelligent leaders slowly
            losing clarity — not due to failure, but prolonged responsibility
            without recalibration.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            I don’t advise your life.
            I help you restore a grounded internal position from which
            decisions feel effortless, confident, and aligned.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F4F7F3] py-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {[
            "After working with Innerverse, I made decisions in minutes that previously took days. My team executed seamlessly.",
            "The clarity I gained improved both my personal and professional life — meetings were shorter and I felt calm under pressure.",
            "Two weeks of recalibration gave me a lens to see priorities clearly. Decisions impacting ~$3M were made with precision.",
          ].map((quote, idx) => (
            <blockquote key={idx} className="text-xl text-[#3F4F4B] leading-relaxed">
              “{quote}”
              <div className="mt-4 text-sm text-[#6B7F6A]">
                — Anonymized Leader
              </div>
            </blockquote>
          ))}

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16">
        <h2 className="text-4xl font-semibold mb-6">
          Clarity Changes How Everything Moves
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          When decisions feel clean, leadership feels calm.
          And when leadership feels calm, impact flows naturally —
          across work, relationships, and life.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply for a Private Conversation
        </a>
      </section>

    </main>
  );
}
