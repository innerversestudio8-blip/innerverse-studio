"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function ContactClient() {
  const searchParams = useSearchParams();

  const source = searchParams.get("source");
  const decisionScore = searchParams.get("decisionScore");
  const innerScore = searchParams.get("innerScore");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLInputElement).value,
      seeking: (form.elements.namedItem("seeking") as HTMLTextAreaElement).value,
      expectation: (form.elements.namedItem("expectation") as HTMLTextAreaElement).value,
      context: (form.elements.namedItem("context") as HTMLTextAreaElement).value,

      source: source || "direct",
      decisionScore: decisionScore || "NA",
      innerScore: innerScore || "NA",
    };

    try {
      console.log("Submitting:", formData);

      await fetch("https://script.google.com/macros/s/AKfycbw2pGcrdSfgs1VL83dup4q6YMmJ0FqsO2GfiTSRM7ZjV0neGzsHafr9038fcnlyARQLSg/exec", {
        method: "POST",
        mode: "no-cors", // ✅ CORS FIX
        body: new URLSearchParams(formData as any),
      });

      alert("Your application has been submitted successfully.");
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Apply for a Private  
            <br />Clarity Conversation
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed mb-8 text-justify">
            Selective. Confidential. Transformational.
          </p>

          <p className="text-lg text-[#4A5A55] leading-relaxed text-justify">
            This conversation is reserved for leaders ready to see themselves,
            their work, and their life with unprecedented clarity.
          </p>

          {/* PRIORITY MESSAGE */}
          {source === "audit" && (
            <p className="mt-6 text-sm text-[#8A3A2A] font-medium">
              Your diagnostic results have been recorded. Applications from this path are prioritized.
            </p>
          )}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-md space-y-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-xl border px-4 py-3"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <input
            name="role"
            placeholder="Current Role / Responsibility"
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            name="timeline"
            placeholder="When would you like to begin?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="seeking"
            rows={4}
            placeholder="What are you seeking clarity on?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="expectation"
            rows={4}
            placeholder="What would make this conversation transformative?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="context"
            rows={3}
            placeholder="Any additional context you'd like to share?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            className="px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
          >
            Request Strategic Architecture Review
          </button>

          <p className="text-sm text-[#6B7F6A] mt-4 max-w-3xl">
            Your information is kept private and reviewed personally.
            Only a limited number of conversations are offered each quarter.
          </p>

        </form>
      </section>

    </main>
  );
}