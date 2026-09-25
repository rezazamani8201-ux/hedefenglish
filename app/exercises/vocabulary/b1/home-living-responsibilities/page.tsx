"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Home, Living & Responsibilities",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about homes, household tasks, living arrangements, responsibilities, and everyday life at home.",

  section1: [
    {
      question:
        "I usually ________ the kitchen after dinner.",
      options: ["clean", "make", "take", "do"],
      correct: "clean",
    },
    {
      question:
        "We need to ________ the rent before the end of the month.",
      options: ["pay", "spend", "cost", "earn"],
      correct: "pay",
    },
    {
      question:
        "My brother and I ________ the household chores.",
      options: ["share", "borrow", "waste", "save"],
      correct: "share",
    },
    {
      question:
        "The apartment is small, but it has a very ________ living room.",
      options: ["spacious", "crowded", "remote", "noisy"],
      correct: "spacious",
    },
    {
      question:
        "We are looking for a house with a large ________ where the children can play.",
      options: ["garden", "ceiling", "basement", "shelf"],
      correct: "garden",
    },
    {
      question:
        "Please ________ the dishes after you finish eating.",
      options: ["wash", "build", "rent", "decorate"],
      correct: "wash",
    },
    {
      question:
        "Our landlord agreed to ________ the broken heating system.",
      options: ["repair", "move", "share", "pack"],
      correct: "repair",
    },
    {
      question:
        "I prefer living in a quiet area because I don't like ________ neighbors.",
      options: ["noisy", "affordable", "spacious", "modern"],
      correct: "noisy",
    },
  ],

  section2: {
    questions: [
      {
        word: "household chores",
        correct:
          "regular tasks such as cleaning, washing, and cooking at home",
      },
      {
        word: "rent",
        correct:
          "money paid regularly to live in a house or apartment that belongs to someone else",
      },
      {
        word: "landlord",
        correct:
          "a person who owns a property and rents it to other people",
      },
      {
        word: "tenant",
        correct:
          "a person who pays to live in a property owned by someone else",
      },
      {
        word: "maintenance",
        correct:
          "work needed to keep a building or equipment in good condition",
      },
      {
        word: "privacy",
        correct:
          "the state of being free from unwanted attention or interference",
      },
    ],

    definitions: [
      "regular tasks such as cleaning, washing, and cooking at home",
      "money paid regularly to live in a house or apartment that belongs to someone else",
      "a person who owns a property and rents it to other people",
      "a person who pays to live in a property owned by someone else",
      "work needed to keep a building or equipment in good condition",
      "the state of being free from unwanted attention or interference",
    ],
  },

  section3: [
    {
      question:
        "Everyone in the family should help with the ________.",
      correct: "household chores",
    },
    {
      question:
        "We have to pay the ________ on the first day of every month.",
      correct: "rent",
    },
    {
      question:
        "The ________ contacted us about the heating problem.",
      correct: "landlord",
    },
    {
      question:
        "The ________ asked the landlord to repair the broken window.",
      correct: "tenant",
    },
    {
      question:
        "Regular ________ can prevent serious problems in a building.",
      correct: "maintenance",
    },
    {
      question:
        "I need some ________ when I am working from home.",
      correct: "privacy",
    },
  ],

  section4: [
    {
      question:
        "What are household chores?",
      options: [
        "Regular tasks such as cleaning and washing at home",
        "Jobs people do in an office",
        "Activities people do on holiday",
        "Repairs done only by professional builders",
      ],
      correct:
        "Regular tasks such as cleaning and washing at home",
    },
    {
      question:
        "What is rent?",
      options: [
        "Money paid regularly to live in someone else's property",
        "Money earned from selling a house",
        "The cost of repairing a car",
        "A payment made only when buying furniture",
      ],
      correct:
        "Money paid regularly to live in someone else's property",
    },
    {
      question:
        "Who is a landlord?",
      options: [
        "A person who owns a property and rents it to others",
        "A person who rents a property from someone else",
        "A person who cleans houses professionally",
        "A person who repairs electrical equipment",
      ],
      correct:
        "A person who owns a property and rents it to others",
    },
    {
      question:
        "Who is a tenant?",
      options: [
        "A person who pays to live in a property owned by someone else",
        "A person who owns several apartment buildings",
        "A person who designs houses",
        "A person who sells furniture",
      ],
      correct:
        "A person who pays to live in a property owned by someone else",
    },
    {
      question:
        "What does maintenance mean?",
      options: [
        "Work needed to keep something in good condition",
        "The process of moving to another city",
        "The cost of buying a new house",
        "A type of household decoration",
      ],
      correct:
        "Work needed to keep something in good condition",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'tenant' correctly?",
      options: [
        "The tenant pays rent to the landlord every month.",
        "The tenant owns the entire apartment building.",
        "The tenant repairs every building in the city.",
        "The tenant sells the landlord a new house.",
      ],
      correct:
        "The tenant pays rent to the landlord every month.",
    },
    {
      question:
        "Why is it important to share household chores?",
      options: [
        "It helps distribute responsibilities fairly.",
        "It makes the house more expensive.",
        "It means nobody has to clean.",
        "It allows people to avoid paying rent.",
      ],
      correct:
        "It helps distribute responsibilities fairly.",
    },
    {
      question:
        "Which situation is an example of maintenance?",
      options: [
        "Repairing a broken heating system.",
        "Buying a new suitcase for a holiday.",
        "Choosing a restaurant for dinner.",
        "Watching a movie with friends.",
      ],
      correct:
        "Repairing a broken heating system.",
    },
    {
      question:
        "Which situation is most likely to require privacy?",
      options: [
        "Working on an important project at home.",
        "Shopping in a busy supermarket.",
        "Taking a bus to the city center.",
        "Visiting a public museum.",
      ],
      correct:
        "Working on an important project at home.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "We share the household chores equally.",
        "We shares the household chores equally.",
        "We sharing the household chores equally.",
        "We shared the household chores equal.",
      ],
      correct:
        "We share the household chores equally.",
    },
  ],

  pdfFileName:
    "b1-home-living-and-responsibilities-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function HomeLivingResponsibilitiesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/shopping-money-consumer-choices"
      nextHref="/exercises/vocabulary/b1/education-skills"
      previousTitle="Shopping, Money & Consumer Choices"
      nextTitle="Education & Skills"
    />
  );
}




