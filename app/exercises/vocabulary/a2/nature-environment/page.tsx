"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Nature & Environment",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about nature, animals, weather, the environment, and everyday environmental problems.",

  section1: [
    {
      question: "We went for a walk in the ________ near our town.",
      options: ["forest", "office", "airport", "factory"],
      correct: "forest",
    },
    {
      question: "The ________ is very polluted because there are many cars.",
      options: ["air", "river", "mountain", "garden"],
      correct: "air",
    },
    {
      question: "We should ________ water and electricity whenever possible.",
      options: ["save", "waste", "break", "throw"],
      correct: "save",
    },
    {
      question: "There are many fish in the ________.",
      options: ["river", "forest", "desert", "road"],
      correct: "river",
    },
    {
      question: "A lion is a wild ________.",
      options: ["animal", "plant", "tree", "flower"],
      correct: "animal",
    },
    {
      question: "We should put rubbish in the ________.",
      options: ["bin", "river", "street", "forest"],
      correct: "bin",
    },
    {
      question: "Trees and flowers are examples of ________.",
      options: ["plants", "machines", "buildings", "vehicles"],
      correct: "plants",
    },
    {
      question: "The opposite of clean is ________.",
      options: ["dirty", "fresh", "green", "natural"],
      correct: "dirty",
    },
  ],

  section2: {
    questions: [
      {
        word: "environment",
        correct: "the natural world around us",
      },
      {
        word: "pollution",
        correct: "harmful substances that make air, water, or land dirty",
      },
      {
        word: "recycle",
        correct: "to use materials again instead of throwing them away",
      },
      {
        word: "waste",
        correct: "to use something carelessly or unnecessarily",
      },
      {
        word: "wildlife",
        correct: "animals and plants that live in nature",
      },
      {
        word: "climate",
        correct: "the usual weather conditions of a place",
      },
    ],

    definitions: [
      "the natural world around us",
      "harmful substances that make air, water, or land dirty",
      "to use materials again instead of throwing them away",
      "to use something carelessly or unnecessarily",
      "animals and plants that live in nature",
      "the usual weather conditions of a place",
    ],
  },

  section3: [
    {
      question: "We should protect the ________ for future generations.",
      correct: "environment",
    },
    {
      question: "Air ________ is a serious problem in big cities.",
      correct: "pollution",
    },
    {
      question: "We should ________ paper, glass, and plastic.",
      correct: "recycle",
    },
    {
      question: "Don't ________ water by leaving the tap running.",
      correct: "waste",
    },
    {
      question: "Many people enjoy watching ________ in national parks.",
      correct: "wildlife",
    },
    {
      question: "The country's ________ is usually warm and dry.",
      correct: "climate",
    },
  ],

  section4: [
    {
      question: "This means the natural world around us.",
      options: ["environment", "pollution", "waste", "climate"],
      correct: "environment",
    },
    {
      question: "This makes air, water, or land dirty and harmful.",
      options: ["pollution", "wildlife", "recycling", "climate"],
      correct: "pollution",
    },
    {
      question: "You do this with paper, glass, and plastic to use them again.",
      options: ["recycle", "waste", "destroy", "pollute"],
      correct: "recycle",
    },
    {
      question: "Animals and plants living in nature are called this.",
      options: ["wildlife", "pollution", "climate", "waste"],
      correct: "wildlife",
    },
    {
      question: "The usual weather conditions of a place are its...",
      options: ["climate", "environment", "pollution", "recycling"],
      correct: "climate",
    },
  ],

  section5: [
    {
      question: "Which action helps protect the environment?",
      options: [
        "recycling plastic",
        "throwing rubbish into rivers",
        "wasting water",
        "leaving lights on all day",
      ],
      correct: "recycling plastic",
    },
    {
      question: "Where can you often see wild animals living naturally?",
      options: [
        "in the wild",
        "in an office",
        "in a supermarket",
        "in a classroom",
      ],
      correct: "in the wild",
    },
    {
      question: "What should you do with rubbish?",
      options: [
        "put it in a bin",
        "throw it into a river",
        "leave it in the street",
        "put it in a forest",
      ],
      correct: "put it in a bin",
    },
    {
      question: "Which resource should we try not to waste?",
      options: [
        "water",
        "plastic bags",
        "rubbish",
        "pollution",
      ],
      correct: "water",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We should protect wildlife.",
        "We should pollute wildlife.",
        "We should waste wildlife.",
        "We should throw wildlife.",
      ],
      correct: "We should protect wildlife.",
    },
  ],

  pdfFileName: "a2-nature-and-environment-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function NatureAndEnvironmentPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/technology-communication"
      nextHref="/exercises/vocabulary/a2/free-time-entertainment"
      previousTitle="Technology & Communication"
      nextTitle="Free Time & Entertainment"
    />
  );
}