export default function Home() {
  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT: TEXT */}
          <div>
            <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
              Innerverse Studio
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold text-[#1F3D2B] leading-tight mb-6">
              Clarity for Leaders <br /> Who Carry Real Responsibility
            </h1>

            <h2 className="text-xl text-[#3F4F4B] mb-6">
              Faster Decisions. Stronger Authority. Elevated Impact —
              Professionally & Personally.
            </h2>

            <p className="text-lg text-[#4A5A55] mb-6">
              You’re capable, experienced, and trusted — yet decisions feel heavier,
              overthinking lingers, and clarity is fleeting.
            </p>

            <p className="text-lg text-[#4A5A55] mb-8">
              Innerverse Studio helps founders, CXOs, and senior leaders restore
              mental clarity, confidence, and decision authority — so they can
              lead with calm, make bold moves, strengthen relationships, and unlock
              higher influence at work and in life.
            </p>

            <p className="text-lg font-medium text-[#1F3D2B] mb-10">
              Think sharper. Feel stronger. Lead better — at work, at home, and in society.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/contact"
                className="px-10 py-4 rounded-full bg-[#E8C547] text-[#1F3D2B] font-medium shadow-lg hover:scale-105 transition"
              >
                Book Your Private Clarity Session
              </a>

              <span className="text-sm text-[#6B7F6A]">
                Confidential. Selective. By design.
              </span>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center">
            <img
              src="/illustrations/hero.png"
              alt="Leadership clarity"
              className="w-[420px]"
            />
          </div>

        </div>
      </section>

      {/* ================= DECISION LOAD ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* TEXT + CARDS */}
        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            The Real Problem Isn’t Skill — It’s Decision Load
          </h2>

          <p className="text-lg text-[#4A5A55] mb-10">
            You’re not struggling because you lack competence.
            You’re struggling because your responsibility — professional and
            personal — has outgrown your decision framework.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Slow decisions → missed business opportunities, delayed growth, lost revenue",
              "Unclear thinking → weaker influence, second-guessing, stalled promotions",
              "Mental overload → stress, burnout, strained personal relationships",
              "Carrying everything alone → reduced team confidence and social isolation",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl p-6
                  bg-gradient-to-br from-[#FFFFFF] to-[#F1F6F3]
                  border-l-4 border-[#E8C547]
                  shadow-md
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <p className="text-[#3F4F4B]">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-[#4A5A55] mt-8">
            Externally, you perform well.
            <br />
            Internally, your career, relationships, status, and influence remain capped —
            until clarity returns.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/illustrations/decision.png"
            alt="Decision load illustration"
            className="w-[380px]"
          />
        </div>
      </section>

      {/* ================= TRANSFORMATION ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">

          <div className="flex justify-center mb-14">
            <img
              src="/illustrations/transformation.png"
              alt="Leadership transformation"
              className="w-[680px]"
            />
          </div>

          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-12 text-center">
            The Shift: From Mental Load to Clear Authority
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Before</h3>
              <ul className="space-y-3 text-[#4A5A55]">
                <li>• Overthinking and delayed decisions</li>
                <li>• Mental fatigue and stress</li>
                <li>• Reduced confidence and presence</li>
                <li>• Responsibility without clarity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">After</h3>
              <ul className="space-y-3 text-[#4A5A55]">
                <li>• Faster, cleaner decisions</li>
                <li>• Calm authority under pressure</li>
                <li>• Strong leadership presence</li>
                <li>• Career and life acceleration</li>
              </ul>
            </div>
          </div>

          <blockquote className="mt-16 text-xl italic text-center text-[#1F3D2B] max-w-4xl mx-auto">
            “I know exactly what to do — at work, with my team, and in life.
            My influence, relationships, and status have all improved.”
          </blockquote>
        </div>
      </section>

      {/* ================= ABOUT COACH PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <img
          src="/illustrations/coach.jpeg"
          alt="Founder & Coach"
          className="w-full max-w-md rounded-3xl shadow-xl mx-auto"
        />

        <div>
          <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
            About the Coach
          </h2>

          <p className="text-lg text-[#4A5A55] mb-6">
            I work with leaders who carry real responsibility — founders,
            CXOs, and senior professionals navigating complexity, pressure,
            and high-stakes decisions.
          </p>

          <p className="text-lg text-[#4A5A55]">
            This work is private, selective, and designed for those ready
            to lead with clarity, calm authority, and real impact.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-28">
        <h2 className="text-4xl font-semibold text-[#1F3D2B] mb-6">
          Apply for a Private Clarity Session
        </h2>

        <p className="text-lg text-[#4A5A55] mb-10">
          Not a sales call. A confidential conversation to assess fit.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply Now
        </a>

        <p className="text-sm text-[#6B7F6A] mt-4">
          Discreet. Confidential. Limited availability.
        </p>
      </section>

    </main>
  );
}
