export default function RetreatsPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-6">
            Innerverse Retreats
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Step Away.  
            <br />Think Clearly.  
            <br />Lead With Authority.
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Innerverse Retreats are invitation-only experiences for leaders
            ready to reset their mind, reconnect with identity, and return
            with unshakable clarity, calm authority, and renewed influence.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Limited seats. Private environments. Deep work.
          </p>
        </div>

        {/* HERO VISUAL */}
        <img
          src="/illustrations/leadership-clarity.png"
          alt="Leadership retreat clarity illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>

      {/* ================= WHY RETREATS ================= */}
      <section className="bg-[#F4F7F3] py-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10">
            Why Leaders Need Retreats
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            When responsibility is constant, clarity erodes quietly —
            not because you are incapable, but because the mind never
            gets the space required for deep recalibration.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Innerverse Retreats create separation from operational demands,
            social expectations, and reactive thinking.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Leaders don’t need more input.
            They need space to listen inward again.
          </p>
        </div>
      </section>

      {/* ================= WHAT HAPPENS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32">
        <h2 className="text-4xl font-semibold mb-16">
          What Happens During an Innerverse Retreat
        </h2>

        <div className="space-y-16 max-w-4xl">

          <div className="border-l-4 border-[#E8C547] pl-8">
            <h3 className="text-2xl font-semibold mb-3">Mental Reset</h3>
            <p className="text-lg text-[#3F4F4B]">
              Structured space to decompress, slow thinking,
              and release accumulated decision fatigue.
            </p>
          </div>

          <div className="border-l-4 border-[#E8C547] pl-8">
            <h3 className="text-2xl font-semibold mb-3">Identity Reconnection</h3>
            <p className="text-lg text-[#3F4F4B]">
              Revisit who you are beneath roles, expectations,
              and performance pressure.
            </p>
          </div>

          <div className="border-l-4 border-[#E8C547] pl-8">
            <h3 className="text-2xl font-semibold mb-3">Strategic Realignment</h3>
            <p className="text-lg text-[#3F4F4B]">
              Clarify priorities across leadership,
              relationships, and personal life.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHO IT IS FOR ================= */}
      <section className="bg-[#1F3D2B] py-32 px-6 md:px-16 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

          <div>
            <h2 className="text-4xl font-semibold mb-8">
              This Retreat Is For You If
            </h2>

            <ul className="space-y-5 text-lg text-white/90">
              <li>• You carry high responsibility silently</li>
              <li>• You want clarity without escape or distraction</li>
              <li>• You value depth, privacy, and discretion</li>
              <li>• You are ready for internal recalibration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-8">
              This Retreat Is Not For
            </h2>

            <ul className="space-y-5 text-lg text-white/90">
              <li>• Quick fixes or surface-level experiences</li>
              <li>• Motivational or high-energy environments</li>
              <li>• Leaders avoiding responsibility</li>
              <li>• Group tourism disguised as growth</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-32">
        <h2 className="text-4xl font-semibold mb-16">
          What Leaders Experience After Retreats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {[
            "Decision-making clarity improves 2–3× within weeks",
            "Stress and mental fatigue reduce by ~70%",
            "Leadership presence becomes calm and authoritative",
            "Teams align faster through clearer direction",
            "Strategic priorities feel settled and coherent",
            "Influence extends naturally across work and life",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-md"
            >
              <p className="text-lg text-[#3F4F4B]">{item}</p>
            </div>
          ))}

        </div>
      </section>

     {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F4F7F3] py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-[#1F3D2B]">
            What Leaders Say
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
                  "The clarity I gained improved both my personal and professional life — meetings were shorter and I felt calm under pressure.",
                author: "Founder",
                industry: "Fintech Startup",
              },
              {
                quote:
                  "Two weeks of recalibration gave me a lens to see priorities clearly. Decisions impacting ~$3M were made with precision.",
                author: "Director",
                industry: "Manufacturing",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-md flex flex-col justify-between"
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


      {/* ================= CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16">
        <h2 className="text-4xl font-semibold mb-6">
          Apply for Retreat Access
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          This is not an event registration.
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
