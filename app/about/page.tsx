export default function AboutPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            About Innerverse Studio
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Clarity Is Not a Skill. <br />
            It’s a Position You Stand In.
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            When responsibility grows faster than clarity, everything feels heavy.
            Innerverse Studio restores the internal position from which effortless,
            aligned decisions flow — quietly, powerfully, and permanently.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            We exist for leaders who carry responsibility silently —
            professionally, personally, and socially — and feel the weight
            of decisions more than the need to speak about it.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            The Philosophy Behind Innerverse
          </h2>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Most leaders don’t struggle because they lack intelligence,
            ambition, or discipline. They struggle because responsibility
            grows faster than their internal decision framework.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            As roles expand, expectations multiply, and visibility increases,
            the mind carries more than it was designed to hold.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Innerverse Studio recalibrates the internal position from which
            decisions are made — so clarity becomes stable, reliable,
            and inherent, not situational or fleeting.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            This Work Is Not
          </h3>

          <ul className="space-y-3 text-[#4A5A55]">
            <li>• Motivation.</li>
            <li>• Surface-level mindset work.</li>
            <li>• Productivity hacks.</li>
            <li>• Performance tricks.</li>
            <li>• Group programs.</li>
            <li>• Generic leadership advice.</li>
            <li>• Therapy.</li>
            <li>• Venting.</li> 
            <li>• Emotional dependency.</li>
          </ul>
        </div>
      </section>

      {/* ================= TRANSFORMATION VIGNETTE ================= */}
      <section className="bg-[#F4F7F3] py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Transformation Story
          </h3>

          <p className="text-[#3F4F4B] leading-relaxed mb-4">
            <strong>Before:</strong> A CXO in a leading tech firm spent 6+ hours/week in indecision, reactive to emails, 
            teams, and family demands.
          </p>

          <p className="text-[#3F4F4B] leading-relaxed">
            <strong>After:</strong> Decisions on multi-million-rupee projects executed in under 30 minutes. 
            Mental bandwidth restored for strategy, relationships, and priorities.
          </p>
        </div>
      </section>


      {/* ================= FOUNDER ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <img
            src="/illustrations/founder2.jpeg"
            alt="Founder & Coach"
            className="w-full max-w-md rounded-3xl shadow-xl mx-auto"
          />

          <div>
            <h2 className="text-4xl font-semibold mb-6">
              About the Founder & Coach
            </h2>

            <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
              I work with founders, CXOs, and senior professionals who are
              externally successful yet internally carrying unresolved
              decision weight, responsibility pressure, and quiet isolation.
            </p>

            <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
              This work emerged from years of observing intelligent leaders
              lose clarity — not through failure, but prolonged responsibility
              without recalibration.
            </p>

            <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
              I don’t advise your life. I restore the internal position
              from which decisions feel composed, confident, and aligned.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F4F7F3] py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16">
            Reflections From Leaders
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
                  "The clarity I gained improved both my personal and professional life. Meetings shortened and pressure no longer destabilized me.",
                author: "Founder",
                industry: "Fintech Startup",
              },
              {
                quote:
                  "Two weeks of recalibration gave me clarity for $3M decisions and alignment in personal life as well.",
                author: "Director",
                industry: "Manufacturing",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-md">
                <p className="text-lg text-[#3F4F4B] leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <p className="text-sm text-[#6B7F6A]">
                  — {t.author}, {t.industry}
                </p>
              </div>
            ))}
          </div>
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
