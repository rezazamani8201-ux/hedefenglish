import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Life in a Small Town",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about life in a small town and answer the questions carefully.",

  passage: `When Sarah moved from a large city to a small town, she was not sure what to expect. She had spent most of her life surrounded by busy streets, large shopping centers, and crowded public transportation. At first, the quiet atmosphere of the town felt strange to her.

Sarah moved because she wanted a slower lifestyle. Her new home was close to a small lake, and there were several walking paths nearby. Instead of spending hours in traffic, she could walk to most places in less than twenty minutes.

One of the biggest differences was the way people knew each other. In the city, Sarah rarely spoke to her neighbors. In the small town, however, people often greeted each other in the street and stopped to have short conversations. After a few weeks, Sarah began recognizing many people in the local shops and cafés.

There were some disadvantages too. The town had fewer restaurants and entertainment options than the city. Sarah sometimes missed going to concerts or trying new international restaurants. Public transportation was also less frequent, so she usually needed to plan her trips in advance.

Despite these differences, Sarah gradually became comfortable with her new lifestyle. She enjoyed spending more time outdoors and felt that the slower pace helped her reduce stress. She still visits the city occasionally, but she now appreciates having a quiet place to return to.`,

  section1: [
    {
      question: "Why did Sarah move to a small town?",
      options: [
        "She wanted to find a busier lifestyle.",
        "She wanted a slower lifestyle.",
        "She wanted to live closer to large shopping centers.",
        "She wanted to attend more concerts.",
      ],
      correct: "She wanted a slower lifestyle.",
    },
    {
      question: "What was strange to Sarah at first?",
      options: [
        "The crowded streets.",
        "The large shopping centers.",
        "The quiet atmosphere.",
        "The public transportation.",
      ],
      correct: "The quiet atmosphere.",
    },
    {
      question: "How did Sarah usually travel around the town?",
      options: [
        "By car for every trip.",
        "By train.",
        "By walking.",
        "By airplane.",
      ],
      correct: "By walking.",
    },
    {
      question: "How was social life different in the small town?",
      options: [
        "People rarely spoke to each other.",
        "People often greeted and talked to one another.",
        "Nobody knew their neighbors.",
        "People only communicated online.",
      ],
      correct: "People often greeted and talked to one another.",
    },
    {
      question: "What did Sarah sometimes miss about the city?",
      options: [
        "Walking paths.",
        "Quiet streets.",
        "Concerts and international restaurants.",
        "Small local shops.",
      ],
      correct: "Concerts and international restaurants.",
    },
  ],

  section2: [
    {
      statement:
        "Sarah had spent most of her life in a large city.",
      correct: "True",
    },
    {
      statement:
        "Sarah's new home was far away from walking paths.",
      correct: "False",
    },
    {
      statement:
        "People in the small town often greeted each other.",
      correct: "True",
    },
    {
      statement:
        "The small town had more entertainment options than the city.",
      correct: "False",
    },
    {
      statement:
        "Sarah eventually became comfortable with her new lifestyle.",
      correct: "True",
    },
  ],

  section3: [
    {
      question:
        "What does the phrase 'slower lifestyle' mean in the passage?",
      options: [
        "A lifestyle with less activity and pressure.",
        "A lifestyle with more traffic.",
        "A lifestyle with more entertainment.",
        "A lifestyle that requires traveling every day.",
      ],
      correct: "A lifestyle with less activity and pressure.",
    },
    {
      question: "What does 'crowded' mean?",
      options: [
        "Having very few people.",
        "Having many people in a small area.",
        "Being completely empty.",
        "Being far from other places.",
      ],
      correct: "Having many people in a small area.",
    },
    {
      question: "What does 'disadvantages' mean in the passage?",
      options: [
        "Positive features.",
        "Benefits.",
        "Negative aspects or problems.",
        "New opportunities.",
      ],
      correct: "Negative aspects or problems.",
    },
    {
      question: "What does 'occasionally' mean?",
      options: [
        "Very frequently.",
        "Never.",
        "Sometimes, but not regularly.",
        "Every day.",
      ],
      correct: "Sometimes, but not regularly.",
    },
    {
      question: "What does 'reduce stress' mean?",
      options: [
        "Make stress greater.",
        "Make stress less.",
        "Ignore all problems.",
        "Create more responsibilities.",
      ],
      correct: "Make stress less.",
    },
  ],

  section4: [
    {
      sentence:
        "Sarah wanted a ______ lifestyle after moving to the town.",
      correct: "slower",
    },
    {
      sentence:
        "Her new home was close to a small ______.",
      correct: "lake",
    },
    {
      sentence:
        "Sarah could walk to most places in less than ______ minutes.",
      correct: "twenty",
    },
    {
      sentence:
        "The town had fewer restaurants and ______ options than the city.",
      correct: "entertainment",
    },
    {
      sentence:
        "Sarah felt that the slower pace helped her reduce ______.",
      correct: "stress",
    },
  ],

  section5: [
    {
      question:
        "What can we infer about Sarah's feelings after living in the town for some time?",
      options: [
        "She completely regretted moving there.",
        "She gradually began to appreciate the lifestyle.",
        "She decided never to visit the city again.",
        "She became more interested in busy city life.",
      ],
      correct:
        "She gradually began to appreciate the lifestyle.",
    },
    {
      question:
        "Why did Sarah sometimes need to plan her trips in advance?",
      options: [
        "The town had very frequent transportation.",
        "Public transportation was less frequent.",
        "She lived next to the train station.",
        "She did not know where the shops were.",
      ],
      correct: "Public transportation was less frequent.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Small towns are always better than large cities.",
        "Living in a small town can offer a quieter lifestyle but also has some disadvantages.",
        "People should never move from cities to small towns.",
        "Small towns have more entertainment than cities.",
      ],
      correct:
        "Living in a small town can offer a quieter lifestyle but also has some disadvantages.",
    },
  ],

  pdfFileName: "b1-life-in-a-small-town-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/learning-a-new-language"
      previousTitle="Learning a New Language"
      nextHref="/exercises/reading/b1/the-power-of-technology"
      nextTitle="The Power of Technology"
    />
  );
}