import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Rainy Day",
  level: "A2 Reading Worksheet",
  description:
    "Read about a rainy day and how someone changes their plans.",

  passage: `Last Saturday, I woke up early because I had planned to meet my friend Emma. We wanted to go for a long walk in the park and have lunch at a small cafe near the lake.

When I looked outside, however, the weather was very different from what I expected. The sky was dark, and it was raining heavily. I checked the weather forecast on my phone, and it said that the rain would continue for most of the day.

I called Emma and told her that we should change our plans. At first, we thought about going to the shopping center, but neither of us wanted to spend the whole day shopping. Then Emma suggested visiting a new library in the city center.

The library was much bigger than I expected. It had thousands of books, comfortable chairs, and a small cafe. We spent the morning looking at books and talking quietly. I found an interesting book about travel and decided to borrow it.

At lunchtime, we went to the cafe inside the library. I ordered a hot chocolate and a sandwich, while Emma had tea and a piece of cake. We sat near the window and watched the rain outside.

In the afternoon, the rain finally stopped. We decided to walk home instead of taking the bus. The weather was still cool, but the streets were fresh and quiet after the rain.

Although our original plan did not work, we both had a really enjoyable day. Sometimes, changing your plans can lead to an unexpected but pleasant experience.`,

  section1: [
    {
      question: "What did the writer originally plan to do with Emma?",
      options: [
        "Go shopping",
        "Visit a library",
        "Walk in the park and have lunch",
        "Stay at home",
      ],
      correct: "Walk in the park and have lunch",
    },
    {
      question: "Why did they change their plans?",
      options: [
        "The park was closed.",
        "Emma was sick.",
        "The weather was rainy.",
        "The cafe was too expensive.",
      ],
      correct: "The weather was rainy.",
    },
    {
      question: "What did Emma suggest doing?",
      options: [
        "Going to a new library",
        "Going to the cinema",
        "Going to a restaurant",
        "Going home",
      ],
      correct: "Going to a new library",
    },
    {
      question: "What did the writer borrow from the library?",
      options: [
        "A book about cooking",
        "A book about travel",
        "A magazine",
        "A newspaper",
      ],
      correct: "A book about travel",
    },
    {
      question: "How did they go home?",
      options: [
        "By bus",
        "By taxi",
        "By car",
        "On foot",
      ],
      correct: "On foot",
    },
  ],

  section2: [
    {
      statement: "The writer expected it to be sunny.",
      correct: "True",
    },
    {
      statement: "Emma wanted to spend the whole day shopping.",
      correct: "False",
    },
    {
      statement: "The library had a small cafe.",
      correct: "True",
    },
    {
      statement: "The writer ordered tea and cake.",
      correct: "False",
    },
    {
      statement: "The rain stopped in the afternoon.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'heavily' mean in 'raining heavily'?",
      options: [
        "A lot and strongly",
        "Very slowly",
        "For a short time",
        "Without any wind",
      ],
      correct: "A lot and strongly",
    },
    {
      question: "What does 'forecast' mean?",
      options: [
        "A report about future weather",
        "A map of a city",
        "A type of book",
        "A plan for lunch",
      ],
      correct: "A report about future weather",
    },
    {
      question: "What does 'suggested' mean?",
      options: [
        "Gave an idea",
        "Refused to do something",
        "Forgot something",
        "Finished something",
      ],
      correct: "Gave an idea",
    },
    {
      question: "What does 'borrow' mean?",
      options: [
        "Take something for a time and return it later",
        "Buy something for someone",
        "Throw something away",
        "Give something permanently",
      ],
      correct: "Take something for a time and return it later",
    },
    {
      question: "What does 'pleasant' mean?",
      options: [
        "Enjoyable and nice",
        "Difficult and tiring",
        "Cold and uncomfortable",
        "Expensive and modern",
      ],
      correct: "Enjoyable and nice",
    },
  ],

  section4: [
    {
      sentence: "The writer wanted to meet Emma on _____.",
      correct: "Saturday",
    },
    {
      sentence: "The weather was dark and _____.",
      correct: "rainy",
    },
    {
      sentence: "Emma suggested visiting a new _____.",
      correct: "library",
    },
    {
      sentence: "The writer ordered a hot chocolate and a _____.",
      correct: "sandwich",
    },
    {
      sentence: "They decided to walk _____ instead of taking the bus.",
      correct: "home",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "A rainy day changes two friends' plans, but they still have a good time.",
        "Two friends spend the whole day shopping.",
        "The writer does not enjoy rainy weather.",
        "The writer visits the library every Saturday.",
      ],
      correct:
        "A rainy day changes two friends' plans, but they still have a good time.",
    },
    {
      question: "Why did the writer enjoy the library?",
      options: [
        "It had many books and comfortable places to sit.",
        "It was close to the park.",
        "It had cheap clothes.",
        "It was completely empty.",
      ],
      correct:
        "It had many books and comfortable places to sit.",
    },
    {
      question: "What lesson can we understand from the passage?",
      options: [
        "Unexpected changes can sometimes create enjoyable experiences.",
        "Rainy days are always boring.",
        "It is better to cancel plans when the weather changes.",
        "Libraries are better than parks in every situation.",
      ],
      correct:
        "Unexpected changes can sometimes create enjoyable experiences.",
    },
  ],

  pdfFileName: "a2-a-rainy-day-reading.pdf",
};

export default function ARainyDayPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/learning-to-cook"
      previousTitle="Learning to Cook"
      nextHref="/exercises/reading/a2/my-first-part-time-job"
      nextTitle="My First Part-Time Job"
    />
  );
}