"use client";

export default function ContactPage() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      seeking: (form.elements.namedItem("seeking") as HTMLTextAreaElement).value,
      expectation: (form.elements.namedItem("expectation") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwcmCsOFIVmq6jbEq_s4iaYfjK6hOu9vhxrKC9IlQ6S2fVeKBbn0e19xHji0XrsTNP_/exec",
        {
          method: "POST",
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
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-sm text-[#6B7F6A] mb-4">
            Private Conversation
          </p>

          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Apply for a Private  
            Clarity Conversation
          </h1>

          <p className="text-xl text-[#3F4F4B] leading-relaxed text-justify">
            This is not a sales call.
            It is a confidential, one-to-one conversation to assess
            alignment with your level of responsibility and readiness
            for deeper clarity, calm authority, and decisive leadership.
          </p>
        </div>
      </section>

      {/* ================= CONTEXT ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pb-16">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <p className="text-lg text-[#4A5A55] leading-relaxed text-justify">
            Innerverse Studio works selectively with leaders who carry
            real responsibility — professionally, personally, and socially.
            Applications are reviewed personally.
          </p>

          <p className="text-lg text-[#4A5A55] leading-relaxed mt-4 text-justify">
            If this conversation is not the right fit,
            you will know clearly and respectfully.
            There is no pressure to proceed.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
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

          <select
            name="interest"
            className="w-full rounded-xl border px-4 py-3"
          >
            <option>Private 1:1 Clarity Conversation</option>
            <option>Longer-Term Leadership Recalibration</option>
            <option>Innerverse Retreat Participation</option>
            <option>Not sure yet</option>
          </select>

          <textarea
            name="seeking"
            rows={5}
            placeholder="What are you currently seeking clarity on?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <textarea
            name="expectation"
            rows={4}
            placeholder="What would make this conversation valuable for you?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            className="px-14 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
          >
            Submit Application
          </button>

          <p className="text-sm text-[#6B7F6A] mt-2">
            Your information is kept private and reviewed personally.
          </p>

        </form>
      </section>

    </main>
  );
}
