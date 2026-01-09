export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Services
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            1:1 Identity & Leadership Recalibration
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
            Where you go depends on how you grow.
            This is a private, one-to-one engagement for leaders whose decisions
            shape organizations, teams, and lives — while responsibility is
            carried silently.
          </p>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            The work restores the internal position from which clarity,
            calm authority, and decisive leadership flow naturally —
            across professional, personal, and social spheres.
          </p>
        </div>
      </section>

      {/* ================= TRANSFORMATION VIGNETTE ================= */}
      <section className="bg-[#F4F7F3] py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Transformation Vignette
          </h3>

          <p className="text-[#3F4F4B] leading-relaxed mb-4">
            <strong>Before:</strong> Leader spent 6+ hours/week in indecision,
            reactive to emails, teams, and family demands.
          </p>

          <p className="text-[#3F4F4B] leading-relaxed">
            <strong>After:</strong> Decisions impacting multi-million-rupee
            projects executed in under 30 minutes. Mental bandwidth restored
            for strategy, relationships, and personal priorities.
          </p>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28 grid grid-cols-1 md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-semibold mb-6">
            This Engagement Is For Leaders Who Want
          </h2>

          <ul className="space-y-4 text-xl text-[#3F4F4B]">
            <li>• Absolute clarity in complex, high-stakes decisions</li>
            <li>• Calm, authoritative presence that influences naturally</li>
            <li>• Decisions made 2–3× faster under pressure</li>
            <li>• 10–15 hours/week of mental bandwidth reclaimed</li>
            <li>• Alignment across work, personal life, and relationships</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            This Engagement Is Not
          </h3>

          <ul className="space-y-3 text-[#4A5A55]">
            <li>• Quick-fix programs or motivational content</li>
            <li>• Group programs or generic leadership frameworks</li>
            <li>• Leaders avoiding responsibility or pressure</li>
            <li>• Surface-level mindset or performance hacks</li>
          </ul>
        </div>

      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <h2 className="text-4xl font-semibold mb-12">
          Outcomes of Recalibration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "Clarity that holds under pressure — professionally and personally",
            "Authority that feels natural, not forced",
            "Resilience in high-stakes environments",
            "Time and energy reclaimed for what truly matters",
            "Strategic leadership impact and long-term legacy",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl p-8 bg-white shadow-md border-l-4 border-[#E8C547]"
            >
              <p className="text-[#3F4F4B] text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gradient-to-r from-[#F3E8E2] to-[#E8F3EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">
          <h2 className="text-4xl font-semibold mb-12">
            How the Engagement Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                title: "Discovery & Deep Mapping",
                desc: "Identify leadership blueprint, decision triggers, and internal friction."
              },
              {
                title: "Recalibration & Alignment",
                desc: "Release outdated conditioning and restore coherence."
              },
              {
                title: "Activation & Integration",
                desc: "Embed new decision-making and leadership patterns."
              },
              {
                title: "Ongoing Continuity",
                desc: "Sustain clarity as responsibilities evolve."
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4A5A55]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <h2 className="text-4xl font-semibold mb-6">
          Investment
        </h2>

        <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
          ₹5,00,000 — a strategic, high-trust investment in clarity,
          authority, presence, and long-term impact.
        </p>

        <p className="text-lg text-[#4A5A55] mb-6">
          Only 6–8 leaders per quarter to ensure depth,
          discretion, and exclusivity.
        </p>

        <p className="text-lg text-[#4A5A55] text-justify">
          This investment is less than a fraction of the value
          generated through faster decisions, stronger alignment,
          and sustained leadership influence.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-28 px-6 md:px-16 bg-[#F4F7F3]">
        <h2 className="text-4xl font-semibold mb-6">
          Apply for a Private Conversation
        </h2>

        <p className="text-xl text-[#3F4F4B] max-w-3xl mx-auto mb-10">
          This is not a sales call.
          It’s a confidential, one-to-one conversation to assess alignment
          with your level of responsibility and readiness for transformation.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
        >
          Apply for a Private Conversation
        </a>

        <p className="text-sm text-[#6B7F6A] mt-4">
          Selective. Confidential. Transformational.
        </p>
      </section>

    </main>
  );
}
