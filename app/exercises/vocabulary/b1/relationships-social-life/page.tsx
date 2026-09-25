"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Relationships & Social Life",

  level: "B1 Vocabulary Worksheet",

  description:
    "Learn and practice useful B1 vocabulary about relationships, friendship, communication, social life, and personal connections.",

  section1: [
    {
      question:
        "I've known Sarah for years. We first ________ when we were at university.",
      options: ["met", "joined", "attended", "introduced"],
      correct: "met",
    },
    {
      question:
        "Tom and I have a lot ________. We enjoy the same kind of music and films.",
      options: ["in common", "in touch", "by heart", "on time"],
      correct: "in common",
    },
    {
      question:
        "We don't see each other very often, but we always keep ________ by phone.",
      options: ["in touch", "in common", "together", "close"],
      correct: "in touch",
    },
    {
      question:
        "My sister and I are very close. We always ________ each other when we have problems.",
      options: ["support", "avoid", "argue", "cancel"],
      correct: "support",
    },
    {
      question:
        "They had an argument, but they eventually ________ and became friends again.",
      options: ["made up", "gave up", "turned up", "looked up"],
      correct: "made up",
    },
    {
      question:
        "I don't know many people in my new neighborhood, so I'm trying to ________ new friends.",
      options: ["make", "do", "take", "build"],
      correct: "make",
    },
    {
      question:
        "She is very ________. You can always trust her to keep a secret.",
      options: ["reliable", "selfish", "impatient", "careless"],
      correct: "reliable",
    },
    {
      question:
        "He doesn't like large parties because he is quite ________ and prefers spending time alone.",
      options: ["reserved", "generous", "confident", "outgoing"],
      correct: "reserved",
    },
  ],

  section2: {
    questions: [
      {
        word: "acquaintance",
        correct:
          "a person you know but who is not a close friend",
      },
      {
        word: "reliable",
        correct:
          "someone you can trust to do what they promise",
      },
      {
        word: "supportive",
        correct:
          "helpful and encouraging when someone has difficulties",
      },
      {
        word: "argument",
        correct:
          "a disagreement between people, often involving angry words",
      },
      {
        word: "compromise",
        correct:
          "an agreement in which each person accepts less than they originally wanted",
      },
      {
        word: "outgoing",
        correct:
          "friendly and confident when meeting and talking to people",
      },
    ],

    definitions: [
      "a person you know but who is not a close friend",
      "someone you can trust to do what they promise",
      "helpful and encouraging when someone has difficulties",
      "a disagreement between people, often involving angry words",
      "an agreement in which each person accepts less than they originally wanted",
      "friendly and confident when meeting and talking to people",
    ],
  },

  section3: [
    {
      question:
        "Maria is a very ________ friend. She always helps me when I need advice.",
      correct: "supportive",
    },
    {
      question:
        "I know him from work, but he's only an ________, not a close friend.",
      correct: "acquaintance",
    },
    {
      question:
        "You can depend on James because he is extremely ________.",
      correct: "reliable",
    },
    {
      question:
        "They had an ________ about money and stopped speaking to each other.",
      correct: "argument",
    },
    {
      question:
        "Neither side got everything they wanted, but they reached a ________.",
      correct: "compromise",
    },
    {
      question:
        "Anna is very ________ and enjoys talking to new people at parties.",
      correct: "outgoing",
    },
  ],

  section4: [
    {
      question:
        "What do we call a person we know, but who is not a close friend?",
      options: [
        "acquaintance",
        "relative",
        "neighbor",
        "partner",
      ],
      correct: "acquaintance",
    },
    {
      question:
        "Which word describes someone who can be trusted to do what they promise?",
      options: [
        "reliable",
        "jealous",
        "awkward",
        "selfish",
      ],
      correct: "reliable",
    },
    {
      question:
        "Which word describes someone who helps and encourages you when you have problems?",
      options: [
        "supportive",
        "reserved",
        "careless",
        "impatient",
      ],
      correct: "supportive",
    },
    {
      question:
        "What is an argument?",
      options: [
        "A disagreement between people",
        "A friendly introduction",
        "A social invitation",
        "A long journey",
      ],
      correct: "A disagreement between people",
    },
    {
      question:
        "What does it mean to reach a compromise?",
      options: [
        "To find an agreement where both sides accept less",
        "To completely avoid a problem",
        "To win an argument",
        "To end a friendship",
      ],
      correct: "To find an agreement where both sides accept less",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'in touch' correctly?",
      options: [
        "We still keep in touch even though we live in different countries.",
        "We keep in touch the homework every evening.",
        "She put the book in touch on the table.",
        "He went in touch to the supermarket.",
      ],
      correct:
        "We still keep in touch even though we live in different countries.",
    },
    {
      question:
        "What does 'make up' mean in this sentence: 'They argued yesterday, but they made up today.'?",
      options: [
        "They became friends again.",
        "They met for the first time.",
        "They moved to another city.",
        "They stopped talking forever.",
      ],
      correct: "They became friends again.",
    },
    {
      question:
        "Which person is most likely to be described as outgoing?",
      options: [
        "Someone who enjoys meeting and talking to new people.",
        "Someone who avoids speaking to everyone.",
        "Someone who never leaves their house.",
        "Someone who dislikes social situations.",
      ],
      correct:
        "Someone who enjoys meeting and talking to new people.",
    },
    {
      question:
        "Which sentence describes a healthy friendship?",
      options: [
        "We listen to each other and support one another.",
        "I never listen when my friend has a problem.",
        "We always try to make each other jealous.",
        "I only speak to my friend when I need money.",
      ],
      correct:
        "We listen to each other and support one another.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "We have a lot in common.",
        "We have a lot on common.",
        "We make a lot in common.",
        "We are a lot in common.",
      ],
      correct: "We have a lot in common.",
    },
  ],

  pdfFileName:
    "b1-relationships-and-social-life-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function RelationshipsSocialLifePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1"
      nextHref="/exercises/vocabulary/b1/work-career"
      previousTitle="B1 Vocabulary"
      nextTitle="Work & Career"
    />
  );
}