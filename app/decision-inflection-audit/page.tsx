"use client";

import Link from "next/link";

export default function AssessmentHub() {
  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pt-28 pb-20 text-center">
        
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
          Inner Architecture Diagnostics
        </h1>

        <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6">
          Choose the calibration that reflects your current challenge.
        </p>

        <p className="text-lg text-[#4A5A55] max-w-3xl mx-auto">
          Each diagnostic is designed to identify structural gaps in how you think,
          decide, and operate at scale.
        </p>

      </section>

      {/* OPTIONS */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32 grid md:grid-cols-2 gap-8">

        {/* DECISION INFLECTION */}
        <div className="bg-white rounded-3xl p-10 shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">
            Decision Inflection Audit
          </h2>

          <p className="text-[#4A5A55]">
            Identify whether you are sitting on a high-stakes decision
            that is quietly shaping your next phase.
          </p>

          <Link
            href="/assessment/decision-inflection"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-[#1F3D2B] text-white hover:scale-105 transition"
          >
            Start Decision Audit
          </Link>
        </div>

        {/* INNER ARCHITECTURE */}
        <div className="bg-white rounded-3xl p-10 shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">
            Inner Architecture Index™
          </h2>

          <p className="text-[#4A5A55]">
            Measure how your internal operating structure supports
            your current level of leadership and scale.
          </p>

          <Link
            href="/assessment/inner-architecture"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-[#1F3D2B] text-white hover:scale-105 transition"
          >
            Start Architecture Assessment
          </Link>
        </div>

      </section>

    </main>
  );
}