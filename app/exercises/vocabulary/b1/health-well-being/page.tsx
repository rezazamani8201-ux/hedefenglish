"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Health & Well-being",
  level: "B1 Vocabulary Worksheet",
  description:
    "Learn and practice useful B1 vocabulary about health, exercise, nutrition, symptoms, treatment, and general well-being.",

  section1: [
    {
      question:
        "Regular exercise can help you ________ your physical and mental health.",
      options: ["improve", "damage", "prevent", "avoid"],
      correct: "improve",
    },
    {
      question:
        "The doctor advised me to ________ more water during the day.",
      options: ["drink", "take", "make", "carry"],
      correct: "drink",
    },
    {
      question:
        "She has been feeling tired recently, so she decided to ________ a doctor.",
      options: ["see", "watch", "look", "visit to"],
      correct: "see",
    },
    {
      question:
        "Eating too much sugar can have a negative ________ on your health.",
      options: ["effect", "result", "reason", "condition"],
      correct: "effect",
    },
    {
      question:
        "He goes running three times a week to stay ________.",
      options: ["fit", "ill", "weak", "injured"],
      correct: "fit",
    },
    {
      question:
        "You should get enough sleep if you want to feel ________ during the day.",
      options: ["energetic", "harmful", "painful", "infected"],
      correct: "energetic",
    },
    {
      question:
        "The doctor prescribed some medicine to ________ the pain.",
      options: ["relieve", "increase", "cause", "spread"],
      correct: "relieve",
    },
    {
      question:
        "A balanced diet provides your body with the nutrients it ________.",
      options: ["needs", "loses", "refuses", "avoids"],
      correct: "needs",
    },
  ],

  section2: {
    questions: [
      {
        word: "symptom",
        correct:
          "a change in your body that shows you may have an illness",
      },
      {
        word: "treatment",
        correct:
          "medical care given to someone for an illness or injury",
      },
      {
        word: "recovery",
        correct:
          "the process of becoming healthy again after an illness or injury",
      },
      {
        word: "balanced diet",
        correct:
          "a way of eating that provides the body with all the nutrients it needs",
      },
      {
        word: "immune system",
        correct:
          "the part of the body that protects it from infections and diseases",
      },
      {
        word: "well-being",
        correct:
          "the state of being healthy, comfortable, and satisfied",
      },
    ],

    definitions: [
      "a change in your body that shows you may have an illness",
      "medical care given to someone for an illness or injury",
      "the process of becoming healthy again after an illness or injury",
      "a way of eating that provides the body with all the nutrients it needs",
      "the part of the body that protects it from infections and diseases",
      "the state of being healthy, comfortable, and satisfied",
    ],
  },

  section3: [
    {
      question:
        "A high temperature can be a ________ of an infection.",
      correct: "symptom",
    },
    {
      question:
        "The doctor recommended a different ________ because the first one did not work.",
      correct: "treatment",
    },
    {
      question:
        "It took him several weeks to make a full ________ after the operation.",
      correct: "recovery",
    },
    {
      question:
        "A ________ should include a variety of healthy foods.",
      correct: "balanced diet",
    },
    {
      question:
        "A strong ________ helps your body fight infections.",
      correct: "immune system",
    },
    {
      question:
        "Regular exercise can improve both physical health and mental ________.",
      correct: "well-being",
    },
  ],

  section4: [
    {
      question: "What is a symptom?",
      options: [
        "A change in your body that may show you are ill",
        "A type of healthy food",
        "A medical building",
        "A form of exercise",
      ],
      correct:
        "A change in your body that may show you are ill",
    },
    {
      question: "What does treatment mean?",
      options: [
        "Medical care for an illness or injury",
        "A regular exercise routine",
        "A healthy meal",
        "A medical qualification",
      ],
      correct: "Medical care for an illness or injury",
    },
    {
      question: "What does recovery mean?",
      options: [
        "The process of becoming healthy again",
        "The beginning of an illness",
        "A sudden injury",
        "A type of medicine",
      ],
      correct: "The process of becoming healthy again",
    },
    {
      question: "What is a balanced diet?",
      options: [
        "A diet containing the nutrients your body needs",
        "A diet consisting only of fruit",
        "A diet without any water",
        "A diet based only on fast food",
      ],
      correct:
        "A diet containing the nutrients your body needs",
    },
    {
      question:
        "What is the immune system responsible for?",
      options: [
        "Protecting the body from infections and diseases",
        "Helping people learn languages",
        "Controlling the weather",
        "Producing healthy meals",
      ],
      correct:
        "Protecting the body from infections and diseases",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'symptom' correctly?",
      options: [
        "A sore throat can be a symptom of an infection.",
        "I symptom to work every morning.",
        "She bought a symptom at the supermarket.",
        "He symptom his homework yesterday.",
      ],
      correct:
        "A sore throat can be a symptom of an infection.",
    },
    {
      question:
        "Why is regular exercise important?",
      options: [
        "It can improve physical and mental health.",
        "It always causes illness.",
        "It prevents people from sleeping.",
        "It means you never need healthy food.",
      ],
      correct:
        "It can improve physical and mental health.",
    },
    {
      question:
        "Which person is following a balanced lifestyle?",
      options: [
        "Someone who exercises, eats well, sleeps enough, and makes time to relax.",
        "Someone who never sleeps and eats only fast food.",
        "Someone who works every day without taking breaks.",
        "Someone who avoids all physical activity.",
      ],
      correct:
        "Someone who exercises, eats well, sleeps enough, and makes time to relax.",
    },
    {
      question:
        "What can help support a healthy immune system?",
      options: [
        "A healthy diet, enough sleep, and regular physical activity.",
        "Sleeping only two hours every night.",
        "Eating unhealthy food every day.",
        "Avoiding all physical activity.",
      ],
      correct:
        "A healthy diet, enough sleep, and regular physical activity.",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "It took her several weeks to recover from the illness.",
        "It took her several weeks to recovery from the illness.",
        "It took her several weeks recovering from the illness.",
        "It took her several weeks for recover from the illness.",
      ],
      correct:
        "It took her several weeks to recover from the illness.",
    },
  ],

  pdfFileName: "b1-health-and-well-being-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function HealthWellBeingPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/lifestyle-personal-development"
      nextHref="/exercises/vocabulary/b1/food-cooking-eating-habits"
      previousTitle="Lifestyle & Personal Development"
      nextTitle="Food, Cooking & Well-being"
    />
  );
}