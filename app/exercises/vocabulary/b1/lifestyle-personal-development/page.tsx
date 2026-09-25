"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Lifestyle & Personal Development",
  level: "B1 Vocabulary Worksheet",
  description:
    "Learn and practice useful B1 vocabulary about lifestyle, habits, goals, personal development, motivation, and self-improvement.",

  section1: [
    {
      question:
        "I've decided to ________ my daily routine because I want to be more productive.",
      options: ["improve", "avoid", "cancel", "borrow"],
      correct: "improve",
    },
    {
      question:
        "She exercises regularly to maintain a healthy ________.",
      options: ["lifestyle", "deadline", "career", "schedule"],
      correct: "lifestyle",
    },
    {
      question:
        "I'm trying to ________ the habit of checking my phone before bed.",
      options: ["break", "make", "take", "reach"],
      correct: "break",
    },
    {
      question:
        "He set himself a clear ________ of learning 20 new words every week.",
      options: ["goal", "choice", "reason", "habit"],
      correct: "goal",
    },
    {
      question:
        "It takes time and effort to ________ new skills.",
      options: ["develop", "waste", "remove", "replace"],
      correct: "develop",
    },
    {
      question:
        "She stays ________ by writing down her progress every evening.",
      options: ["motivated", "crowded", "ordinary", "relaxed"],
      correct: "motivated",
    },
    {
      question:
        "Getting enough sleep is an important part of a healthy ________.",
      options: ["routine", "argument", "position", "interview"],
      correct: "routine",
    },
    {
      question:
        "He wants to become more confident, so he is working on his personal ________.",
      options: ["development", "transport", "equipment", "permission"],
      correct: "development",
    },
  ],

  section2: {
    questions: [
      {
        word: "motivation",
        correct:
          "the reason or desire that makes you want to do something",
      },
      {
        word: "routine",
        correct:
          "the usual way of doing things regularly",
      },
      {
        word: "self-discipline",
        correct:
          "the ability to control yourself and continue doing something you should do",
      },
      {
        word: "achievement",
        correct:
          "something successful that you have done or reached",
      },
      {
        word: "confidence",
        correct:
          "the feeling that you can trust your abilities and decisions",
      },
      {
        word: "balance",
        correct:
          "a situation in which different parts of your life receive enough attention",
      },
    ],

    definitions: [
      "the reason or desire that makes you want to do something",
      "the usual way of doing things regularly",
      "the ability to control yourself and continue doing something you should do",
      "something successful that you have done or reached",
      "the feeling that you can trust your abilities and decisions",
      "a situation in which different parts of your life receive enough attention",
    ],
  },

  section3: [
    {
      question:
        "What gives you the ________ to continue when something becomes difficult?",
      correct: "motivation",
    },
    {
      question:
        "My morning ________ includes drinking water and going for a short walk.",
      correct: "routine",
    },
    {
      question:
        "Learning a language requires patience and ________.",
      correct: "self-discipline",
    },
    {
      question:
        "Finishing my first marathon was a great ________.",
      correct: "achievement",
    },
    {
      question:
        "Speaking in front of a large audience helped improve my ________.",
      correct: "confidence",
    },
    {
      question:
        "It's important to find a good ________ between work and personal life.",
      correct: "balance",
    },
  ],

  section4: [
    {
      question:
        "What gives you the desire or reason to continue doing something?",
      options: [
        "motivation",
        "routine",
        "balance",
        "achievement",
      ],
      correct: "motivation",
    },
    {
      question:
        "What do we call the usual way you regularly do things?",
      options: [
        "routine",
        "confidence",
        "challenge",
        "progress",
      ],
      correct: "routine",
    },
    {
      question:
        "What does self-discipline help you do?",
      options: [
        "Continue doing something even when it is difficult",
        "Avoid every responsibility",
        "Forget your goals",
        "Depend on other people for everything",
      ],
      correct:
        "Continue doing something even when it is difficult",
    },
    {
      question:
        "What is an achievement?",
      options: [
        "Something successful that you have reached or completed",
        "A regular daily activity",
        "A problem that you cannot solve",
        "A reason for changing your job",
      ],
      correct:
        "Something successful that you have reached or completed",
    },
    {
      question:
        "What does confidence mean?",
      options: [
        "Believing that you can trust your abilities",
        "Being afraid of making every decision",
        "Avoiding new experiences",
        "Depending on other people's opinions",
      ],
      correct:
        "Believing that you can trust your abilities",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'goal' correctly?",
      options: [
        "My goal is to improve my English this year.",
        "My goal is a glass of water on the table.",
        "I goal my breakfast every morning.",
        "She put her goal in the kitchen.",
      ],
      correct:
        "My goal is to improve my English this year.",
    },
    {
      question:
        "Why might someone keep a daily routine?",
      options: [
        "To organize their time and habits more effectively.",
        "To avoid having any responsibilities.",
        "To make every day completely unpredictable.",
        "To stop learning new things.",
      ],
      correct:
        "To organize their time and habits more effectively.",
    },
    {
      question:
        "Which person is showing self-discipline?",
      options: [
        "Someone who studies every day even when they don't feel like it.",
        "Someone who always gives up when something is difficult.",
        "Someone who never follows their plans.",
        "Someone who avoids setting any goals.",
      ],
      correct:
        "Someone who studies every day even when they don't feel like it.",
    },
    {
      question:
        "Which situation shows a good work-life balance?",
      options: [
        "Someone who works hard but also makes time for family and rest.",
        "Someone who works all day and never takes a break.",
        "Someone who never spends time with friends or family.",
        "Someone who refuses to take any time off.",
      ],
      correct:
        "Someone who works hard but also makes time for family and rest.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "She has made great progress in her personal development.",
        "She has made great progress on her personal development.",
        "She has made great progress at her personal development.",
        "She has made great progress to her personal development.",
      ],
      correct:
        "She has made great progress in her personal development.",
    },
  ],

  pdfFileName:
    "b1-lifestyle-and-personal-development-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function LifestylePersonalDevelopmentPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/work-career"
      nextHref="/exercises/vocabulary/b1/health-well-being"
      previousTitle="Work & Career"
      nextTitle="Health & Well-being"
    />
  );
}