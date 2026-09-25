"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Feelings, Opinions & Everyday Problems",
  level: "B1 Vocabulary Worksheet",
 
  description:
    "Learn and practice useful B1 vocabulary about feelings, opinions, reactions, communication, and common everyday problems.",

  section1: [
    {
      question:
        "I was really ________ when I heard that I had passed the exam.",
      options: ["relieved", "annoyed", "confused", "disappointed"],
      correct: "relieved",
    },
    {
      question:
        "She felt ________ because nobody listened to her idea.",
      options: ["frustrated", "grateful", "confident", "relaxed"],
      correct: "frustrated",
    },
    {
      question:
        "I'm ________ that we should leave early to avoid the traffic.",
      options: ["convinced", "upset", "embarrassed", "nervous"],
      correct: "convinced",
    },
    {
      question:
        "He was ________ about speaking in front of a large audience.",
      options: ["nervous", "grateful", "satisfied", "proud"],
      correct: "nervous",
    },
    {
      question:
        "I completely ________ with you. That's exactly how I feel.",
      options: ["agree", "argue", "complain", "suggest"],
      correct: "agree",
    },
    {
      question:
        "The customer decided to ________ about the poor service.",
      options: ["complain", "agree", "improve", "realize"],
      correct: "complain",
    },
    {
      question:
        "We had a small ________ about where to go for dinner.",
      options: ["disagreement", "achievement", "appointment", "solution"],
      correct: "disagreement",
    },
    {
      question:
        "After discussing the problem, we finally found a ________.",
      options: ["solution", "reaction", "opinion", "argument"],
      correct: "solution",
    },
  ],

  section2: {
    questions: [
      {
        word: "embarrassed",
        correct:
          "feeling uncomfortable or ashamed because of something that happened",
      },
      {
        word: "grateful",
        correct:
          "feeling thankful for something someone has done",
      },
      {
        word: "disappointed",
        correct:
          "feeling unhappy because something was not as good as you expected",
      },
      {
        word: "opinion",
        correct:
          "what you think or believe about something",
      },
      {
        word: "argument",
        correct:
          "a disagreement in which people express different or angry opinions",
      },
      {
        word: "suggestion",
        correct:
          "an idea or plan that you offer for someone to consider",
      },
    ],

    definitions: [
      "feeling uncomfortable or ashamed because of something that happened",
      "feeling thankful for something someone has done",
      "feeling unhappy because something was not as good as you expected",
      "what you think or believe about something",
      "a disagreement in which people express different or angry opinions",
      "an idea or plan that you offer for someone to consider",
    ],
  },

  section3: [
    {
      question:
        "I felt ________ when I forgot my friend's name in front of everyone.",
      correct: "embarrassed",
    },
    {
      question:
        "We are very ________ for your help.",
      correct: "grateful",
    },
    {
      question:
        "She was ________ because the restaurant was not as good as she expected.",
      correct: "disappointed",
    },
    {
      question:
        "In my ________, this is the best option.",
      correct: "opinion",
    },
    {
      question:
        "They had an ________ about how to solve the problem.",
      correct: "argument",
    },
    {
      question:
        "He made a useful ________ during the meeting.",
      correct: "suggestion",
    },
  ],

  section4: [
    {
      question:
        "What does embarrassed mean?",
      options: [
        "Feeling uncomfortable or ashamed because of something that happened",
        "Feeling thankful for someone's help",
        "Feeling completely relaxed",
        "Feeling excited about a future event",
      ],
      correct:
        "Feeling uncomfortable or ashamed because of something that happened",
    },
    {
      question:
        "What does grateful mean?",
      options: [
        "Feeling thankful for something someone has done",
        "Feeling angry about a difficult situation",
        "Feeling confused about a decision",
        "Feeling worried about an exam",
      ],
      correct:
        "Feeling thankful for something someone has done",
    },
    {
      question:
        "What does disappointed mean?",
      options: [
        "Feeling unhappy because something was not as good as expected",
        "Feeling very confident about something",
        "Feeling thankful for someone's help",
        "Feeling excited about meeting someone",
      ],
      correct:
        "Feeling unhappy because something was not as good as expected",
    },
    {
      question:
        "What is an opinion?",
      options: [
        "What you think or believe about something",
        "A problem that needs to be repaired",
        "A formal qualification",
        "A type of emotional reaction",
      ],
      correct:
        "What you think or believe about something",
    },
    {
      question:
        "What is a suggestion?",
      options: [
        "An idea or plan offered for someone to consider",
        "A strong disagreement between two people",
        "A feeling of embarrassment",
        "A formal complaint to a company",
      ],
      correct:
        "An idea or plan offered for someone to consider",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'relieved' correctly?",
      options: [
        "I was relieved when I found out that my family was safe.",
        "I relieved my opinion about the new restaurant.",
        "She relieved a suggestion during the meeting.",
        "We relieved the problem yesterday.",
      ],
      correct:
        "I was relieved when I found out that my family was safe.",
    },
    {
      question:
        "Which situation would probably make someone frustrated?",
      options: [
        "Trying to fix a problem several times without success.",
        "Receiving a thoughtful birthday present.",
        "Finishing an important task successfully.",
        "Getting good news from a friend.",
      ],
      correct:
        "Trying to fix a problem several times without success.",
    },
    {
      question:
        "Which sentence gives an opinion?",
      options: [
        "I think this restaurant has the best food in town.",
        "The restaurant opens at seven o'clock.",
        "She ordered a salad for lunch.",
        "The waiter brought us the menu.",
      ],
      correct:
        "I think this restaurant has the best food in town.",
    },
    {
      question:
        "Which response is most appropriate when someone makes a useful suggestion?",
      options: [
        "That's a good idea. Let's try it.",
        "You are the destination.",
        "I am a receipt.",
        "The weather is a password.",
      ],
      correct:
        "That's a good idea. Let's try it.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "We disagreed about the best way to solve the problem.",
        "We disagreed with about the best way to solve the problem.",
        "We disagreed the best way to solve the problem.",
        "We were disagreed about the best way to solve the problem.",
      ],
      correct:
        "We disagreed about the best way to solve the problem.",
    },
  ],

  pdfFileName:
    "b1-feelings-opinions-and-everyday-problems-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function FeelingsOpinionsEverydayProblemsPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/entertainment-culture-leisure"
      nextHref="/exercises/vocabulary/b1"
      previousTitle="Entertainment, Culture & Leisure"
      nextTitle="B1 Vocabulary"
    />
  );
}




