import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Best Friend",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My best friend's name is Sophie. She is twenty-three years old, and we met at school five years ago. We live in the same neighborhood, so we often see each other.

Sophie is a friendly and cheerful person. She has long brown hair and green eyes. She is also very helpful. When I have a problem, I can always talk to her.

Sophie works at a small bookshop in the city center. She loves books, so she really enjoys her job. Her favorite kind of books is mystery stories. She often tells me about the books she reads.

We have many things in common. We both like listening to music, watching movies, and going for walks. At weekends, we sometimes meet at a cafe and have coffee together. In summer, we like going to the park and taking pictures.

I am happy to have Sophie as my best friend because she is kind, honest, and always there for me.`,

  section1: [
    {
      question: "How old is Sophie?",
      options: ["Twenty", "Twenty-one", "Twenty-three", "Twenty-five"],
      correct: "Twenty-three",
    },
    {
      question: "How long have they known each other?",
      options: ["Two years", "Three years", "Five years", "Ten years"],
      correct: "Five years",
    },
    {
      question: "Where does Sophie work?",
      options: [
        "At a school",
        "At a bookshop",
        "At a cafe",
        "At a hospital",
      ],
      correct: "At a bookshop",
    },
    {
      question: "What kind of books does Sophie like?",
      options: [
        "History books",
        "Cookbooks",
        "Mystery stories",
        "Science books",
      ],
      correct: "Mystery stories",
    },
    {
      question: "What do they sometimes do at weekends?",
      options: [
        "Go to a cafe",
        "Go to school",
        "Go to work",
        "Visit a hospital",
      ],
      correct: "Go to a cafe",
    },
  ],

  section2: [
    {
      statement: "Sophie and the writer met five years ago.",
      correct: "True",
    },
    {
      statement: "Sophie has short black hair.",
      correct: "False",
    },
    {
      statement: "Sophie works in a bookshop.",
      correct: "True",
    },
    {
      statement: "The two friends never watch movies.",
      correct: "False",
    },
    {
      statement: "The writer thinks Sophie is honest.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'cheerful' mean?",
      options: [
        "Usually happy",
        "Usually angry",
        "Very tired",
        "Very quiet",
      ],
      correct: "Usually happy",
    },
    {
      question: "What does 'helpful' mean?",
      options: [
        "Likes helping people",
        "Does not talk to people",
        "Works at a school",
        "Likes being alone",
      ],
      correct: "Likes helping people",
    },
    {
      question: "What does 'mystery stories' mean?",
      options: [
        "Stories about food",
        "Stories about sports",
        "Stories about solving secrets or crimes",
        "Stories about school",
      ],
      correct: "Stories about solving secrets or crimes",
    },
    {
      question: "What does 'in common' mean?",
      options: [
        "Different from each other",
        "Something shared by two or more people",
        "Something expensive",
        "Something difficult",
      ],
      correct: "Something shared by two or more people",
    },
    {
      question: "What does 'there for me' mean?",
      options: [
        "Lives far away",
        "Is available to support me",
        "Works with me",
        "Studies with me",
      ],
      correct: "Is available to support me",
    },
  ],

  section4: [
    {
      sentence: "Sophie has long _____ hair.",
      correct: "brown",
    },
    {
      sentence: "Sophie has _____ eyes.",
      correct: "green",
    },
    {
      sentence: "She works at a small _____.",
      correct: "bookshop",
    },
    {
      sentence: "They sometimes meet at a _____.",
      correct: "cafe",
    },
    {
      sentence: "The writer thinks Sophie is kind and _____.",
      correct: "honest",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer describes her best friend and their friendship.",
        "The writer talks about a new job.",
        "The writer describes a bookshop.",
        "The writer talks about her school.",
      ],
      correct:
        "The writer describes her best friend and their friendship.",
    },
    {
      question: "Why does Sophie enjoy her job?",
      options: [
        "She likes working with children.",
        "She loves books.",
        "She likes drinking coffee.",
        "She wants to work at a school.",
      ],
      correct: "She loves books.",
    },
    {
      question: "Why is Sophie a good friend?",
      options: [
        "She is rich.",
        "She lives in another city.",
        "She is kind, honest, and supportive.",
        "She works in a bookshop.",
      ],
      correct: "She is kind, honest, and supportive.",
    },
  ],

  pdfFileName: "a1-my-best-friend-reading.pdf",
};

export default function MyBestFriendPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-family"
      previousTitle="My Family"
      nextHref="/exercises/reading/a1/at-school"
      nextTitle="At School"
    />
  );
}