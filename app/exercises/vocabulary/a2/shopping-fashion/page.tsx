"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Shopping & Fashion",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about shopping, clothes, prices, sizes, and fashion.",

  section1: [
    {
      question: "I need a new pair of ________ for summer.",
      options: ["sandals", "gloves", "scarf", "coat"],
      correct: "sandals",
    },
    {
      question: "Can I ________ this shirt on?",
      options: ["try", "take", "make", "do"],
      correct: "try",
    },
    {
      question: "This jacket is too expensive. It costs 200 ________.",
      options: ["liras", "meters", "liters", "hours"],
      correct: "liras",
    },
    {
      question: "What ________ are these trousers?",
      options: ["size", "price", "color", "shop"],
      correct: "size",
    },
    {
      question: "The opposite of expensive is ________.",
      options: ["cheap", "large", "modern", "comfortable"],
      correct: "cheap",
    },
    {
      question: "She is wearing a beautiful red ________.",
      options: ["dress", "belt", "shoe", "hat"],
      correct: "dress",
    },
    {
      question: "I like these jeans, but they are too ________ for me.",
      options: ["tight", "cheap", "soft", "short"],
      correct: "tight",
    },
    {
      question: "The shop is having a big ________ this weekend.",
      options: ["sale", "size", "receipt", "customer"],
      correct: "sale",
    },
  ],

  section2: {
    questions: [
      {
        word: "customer",
        correct: "a person who buys something from a shop",
      },
      {
        word: "receipt",
        correct: "a piece of paper showing what you bought and paid for",
      },
      {
        word: "sale",
        correct: "a time when shops sell things at lower prices",
      },
      {
        word: "size",
        correct: "how big or small something is",
      },
      {
        word: "comfortable",
        correct: "feeling good and relaxed when wearing or using something",
      },
      {
        word: "fashionable",
        correct: "popular and attractive in a particular period",
      },
    ],

    definitions: [
      "a person who buys something from a shop",
      "a piece of paper showing what you bought and paid for",
      "a time when shops sell things at lower prices",
      "how big or small something is",
      "feeling good and relaxed when wearing or using something",
      "popular and attractive in a particular period",
    ],
  },

  section3: [
    {
      question: "The ________ asked the shop assistant for a different size.",
      correct: "customer",
    },
    {
      question: "Keep the ________ in case you want to return the shirt.",
      correct: "receipt",
    },
    {
      question: "I bought these shoes during the summer ________.",
      correct: "sale",
    },
    {
      question: "What ________ do you need: small, medium, or large?",
      correct: "size",
    },
    {
      question: "These shoes are very soft and ________.",
      correct: "comfortable",
    },
    {
      question: "She always wears modern and ________ clothes.",
      correct: "fashionable",
    },
  ],

  section4: [
    {
      question: "You want to know if a pair of trousers fits you.",
      options: ["try them on", "pay them", "cook them", "wash them"],
      correct: "try them on",
    },
    {
      question: "You buy something for a lower price during this.",
      options: ["sale", "receipt", "size", "customer"],
      correct: "sale",
    },
    {
      question: "You need this paper after buying something.",
      options: ["receipt", "fashion", "size", "label"],
      correct: "receipt",
    },
    {
      question: "These shoes feel good when you walk in them.",
      options: ["comfortable", "expensive", "tight", "old"],
      correct: "comfortable",
    },
    {
      question: "You want to know whether you need medium or large.",
      options: ["size", "price", "sale", "receipt"],
      correct: "size",
    },
  ],

  section5: [
    {
      question: "What do you usually do before buying a jacket?",
      options: [
        "try it on",
        "cook it",
        "read it",
        "drink it",
      ],
      correct: "try it on",
    },
    {
      question: "What can you use to prove that you bought something?",
      options: [
        "a receipt",
        "a suitcase",
        "a menu",
        "a passport",
      ],
      correct: "a receipt",
    },
    {
      question: "What does 'cheap' mean?",
      options: [
        "not expensive",
        "very large",
        "very fashionable",
        "uncomfortable",
      ],
      correct: "not expensive",
    },
    {
      question: "Which item do you usually wear on your feet?",
      options: [
        "shoes",
        "scarf",
        "hat",
        "shirt",
      ],
      correct: "shoes",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "These trousers are too tight.",
        "These trousers are too delicious.",
        "These trousers are too thirsty.",
        "These trousers are too noisy.",
      ],
      correct: "These trousers are too tight.",
    },
  ],

  pdfFileName: "a2-shopping-and-fashion-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function ShoppingAndFashionPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/city-services"
      nextHref="/exercises/vocabulary/a2/house-chores"
      previousTitle="City & Services"
      nextTitle="House & Chores"
    />
  );
}