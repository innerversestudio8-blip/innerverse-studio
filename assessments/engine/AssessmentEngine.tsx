"use client";

import { useState } from "react";

export default function AssessmentEngine({ config }: any) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!config || !config.sections) {
    return <div style={{ padding: "40px" }}>Invalid config</div>;
  }

  // ✅ READ QUERY PARAMS (for passing decision score)
  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  const decisionScore = params?.get("decisionScore");

  const handleAnswer = (id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === 0) {
      alert("Please answer all questions");
      return;
    }
    setSubmitted(true);
  };

  const totalQuestions = config.sections.reduce(
    (sum: number, s: any) => sum + s.questions.length,
    0
  );

  const totalScore = Object.values(answers).reduce(
    (sum, val) => sum + val,
    0
  );

  const maxScore = totalQuestions * config.scale;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const isDecision = config.id === "decision-inflection";
  const isInner = config.id === "inner-architecture";

  // ================= RESULT SCREEN =================
  if (submitted) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>{config.title}</h1>

        <h2 style={{ marginTop: "20px" }}>
          Your Score: {scorePercent}/100
        </h2>

        <p style={{ marginTop: "10px" }}>
          This reflects your current architecture.
        </p>

        {/* ================= DECISION → NEXT TEST ================= */}
        {isDecision && (
          <div style={{ marginTop: "30px" }}>
            <p>
              You’ve completed the Decision Inflection Audit.
              Now evaluate whether your internal structure can support your next level.
            </p>

            <a
              href={`/assessment/inner-architecture?decisionScore=${scorePercent}`}
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 24px",
                background: "#1F3D2B",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Continue to Inner Architecture
            </a>
          </div>
        )}

        {/* ================= INNER → FINAL CTA ================= */}
        {isInner && (
          <div style={{ marginTop: "30px" }}>
            <p>
              You’ve now completed both diagnostics.
              This gives a clear view of your decision quality and structural capacity.
            </p>

            <a
              href={`/contact?source=audit&type=inner-architecture&decisionScore=${decisionScore || "NA"}&innerScore=${scorePercent}`}
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 24px",
                background: "#1F3D2B",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Request Strategic Architecture Review
            </a>
          </div>
        )}
      </div>
    );
  }

  // ================= QUESTION SCREEN =================
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        {config.title}
      </h1>

      {config.sections.map((section: any, secIndex: number) => (
        <div key={section.id} style={{ marginBottom: "40px" }}>
          
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "30px"
            }}
          >
            {section.title}
          </h2>

          <hr style={{ marginBottom: "20px" }} />

          {section.questions.map((q: any, index: number) => (
            <div key={q.id} style={{ marginBottom: "20px" }}>
              
              <p style={{ marginBottom: "10px" }}>
                <strong>
                  Q{secIndex + 1}.{index + 1}
                </strong>{" "}
                {q.text}
              </p>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <button
                    key={n}
                    onClick={() => handleAnswer(q.id, n)}
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                      background:
                        answers[q.id] === n ? "#1F3D2B" : "#fff",
                      color:
                        answers[q.id] === n ? "#fff" : "#000",
                      borderRadius: "6px"
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>

            </div>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#1F3D2B",
          color: "white",
          borderRadius: "8px"
        }}
      >
        Reveal My Score
      </button>
    </div>
  );
}