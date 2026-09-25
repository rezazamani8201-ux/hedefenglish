"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Travel & Experiences",
  level: "B1 Vocabulary Worksheet",
 
  description:
    "Learn and practice useful B1 vocabulary about travel, journeys, accommodation, experiences, transportation, and exploring new places.",

  section1: [
    {
      question:
        "We decided to ________ a room at a small hotel near the beach.",
      options: ["book", "borrow", "rent", "pack"],
      correct: "book",
    },
    {
      question:
        "Make sure you ________ your passport before leaving for the airport.",
      options: ["pack", "check", "catch", "miss"],
      correct: "check",
    },
    {
      question:
        "Our flight was ________ because of bad weather.",
      options: ["delayed", "crowded", "departed", "located"],
      correct: "delayed",
    },
    {
      question:
        "I've never ________ such an amazing view before.",
      options: ["seen", "looked", "watched", "noticed"],
      correct: "seen",
    },
    {
      question:
        "We stayed in a small village that was completely ________ by mountains.",
      options: ["surrounded", "arrived", "departed", "booked"],
      correct: "surrounded",
    },
    {
      question:
        "If you travel during the summer, it is a good idea to ________ your accommodation in advance.",
      options: ["reserve", "discover", "cross", "explore"],
      correct: "reserve",
    },
    {
      question:
        "The tour guide showed us several historical ________ in the old town.",
      options: ["sights", "suitcases", "journeys", "tickets"],
      correct: "sights",
    },
    {
      question:
        "It was my first time abroad, so the whole trip was an unforgettable ________.",
      options: ["experience", "destination", "transport", "departure"],
      correct: "experience",
    },
  ],

  section2: {
    questions: [
      {
        word: "destination",
        correct:
          "the place that someone is traveling to",
      },
      {
        word: "accommodation",
        correct:
          "a place where you stay when you are traveling",
      },
      {
        word: "departure",
        correct:
          "the act of leaving a place, especially when starting a journey",
      },
      {
        word: "itinerary",
        correct:
          "a plan showing where and when you will travel during a trip",
      },
      {
        word: "sightseeing",
        correct:
          "the activity of visiting interesting or famous places as a tourist",
      },
      {
        word: "memorable",
        correct:
          "something that is worth remembering because it was special or unusual",
      },
    ],

    definitions: [
      "the place that someone is traveling to",
      "a place where you stay when you are traveling",
      "the act of leaving a place, especially when starting a journey",
      "a plan showing where and when you will travel during a trip",
      "the activity of visiting interesting or famous places as a tourist",
      "something that is worth remembering because it was special or unusual",
    ],
  },

  section3: [
    {
      question:
        "Paris was our final ________ after traveling through France for two weeks.",
      correct: "destination",
    },
    {
      question:
        "We found comfortable ________ near the city center.",
      correct: "accommodation",
    },
    {
      question:
        "Our ________ is at 7:30 tomorrow morning.",
      correct: "departure",
    },
    {
      question:
        "I prepared a detailed ________ before our road trip around Italy.",
      correct: "itinerary",
    },
    {
      question:
        "We spent the afternoon ________ and visiting famous landmarks.",
      correct: "sightseeing",
    },
    {
      question:
        "Our trip to Cappadocia was a very ________ experience.",
      correct: "memorable",
    },
  ],

  section4: [
    {
      question:
        "What is a destination?",
      options: [
        "The place you are traveling to",
        "The place where you buy a ticket",
        "The vehicle you use for travel",
        "The luggage you take with you",
      ],
      correct: "The place you are traveling to",
    },
    {
      question:
        "What does accommodation mean?",
      options: [
        "A place where you stay while traveling",
        "A travel document",
        "A type of transportation",
        "A sightseeing activity",
      ],
      correct: "A place where you stay while traveling",
    },
    {
      question:
        "What does departure mean?",
      options: [
        "The act of leaving a place",
        "The arrival at a destination",
        "A place to stay",
        "A tourist attraction",
      ],
      correct: "The act of leaving a place",
    },
    {
      question:
        "What is an itinerary?",
      options: [
        "A plan for a trip",
        "A passport photograph",
        "A hotel room",
        "A type of luggage",
      ],
      correct: "A plan for a trip",
    },
    {
      question:
        "What is sightseeing?",
      options: [
        "Visiting interesting or famous places as a tourist",
        "Packing your suitcase",
        "Waiting at an airport",
        "Buying a train ticket",
      ],
      correct:
        "Visiting interesting or famous places as a tourist",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'destination' correctly?",
      options: [
        "Our final destination is Rome.",
        "I destination my suitcase before the flight.",
        "She bought a destination at the airport.",
        "The hotel destination was very comfortable.",
      ],
      correct: "Our final destination is Rome.",
    },
    {
      question:
        "Why is it useful to book accommodation in advance?",
      options: [
        "It helps make sure you have a place to stay.",
        "It guarantees that your flight will never be delayed.",
        "It means you do not need a passport.",
        "It makes your luggage lighter.",
      ],
      correct:
        "It helps make sure you have a place to stay.",
    },
    {
      question:
        "Which person is most likely to be sightseeing?",
      options: [
        "A tourist visiting museums and historical landmarks.",
        "A passenger sleeping at home.",
        "A worker answering emails in an office.",
        "A student taking an exam.",
      ],
      correct:
        "A tourist visiting museums and historical landmarks.",
    },
    {
      question:
        "Which situation is an example of a memorable experience?",
      options: [
        "Watching the sunrise from the top of a mountain for the first time.",
        "Waiting for five minutes at a bus stop.",
        "Buying a bottle of water from a shop.",
        "Checking your email before work.",
      ],
      correct:
        "Watching the sunrise from the top of a mountain for the first time.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "We arrived at the hotel late in the evening.",
        "We arrived to the hotel late in the evening.",
        "We arrived on the hotel late in the evening.",
        "We arrived for the hotel late in the evening.",
      ],
      correct:
        "We arrived at the hotel late in the evening.",
    },
  ],

  pdfFileName: "b1-travel-and-experiences-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function TravelExperiencesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/food-cooking-eating-habits"
      nextHref="/exercises/vocabulary/b1/city-society-services"
      previousTitle="Food, Cooking & Eating Habits"
      nextTitle="City, Society & Services"
    />
  );
}




