export const decisionInflection = {
  id: "decision-inflection",
  title: "Decision Inflection Audit",
  scale: 7,

  sections: [
    {
      id: "friction",
      title: "SECTION I — Decision Friction",
      questions: [
        { id: "q1", text: "There is a consequential decision I’ve been circling for more than 30 days." },
        { id: "q2", text: "I intellectually know the answer — but I haven’t acted." },
        { id: "q3", text: "The cost of postponement is increasing." }
      ]
    },
    {
      id: "cognitive",
      title: "SECTION II — Cognitive Load",
      questions: [
        { id: "q4", text: "I experience decision fatigue more often than I admit." },
        { id: "q5", text: "I am carrying pressure I cannot discuss openly." },
        { id: "q6", text: "My thinking feels crowded when evaluating decisions." }
      ]
    },
    {
      id: "identity",
      title: "SECTION III — Identity Alignment",
      questions: [
        { id: "q7", text: "My role no longer reflects who I am becoming." },
        { id: "q8", text: "My non-negotiables are unclear." }
      ]
    }
  ],

  results: [
    {
      min: 0,
      label: "Decision Awareness",
      description: "You are beginning to recognize decision friction."
    }
  ]
};