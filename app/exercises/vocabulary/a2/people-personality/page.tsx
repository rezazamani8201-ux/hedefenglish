"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "People & Personality",
  level: "A2 VOCABULARY",
  description:
    "Learn useful vocabulary for describing people, appearance, personality, and relationships.",

  section1: [
    {
      question: "Someone who is always happy and positive is usually ______.",
      options: ["cheerful", "lazy", "rude", "quiet"],
      correct: "cheerful",
    },
    {
      question: "A person who likes meeting and talking to people is ______.",
      options: ["sociable", "nervous", "lazy", "serious"],
      correct: "sociable",
    },
    {
      question: "If someone always tells the truth, they are ______.",
      options: ["honest", "selfish", "impatient", "untidy"],
      correct: "honest",
    },
    {
      question: "Someone who gets angry very easily can be ______.",
      options: ["bad-tempered", "friendly", "generous", "polite"],
      correct: "bad-tempered",
    },
    {
      question: "A person who enjoys helping other people is ______.",
      options: ["kind", "rude", "lazy", "shy"],
      correct: "kind",
    },
    {
      question: "Someone who does not like talking to strangers may be ______.",
      options: ["shy", "confident", "generous", "cheerful"],
      correct: "shy",
    },
    {
      question: "A person who believes in their own abilities is ______.",
      options: ["confident", "nervous", "selfish", "untidy"],
      correct: "confident",
    },
    {
      question: "Someone who thinks about other people's feelings is ______.",
      options: ["considerate", "lazy", "rude", "impatient"],
      correct: "considerate",
    },
  ],

  section2: {
    questions: [
      {
        word: "generous",
        correct: "willing to give money, time, or help to others",
      },
      {
        word: "polite",
        correct: "having good manners and showing respect",
      },
      {
        word: "lazy",
        correct: "not wanting to work or make an effort",
      },
      {
        word: "reliable",
        correct: "someone you can trust to do what they promise",
      },
      {
        word: "impatient",
        correct: "not willing to wait calmly",
      },
      {
        word: "selfish",
        correct: "thinking mainly about yourself and not others",
      },
    ],

    definitions: [
      "willing to give money, time, or help to others",
      "having good manners and showing respect",
      "not wanting to work or make an effort",
      "someone you can trust to do what they promise",
      "not willing to wait calmly",
      "thinking mainly about yourself and not others",
    ],
  },

  section3: [
    {
      question:
        "My brother is very ______. He always helps me when I have a problem.",
      correct: "kind",
    },
    {
      question:
        "Sara is very ______. She never tells lies to her friends.",
      correct: "honest",
    },
    {
      question:
        "Tom is ______ of speaking in front of large groups of people.",
      correct: "nervous",
    },
    {
      question:
        "My new colleague is very ______. She loves talking to everyone.",
      correct: "sociable",
    },
    {
      question:
        "Don't be ______. You need to wait for your turn.",
      correct: "impatient",
    },
    {
      question:
        "Ali is very ______. He always arrives on time and keeps his promises.",
      correct: "reliable",
    },
  ],

  section4: [
    {
      question: "Maria always gives her friends presents. She is very ______.",
      options: ["generous", "lazy", "shy", "rude"],
      correct: "generous",
    },
    {
      question: "Please say 'thank you' and 'please'. Be ______.",
      options: ["polite", "selfish", "untidy", "impatient"],
      correct: "polite",
    },
    {
      question: "He never wants to do any work. He is ______.",
      options: ["lazy", "kind", "confident", "reliable"],
      correct: "lazy",
    },
    {
      question: "You can trust Anna with important work. She is ______.",
      options: ["reliable", "rude", "shy", "selfish"],
      correct: "reliable",
    },
    {
      question: "James only thinks about what he wants. He is ______.",
      options: ["selfish", "generous", "polite", "cheerful"],
      correct: "selfish",
    },
  ],

  section5: [
    {
      question: "Which word describes someone who does not speak much?",
      options: ["quiet", "generous", "impatient", "selfish"],
      correct: "quiet",
    },
    {
      question: "Which word describes someone who is not afraid to try new things?",
      options: ["brave", "lazy", "rude", "untidy"],
      correct: "brave",
    },
    {
      question: "Which word describes someone who keeps things clean and organized?",
      options: ["tidy", "selfish", "nervous", "impatient"],
      correct: "tidy",
    },
    {
      question: "Which word describes someone who treats other people badly?",
      options: ["rude", "kind", "polite", "reliable"],
      correct: "rude",
    },
    {
      question: "Which word describes someone who feels worried or afraid?",
      options: ["nervous", "cheerful", "generous", "confident"],
      correct: "nervous",
    },
  ],

  pdfFileName: "a2-people-and-personality-worksheet.pdf",
};

export default function PeoplePersonalityPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2"
      previousTitle="A2 Vocabulary"
      nextHref="/exercises/vocabulary/a2/jobs-work"
      nextTitle="Jobs & Work"
    />
  );
}