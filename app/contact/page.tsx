"use client";

export default function ContactPage() {

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
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="w-full bg-[#F9FAF9] text-[#1F3D2B]">

      {/* ================= HERO ================= */}
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
            Not everyone will be invited. Only applications that meet
            the criteria are considered.
          </p>
        </div>
      </section>

      {/* ================= WHY APPLY ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pb-20">
        <div className="bg-white rounded-3xl p-10 shadow-md">
          <h2 className="text-3xl font-semibold mb-6">
            Why Apply?
          </h2>

          <ul className="space-y-4 text-lg text-[#4A5A55]">
            <li>• Gain access to insights rarely available outside executive strategy rooms</li>
            <li>• Explore perspectives that challenge assumptions and open new possibilities</li>
            <li>• Experience a conversation that reshapes how you think, decide, and lead</li>
            <li className="pt-4 text-[#8A3A2A] font-medium">
              Warning: This is not for the curious or casual.
              Only leaders prepared to engage fully will benefit.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-md space-y-8"
        >

          {/* BASIC INFO */}
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
            placeholder="When would you like to begin this conversation?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="seeking"
            rows={4}
            placeholder="What are you seeking clarity on right now?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="expectation"
            rows={4}
            placeholder="What would make this conversation transformative for you?"
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
            Submit Application
          </button>

          <p className="text-sm text-[#6B7F6A] mt-4 max-w-3xl">
            Your information is kept private and reviewed personally.
            Innerverse Studio works exclusively with leaders ready to operate
            at their highest level. Only a handful of conversations are offered
            each quarter — the rest are respectfully declined.
          </p>

        </form>
      </section>

    </main>
  );
}
