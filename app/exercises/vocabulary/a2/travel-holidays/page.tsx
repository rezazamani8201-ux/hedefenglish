"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Travel & Holidays",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about travel, holidays, transport, accommodation, and holiday activities.",

  section1: [
    {
      question: "We are going on ________ to Spain next month.",
      options: ["holiday", "homework", "meeting", "lesson"],
      correct: "holiday",
    },
    {
      question: "I need to buy a ________ before I get on the plane.",
      options: ["ticket", "menu", "recipe", "uniform"],
      correct: "ticket",
    },
    {
      question: "We stayed in a small ________ near the beach.",
      options: ["hotel", "station", "office", "school"],
      correct: "hotel",
    },
    {
      question: "You need a ________ to travel to some countries.",
      options: ["passport", "wallet", "umbrella", "dictionary"],
      correct: "passport",
    },
    {
      question: "Our plane leaves from ________ 12.",
      options: ["gate", "kitchen", "floor", "corner"],
      correct: "gate",
    },
    {
      question: "We took a lot of ________ during our holiday.",
      options: ["photos", "homework", "lessons", "meetings"],
      correct: "photos",
    },
    {
      question: "We travelled to the city by ________.",
      options: ["train", "pillow", "suitcase", "room"],
      correct: "train",
    },
    {
      question: "I packed my clothes in a large ________.",
      options: ["suitcase", "ticket", "passport", "map"],
      correct: "suitcase",
    },
  ],

  section2: {
    questions: [
      {
        word: "journey",
        correct: "the time spent travelling from one place to another",
      },
      {
        word: "destination",
        correct: "the place where you are going",
      },
      {
        word: "luggage",
        correct: "bags and suitcases that you take when travelling",
      },
      {
        word: "hotel",
        correct: "a place where travellers can stay for a short time",
      },
      {
        word: "passport",
        correct: "an official document used for international travel",
      },
      {
        word: "souvenir",
        correct: "something you buy or keep to remember a place",
      },
    ],

    definitions: [
      "the time spent travelling from one place to another",
      "the place where you are going",
      "bags and suitcases that you take when travelling",
      "a place where travellers can stay for a short time",
      "an official document used for international travel",
      "something you buy or keep to remember a place",
    ],
  },

  section3: [
    {
      question: "We are planning a long ________ across Europe.",
      correct: "journey",
    },
    {
      question: "Paris is our final ________.",
      correct: "destination",
    },
    {
      question: "My ________ is very heavy because I packed too many clothes.",
      correct: "luggage",
    },
    {
      question: "We booked a room at a small ________ near the airport.",
      correct: "hotel",
    },
    {
      question: "Don't forget to take your ________ to the airport.",
      correct: "passport",
    },
    {
      question: "I bought a small magnet as a ________ from my trip.",
      correct: "souvenir",
    },
  ],

  section4: [
    {
      question: "You show this document when travelling internationally.",
      options: ["passport", "menu", "recipe", "ticket"],
      correct: "passport",
    },
    {
      question: "You put your clothes and personal things in this when travelling.",
      options: ["suitcase", "gate", "hotel", "station"],
      correct: "suitcase",
    },
    {
      question: "This is the place where you are travelling to.",
      options: ["destination", "luggage", "journey", "passport"],
      correct: "destination",
    },
    {
      question: "You can buy this small object to remember your holiday.",
      options: ["souvenir", "ticket", "gate", "suitcase"],
      correct: "souvenir",
    },
    {
      question: "This is a place where you can stay while travelling.",
      options: ["hotel", "airport", "ticket", "passport"],
      correct: "hotel",
    },
  ],

  section5: [
    {
      question: "What do you normally need before getting on a plane?",
      options: [
        "a ticket",
        "a recipe",
        "a school book",
        "a cooking pan",
      ],
      correct: "a ticket",
    },
    {
      question: "Where do you usually go to catch a plane?",
      options: ["airport", "restaurant", "library", "supermarket"],
      correct: "airport",
    },
    {
      question: "Which item is useful when travelling abroad?",
      options: ["passport", "pillow only", "school uniform", "shopping basket"],
      correct: "passport",
    },
    {
      question: "What can you buy to remember your holiday?",
      options: ["a souvenir", "a timetable", "a homework book", "a uniform"],
      correct: "a souvenir",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "We stayed at a hotel.",
        "We stayed at a suitcase.",
        "We stayed at a passport.",
        "We stayed at a ticket.",
      ],
      correct: "We stayed at a hotel.",
    },
  ],

  pdfFileName: "a2-travel-and-holidays-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function TravelAndHolidaysPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/food-cooking"
      nextHref="/exercises/vocabulary/a2/city-services"
      previousTitle="Food & Cooking"
      nextTitle="City & Services"
    />
  );
}