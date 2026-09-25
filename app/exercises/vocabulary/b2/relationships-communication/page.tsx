"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Relationships & Communication",
  level: "B2 Vocabulary Worksheet",
  description:
    "Build advanced vocabulary for relationships, communication, social interaction, conflict, and expressing ideas clearly.",

  section1: [
    {
      question:
        "She is very good at ________ her ideas clearly, even when discussing complicated issues.",
      options: [
        "articulating",
        "interrupting",
        "withdrawing",
        "neglecting",
      ],
      correct: "articulating",
    },
    {
      question:
        "After several disagreements, they decided to ________ their differences and work together.",
      options: [
        "put aside",
        "bring up",
        "look down on",
        "break into",
      ],
      correct: "put aside",
    },
    {
      question:
        "He tends to ________ criticism personally, even when it is intended to be helpful.",
      options: ["take", "make", "do", "give"],
      correct: "take",
    },
    {
      question:
        "Good communication requires people to be willing to ________ to different points of view.",
      options: ["listen", "oppose", "withdraw", "dismiss"],
      correct: "listen",
    },
    {
      question:
        "Their close friendship gradually ________ after they moved to different countries.",
      options: [
        "drifted apart",
        "came across",
        "turned down",
        "held back",
      ],
      correct: "drifted apart",
    },
    {
      question:
        "She tried to ________ the tension by changing the subject.",
      options: ["ease", "intensify", "provoke", "expose"],
      correct: "ease",
    },
    {
      question:
        "He has a reputation for being extremely ________, so people often trust him with personal information.",
      options: [
        "discreet",
        "hostile",
        "impulsive",
        "confrontational",
      ],
      correct: "discreet",
    },
    {
      question:
        "They had a serious ________ over how the project should be managed.",
      options: [
        "disagreement",
        "affection",
        "intimacy",
        "commitment",
      ],
      correct: "disagreement",
    },
    {
      question:
        "Instead of blaming each other, they decided to ________ the problem calmly.",
      options: ["address", "avoid", "conceal", "provoke"],
      correct: "address",
    },
    {
      question:
        "She doesn't always say what she thinks, but her body language often ________ her true feelings.",
      options: [
        "reveals",
        "interrupts",
        "distorts",
        "withdraws",
      ],
      correct: "reveals",
    },
  ],

  section2: {
    questions: [
      {
        word: "assertive",
        correct:
          "confidently expressing your opinions or needs without being aggressive",
      },
      {
        word: "empathetic",
        correct:
          "able to understand and share another person's feelings",
      },
      {
        word: "confrontational",
        correct:
          "likely to deal with disagreements in an aggressive or challenging way",
      },
      {
        word: "compromise",
        correct:
          "an agreement in which each side accepts less than it originally wanted",
      },
      {
        word: "misunderstanding",
        correct:
          "a situation in which someone understands something incorrectly",
      },
      {
        word: "reconciliation",
        correct:
          "the process of becoming friendly again after a disagreement",
      },
      {
        word: "confidential",
        correct:
          "intended to be kept private or secret",
      },
      {
        word: "persuasive",
        correct:
          "able to make someone agree with an idea or accept a point of view",
      },
    ],

    definitions: [
      "confidently expressing your opinions or needs without being aggressive",
      "able to understand and share another person's feelings",
      "likely to deal with disagreements in an aggressive or challenging way",
      "an agreement in which each side accepts less than it originally wanted",
      "a situation in which someone understands something incorrectly",
      "the process of becoming friendly again after a disagreement",
      "intended to be kept private or secret",
      "able to make someone agree with an idea or accept a point of view",
    ],
  },

  section3: [
    {
      question:
        "If you want to maintain a healthy relationship, you need to ________ with the other person's feelings.",
      correct: "empathize",
    },
    {
      question:
        "He refused to ________ responsibility for the misunderstanding.",
      correct: "take",
    },
    {
      question:
        "They eventually managed to ________ a compromise after several hours of discussion.",
      correct: "reach",
    },
    {
      question:
        "She was careful not to ________ his confidence by sharing the information with others.",
      correct: "betray",
    },
    {
      question:
        "It is important to ________ boundaries in both personal and professional relationships.",
      correct: "establish",
    },
    {
      question:
        "He tends to ________ conflicts rather than deal with them directly.",
      correct: "avoid",
    },
    {
      question:
        "The two colleagues have completely different personalities, but they ________ extremely well.",
      correct: "get along",
    },
    {
      question:
        "She tried to ________ her concerns without offending anyone.",
      correct: "express",
    },
  ],

  section4: [
    {
      question:
        "She remained ________ throughout the discussion and clearly explained what she needed.",
      options: [
        "assertive",
        "withdrawn",
        "indifferent",
        "hostile",
      ],
      correct: "assertive",
    },
    {
      question:
        "His response was so ________ that everyone immediately agreed to reconsider the proposal.",
      options: [
        "persuasive",
        "reserved",
        "awkward",
        "distant",
      ],
      correct: "persuasive",
    },
    {
      question:
        "They finally achieved ________ after years of conflict.",
      options: [
        "reconciliation",
        "hesitation",
        "isolation",
        "opposition",
      ],
      correct: "reconciliation",
    },
    {
      question:
        "The manager encouraged employees to discuss disagreements rather than become ________ toward one another.",
      options: [
        "confrontational",
        "empathetic",
        "cooperative",
        "supportive",
      ],
      correct: "confrontational",
    },
    {
      question:
        "The information is strictly ________, so please do not share it outside the team.",
      options: [
        "confidential",
        "persuasive",
        "assertive",
        "casual",
      ],
      correct: "confidential",
    },
    {
      question:
        "Their argument was caused by a simple ________ about what had actually been agreed.",
      options: [
        "misunderstanding",
        "reconciliation",
        "commitment",
        "affection",
      ],
      correct: "misunderstanding",
    },
  ],

  section5: [
    {
      question:
        "After years of working together, the two colleagues know each other's strengths and weaknesses very well. They have developed a strong professional ________.",
      options: [
        "rapport",
        "conflict",
        "withdrawal",
        "barrier",
      ],
      correct: "rapport",
    },
    {
      question:
        "Rather than telling his friend what to do, he listened carefully and tried to understand her situation. His response was highly ________.",
      options: [
        "empathetic",
        "confrontational",
        "dismissive",
        "impulsive",
      ],
      correct: "empathetic",
    },
    {
      question:
        "Both sides agreed that neither would get everything they wanted. They finally reached a ________.",
      options: [
        "compromise",
        "misunderstanding",
        "confrontation",
        "withdrawal",
      ],
      correct: "compromise",
    },
    {
      question:
        "The employee calmly explained that the workload was unreasonable and suggested a practical solution. Her approach was confident but respectful and ________.",
      options: [
        "assertive",
        "hostile",
        "passive",
        "indifferent",
      ],
      correct: "assertive",
    },
    {
      question:
        "He was upset because his colleague had shared a private conversation with other employees. He felt that his trust had been ________.",
      options: [
        "betrayed",
        "established",
        "reconciled",
        "persuaded",
      ],
      correct: "betrayed",
    },
    {
      question:
        "Even though they had argued several times, they eventually apologized to each other and repaired their relationship. This was an important step toward ________.",
      options: [
        "reconciliation",
        "confrontation",
        "isolation",
        "withdrawal",
      ],
      correct: "reconciliation",
    },
    {
      question:
        "The manager did not immediately reject the employee's suggestion. Instead, she listened carefully and ________ the issue before making a decision.",
      options: [
        "addressed",
        "avoided",
        "concealed",
        "provoked",
      ],
      correct: "addressed",
    },
    {
      question:
        "He often refuses to consider opinions that differ from his own. He can be quite ________ during discussions.",
      options: [
        "dismissive",
        "empathetic",
        "supportive",
        "discreet",
      ],
      correct: "dismissive",
    },
  ],

  pdfFileName: "b2-relationships-communication-worksheet.pdf",

  pdfTemplate: "/exercises/vocabulary/family-friends/template.png",
};

export default function RelationshipsCommunicationPage() {
  return (
    <ExerciseTemplate
      data={data}
      nextHref="/exercises/vocabulary/b2/work-career-professional-life"
      nextTitle="Work, Career & Professional Life"
    />
  );
}