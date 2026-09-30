import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Memorable Journey",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about a memorable journey and answer the questions carefully.",

  passage: `Last summer, David decided to take a train journey across the country. He had always enjoyed traveling, but most of his previous trips had been short and carefully planned. This time, he wanted to have a different experience and discover places he had never visited before.

David bought a train ticket that allowed him to stop in several different towns along the way. His first stop was a small mountain town famous for its beautiful views. He spent the day walking through the streets, visiting a local museum, and talking to some residents who recommended a nearby hiking trail.

The next morning, David continued his journey. Unfortunately, the train was delayed because of a technical problem. At first, he was annoyed because he had planned to arrive in the next town before lunch. However, he started talking to another passenger who was also traveling alone. They discovered that they had similar interests and spent most of the journey talking about books, music, and travel.

When David finally arrived, he realized that the delay had actually made the journey more interesting. He and the other passenger exchanged contact information and promised to stay in touch.

By the end of the trip, David had visited several new places and met people he would probably never have met if everything had gone according to plan. He realized that unexpected problems can sometimes create the best memories.`,

  section1: [
    {
      question: "Why did David decide to take a train journey?",
      options: [
        "He needed to move to another country.",
        "He wanted a different travel experience.",
        "He wanted to visit only one town.",
        "He was traveling for work.",
      ],
      correct: "He wanted a different travel experience.",
    },
    {
      question: "What was special about the ticket David bought?",
      options: [
        "It was only valid for one train.",
        "It allowed him to stop in several towns.",
        "It was free for the whole summer.",
        "It could only be used at night.",
      ],
      correct: "It allowed him to stop in several towns.",
    },
    {
      question: "What did David do in the mountain town?",
      options: [
        "He went to a concert.",
        "He visited a museum and walked around the town.",
        "He stayed in his hotel all day.",
        "He immediately took another train.",
      ],
      correct: "He visited a museum and walked around the town.",
    },
    {
      question: "Why was the train delayed?",
      options: [
        "There was bad weather.",
        "David arrived late.",
        "There was a technical problem.",
        "The train had no passengers.",
      ],
      correct: "There was a technical problem.",
    },
    {
      question: "What happened because of the delay?",
      options: [
        "David met another traveler and had an interesting conversation.",
        "David canceled his entire trip.",
        "David returned home immediately.",
        "David missed the train completely.",
      ],
      correct:
        "David met another traveler and had an interesting conversation.",
    },
  ],

  section2: [
    {
      statement:
        "David had traveled to many different countries before this journey.",
      correct: "False",
    },
    {
      statement:
        "David's first stop was a small mountain town.",
      correct: "True",
    },
    {
      statement:
        "A local resident recommended a hiking trail to David.",
      correct: "True",
    },
    {
      statement:
        "David was happy about the train delay from the beginning.",
      correct: "False",
    },
    {
      statement:
        "David exchanged contact information with another passenger.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'carefully planned' mean in the passage?",
      options: [
        "Organized in advance with attention to details.",
        "Changed every few minutes.",
        "Completely unexpected.",
        "Very expensive.",
      ],
      correct: "Organized in advance with attention to details.",
    },
    {
      question: "What does 'residents' mean?",
      options: [
        "People who live in a particular place.",
        "People who are visiting a place for one day.",
        "Train employees.",
        "Museum workers.",
      ],
      correct: "People who live in a particular place.",
    },
    {
      question: "What does 'annoyed' mean?",
      options: [
        "Very excited.",
        "Slightly angry or irritated.",
        "Completely relaxed.",
        "Extremely surprised.",
      ],
      correct: "Slightly angry or irritated.",
    },
    {
      question: "What does 'exchanged contact information' mean?",
      options: [
        "They stopped speaking to each other.",
        "They shared ways to contact each other.",
        "They bought new phones.",
        "They changed their travel plans.",
      ],
      correct: "They shared ways to contact each other.",
    },
    {
      question: "What does 'unexpected' mean?",
      options: [
        "Something that was planned carefully.",
        "Something that happens without being predicted.",
        "Something that happens every day.",
        "Something that is impossible.",
      ],
      correct: "Something that happens without being predicted.",
    },
  ],

  section4: [
    {
      sentence:
        "David decided to take a train journey across the ______.",
      correct: "country",
    },
    {
      sentence:
        "His first stop was a small ______ town.",
      correct: "mountain",
    },
    {
      sentence:
        "A local resident recommended a nearby hiking ______.",
      correct: "trail",
    },
    {
      sentence:
        "The train was delayed because of a technical ______.",
      correct: "problem",
    },
    {
      sentence:
        "David realized that unexpected problems can sometimes create the best ______.",
      correct: "memories",
    },
  ],

  section5: [
    {
      question:
        "Why did David's opinion about the train delay change?",
      options: [
        "He discovered that the delay gave him a chance to meet someone interesting.",
        "The train arrived earlier than expected.",
        "The railway company gave him a free ticket.",
        "He decided that delays were always convenient.",
      ],
      correct:
        "He discovered that the delay gave him a chance to meet someone interesting.",
    },
    {
      question:
        "What can we infer about David's attitude toward travel?",
      options: [
        "He prefers to avoid all unfamiliar experiences.",
        "He is curious and willing to discover new places.",
        "He only travels when someone else plans everything.",
        "He dislikes meeting new people.",
      ],
      correct:
        "He is curious and willing to discover new places.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Travel is only enjoyable when everything goes according to plan.",
        "Unexpected events during a journey can sometimes lead to valuable experiences.",
        "Train travel is always better than other forms of transportation.",
        "People should never travel alone.",
      ],
      correct:
        "Unexpected events during a journey can sometimes lead to valuable experiences.",
    },
  ],

  pdfFileName: "b1-a-memorable-journey-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/the-power-of-technology"
      previousTitle="The Power of Technology"
      nextHref="/exercises/reading/b1/healthy-eating-habits"
      nextTitle="Healthy Eating Habits"
    />
  );
}