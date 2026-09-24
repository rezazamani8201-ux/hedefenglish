"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Education & Learning",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about school, studying, subjects, exams, homework, and learning.",

  section1: [
    {
      question: "I have an English ________ at 10 o'clock.",
      options: ["lesson", "holiday", "journey", "meeting"],
      correct: "lesson",
    },
    {
      question: "I need to do my ________ before dinner.",
      options: ["homework", "luggage", "shopping", "laundry"],
      correct: "homework",
    },
    {
      question: "Maths and science are school ________.",
      options: ["subjects", "tickets", "places", "activities"],
      correct: "subjects",
    },
    {
      question: "The teacher wrote the answer on the ________.",
      options: ["board", "floor", "door", "window"],
      correct: "board",
    },
    {
      question: "I have an important ________ tomorrow, so I need to study.",
      options: ["exam", "holiday", "party", "journey"],
      correct: "exam",
    },
    {
      question: "Students usually carry their books in a ________.",
      options: ["schoolbag", "suitcase", "wallet", "purse"],
      correct: "schoolbag",
    },
    {
      question: "She is very good at learning new languages. She learns very ________.",
      options: ["quickly", "quietly", "heavily", "badly"],
      correct: "quickly",
    },
    {
      question: "We usually ________ notes during the lesson.",
      options: ["take", "make", "do", "have"],
      correct: "take",
    },
  ],

  section2: {
    questions: [
      {
        word: "subject",
        correct: "an area of study such as English, maths, or science",
      },
      {
        word: "homework",
        correct: "work that students do at home after a lesson",
      },
      {
        word: "exam",
        correct: "a test that checks what students know",
      },
      {
        word: "lesson",
        correct: "a period of time when students learn something",
      },
      {
        word: "classmate",
        correct: "a student who is in the same class as you",
      },
      {
        word: "grade",
        correct: "a mark or result that shows how well a student did",
      },
    ],

    definitions: [
      "an area of study such as English, maths, or science",
      "work that students do at home after a lesson",
      "a test that checks what students know",
      "a period of time when students learn something",
      "a student who is in the same class as you",
      "a mark or result that shows how well a student did",
    ],
  },

  section3: [
    {
      question: "English is my favorite school ________.",
      correct: "subject",
    },
    {
      question: "I have a lot of ________ to do tonight.",
      correct: "homework",
    },
    {
      question: "We have a big English ________ next Monday.",
      correct: "exam",
    },
    {
      question: "Our English ________ starts at 9 a.m.",
      correct: "lesson",
    },
    {
      question: "My best ________ sits next to me in class.",
      correct: "classmate",
    },
    {
      question: "I got a good ________ in my English test.",
      correct: "grade",
    },
  ],

  section4: [
    {
      question: "You study this at school, such as English or history.",
      options: ["subject", "homework", "grade", "schoolbag"],
      correct: "subject",
    },
    {
      question: "You do this at home after school.",
      options: ["homework", "lesson", "exam", "classmate"],
      correct: "homework",
    },
    {
      question: "You take this to test your knowledge.",
      options: ["exam", "schoolbag", "lesson", "subject"],
      correct: "exam",
    },
    {
      question: "This person studies in the same class as you.",
      options: ["classmate", "teacher", "doctor", "customer"],
      correct: "classmate",
    },
    {
      question: "This shows how well you did in a test.",
      options: ["grade", "lesson", "subject", "homework"],
      correct: "grade",
    },
  ],

  section5: [
    {
      question: "What should you do before an important exam?",
      options: [
        "study and review",
        "forget your books",
        "go shopping",
        "watch TV all night",
      ],
      correct: "study and review",
    },
    {
      question: "Where do students usually write notes during a lesson?",
      options: [
        "in a notebook",
        "in a suitcase",
        "on a passport",
        "on a menu",
      ],
      correct: "in a notebook",
    },
    {
      question: "Which person teaches students?",
      options: ["teacher", "customer", "driver", "waiter"],
      correct: "teacher",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I have to do my homework.",
        "I have to cook my homework.",
        "I have to wear my homework.",
        "I have to drive my homework.",
      ],
      correct: "I have to do my homework.",
    },
    {
      question: "Which activity can help you learn new vocabulary?",
      options: [
        "reading and practicing",
        "sleeping all day",
        "avoiding new words",
        "watching the clock",
      ],
      correct: "reading and practicing",
    },
  ],

  pdfFileName: "a2-education-and-learning-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function EducationAndLearningPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/house-chores"
      nextHref="/exercises/vocabulary/a2/technology-communication"
      previousTitle="House & Chores"
      nextTitle="Technology & Communication"
    />
  );
}