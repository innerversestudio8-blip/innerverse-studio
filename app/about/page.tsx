export default function AboutPage() {
  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            About Innerverse Studio
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F3D2B] leading-tight mb-6">
            Clarity Is Not a Skill.  
            It’s a Position You Learn to Stand In.
          </h1>

          <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
            Innerverse Studio exists for leaders who carry responsibility quietly —
            professionally, personally, and socially — and feel the weight of decisions
            more than they speak about it.
          </p>

          <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
            This work is about restoring inner authority,
            not adding more strategies, frameworks, or noise.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            The Philosophy Behind Innerverse
          </h2>

          <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
            Most leaders don’t struggle because they lack intelligence,
            ambition, or discipline.
          </p>

          <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
            They struggle because responsibility grows faster than
            their internal decision framework.
            As roles expand, expectations multiply, and visibility increases,
            the mind begins carrying more than it was designed to hold alone.
          </p>

          <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
            Innerverse Studio focuses on recalibrating the *inner position*
            from which decisions are made — so clarity becomes stable,
            not situational.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
            What This Work Is Not
          </h3>

          <ul className="space-y-4 text-[#4A5A55]">
            <li>• Not motivation or surface-level mindset work</li>
            <li>• Not performance hacks or productivity coaching</li>
            <li>• Not group programs or generic leadership advice</li>
            <li>• Not therapy, venting, or emotional dependency</li>
          </ul>
        </div>

      </section>

      {/* ================= ABOUT THE COACH ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* COACH IMAGE */}
          <img
            src="illustrations/coach.jpeg"
            alt="Founder & Coach"
            className="w-full max-w-md rounded-3xl shadow-xl mx-auto"
          />

          {/* COACH STORY */}
          <div>
            <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
              About the Founder & Coach
            </h2>

            <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
              I work with founders, CXOs, and senior professionals who are
              outwardly successful yet internally carrying unresolved decision
              weight, responsibility pressure, and quiet isolation.
            </p>

            <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
              This work comes from years of observing how intelligent,
              capable leaders slowly lose clarity — not due to failure,
              but due to prolonged responsibility without recalibration.
            </p>

            <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
              My role is not to advise your life,
              but to help you restore a grounded internal position
              from which decisions feel clean, confident, and aligned.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">

        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-10">
          Who This Work Is Designed For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
              This Is For You If
            </h3>

            <ul className="space-y-3 text-[#4A5A55]">
              <li>• You carry responsibility across multiple domains</li>
              <li>• You think deeply but feel mentally overloaded</li>
              <li>• You want authority, not validation</li>
              <li>• You value discretion and depth</li>
              <li>• You are ready to recalibrate, not escape</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-4">
              This Is Not For
            </h3>

            <ul className="space-y-3 text-[#4A5A55]">
              <li>• Quick fixes or motivational consumption</li>
              <li>• People avoiding responsibility</li>
              <li>• Leaders seeking validation or reassurance</li>
              <li>• Surface-level mindset work</li>
            </ul>
          </div>

        </div>

      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="text-center py-28 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
          Clarity Changes How Everything Moves.
        </h2>

        <p className="text-xl text-[#3F4F4B] mb-8 text-justify leading-relaxed">
          When decisions feel clean, leadership feels calm.
          And when leadership feels calm, impact follows naturally.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply for a Private Conversation
        </a>

      </section>

    </main>
  );
}
