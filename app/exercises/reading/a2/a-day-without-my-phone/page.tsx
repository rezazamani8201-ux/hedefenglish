import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Day Without My Phone",
  level: "A2 Reading Worksheet",
  description:
    "Read about a day without a smartphone and what the writer learned from the experience.",

  passage: `Last Sunday, I decided to spend one whole day without my phone. I usually use my phone from the moment I wake up until I go to bed. I check my messages, read the news, watch videos, and use social media several times a day.

The idea came when I realized that I was spending too much time looking at my screen. I wanted to see what would happen if I did not use my phone for a day.

In the morning, I put my phone in a drawer and went downstairs for breakfast. At first, I kept thinking about my phone. I wanted to check my messages, but I reminded myself that I was trying something new.

After breakfast, I went for a walk in the park. Normally, I listen to music or take photos with my phone, but this time I simply enjoyed the walk. I noticed the trees, birds, and people around me more than usual.

In the afternoon, I visited my friend Sarah. We talked for almost two hours. Usually, we both look at our phones while talking, but that day neither of us had a phone with us. Our conversation felt more relaxed and interesting.

In the evening, I cooked dinner and read a book. I did not feel the need to take photos or share what I was doing online.

At the end of the day, I was surprised by how much free time I had. I also realized that I did not miss my phone as much as I expected. I still think smartphones are useful, but I now understand that taking regular breaks from them can be a good idea.`,

  section1: [
    {
      question: "Why did the writer decide to spend a day without a phone?",
      options: [
        "The phone was broken.",
        "The writer wanted to spend less time looking at the screen.",
        "The writer wanted to buy a new phone.",
        "The writer lost the phone.",
      ],
      correct:
        "The writer wanted to spend less time looking at the screen.",
    },
    {
      question: "Where did the writer put the phone?",
      options: [
        "In a bag",
        "On the table",
        "In a drawer",
        "At a friend's house",
      ],
      correct: "In a drawer",
    },
    {
      question: "What did the writer do in the morning?",
      options: [
        "Went shopping",
        "Went for a walk in the park",
        "Visited Sarah",
        "Watched television",
      ],
      correct: "Went for a walk in the park",
    },
    {
      question: "Who did the writer visit in the afternoon?",
      options: [
        "A family member",
        "A teacher",
        "Sarah",
        "A neighbor",
      ],
      correct: "Sarah",
    },
    {
      question: "What surprised the writer at the end of the day?",
      options: [
        "How expensive the day was",
        "How much free time they had",
        "How many messages they received",
        "How difficult cooking was",
      ],
      correct: "How much free time they had",
    },
  ],

  section2: [
    {
      statement: "The writer usually uses the phone several times a day.",
      correct: "True",
    },
    {
      statement: "The writer forgot about the phone immediately after breakfast.",
      correct: "False",
    },
    {
      statement: "The writer noticed nature more during the walk.",
      correct: "True",
    },
    {
      statement: "Sarah and the writer used their phones during their conversation.",
      correct: "False",
    },
    {
      statement: "The writer thinks smartphones are completely useless.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does 'realized' mean?",
      options: [
        "Became aware of something",
        "Forgot something",
        "Bought something",
        "Changed a place",
      ],
      correct: "Became aware of something",
    },
    {
      question: "What does 'screen' mean?",
      options: [
        "The flat part of a phone or computer that shows information",
        "A phone charger",
        "A type of message",
        "A computer keyboard",
      ],
      correct:
        "The flat part of a phone or computer that shows information",
    },
    {
      question: "What does 'noticed' mean?",
      options: [
        "Saw or became aware of something",
        "Forgot about something",
        "Bought something new",
        "Moved to another place",
      ],
      correct: "Saw or became aware of something",
    },
    {
      question: "What does 'relaxed' mean?",
      options: [
        "Calm and comfortable",
        "Busy and worried",
        "Angry and tired",
        "Excited and nervous",
      ],
      correct: "Calm and comfortable",
    },
    {
      question: "What does 'regular' mean in 'regular breaks'?",
      options: [
        "Happening often or at repeated times",
        "Happening only once",
        "Very expensive",
        "Difficult to plan",
      ],
      correct: "Happening often or at repeated times",
    },
  ],

  section4: [
    {
      sentence: "The writer put the phone in a _____.",
      correct: "drawer",
    },
    {
      sentence: "The writer went for a walk in the _____.",
      correct: "park",
    },
    {
      sentence: "The writer visited _____ in the afternoon.",
      correct: "Sarah",
    },
    {
      sentence: "In the evening, the writer cooked dinner and read a _____.",
      correct: "book",
    },
    {
      sentence: "The writer discovered that they had a lot of free _____.",
      correct: "time",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Taking a break from a phone can help people notice their surroundings and enjoy more free time.",
        "Smartphones are bad and nobody should use them.",
        "The writer wants to buy a better smartphone.",
        "The writer spends the whole day with Sarah.",
      ],
      correct:
        "Taking a break from a phone can help people notice their surroundings and enjoy more free time.",
    },
    {
      question: "What changed when the writer talked to Sarah without phones?",
      options: [
        "Their conversation felt more relaxed and interesting.",
        "They talked for only five minutes.",
        "They decided to buy new phones.",
        "They had nothing to talk about.",
      ],
      correct:
        "Their conversation felt more relaxed and interesting.",
    },
    {
      question: "What does the writer think about smartphones at the end?",
      options: [
        "They are useful, but regular breaks can be helpful.",
        "They should never be used again.",
        "They are only useful for social media.",
        "They are not useful at all.",
      ],
      correct:
        "They are useful, but regular breaks can be helpful.",
    },
  ],

  pdfFileName: "a2-a-day-without-my-phone-reading.pdf",
};

export default function ADayWithoutMyPhonePage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/an-unexpected-visitor"
      previousTitle="An Unexpected Visitor"
      nextHref="/exercises/reading/a2/planning-a-holiday"
      nextTitle="Planning a Holiday"
    />
  );
}