"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Health & Lifestyle",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about health, healthy habits, exercise, sleep, and everyday lifestyle.",

  section1: [
    {
      question: "You should drink plenty of ________ every day.",
      options: ["water", "sugar", "oil", "salt"],
      correct: "water",
    },
    {
      question: "Regular exercise helps you stay ________.",
      options: ["healthy", "hungry", "late", "busy"],
      correct: "healthy",
    },
    {
      question: "I usually sleep for eight ________ every night.",
      options: ["hours", "minutes", "weeks", "times"],
      correct: "hours",
    },
    {
      question: "If you have a headache, you should ________ some rest.",
      options: ["get", "make", "do", "take"],
      correct: "get",
    },
    {
      question: "Eating too much ________ is not good for your health.",
      options: ["sugar", "water", "fruit", "vegetables"],
      correct: "sugar",
    },
    {
      question: "Walking every day is a simple form of ________.",
      options: ["exercise", "medicine", "sleep", "illness"],
      correct: "exercise",
    },
    {
      question: "You should eat more fresh ________ and vegetables.",
      options: ["fruit", "medicine", "sugar", "salt"],
      correct: "fruit",
    },
    {
      question: "Going to bed early can help you get enough ________.",
      options: ["sleep", "work", "exercise", "food"],
      correct: "sleep",
    },
  ],

  section2: {
    questions: [
      {
        word: "healthy",
        correct: "good for your body and mind",
      },
      {
        word: "exercise",
        correct: "physical activity that helps keep you fit",
      },
      {
        word: "medicine",
        correct: "something you take when you are ill",
      },
      {
        word: "headache",
        correct: "a pain in your head",
      },
      {
        word: "rest",
        correct: "time when you stop working or being active",
      },
      {
        word: "sleep",
        correct: "the natural state when you rest with your eyes closed",
      },
    ],

    definitions: [
      "good for your body and mind",
      "physical activity that helps keep you fit",
      "something you take when you are ill",
      "a pain in your head",
      "time when you stop working or being active",
      "the natural state when you rest with your eyes closed",
    ],
  },

  section3: [
    {
      question: "You should drink enough ________ during the day.",
      correct: "water",
    },
    {
      question: "I usually ________ for about eight hours at night.",
      correct: "sleep",
    },
    {
      question: "She goes walking every morning to ________ healthy.",
      correct: "stay",
    },
    {
      question: "If you feel tired, you should ________ a break.",
      correct: "take",
    },
    {
      question: "He has a bad ________, so he needs to rest.",
      correct: "headache",
    },
    {
      question: "The doctor gave me some ________ for my cold.",
      correct: "medicine",
    },
  ],

  section4: [
    {
      question:
        "You drink water regularly, eat healthy food, and exercise every week.",
      options: ["healthy lifestyle", "illness", "headache", "medicine"],
      correct: "healthy lifestyle",
    },
    {
      question: "You have a pain in your head after a long day.",
      options: ["headache", "exercise", "rest", "sleep"],
      correct: "headache",
    },
    {
      question: "You are tired after working all day and need to stop for a while.",
      options: ["rest", "exercise", "medicine", "sugar"],
      correct: "rest",
    },
    {
      question: "You go running three times a week to keep your body fit.",
      options: ["exercise", "sleep", "medicine", "illness"],
      correct: "exercise",
    },
    {
      question: "You are sick and the doctor gives you tablets to help you.",
      options: ["medicine", "water", "fruit", "rest"],
      correct: "medicine",
    },
  ],

  section5: [
    {
      question: "Which habit is good for your health?",
      options: [
        "exercising regularly",
        "eating only sweets",
        "sleeping two hours a night",
        "drinking very little water",
      ],
      correct: "exercising regularly",
    },
    {
      question: "What should you do when you feel very tired?",
      options: [
        "take a rest",
        "eat more sugar",
        "work all night",
        "skip sleep",
      ],
      correct: "take a rest",
    },
    {
      question: "Which drink is important for staying hydrated?",
      options: ["water", "oil", "syrup", "coffee powder"],
      correct: "water",
    },
    {
      question: "How many hours of sleep do many adults usually need?",
      options: [
        "about seven to nine hours",
        "about one hour",
        "about two hours",
        "about twenty hours",
      ],
      correct: "about seven to nine hours",
    },
    {
      question: "Which food choice is generally healthier?",
      options: [
        "fresh fruit and vegetables",
        "only sweets",
        "lots of fried food",
        "large amounts of sugar",
      ],
      correct: "fresh fruit and vegetables",
    },
  ],

  pdfFileName: "a2-health-and-lifestyle-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function HealthAndLifestylePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/daily-life-habits"
      nextHref="/exercises/vocabulary/a2/food-cooking"
      previousTitle="Daily Life & Habits"
      nextTitle="Food & Cooking"
    />
  );
}