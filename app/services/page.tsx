export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Services
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F3D2B] leading-tight mb-6">
            Private 1:1 Identity & Leadership Recalibration
          </h1>

          <p className="text-xl text-[#3F4F4B] mb-8">
            This is not coaching for motivation or productivity.
            This is a private, high-trust engagement designed to restore clarity,
            decision authority, and leadership presence.
          </p>

          <p className="text-lg text-[#4A5A55]">
            Built for founders, CXOs, and senior leaders carrying real responsibility —
            professionally and personally.
          </p>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            This Engagement Is For You If
          </h2>

          <ul className="space-y-4 text-lg text-[#4A5A55]">
            <li>• You’re successful, but mental clarity feels inconsistent</li>
            <li>• Decisions feel heavier than they used to</li>
            <li>• You carry responsibility alone — at work and at home</li>
            <li>• You want authority, not validation</li>
            <li>• You’re ready to think and decide from a stronger inner position</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
            This Is NOT For
          </h3>

          <ul className="space-y-3 text-[#4A5A55]">
            <li>• Quick fixes or motivational talks</li>
            <li>• Group programs or generic frameworks</li>
            <li>• People seeking advice without ownership</li>
            <li>• Surface-level mindset work</li>
          </ul>
        </div>

      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">

          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-12">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Private 1:1 Engagement",
                desc: "A confidential, distraction-free space designed exclusively for you."
              },
              {
                title: "8–12 Week Framework",
                desc: "Enough time to reset thinking patterns, decision structures, and identity."
              },
              {
                title: "Clarity Over Activity",
                desc: "No busywork. Every conversation drives insight, direction, and authority."
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
            This work is not about doing more.
            It’s about thinking from the right place — so decisions feel clean,
            leadership feels calm, and life feels aligned.
          </p>

        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">

        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-10">
          What Changes as a Result
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "Faster, cleaner decisions without second-guessing",
            "Calm authority in high-pressure environments",
            "Stronger leadership presence and social confidence",
            "Clear priorities across career, family, and self",
            "Reduced mental noise and internal conflict",
            "A settled sense of direction and identity",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-2xl p-6
                bg-gradient-to-br from-[#FFFFFF] to-[#F1F6F3]
                border-l-4 border-[#E8C547]
                shadow-md
              "
            >
              <p className="text-[#3F4F4B]">{item}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-28 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
          Apply for a Private Clarity Session
        </h2>

        <p className="text-lg text-[#4A5A55] mb-10 max-w-2xl mx-auto">
          This is not a sales call.
          It’s a confidential conversation to assess fit — for you and for the work.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply Now
        </a>

        <p className="text-sm text-[#6B7F6A] mt-4">
          Discreet. Private. Limited availability.
        </p>
      </section>

    </main>
  );
}
