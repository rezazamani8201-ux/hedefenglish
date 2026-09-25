"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Work & Career",
  level: "B1 Vocabulary Worksheet",
  description:
    "Learn and practice useful B1 vocabulary about jobs, careers, workplaces, responsibilities, skills, and professional life.",

  section1: [
    {
      question:
        "She decided to ________ a new job because she wanted more responsibility.",
      options: ["apply for", "look after", "give up", "turn off"],
      correct: "apply for",
    },
    {
      question:
        "My brother works for a large company and has recently been ________ to manager.",
      options: ["promoted", "employed", "retired", "trained"],
      correct: "promoted",
    },
    {
      question:
        "I have a job interview tomorrow, so I need to ________ carefully.",
      options: ["prepare", "retire", "resign", "replace"],
      correct: "prepare",
    },
    {
      question:
        "She is responsible ________ organizing meetings and answering emails.",
      options: ["for", "with", "at", "to"],
      correct: "for",
    },
    {
      question:
        "He works ________ a software company in Istanbul.",
      options: ["for", "at", "on", "by"],
      correct: "for",
    },
    {
      question:
        "My manager asked me to ________ the project before Friday.",
      options: ["complete", "retire", "apply", "interview"],
      correct: "complete",
    },
    {
      question:
        "Good communication skills are very ________ in most modern workplaces.",
      options: ["valuable", "ordinary", "temporary", "nervous"],
      correct: "valuable",
    },
    {
      question:
        "After working for the company for thirty years, my father decided to ________.",
      options: ["retire", "promote", "apply", "graduate"],
      correct: "retire",
    },
  ],

  section2: {
    questions: [
      {
        word: "promotion",
        correct:
          "a move to a more important job with more responsibility",
      },
      {
        word: "qualification",
        correct:
          "an official skill, certificate, or level of education needed for a job",
      },
      {
        word: "colleague",
        correct: "a person who works with you",
      },
      {
        word: "salary",
        correct:
          "the regular amount of money someone earns from their job",
      },
      {
        word: "deadline",
        correct:
          "the latest time or date by which something must be finished",
      },
      {
        word: "experience",
        correct:
          "knowledge or skill gained by doing a job or activity",
      },
    ],

    definitions: [
      "a move to a more important job with more responsibility",
      "an official skill, certificate, or level of education needed for a job",
      "a person who works with you",
      "the regular amount of money someone earns from their job",
      "the latest time or date by which something must be finished",
      "knowledge or skill gained by doing a job or activity",
    ],
  },

  section3: [
    {
      question:
        "She received a ________ after working hard for several years.",
      correct: "promotion",
    },
    {
      question:
        "You need the right ________ to apply for this position.",
      correct: "qualification",
    },
    {
      question:
        "One of my ________ helped me solve the problem.",
      correct: "colleagues",
    },
    {
      question:
        "He earns a good ________ working as an engineer.",
      correct: "salary",
    },
    {
      question:
        "We have to finish the report before the ________ on Friday.",
      correct: "deadline",
    },
    {
      question:
        "The company is looking for someone with several years of work ________.",
      correct: "experience",
    },
  ],

  section4: [
    {
      question:
        "What do we call a move to a more important position at work?",
      options: [
        "promotion",
        "interview",
        "qualification",
        "application",
      ],
      correct: "promotion",
    },
    {
      question: "What is a qualification?",
      options: [
        "An official skill, certificate, or level of education",
        "A regular meeting with a manager",
        "A place where employees have lunch",
        "A period of time away from work",
      ],
      correct:
        "An official skill, certificate, or level of education",
    },
    {
      question:
        "What do we call someone who works with you?",
      options: [
        "colleague",
        "customer",
        "employer",
        "candidate",
      ],
      correct: "colleague",
    },
    {
      question: "What does salary mean?",
      options: [
        "The regular money you earn from your job",
        "The cost of traveling to work",
        "The amount of time you spend at lunch",
        "The number of people in your department",
      ],
      correct: "The regular money you earn from your job",
    },
    {
      question: "What is a deadline?",
      options: [
        "The latest time or date something must be finished",
        "The first day of a new job",
        "A meeting with a manager",
        "A document about your education",
      ],
      correct:
        "The latest time or date something must be finished",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'apply for' correctly?",
      options: [
        "I'm going to apply for the marketing position.",
        "I'm going to apply for my colleague to lunch.",
        "I'm going to apply for the office door.",
        "I'm going to apply for my salary.",
      ],
      correct:
        "I'm going to apply for the marketing position.",
    },
    {
      question:
        "What does it mean if someone has been promoted?",
      options: [
        "They have been given a more important position.",
        "They have lost their job.",
        "They have started working fewer hours.",
        "They have moved to another country.",
      ],
      correct:
        "They have been given a more important position.",
    },
    {
      question:
        "Which person is most likely to be called a colleague?",
      options: [
        "Someone who works in the same company as you.",
        "Someone who buys something from your company.",
        "Someone who lives in another country.",
        "Someone who teaches you at school.",
      ],
      correct:
        "Someone who works in the same company as you.",
    },
    {
      question:
        "Which sentence describes good professional behavior?",
      options: [
        "She always meets deadlines and communicates clearly.",
        "She often ignores important emails.",
        "She never finishes her work on time.",
        "She refuses to cooperate with everyone.",
      ],
      correct:
        "She always meets deadlines and communicates clearly.",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "He has five years of experience in sales.",
        "He has five years of experience on sales.",
        "He has five years of experience at sales.",
        "He has five years of experience to sales.",
      ],
      correct: "He has five years of experience in sales.",
    },
  ],

  pdfFileName: "b1-work-and-career-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function WorkCareerPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/relationships-social-life"
      nextHref="/exercises/vocabulary/b1/lifestyle-personal-development"
      previousTitle="Relationships & Social Life"
      nextTitle="Lifestyle & Personal Development"
    />
  );
}