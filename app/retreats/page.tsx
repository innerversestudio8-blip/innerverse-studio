export default function RetreatsPage() {
  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Retreats
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F3D2B] leading-tight mb-6">
            Step Away to Think Clearly — Return With Authority
          </h1>

          <p className="text-xl text-[#3F4F4B] mb-8">
            Innerverse Retreats are immersive, invitation-led experiences
            designed for leaders who need distance from noise to reconnect
            with clarity, identity, and direction.
          </p>

          <p className="text-lg text-[#4A5A55]">
            This is not a wellness getaway.
            It’s a deliberate pause to reset how you think, decide, and lead.
          </p>
        </div>
      </section>

      {/* ================= WHY RETREATS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            Why Leaders Need Retreats
          </h2>

          <p className="text-lg text-[#4A5A55] mb-6">
            When responsibility is constant, clarity erodes quietly.
            Not because you’re incapable — but because the mind never
            gets the space required for deep recalibration.
          </p>

          <p className="text-lg text-[#4A5A55] mb-6">
            Retreats create separation from operational demands,
            social expectations, and reactive thinking —
            allowing insight, perspective, and authority to re-emerge.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Leaders don’t need more input.
            They need space to listen inward again.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/illustrations/retreat-reflection.png"
            alt="Leader reflection retreat"
            className="w-[420px]"
          />
        </div>
      </section>

      {/* ================= WHAT HAPPENS ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">

          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-12">
            What Happens During an Innerverse Retreat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Mental Reset",
                desc: "Structured space to decompress, slow thinking, and release decision fatigue."
              },
              {
                title: "Identity Reconnection",
                desc: "Revisiting who you are beneath roles, expectations, and performance."
              },
              {
                title: "Strategic Realignment",
                desc: "Clarifying priorities across leadership, relationships, and personal life."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#1F3D2B] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#4A5A55]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          <p className="text-lg text-[#4A5A55] mt-12 max-w-4xl">
            Retreats are intentionally small, guided, and selective.
            This ensures depth, privacy, and meaningful transformation —
            not surface-level experiences.
          </p>

        </div>
      </section>

      {/* ================= UPCOMING RETREAT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            Upcoming Innerverse Retreat
          </h2>

          <p className="text-lg text-[#4A5A55] mb-6">
            Each retreat is announced selectively.
            Locations, duration, and structure are shared
            only after an initial conversation.
          </p>

          <p className="text-lg text-[#4A5A55] mb-6">
            Participation requires alignment, readiness,
            and a genuine commitment to inner work.
          </p>

          <p className="text-lg font-medium text-[#1F3D2B]">
            Limited seats. Private environment. Deep work.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
            Reserve Your Spot
          </h3>

          <p className="text-[#4A5A55] mb-6">
            A refundable deposit confirms interest and
            initiates a private conversation about fit.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-[#E8C547] text-[#1F3D2B] font-medium shadow-lg hover:scale-105 transition"
          >
            Apply for Retreat Access
          </a>
        </div>

      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="text-center py-28 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
          Not Everyone Needs a Retreat.
        </h2>

        <p className="text-lg text-[#4A5A55] mb-10 max-w-2xl mx-auto">
          But leaders who step away intentionally often return
          with sharper clarity, stronger authority, and deeper alignment.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Request Retreat Details
        </a>

      </section>

    </main>
  );
}
