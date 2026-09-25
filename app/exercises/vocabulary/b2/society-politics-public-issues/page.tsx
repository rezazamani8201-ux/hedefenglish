"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Society, Politics & Public Issues",
  level: "B2 Vocabulary Worksheet",
  description:
    "Develop advanced vocabulary for society, politics, public institutions, social issues, citizenship, government, and public debate.",

  section1: [
    {
      question:
        "The government has introduced new measures to ________ unemployment among young people.",
      options: ["reduce", "withdraw", "interrupt", "allocate"],
      correct: "reduce",
    },
    {
      question:
        "Citizens have the right to ________ in national and local elections.",
      options: ["vote", "negotiate", "consume", "implement"],
      correct: "vote",
    },
    {
      question:
        "The organization is campaigning for greater social ________ between different groups.",
      options: ["equality", "authority", "revenue", "legislation"],
      correct: "equality",
    },
    {
      question:
        "The new law is expected to have a significant ________ on small businesses.",
      options: ["impact", "campaign", "election", "majority"],
      correct: "impact",
    },
    {
      question:
        "The minister announced that the government would ________ a new policy next year.",
      options: ["implement", "withdraw", "dismiss", "interrupt"],
      correct: "implement",
    },
    {
      question:
        "There has been considerable public ________ about the proposed changes to the education system.",
      options: ["debate", "revenue", "authority", "citizenship"],
      correct: "debate",
    },
    {
      question:
        "The political party won a clear ________ in the parliamentary election.",
      options: ["majority", "campaign", "policy", "institution"],
      correct: "majority",
    },
    {
      question:
        "The government needs to ________ more money to public healthcare.",
      options: ["allocate", "vote", "protest", "regulate"],
      correct: "allocate",
    },
    {
      question:
        "Thousands of people took part in a peaceful ________ against the proposed development.",
      options: ["protest", "revenue", "authority", "legislation"],
      correct: "protest",
    },
    {
      question:
        "The government plans to ________ the use of harmful chemicals in agriculture.",
      options: ["regulate", "participate", "campaign", "elect"],
      correct: "regulate",
    },
  ],

  section2: {
    questions: [
      {
        word: "legislation",
        correct:
          "laws or a group of laws officially proposed or passed by a government",
      },
      {
        word: "citizenship",
        correct:
          "the legal status of being a member of a particular country",
      },
      {
        word: "democracy",
        correct:
          "a system of government in which people choose their representatives by voting",
      },
      {
        word: "inequality",
        correct:
          "a situation in which people do not have equal rights, opportunities, or resources",
      },
      {
        word: "public services",
        correct:
          "services provided for the population, usually by the government or public organizations",
      },
      {
        word: "welfare",
        correct:
          "government support intended to help people who are unemployed, poor, or in difficult circumstances",
      },
      {
        word: "corruption",
        correct:
          "dishonest or illegal behavior by people in positions of power",
      },
      {
        word: "representative",
        correct:
          "a person chosen or elected to speak or act on behalf of others",
      },
    ],

    definitions: [
      "laws or a group of laws officially proposed or passed by a government",
      "the legal status of being a member of a particular country",
      "a system of government in which people choose their representatives by voting",
      "a situation in which people do not have equal rights, opportunities, or resources",
      "services provided for the population, usually by the government or public organizations",
      "government support intended to help people who are unemployed, poor, or in difficult circumstances",
      "dishonest or illegal behavior by people in positions of power",
      "a person chosen or elected to speak or act on behalf of others",
    ],
  },

  section3: [
    {
      question:
        "The government promised to ________ new legislation to improve road safety.",
      correct: "introduce",
    },
    {
      question:
        "Citizens should be encouraged to ________ actively in their local communities.",
      correct: "participate",
    },
    {
      question:
        "The opposition party plans to ________ the government's decision.",
      correct: "challenge",
    },
    {
      question:
        "The committee was established to ________ the issue in greater detail.",
      correct: "investigate",
    },
    {
      question:
        "The mayor wants to ________ public awareness of environmental problems.",
      correct: "raise",
    },
    {
      question:
        "The organization works to ________ equal opportunities for all members of society.",
      correct: "promote",
    },
    {
      question:
        "The government is trying to ________ the amount of money spent on unnecessary administration.",
      correct: "cut",
    },
    {
      question:
        "Many residents have called on the authorities to ________ action immediately.",
      correct: "take",
    },
  ],

  section4: [
    {
      question:
        "The new ________ will come into effect at the beginning of next year.",
      options: [
        "legislation",
        "campaign",
        "majority",
        "citizenship",
      ],
      correct: "legislation",
    },
    {
      question:
        "After living in the country for several years, she applied for ________.",
      options: [
        "citizenship",
        "inequality",
        "corruption",
        "welfare",
      ],
      correct: "citizenship",
    },
    {
      question:
        "A healthy ________ depends on citizens having a meaningful role in political life.",
      options: [
        "democracy",
        "revenue",
        "authority",
        "campaign",
      ],
      correct: "democracy",
    },
    {
      question:
        "The report highlights growing economic ________ between different regions.",
      options: [
        "inequality",
        "citizenship",
        "legislation",
        "authority",
      ],
      correct: "inequality",
    },
    {
      question:
        "Public transport and healthcare are examples of essential ________.",
      options: [
        "public services",
        "political campaigns",
        "representatives",
        "majorities",
      ],
      correct: "public services",
    },
    {
      question:
        "The government expanded its ________ program to provide financial support to low-income families.",
      options: [
        "welfare",
        "legislation",
        "campaign",
        "authority",
      ],
      correct: "welfare",
    },
  ],

  section5: [
    {
      question:
        "The investigation uncovered several cases of ________ involving senior officials.",
      options: [
        "corruption",
        "citizenship",
        "equality",
        "democracy",
      ],
      correct: "corruption",
    },
    {
      question:
        "Each elected ________ is expected to represent the interests of their local community.",
      options: [
        "representative",
        "authority",
        "majority",
        "campaign",
      ],
      correct: "representative",
    },
    {
      question:
        "The government launched a public ________ to explain the benefits of the proposed reforms.",
      options: [
        "campaign",
        "revenue",
        "welfare",
        "citizenship",
      ],
      correct: "campaign",
    },
    {
      question:
        "The city council has the ________ to approve or reject the development proposal.",
      options: [
        "authority",
        "inequality",
        "legislation",
        "democracy",
      ],
      correct: "authority",
    },
    {
      question:
        "Tax ________ is an important source of income for many governments.",
      options: [
        "revenue",
        "citizenship",
        "protest",
        "welfare",
      ],
      correct: "revenue",
    },
    {
      question:
        "The organization is working to promote greater gender ________ in the workplace.",
      options: [
        "equality",
        "authority",
        "legislation",
        "revenue",
      ],
      correct: "equality",
    },
    {
      question:
        "Several groups organized a peaceful ________ to express their opposition to the new policy.",
      options: [
        "protest",
        "majority",
        "representative",
        "institution",
      ],
      correct: "protest",
    },
    {
      question:
        "The proposal received support from a large ________ of members of parliament.",
      options: [
        "majority",
        "campaign",
        "welfare",
        "citizenship",
      ],
      correct: "majority",
    },
  ],

  pdfFileName: "b2-society-politics-public-issues-worksheet.pdf",
  pdfTemplate: "/exercises/vocabulary/family-friends/template.png",
};

export default function SocietyPoliticsPublicIssuesPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b2/travel-tourism-global-experiences"
      previousTitle="Travel, Tourism & Global Experiences"
      nextHref="/exercises/vocabulary/b2/money-business-consumer-behavior"
      nextTitle="Money, Business & Consumer Behavior"
    />
  );
}