import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Healthy Eating Habits",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about healthy eating habits and answer the questions carefully.",

  passage: `Eating habits can have a significant effect on a person's health and energy levels. However, eating well does not necessarily mean following a strict diet or avoiding all the foods we enjoy. For many people, making a few simple changes can lead to a healthier lifestyle.

Tom used to skip breakfast because he was usually in a hurry in the morning. He often bought fast food for lunch and drank several sugary drinks during the day. Although he did not notice any serious problems at first, he often felt tired in the afternoon and found it difficult to concentrate at work.

After talking to a friend who had changed his own eating habits, Tom decided to make some changes. He started preparing breakfast the night before so that he would have enough time to eat in the morning. He also began taking homemade lunches to work and replaced most of his sugary drinks with water.

Tom did not completely stop eating his favorite foods. Instead, he tried to eat them less often and included more vegetables, fruit, whole grains, and other nutritious foods in his meals. He also started paying more attention to portion sizes.

After a few weeks, Tom noticed that he had more energy during the day. He was able to concentrate better at work and no longer felt extremely tired in the afternoon. The experience taught him that healthy eating does not have to involve extreme changes. Small, realistic improvements can make a meaningful difference over time.`,

  section1: [
    {
      question: "Why did Tom often skip breakfast?",
      options: [
        "He did not like breakfast.",
        "He was usually in a hurry in the morning.",
        "He wanted to save money.",
        "He was following a strict diet.",
      ],
      correct: "He was usually in a hurry in the morning.",
    },
    {
      question: "What problem did Tom often experience during the day?",
      options: [
        "He felt tired in the afternoon.",
        "He could not sleep at night.",
        "He was always hungry in the morning.",
        "He had no time to work.",
      ],
      correct: "He felt tired in the afternoon.",
    },
    {
      question: "What did Tom do to make breakfast easier?",
      options: [
        "He stopped eating breakfast.",
        "He prepared breakfast the night before.",
        "He bought fast food every morning.",
        "He asked his friend to prepare it.",
      ],
      correct: "He prepared breakfast the night before.",
    },
    {
      question: "What did Tom replace most of his sugary drinks with?",
      options: [
        "Coffee.",
        "Fruit juice.",
        "Water.",
        "Milkshakes.",
      ],
      correct: "Water.",
    },
    {
      question: "What did Tom learn from his experience?",
      options: [
        "Healthy eating requires extreme changes.",
        "People should never eat their favorite foods.",
        "Small and realistic changes can improve health.",
        "Fast food is always unhealthy.",
      ],
      correct: "Small and realistic changes can improve health.",
    },
  ],

  section2: [
    {
      statement:
        "Tom often skipped breakfast because he was in a hurry.",
      correct: "True",
    },
    {
      statement:
        "Tom always felt energetic during the afternoon.",
      correct: "False",
    },
    {
      statement:
        "Tom started taking homemade lunches to work.",
      correct: "True",
    },
    {
      statement:
        "Tom completely stopped eating his favorite foods.",
      correct: "False",
    },
    {
      statement:
        "Tom eventually found it easier to concentrate at work.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'strict diet' mean in the passage?",
      options: [
        "A way of eating with carefully controlled rules.",
        "A diet that includes only fast food.",
        "Eating whenever you feel hungry.",
        "Eating a large amount of food.",
      ],
      correct: "A way of eating with carefully controlled rules.",
    },
    {
      question: "What does 'nutritious' mean?",
      options: [
        "Containing useful nutrients for the body.",
        "Very expensive.",
        "Very sweet.",
        "Difficult to prepare.",
      ],
      correct: "Containing useful nutrients for the body.",
    },
    {
      question: "What does 'portion sizes' refer to?",
      options: [
        "The number of restaurants available.",
        "The amount of food served or eaten.",
        "The time spent cooking.",
        "The type of food someone prefers.",
      ],
      correct: "The amount of food served or eaten.",
    },
    {
      question: "What does 'realistic' mean in the passage?",
      options: [
        "Impossible to achieve.",
        "Practical and possible to achieve.",
        "Extremely expensive.",
        "Completely unnecessary.",
      ],
      correct: "Practical and possible to achieve.",
    },
    {
      question: "What does 'meaningful difference' mean?",
      options: [
        "A change that has an important effect.",
        "A change that nobody notices.",
        "A very small mistake.",
        "A temporary problem.",
      ],
      correct: "A change that has an important effect.",
    },
  ],

  section4: [
    {
      sentence:
        "Tom often bought ______ food for lunch.",
      correct: "fast",
    },
    {
      sentence:
        "Tom replaced most of his sugary drinks with ______.",
      correct: "water",
    },
    {
      sentence:
        "He started eating more vegetables, fruit, and whole ______.",
      correct: "grains",
    },
    {
      sentence:
        "Tom began paying attention to ______ sizes.",
      correct: "portion",
    },
    {
      sentence:
        "After a few weeks, Tom noticed that he had more ______ during the day.",
      correct: "energy",
    },
  ],

  section5: [
    {
      question:
        "Why did preparing breakfast the night before help Tom?",
      options: [
        "It gave him more time in the morning.",
        "It helped him avoid eating lunch.",
        "It allowed him to sleep at work.",
        "It made his breakfast more expensive.",
      ],
      correct: "It gave him more time in the morning.",
    },
    {
      question:
        "What can we infer about Tom's approach to healthy eating?",
      options: [
        "He made gradual changes instead of changing everything at once.",
        "He stopped eating all the foods he enjoyed.",
        "He followed a very strict diet.",
        "He believed exercise was unnecessary.",
      ],
      correct:
        "He made gradual changes instead of changing everything at once.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Healthy eating requires avoiding all enjoyable foods.",
        "Small changes in eating habits can improve a person's health and energy.",
        "People should never eat fast food.",
        "Breakfast is the most important meal for everyone.",
      ],
      correct:
        "Small changes in eating habits can improve a person's health and energy.",
    },
  ],

  pdfFileName: "b1-healthy-eating-habits-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/a-memorable-journey"
      previousTitle="A Memorable Journey"
      nextHref="/exercises/reading/b1/working-from-home"
      nextTitle="Working from Home"
    />
  );
}