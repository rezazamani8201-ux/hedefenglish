"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "City, Society & Services",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about cities, public services, neighborhoods, transportation, society, and everyday urban life.",

  section1: [
    {
      question:
        "The city is planning to ________ a new public library next year.",
      options: ["build", "borrow", "deliver", "attend"],
      correct: "build",
    },
    {
      question:
        "There is heavy traffic during the ________ hour in the morning.",
      options: ["rush", "quiet", "empty", "free"],
      correct: "rush",
    },
    {
      question:
        "You can take the bus or subway to ________ around the city.",
      options: ["get", "make", "do", "bring"],
      correct: "get",
    },
    {
      question:
        "The local government provides several public ________ for residents.",
      options: ["services", "suitcases", "journeys", "recipes"],
      correct: "services",
    },
    {
      question:
        "Our neighborhood is very ________; there are several parks and schools nearby.",
      options: ["convenient", "crowded", "remote", "empty"],
      correct: "convenient",
    },
    {
      question:
        "The city center is usually very ________ at weekends because many tourists visit it.",
      options: ["crowded", "private", "silent", "narrow"],
      correct: "crowded",
    },
    {
      question:
        "Residents complained about the ________ caused by construction work.",
      options: ["noise", "sight", "traffic light", "facility"],
      correct: "noise",
    },
    {
      question:
        "The new sports ________ includes a swimming pool and a gym.",
      options: ["facility", "destination", "neighborhood", "route"],
      correct: "facility",
    },
  ],

  section2: {
    questions: [
      {
        word: "neighborhood",
        correct:
          "an area of a town or city where people live",
      },
      {
        word: "public transport",
        correct:
          "buses, trains, and other transportation available for everyone to use",
      },
      {
        word: "facility",
        correct:
          "a building, place, or service provided for a particular purpose",
      },
      {
        word: "resident",
        correct:
          "a person who lives in a particular place",
      },
      {
        word: "commute",
        correct:
          "to travel regularly between your home and your workplace or school",
      },
      {
        word: "pedestrian",
        correct:
          "a person who is walking rather than traveling in a vehicle",
      },
    ],

    definitions: [
      "an area of a town or city where people live",
      "buses, trains, and other transportation available for everyone to use",
      "a building, place, or service provided for a particular purpose",
      "a person who lives in a particular place",
      "to travel regularly between your home and your workplace or school",
      "a person who is walking rather than traveling in a vehicle",
    ],
  },

  section3: [
    {
      question:
        "We moved to a quiet ________ outside the city center.",
      correct: "neighborhood",
    },
    {
      question:
        "Many people use ________ because parking in the city center is difficult.",
      correct: "public transport",
    },
    {
      question:
        "The new sports ________ is open to local residents.",
      correct: "facility",
    },
    {
      question:
        "Every ________ in the building received a letter from the manager.",
      correct: "resident",
    },
    {
      question:
        "I ________ to Istanbul every day for work.",
      correct: "commute",
    },
    {
      question:
        "Drivers should always give way to a ________ at a crossing.",
      correct: "pedestrian",
    },
  ],

  section4: [
    {
      question:
        "What is a neighborhood?",
      options: [
        "An area of a town or city where people live",
        "A type of public transportation",
        "A building used for sports",
        "A person who drives a bus",
      ],
      correct:
        "An area of a town or city where people live",
    },
    {
      question:
        "What does public transport mean?",
      options: [
        "Transportation available for everyone to use",
        "A private car used by one family",
        "A bicycle owned by a resident",
        "A road used only by pedestrians",
      ],
      correct:
        "Transportation available for everyone to use",
    },
    {
      question:
        "What is a facility?",
      options: [
        "A place or building provided for a particular purpose",
        "A person who lives in a city",
        "A busy period of the day",
        "A person walking along a road",
      ],
      correct:
        "A place or building provided for a particular purpose",
    },
    {
      question:
        "What does commute mean?",
      options: [
        "To travel regularly between home and work or school",
        "To move to another country permanently",
        "To visit a tourist attraction",
        "To walk around a shopping center",
      ],
      correct:
        "To travel regularly between home and work or school",
    },
    {
      question:
        "What is a pedestrian?",
      options: [
        "A person who is walking",
        "A person who drives a taxi",
        "A person who works at a train station",
        "A person who repairs roads",
      ],
      correct: "A person who is walking",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'neighborhood' correctly?",
      options: [
        "There are several cafÃ©s in my neighborhood.",
        "I neighborhood to work every morning.",
        "We bought a neighborhood at the station.",
        "The bus was very neighborhood today.",
      ],
      correct:
        "There are several cafÃ©s in my neighborhood.",
    },
    {
      question:
        "Why do many people use public transport in large cities?",
      options: [
        "It can reduce the need to drive and find parking.",
        "It always takes longer than walking.",
        "It is only available to tourists.",
        "It can only be used at weekends.",
      ],
      correct:
        "It can reduce the need to drive and find parking.",
    },
    {
      question:
        "Which person is commuting?",
      options: [
        "Someone traveling from home to work every morning.",
        "Someone visiting a museum on holiday.",
        "Someone cooking dinner at home.",
        "Someone buying clothes at a shopping mall.",
      ],
      correct:
        "Someone traveling from home to work every morning.",
    },
    {
      question:
        "Which place is an example of a public facility?",
      options: [
        "A public swimming pool",
        "A person's bedroom",
        "A private suitcase",
        "A family car",
      ],
      correct: "A public swimming pool",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "Pedestrians should use the crossing to cross the road safely.",
        "Pedestrians should drives on the highway.",
        "A pedestrian is a type of public bus.",
        "Pedestrians always travel by train.",
      ],
      correct:
        "Pedestrians should use the crossing to cross the road safely.",
    },
  ],

  pdfFileName: "b1-city-society-and-services-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function CitySocietyServicesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/travel-experiences"
      nextHref="/exercises/vocabulary/b1/shopping-money-consumer-choices"
      previousTitle="Travel & Experiences"
      nextTitle="Shopping, Money & Consumer Choices"
    />
  );
}




