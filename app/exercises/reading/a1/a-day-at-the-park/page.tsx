import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Day at the Park",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `Last Saturday, I went to the park with my family. The weather was warm and sunny, so it was a perfect day to spend outside.

We arrived at the park at ten o'clock in the morning. My brother wanted to play football, so he went to the large field with my father. My mother and I walked around the park and looked at the flowers. There were many beautiful trees and colorful flowers.

After walking, we sat on a bench near the lake. We watched the ducks swimming in the water. My mother brought some bread, and we gave small pieces to the ducks.

At lunchtime, we had a picnic under a big tree. We ate sandwiches, fruit, and some cookies. After lunch, my brother and I played badminton while our parents talked.

In the afternoon, we bought ice cream from a small shop near the park entrance. Then we walked home together.

It was a simple but wonderful day. I really enjoyed spending time outside with my family.`,

  section1: [
    {
      question: "When did the family go to the park?",
      options: [
        "Last Monday",
        "Last Saturday",
        "Last Sunday",
        "Yesterday",
      ],
      correct: "Last Saturday",
    },
    {
      question: "What was the weather like?",
      options: [
        "Cold and rainy",
        "Cloudy and windy",
        "Warm and sunny",
        "Snowy",
      ],
      correct: "Warm and sunny",
    },
    {
      question: "What did the brother want to play?",
      options: ["Basketball", "Football", "Tennis", "Badminton"],
      correct: "Football",
    },
    {
      question: "What animals did they see near the lake?",
      options: ["Dogs", "Cats", "Ducks", "Birds"],
      correct: "Ducks",
    },
    {
      question: "What did they buy in the afternoon?",
      options: ["Sandwiches", "Flowers", "Ice cream", "Fruit"],
      correct: "Ice cream",
    },
  ],

  section2: [
    {
      statement: "The family went to the park in the morning.",
      correct: "True",
    },
    {
      statement: "The brother played football with his mother.",
      correct: "False",
    },
    {
      statement: "They watched ducks swimming in the lake.",
      correct: "True",
    },
    {
      statement: "They had lunch inside a restaurant.",
      correct: "False",
    },
    {
      statement: "The family walked home after buying ice cream.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'outside' mean?",
      options: [
        "Not inside a building",
        "Inside a house",
        "Under a table",
        "In a car",
      ],
      correct: "Not inside a building",
    },
    {
      question: "What is a 'bench'?",
      options: [
        "A small boat",
        "A long seat",
        "A kind of tree",
        "A sports field",
      ],
      correct: "A long seat",
    },
    {
      question: "What does 'lake' mean?",
      options: [
        "A large area of water surrounded by land",
        "A small garden",
        "A type of shop",
        "A sports field",
      ],
      correct: "A large area of water surrounded by land",
    },
    {
      question: "What is a 'picnic'?",
      options: [
        "A meal eaten outdoors",
        "A school lesson",
        "A type of sport",
        "A walk in a city",
      ],
      correct: "A meal eaten outdoors",
    },
    {
      question: "What does 'entrance' mean?",
      options: [
        "A place where you leave",
        "A place where you enter",
        "A place where you eat",
        "A place where you sleep",
      ],
      correct: "A place where you enter",
    },
  ],

  section4: [
    {
      sentence: "The family arrived at the park at _____ o'clock.",
      correct: "ten",
    },
    {
      sentence: "The brother played _____ with his father.",
      correct: "football",
    },
    {
      sentence: "They sat on a _____ near the lake.",
      correct: "bench",
    },
    {
      sentence: "They had a _____ under a big tree.",
      correct: "picnic",
    },
    {
      sentence: "They bought _____ in the afternoon.",
      correct: "ice cream",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer describes a fun day at the park with the family.",
        "The writer explains how to play football.",
        "The writer talks about a new restaurant.",
        "The writer describes a rainy day.",
      ],
      correct:
        "The writer describes a fun day at the park with the family.",
    },
    {
      question: "Why was it a good day to spend outside?",
      options: [
        "The park was empty.",
        "The weather was warm and sunny.",
        "The family wanted to buy ice cream.",
        "There were many shops.",
      ],
      correct: "The weather was warm and sunny.",
    },
    {
      question: "What did the family do together?",
      options: [
        "They went to school.",
        "They played computer games.",
        "They walked, had a picnic, and spent time together.",
        "They stayed at home.",
      ],
      correct:
        "They walked, had a picnic, and spent time together.",
    },
  ],

  pdfFileName: "a1-a-day-at-the-park-reading.pdf",
};

export default function ADayAtTheParkPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-favorite-food"
      previousTitle="My Favorite Food"
      nextHref="/exercises/reading/a1/my-weekend"
      nextTitle="My Weekend"
    />
  );
}