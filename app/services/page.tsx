export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-6">
            Services — Innerverse Studio
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            1:1 Identity & Leadership Recalibration
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Where you go depends on how you grow.
            This is a private, high-trust engagement for leaders whose
            decisions shape teams, organizations, and lives —
            yet carry the responsibility quietly.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            This work restores the internal position from which
            clarity, calm authority, and decisive leadership flow —
            professionally, personally, and socially.
          </p>
        </div>

        {/* HERO VISUAL */}
        <img
          src="/illustrations/leadership-identity.png"
          alt="Leadership identity illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <section className="bg-[#F4F7F3] py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10">
            About the Program
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            This is not coaching, not therapy, and not a seminar.
            It is a full-spectrum, high-touch, one-on-one Identity
            & Leadership Recalibration for leaders who operate at
            high levels of responsibility.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            If you are ready to step fully into authority, clarity,
            and influence, this engagement recalibrates who you are
            — so every decision, relationship, and outcome reflects
            the leader you truly are.
          </p>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-20">

        <div>
          <h2 className="text-4xl font-semibold mb-8">
            This Program Is For You If
          </h2>

          <ul className="space-y-5 text-lg text-[#4A5A55]">
            <li>• You carry responsibility across people, outcomes, and direction</li>
            <li>• You feel the silent weight of being “the one who decides”</li>
            <li>• You value authority, not validation</li>
            <li>• You want clarity that lasts — not temporary motivation</li>
            <li>• You are ready to invest at the level you operate</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-6">
            This Is Not For
          </h3>

          <ul className="space-y-4 text-[#4A5A55]">
            <li>• Quick fixes or motivational consumption</li>
            <li>• Group programs or generic leadership frameworks</li>
            <li>• Leaders avoiding responsibility</li>
            <li>• Surface-level mindset work</li>
          </ul>
        </div>

      </section>

      {/* ================= TRANSFORMATIONS ================= */}
      <section className="bg-[#F4F7F3] py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16">
            Transformations You Will Experience
          </h2>

          <div className="space-y-12">

            {[
              {
                title: "Absolute Clarity & Alignment",
                desc: "Navigate complex decisions effortlessly with calm, centered confidence."
              },
              {
                title: "Presence That Commands Respect",
                desc: "Influence outcomes without force — authority becomes natural."
              },
              {
                title: "Emotional & Cognitive Resilience",
                desc: "Remain grounded under pressure and high-stakes responsibility."
              },
              {
                title: "Time & Energy Mastery",
                desc: "Reclaim 10–15 hours per week previously lost to mental friction."
              },
              {
                title: "Strategic Impact & Legacy",
                desc: "Lead in a way that creates lasting professional and personal impact."
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#E8C547] pl-8">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#3F4F4B] text-lg">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32">
        <h2 className="text-4xl font-semibold mb-16">
          How the Program Works
        </h2>

        <div className="space-y-12 max-w-4xl">
          <p className="text-xl text-[#3F4F4B] leading-relaxed">
            <strong>Discovery & Deep Mapping</strong> — Identify leadership blueprint,
            decision patterns, and internal friction.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed">
            <strong>Recalibration & Alignment</strong> — Remove outdated conditioning
            and restore internal coherence.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed">
            <strong>Activation & Integration</strong> — Embed new ways of thinking,
            deciding, and leading naturally.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed">
            <strong>Ongoing Support & Accountability</strong> — Ensure clarity
            sustains as responsibilities evolve.
          </p>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-[#1F3D2B] py-32 px-6 md:px-16 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Investment
        </h2>

        <p className="text-3xl font-medium mb-4">
          ₹5,00,000
        </p>

        <p className="text-lg text-white/85 max-w-3xl mx-auto mb-10">
          This is not a program you consume.
          It is a strategic investment in clarity, authority,
          leadership presence, and long-term impact.
        </p>

        <p className="text-sm text-white/70 max-w-2xl mx-auto">
          Only 6–8 leaders are accepted per quarter to ensure depth,
          discretion, and personalized transformation.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16">
        <h2 className="text-4xl font-semibold mb-6">
          Let’s Explore If This Is the Right Fit
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          This is not a sales call.
          It’s a confidential conversation to assess alignment —
          for you and for the work.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Book a Private Conversation
        </a>
      </section>

    </main>
  );
}
