export default function RetreatsPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Innerverse Retreats
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Step Away. Think Clearly.  
            Lead With Authority — at Work and Beyond.
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Invitation-only retreats for leaders ready to reset their mind,
            reconnect with identity, and return with unshakable clarity,
            calm authority, and renewed influence.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Limited seats. Private environments. Deep work.
          </p>
        </div>
      </section>

      {/* ================= WHY RETREATS ================= */}
      <section className="bg-[#F4F7F3] py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10">
            Why Leaders Need Retreats
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            When responsibility is constant, clarity erodes quietly.
            Not because you’re incapable — but because the mind never
            gets the space required for deep recalibration.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Innerverse Retreats create separation from:
          </p>

          <ul className="space-y-3 text-lg text-[#4A5A55] mb-8">
            <li>• Operational demands</li>
            <li>• Social expectations</li>
            <li>• Reactive thinking loops</li>
          </ul>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            This separation allows insight, perspective,
            and authority to re-emerge naturally.
            Leaders don’t need more input —
            they need space to listen inward again.
          </p>
        </div>
      </section>

      {/* ================= TRANSFORMATION VIGNETTE ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Transformation Story
          </h3>

          <p className="text-[#3F4F4B] leading-relaxed mb-4">
            <strong>Before:</strong> A senior operations leader in a Fortune 500 company faced constant mental fatigue from operational, 
            strategic, and personal pressures.
          </p>

          <p className="text-[#3F4F4B] leading-relaxed">
            <strong>After:</strong> Decision-making clarity improved 2–3×. Stress reduced ~70%. 
            Presence became calm and authoritative — at work, home, and in social life.
          </p>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-semibold mb-6">
            This Retreat Is For Leaders Who Want
          </h2>

          <ul className="space-y-4 text-xl text-[#3F4F4B]">
            <li>• Mental reset and reduction in decision fatigue (~70%)</li>
            <li>• Decisions made 2–3× faster in high-stakes situations</li>
            <li>• Calm authority that naturally commands respect</li>
            <li>• Strategic priorities clarified across work and life</li>
            <li>• Privacy, depth, and space to recalibrate identity</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            This Retreat Is Not
          </h3>

          <ul className="space-y-3 text-[#4A5A55]">
            <li>• Quick-fix or surface-level experiences</li>
            <li>• High-energy or performative environments</li>
            <li>• Group tourism disguised as growth</li>
            <li>• Leaders avoiding responsibility</li>
          </ul>
        </div>

      </section>

      {/* ================= WHAT HAPPENS ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">
          <h2 className="text-4xl font-semibold mb-12">
            What Happens During an Innerverse Retreat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Mental Reset",
                desc: "Space to decompress, slow thinking, and release decision fatigue."
              },
              {
                title: "Identity Reconnection",
                desc: "Reconnect with who you are beneath roles, expectations, and performance."
              },
              {
                title: "Strategic Realignment",
                desc: "Clarify priorities across leadership, relationships, and personal life."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">
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

      {/* ================= ROI / OUTCOMES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <h2 className="text-4xl font-semibold mb-12">
          What Leaders Experience After Retreats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "Decision-making clarity improves 2–3×",
            "Stress and mental fatigue reduce ~70%",
            "Leadership presence becomes calm and authoritative",
            "Teams align faster through clearer direction",
            "Strategic priorities feel settled across work and life",
            "Influence extends naturally across professional and personal spheres",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-[#E8C547]"
            >
              <p className="text-[#3F4F4B] text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold mb-6">
          Apply for Retreat Access
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          Not an event registration.
          A refundable deposit initiates a private conversation
          to assess alignment and readiness.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply for Retreat Access
        </a>

        <p className="text-sm text-[#6B7F6A] mt-4">
          Limited seats. Private environment. Deep work.
        </p>
      </section>

    </main>
  );
}
