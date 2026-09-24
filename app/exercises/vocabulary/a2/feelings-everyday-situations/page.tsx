"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Feelings & Everyday Situations",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about feelings, emotions, reactions, and common everyday situations.",

  section1: [
    {
      question: "I feel very ________ because I passed my exam.",
      options: ["happy", "angry", "nervous", "bored"],
      correct: "happy",
    },
    {
      question: "She is ________ because she has an important interview tomorrow.",
      options: ["nervous", "relaxed", "bored", "excited"],
      correct: "nervous",
    },
    {
      question: "He was ________ when his friend arrived late.",
      options: ["angry", "happy", "tired", "surprised"],
      correct: "angry",
    },
    {
      question: "I am very ________. I need to go to bed.",
      options: ["tired", "excited", "worried", "proud"],
      correct: "tired",
    },
    {
      question: "She was ________ when she saw the beautiful present.",
      options: ["surprised", "angry", "bored", "sad"],
      correct: "surprised",
    },
    {
      question: "I feel ________ when I have nothing interesting to do.",
      options: ["bored", "proud", "excited", "relaxed"],
      correct: "bored",
    },
    {
      question: "He is ________ of his daughter because she won the competition.",
      options: ["proud", "nervous", "sad", "bored"],
      correct: "proud",
    },
    {
      question: "After my holiday, I felt calm and ________.",
      options: ["relaxed", "angry", "worried", "surprised"],
      correct: "relaxed",
    },
  ],

  section2: {
    questions: [
      {
        word: "excited",
        correct: "very happy and enthusiastic about something",
      },
      {
        word: "worried",
        correct: "thinking that something bad may happen",
      },
      {
        word: "surprised",
        correct: "having a feeling because something was unexpected",
      },
      {
        word: "proud",
        correct: "feeling pleased about something you or someone close to you did",
      },
      {
        word: "nervous",
        correct: "worried or afraid about something that is going to happen",
      },
      {
        word: "relaxed",
        correct: "calm and comfortable without stress",
      },
    ],

    definitions: [
      "very happy and enthusiastic about something",
      "thinking that something bad may happen",
      "having a feeling because something was unexpected",
      "feeling pleased about something you or someone close to you did",
      "worried or afraid about something that is going to happen",
      "calm and comfortable without stress",
    ],
  },

  section3: [
    {
      question: "I am very ________ about my birthday party tomorrow.",
      correct: "excited",
    },
    {
      question: "She is ________ about her sick dog.",
      correct: "worried",
    },
    {
      question: "He looked ________ when he opened the unexpected gift.",
      correct: "surprised",
    },
    {
      question: "My parents are ________ of me because I got a good grade.",
      correct: "proud",
    },
    {
      question: "I always feel ________ before an important exam.",
      correct: "nervous",
    },
    {
      question: "After a long holiday, I feel completely ________.",
      correct: "relaxed",
    },
  ],

  section4: [
    {
      question: "You feel this when something very good is going to happen.",
      options: ["excited", "worried", "angry", "bored"],
      correct: "excited",
    },
    {
      question: "You feel this when you think something bad might happen.",
      options: ["worried", "relaxed", "proud", "happy"],
      correct: "worried",
    },
    {
      question: "You feel this when something happens that you did not expect.",
      options: ["surprised", "tired", "bored", "angry"],
      correct: "surprised",
    },
    {
      question: "You feel this when you are pleased with your achievement.",
      options: ["proud", "nervous", "sad", "worried"],
      correct: "proud",
    },
    {
      question: "You feel this when you are calm and free from stress.",
      options: ["relaxed", "angry", "excited", "bored"],
      correct: "relaxed",
    },
  ],

  section5: [
    {
      question: "How do you usually feel before an important exam?",
      options: [
        "nervous",
        "relaxed",
        "bored",
        "proud",
      ],
      correct: "nervous",
    },
    {
      question: "How might you feel after receiving a wonderful birthday present?",
      options: [
        "excited",
        "angry",
        "worried",
        "tired",
      ],
      correct: "excited",
    },
    {
      question: "Which feeling means that you are thinking something bad may happen?",
      options: [
        "worried",
        "happy",
        "relaxed",
        "proud",
      ],
      correct: "worried",
    },
    {
      question: "How might you feel after successfully finishing a difficult project?",
      options: [
        "proud",
        "bored",
        "nervous",
        "angry",
      ],
      correct: "proud",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I was surprised by the news.",
        "I was surprised the news.",
        "I was surprised at the news was.",
        "I was surprised to the news.",
      ],
      correct: "I was surprised by the news.",
    },
  ],

  pdfFileName: "a2-feelings-and-everyday-situations-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function FeelingsAndEverydaySituationsPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/free-time-entertainment"
      nextHref="/exercises/vocabulary/a2"
      previousTitle="Free Time & Entertainment"
      nextTitle="A2 Vocabulary"
    />
  );
}