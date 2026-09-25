"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Shopping, Money & Consumer Choices",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about shopping, prices, money, products, discounts, and everyday consumer choices.",

  section1: [
    {
      question:
        "This jacket is too expensive. I'm going to look for something more ________.",
      options: ["affordable", "crowded", "reliable", "formal"],
      correct: "affordable",
    },
    {
      question:
        "The shop is offering a 30% ________ on all winter clothes.",
      options: ["discount", "receipt", "refund", "budget"],
      correct: "discount",
    },
    {
      question:
        "I kept the ________ in case I need to return the product.",
      options: ["receipt", "price", "brand", "size"],
      correct: "receipt",
    },
    {
      question:
        "The headphones stopped working, so I asked for a ________.",
      options: ["refund", "bargain", "discount", "budget"],
      correct: "refund",
    },
    {
      question:
        "Before buying a new laptop, I always ________ prices online.",
      options: ["compare", "borrow", "deliver", "waste"],
      correct: "compare",
    },
    {
      question:
        "We need to stick to our monthly ________ and avoid unnecessary spending.",
      options: ["budget", "receipt", "brand", "purchase"],
      correct: "budget",
    },
    {
      question:
        "This washing machine is more ________ than the cheaper model.",
      options: ["reliable", "crowded", "available", "casual"],
      correct: "reliable",
    },
    {
      question:
        "I managed to get a great ________ on a second-hand bicycle.",
      options: ["bargain", "refund", "receipt", "budget"],
      correct: "bargain",
    },
  ],

  section2: {
    questions: [
      {
        word: "purchase",
        correct:
          "something that you buy, or the act of buying something",
      },
      {
        word: "consumer",
        correct:
          "a person who buys and uses goods or services",
      },
      {
        word: "quality",
        correct:
          "how good or bad something is",
      },
      {
        word: "brand",
        correct:
          "a name or design that identifies a particular company's product",
      },
      {
        word: "waste",
        correct:
          "to use money, time, or resources carelessly or unnecessarily",
      },
      {
        word: "essential",
        correct:
          "completely necessary or very important",
      },
    ],

    definitions: [
      "something that you buy, or the act of buying something",
      "a person who buys and uses goods or services",
      "how good or bad something is",
      "a name or design that identifies a particular company's product",
      "to use money, time, or resources carelessly or unnecessarily",
      "completely necessary or very important",
    ],
  },

  section3: [
    {
      question:
        "The new phone was my biggest ________ this month.",
      correct: "purchase",
    },
    {
      question:
        "A smart ________ checks product information before buying something.",
      correct: "consumer",
    },
    {
      question:
        "The price is reasonable, and the ________ of the product is excellent.",
      correct: "quality",
    },
    {
      question:
        "Which ________ of coffee do you usually buy?",
      correct: "brand",
    },
    {
      question:
        "Try not to ________ money on things you don't need.",
      correct: "waste",
    },
    {
      question:
        "Food, water, and a safe place to live are ________ for everyone.",
      correct: "essential",
    },
  ],

  section4: [
    {
      question:
        "What is a purchase?",
      options: [
        "Something you buy or the act of buying something",
        "A discount offered by a shop",
        "A document showing your identity",
        "A plan for saving money",
      ],
      correct:
        "Something you buy or the act of buying something",
    },
    {
      question:
        "What is a consumer?",
      options: [
        "A person who buys and uses goods or services",
        "A person who repairs products",
        "A person who owns a supermarket",
        "A person who delivers letters",
      ],
      correct:
        "A person who buys and uses goods or services",
    },
    {
      question:
        "What does quality describe?",
      options: [
        "How good or bad something is",
        "How much money something costs",
        "Where a product was purchased",
        "How quickly something is delivered",
      ],
      correct:
        "How good or bad something is",
    },
    {
      question:
        "What is a brand?",
      options: [
        "A name or design identifying a company's product",
        "A type of shopping receipt",
        "A method of saving money",
        "A place where customers return products",
      ],
      correct:
        "A name or design identifying a company's product",
    },
    {
      question:
        "What does essential mean?",
      options: [
        "Completely necessary or very important",
        "Very expensive but unnecessary",
        "Available only during a sale",
        "Made by a famous company",
      ],
      correct:
        "Completely necessary or very important",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'affordable' correctly?",
      options: [
        "The apartment is small but affordable.",
        "The apartment is affordable because nobody can buy it.",
        "I affordable my shopping every weekend.",
        "The shop was very affordable with customers.",
      ],
      correct:
        "The apartment is small but affordable.",
    },
    {
      question:
        "Why should you keep a receipt after buying an expensive product?",
      options: [
        "You may need it if you want to return the product.",
        "It makes the product more expensive.",
        "It guarantees a discount on every future purchase.",
        "It replaces your bank card.",
      ],
      correct:
        "You may need it if you want to return the product.",
    },
    {
      question:
        "Which situation is an example of getting a bargain?",
      options: [
        "Buying a high-quality jacket for much less than its usual price.",
        "Paying more than the normal price for a product.",
        "Buying something without checking its price.",
        "Returning a product because it is damaged.",
      ],
      correct:
        "Buying a high-quality jacket for much less than its usual price.",
    },
    {
      question:
        "Which action shows responsible consumer behavior?",
      options: [
        "Comparing prices and checking product quality before buying.",
        "Buying everything you see immediately.",
        "Ignoring the product information.",
        "Spending all your money on unnecessary items.",
      ],
      correct:
        "Comparing prices and checking product quality before buying.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "I compared several brands before choosing a new phone.",
        "I compared several brands before choose a new phone.",
        "I comparing several brands before chose a new phone.",
        "I compare several brands yesterday before choosing a new phone.",
      ],
      correct:
        "I compared several brands before choosing a new phone.",
    },
  ],

  pdfFileName:
    "b1-shopping-money-and-consumer-choices-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function ShoppingMoneyConsumerChoicesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/city-society-services"
      nextHref="/exercises/vocabulary/b1/home-living-responsibilities"
      previousTitle="City, Society & Services"
      nextTitle="Home, Living & Responsibilities"
    />
  );
}




