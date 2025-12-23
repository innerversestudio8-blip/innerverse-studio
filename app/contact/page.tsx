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
      await fetch("https://script.google.com/macros/s/AKfycbwcmCsOFIVmq6jbEq_s4iaYfjK6hOu9vhxrKC9IlQ6S2fVeKBbn0e19xHji0XrsTNP_/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Your application has been submitted successfully.");
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="w-full bg-[#F9FAF9]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <h1 className="text-5xl font-semibold text-[#1F3D2B] mb-6">
          Apply for a Private Clarity Conversation
        </h1>
        <p className="text-lg text-[#4A5A55] max-w-2xl">
          This is a confidential application. Please answer thoughtfully.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-10 shadow-md space-y-8"
        >

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

          <input
            name="role"
            placeholder="Current Role / Responsibility"
            className="w-full rounded-xl border px-4 py-3"
          />

          <select
            name="interest"
            className="w-full rounded-xl border px-4 py-3"
          >
            <option>Private 1:1 Clarity Sessions</option>
            <option>Longer-Term Engagement</option>
            <option>Retreat Participation</option>
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
            placeholder="What would make this conversation valuable?"
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            className="px-12 py-4 rounded-full bg-[#1F3D2B] text-white shadow-lg hover:scale-105 transition"
          >
            Submit Application
          </button>

        </form>
      </section>

    </main>
  );
}
