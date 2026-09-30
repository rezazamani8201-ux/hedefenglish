import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Learning a New Language",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about learning a new language and answer the questions carefully.",

  passage: `Learning a new language can be both exciting and challenging. Many people decide to study another language because they want to travel, communicate with new people, study abroad, or improve their career opportunities. However, becoming comfortable in a new language usually takes time and regular practice.

Emma started learning Spanish two years ago because she planned to travel around South America. At first, she found it difficult to remember new words and understand native speakers. She studied vocabulary every evening, but she soon realized that memorizing words was not enough.

Emma decided to change the way she studied. She began watching short videos in Spanish and listening to simple podcasts while walking to work. She also joined an online language group where she could practice speaking with other learners. At first, she was nervous about making mistakes, but the other members were supportive.

After several months, Emma noticed a big improvement. She could understand more conversations and express her ideas more easily. She still made mistakes, but she no longer felt embarrassed when she made them.

Emma believes that making mistakes is an important part of learning. Instead of trying to speak perfectly, she focuses on communicating her ideas and learning from her errors. She also recommends studying a little every day rather than studying for many hours only once a week.`,

  section1: [
    {
      question: "Why did Emma decide to learn Spanish?",
      options: [
        "She wanted to move to Spain.",
        "She planned to travel around South America.",
        "Her parents asked her to learn it.",
        "She needed it for a university exam.",
      ],
      correct: "She planned to travel around South America.",
    },
    {
      question: "What did Emma find difficult at first?",
      options: [
        "Finding Spanish teachers.",
        "Writing long essays.",
        "Remembering words and understanding native speakers.",
        "Finding time to travel.",
      ],
      correct: "Remembering words and understanding native speakers.",
    },
    {
      question: "Why did Emma change her study methods?",
      options: [
        "She realized memorizing vocabulary was not enough.",
        "She stopped being interested in Spanish.",
        "Her teacher told her to stop studying.",
        "She wanted to study less often.",
      ],
      correct: "She realized memorizing vocabulary was not enough.",
    },
    {
      question: "How did Emma practice speaking?",
      options: [
        "By reading books alone.",
        "By joining an online language group.",
        "By watching television without sound.",
        "By writing vocabulary lists.",
      ],
      correct: "By joining an online language group.",
    },
    {
      question: "What changed after several months?",
      options: [
        "Emma stopped making mistakes completely.",
        "Emma became a Spanish teacher.",
        "Emma understood conversations better and expressed herself more easily.",
        "Emma decided to stop learning Spanish.",
      ],
      correct:
        "Emma understood conversations better and expressed herself more easily.",
    },
  ],

  section2: [
    {
      statement:
        "Emma started learning Spanish because she wanted to travel around South America.",
      correct: "True",
    },
    {
      statement: "Emma immediately understood native Spanish speakers.",
      correct: "False",
    },
    {
      statement: "Emma used podcasts as part of her language practice.",
      correct: "True",
    },
    {
      statement:
        "Emma never felt nervous about speaking with other people.",
      correct: "False",
    },
    {
      statement:
        "Emma believes that making mistakes can help people learn.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does the word 'challenging' mean in the passage?",
      options: [
        "Difficult but possible.",
        "Completely impossible.",
        "Very boring.",
        "Extremely expensive.",
      ],
      correct: "Difficult but possible.",
    },
    {
      question: "What does 'memorizing' mean in the passage?",
      options: [
        "Forgetting information.",
        "Learning information so that you can remember it.",
        "Speaking without thinking.",
        "Translating a conversation.",
      ],
      correct: "Learning information so that you can remember it.",
    },
    {
      question: "What does 'supportive' mean in the passage?",
      options: [
        "Helpful and encouraging.",
        "Unfriendly and negative.",
        "Quiet and nervous.",
        "Strict and demanding.",
      ],
      correct: "Helpful and encouraging.",
    },
    {
      question: "What does 'embarrassed' mean in the passage?",
      options: [
        "Proud of something.",
        "Happy about something.",
        "Feeling uncomfortable because of a mistake.",
        "Excited about traveling.",
      ],
      correct: "Feeling uncomfortable because of a mistake.",
    },
    {
      question: "What does 'errors' mean in the passage?",
      options: [
        "Successes.",
        "Mistakes.",
        "Languages.",
        "Conversations.",
      ],
      correct: "Mistakes.",
    },
  ],

  section4: [
    {
      sentence:
        "Emma wanted to travel around ______ America.",
      correct: "South",
    },
    {
      sentence:
        "Emma studied new vocabulary every ______.",
      correct: "evening",
    },
    {
      sentence:
        "She began listening to simple ______ while walking to work.",
      correct: "podcasts",
    },
    {
      sentence:
        "Emma joined an online language ______.",
      correct: "group",
    },
    {
      sentence:
        "Emma recommends studying a little ______ day.",
      correct: "every",
    },
  ],

  section5: [
    {
      question: "What can we infer about Emma's approach to learning?",
      options: [
        "She expects to become perfect without making mistakes.",
        "She is willing to change her methods when something does not work.",
        "She only studies when she has a lot of free time.",
        "She believes speaking practice is unnecessary.",
      ],
      correct:
        "She is willing to change her methods when something does not work.",
    },
    {
      question:
        "Why did joining the online group probably help Emma?",
      options: [
        "It gave her opportunities to practice communicating with other people.",
        "It allowed her to avoid speaking.",
        "It helped her memorize every Spanish word.",
        "It replaced all of her other study methods.",
      ],
      correct:
        "It gave her opportunities to practice communicating with other people.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Learning a language is easy if you memorize enough words.",
        "People should only learn languages for travel.",
        "Regular practice and accepting mistakes can make language learning more effective.",
        "Online language groups are the only way to learn a language.",
      ],
      correct:
        "Regular practice and accepting mistakes can make language learning more effective.",
    },
  ],

  pdfFileName: "b1-learning-a-new-language-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/a-difficult-decision"
      previousTitle="A Difficult Decision"
      nextHref="/exercises/reading/b1/life-in-a-small-town"
      nextTitle="Life in a Small Town"
    />
  );
}