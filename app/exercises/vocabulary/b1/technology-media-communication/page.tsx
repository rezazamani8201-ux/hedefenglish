"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Technology, Media & Communication",
  level: "B1 Vocabulary Worksheet",
 
  description:
    "Learn and practice useful B1 vocabulary about technology, digital communication, social media, online information, and everyday devices.",

  section1: [
    {
      question:
        "I need to ________ my phone because the battery is almost empty.",
      options: ["charge", "upload", "download", "delete"],
      correct: "charge",
    },
    {
      question:
        "Can you ________ this file and send it to me by email?",
      options: ["attach", "stream", "scroll", "install"],
      correct: "attach",
    },
    {
      question:
        "You can ________ the latest version of the app from the website.",
      options: ["download", "delete", "charge", "share"],
      correct: "download",
    },
    {
      question:
        "I usually ________ photos with my friends through messaging apps.",
      options: ["share", "install", "search", "connect"],
      correct: "share",
    },
    {
      question:
        "Please ________ the new software before using the computer.",
      options: ["install", "scroll", "upload", "browse"],
      correct: "install",
    },
    {
      question:
        "I spent an hour ________ through social media posts.",
      options: ["scrolling", "attaching", "charging", "printing"],
      correct: "scrolling",
    },
    {
      question:
        "You should always ________ the source before sharing information online.",
      options: ["check", "stream", "delete", "connect"],
      correct: "check",
    },
    {
      question:
        "The video is available to ________ online without downloading it.",
      options: ["stream", "attach", "install", "print"],
      correct: "stream",
    },
  ],

  section2: {
    questions: [
      {
        word: "device",
        correct:
          "a piece of electronic equipment such as a phone, tablet, or computer",
      },
      {
        word: "privacy",
        correct:
          "the right or ability to keep personal information away from others",
      },
      {
        word: "account",
        correct:
          "a personal record or profile that allows you to use an online service",
      },
      {
        word: "password",
        correct:
          "a secret combination of letters, numbers, or symbols used to access something",
      },
      {
        word: "platform",
        correct:
          "an online service or system where people can communicate, share, or access content",
      },
      {
        word: "reliable",
        correct:
          "able to be trusted to provide correct information or work well",
      },
    ],

    definitions: [
      "a piece of electronic equipment such as a phone, tablet, or computer",
      "the right or ability to keep personal information away from others",
      "a personal record or profile that allows you to use an online service",
      "a secret combination of letters, numbers, or symbols used to access something",
      "an online service or system where people can communicate, share, or access content",
      "able to be trusted to provide correct information or work well",
    ],
  },

  section3: [
    {
      question:
        "My laptop is my most useful electronic ________.",
      correct: "device",
    },
    {
      question:
        "You should be careful about sharing personal information if you want to protect your ________.",
      correct: "privacy",
    },
    {
      question:
        "I created a new social media ________ yesterday.",
      correct: "account",
    },
    {
      question:
        "Never share your ________ with strangers online.",
      correct: "password",
    },
    {
      question:
        "Many people use this social media ________ to communicate with friends.",
      correct: "platform",
    },
    {
      question:
        "Make sure the website is ________ before you use the information in your project.",
      correct: "reliable",
    },
  ],

  section4: [
    {
      question:
        "What is a device?",
      options: [
        "A piece of electronic equipment",
        "A type of online password",
        "A social media message",
        "A website advertisement",
      ],
      correct: "A piece of electronic equipment",
    },
    {
      question:
        "What does privacy mean?",
      options: [
        "The ability to keep personal information away from others",
        "The speed of an internet connection",
        "The number of followers on an account",
        "The process of downloading a file",
      ],
      correct:
        "The ability to keep personal information away from others",
    },
    {
      question:
        "What is an online account?",
      options: [
        "A personal profile used to access an online service",
        "A physical computer device",
        "A type of internet cable",
        "A printed document",
      ],
      correct:
        "A personal profile used to access an online service",
    },
    {
      question:
        "What is a password?",
      options: [
        "A secret combination used to access something",
        "A public message on social media",
        "A type of computer screen",
        "A website used for shopping",
      ],
      correct:
        "A secret combination used to access something",
    },
    {
      question:
        "What does reliable mean?",
      options: [
        "Able to be trusted or depended on",
        "Very expensive",
        "Difficult to download",
        "Available only offline",
      ],
      correct:
        "Able to be trusted or depended on",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'device' correctly?",
      options: [
        "My tablet is a useful device for studying.",
        "I device my homework every evening.",
        "The website was very device yesterday.",
        "She bought a device of information.",
      ],
      correct:
        "My tablet is a useful device for studying.",
    },
    {
      question:
        "Why should you use a strong password?",
      options: [
        "It helps protect your online account.",
        "It makes your internet connection faster.",
        "It increases the size of your phone.",
        "It automatically deletes unwanted emails.",
      ],
      correct:
        "It helps protect your online account.",
    },
    {
      question:
        "Which action can help protect your privacy online?",
      options: [
        "Avoiding unnecessary sharing of personal information.",
        "Sharing your password with everyone.",
        "Posting your home address publicly.",
        "Using the same password everywhere.",
      ],
      correct:
        "Avoiding unnecessary sharing of personal information.",
    },
    {
      question:
        "Which source is most likely to be reliable?",
      options: [
        "An official website with clearly stated information and sources.",
        "An anonymous post with no evidence.",
        "A random message from an unknown account.",
        "A website containing only unverified rumors.",
      ],
      correct:
        "An official website with clearly stated information and sources.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "I downloaded the file and attached it to my email.",
        "I downloaded the file and attach it to my email yesterday.",
        "I download the file and attached it to my email yesterday.",
        "I was downloaded the file and attached it to my email.",
      ],
      correct:
        "I downloaded the file and attached it to my email.",
    },
  ],

  pdfFileName:
    "b1-technology-media-and-communication-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function TechnologyMediaCommunicationPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/education-skills"
      nextHref="/exercises/vocabulary/b1/nature-environment-climate"
      previousTitle="Education & Skills"
      nextTitle="Nature, Environment & Climate"
    />
  );
}




