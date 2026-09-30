import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Learning to Cook",
  level: "A2 Reading Worksheet",
  description:
    "Read about someone who learns to cook and discovers a new hobby.",

  passage: `I never enjoyed cooking when I was younger. My mother usually cooked for our family, and I only helped her sometimes. I thought cooking was difficult and took too much time.

Last year, I moved into my own apartment. For the first few weeks, I often ordered food because I did not know how to prepare many meals. However, ordering food every day was expensive, so I decided to learn how to cook.

I started with simple dishes. My first meal was vegetable soup. I watched a short video online and followed the instructions carefully. The soup was not perfect, but it tasted good enough to eat.

After that, I tried making pasta, rice, chicken, and different salads. Sometimes I made mistakes. Once, I put too much salt in a soup, and another time I cooked the rice for too long. But I learned something from every mistake.

A few months later, cooking became one of my favorite activities. I usually cook three or four times a week. I also enjoy trying new recipes at the weekend. Sometimes I invite my friends for dinner and cook for them.

Learning to cook has saved me money, but it has also made me more confident. Now I understand that cooking does not have to be difficult. You just need some practice, patience, and a little time.`,

  section1: [
    {
      question: "Who usually cooked for the writer's family when they were younger?",
      options: [
        "The writer's father",
        "The writer's mother",
        "The writer's sister",
        "The writer's grandmother",
      ],
      correct: "The writer's mother",
    },
    {
      question: "Why did the writer decide to learn how to cook?",
      options: [
        "Cooking was their job.",
        "Their friends asked them to cook.",
        "Ordering food every day was expensive.",
        "Their mother stopped cooking.",
      ],
      correct: "Ordering food every day was expensive.",
    },
    {
      question: "What was the writer's first meal?",
      options: [
        "Pasta",
        "Chicken",
        "Vegetable soup",
        "Rice",
      ],
      correct: "Vegetable soup",
    },
    {
      question: "What happened when the writer cooked rice?",
      options: [
        "It was too salty.",
        "It was cooked for too long.",
        "It was completely raw.",
        "It tasted too sweet.",
      ],
      correct: "It was cooked for too long.",
    },
    {
      question: "How often does the writer usually cook now?",
      options: [
        "Once a month",
        "Every day",
        "Three or four times a week",
        "Only at weekends",
      ],
      correct: "Three or four times a week",
    },
  ],

  section2: [
    {
      statement: "The writer enjoyed cooking when they were younger.",
      correct: "False",
    },
    {
      statement: "The writer ordered food after moving into a new apartment.",
      correct: "True",
    },
    {
      statement: "The writer's first meal was pasta.",
      correct: "False",
    },
    {
      statement: "The writer made some mistakes while learning to cook.",
      correct: "True",
    },
    {
      statement: "Cooking has made the writer more confident.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'prepare' mean?",
      options: [
        "Make something ready",
        "Buy something expensive",
        "Clean something",
        "Throw something away",
      ],
      correct: "Make something ready",
    },
    {
      question: "What does 'instructions' mean?",
      options: [
        "Things that tell you how to do something",
        "Names of different foods",
        "Places to buy food",
        "People who cook food",
      ],
      correct: "Things that tell you how to do something",
    },
    {
      question: "What does 'mistake' mean?",
      options: [
        "Something done incorrectly",
        "A delicious meal",
        "A cooking tool",
        "A type of recipe",
      ],
      correct: "Something done incorrectly",
    },
    {
      question: "What does 'recipe' mean?",
      options: [
        "Instructions for preparing a dish",
        "A place to eat",
        "A kitchen machine",
        "A type of vegetable",
      ],
      correct: "Instructions for preparing a dish",
    },
    {
      question: "What does 'confident' mean?",
      options: [
        "Feeling sure about your ability",
        "Feeling very tired",
        "Feeling hungry",
        "Feeling confused",
      ],
      correct: "Feeling sure about your ability",
    },
  ],

  section4: [
    {
      sentence: "The writer moved into their own _____ last year.",
      correct: "apartment",
    },
    {
      sentence: "The writer's first meal was vegetable _____.",
      correct: "soup",
    },
    {
      sentence: "The writer learned to cook by watching videos and following the _____.",
      correct: "instructions",
    },
    {
      sentence: "The writer sometimes invites friends for _____.",
      correct: "dinner",
    },
    {
      sentence: "Cooking has helped the writer save _____.",
      correct: "money",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer learns to cook and discovers that practice can make cooking easier.",
        "The writer decides never to cook again.",
        "The writer becomes a professional chef.",
        "The writer explains how to make vegetable soup.",
      ],
      correct:
        "The writer learns to cook and discovers that practice can make cooking easier.",
    },
    {
      question: "What can we understand from the writer's mistakes?",
      options: [
        "The writer stopped cooking after making mistakes.",
        "Mistakes helped the writer learn and improve.",
        "The writer did not care about cooking.",
        "Cooking became more expensive because of mistakes.",
      ],
      correct: "Mistakes helped the writer learn and improve.",
    },
    {
      question: "Why does the writer enjoy cooking now?",
      options: [
        "It has become a useful and enjoyable activity.",
        "The writer wants to open a restaurant.",
        "Cooking is easier than ordering food.",
        "The writer's friends always ask for food.",
      ],
      correct: "It has become a useful and enjoyable activity.",
    },
  ],

  pdfFileName: "a2-learning-to-cook-reading.pdf",
};

export default function LearningToCookPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-weekend-in-the-city"
      previousTitle="A Weekend in the City"
      nextHref="/exercises/reading/a2/a-rainy-day"
      nextTitle="A Rainy Day"
    />
  );
}