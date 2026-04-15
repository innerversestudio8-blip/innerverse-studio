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
      await fetch("YOUR_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Submitted successfully");
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required /><br /><br />
        <input name="email" placeholder="Email" required /><br /><br />
        <input name="role" placeholder="Role" /><br /><br />
        <input name="timeline" placeholder="Timeline" /><br /><br />

        <textarea name="seeking" placeholder="Seeking" /><br /><br />
        <textarea name="expectation" placeholder="Expectation" /><br /><br />
        <textarea name="context" placeholder="Context" /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>Decision Score: {decisionScore}</p>
      <p>Inner Score: {innerScore}</p>
    </main>
  );
}