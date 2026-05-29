
export default function HomePage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B] overflow-hidden">

      
      
      {/* ================= HERO ================= */} 
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10"> 
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-center"> 
          {/* LEFT */} 
          <div className="max-w-xl"> 
            <p className="uppercase tracking-[0.22em] text-xs text-[#6B7F6A] mb-4"> 
              Innerverse Studio </p> 
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight mb-6"> 
                Strategic Clarity for Leaders Operating 
                Under Sustained Pressure </h1> 
            <p className="text-lg text-[#3F4F4B] leading-relaxed mb-5"> 
              Even when everything appears under control, 
              the weight of decisions never fully leaves your mind. 
              Clarity slips quietly while expectations continue to rise. </p>
            <p className="text-lg text-[#3F4F4B] leading-relaxed mb-7"> 
              Innerverse Studio helps founders, executives, 
              and high-responsibility professionals recalibrate 
              the internal architecture behind clear decisions, 
              calm execution, and aligned leadership. </p> 
              {/* CTA */} 
            <div className="flex flex-col sm:flex-row gap-4 mb-5"> 
              {/* <a href="/assessment/decision-inflection" 
                className="inline-block px-8 py-3 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition text-center" > 
                Begin Diagnostic
              </a>  */}
              {/* <a href="/contact" 
                className="inline-block px-8 py-3 rounded-full border border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition text-center" > 
                Private Conversation </a>  */}
            </div> 
            {/* <p className="text-sm text-[#6B7F6A]"> 
              Designed for leaders navigating high-responsibility 
              decisions with discretion and depth. 
            </p>  */}
            {/* Founder */} 
            <a href="/about" 
              target="_blank" rel="noopener noreferrer"  
              className="flex items-center gap-3 mt-6 pt-5 border-t border-[#E5ECE7] hover:opacity-80 transition w-fit" > 
              <img src="/illustrations/founder2.jpeg" 
              alt="Pritam Sawant" 
              className="w-12 h-12 rounded-full object-cover" /> 
              <div> 
                <p className="font-medium text-sm"> 
                  Pritam Sawant </p> 
                  <p className="text-xs text-[#6B7F6A]"> 
                    Founder, Innerverse Studio </p> 
                    <p className="text-xs text-[#94A39A] mt-1"> 
                      View About Founder → </p> 
                </div> 
            </a>
            </div> 
            {/* RIGHT IMAGE */} 
            <div className="flex justify-center lg:justify-end"> 
              <img src="/illustrations/Hero.jpg" 
              alt="Strategic clarity" 
              className="w-full max-w-md h-[360px] object-cover rounded-3xl shadow-2xl" /> 
              </div> 
          </div> 
      </section>
          

      {/* ================= PROBLEM ================= */}
      <section className="bg-[#F4F7F3] py-16 px-6 md:px-16 text-center">

        <p className="max-w-4xl mx-auto text-3xl md:text-4xl font-medium leading-snug">
          When responsibility grows faster than clarity,
          decisions become heavier — even for capable leaders.
        </p>

      </section>

      {/* ================= EXECUTIVE DIAGNOSTICS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        <div className="max-w-4xl mb-12">

          <p className="uppercase tracking-[0.25em] text-sm text-[#6B7F6A] mb-4">
            Executive Diagnostic Assessments
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Clarity Begins With Accurate Diagnosis
          </h2>

          <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Most leaders do not lack intelligence.
            They lack structural clarity under pressure.

            These assessments identify where friction,
            overload, delayed decisions, and internal misalignment
            quietly shape outcomes.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-md border border-[#E5ECE7]">

            <p className="text-sm uppercase tracking-[0.2em] text-[#6B7F6A] mb-3">
              Diagnostic 01
            </p>

            <h3 className="text-3xl font-semibold mb-4">
              Decision Inflection Audit
            </h3>

            <p className="text-[#4A5A55] leading-relaxed mb-8">
              Identify where delayed decisions are quietly
              compounding emotional, operational,
              and strategic cost.
            </p>

            <a
              href="/assessment/decision-inflection"
              className="inline-block px-8 py-3 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
            >
              Begin Assessment
            </a>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-md border border-[#E5ECE7]">

            <p className="text-sm uppercase tracking-[0.2em] text-[#6B7F6A] mb-3">
              Diagnostic 02
            </p>

            <h3 className="text-3xl font-semibold mb-4">
              Inner Architecture Index
            </h3>

            <p className="text-[#4A5A55] leading-relaxed mb-8">
              Reveal structural overload affecting
              clarity, emotional steadiness,
              and leadership execution.
            </p>

            <a
              href="/assessment/inner-architecture"
              className="inline-block px-8 py-3 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
            >
              Begin Assessment
            </a>

          </div>

        </div>

        <p className="text-center text-lg text-[#4A5A55] mt-10 max-w-3xl mx-auto leading-relaxed">
          Most leaders recognize pressure only after performance begins to suffer.
          These assessments surface hidden friction before it compounds.
        </p>

      </section>

      {/* ================= WHAT INNERVERSE DOES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-4xl font-semibold mb-6">
            What Innerverse Studio Does
          </h2>

          <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Innerverse is not about motivation,
            productivity hacks, or surface-level mindset work.
          </p>

          <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            This work recalibrates the internal position
            from which decisions are made —
            so clarity becomes stable,
            reliable, and inherent.
          </p>

          <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed text-justify">
            Leaders who operate from this position
            think more clearly, decide faster,
            and lead with calm authority.
          </p>

        </div>

        <img
          src="/illustrations/transformation.jpg"
          alt="Strategic transformation"
          className="w-full max-w-lg h-[480px] object-cover rounded-3xl shadow-xl mx-auto"
        />

      </section>

      {/* ================= TRUST POSITIONING ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        <div className="bg-white rounded-3xl p-12 shadow-md border border-[#E5ECE7]">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.25em] text-sm text-[#6B7F6A] mb-4">
              Founder-Led Advisory Platform
            </p>

            <h2 className="text-4xl font-semibold mb-6">
              Built for Leaders Navigating Quiet Pressure
            </h2>

            <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
              Innerverse Studio was created to support founders,
              executives, and high-responsibility professionals
              operating under sustained decision pressure.
            </p>

            <p className="text-lg md:text-xl text-[#3F4F4B] leading-relaxed text-justify">
              This work is selective, private, and designed
              for leaders seeking structural clarity —
              not surface-level motivation.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        <div className="max-w-4xl mb-12">

          <p className="uppercase tracking-[0.25em] text-sm text-[#6B7F6A] mb-4">
            The Process
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            How Strategic Recalibration Works
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              step: "Step 01",
              title: "Diagnostic Assessment",
              text: "Surface hidden friction, overload, and pressure patterns shaping strategic decisions.",
            },
            {
              step: "Step 02",
              title: "Strategic Recalibration",
              text: "Private conversations designed to restore structural clarity and aligned decision-making.",
            },
            {
              step: "Step 03",
              title: "Calm Execution",
              text: "Operate with steadiness, faster decisions, and reduced internal friction.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-10 shadow-md"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-[#6B7F6A] mb-3">
                {item.step}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-[#4A5A55] leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#1F3D2B] py-20 px-6 md:px-16 text-white">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-semibold mb-6">
            How Leaders Work With Innerverse
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 text-justify">
            Innerverse offers private, high-trust engagements
            for leaders whose decisions shape people,
            organizations, and long-term outcomes.
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 text-justify">
            This work is selective, discreet,
            and designed for leaders ready to operate
            from clarity, not pressure.
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
      <section className="bg-[#F4F7F3] py-20 px-6 md:px-16">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold mb-12">
            What Leaders Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                quote:
                  "After working with Innerverse, I made decisions in minutes that previously took days.",
                author: "Senior Operations Executive",
                industry: "Bangalore SaaS Company",
              },
              {
                quote:
                  "The clarity I gained improved both my personal and professional life. Meetings became calmer and pressure stopped destabilizing me.",
                author: "Founder",
                industry: "Fintech Startup",
              },
              {
                quote:
                  "Meetings became calmer, decisions became cleaner, and I stopped carrying unresolved pressure into every part of my day.",
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
      <section className="text-center py-20 px-6 md:px-16">

        <h2 className="text-4xl font-semibold mb-6">
          Clarity Changes How Everything Moves
        </h2>

        <p className="text-lg md:text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-8">
          When decisions feel clean, leadership feels calm.
          And when leadership feels calm, impact follows naturally.
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full border border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white transition"
        >
          Private Conversation
        </a>

      </section>

    </main>
  );
}

