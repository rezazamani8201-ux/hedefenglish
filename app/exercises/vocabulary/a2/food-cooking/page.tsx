"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Food & Cooking",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about food, cooking, meals, ingredients, and eating habits.",

  section1: [
    {
      question: "I usually have ________ for breakfast.",
      options: ["toast", "soup", "rice", "steak"],
      correct: "toast",
    },
    {
      question: "We need some ________ to make the soup.",
      options: ["vegetables", "shoes", "tickets", "books"],
      correct: "vegetables",
    },
    {
      question: "My mother is ________ dinner in the kitchen.",
      options: ["cooking", "driving", "wearing", "washing"],
      correct: "cooking",
    },
    {
      question: "Can you pass me the ________? I need to cut the bread.",
      options: ["knife", "plate", "glass", "spoon"],
      correct: "knife",
    },
    {
      question: "I would like a ________ of water, please.",
      options: ["glass", "slice", "piece", "bowl"],
      correct: "glass",
    },
    {
      question: "We usually eat dinner at the ________.",
      options: ["table", "bathroom", "bed", "office"],
      correct: "table",
    },
    {
      question: "Please put the soup in a ________.",
      options: ["bowl", "knife", "fork", "glass"],
      correct: "bowl",
    },
    {
      question: "I don't eat meat. I am a ________.",
      options: ["vegetarian", "waiter", "chef", "customer"],
      correct: "vegetarian",
    },
  ],

  section2: {
    questions: [
      {
        word: "ingredient",
        correct: "one of the foods used to make a dish",
      },
      {
        word: "recipe",
        correct: "instructions for preparing and cooking a dish",
      },
      {
        word: "meal",
        correct: "food that you eat at a particular time of day",
      },
      {
        word: "menu",
        correct: "a list of food and drinks available in a restaurant",
      },
      {
        word: "delicious",
        correct: "having a very good taste",
      },
      {
        word: "boil",
        correct: "to cook food in very hot water",
      },
    ],

    definitions: [
      "one of the foods used to make a dish",
      "instructions for preparing and cooking a dish",
      "food that you eat at a particular time of day",
      "a list of food and drinks available in a restaurant",
      "having a very good taste",
      "to cook food in very hot water",
    ],
  },

  section3: [
    {
      question: "Add some salt to the ________ to give it more taste.",
      correct: "soup",
    },
    {
      question: "I need a ________ to cut the vegetables.",
      correct: "knife",
    },
    {
      question: "She is reading a ________ before making the cake.",
      correct: "recipe",
    },
    {
      question: "We usually have our evening ________ at seven.",
      correct: "meal",
    },
    {
      question: "The food at this restaurant is really ________.",
      correct: "delicious",
    },
    {
      question: "You need to ________ the potatoes before eating them.",
      correct: "boil",
    },
  ],

  section4: [
    {
      question: "You use this to cut meat, bread, or vegetables.",
      options: ["knife", "bowl", "glass", "plate"],
      correct: "knife",
    },
    {
      question: "You follow this when you want to make a particular dish.",
      options: ["recipe", "menu", "meal", "ingredient"],
      correct: "recipe",
    },
    {
      question: "You use this to hold soup or cereal.",
      options: ["bowl", "knife", "fork", "cupboard"],
      correct: "bowl",
    },
    {
      question: "This means that food tastes very good.",
      options: ["delicious", "salty", "empty", "raw"],
      correct: "delicious",
    },
    {
      question: "These are the foods that you use to prepare a dish.",
      options: ["ingredients", "menus", "meals", "tables"],
      correct: "ingredients",
    },
  ],

  section5: [
    {
      question: "Which food is commonly eaten for breakfast?",
      options: [
        "toast",
        "steak dinner",
        "vegetable soup",
        "roast chicken",
      ],
      correct: "toast",
    },
    {
      question: "Which item do you normally use to eat soup?",
      options: ["spoon", "knife", "fork", "plate"],
      correct: "spoon",
    },
    {
      question: "What do you usually find on a restaurant menu?",
      options: [
        "food and drink choices",
        "bus schedules",
        "weather reports",
        "hotel rooms",
      ],
      correct: "food and drink choices",
    },
    {
      question: "What should you do before cooking a meal?",
      options: [
        "prepare the ingredients",
        "go to bed",
        "wash your car",
        "buy a ticket",
      ],
      correct: "prepare the ingredients",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I am cooking dinner.",
        "I am cooking the television.",
        "I am cooking the table.",
        "I am cooking the restaurant.",
      ],
      correct: "I am cooking dinner.",
    },
  ],

  pdfFileName: "a2-food-and-cooking-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function FoodAndCookingPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/health-lifestyle"
      nextHref="/exercises/vocabulary/a2/travel-holidays"
      previousTitle="Health & Lifestyle"
      nextTitle="Travel & Holidays"
    />
  );
}