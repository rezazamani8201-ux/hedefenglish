"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Food, Cooking & Eating Habits",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about food, cooking methods, eating habits, ingredients, nutrition, and meals.",

  section1: [
    {
      question:
        "I'm trying to eat more healthily, so I have reduced the amount of sugar I ________.",
      options: ["consume", "prepare", "serve", "boil"],
      correct: "consume",
    },
    {
      question:
        "Before cooking the vegetables, wash them thoroughly and ________ them into small pieces.",
      options: ["chop", "pour", "bake", "freeze"],
      correct: "chop",
    },
    {
      question:
        "This soup is too salty. You should ________ some water to it.",
      options: ["add", "slice", "grill", "peel"],
      correct: "add",
    },
    {
      question:
        "Chicken should be cooked thoroughly to avoid the risk of food ________.",
      options: ["poisoning", "recipe", "portion", "flavor"],
      correct: "poisoning",
    },
    {
      question:
        "She prefers to ________ vegetables rather than fry them because it uses less oil.",
      options: ["steam", "slice", "pour", "mix"],
      correct: "steam",
    },
    {
      question:
        "The restaurant serves very large ________, so we usually share one meal.",
      options: ["portions", "ingredients", "recipes", "dishes"],
      correct: "portions",
    },
    {
      question:
        "The recipe says to ________ the cake in the oven for about thirty minutes.",
      options: ["bake", "peel", "pour", "chop"],
      correct: "bake",
    },
    {
      question:
        "Fresh herbs can give a dish a wonderful ________.",
      options: ["flavor", "portion", "ingredient", "diet"],
      correct: "flavor",
    },
  ],

  section2: {
    questions: [
      {
        word: "ingredient",
        correct:
          "one of the foods or substances used to make a particular dish",
      },
      {
        word: "portion",
        correct:
          "the amount of food served to one person at one time",
      },
      {
        word: "recipe",
        correct:
          "a set of instructions explaining how to prepare a particular dish",
      },
      {
        word: "nutritious",
        correct:
          "containing substances that are good for your health",
      },
      {
        word: "consume",
        correct:
          "to eat or drink something",
      },
      {
        word: "leftovers",
        correct:
          "food that remains after a meal and can be eaten later",
      },
    ],

    definitions: [
      "one of the foods or substances used to make a particular dish",
      "the amount of food served to one person at one time",
      "a set of instructions explaining how to prepare a particular dish",
      "containing substances that are good for your health",
      "to eat or drink something",
      "food that remains after a meal and can be eaten later",
    ],
  },

  section3: [
    {
      question:
        "Garlic is an important ________ in many traditional dishes.",
      correct: "ingredient",
    },
    {
      question:
        "The restaurant gave us such a large ________ that we couldn't finish it.",
      correct: "portion",
    },
    {
      question:
        "I found a great ________ for homemade bread online.",
      correct: "recipe",
    },
    {
      question:
        "Nuts, vegetables, and fish can all be part of a ________ diet.",
      correct: "nutritious",
    },
    {
      question:
        "People should avoid ________ too much processed food.",
      correct: "consuming",
    },
    {
      question:
        "We had some ________ from dinner, so we didn't need to cook lunch.",
      correct: "leftovers",
    },
  ],

  section4: [
    {
      question:
        "What is an ingredient?",
      options: [
        "A food or substance used to make a dish",
        "A type of cooking equipment",
        "A place where food is served",
        "A person who prepares meals",
      ],
      correct: "A food or substance used to make a dish",
    },
    {
      question:
        "What does portion mean?",
      options: [
        "The amount of food served to one person",
        "The instructions for preparing food",
        "The taste of a particular dish",
        "The temperature of an oven",
      ],
      correct: "The amount of food served to one person",
    },
    {
      question:
        "What is a recipe?",
      options: [
        "Instructions for preparing a dish",
        "A type of vegetable",
        "A cooking utensil",
        "A restaurant menu",
      ],
      correct: "Instructions for preparing a dish",
    },
    {
      question:
        "What does nutritious mean?",
      options: [
        "Containing substances that are good for your health",
        "Very expensive to prepare",
        "Extremely spicy",
        "Difficult to cook",
      ],
      correct:
        "Containing substances that are good for your health",
    },
    {
      question:
        "What are leftovers?",
      options: [
        "Food remaining after a meal",
        "Fresh ingredients from a supermarket",
        "Food that has never been cooked",
        "Instructions in a recipe",
      ],
      correct: "Food remaining after a meal",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'ingredient' correctly?",
      options: [
        "Olive oil is an important ingredient in this salad.",
        "I ingredient my breakfast every morning.",
        "She bought an ingredient at the cinema.",
        "The restaurant ingredient was very crowded.",
      ],
      correct:
        "Olive oil is an important ingredient in this salad.",
    },
    {
      question:
        "Which cooking method uses hot water vapor?",
      options: [
        "steaming",
        "grilling",
        "baking",
        "frying",
      ],
      correct: "steaming",
    },
    {
      question:
        "Which person is most likely to be following a nutritious diet?",
      options: [
        "Someone who eats a variety of vegetables, fruit, whole grains, and protein.",
        "Someone who eats only sweets every day.",
        "Someone who never drinks water.",
        "Someone who eats fast food at every meal.",
      ],
      correct:
        "Someone who eats a variety of vegetables, fruit, whole grains, and protein.",
    },
    {
      question:
        "Why might someone save leftovers?",
      options: [
        "They can eat the remaining food later instead of throwing it away.",
        "They want to make the food less fresh immediately.",
        "They want to increase the amount of salt in the meal.",
        "They want to replace every ingredient.",
      ],
      correct:
        "They can eat the remaining food later instead of throwing it away.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "This recipe requires two eggs and a cup of flour.",
        "This recipe requires two eggs and a cup for flour.",
        "This recipe requires two eggs and a cup at flour.",
        "This recipe requires two eggs and a cup on flour.",
      ],
      correct:
        "This recipe requires two eggs and a cup of flour.",
    },
  ],

  pdfFileName:
    "b1-food-cooking-and-eating-habits-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function FoodCookingEatingHabitsPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/health-well-being"
      nextHref="/exercises/vocabulary/b1/travel-experiences"
      previousTitle="Health & Well-being"
      nextTitle="Travel & Experiences"
    />
  );
}




