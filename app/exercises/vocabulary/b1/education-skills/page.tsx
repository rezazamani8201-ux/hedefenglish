"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Education & Skills",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about education, studying, learning skills, exams, qualifications, and academic life.",

  section1: [
    {
      question:
        "She decided to ________ a course in graphic design after finishing school.",
      options: ["take", "make", "do", "build"],
      correct: "take",
    },
    {
      question:
        "You need to ________ an exam before you can enter the university.",
      options: ["pass", "attend", "join", "teach"],
      correct: "pass",
    },
    {
      question:
        "He is very good at ________ problems and finding practical solutions.",
      options: ["solving", "passing", "attending", "memorizing"],
      correct: "solving",
    },
    {
      question:
        "Students are expected to ________ their assignments on time.",
      options: ["submit", "borrow", "graduate", "revise"],
      correct: "submit",
    },
    {
      question:
        "I need to ________ for my English exam this weekend.",
      options: ["revise", "qualify", "enroll", "lecture"],
      correct: "revise",
    },
    {
      question:
        "She has excellent communication ________ and works well with people.",
      options: ["skills", "degrees", "subjects", "grades"],
      correct: "skills",
    },
    {
      question:
        "After four years of study, he finally ________ from university.",
      options: ["graduated", "submitted", "revised", "attended"],
      correct: "graduated",
    },
    {
      question:
        "The teacher encouraged us to ________ part in classroom discussions.",
      options: ["take", "make", "do", "give"],
      correct: "take",
    },
  ],

  section2: {
    questions: [
      {
        word: "qualification",
        correct:
          "an official skill, certificate, or degree that shows you have completed a course or have the necessary knowledge",
      },
      {
        word: "assignment",
        correct:
          "a piece of work that a student is asked to complete",
      },
      {
        word: "curriculum",
        correct:
          "the subjects and topics taught in a particular course or school",
      },
      {
        word: "achievement",
        correct:
          "something successfully completed, especially after effort",
      },
      {
        word: "scholarship",
        correct:
          "money given to a student to help pay for their education",
      },
      {
        word: "concentration",
        correct:
          "the ability to give all your attention to something",
      },
    ],

    definitions: [
      "an official skill, certificate, or degree that shows you have completed a course or have the necessary knowledge",
      "a piece of work that a student is asked to complete",
      "the subjects and topics taught in a particular course or school",
      "something successfully completed, especially after effort",
      "money given to a student to help pay for their education",
      "the ability to give all your attention to something",
    ],
  },

  section3: [
    {
      question:
        "A university degree is an important ________ for many professional jobs.",
      correct: "qualification",
    },
    {
      question:
        "I have to finish my English ________ before Friday.",
      correct: "assignment",
    },
    {
      question:
        "The school is planning to update its ________ next year.",
      correct: "curriculum",
    },
    {
      question:
        "Winning the competition was a major ________ for the students.",
      correct: "achievement",
    },
    {
      question:
        "She received a ________ that covers most of her university fees.",
      correct: "scholarship",
    },
    {
      question:
        "It is difficult to study when you cannot maintain your ________.",
      correct: "concentration",
    },
  ],

  section4: [
    {
      question:
        "What is a qualification?",
      options: [
        "An official certificate, degree, or skill showing knowledge or training",
        "A piece of homework given every day",
        "A subject studied only at school",
        "A place where students take exams",
      ],
      correct:
        "An official certificate, degree, or skill showing knowledge or training",
    },
    {
      question:
        "What is an assignment?",
      options: [
        "A piece of work that a student is asked to complete",
        "Money given to a university",
        "A school building",
        "A type of academic degree",
      ],
      correct:
        "A piece of work that a student is asked to complete",
    },
    {
      question:
        "What does curriculum mean?",
      options: [
        "The subjects and topics taught in a course or school",
        "A student's final exam result",
        "A university teacher's salary",
        "A certificate given after graduation",
      ],
      correct:
        "The subjects and topics taught in a course or school",
    },
    {
      question:
        "What is a scholarship?",
      options: [
        "Money given to help a student pay for education",
        "A difficult university exam",
        "A school timetable",
        "A type of classroom activity",
      ],
      correct:
        "Money given to help a student pay for education",
    },
    {
      question:
        "What does concentration mean?",
      options: [
        "The ability to give all your attention to something",
        "The ability to speak several languages",
        "The process of finishing university",
        "The ability to teach a large class",
      ],
      correct:
        "The ability to give all your attention to something",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'qualification' correctly?",
      options: [
        "You need the right qualification for this job.",
        "I qualification my homework every evening.",
        "She bought a qualification at the bookstore.",
        "The qualification was very crowded yesterday.",
      ],
      correct:
        "You need the right qualification for this job.",
    },
    {
      question:
        "Which student is showing good concentration?",
      options: [
        "A student who focuses carefully on the teacher's explanation.",
        "A student who checks social media every two minutes.",
        "A student who leaves the classroom during every lesson.",
        "A student who talks to friends throughout the exam.",
      ],
      correct:
        "A student who focuses carefully on the teacher's explanation.",
    },
    {
      question:
        "Why might a student apply for a scholarship?",
      options: [
        "To receive financial help with education costs.",
        "To avoid attending any classes.",
        "To change their school subjects automatically.",
        "To get a free passport.",
      ],
      correct:
        "To receive financial help with education costs.",
    },
    {
      question:
        "Which action is most useful before an important exam?",
      options: [
        "Reviewing the material and practicing questions.",
        "Ignoring the course material until the exam starts.",
        "Avoiding sleep for several nights.",
        "Skipping every lesson before the exam.",
      ],
      correct:
        "Reviewing the material and practicing questions.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "She graduated from university last year.",
        "She graduated university from last year.",
        "She graduate from university last year.",
        "She was graduate from university last year.",
      ],
      correct:
        "She graduated from university last year.",
    },
  ],

  pdfFileName: "b1-education-and-skills-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function EducationSkillsPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/home-living-responsibilities"
      nextHref="/exercises/vocabulary/b1/technology-media-communication"
      previousTitle="Home, Living & Responsibilities"
      nextTitle="Technology, Media & Communication"
    />
  );
}




