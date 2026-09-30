import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Busy Morning",
  level: "A2 Reading Worksheet",
  description:
    "Read about a busy morning and complete all five sections.",

  passage: `Yesterday morning was one of the busiest mornings I have had this month. I usually wake up at seven o'clock, but yesterday my alarm did not ring. When I opened my eyes, it was already seven thirty.

I quickly got dressed and went to the kitchen. I wanted to make breakfast, but there was no bread in the house. I only had a banana and a glass of milk. I ate them quickly and left home at eight o'clock.

I normally take the bus to work, but there was a problem with the bus service that morning. I decided to walk to the train station instead. It took me about fifteen minutes to get there.

When I arrived at the station, I saw that my train was delayed. I had to wait for twenty minutes. I was worried because I had an important meeting at nine o'clock.

Luckily, the train arrived and I got to work just before the meeting started. I was tired and hungry, but I was happy that I was not late. After the meeting, my colleague invited me to have breakfast with her. It was exactly what I needed after such a busy morning.`,

  section1: [
    {
      question: "Why did the writer wake up late?",
      options: [
        "The alarm did not ring.",
        "The writer went to bed late.",
        "The bus was late.",
        "The writer forgot to sleep.",
      ],
      correct: "The alarm did not ring.",
    },
    {
      question: "What did the writer have for breakfast at home?",
      options: [
        "Bread and eggs",
        "A banana and milk",
        "Cereal and coffee",
        "Fruit and tea",
      ],
      correct: "A banana and milk",
    },
    {
      question: "Why did the writer walk to the train station?",
      options: [
        "The weather was beautiful.",
        "The writer wanted some exercise.",
        "There was a problem with the bus service.",
        "The train station was very close.",
      ],
      correct: "There was a problem with the bus service.",
    },
    {
      question: "How long did the writer wait for the train?",
      options: [
        "Five minutes",
        "Ten minutes",
        "Fifteen minutes",
        "Twenty minutes",
      ],
      correct: "Twenty minutes",
    },
    {
      question: "Who invited the writer to have breakfast?",
      options: [
        "The manager",
        "A colleague",
        "A friend",
        "A family member",
      ],
      correct: "A colleague",
    },
  ],

  section2: [
    {
      statement: "The writer normally wakes up at seven o'clock.",
      correct: "True",
    },
    {
      statement: "There was plenty of bread at home.",
      correct: "False",
    },
    {
      statement: "The writer took the bus to work.",
      correct: "False",
    },
    {
      statement: "The writer had an important meeting at nine o'clock.",
      correct: "True",
    },
    {
      statement: "The writer arrived at work after the meeting started.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does 'busy' mean in the passage?",
      options: [
        "Having a lot to do",
        "Feeling very relaxed",
        "Having nothing to do",
        "Being asleep",
      ],
      correct: "Having a lot to do",
    },
    {
      question: "What does 'quickly' mean?",
      options: [
        "Slowly",
        "After a long time",
        "Fast",
        "Carefully",
      ],
      correct: "Fast",
    },
    {
      question: "What does 'delayed' mean?",
      options: [
        "Arriving earlier than expected",
        "Arriving later than expected",
        "Being cancelled forever",
        "Being very crowded",
      ],
      correct: "Arriving later than expected",
    },
    {
      question: "What does 'worried' mean?",
      options: [
        "Feeling concerned",
        "Feeling excited",
        "Feeling hungry",
        "Feeling bored",
      ],
      correct: "Feeling concerned",
    },
    {
      question: "What does 'colleague' mean?",
      options: [
        "Someone you work with",
        "Someone in your family",
        "Someone who lives next door",
        "Someone you meet on holiday",
      ],
      correct: "Someone you work with",
    },
  ],

  section4: [
    {
      sentence: "The writer's alarm did not _____.",
      correct: "ring",
    },
    {
      sentence: "The writer ate a banana and drank a glass of _____.",
      correct: "milk",
    },
    {
      sentence: "The writer walked to the train _____.",
      correct: "station",
    },
    {
      sentence: "The train was delayed for _____ minutes.",
      correct: "twenty",
    },
    {
      sentence: "A colleague invited the writer to have _____.",
      correct: "breakfast",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer describes a difficult and busy morning.",
        "The writer explains how to use public transport.",
        "The writer describes a normal day at work.",
        "The writer talks about a holiday.",
      ],
      correct: "The writer describes a difficult and busy morning.",
    },
    {
      question: "Why was the writer worried at the train station?",
      options: [
        "The writer had lost a bag.",
        "The writer had an important meeting.",
        "The writer was feeling sick.",
        "The writer did not know where the station was.",
      ],
      correct: "The writer had an important meeting.",
    },
    {
      question: "How did the writer feel at the end of the morning?",
      options: [
        "Tired but happy",
        "Angry and disappointed",
        "Relaxed and bored",
        "Excited and nervous",
      ],
      correct: "Tired but happy",
    },
  ],

  pdfFileName: "a2-a-busy-morning-reading.pdf",
};

export default function ABusyMorningPage() {
  return (
    <ReadingTemplate
      data={readingData}
      nextHref="/exercises/reading/a2/a-new-student"
      nextTitle="A New Student"
    />
  );
}