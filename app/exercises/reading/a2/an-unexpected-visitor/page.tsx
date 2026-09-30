import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "An Unexpected Visitor",
  level: "A2 Reading Worksheet",
  description:
    "Read about an unexpected visitor and how a quiet evening changes.",

  passage: `Last Friday evening, I was at home alone. My parents were away for the weekend, and my brother was staying at a friend's house. I had finished my homework, so I decided to watch a movie and relax.

At about eight o'clock, I heard someone knock on the front door. I was surprised because I was not expecting anyone. I looked through the window, but I could not see anyone outside.

I waited for a few seconds and then opened the door carefully. To my surprise, it was my old neighbor, Mr. Brown. I had not seen him for several months because he had moved to another town.

Mr. Brown smiled and said that he was visiting a friend who lived nearby. He remembered that my family still lived in the same house, so he decided to come and say hello.

I invited him inside and offered him some tea. We sat in the living room and talked about our old neighborhood. He told me that his new town was much quieter, but he sometimes missed his old neighbors.

After about an hour, Mr. Brown looked at his watch and said that he needed to leave. Before going, he gave me a small box of chocolates as a gift. He said that he had bought them during his trip.

After he left, I called my parents and told them about the surprise visit. They were very happy to hear from Mr. Brown and asked me to say hello to him if I saw him again.

My quiet evening had turned into something completely different. I had planned to watch a movie alone, but instead, I spent an enjoyable hour talking to an old neighbor.`,

  section1: [
    {
      question: "Why was the writer at home alone?",
      options: [
        "Their friends were away.",
        "Their parents were away and their brother was at a friend's house.",
        "They did not want to go outside.",
        "They were waiting for a visitor.",
      ],
      correct:
        "Their parents were away and their brother was at a friend's house.",
    },
    {
      question: "What did the writer hear at about eight o'clock?",
      options: [
        "A phone ringing",
        "Someone knocking on the door",
        "Someone calling their name",
        "Music from outside",
      ],
      correct: "Someone knocking on the door",
    },
    {
      question: "Who was the unexpected visitor?",
      options: [
        "The writer's teacher",
        "The writer's friend",
        "Mr. Brown, an old neighbor",
        "The writer's uncle",
      ],
      correct: "Mr. Brown, an old neighbor",
    },
    {
      question: "Why was Mr. Brown in the area?",
      options: [
        "He was visiting a friend.",
        "He was looking for a new house.",
        "He was working nearby.",
        "He was visiting the writer's parents.",
      ],
      correct: "He was visiting a friend.",
    },
    {
      question: "What did Mr. Brown give the writer?",
      options: [
        "A book",
        "A small box of chocolates",
        "A photograph",
        "A cup of tea",
      ],
      correct: "A small box of chocolates",
    },
  ],

  section2: [
    {
      statement: "The writer planned to watch a movie that evening.",
      correct: "True",
    },
    {
      statement: "The writer could clearly see Mr. Brown through the window.",
      correct: "False",
    },
    {
      statement: "Mr. Brown had moved to another town.",
      correct: "True",
    },
    {
      statement: "Mr. Brown stayed for the whole night.",
      correct: "False",
    },
    {
      statement: "The writer's parents were happy to hear about Mr. Brown.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'expecting' mean?",
      options: [
        "Thinking that someone or something will happen",
        "Forgetting about someone",
        "Leaving a place",
        "Buying something",
      ],
      correct:
        "Thinking that someone or something will happen",
    },
    {
      question: "What does 'carefully' mean?",
      options: [
        "In a careful way",
        "Very quickly",
        "Without thinking",
        "Very loudly",
      ],
      correct: "In a careful way",
    },
    {
      question: "What does 'neighbor' mean?",
      options: [
        "Someone who lives near you",
        "Someone who works with you",
        "Someone from another country",
        "Someone who teaches you",
      ],
      correct: "Someone who lives near you",
    },
    {
      question: "What does 'nearby' mean?",
      options: [
        "Not far away",
        "Very expensive",
        "In another country",
        "Very difficult to find",
      ],
      correct: "Not far away",
    },
    {
      question: "What does 'surprise' mean?",
      options: [
        "Something unexpected",
        "Something planned carefully",
        "A regular activity",
        "A difficult problem",
      ],
      correct: "Something unexpected",
    },
  ],

  section4: [
    {
      sentence: "The writer had finished their _____ before the visitor arrived.",
      correct: "homework",
    },
    {
      sentence: "The writer heard someone knock on the front _____.",
      correct: "door",
    },
    {
      sentence: "Mr. Brown had moved to another _____.",
      correct: "town",
    },
    {
      sentence: "The writer offered Mr. Brown some _____.",
      correct: "tea",
    },
    {
      sentence: "Mr. Brown gave the writer a box of _____.",
      correct: "chocolates",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "An unexpected visit turns a quiet evening into an enjoyable experience.",
        "The writer spends the whole evening watching a movie.",
        "Mr. Brown moves back to the old neighborhood.",
        "The writer's parents come home early.",
      ],
      correct:
        "An unexpected visit turns a quiet evening into an enjoyable experience.",
    },
    {
      question: "Why did Mr. Brown decide to visit the writer's family?",
      options: [
        "He remembered that they still lived in the same house.",
        "He needed help with his new house.",
        "He wanted to borrow some money.",
        "He wanted to watch a movie.",
      ],
      correct:
        "He remembered that they still lived in the same house.",
    },
    {
      question: "How did the writer feel about the unexpected visit?",
      options: [
        "They enjoyed talking with Mr. Brown.",
        "They were angry about the visit.",
        "They wanted Mr. Brown to leave immediately.",
        "They were disappointed by the visit.",
      ],
      correct: "They enjoyed talking with Mr. Brown.",
    },
  ],

  pdfFileName: "a2-an-unexpected-visitor-reading.pdf",
};

export default function AnUnexpectedVisitorPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/healthy-habits"
      previousTitle="Healthy Habits"
      nextHref="/exercises/reading/a2/a-day-without-my-phone"
      nextTitle="A Day Without My Phone"
    />
  );
}