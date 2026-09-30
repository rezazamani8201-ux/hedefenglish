import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Pet",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Emily, and I have a small dog called Max. Max is three years old. He is a small brown dog with short hair and big ears. He is very friendly and loves playing with people.

Max lives with me and my family. He has a small bed in the living room, next to the sofa. He usually sleeps there at night, but sometimes he sleeps under my bed.

Every morning, I take Max outside for a walk. We usually walk around our neighborhood for about thirty minutes. Max likes seeing other dogs and smelling the flowers and trees.

In the afternoon, I give Max his food and fresh water. His favorite food is chicken. He also likes small dog treats. After dinner, I sometimes play with him in the garden. He loves running after a ball.

At weekends, my father sometimes takes Max to the park. Max enjoys running and playing there. He is an important part of our family, and I am very happy to have him.`,

  section1: [
    {
      question: "What is the dog's name?",
      options: ["Max", "Jack", "Tom", "Ben"],
      correct: "Max",
    },
    {
      question: "How old is Max?",
      options: ["One year old", "Two years old", "Three years old", "Five years old"],
      correct: "Three years old",
    },
    {
      question: "What color is Max?",
      options: ["Black", "White", "Brown", "Gray"],
      correct: "Brown",
    },
    {
      question: "Where does Max usually sleep?",
      options: [
        "In the kitchen",
        "In a small bed in the living room",
        "In the garden",
        "Outside the house",
      ],
      correct: "In a small bed in the living room",
    },
    {
      question: "What is Max's favorite food?",
      options: ["Fish", "Chicken", "Rice", "Bread"],
      correct: "Chicken",
    },
  ],

  section2: [
    {
      statement: "Max is three years old.",
      correct: "True",
    },
    {
      statement: "Max is a large black dog.",
      correct: "False",
    },
    {
      statement: "Emily takes Max for a walk every morning.",
      correct: "True",
    },
    {
      statement: "Max does not like other dogs.",
      correct: "False",
    },
    {
      statement: "Max sometimes goes to the park with Emily's father.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'friendly' mean?",
      options: [
        "Kind and nice to people",
        "Very angry",
        "Very tired",
        "Afraid of people",
      ],
      correct: "Kind and nice to people",
    },
    {
      question: "What does 'neighborhood' mean?",
      options: [
        "An area where people live",
        "A type of food",
        "A school building",
        "A kind of animal",
      ],
      correct: "An area where people live",
    },
    {
      question: "What does 'fresh water' mean?",
      options: [
        "Clean water",
        "Hot water",
        "Very cold water",
        "Salty water",
      ],
      correct: "Clean water",
    },
    {
      question: "What are 'treats'?",
      options: [
        "Small special foods for a pet",
        "Pet toys",
        "Pet beds",
        "Types of medicine",
      ],
      correct: "Small special foods for a pet",
    },
    {
      question: "What does 'running after' mean?",
      options: [
        "Following something while running",
        "Sleeping near something",
        "Eating something",
        "Cleaning something",
      ],
      correct: "Following something while running",
    },
  ],

  section4: [
    {
      sentence: "Max is a small _____ dog.",
      correct: "brown",
    },
    {
      sentence: "Max has a small _____ in the living room.",
      correct: "bed",
    },
    {
      sentence: "Emily takes Max outside every _____.",
      correct: "morning",
    },
    {
      sentence: "Max's favorite food is _____.",
      correct: "chicken",
    },
    {
      sentence: "Max loves running after a _____.",
      correct: "ball",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Emily describes her dog and how she takes care of him.",
        "Emily talks about her school.",
        "Emily describes a trip to the park.",
        "Emily explains how to train a dog.",
      ],
      correct:
        "Emily describes her dog and how she takes care of him.",
    },
    {
      question: "Why does Emily take Max outside every morning?",
      options: [
        "To give him food",
        "To take him for a walk",
        "To give him a bath",
        "To take him to school",
      ],
      correct: "To take him for a walk",
    },
    {
      question: "Why is Max important to Emily?",
      options: [
        "He is part of her family.",
        "He helps her with homework.",
        "He works in the park.",
        "He brings her food.",
      ],
      correct: "He is part of her family.",
    },
  ],

  pdfFileName: "a1-my-pet-reading.pdf",
};

export default function MyPetPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-weekend"
      previousTitle="My Weekend"
      nextHref="/exercises/reading/a1/a-trip-to-the-beach"
      nextTitle="A Trip to the Beach"
    />
  );
}