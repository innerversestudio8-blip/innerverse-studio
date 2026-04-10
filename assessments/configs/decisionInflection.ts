export const decisionInflection = {
  id: "decision-inflection",

  title: "Decision Inflection Audit",

  scale: 7,

  sections: [
    {
      id: "decision",
      title: "Decision Friction",

      questions: [
        {
          id: "q1",
          text: "There is a consequential decision I’ve been circling for more than 30 days."
        },
        {
          id: "q2",
          text: "I intellectually know the answer but have not acted."
        },
        {
          id: "q3",
          text: "The cost of postponement is increasing."
        }
      ]
    },

    {
      id: "cognitive",
      title: "Cognitive Load",

      questions: [
        {
          id: "q4",
          text: "I experience decision fatigue more often than I acknowledge."
        },
        {
          id: "q5",
          text: "My thinking feels crowded under pressure."
        }
      ]
    }
  ],

  results: [
    {
      min: 85,
      label: "Strategic Inflection",
      description:
        "You are operating at a high-stakes decision point. Delay is compounding cost."
    },
    {
      min: 60,
      label: "Decision Distortion",
      description:
        "Clarity exists but alignment is fragmented."
    },
    {
      min: 0,
      label: "Stable Zone",
      description:
        "No major inflection point detected at this stage."
    }
  ]
};