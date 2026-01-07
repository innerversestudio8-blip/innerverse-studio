"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      seeking: (form.elements.namedItem("seeking") as HTMLTextAreaElement).value,
      expectation: (form.elements.namedItem("expectation") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwcmCsOFIVmq6jbEq_s4iaYfjK6hOu9vhxrKC9IlQ6S2fVeKBbn0e19xHji0XrsTNP_/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Your application has been submitted successfully.");
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <h1 className="text-5xl font-semibold mb-6">
          Apply for a Private Clarity Conversation
        </h1>

        <p className="text-xl text-[#4A5A55] max-w-3xl leading-relaxed">
          This is a confidential application designed for leaders carrying
          real responsibility. Please answer thoughtfully.
        </p>

        <p className="text-sm text-[#6B7F6A] max-w-2xl mt-4">
          This is not a sales call. Not every application is accepted.
          If there’s alignment, you’ll be contacted personally.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-12 shadow-md space-y-8"
        >

          {/* Name */}
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* Role */}
          <input
            name="role"
            placeholder="Current Role / Responsibility"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* Interest */}
          <select
            name="interest"
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">What are you interested in?</option>
            <option>Private 1:1 Clarity Sessions</option>
            <option>Longer-Term Engagement</option>
            <option>Retreat Participation</option>
            <option>Not sure yet</option>
          </select>

          {/* Timeline */}
          <select
            name="timeline"
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">When are you looking to begin?</option>
            <option>Immediately</option>
            <option>Within the next 30 days</option>
            <option>Exploring, not urgent</option>
          </select>

          {/* Seeking */}
          <textarea
            name="seeking"
            rows={5}
            placeholder="What are you currently seeking clarity on?"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* Expectation */}
          <textarea
            name="expectation"
            rows={4}
            placeholder="What would make this conversation valuable for you?"
            className="w-full rounded-xl border px-4 py-3"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className={`px-14 py-4 rounded-full text-white shadow-lg transition
              ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1F3D2B] hover:scale-105"
              }
            `}
          >
            {submitting ? "Submitting…" : "Submit Application"}
          </button>

          {/* Privacy */}
          <p className="text-xs text-[#6B7F6A] pt-2">
            Your information is kept private and reviewed personally.
          </p>

        </form>
      </section>

    </main>
  );
}
