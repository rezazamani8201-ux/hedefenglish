import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Birthday Party",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `Last Sunday was my little sister Emma's birthday. She was eight years old. My parents decided to have a small birthday party at our house. We invited some of Emma's friends and our grandparents.

In the morning, my mother and I prepared the food. We made sandwiches, pizza, and a big chocolate cake. My father decorated the living room with balloons. Emma chose pink and purple balloons because they are her favorite colors.

The party started at two o'clock in the afternoon. Emma's friends arrived with small presents. They played games, listened to music, and laughed together. My grandmother also brought a special birthday present for Emma.

After the games, everyone sat around the table. We sang "Happy Birthday" and Emma blew out the candles on her cake. Then we ate cake, fruit, and ice cream.

Later, we took some photos in the garden. The children played outside while the adults talked inside the house. The party finished at about six o'clock.

Emma was very happy because she had a wonderful birthday with her family and friends. She thanked everyone for coming and said it was her favorite birthday party.`,

  section1: [
    {
      question: "How old was Emma?",
      options: ["Six", "Seven", "Eight", "Nine"],
      correct: "Eight",
    },
    {
      question: "Where was the birthday party?",
      options: [
        "At a restaurant",
        "At Emma's school",
        "At their house",
        "At the park",
      ],
      correct: "At their house",
    },
    {
      question: "What kind of cake did they make?",
      options: [
        "Vanilla cake",
        "Chocolate cake",
        "Apple cake",
        "Strawberry cake",
      ],
      correct: "Chocolate cake",
    },
    {
      question: "What colors were Emma's favorite balloons?",
      options: [
        "Blue and green",
        "Red and yellow",
        "Pink and purple",
        "Black and white",
      ],
      correct: "Pink and purple",
    },
    {
      question: "What time did the party finish?",
      options: [
        "At four o'clock",
        "At five o'clock",
        "At six o'clock",
        "At seven o'clock",
      ],
      correct: "At six o'clock",
    },
  ],

  section2: [
    {
      statement: "Emma was eight years old.",
      correct: "True",
    },
    {
      statement: "The family had the party at a restaurant.",
      correct: "False",
    },
    {
      statement: "Emma's father decorated the living room.",
      correct: "True",
    },
    {
      statement: "The guests arrived at three o'clock.",
      correct: "False",
    },
    {
      statement: "Emma was very happy at the party.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'invited' mean?",
      options: [
        "Asked someone to come",
        "Asked someone to leave",
        "Bought something",
        "Called someone on the phone",
      ],
      correct: "Asked someone to come",
    },
    {
      question: "What does 'decorated' mean?",
      options: [
        "Made a place look nice",
        "Cleaned a place",
        "Closed a place",
        "Painted a picture",
      ],
      correct: "Made a place look nice",
    },
    {
      question: "What does 'presents' mean?",
      options: [
        "Gifts",
        "Food",
        "Games",
        "Photos",
      ],
      correct: "Gifts",
    },
    {
      question: "What does 'candles' mean?",
      options: [
        "Small objects with a flame",
        "Small cakes",
        "Party balloons",
        "Birthday cards",
      ],
      correct: "Small objects with a flame",
    },
    {
      question: "What does 'wonderful' mean?",
      options: [
        "Very good and enjoyable",
        "Very difficult",
        "Very expensive",
        "Very noisy",
      ],
      correct: "Very good and enjoyable",
    },
  ],

  section4: [
    {
      sentence: "Emma was _____ years old.",
      correct: "eight",
    },
    {
      sentence: "They made a big chocolate _____.",
      correct: "cake",
    },
    {
      sentence: "Emma's father decorated the living room with _____.",
      correct: "balloons",
    },
    {
      sentence: "Everyone sang Happy _____ to Emma.",
      correct: "Birthday",
    },
    {
      sentence: "The children played outside in the _____.",
      correct: "garden",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "A family celebrates Emma's birthday with a party.",
        "A family goes shopping for presents.",
        "Emma has a normal day at school.",
        "A family visits their grandparents.",
      ],
      correct: "A family celebrates Emma's birthday with a party.",
    },
    {
      question: "Why was Emma happy?",
      options: [
        "She received a new bicycle.",
        "She spent her birthday with family and friends.",
        "She went to a restaurant.",
        "She did not have any homework.",
      ],
      correct: "She spent her birthday with family and friends.",
    },
    {
      question: "What did the family do after the games?",
      options: [
        "They went home.",
        "They went to the park.",
        "They sang Happy Birthday and ate cake.",
        "They watched a movie.",
      ],
      correct: "They sang Happy Birthday and ate cake.",
    },
  ],

  pdfFileName: "a1-a-birthday-party-reading.pdf",
};

export default function ABirthdayPartyPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-favorite-season"
      previousTitle="My Favorite Season"
    />
  );
}