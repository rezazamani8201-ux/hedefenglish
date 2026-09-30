import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Family",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Daniel, and I want to tell you about my family. There are five people in my family: my father, my mother, my older sister, my younger brother, and me.

My father is a doctor. He works at a hospital near our house. He is usually very busy, but he always has time for our family. My mother is a teacher. She teaches children at a primary school. She likes her job very much.

My older sister's name is Anna. She is twenty years old and studies at university. She likes reading books and listening to music. My younger brother, Tom, is ten years old. He likes playing football and riding his bicycle.

We live in a comfortable house in a quiet neighborhood. In the evening, we usually have dinner together. At weekends, we sometimes watch a movie or visit our grandparents.

I love my family because we spend a lot of time together and help each other.`,

  section1: [
    {
      question: "How many people are there in Daniel's family?",
      options: ["Three", "Four", "Five", "Six"],
      correct: "Five",
    },
    {
      question: "What is Daniel's father?",
      options: ["A teacher", "A doctor", "A student", "A driver"],
      correct: "A doctor",
    },
    {
      question: "Where does Daniel's mother work?",
      options: [
        "At a hospital",
        "At a university",
        "At a primary school",
        "At home",
      ],
      correct: "At a primary school",
    },
    {
      question: "How old is Anna?",
      options: ["Ten", "Fifteen", "Twenty", "Twenty-five"],
      correct: "Twenty",
    },
    {
      question: "What does Tom like doing?",
      options: [
        "Reading books",
        "Playing football",
        "Cooking",
        "Swimming",
      ],
      correct: "Playing football",
    },
  ],

  section2: [
    {
      statement: "Daniel has an older sister.",
      correct: "True",
    },
    {
      statement: "Daniel's father works at a school.",
      correct: "False",
    },
    {
      statement: "Daniel's mother enjoys her job.",
      correct: "True",
    },
    {
      statement: "Tom is twenty years old.",
      correct: "False",
    },
    {
      statement: "The family sometimes visits their grandparents.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does the word 'older' mean in the passage?",
      options: [
        "Having more age",
        "Having less age",
        "Being shorter",
        "Being younger",
      ],
      correct: "Having more age",
    },
    {
      question: "What is a 'hospital'?",
      options: [
        "A place where people study",
        "A place where people receive medical care",
        "A place where people play",
        "A place where people shop",
      ],
      correct: "A place where people receive medical care",
    },
    {
      question: "What does 'primary school' mean?",
      options: [
        "A school for young children",
        "A university",
        "A hospital",
        "A sports club",
      ],
      correct: "A school for young children",
    },
    {
      question: "What does 'neighborhood' mean?",
      options: [
        "A type of school",
        "An area where people live",
        "A family member",
        "A kind of job",
      ],
      correct: "An area where people live",
    },
    {
      question: "What does 'help each other' mean?",
      options: [
        "Work against each other",
        "Ignore each other",
        "Support one another",
        "Live in different houses",
      ],
      correct: "Support one another",
    },
  ],

  section4: [
    {
      sentence: "Daniel's father is a _____.",
      correct: "doctor",
    },
    {
      sentence: "His mother is a _____.",
      correct: "teacher",
    },
    {
      sentence: "Anna studies at _____.",
      correct: "university",
    },
    {
      sentence: "Tom likes riding his _____.",
      correct: "bicycle",
    },
    {
      sentence: "The family sometimes visits their _____.",
      correct: "grandparents",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Daniel describes his family and their life together.",
        "Daniel talks about his school.",
        "Daniel wants to become a doctor.",
        "Daniel talks about a holiday.",
      ],
      correct: "Daniel describes his family and their life together.",
    },
    {
      question: "Why does Daniel love his family?",
      options: [
        "They have a big house.",
        "They spend time together and help each other.",
        "They travel every weekend.",
        "Everyone works at the same place.",
      ],
      correct: "They spend time together and help each other.",
    },
    {
      question: "What does the family usually do in the evening?",
      options: [
        "They go to university.",
        "They play football.",
        "They have dinner together.",
        "They visit the hospital.",
      ],
      correct: "They have dinner together.",
    },
  ],

  pdfFileName: "a1-my-family-reading.pdf",
};

export default function MyFamilyPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-daily-routine"
      previousTitle="My Daily Routine"
      nextHref="/exercises/reading/a1/my-best-friend"
      nextTitle="My Best Friend"
    />
  );
}