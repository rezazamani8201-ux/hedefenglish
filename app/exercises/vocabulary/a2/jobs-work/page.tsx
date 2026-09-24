"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Jobs & Work",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about jobs, workplaces, responsibilities, and everyday work situations.",

  /* =========================================================
     SECTION 1 — MULTIPLE CHOICE
  ========================================================= */

  section1: [
    {
      question: "A person who works in a hospital and helps sick people is a ...",
      options: ["doctor", "waiter", "pilot", "farmer"],
      correct: "doctor",
    },
    {
      question: "My sister works in a school. She is a ...",
      options: ["teacher", "driver", "chef", "mechanic"],
      correct: "teacher",
    },
    {
      question: "A person who cooks food in a restaurant is a ...",
      options: ["chef", "nurse", "lawyer", "receptionist"],
      correct: "chef",
    },
    {
      question: "Where does a waiter usually work?",
      options: ["restaurant", "factory", "hospital", "library"],
      correct: "restaurant",
    },
    {
      question: "Someone who repairs cars is a ...",
      options: ["mechanic", "journalist", "pilot", "dentist"],
      correct: "mechanic",
    },
    {
      question: "A person who flies an airplane is a ...",
      options: ["pilot", "farmer", "cashier", "builder"],
      correct: "pilot",
    },
    {
      question: "Which word means the place where you work?",
      options: ["workplace", "salary", "customer", "uniform"],
      correct: "workplace",
    },
    {
      question: "The money you receive for your work is called your ...",
      options: ["salary", "shift", "office", "career"],
      correct: "salary",
    },
  ],

  /* =========================================================
     SECTION 2 — MATCHING
  ========================================================= */

  section2: {
    questions: [
      {
        word: "customer",
        correct: "a person who buys something or uses a service",
      },
      {
        word: "salary",
        correct: "money that you receive regularly for your work",
      },
      {
        word: "uniform",
        correct: "special clothes worn by people at work",
      },
      {
        word: "shift",
        correct: "a period of time when a person works",
      },
      {
        word: "career",
        correct: "the jobs and professional experiences you have during your life",
      },
      {
        word: "manager",
        correct: "a person who controls or organizes the work of a team",
      },
    ],

    definitions: [
      "a person who buys something or uses a service",
      "money that you receive regularly for your work",
      "special clothes worn by people at work",
      "a period of time when a person works",
      "the jobs and professional experiences you have during your life",
      "a person who controls or organizes the work of a team",
    ],
  },

  /* =========================================================
     SECTION 3 — FILL IN THE BLANK
  ========================================================= */

  section3: [
    {
      question: "My father works in a bank. He is a bank ________.",
      correct: "manager",
    },
    {
      question: "I work from Monday to Friday, so I have a full-time ________.",
      correct: "job",
    },
    {
      question: "The person who answers the phone and welcomes visitors is the ________.",
      correct: "receptionist",
    },
    {
      question: "My brother works at night, so he has a night ________.",
      correct: "shift",
    },
    {
      question: "I want to find a new ________ because I don't like my current one.",
      correct: "job",
    },
    {
      question: "The people who work for a company are its ________.",
      correct: "employees",
    },
  ],

  /* =========================================================
     SECTION 4 — CHOOSE THE CORRECT WORD
  ========================================================= */

  section4: [
    {
      question: "She works with children and teaches them English.",
      options: ["teacher", "pilot", "chef", "driver"],
      correct: "teacher",
    },
    {
      question: "He repairs broken cars and checks their engines.",
      options: ["mechanic", "waiter", "nurse", "lawyer"],
      correct: "mechanic",
    },
    {
      question: "She takes orders and brings food to people in a restaurant.",
      options: ["waiter", "dentist", "farmer", "engineer"],
      correct: "waiter",
    },
    {
      question: "He designs and builds houses and other structures.",
      options: ["builder", "cashier", "receptionist", "journalist"],
      correct: "builder",
    },
    {
      question: "She works at the front desk of a hotel and helps guests.",
      options: ["receptionist", "chef", "pilot", "farmer"],
      correct: "receptionist",
    },
  ],

  /* =========================================================
     SECTION 5 — EVERYDAY WORK SITUATIONS
  ========================================================= */

  section5: [
    {
      question: "I need to talk to the person who is responsible for the team.",
      options: ["manager", "customer", "waiter", "driver"],
      correct: "manager",
    },
    {
      question: "I work only four hours a day, so I have a ...",
      options: ["part-time job", "salary", "career", "workplace"],
      correct: "part-time job",
    },
    {
      question: "You need these clothes because everyone in your company wears the same style.",
      options: ["uniform", "salary", "shift", "office"],
      correct: "uniform",
    },
    {
      question: "I am looking for work because I don't have a job now. I am ...",
      options: ["unemployed", "retired", "busy", "full-time"],
      correct: "unemployed",
    },
    {
      question: "After many years of working, my grandfather stopped working because he was ...",
      options: ["retired", "unemployed", "part-time", "busy"],
      correct: "retired",
    },
  ],

  /* =========================================================
     PDF
  ========================================================= */

  pdfFileName: "a2-jobs-and-work-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function JobsAndWorkPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/people-personality"
      nextHref="/exercises/vocabulary/a2/daily-life-habits"
      previousTitle="People & Personality"
      nextTitle="Daily Life & Habits"
    />
  );
}