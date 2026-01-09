export default function HomePage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO (REFINED) ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Innerverse Studio
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Clarity for Leaders  
            Who Carry Real Responsibility
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Even when everything appears under control, the weight of decisions
            never truly leaves your mind. Clarity slips first — quietly —
            while expectations continue to rise.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Innerverse Studio restores the internal position from which
            decisions feel effortless, confident, and aligned —
            at work, at home, and in your broader sphere.
          </p>

          <a
            href="/contact"
            className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
          >
            Apply for a Private Conversation
          </a>

          <p className="text-sm text-[#6B7F6A] mt-3">
            Confidential. Selective. By design.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <img
          src="/illustrations/hero.png"
          alt="Leadership clarity illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= PROBLEM STATEMENT ================= */}
      <section className="bg-[#F4F7F3] py-20 px-6 md:px-16 text-center">
        <p className="max-w-4xl mx-auto text-3xl md:text-4xl font-medium leading-snug">
          When responsibility grows faster than clarity,  
          decisions become heavier — even for capable leaders.
        </p>
      </section>

      {/* ================= WHAT INNERVERSE DOES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <div>
          <h2 className="text-4xl font-semibold mb-6">
            What Innerverse Studio Does
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Innerverse is not about motivation, productivity hacks,
            or surface-level mindset work.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            This work recalibrates the internal position from which
            decisions are made — so clarity becomes stable,
            reliable, and inherent.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Leaders who operate from this position
            think more clearly, decide faster,
            and lead with calm authority — without force.
          </p>
        </div>

        <img
          src="/illustrations/transformation.png"
          alt="Decision clarity illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= IMPACT METRICS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
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
              <p className="text-4xl font-semibold mb-2">{item.value}</p>
              <p className="text-[#4A5A55]">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="bg-[#1F3D2B] py-28 px-6 md:px-16 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">
            How Leaders Work With Innerverse
          </h2>

          <p className="text-xl text-white/90 leading-relaxed mb-6 text-justify">
            Innerverse offers private, high-trust engagements
            for leaders whose decisions shape people,
            organizations, and long-term outcomes.
          </p>

          <p className="text-xl text-white/90 leading-relaxed mb-8 text-justify">
            This work is selective, discreet, and designed
            for those ready to operate from clarity,
            not pressure.
          </p>

          <a
            href="/services"
            className="inline-block px-12 py-4 rounded-full bg-white text-[#1F3D2B] shadow-lg hover:scale-105 transition"
          >
            Explore 1:1 Recalibration
          </a>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F4F7F3] py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-14">
            What Leaders Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote:
                  "After working with Innerverse, I made decisions in minutes that previously took days. My team executed seamlessly.",
                author: "CXO",
                industry: "SaaS Unicorn",
              },
              {
                quote:
                  "The clarity I gained improved both my personal and professional life. Meetings were shorter and I felt calm under pressure.",
                author: "Founder",
                industry: "Fintech Startup",
              },
              {
                quote:
                  "Two weeks of recalibration gave me a clear lens. Decisions impacting ~$3M were made with confidence and precision.",
                author: "Director",
                industry: "Manufacturing",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <p className="text-lg text-[#3F4F4B] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <div className="text-sm text-[#6B7F6A]">
                  — {item.author}, {item.industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-24 px-6 md:px-16">
        <h2 className="text-4xl font-semibold mb-6">
          Clarity Changes How Everything Moves
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-8">
          When decisions feel clean, leadership feels calm.
          And when leadership feels calm, impact follows naturally.
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
