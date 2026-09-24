"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "House & Chores",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about rooms, furniture, household chores, cleaning, and everyday life at home.",

  section1: [
    {
      question: "I sleep in the ________.",
      options: ["bedroom", "kitchen", "garage", "bathroom"],
      correct: "bedroom",
    },
    {
      question: "We cook food in the ________.",
      options: ["kitchen", "bedroom", "garden", "hallway"],
      correct: "kitchen",
    },
    {
      question: "I need to ________ the dishes after dinner.",
      options: ["wash", "make", "wear", "open"],
      correct: "wash",
    },
    {
      question: "There is a comfortable ________ in the living room.",
      options: ["sofa", "shower", "oven", "sink"],
      correct: "sofa",
    },
    {
      question: "Please ________ your room. It is very messy.",
      options: ["clean", "cook", "drive", "wear"],
      correct: "clean",
    },
    {
      question: "We keep our car in the ________.",
      options: ["garage", "bathroom", "bedroom", "kitchen"],
      correct: "garage",
    },
    {
      question: "I usually ________ the floor on Saturday.",
      options: ["clean", "drink", "wear", "open"],
      correct: "clean",
    },
    {
      question: "You can wash your hands in the ________.",
      options: ["sink", "sofa", "wardrobe", "carpet"],
      correct: "sink",
    },
  ],

  section2: {
    questions: [
      {
        word: "vacuum",
        correct: "to clean the floor using a machine",
      },
      {
        word: "laundry",
        correct: "clothes and other things that need to be washed",
      },
      {
        word: "furniture",
        correct: "large things such as tables, chairs, and sofas in a home",
      },
      {
        word: "wardrobe",
        correct: "a large piece of furniture used for keeping clothes",
      },
      {
        word: "tidy",
        correct: "clean and well organized",
      },
      {
        word: "messy",
        correct: "untidy and not organized",
      },
    ],

    definitions: [
      "to clean the floor using a machine",
      "clothes and other things that need to be washed",
      "large things such as tables, chairs, and sofas in a home",
      "a large piece of furniture used for keeping clothes",
      "clean and well organized",
      "untidy and not organized",
    ],
  },

  section3: [
    {
      question: "I need to ________ the living room because the floor is dirty.",
      correct: "vacuum",
    },
    {
      question: "I have a lot of ________ to do this weekend.",
      correct: "laundry",
    },
    {
      question: "The sofa and table are pieces of ________.",
      correct: "furniture",
    },
    {
      question: "My clothes are in the ________ in my bedroom.",
      correct: "wardrobe",
    },
    {
      question: "Her room is always clean and ________.",
      correct: "tidy",
    },
    {
      question: "His bedroom is very ________; clothes are everywhere.",
      correct: "messy",
    },
  ],

  section4: [
    {
      question: "You use this to clean carpets and floors.",
      options: ["vacuum", "oven", "wardrobe", "sink"],
      correct: "vacuum",
    },
    {
      question: "You put dirty clothes here before washing them.",
      options: ["laundry", "furniture", "garage", "kitchen"],
      correct: "laundry",
    },
    {
      question: "A sofa, table, and chair are examples of this.",
      options: ["furniture", "laundry", "equipment", "cleaning"],
      correct: "furniture",
    },
    {
      question: "You keep your clothes in this.",
      options: ["wardrobe", "sink", "oven", "carpet"],
      correct: "wardrobe",
    },
    {
      question: "A room with everything in the correct place is this.",
      options: ["tidy", "messy", "dirty", "noisy"],
      correct: "tidy",
    },
  ],

  section5: [
    {
      question: "Which chore do you normally do with dirty clothes?",
      options: [
        "do the laundry",
        "make the bed",
        "wash the car",
        "clean the window",
      ],
      correct: "do the laundry",
    },
    {
      question: "Where do you usually keep clothes?",
      options: [
        "in a wardrobe",
        "in a sink",
        "in an oven",
        "in a garage",
      ],
      correct: "in a wardrobe",
    },
    {
      question: "Which room is normally used for cooking?",
      options: [
        "the kitchen",
        "the bedroom",
        "the bathroom",
        "the garage",
      ],
      correct: "the kitchen",
    },
    {
      question: "What should you do when your room is messy?",
      options: [
        "tidy it",
        "cook it",
        "wear it",
        "drive it",
      ],
      correct: "tidy it",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I wash the dishes after dinner.",
        "I wash the sofa after dinner.",
        "I wash the wardrobe after dinner.",
        "I wash the bedroom after dinner.",
      ],
      correct: "I wash the dishes after dinner.",
    },
  ],

  pdfFileName: "a2-house-and-chores-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function HouseAndChoresPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/shopping-fashion"
      nextHref="/exercises/vocabulary/a2/education-learning"
      previousTitle="Shopping & Fashion"
      nextTitle="Education & Learning"
    />
  );
}