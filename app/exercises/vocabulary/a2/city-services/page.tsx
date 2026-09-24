"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "City & Services",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about places in a city, public services, directions, and everyday city life.",

  section1: [
    {
      question: "I need to send this letter. Where is the nearest ________?",
      options: ["post office", "bakery", "cinema", "gym"],
      correct: "post office",
    },
    {
      question: "You can borrow books from the ________.",
      options: ["library", "bank", "pharmacy", "station"],
      correct: "library",
    },
    {
      question: "I need some medicine, so I am going to the ________.",
      options: ["pharmacy", "museum", "park", "restaurant"],
      correct: "pharmacy",
    },
    {
      question: "You can take a bus from the bus ________.",
      options: ["station", "bridge", "square", "corner"],
      correct: "station",
    },
    {
      question: "I need to take some money out of my account. I am going to the ________.",
      options: ["bank", "bakery", "library", "theater"],
      correct: "bank",
    },
    {
      question: "Let's meet in the city ________ near the fountain.",
      options: ["square", "hospital", "office", "pharmacy"],
      correct: "square",
    },
    {
      question: "If you are sick, you can see a doctor at the ________.",
      options: ["hospital", "supermarket", "cinema", "post office"],
      correct: "hospital",
    },
    {
      question: "We can buy bread and cakes at the ________.",
      options: ["bakery", "bank", "library", "station"],
      correct: "bakery",
    },
  ],

  section2: {
    questions: [
      {
        word: "library",
        correct: "a place where you can borrow or read books",
      },
      {
        word: "pharmacy",
        correct: "a place where you can buy medicine",
      },
      {
        word: "post office",
        correct: "a place where you can send letters and parcels",
      },
      {
        word: "bank",
        correct: "a place where people keep and manage their money",
      },
      {
        word: "hospital",
        correct: "a place where doctors and nurses treat sick people",
      },
      {
        word: "bakery",
        correct: "a shop where bread and cakes are made or sold",
      },
    ],

    definitions: [
      "a place where you can borrow or read books",
      "a place where you can buy medicine",
      "a place where you can send letters and parcels",
      "a place where people keep and manage their money",
      "a place where doctors and nurses treat sick people",
      "a shop where bread and cakes are made or sold",
    ],
  },

  section3: [
    {
      question: "I want to borrow a book, so I am going to the ________.",
      correct: "library",
    },
    {
      question: "You can buy medicine at the ________.",
      correct: "pharmacy",
    },
    {
      question: "I need to send a parcel at the ________.",
      correct: "post office",
    },
    {
      question: "My parents keep their money in a ________.",
      correct: "bank",
    },
    {
      question: "The doctor works at the ________.",
      correct: "hospital",
    },
    {
      question: "We bought fresh bread from the ________ this morning.",
      correct: "bakery",
    },
  ],

  section4: [
    {
      question: "You want to borrow a book.",
      options: ["library", "bank", "pharmacy", "bakery"],
      correct: "library",
    },
    {
      question: "You need medicine for a cold.",
      options: ["pharmacy", "cinema", "post office", "park"],
      correct: "pharmacy",
    },
    {
      question: "You want to send a letter.",
      options: ["post office", "hospital", "library", "restaurant"],
      correct: "post office",
    },
    {
      question: "You need to deposit money into your account.",
      options: ["bank", "bakery", "museum", "cinema"],
      correct: "bank",
    },
    {
      question: "You want to buy fresh bread.",
      options: ["bakery", "library", "hospital", "station"],
      correct: "bakery",
    },
  ],

  section5: [
    {
      question: "Where can you borrow books?",
      options: [
        "At the library",
        "At the bank",
        "At the pharmacy",
        "At the bakery",
      ],
      correct: "At the library",
    },
    {
      question: "Where can you buy medicine?",
      options: [
        "At the pharmacy",
        "At the post office",
        "At the cinema",
        "At the library",
      ],
      correct: "At the pharmacy",
    },
    {
      question: "Where can you send a letter?",
      options: [
        "At the post office",
        "At the hospital",
        "At the bank",
        "At the bakery",
      ],
      correct: "At the post office",
    },
    {
      question: "Where can you see a doctor?",
      options: [
        "At the hospital",
        "At the library",
        "At the bank",
        "At the cinema",
      ],
      correct: "At the hospital",
    },
    {
      question: "Where can you buy bread and cakes?",
      options: [
        "At the bakery",
        "At the pharmacy",
        "At the post office",
        "At the bank",
      ],
      correct: "At the bakery",
    },
  ],

  pdfFileName: "a2-city-and-services-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function CityAndServicesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/travel-holidays"
      nextHref="/exercises/vocabulary/a2/shopping-fashion"
      previousTitle="Travel & Holidays"
      nextTitle="Shopping & Fashion"
    />
  );
}