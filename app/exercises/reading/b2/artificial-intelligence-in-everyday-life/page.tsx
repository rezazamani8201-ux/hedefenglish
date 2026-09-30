import ReadingTemplate, {
  ReadingData,
} from "../../a2/template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Artificial Intelligence in Everyday Life",
  level: "B2 Reading Worksheet",
  description:
    "Read the passage about artificial intelligence in everyday life and answer the questions carefully.",

  passage: `Artificial intelligence, often called AI, is becoming increasingly common in everyday life. Although many people associate AI with advanced robots or science-fiction stories, much of the technology is already present in ordinary activities. Recommendation systems, navigation applications, translation tools, voice assistants, and online customer services can all use forms of artificial intelligence.

One reason AI has become so useful is its ability to process large amounts of information quickly. For example, a navigation application can examine traffic conditions and suggest a different route. A streaming platform can analyze a user's previous choices and recommend films or programs that might be interesting. These systems can save time, but they do not always make perfect decisions.

AI is also being used in areas such as education and healthcare. Educational platforms can analyze a student's performance and suggest exercises based on areas that need improvement. In healthcare, AI systems can assist professionals by identifying patterns in medical information. However, these systems are generally intended to support human decision-making rather than completely replace it.

The growing use of AI has also created questions about privacy and responsibility. AI systems often require large amounts of data, and people may not always know how their information is collected or used. There are also concerns about decisions made by automated systems, particularly when those decisions affect important areas of people's lives.

Another challenge is understanding the limitations of AI. An AI system may produce an answer that sounds convincing but is inaccurate. For this reason, people should not assume that a computer-generated answer is automatically correct.

AI is likely to become even more integrated into everyday activities in the future. The important question is not simply whether society should use AI, but how it can be used responsibly. Understanding both its potential and its limitations can help people benefit from the technology while reducing unnecessary risks.`,

  section1: [
    {
      question: "Which everyday activities can use artificial intelligence?",
      options: [
        "Only industrial manufacturing.",
        "Navigation, recommendations, translation, and customer services.",
        "Only scientific research.",
        "Only activities involving robots.",
      ],
      correct:
        "Navigation, recommendations, translation, and customer services.",
    },
    {
      question: "Why can AI systems be useful in everyday applications?",
      options: [
        "They can process large amounts of information quickly.",
        "They always make perfect decisions.",
        "They never require data.",
        "They completely replace human judgment.",
      ],
      correct:
        "They can process large amounts of information quickly.",
    },
    {
      question: "How can AI be used in education?",
      options: [
        "By replacing all teachers.",
        "By analyzing student performance and suggesting suitable exercises.",
        "By preventing students from choosing what to study.",
        "By removing the need for practice.",
      ],
      correct:
        "By analyzing student performance and suggesting suitable exercises.",
    },
    {
      question: "What is one concern related to the use of AI?",
      options: [
        "AI cannot process any information.",
        "People may not know how their personal data is collected or used.",
        "AI is never used in important areas.",
        "AI systems cannot make automated decisions.",
      ],
      correct:
        "People may not know how their personal data is collected or used.",
    },
    {
      question: "Why should people be careful with AI-generated answers?",
      options: [
        "They are always too short.",
        "They may sound convincing even when they are inaccurate.",
        "They cannot contain useful information.",
        "They are always written by humans.",
      ],
      correct:
        "They may sound convincing even when they are inaccurate.",
    },
  ],

  section2: [
    {
      statement:
        "Artificial intelligence is already used in several ordinary everyday activities.",
      correct: "True",
    },
    {
      statement:
        "The passage claims that AI systems always make perfect decisions.",
      correct: "False",
    },
    {
      statement:
        "AI can be used to analyze student performance.",
      correct: "True",
    },
    {
      statement:
        "The writer says that AI should completely replace human decision-making.",
      correct: "False",
    },
    {
      statement:
        "The passage suggests that people should understand both the potential and limitations of AI.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'recommendation' mean in the passage?",
      options: [
        "A suggestion about something that may be suitable or interesting.",
        "A warning about dangerous technology.",
        "A decision made by a doctor.",
        "A method of collecting personal data.",
      ],
      correct:
        "A suggestion about something that may be suitable or interesting.",
    },
    {
      question: "What does 'analyze' mean?",
      options: [
        "To examine information carefully in order to understand it.",
        "To delete information completely.",
        "To avoid using information.",
        "To translate information into another language.",
      ],
      correct:
        "To examine information carefully in order to understand it.",
    },
    {
      question: "What does 'assist' mean?",
      options: [
        "To help someone do something.",
        "To replace someone completely.",
        "To prevent someone from working.",
        "To make a decision without information.",
      ],
      correct: "To help someone do something.",
    },
    {
      question: "What does 'limitations' mean?",
      options: [
        "Things that restrict what something can do.",
        "Advantages that make something faster.",
        "New forms of technology.",
        "Information collected by a computer.",
      ],
      correct: "Things that restrict what something can do.",
    },
    {
      question: "What does 'responsibly' mean?",
      options: [
        "In a careful way that considers possible consequences.",
        "Without considering any risks.",
        "As quickly as possible.",
        "Without using any technology.",
      ],
      correct:
        "In a careful way that considers possible consequences.",
    },
  ],

  section4: [
    {
      sentence:
        "AI systems can process large amounts of ______ quickly.",
      correct: "information",
    },
    {
      sentence:
        "Streaming platforms can ______ films based on a user's previous choices.",
      correct: "recommend",
    },
    {
      sentence:
        "Educational platforms can ______ a student's performance.",
      correct: "analyze",
    },
    {
      sentence:
        "AI systems can ______ professionals in areas such as healthcare.",
      correct: "assist",
    },
    {
      sentence:
        "People should understand both the potential and ______ of AI.",
      correct: "limitations",
    },
  ],

  section5: [
    {
      question:
        "Why does the writer mention navigation and streaming platforms?",
      options: [
        "To show that AI is already part of many ordinary activities.",
        "To argue that entertainment is more important than healthcare.",
        "To prove that AI systems always make correct decisions.",
        "To explain why people should stop using technology.",
      ],
      correct:
        "To show that AI is already part of many ordinary activities.",
    },
    {
      question:
        "What can be inferred from the discussion of healthcare and education?",
      options: [
        "AI can support professionals and learners, but human judgment can still remain important.",
        "AI has already replaced all teachers and healthcare professionals.",
        "AI is unsuitable for any serious activity.",
        "Human decision-making is no longer necessary.",
      ],
      correct:
        "AI can support professionals and learners, but human judgment can still remain important.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Artificial intelligence is mainly used for entertainment.",
        "AI is becoming part of everyday life and offers useful possibilities, but it should be used with an understanding of its limitations and risks.",
        "Artificial intelligence should replace human decision-making.",
        "People should avoid using AI because it is always inaccurate.",
      ],
      correct:
        "AI is becoming part of everyday life and offers useful possibilities, but it should be used with an understanding of its limitations and risks.",
    },
  ],

  pdfFileName: "b2-artificial-intelligence-in-everyday-life-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b2/the-importance-of-critical-thinking"
      previousTitle="The Importance of Critical Thinking"
      nextHref="/exercises/reading/b2/work-life-balance"
      nextTitle="Work-Life Balance"
    />
  );
}