"use client";

import { useState } from "react";
import Link from "next/link";

export default function DecisionInflectionAudit() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    // I. Decision Friction
    { id: "q1", text: "There is a consequential decision I’ve been circling for more than 30 days." },
    { id: "q2", text: "I intellectually know the answer — but I haven’t acted." },
    { id: "q3", text: "The cost of postponement is increasing (financially, reputationally, strategically, or emotionally)." },

    // II. Cognitive Load
    { id: "q4", text: "I experience decision fatigue more often than I publicly acknowledge." },
    { id: "q5", text: "I am carrying strategic pressure I cannot discuss openly." },
    { id: "q6", text: "My thinking feels crowded when I attempt to evaluate this decision." },

    // III. Identity Alignment
    { id: "q7", text: "My current role or direction no longer fully reflects who I am becoming." },
    { id: "q8", text: "My non-negotiables for this next chapter are not clearly defined." },

    // IV. Risk & Consequence
    { id: "q9", text: "This decision meaningfully affects capital, reputation, or people." },
    { id: "q10", text: "A misstep would have long-term second-order consequences." },

    // V. Strategic Isolation
    { id: "q11", text: "I do not currently have a neutral, high-caliber thinking partner for this level of decision." },
  ];

  const handleChange = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = Object.values(answers).filter(Boolean).length;

  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pt-28 pb-20">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
          Are You Sitting on a Decision That Quietly Determines Your Next 3 Years?
        </h1>

        <p className="text-xl text-[#3F4F4B] leading-relaxed mb-6 text-justify">
          Most strategic errors are not wrong decisions. They are delayed decisions.
        </p>

        <p className="text-lg text-[#4A5A55] leading-relaxed text-justify">
          This 5-minute audit is designed for high-responsibility leaders navigating
          a consequential inflection point — where delay compounds cost, and clarity compounds leverage.
        </p>

        <p className="text-lg text-[#4A5A55] mt-6">
          It is not about productivity. It is about trajectory.
        </p>
      </section>

      {/* DIAGNOSTIC */}
      {!submitted && (
        <section className="max-w-4xl mx-auto px-6 md:px-16 pb-32 space-y-8">
          <div className="bg-white rounded-3xl p-10 shadow-md space-y-10">
            <p className="text-lg text-[#4A5A55]">
              Answer honestly. No overthinking. Yes or No.
            </p>

            {questions.map((q, index) => (
              <div key={q.id} className="space-y-4">
                <p className="text-lg text-[#3F4F4B]">
                  {index + 1}. {q.text}
                </p>

                <div className="flex gap-6">
                  <button
                    type="button"
                    onClick={() => handleChange(q.id, true)}
                    className={`px-6 py-2 rounded-full border ${
                      answers[q.id] === true
                        ? "bg-[#1F3D2B] text-white"
                        : "border-[#1F3D2B]"
                    }`}
                  >
                    Yes
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChange(q.id, false)}
                    className={`px-6 py-2 rounded-full border ${
                      answers[q.id] === false
                        ? "bg-[#1F3D2B] text-white"
                        : "border-[#1F3D2B]"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <button
                onClick={handleSubmit}
                className="px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
              >
                View My Assessment
              </button>
            </div>
          </div>
        </section>
      )}

      {/* RESULTS */}
      {submitted && (
        <section className="max-w-4xl mx-auto px-6 md:px-16 pb-32">
          <div className="bg-white rounded-3xl p-12 shadow-md text-center space-y-8">

            <h2 className="text-4xl font-semibold">
              Your Assessment Result
            </h2>

            {score <= 3 && (
              <>
                <p className="text-xl text-[#4A5A55]">
                  You may not be at a major inflection point yet.
                  Monitor — but no immediate intervention required.
                </p>
              </>
            )}

            {score >= 4 && score <= 7 && (
              <>
                <p className="text-xl text-[#4A5A55]">
                  You are likely experiencing decision distortion.
                  Clarity is present — alignment is fragmented.
                </p>

                <p className="text-lg text-[#4A5A55]">
                  Inflection points at this threshold benefit from calibrated thinking
                  before the next strategic cycle compounds cost.
                </p>

                <Link
                  href="/contact?source=audit"
                  className="inline-block mt-6 px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
                >
                  Book a Private Decision Session
                </Link>
              </>
            )}

            {score >= 8 && (
              <>
                <p className="text-xl text-[#4A5A55]">
                  You are operating at a strategic inflection point.
                  Delay is compounding cost.
                </p>

                <p className="text-lg text-[#4A5A55]">
                  This decision is no longer tactical — it is architectural.
                  Immediate recalibration is advised.
                </p>

                <Link
                  href="/contact?source=audit"
                  className="inline-block mt-6 px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
                >
                  Book a Confidential Decision Session
                </Link>
              </>
            )}

          </div>
        </section>
      )}

    </main>
  );
}