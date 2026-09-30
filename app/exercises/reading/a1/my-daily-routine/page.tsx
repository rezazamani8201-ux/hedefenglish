import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Daily Routine",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Emma. I am twenty-two years old and I live in a small apartment with my sister. I am a student, and I study English at a language school.

I usually wake up at seven o'clock in the morning. First, I wash my face and brush my teeth. Then I get dressed and have breakfast. I usually have bread, cheese, an egg, and a cup of tea.

I leave home at eight o'clock. I walk to the bus stop and take the bus to school. My English class starts at nine o'clock. I study until twelve, and then I have lunch with my friends.

In the afternoon, I usually go home. I do my homework and sometimes watch TV. In the evening, I have dinner with my sister. After dinner, I often read a book or listen to music.

I usually go to bed at eleven o'clock. I like my daily routine because it is simple and comfortable.`,

  section1: [
    {
      question: "How old is Emma?",
      options: ["Twenty", "Twenty-two", "Twenty-five", "Thirty"],
      correct: "Twenty-two",
    },
    {
      question: "Who does Emma live with?",
      options: [
        "Her parents",
        "Her friend",
        "Her sister",
        "Her teacher",
      ],
      correct: "Her sister",
    },
    {
      question: "What does Emma usually drink for breakfast?",
      options: ["Coffee", "Milk", "Juice", "Tea"],
      correct: "Tea",
    },
    {
      question: "How does Emma go to school?",
      options: ["By car", "By bus", "By train", "By bike"],
      correct: "By bus",
    },
    {
      question: "What time does Emma usually go to bed?",
      options: ["Nine o'clock", "Ten o'clock", "Eleven o'clock", "Twelve o'clock"],
      correct: "Eleven o'clock",
    },
  ],

  section2: [
    {
      statement: "Emma lives in a large house.",
      correct: "False",
    },
    {
      statement: "Emma studies English at a language school.",
      correct: "True",
    },
    {
      statement: "Emma walks all the way to school.",
      correct: "False",
    },
    {
      statement: "Emma sometimes watches TV in the afternoon.",
      correct: "True",
    },
    {
      statement: "Emma does not like her daily routine.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does the word 'usually' mean in the passage?",
      options: ["Never", "Most of the time", "Only once", "Very rarely"],
      correct: "Most of the time",
    },
    {
      question: "What does 'leave home' mean?",
      options: [
        "Come back home",
        "Clean the house",
        "Go out of the house",
        "Buy a house",
      ],
      correct: "Go out of the house",
    },
    {
      question: "What is a 'bus stop'?",
      options: [
        "A place where buses stop",
        "A school building",
        "A train station",
        "A restaurant",
      ],
      correct: "A place where buses stop",
    },
    {
      question: "What does 'homework' mean?",
      options: [
        "Work done at home for school",
        "House cleaning",
        "Cooking at home",
        "A job at home",
      ],
      correct: "Work done at home for school",
    },
    {
      question: "What does 'comfortable' mean in the last sentence?",
      options: ["Very expensive", "Easy and pleasant", "Very difficult", "Very busy"],
      correct: "Easy and pleasant",
    },
  ],

  section4: [
    {
      sentence: "Emma usually _____ up at seven o'clock.",
      correct: "wakes",
    },
    {
      sentence: "She _____ her teeth after she gets up.",
      correct: "brushes",
    },
    {
      sentence: "Emma _____ the bus to school.",
      correct: "takes",
    },
    {
      sentence: "She _____ lunch with her friends.",
      correct: "has",
    },
    {
      sentence: "Emma usually _____ to bed at eleven.",
      correct: "goes",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Emma's school is very difficult.",
        "Emma describes her normal daily routine.",
        "Emma wants to travel to another country.",
        "Emma does not like studying English.",
      ],
      correct: "Emma describes her normal daily routine.",
    },
    {
      question: "Why does Emma like her routine?",
      options: [
        "Because it is simple and comfortable.",
        "Because she does not go to school.",
        "Because she sleeps all day.",
        "Because she lives alone.",
      ],
      correct: "Because it is simple and comfortable.",
    },
    {
      question: "Which activity does Emma often do after dinner?",
      options: [
        "She goes to school.",
        "She plays football.",
        "She reads a book or listens to music.",
        "She takes the bus.",
      ],
      correct: "She reads a book or listens to music.",
    },
  ],

  pdfFileName: "a1-my-daily-routine-reading.pdf",
};

export default function MyDailyRoutinePage() {
  return (
    <ReadingTemplate
      data={readingData}
      nextHref="/exercises/reading/a1/my-family"
      nextTitle="My Family"
    />
  );
}