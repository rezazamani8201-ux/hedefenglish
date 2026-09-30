import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Family Trip",
  level: "A2 Reading Worksheet",
  description:
    "Read about a family trip and the activities they enjoyed together.",

  passage: `Last month, my family and I went on a short trip to a small town near the mountains. We had planned the trip for several weeks because everyone in the family needed a break from work and school.

We left home early on Saturday morning. My father drove the car, and my mother prepared some sandwiches and drinks for the journey. My younger brother sat next to me in the back seat. He was very excited because he loves traveling.

The drive took about three hours. On the way, we stopped at a small village to have breakfast. After breakfast, we continued our journey and finally arrived at our hotel before noon.

The hotel was simple but comfortable. Our rooms had a beautiful view of the mountains. After putting our bags in the rooms, we walked around the town. There were small shops, old buildings, and a quiet river.

In the afternoon, we went for a short hike in the mountains. The weather was cool and sunny, so it was perfect for walking. My brother got tired after an hour, but we stopped several times to rest and take photos.

That evening, we had dinner at a small local restaurant. We tried some traditional food from the area. Everyone enjoyed the meal, especially my father.

On Sunday morning, we visited a nearby lake. We walked around the lake and watched some birds. Before going home, we bought a few small gifts from the town.

The trip was short, but we all enjoyed it. We spent time together, saw new places, and forgot about our usual busy lives for a while. We are already thinking about where to go for our next family trip.`,

  section1: [
    {
      question: "Why did the family plan the trip?",
      options: [
        "They wanted to move to another town.",
        "They needed a break from work and school.",
        "They wanted to visit their relatives.",
        "They had to go there for work.",
      ],
      correct: "They needed a break from work and school.",
    },
    {
      question: "How long did the drive take?",
      options: [
        "About one hour",
        "About two hours",
        "About three hours",
        "About five hours",
      ],
      correct: "About three hours",
    },
    {
      question: "What did the family do after arriving at the hotel?",
      options: [
        "They went swimming.",
        "They walked around the town.",
        "They went directly to the restaurant.",
        "They went home.",
      ],
      correct: "They walked around the town.",
    },
    {
      question: "What did they do in the mountains?",
      options: [
        "They went skiing.",
        "They had a picnic.",
        "They went for a short hike.",
        "They stayed in the hotel.",
      ],
      correct: "They went for a short hike.",
    },
    {
      question: "Where did they go on Sunday morning?",
      options: [
        "To a museum",
        "To a nearby lake",
        "To another village",
        "To a shopping center",
      ],
      correct: "To a nearby lake",
    },
  ],

  section2: [
    {
      statement: "The family planned the trip for several weeks.",
      correct: "True",
    },
    {
      statement: "The mother drove the car.",
      correct: "False",
    },
    {
      statement: "The hotel had a beautiful view of the mountains.",
      correct: "True",
    },
    {
      statement: "The family went hiking on Sunday morning.",
      correct: "False",
    },
    {
      statement: "The family bought some gifts before going home.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'journey' mean?",
      options: [
        "A trip from one place to another",
        "A place to sleep",
        "A type of food",
        "A mountain activity",
      ],
      correct: "A trip from one place to another",
    },
    {
      question: "What does 'comfortable' mean?",
      options: [
        "Pleasant and relaxing",
        "Very expensive",
        "Small and old",
        "Difficult to use",
      ],
      correct: "Pleasant and relaxing",
    },
    {
      question: "What does 'hike' mean?",
      options: [
        "A long walk, usually in nature",
        "A meal at a restaurant",
        "A trip by car",
        "A visit to a shop",
      ],
      correct: "A long walk, usually in nature",
    },
    {
      question: "What does 'traditional' mean?",
      options: [
        "Connected with the customs of a place",
        "Very modern",
        "Very expensive",
        "Difficult to prepare",
      ],
      correct: "Connected with the customs of a place",
    },
    {
      question: "What does 'usual' mean?",
      options: [
        "Normal or common",
        "New and surprising",
        "Very difficult",
        "Rare and expensive",
      ],
      correct: "Normal or common",
    },
  ],

  section4: [
    {
      sentence: "The family traveled to a small town near the _____.",
      correct: "mountains",
    },
    {
      sentence: "The mother prepared sandwiches and _____ for the journey.",
      correct: "drinks",
    },
    {
      sentence: "The family arrived at the hotel before _____.",
      correct: "noon",
    },
    {
      sentence: "They had dinner at a small local _____.",
      correct: "restaurant",
    },
    {
      sentence: "On Sunday morning, they visited a nearby _____.",
      correct: "lake",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "A family enjoys a short trip and spends quality time together.",
        "A family moves to a small town near the mountains.",
        "A family has problems during a long journey.",
        "A family spends the whole weekend at a hotel.",
      ],
      correct:
        "A family enjoys a short trip and spends quality time together.",
    },
    {
      question: "Why was the weather good for hiking?",
      options: [
        "It was cool and sunny.",
        "It was hot and rainy.",
        "It was cold and snowy.",
        "It was warm and windy.",
      ],
      correct: "It was cool and sunny.",
    },
    {
      question: "What can we understand about the family?",
      options: [
        "They enjoyed spending time together and want to travel again.",
        "They did not enjoy the trip.",
        "They prefer staying at home.",
        "They want to live in the hotel.",
      ],
      correct:
        "They enjoyed spending time together and want to travel again.",
    },
  ],

  pdfFileName: "a2-a-family-trip-reading.pdf",
};

export default function AFamilyTripPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/my-first-part-time-job"
      previousTitle="My First Part-Time Job"
      nextHref="/exercises/reading/a2/healthy-habits"
      nextTitle="Healthy Habits"
    />
  );
}