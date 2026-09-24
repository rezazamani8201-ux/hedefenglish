"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Free Time & Entertainment",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about free time, hobbies, entertainment, sports, music, films, and social activities.",

  section1: [
    {
      question: "I like to ________ books in my free time.",
      options: ["read", "play", "make", "go"],
      correct: "read",
    },
    {
      question: "My brother enjoys ________ football with his friends.",
      options: ["playing", "reading", "watching", "doing"],
      correct: "playing",
    },
    {
      question: "We went to the cinema to ________ a new film.",
      options: ["watch", "listen", "play", "read"],
      correct: "watch",
    },
    {
      question: "She loves listening to ________ in the evening.",
      options: ["music", "films", "games", "books"],
      correct: "music",
    },
    {
      question: "I often ________ cycling at the weekend.",
      options: ["go", "do", "make", "play"],
      correct: "go",
    },
    {
      question: "Chess is a popular ________ game.",
      options: ["board", "water", "outdoor", "running"],
      correct: "board",
    },
    {
      question: "He takes photos as a ________.",
      options: ["hobby", "lesson", "job", "subject"],
      correct: "hobby",
    },
    {
      question: "We sometimes meet our friends and ________ together.",
      options: ["chat", "sleep", "study", "work"],
      correct: "chat",
    },
  ],

  section2: {
    questions: [
      {
        word: "hobby",
        correct: "an activity you enjoy doing in your free time",
      },
      {
        word: "concert",
        correct: "a live musical performance for an audience",
      },
      {
        word: "movie",
        correct: "a film that you watch for entertainment",
      },
      {
        word: "game",
        correct: "an activity played for fun, often with rules",
      },
      {
        word: "hiking",
        correct: "walking for a long distance in the countryside or mountains",
      },
      {
        word: "relax",
        correct: "to rest and enjoy quiet time",
      },
    ],

    definitions: [
      "an activity you enjoy doing in your free time",
      "a live musical performance for an audience",
      "a film that you watch for entertainment",
      "an activity played for fun, often with rules",
      "walking for a long distance in the countryside or mountains",
      "to rest and enjoy quiet time",
    ],
  },

  section3: [
    {
      question: "Photography is my favorite ________.",
      correct: "hobby",
    },
    {
      question: "We went to a rock ________ last night.",
      correct: "concert",
    },
    {
      question: "Let's watch a ________ tonight.",
      correct: "movie",
    },
    {
      question: "We played a board ________ after dinner.",
      correct: "game",
    },
    {
      question: "They enjoy ________ in the mountains.",
      correct: "hiking",
    },
    {
      question: "I like to ________ by listening to music after work.",
      correct: "relax",
    },
  ],

  section4: [
    {
      question: "You enjoy doing this activity in your free time.",
      options: ["hobby", "exam", "job", "lesson"],
      correct: "hobby",
    },
    {
      question: "You go to this event to listen to musicians performing live.",
      options: ["concert", "library", "museum", "market"],
      correct: "concert",
    },
    {
      question: "You watch this at home or at the cinema.",
      options: ["movie", "game", "concert", "hobby"],
      correct: "movie",
    },
    {
      question: "You can play this with friends for fun.",
      options: ["game", "lesson", "journey", "subject"],
      correct: "game",
    },
    {
      question: "You do this when you walk through mountains or countryside.",
      options: ["hiking", "shopping", "cooking", "driving"],
      correct: "hiking",
    },
  ],

  section5: [
    {
      question: "Which activity is a common hobby?",
      options: [
        "photography",
        "paying a bill",
        "going to work",
        "taking an exam",
      ],
      correct: "photography",
    },
    {
      question: "Where can you watch a live music performance?",
      options: [
        "at a concert",
        "at a pharmacy",
        "at a bank",
        "at a post office",
      ],
      correct: "at a concert",
    },
    {
      question: "Which activity can you do outdoors?",
      options: [
        "hiking",
        "watching television",
        "reading an email",
        "using a computer",
      ],
      correct: "hiking",
    },
    {
      question: "What can you do when you want to rest after a busy day?",
      options: [
        "relax",
        "take an exam",
        "go to work",
        "do homework",
      ],
      correct: "relax",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I enjoy playing football.",
        "I enjoy playing a passport.",
        "I enjoy playing a restaurant.",
        "I enjoy playing a suitcase.",
      ],
      correct: "I enjoy playing football.",
    },
  ],

  pdfFileName: "a2-free-time-and-entertainment-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function FreeTimeAndEntertainmentPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/nature-environment"
      nextHref="/exercises/vocabulary/a2/feelings-everyday-situations"
      previousTitle="Nature & Environment"
      nextTitle="Feelings & Everyday Situations"
    />
  );
}