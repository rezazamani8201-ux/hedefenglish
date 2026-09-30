import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My House",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Oliver, and I live in a small house with my parents and my sister. Our house is in a quiet street near a park. It is not very big, but it is comfortable and bright.

There are two floors in our house. On the ground floor, there is a living room, a kitchen, and a small bathroom. The living room is my favorite room because we spend a lot of time there together. There is a large sofa, a table, and a television.

The kitchen is next to the living room. My mother often cooks dinner there. There is also a small bathroom on the ground floor.

Upstairs, there are three bedrooms and another bathroom. My bedroom is next to my sister's bedroom. I have a bed, a desk, a chair, and a bookshelf in my room. I usually do my homework at my desk.

Behind our house, there is a small garden. My father grows flowers and vegetables there. In summer, we sometimes sit in the garden and have dinner together.

I like my house because it is a peaceful place where my family can relax together.`,

  section1: [
    {
      question: "Who does Oliver live with?",
      options: [
        "His friends",
        "His parents and sister",
        "His grandparents",
        "His teacher",
      ],
      correct: "His parents and sister",
    },
    {
      question: "Where is the house?",
      options: [
        "Near a park",
        "Near a hospital",
        "In the city center",
        "Next to a school",
      ],
      correct: "Near a park",
    },
    {
      question: "How many floors does the house have?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Two",
    },
    {
      question: "What is Oliver's favorite room?",
      options: ["The kitchen", "The bathroom", "The living room", "The garden"],
      correct: "The living room",
    },
    {
      question: "What does Oliver's father grow in the garden?",
      options: [
        "Trees and fruit",
        "Flowers and vegetables",
        "Rice and wheat",
        "Only flowers",
      ],
      correct: "Flowers and vegetables",
    },
  ],

  section2: [
    {
      statement: "Oliver's house is very large.",
      correct: "False",
    },
    {
      statement: "There is a kitchen on the ground floor.",
      correct: "True",
    },
    {
      statement: "Oliver's bedroom is next to his sister's bedroom.",
      correct: "True",
    },
    {
      statement: "There is no garden behind the house.",
      correct: "False",
    },
    {
      statement: "The family sometimes has dinner in the garden.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'comfortable' mean?",
      options: [
        "Pleasant and easy to live in",
        "Very expensive",
        "Very small",
        "Very old",
      ],
      correct: "Pleasant and easy to live in",
    },
    {
      question: "What is a 'floor' in a house?",
      options: [
        "A room for cooking",
        "One level of a building",
        "A type of furniture",
        "A garden area",
      ],
      correct: "One level of a building",
    },
    {
      question: "What does 'upstairs' mean?",
      options: [
        "Outside the house",
        "On a lower level",
        "On a higher level",
        "Inside the garden",
      ],
      correct: "On a higher level",
    },
    {
      question: "What is a 'bookshelf'?",
      options: [
        "A place for keeping books",
        "A type of bed",
        "A kitchen table",
        "A garden chair",
      ],
      correct: "A place for keeping books",
    },
    {
      question: "What does 'peaceful' mean?",
      options: [
        "Quiet and calm",
        "Noisy and busy",
        "Large and expensive",
        "Dark and cold",
      ],
      correct: "Quiet and calm",
    },
  ],

  section4: [
    {
      sentence: "Oliver lives with his parents and his _____.",
      correct: "sister",
    },
    {
      sentence: "The house is near a _____.",
      correct: "park",
    },
    {
      sentence: "There is a large _____ in the living room.",
      correct: "sofa",
    },
    {
      sentence: "Oliver does his homework at his _____.",
      correct: "desk",
    },
    {
      sentence: "His father grows flowers and _____ in the garden.",
      correct: "vegetables",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Oliver describes his home and the rooms in it.",
        "Oliver talks about his school.",
        "Oliver describes a holiday.",
        "Oliver talks about his favorite park.",
      ],
      correct: "Oliver describes his home and the rooms in it.",
    },
    {
      question: "Why does Oliver like his house?",
      options: [
        "It is very expensive.",
        "It is close to a school.",
        "It is a peaceful place for his family.",
        "It has many bedrooms.",
      ],
      correct: "It is a peaceful place for his family.",
    },
    {
      question: "What does the family sometimes do in summer?",
      options: [
        "They go to school.",
        "They sit in the garden and have dinner.",
        "They visit a hospital.",
        "They travel by bus.",
      ],
      correct: "They sit in the garden and have dinner.",
    },
  ],

  pdfFileName: "a1-my-house-reading.pdf",
};

export default function MyHousePage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/at-school"
      previousTitle="At School"
      nextHref="/exercises/reading/a1/my-favorite-food"
      nextTitle="My Favorite Food"
    />
  );
}