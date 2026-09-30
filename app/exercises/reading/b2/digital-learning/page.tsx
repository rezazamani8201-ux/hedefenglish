import ReadingTemplate, {
  ReadingData,
} from "../../a2/template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Digital Learning",
  level: "B2 Reading Worksheet",
  description:
    "Read the passage about digital learning and answer the questions carefully.",

  passage: `Digital learning has changed the way many people access education. Online courses, educational platforms, video lessons, and interactive applications allow learners to study without being physically present in a traditional classroom. This flexibility has made education more accessible to people with different schedules, responsibilities, and learning needs.

One advantage of digital learning is that students can often control the pace of their studies. A learner who finds a particular topic difficult can watch a lesson again or spend additional time reviewing the material. Someone who already understands the topic can move forward more quickly. This can make the learning experience more personal.

However, flexibility does not automatically lead to better learning. Students need a certain level of self-discipline because online courses often provide fewer external reminders than traditional classes. Without a regular routine, some learners may postpone assignments or lose motivation.

Another challenge is the amount of information available online. Students can find thousands of articles, videos, and websites about almost any subject. While this provides valuable opportunities, it also means that learners need to evaluate information carefully. Not every online source is accurate or reliable.

Teachers also have an important role in digital education. Technology can provide useful tools, but it cannot completely replace guidance and interaction. Effective online courses usually combine digital resources with opportunities for discussion, feedback, and collaboration.

Digital learning is therefore not simply a matter of moving traditional lessons onto a computer screen. It requires learners and teachers to adapt to a different educational environment. When technology is combined with good teaching methods and active participation, digital learning can create meaningful opportunities for education.`,

  section1: [
    {
      question: "What is one advantage of digital learning mentioned in the passage?",
      options: [
        "Students never need teachers.",
        "Students can often study at their own pace.",
        "Students receive fewer educational resources.",
        "Students must follow exactly the same schedule.",
      ],
      correct: "Students can often study at their own pace.",
    },
    {
      question: "Why might some students struggle with online courses?",
      options: [
        "They have too many teachers.",
        "They may lack self-discipline or motivation.",
        "They cannot access any information.",
        "They are always required to study in groups.",
      ],
      correct: "They may lack self-discipline or motivation.",
    },
    {
      question: "Why can the large amount of online information be a challenge?",
      options: [
        "There are no educational websites.",
        "Students cannot search for information online.",
        "Not every online source is accurate or reliable.",
        "Students are not allowed to read articles.",
      ],
      correct: "Not every online source is accurate or reliable.",
    },
    {
      question: "What role can teachers play in digital education?",
      options: [
        "They can provide guidance, feedback, and interaction.",
        "They can completely replace technology.",
        "They can prevent students from using online resources.",
        "They can remove the need for student participation.",
      ],
      correct: "They can provide guidance, feedback, and interaction.",
    },
    {
      question: "What does effective digital learning require?",
      options: [
        "Technology without teaching.",
        "Students working without communication.",
        "A combination of technology, good teaching methods, and active participation.",
        "Traditional classrooms without digital resources.",
      ],
      correct:
        "A combination of technology, good teaching methods, and active participation.",
    },
  ],

  section2: [
    {
      statement:
        "Digital learning can make education more accessible to people with different schedules.",
      correct: "True",
    },
    {
      statement:
        "The passage suggests that flexibility always guarantees better learning.",
      correct: "False",
    },
    {
      statement:
        "Students may need to evaluate online information carefully.",
      correct: "True",
    },
    {
      statement:
        "The writer believes teachers are no longer necessary in digital education.",
      correct: "False",
    },
    {
      statement:
        "Digital learning can be effective when technology is combined with good teaching and active participation.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'accessible' mean in the passage?",
      options: [
        "Easy for people to reach, use, or obtain.",
        "Difficult to understand.",
        "Available only to teachers.",
        "Limited to traditional classrooms.",
      ],
      correct: "Easy for people to reach, use, or obtain.",
    },
    {
      question: "What does 'pace' mean in the phrase 'at their own pace'?",
      options: [
        "The speed at which something happens.",
        "The place where someone studies.",
        "The amount of information available.",
        "The number of students in a class.",
      ],
      correct: "The speed at which something happens.",
    },
    {
      question: "What does 'self-discipline' mean?",
      options: [
        "The ability to control and organize your own behavior.",
        "The ability to teach other people.",
        "The need to study with a teacher.",
        "The ability to find information online.",
      ],
      correct: "The ability to control and organize your own behavior.",
    },
    {
      question: "What does 'reliable' mean?",
      options: [
        "Able to be trusted as accurate or dependable.",
        "Difficult to access.",
        "Very expensive.",
        "Always entertaining.",
      ],
      correct: "Able to be trusted as accurate or dependable.",
    },
    {
      question: "What does 'participation' mean?",
      options: [
        "Taking part in an activity.",
        "Avoiding an activity.",
        "Studying without communication.",
        "Changing an educational platform.",
      ],
      correct: "Taking part in an activity.",
    },
  ],

  section4: [
    {
      sentence:
        "Digital learning can make education more ______ to people with different needs.",
      correct: "accessible",
    },
    {
      sentence:
        "Students can sometimes study at their own ______.",
      correct: "pace",
    },
    {
      sentence:
        "Online courses require a certain level of self-______.",
      correct: "discipline",
    },
    {
      sentence:
        "Students need to decide whether an online source is accurate and ______.",
      correct: "reliable",
    },
    {
      sentence:
        "Active ______ can make digital learning more effective.",
      correct: "participation",
    },
  ],

  section5: [
    {
      question:
        "Why does the writer mention that students can watch difficult lessons again?",
      options: [
        "To show how digital learning can adapt to individual learning speeds.",
        "To prove that teachers are unnecessary.",
        "To explain why students should avoid difficult topics.",
        "To show that online courses contain less information.",
      ],
      correct:
        "To show how digital learning can adapt to individual learning speeds.",
    },
    {
      question:
        "What can be inferred about technology from the passage?",
      options: [
        "Technology alone guarantees successful learning.",
        "Technology is useful, but its effectiveness depends partly on how it is used.",
        "Technology should replace teachers completely.",
        "Technology makes student participation unnecessary.",
      ],
      correct:
        "Technology is useful, but its effectiveness depends partly on how it is used.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Digital learning is always better than traditional education.",
        "Online education has advantages and challenges, and its success depends on combining technology with effective teaching and active participation.",
        "Students should only use printed educational materials.",
        "Teachers have little importance in modern education.",
      ],
      correct:
        "Online education has advantages and challenges, and its success depends on combining technology with effective teaching and active participation.",
    },
  ],

  pdfFileName: "b2-digital-learning-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b2/a-changing-workplace"
      previousTitle="A Changing Workplace"
      nextHref="/exercises/reading/b2/the-future-of-cities"
      nextTitle="The Future of Cities"
    />
  );
}