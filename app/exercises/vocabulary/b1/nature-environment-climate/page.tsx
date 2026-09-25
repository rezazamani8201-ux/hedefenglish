"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Nature, Environment & Climate",
  level: "B1 Vocabulary Worksheet",
  
  description:
    "Learn and practice useful B1 vocabulary about nature, the environment, climate change, pollution, wildlife, and sustainable living.",

  section1: [
    {
      question:
        "We should reduce the amount of plastic we ________ every day.",
      options: ["waste", "protect", "recycle", "plant"],
      correct: "waste",
    },
    {
      question:
        "Many animals are losing their natural ________ because of construction.",
      options: ["habitat", "climate", "recycle", "energy"],
      correct: "habitat",
    },
    {
      question:
        "Factories can cause serious air ________ in large cities.",
      options: ["pollution", "recycling", "wildlife", "drought"],
      correct: "pollution",
    },
    {
      question:
        "Using public transport can help ________ carbon emissions.",
      options: ["reduce", "destroy", "increase", "collect"],
      correct: "reduce",
    },
    {
      question:
        "We should ________ more trees to improve the local environment.",
      options: ["plant", "waste", "burn", "damage"],
      correct: "plant",
    },
    {
      question:
        "The region suffered from a long ________ and had very little rain.",
      options: ["drought", "flood", "storm", "forest"],
      correct: "drought",
    },
    {
      question:
        "The government is trying to ________ endangered animals.",
      options: ["protect", "pollute", "waste", "remove"],
      correct: "protect",
    },
    {
      question:
        "Solar and wind power are examples of renewable ________.",
      options: ["energy", "habitat", "waste", "climate"],
      correct: "energy",
    },
  ],

  section2: {
    questions: [
      {
        word: "climate change",
        correct:
          "long-term changes in the Earth's usual weather patterns",
      },
      {
        word: "endangered",
        correct:
          "at risk of disappearing because there are very few of a particular animal or plant left",
      },
      {
        word: "recycle",
        correct:
          "to process used materials so they can be used again",
      },
      {
        word: "renewable",
        correct:
          "able to be naturally replaced and used again without running out quickly",
      },
      {
        word: "carbon emissions",
        correct:
          "gases containing carbon that are released into the atmosphere",
      },
      {
        word: "sustainable",
        correct:
          "able to continue for a long time without causing serious damage to the environment",
      },
    ],

    definitions: [
      "long-term changes in the Earth's usual weather patterns",
      "at risk of disappearing because there are very few of a particular animal or plant left",
      "to process used materials so they can be used again",
      "able to be naturally replaced and used again without running out quickly",
      "gases containing carbon that are released into the atmosphere",
      "able to continue for a long time without causing serious damage to the environment",
    ],
  },

  section3: [
    {
      question:
        "Scientists are studying how ________ is affecting temperatures around the world.",
      correct: "climate change",
    },
    {
      question:
        "Several ________ species are protected by international laws.",
      correct: "endangered",
    },
    {
      question:
        "We should ________ paper, glass, and plastic whenever possible.",
      correct: "recycle",
    },
    {
      question:
        "Solar power is a ________ source of energy.",
      correct: "renewable",
    },
    {
      question:
        "Reducing car use can help lower ________.",
      correct: "carbon emissions",
    },
    {
      question:
        "We need more ________ ways of producing and using energy.",
      correct: "sustainable",
    },
  ],

  section4: [
    {
      question:
        "What is climate change?",
      options: [
        "Long-term changes in the Earth's usual weather patterns",
        "A sudden change in the temperature during one afternoon",
        "The process of recycling plastic",
        "The movement of animals between countries",
      ],
      correct:
        "Long-term changes in the Earth's usual weather patterns",
    },
    {
      question:
        "What does endangered mean?",
      options: [
        "At risk of disappearing",
        "Living only in cold places",
        "Able to reproduce very quickly",
        "Protected from all types of weather",
      ],
      correct: "At risk of disappearing",
    },
    {
      question:
        "What does recycle mean?",
      options: [
        "To process used materials so they can be used again",
        "To throw everything into the same bin",
        "To produce more plastic",
        "To destroy natural habitats",
      ],
      correct:
        "To process used materials so they can be used again",
    },
    {
      question:
        "What does renewable mean?",
      options: [
        "Able to be naturally replaced and used again",
        "Available only once",
        "Very expensive to produce",
        "Dangerous for all living things",
      ],
      correct:
        "Able to be naturally replaced and used again",
    },
    {
      question:
        "What does sustainable mean?",
      options: [
        "Able to continue without causing serious environmental damage",
        "Something that uses as much energy as possible",
        "Something that can only be used for a short time",
        "Something that always produces more waste",
      ],
      correct:
        "Able to continue without causing serious environmental damage",
    },
  ],

  section5: [
    {
      question:
        "Which action can help reduce pollution?",
      options: [
        "Using public transport instead of driving whenever possible",
        "Burning more fossil fuels",
        "Throwing plastic into rivers",
        "Using more disposable products",
      ],
      correct:
        "Using public transport instead of driving whenever possible",
    },
    {
      question:
        "Why is protecting natural habitats important?",
      options: [
        "They provide animals and plants with places to live.",
        "They make cities more crowded.",
        "They increase the amount of plastic waste.",
        "They prevent people from recycling.",
      ],
      correct:
        "They provide animals and plants with places to live.",
    },
    {
      question:
        "Which example shows sustainable behavior?",
      options: [
        "Using renewable energy and reducing unnecessary waste.",
        "Leaving lights on all day.",
        "Buying more products than you need.",
        "Throwing recyclable materials away.",
      ],
      correct:
        "Using renewable energy and reducing unnecessary waste.",
    },
    {
      question:
        "Which sentence uses 'endangered' correctly?",
      options: [
        "The tiger is an endangered species.",
        "The tiger endangered the recycling bin.",
        "We endangered the newspaper every morning.",
        "She bought an endangered at the supermarket.",
      ],
      correct:
        "The tiger is an endangered species.",
    },
    {
      question:
        "Which sentence is grammatically correct?",
      options: [
        "We need to reduce our carbon emissions.",
        "We need reducing our carbon emissions.",
        "We need to reduced our carbon emissions.",
        "We need reduce our carbon emissions yesterday.",
      ],
      correct:
        "We need to reduce our carbon emissions.",
    },
  ],

  pdfFileName:
    "b1-nature-environment-and-climate-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function NatureEnvironmentClimatePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/technology-media-communication"
      nextHref="/exercises/vocabulary/b1/entertainment-culture-leisure"
      previousTitle="Technology, Media & Communication"
      nextTitle="Entertainment, Culture & Leisure"
    />
  );
}




