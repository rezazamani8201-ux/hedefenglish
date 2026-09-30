"use client";

import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Weekend in the City",
  level: "A2 Reading Worksheet",
  description:
    "Read about a weekend trip to the city and practice understanding details, vocabulary, and the main idea.",
  passage: `Last weekend, Emma and her brother Daniel decided to spend two days in the city. They usually stayed at home on weekends, but they wanted to do something different.

They left their town early on Saturday morning and took the train. The journey took about one hour. When they arrived, they walked to the city center and had breakfast in a small cafe. Emma ordered eggs and toast, while Daniel had a sandwich and a cup of coffee.

After breakfast, they visited a large museum. Emma enjoyed the history section because she likes learning about the past. Daniel preferred the science section, especially the room about space and planets. They spent almost three hours in the museum.

In the afternoon, they walked through a busy shopping street. They bought a few gifts for their family and then went to a park near the river. The weather was warm and sunny, so they sat on a bench and talked for a while.

On Sunday, they visited a famous old building and took many photos. Before going home, they had lunch at a restaurant near the train station.

Emma and Daniel were tired when they returned home, but they were happy with their weekend. They decided that they would visit the city again in the future.`,

  section1: [
    {
      question: "Why did Emma and Daniel decide to go to the city?",
      options: [
        "They wanted to do something different.",
        "They wanted to visit their family.",
        "They had to go to work.",
        "They wanted to move there.",
      ],
      correct: "They wanted to do something different.",
    },
    {
      question: "How did they travel to the city?",
      options: ["By bus", "By car", "By train", "By plane"],
      correct: "By train",
    },
    {
      question: "What did Emma enjoy at the museum?",
      options: [
        "The science section",
        "The history section",
        "The art section",
        "The music section",
      ],
      correct: "The history section",
    },
    {
      question: "Where did they spend some time in the afternoon?",
      options: [
        "At the train station",
        "At a restaurant",
        "In a park near the river",
        "At the museum",
      ],
      correct: "In a park near the river",
    },
    {
      question: "How did Emma and Daniel feel when they returned home?",
      options: [
        "Angry and disappointed",
        "Tired but happy",
        "Bored and worried",
        "Excited but nervous",
      ],
      correct: "Tired but happy",
    },
  ],

  section2: [
    {
      statement: "Emma and Daniel usually traveled to the city every weekend.",
      correct: "False",
    },
    {
      statement: "The train journey took about one hour.",
      correct: "True",
    },
    {
      statement: "Daniel liked the science section of the museum.",
      correct: "True",
    },
    {
      statement: "The weather was cold and rainy on Saturday.",
      correct: "False",
    },
    {
      statement: "They decided to visit the city again in the future.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "The word 'journey' in the passage is closest in meaning to:",
      options: ["Trip", "Problem", "Building", "Gift"],
      correct: "Trip",
    },
    {
      question: "What does 'they' refer to in 'They spent almost three hours in the museum'?",
      options: [
        "Emma and Daniel",
        "The museum workers",
        "Their family",
        "The tourists",
      ],
      correct: "Emma and Daniel",
    },
    {
      question: "The word 'famous' is closest in meaning to:",
      options: ["Unknown", "Well-known", "Modern", "Small"],
      correct: "Well-known",
    },
    {
      question: "What does 'future' mean in the final sentence?",
      options: ["The past", "The present", "A later time", "Last weekend"],
      correct: "A later time",
    },
    {
      question: "Which word best describes the city?",
      options: ["Quiet", "Busy", "Empty", "Dangerous"],
      correct: "Busy",
    },
  ],

  section4: [
    {
      sentence: "Emma and Daniel took the train because they wanted to visit the city for the ______.",
      correct: "weekend",
    },
    {
      sentence: "Emma ordered eggs and ______ for breakfast.",
      correct: "toast",
    },
    {
      sentence: "Daniel especially liked the museum's section about ______ and planets.",
      correct: "space",
    },
    {
      sentence: "They went to a park near the ______ in the afternoon.",
      correct: "river",
    },
    {
      sentence: "Before going home, they had ______ near the train station.",
      correct: "lunch",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Emma and Daniel had an enjoyable weekend in the city.",
        "Emma wanted to study history at a museum.",
        "Daniel wanted to buy a new car.",
        "The city was too expensive for tourists.",
      ],
      correct: "Emma and Daniel had an enjoyable weekend in the city.",
    },
    {
      question: "Why did Emma probably enjoy the history section?",
      options: [
        "She likes learning about the past.",
        "She works at the museum.",
        "She wanted to meet her friends.",
        "She wanted to buy a history book.",
      ],
      correct: "She likes learning about the past.",
    },
    {
      question: "What can we understand about Emma and Daniel's weekend?",
      options: [
        "They regretted going to the city.",
        "They enjoyed their trip despite feeling tired.",
        "They spent the whole weekend shopping.",
        "They decided never to return.",
      ],
      correct: "They enjoyed their trip despite feeling tired.",
    },
  ],

  pdfFileName: "a2-a-weekend-in-the-city-reading.pdf",
};

export default function WeekendInTheCityPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/my-favorite-restaurant"
      previousTitle="My Favorite Restaurant"
      nextHref="/exercises/reading/a2/learning-to-cook"
      nextTitle="Learning to Cook"
    />
  );
}