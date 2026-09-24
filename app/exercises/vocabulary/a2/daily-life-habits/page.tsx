"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Daily Life & Habits",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about daily routines, habits, free time, and everyday activities.",

  /* =========================================================
     SECTION 1 — MULTIPLE CHOICE
  ========================================================= */

  section1: [
    {
      question: "I usually ________ up at 7 o'clock in the morning.",
      options: ["wake", "take", "make", "have"],
      correct: "wake",
    },
    {
      question: "After I get up, I usually ________ a shower.",
      options: ["take", "do", "make", "go"],
      correct: "take",
    },
    {
      question: "I always ________ breakfast before I go to work.",
      options: ["have", "do", "take", "get"],
      correct: "have",
    },
    {
      question: "She goes to work ________ bus every morning.",
      options: ["by", "on", "with", "at"],
      correct: "by",
    },
    {
      question: "I usually ________ lunch at around 1 p.m.",
      options: ["have", "make", "do", "go"],
      correct: "have",
    },
    {
      question: "He comes home from work in the ________.",
      options: ["evening", "morning", "night", "afternoon"],
      correct: "evening",
    },
    {
      question: "Before going to bed, I usually ________ my teeth.",
      options: ["brush", "wash", "make", "take"],
      correct: "brush",
    },
    {
      question: "I don't work on Saturdays and Sundays. I ________ on weekends.",
      options: ["relax", "work", "study", "travel"],
      correct: "relax",
    },
  ],

  /* =========================================================
     SECTION 2 — MATCHING
  ========================================================= */

  section2: {
    questions: [
      {
        word: "routine",
        correct: "the things you usually do every day",
      },
      {
        word: "habit",
        correct: "something that you do regularly",
      },
      {
        word: "weekday",
        correct: "a day from Monday to Friday",
      },
      {
        word: "weekend",
        correct: "Saturday and Sunday",
      },
      {
        word: "relax",
        correct: "to rest and do something calm after work or activity",
      },
      {
        word: "exercise",
        correct: "physical activity that helps you stay healthy",
      },
    ],

    definitions: [
      "the things you usually do every day",
      "something that you do regularly",
      "a day from Monday to Friday",
      "Saturday and Sunday",
      "to rest and do something calm after work or activity",
      "physical activity that helps you stay healthy",
    ],
  },

  /* =========================================================
     SECTION 3 — FILL IN THE BLANK
  ========================================================= */

  section3: [
    {
      question: "I usually ________ up early because I start work at 8 a.m.",
      correct: "wake",
    },
    {
      question: "She ________ breakfast with her family every morning.",
      correct: "has",
    },
    {
      question: "I ________ my teeth twice a day.",
      correct: "brush",
    },
    {
      question: "After work, I usually ________ home and have dinner.",
      correct: "go",
    },
    {
      question: "He likes to ________ TV in the evening.",
      correct: "watch",
    },
    {
      question: "I usually ________ to bed at about 11 p.m.",
      correct: "go",
    },
  ],

  /* =========================================================
     SECTION 4 — CHOOSE THE CORRECT WORD
  ========================================================= */

  section4: [
    {
      question: "I get up at 6:30 every morning because I have an early job.",
      options: ["wake up", "go out", "sit down", "come back"],
      correct: "wake up",
    },
    {
      question: "After exercising, I need to wash because I am hot and tired.",
      options: ["take a shower", "have dinner", "go shopping", "watch TV"],
      correct: "take a shower",
    },
    {
      question: "I don't go to work on Saturday or Sunday.",
      options: ["weekend", "weekday", "morning", "routine"],
      correct: "weekend",
    },
    {
      question: "She goes running three times a week to stay healthy.",
      options: ["exercise", "sleep", "relax", "travel"],
      correct: "exercise",
    },
    {
      question: "He reads a book and listens to quiet music after work.",
      options: ["relaxes", "works", "studies", "drives"],
      correct: "relaxes",
    },
  ],

  /* =========================================================
     SECTION 5 — EVERYDAY HABITS
  ========================================================= */

  section5: [
    {
      question: "Which sentence describes a regular habit?",
      options: [
        "I usually drink coffee in the morning.",
        "I am drinking coffee right now.",
        "I drank coffee yesterday.",
        "I will drink coffee tomorrow.",
      ],
      correct: "I usually drink coffee in the morning.",
    },
    {
      question: "Which activity do people normally do before going to bed?",
      options: [
        "brush their teeth",
        "go to work",
        "have breakfast",
        "catch a bus to school",
      ],
      correct: "brush their teeth",
    },
    {
      question: "Which phrase means 'every day from Monday to Friday'?",
      options: ["on weekdays", "at weekends", "at night", "in summer"],
      correct: "on weekdays",
    },
    {
      question: "If you have free time after work, you can ...",
      options: ["relax", "wake up", "go to work", "have a meeting"],
      correct: "relax",
    },
    {
      question: "Which activity is good for staying physically healthy?",
      options: ["exercise", "sleeping all day", "watching TV all day", "sitting for hours"],
      correct: "exercise",
    },
  ],

  /* =========================================================
     PDF
  ========================================================= */

  pdfFileName: "a2-daily-life-and-habits-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function DailyLifeAndHabitsPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/jobs-work"
      nextHref="/exercises/vocabulary/a2/health-lifestyle"
      previousTitle="Jobs & Work"
      nextTitle="Health & Lifestyle"
    />
  );
}