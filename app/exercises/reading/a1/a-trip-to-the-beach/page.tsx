import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Trip to the Beach",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `Last Saturday, my family and I went to the beach. We left home early in the morning because we wanted to enjoy the whole day there. The weather was sunny and warm, and the sky was clear.

My mother prepared some sandwiches, fruit, and cold drinks for lunch. My father put a large umbrella, some towels, and a ball in the car. My little brother also brought his favorite toy.

When we arrived at the beach, there were already many people there. We found a quiet place near the water and put our towels on the sand. My brother and I went into the water and played with the ball. The water was cool, but it felt very nice because the weather was hot.

After swimming, we sat under the umbrella and had lunch. My mother gave us some fruit and sandwiches. Later, my father and I walked along the beach and collected some small shells.

In the afternoon, we played volleyball and took many photos. Before going home, we watched the sunset. It was beautiful. We were tired at the end of the day, but we had a wonderful time together.`,

  section1: [
    {
      question: "When did the family go to the beach?",
      options: [
        "Last Monday",
        "Last Saturday",
        "Last Sunday",
        "Yesterday",
      ],
      correct: "Last Saturday",
    },
    {
      question: "Why did they leave home early?",
      options: [
        "They had to work.",
        "They wanted to enjoy the whole day.",
        "They wanted to go shopping.",
        "They wanted to visit a friend.",
      ],
      correct: "They wanted to enjoy the whole day.",
    },
    {
      question: "What did the mother prepare?",
      options: [
        "Pizza and coffee",
        "Sandwiches, fruit, and cold drinks",
        "Cake and tea",
        "Rice and vegetables",
      ],
      correct: "Sandwiches, fruit, and cold drinks",
    },
    {
      question: "What did the family do in the water?",
      options: [
        "They played with a ball.",
        "They collected shells.",
        "They played volleyball.",
        "They ate lunch.",
      ],
      correct: "They played with a ball.",
    },
    {
      question: "What did they watch before going home?",
      options: [
        "A movie",
        "The sunrise",
        "The sunset",
        "A football game",
      ],
      correct: "The sunset",
    },
  ],

  section2: [
    {
      statement: "The weather was sunny and warm.",
      correct: "True",
    },
    {
      statement: "The family arrived at the beach late in the evening.",
      correct: "False",
    },
    {
      statement: "The father brought an umbrella.",
      correct: "True",
    },
    {
      statement: "The water was very hot.",
      correct: "False",
    },
    {
      statement: "The family had a wonderful time together.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'clear' mean in 'the sky was clear'?",
      options: [
        "Without clouds",
        "Very dark",
        "Very cold",
        "Full of rain",
      ],
      correct: "Without clouds",
    },
    {
      question: "What does 'quiet' mean?",
      options: [
        "With little noise",
        "Very crowded",
        "Very expensive",
        "Very far away",
      ],
      correct: "With little noise",
    },
    {
      question: "What does 'sand' mean?",
      options: [
        "Small pieces of rock found on a beach",
        "A kind of fruit",
        "A type of drink",
        "A beach umbrella",
      ],
      correct: "Small pieces of rock found on a beach",
    },
    {
      question: "What does 'collected' mean?",
      options: [
        "Picked up and kept things",
        "Threw things away",
        "Bought something",
        "Lost something",
      ],
      correct: "Picked up and kept things",
    },
    {
      question: "What does 'wonderful' mean?",
      options: [
        "Very good and enjoyable",
        "Very boring",
        "Very difficult",
        "Very dangerous",
      ],
      correct: "Very good and enjoyable",
    },
  ],

  section4: [
    {
      sentence: "The family went to the _____ last Saturday.",
      correct: "beach",
    },
    {
      sentence: "The mother prepared sandwiches, fruit, and cold _____.",
      correct: "drinks",
    },
    {
      sentence: "The family put their towels on the _____.",
      correct: "sand",
    },
    {
      sentence: "The father and the narrator collected small _____.",
      correct: "shells",
    },
    {
      sentence: "Before going home, they watched the _____.",
      correct: "sunset",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "A family enjoys a day at the beach.",
        "A family goes to a restaurant.",
        "A family prepares for school.",
        "A family visits a museum.",
      ],
      correct: "A family enjoys a day at the beach.",
    },
    {
      question: "Why did the water feel nice even though it was cool?",
      options: [
        "Because the weather was hot.",
        "Because it was raining.",
        "Because the beach was empty.",
        "Because they were tired.",
      ],
      correct: "Because the weather was hot.",
    },
    {
      question: "How did the family feel at the end of the day?",
      options: [
        "Tired but happy",
        "Angry and worried",
        "Bored and sad",
        "Cold and sick",
      ],
      correct: "Tired but happy",
    },
  ],

  pdfFileName: "a1-a-trip-to-the-beach-reading.pdf",
};

export default function ATripToTheBeachPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-pet"
      previousTitle="My Pet"
      nextHref="/exercises/reading/a1/my-favorite-season"
      nextTitle="My Favorite Season"
    />
  );
}