export const innerArchitecture = {
  id: "inner-architecture",
  title: "Inner Architecture Index",
  scale: 7,

  sections: [
    {
      id: "decision",
      title: "SECTION I — Decision Precision",
      questions: [
        { id: "d1", text: "I make high-consequence decisions without hesitation." },
        { id: "d2", text: "My direction is identity-driven, not reactive." },
        { id: "d3", text: "I can clearly articulate top priorities anytime." }
      ]
    },

    {
      id: "execution",
      title: "SECTION II — Execution Integrity",
      questions: [
        { id: "e1", text: "My standards do not fluctuate with mood." },
        { id: "e2", text: "I follow through without external pressure." },
        { id: "e3", text: "I maintain composure under stress." }
      ]
    },

    {
      id: "leverage",
      title: "SECTION III — Structural Leverage",
      questions: [
        { id: "l1", text: "My impact scales through systems, not effort." },
        { id: "l2", text: "I am not the bottleneck." },
        { id: "l3", text: "My systems operate without me." }
      ]
    }
  ],

  results: [
    {
      min: 85,
      label: "Structurally Strong",
      description: "Your architecture supports scale."
    },
    {
      min: 60,
      label: "Emerging Strain",
      description: "Some structural pressure is forming."
    },
    {
      min: 0,
      label: "Structural Weakness",
      description: "Your system is not supporting your growth."
    }
  ]
};