import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Favorite Food",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Mia, and I love food. My favorite food is pizza. I like pizza because there are many different kinds, and I can choose my favorite toppings.

My favorite pizza has cheese, tomatoes, mushrooms, and olives. I also like chicken pizza, but I do not like very spicy food. My mother sometimes makes pizza at home. We make the dough together and then add the toppings. The kitchen smells wonderful when the pizza is in the oven.

I also enjoy eating pasta. My favorite pasta is spaghetti with tomato sauce. I usually eat it with a little cheese on top. For breakfast, I like eggs, bread, and fruit. I usually drink orange juice or milk.

At weekends, my family sometimes goes to a small restaurant near our house. I usually order pizza or pasta there. My father likes steak, and my mother usually orders a salad.

I think eating together is very nice because we can talk, laugh, and enjoy our meal. Food is even better when I share it with my family.`,

  section1: [
    {
      question: "What is Mia's favorite food?",
      options: ["Pizza", "Pasta", "Steak", "Salad"],
      correct: "Pizza",
    },
    {
      question: "Which topping does Mia like on her pizza?",
      options: ["Bananas", "Mushrooms", "Potatoes", "Fish"],
      correct: "Mushrooms",
    },
    {
      question: "Who sometimes makes pizza at home?",
      options: [
        "Mia and her father",
        "Mia and her mother",
        "Mia and her sister",
        "Mia and her friend",
      ],
      correct: "Mia and her mother",
    },
    {
      question: "What does Mia usually drink for breakfast?",
      options: ["Coffee", "Tea", "Orange juice or milk", "Water"],
      correct: "Orange juice or milk",
    },
    {
      question: "What does Mia's father usually order at the restaurant?",
      options: ["Pizza", "Pasta", "Salad", "Steak"],
      correct: "Steak",
    },
  ],

  section2: [
    {
      statement: "Mia likes very spicy food.",
      correct: "False",
    },
    {
      statement: "Mia sometimes makes pizza with her mother.",
      correct: "True",
    },
    {
      statement: "Mia likes spaghetti with tomato sauce.",
      correct: "True",
    },
    {
      statement: "Mia's mother usually orders steak.",
      correct: "False",
    },
    {
      statement: "Mia enjoys eating with her family.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'topping' mean?",
      options: [
        "Food put on top of pizza",
        "A kind of drink",
        "A kitchen machine",
        "A type of restaurant",
      ],
      correct: "Food put on top of pizza",
    },
    {
      question: "What does 'dough' mean?",
      options: [
        "A type of cheese",
        "A mixture used to make bread or pizza",
        "A kind of vegetable",
        "A kitchen table",
      ],
      correct: "A mixture used to make bread or pizza",
    },
    {
      question: "What does 'spicy' mean?",
      options: [
        "Having a hot or strong taste",
        "Very sweet",
        "Very cold",
        "Very soft",
      ],
      correct: "Having a hot or strong taste",
    },
    {
      question: "What does 'meal' mean?",
      options: [
        "A time when you eat food",
        "A kitchen tool",
        "A restaurant worker",
        "A type of fruit",
      ],
      correct: "A time when you eat food",
    },
    {
      question: "What does 'share' mean?",
      options: [
        "Keep something for yourself",
        "Give part of something to others",
        "Cook something alone",
        "Buy something expensive",
      ],
      correct: "Give part of something to others",
    },
  ],

  section4: [
    {
      sentence: "Mia's favorite food is _____.",
      correct: "pizza",
    },
    {
      sentence: "Her favorite pizza has cheese, tomatoes, mushrooms, and _____.",
      correct: "olives",
    },
    {
      sentence: "Mia's mother sometimes makes pizza at _____.",
      correct: "home",
    },
    {
      sentence: "Mia likes spaghetti with tomato _____.",
      correct: "sauce",
    },
    {
      sentence: "Mia's family sometimes goes to a small _____ at weekends.",
      correct: "restaurant",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Mia talks about her favorite foods and eating with her family.",
        "Mia explains how to open a restaurant.",
        "Mia talks about her school.",
        "Mia describes a trip to another country.",
      ],
      correct:
        "Mia talks about her favorite foods and eating with her family.",
    },
    {
      question: "Why does Mia like eating with her family?",
      options: [
        "They always eat expensive food.",
        "They can talk, laugh, and enjoy their meal together.",
        "Her mother always cooks pizza.",
        "Her father only eats steak.",
      ],
      correct:
        "They can talk, laugh, and enjoy their meal together.",
    },
    {
      question: "Which food does Mia NOT like?",
      options: [
        "Pizza",
        "Pasta",
        "Very spicy food",
        "Fruit",
      ],
      correct: "Very spicy food",
    },
  ],

  pdfFileName: "a1-my-favorite-food-reading.pdf",
};

export default function MyFavoriteFoodPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-house"
      previousTitle="My House"
      nextHref="/exercises/reading/a1/a-day-at-the-park"
      nextTitle="A Day at the Park"
    />
  );
}