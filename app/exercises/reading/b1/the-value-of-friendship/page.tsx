import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "The Value of Friendship",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about friendship and answer the questions carefully.",

  passage: `Friendship is an important part of life. Good friends can make difficult situations easier, share happy moments with us, and give us support when we need it. However, strong friendships do not usually develop immediately. They require time, trust, communication, and effort from both people.

Daniel and Amir met when they started working at the same company. At first, they only talked about work. After a few months, they discovered that they had similar interests. They both enjoyed hiking and photography, so they started spending some of their free time together.

As their friendship developed, they began to talk about more personal subjects. Daniel was going through a difficult period because he was considering changing his career. He was worried about making the wrong decision. Amir listened carefully and asked questions instead of immediately telling Daniel what to do. Daniel appreciated this because he felt that Amir respected his situation.

Their friendship was not always perfect. Once, they had an argument because Daniel canceled a planned trip at the last minute. Amir felt disappointed because he had already organized everything. Instead of avoiding each other, they talked about what had happened. Daniel explained his reasons and apologized, while Amir admitted that he had reacted too strongly.

After that experience, they understood that disagreements did not necessarily mean the end of a friendship. They learned that honest communication could help them understand each other better. Over time, their friendship became stronger because they were able to solve problems instead of ignoring them.`,

  section1: [
    {
      question: "What does the passage say good friends can provide?",
      options: [
        "Only entertainment.",
        "Support during difficult situations.",
        "Professional advice in every situation.",
        "Financial help at all times.",
      ],
      correct: "Support during difficult situations.",
    },
    {
      question: "How did Daniel and Amir first become friends?",
      options: [
        "They went to the same school.",
        "They were neighbors.",
        "They started working at the same company.",
        "They met on a hiking trip.",
      ],
      correct: "They started working at the same company.",
    },
    {
      question: "What common interests did Daniel and Amir discover?",
      options: [
        "Cooking and music.",
        "Hiking and photography.",
        "Traveling and swimming.",
        "Reading and painting.",
      ],
      correct: "Hiking and photography.",
    },
    {
      question: "How did Amir respond when Daniel was worried about his career?",
      options: [
        "He immediately told Daniel what to do.",
        "He ignored the problem.",
        "He listened carefully and asked questions.",
        "He told Daniel to leave his job immediately.",
      ],
      correct: "He listened carefully and asked questions.",
    },
    {
      question: "How did Daniel and Amir deal with their argument?",
      options: [
        "They stopped speaking to each other.",
        "They talked about what had happened.",
        "They canceled their friendship.",
        "They asked their coworkers to solve the problem.",
      ],
      correct: "They talked about what had happened.",
    },
  ],

  section2: [
    {
      statement:
        "Strong friendships usually develop immediately without effort.",
      correct: "False",
    },
    {
      statement:
        "Daniel and Amir discovered that they had similar interests.",
      correct: "True",
    },
    {
      statement:
        "Amir gave Daniel an immediate answer about his career decision.",
      correct: "False",
    },
    {
      statement:
        "Daniel apologized after the disagreement about the trip.",
      correct: "True",
    },
    {
      statement:
        "The disagreement eventually helped them understand each other better.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'support' mean in the passage?",
      options: [
        "Help and encouragement.",
        "Competition between friends.",
        "A professional position.",
        "A difficult decision.",
      ],
      correct: "Help and encouragement.",
    },
    {
      question: "What does 'appreciated' mean?",
      options: [
        "Was grateful for or valued something.",
        "Disagreed with something.",
        "Forgot something important.",
        "Refused to listen.",
      ],
      correct: "Was grateful for or valued something.",
    },
    {
      question: "What does 'disagreement' mean?",
      options: [
        "A situation in which people have different opinions.",
        "A friendly conversation.",
        "A successful plan.",
        "A shared interest.",
      ],
      correct: "A situation in which people have different opinions.",
    },
    {
      question: "What does 'admitted' mean in the passage?",
      options: [
        "Said that something was true.",
        "Refused to discuss something.",
        "Changed a plan.",
        "Forgot about an event.",
      ],
      correct: "Said that something was true.",
    },
    {
      question: "What does 'ignoring' mean?",
      options: [
        "Paying attention to something carefully.",
        "Choosing not to pay attention to something.",
        "Explaining something clearly.",
        "Solving a problem together.",
      ],
      correct: "Choosing not to pay attention to something.",
    },
  ],

  section4: [
    {
      sentence:
        "Strong friendships require time, trust, communication, and ______.",
      correct: "effort",
    },
    {
      sentence:
        "Daniel and Amir both enjoyed hiking and ______.",
      correct: "photography",
    },
    {
      sentence:
        "Amir ______ carefully when Daniel talked about his career.",
      correct: "listened",
    },
    {
      sentence:
        "Daniel explained his reasons and ______ for canceling the trip.",
      correct: "apologized",
    },
    {
      sentence:
        "They learned that honest ______ could help them understand each other.",
      correct: "communication",
    },
  ],

  section5: [
    {
      question:
        "Why did Daniel appreciate the way Amir responded to his career problem?",
      options: [
        "Amir made the decision for him.",
        "Amir listened and respected his situation.",
        "Amir gave him a new job.",
        "Amir ignored the problem.",
      ],
      correct: "Amir listened and respected his situation.",
    },
    {
      question:
        "What can we infer about Daniel and Amir's friendship after their argument?",
      options: [
        "It became weaker because they avoided the problem.",
        "It ended because they disagreed.",
        "It became stronger because they communicated honestly.",
        "They decided never to make plans together again.",
      ],
      correct: "It became stronger because they communicated honestly.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Good friends should never disagree.",
        "Friendships become stronger through trust, communication, and solving problems together.",
        "Friends should always give each other advice.",
        "Shared hobbies are the only important part of friendship.",
      ],
      correct:
        "Friendships become stronger through trust, communication, and solving problems together.",
    },
  ],

  pdfFileName: "b1-the-value-of-friendship-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/protecting-the-environment"
      previousTitle="Protecting the Environment"
      nextHref="/exercises/reading/b1/a-change-of-plans"
      nextTitle="A Change of Plans"
    />
  );
}