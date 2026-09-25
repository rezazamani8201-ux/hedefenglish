"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Food, Nutrition & Lifestyle",
  level: "B2 Vocabulary Worksheet",
  description:
    "Develop advanced vocabulary for nutrition, eating habits, healthy choices, food preparation, diets, and lifestyle.",

  section1: [
    {
      question:
        "A balanced diet should provide all the essential ________ the body needs.",
      options: ["nutrients", "symptoms", "ingredients", "portions"],
      correct: "nutrients",
    },
    {
      question:
        "She has decided to ________ her consumption of processed foods.",
      options: ["reduce", "increase", "interrupt", "withdraw"],
      correct: "reduce",
    },
    {
      question:
        "People who eat a lot of fast food may consume excessive amounts of ________.",
      options: ["saturated fat", "fiber", "protein", "vitamins"],
      correct: "saturated fat",
    },
    {
      question:
        "He is trying to ________ a healthier lifestyle by exercising regularly.",
      options: ["adopt", "interrupt", "withdraw", "dismiss"],
      correct: "adopt",
    },
    {
      question:
        "The restaurant offers a wide range of vegetarian and ________ options.",
      options: ["vegan", "medical", "processed", "sedentary"],
      correct: "vegan",
    },
    {
      question:
        "She carefully checks food labels to find out the nutritional ________ of each product.",
      options: ["content", "condition", "symptom", "treatment"],
      correct: "content",
    },
    {
      question:
        "Eating smaller ________ can help people control their calorie intake.",
      options: ["portions", "symptoms", "ingredients", "nutrients"],
      correct: "portions",
    },
    {
      question:
        "He has completely ________ sugary drinks from his diet.",
      options: ["eliminated", "expanded", "increased", "maintained"],
      correct: "eliminated",
    },
    {
      question:
        "A lack of physical activity combined with an unhealthy diet can lead to ________ gain.",
      options: ["weight", "nutrient", "portion", "dietary"],
      correct: "weight",
    },
    {
      question:
        "She tries to maintain a healthy ________ between work, exercise, and relaxation.",
      options: ["balance", "ingredient", "symptom", "portion"],
      correct: "balance",
    },
  ],

  section2: {
    questions: [
      {
        word: "balanced diet",
        correct:
          "a way of eating that provides the body with the nutrients it needs in appropriate amounts",
      },
      {
        word: "processed food",
        correct:
          "food that has been changed or prepared through industrial or other methods before being eaten",
      },
      {
        word: "nutrient",
        correct:
          "a substance in food that the body needs to grow, develop, and remain healthy",
      },
      {
        word: "portion",
        correct:
          "the amount of food served to or eaten by one person",
      },
      {
        word: "calorie intake",
        correct:
          "the total amount of energy obtained from food and drink",
      },
      {
        word: "fiber",
        correct:
          "a substance found mainly in plant foods that helps maintain a healthy digestive system",
      },
      {
        word: "moderation",
        correct:
          "the practice of avoiding excessive amounts of something",
      },
      {
        word: "nutritious",
        correct:
          "containing a good amount of substances that are necessary for health",
      },
    ],

    definitions: [
      "a way of eating that provides the body with the nutrients it needs in appropriate amounts",
      "food that has been changed or prepared through industrial or other methods before being eaten",
      "a substance in food that the body needs to grow, develop, and remain healthy",
      "the amount of food served to or eaten by one person",
      "the total amount of energy obtained from food and drink",
      "a substance found mainly in plant foods that helps maintain a healthy digestive system",
      "the practice of avoiding excessive amounts of something",
      "containing a good amount of substances that are necessary for health",
    ],
  },

  section3: [
    {
      question:
        "She decided to ________ sugar from her diet for a month.",
      correct: "eliminate",
    },
    {
      question:
        "It is important to ________ enough water throughout the day.",
      correct: "consume",
    },
    {
      question:
        "He tries to ________ a healthy balance between work and personal life.",
      correct: "maintain",
    },
    {
      question:
        "You should ________ foods that are rich in vitamins and minerals.",
      correct: "include",
    },
    {
      question:
        "The nutritionist advised her to ________ her intake of salt.",
      correct: "limit",
    },
    {
      question:
        "Regular exercise can ________ a healthy diet and improve overall fitness.",
      correct: "complement",
    },
    {
      question:
        "He has learned to ________ unhealthy cravings without completely avoiding his favorite foods.",
      correct: "manage",
    },
    {
      question:
        "She wants to ________ her eating habits gradually rather than make extreme changes.",
      correct: "modify",
    },
  ],

  section4: [
    {
      question:
        "Whole grains are an excellent source of dietary ________.",
      options: ["fiber", "sugar", "fat", "sodium"],
      correct: "fiber",
    },
    {
      question:
        "The doctor recommended eating everything in ________ rather than completely avoiding certain foods.",
      options: ["moderation", "isolation", "withdrawal", "excess"],
      correct: "moderation",
    },
    {
      question:
        "Fresh vegetables are generally considered highly ________ foods.",
      options: ["nutritious", "processed", "sedentary", "artificial"],
      correct: "nutritious",
    },
    {
      question:
        "The amount of food served at the restaurant was much larger than a normal ________.",
      options: ["portion", "nutrient", "diet", "ingredient"],
      correct: "portion",
    },
    {
      question:
        "Eating too much highly ________ food may increase the risk of several health problems.",
      options: ["processed", "nutritious", "organic", "fresh"],
      correct: "processed",
    },
    {
      question:
        "The nutritionist emphasized the importance of maintaining a ________ diet.",
      options: ["balanced", "sedentary", "temporary", "restricted"],
      correct: "balanced",
    },
  ],

  section5: [
    {
      question:
        "She has become more aware of the relationship between her diet and her overall ________.",
      options: [
        "well-being",
        "withdrawal",
        "diagnosis",
        "treatment",
      ],
      correct: "well-being",
    },
    {
      question:
        "He started preparing meals at home so that he could have more control over the ________ he was consuming.",
      options: [
        "ingredients",
        "symptoms",
        "conditions",
        "treatments",
      ],
      correct: "ingredients",
    },
    {
      question:
        "The nutritionist advised him to increase his intake of foods containing healthy ________ such as those found in fish, nuts, and olive oil.",
      options: [
        "fats",
        "sugars",
        "preservatives",
        "additives",
      ],
      correct: "fats",
    },
    {
      question:
        "Rather than following an extremely restrictive diet, she decided to make gradual and ________ changes to her eating habits.",
      options: [
        "sustainable",
        "temporary",
        "confrontational",
        "irrelevant",
      ],
      correct: "sustainable",
    },
    {
      question:
        "The product contains artificial ________ that help improve its flavor and appearance.",
      options: [
        "additives",
        "nutrients",
        "fibers",
        "portions",
      ],
      correct: "additives",
    },
    {
      question:
        "He pays close attention to his calorie ________ because he is trying to manage his weight.",
      options: [
        "intake",
        "portion",
        "ingredient",
        "balance",
      ],
      correct: "intake",
    },
    {
      question:
        "A healthy lifestyle involves not only good nutrition but also regular physical activity and sufficient ________.",
      options: [
        "sleep",
        "sugar",
        "processing",
        "restriction",
      ],
      correct: "sleep",
    },
    {
      question:
        "She believes that making realistic changes is more effective than following a diet that is too ________ to maintain.",
      options: [
        "restrictive",
        "nutritious",
        "balanced",
        "flexible",
      ],
      correct: "restrictive",
    },
  ],

  pdfFileName: "b2-food-nutrition-lifestyle-worksheet.pdf",

  pdfTemplate: "/exercises/vocabulary/family-friends/template.png",
};

export default function FoodNutritionLifestylePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b2/health-medicine-well-being"
      previousTitle="Health, Medicine & Well-being"
      nextHref="/exercises/vocabulary/b2/travel-tourism-global-experiences"
      nextTitle="Travel, Tourism & Global Experiences"
    />
  );
}