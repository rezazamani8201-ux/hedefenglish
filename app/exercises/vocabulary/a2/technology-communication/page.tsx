"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Technology & Communication",
  level: "A2",
  description:
    "Learn and practice useful A2 vocabulary about technology, phones, computers, the internet, and everyday communication.",

  section1: [
    {
      question: "I use my ________ to call my friends.",
      options: ["smartphone", "fridge", "washing machine", "oven"],
      correct: "smartphone",
    },
    {
      question: "I need to ________ an email to my teacher.",
      options: ["send", "cook", "wear", "wash"],
      correct: "send",
    },
    {
      question: "You can search for information on the ________.",
      options: ["internet", "fridge", "sofa", "wallet"],
      correct: "internet",
    },
    {
      question: "My computer is very slow. I need to ________ it.",
      options: ["restart", "wear", "cook", "wash"],
      correct: "restart",
    },
    {
      question: "I forgot my ________, so I can't log in.",
      options: ["password", "ticket", "passport", "receipt"],
      correct: "password",
    },
    {
      question: "Please ________ me a message when you arrive.",
      options: ["send", "make", "do", "take"],
      correct: "send",
    },
    {
      question: "I use headphones to ________ to music.",
      options: ["listen", "look", "read", "write"],
      correct: "listen",
    },
    {
      question: "You can take a photo with your phone's ________.",
      options: ["camera", "keyboard", "screen", "battery"],
      correct: "camera",
    },
  ],

  section2: {
    questions: [
      {
        word: "download",
        correct: "to copy a file or program from the internet to your device",
      },
      {
        word: "upload",
        correct: "to send a file from your device to the internet",
      },
      {
        word: "message",
        correct: "a short piece of information sent to another person",
      },
      {
        word: "password",
        correct: "a secret word or group of characters used to enter an account",
      },
      {
        word: "screen",
        correct: "the part of a phone or computer where you see information",
      },
      {
        word: "keyboard",
        correct: "the part of a computer used for typing",
      },
    ],

    definitions: [
      "to copy a file or program from the internet to your device",
      "to send a file from your device to the internet",
      "a short piece of information sent to another person",
      "a secret word or group of characters used to enter an account",
      "the part of a phone or computer where you see information",
      "the part of a computer used for typing",
    ],
  },

  section3: [
    {
      question: "I need to ________ this app before I can use it.",
      correct: "download",
    },
    {
      question: "She wants to ________ the photos to her website.",
      correct: "upload",
    },
    {
      question: "I sent you a ________ this morning.",
      correct: "message",
    },
    {
      question: "Never share your ________ with other people.",
      correct: "password",
    },
    {
      question: "The information appears on the computer ________.",
      correct: "screen",
    },
    {
      question: "You can type letters using the ________.",
      correct: "keyboard",
    },
  ],

  section4: [
    {
      question: "You use this to type letters on a computer.",
      options: ["keyboard", "camera", "screen", "battery"],
      correct: "keyboard",
    },
    {
      question: "You see videos and information on this.",
      options: ["screen", "keyboard", "password", "message"],
      correct: "screen",
    },
    {
      question: "You use this secret information to log into an account.",
      options: ["password", "camera", "download", "keyboard"],
      correct: "password",
    },
    {
      question: "You do this when you move a file from the internet to your device.",
      options: ["download", "upload", "restart", "message"],
      correct: "download",
    },
    {
      question: "You do this when you send a file from your device to a website.",
      options: ["upload", "download", "restart", "listen"],
      correct: "upload",
    },
  ],

  section5: [
    {
      question: "What can you use to communicate with someone who is far away?",
      options: [
        "a smartphone",
        "a frying pan",
        "a wardrobe",
        "a sofa",
      ],
      correct: "a smartphone",
    },
    {
      question: "What should you do if a computer stops working properly?",
      options: [
        "restart it",
        "wear it",
        "cook it",
        "wash it",
      ],
      correct: "restart it",
    },
    {
      question: "Which one is used for typing?",
      options: ["keyboard", "camera", "screen", "battery"],
      correct: "keyboard",
    },
    {
      question: "What should you keep private?",
      options: [
        "your password",
        "your favorite color",
        "the weather",
        "your lunch",
      ],
      correct: "your password",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I sent my friend a message.",
        "I cooked my friend a message.",
        "I wore my friend a message.",
        "I washed my friend a message.",
      ],
      correct: "I sent my friend a message.",
    },
  ],

  pdfFileName: "a2-technology-and-communication-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function TechnologyAndCommunicationPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/a2/education-learning"
      nextHref="/exercises/vocabulary/a2/nature-environment"
      previousTitle="Education & Learning"
      nextTitle="Nature & Environment"
    />
  );
}