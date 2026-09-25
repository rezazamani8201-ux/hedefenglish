"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Technology, Media & Digital Life",
  level: "B2 Vocabulary Worksheet",
  description:
    "Develop advanced vocabulary for technology, digital communication, social media, online behavior, digital security, and modern media.",

  section1: [
    {
      question:
        "The company is developing a new application to ________ communication between employees.",
      options: ["facilitate", "withdraw", "dismiss", "postpone"],
      correct: "facilitate",
    },
    {
      question:
        "Users should create strong passwords to ________ their personal information.",
      options: ["protect", "consume", "allocate", "interrupt"],
      correct: "protect",
    },
    {
      question:
        "Social media has completely ________ the way people communicate with one another.",
      options: ["transformed", "withdrawn", "concealed", "negotiated"],
      correct: "transformed",
    },
    {
      question:
        "The website uses cookies to ________ information about users' online activity.",
      options: ["collect", "dismiss", "postpone", "regulate"],
      correct: "collect",
    },
    {
      question:
        "The company released a software ________ to fix several security problems.",
      options: ["update", "campaign", "revenue", "qualification"],
      correct: "update",
    },
    {
      question:
        "It is important to ________ the source of information before sharing it online.",
      options: ["verify", "consume", "withdraw", "allocate"],
      correct: "verify",
    },
    {
      question:
        "The journalist was criticized for spreading ________ information on social media.",
      options: ["misleading", "residential", "temporary", "financial"],
      correct: "misleading",
    },
    {
      question:
        "The company has invested heavily in artificial ________ and machine learning.",
      options: ["intelligence", "citizenship", "legislation", "hospitality"],
      correct: "intelligence",
    },
    {
      question:
        "Many people struggle to ________ their screen time while working from home.",
      options: ["manage", "dismiss", "withdraw", "conceal"],
      correct: "manage",
    },
    {
      question:
        "The new platform allows users to ________ files securely with colleagues.",
      options: ["share", "consume", "postpone", "allocate"],
      correct: "share",
    },
  ],

  section2: {
    questions: [
      {
        word: "cybersecurity",
        correct:
          "the practice of protecting computers, networks, and digital information from attacks or unauthorized access",
      },
      {
        word: "privacy",
        correct:
          "the right to keep personal information and activities protected from unwanted access",
      },
      {
        word: "algorithm",
        correct:
          "a set of rules or instructions used by a computer to solve a problem or process information",
      },
      {
        word: "digital footprint",
        correct:
          "the record of information about a person that exists as a result of their online activities",
      },
      {
        word: "misinformation",
        correct:
          "false or inaccurate information that is shared, whether intentionally or unintentionally",
      },
      {
        word: "platform",
        correct:
          "an online service or system where people can communicate, share content, or access information",
      },
      {
        word: "automation",
        correct:
          "the use of technology to perform tasks with little or no human involvement",
      },
      {
        word: "data breach",
        correct:
          "an incident in which private or protected information is accessed, stolen, or exposed without permission",
      },
    ],

    definitions: [
      "the practice of protecting computers, networks, and digital information from attacks or unauthorized access",
      "the right to keep personal information and activities protected from unwanted access",
      "a set of rules or instructions used by a computer to solve a problem or process information",
      "the record of information about a person that exists as a result of their online activities",
      "false or inaccurate information that is shared, whether intentionally or unintentionally",
      "an online service or system where people can communicate, share content, or access information",
      "the use of technology to perform tasks with little or no human involvement",
      "an incident in which private or protected information is accessed, stolen, or exposed without permission",
    ],
  },

  section3: [
    {
      question:
        "Users should regularly ________ their software to make sure it has the latest security features.",
      correct: "update",
    },
    {
      question:
        "Before downloading an application, make sure you ________ its permissions carefully.",
      correct: "check",
    },
    {
      question:
        "The company wants to ________ its customers from online fraud.",
      correct: "protect",
    },
    {
      question:
        "The journalist spent several hours ________ the information before publishing the article.",
      correct: "verifying",
    },
    {
      question:
        "People should avoid ________ sensitive information on public websites.",
      correct: "sharing",
    },
    {
      question:
        "The software can ________ repetitive tasks automatically.",
      correct: "perform",
    },
    {
      question:
        "The new technology is expected to ________ productivity across the organization.",
      correct: "increase",
    },
    {
      question:
        "Parents are increasingly concerned about how much time their children ________ online.",
      correct: "spend",
    },
  ],

  section4: [
    {
      question:
        "The company has introduced new measures to improve its ________ and prevent cyberattacks.",
      options: [
        "cybersecurity",
        "misinformation",
        "automation",
        "platform",
      ],
      correct: "cybersecurity",
    },
    {
      question:
        "The application allows users to control their personal data and ________ settings.",
      options: [
        "privacy",
        "automation",
        "algorithm",
        "platform",
      ],
      correct: "privacy",
    },
    {
      question:
        "The recommendation system uses an ________ to decide which videos users are likely to enjoy.",
      options: [
        "algorithm",
        "platform",
        "data breach",
        "digital footprint",
      ],
      correct: "algorithm",
    },
    {
      question:
        "Everything you post online can contribute to your digital ________.",
      options: [
        "footprint",
        "platform",
        "privacy",
        "automation",
      ],
      correct: "footprint",
    },
    {
      question:
        "The article was criticized for spreading ________ about the safety of the new technology.",
      options: [
        "misinformation",
        "automation",
        "cybersecurity",
        "privacy",
      ],
      correct: "misinformation",
    },
    {
      question:
        "YouTube and other social media services are examples of digital ________.",
      options: [
        "platforms",
        "algorithms",
        "breaches",
        "footprints",
      ],
      correct: "platforms",
    },
  ],

  section5: [
    {
      question:
        "The factory has introduced greater ________ to reduce the amount of manual work required.",
      options: [
        "automation",
        "misinformation",
        "privacy",
        "platform",
      ],
      correct: "automation",
    },
    {
      question:
        "The company had to inform customers after suffering a major data ________.",
      options: [
        "breach",
        "platform",
        "algorithm",
        "footprint",
      ],
      correct: "breach",
    },
    {
      question:
        "People should think carefully before posting personal information because it can remain part of their digital ________ for years.",
      options: [
        "footprint",
        "automation",
        "platform",
        "algorithm",
      ],
      correct: "footprint",
    },
    {
      question:
        "News organizations have a responsibility to ________ information before publishing it.",
      options: [
        "verify",
        "withdraw",
        "consume",
        "allocate",
      ],
      correct: "verify",
    },
    {
      question:
        "The recommendation ________ constantly analyzes users' behavior to personalize their feeds.",
      options: [
        "algorithm",
        "platform",
        "privacy",
        "breach",
      ],
      correct: "algorithm",
    },
    {
      question:
        "The company uses artificial intelligence to ________ customer requests more efficiently.",
      options: [
        "process",
        "withdraw",
        "dismiss",
        "conceal",
      ],
      correct: "process",
    },
    {
      question:
        "Excessive use of social media can have a negative ________ on people's concentration.",
      options: [
        "impact",
        "platform",
        "algorithm",
        "update",
      ],
      correct: "impact",
    },
    {
      question:
        "Users should read a website's privacy policy before agreeing to let it ________ their personal data.",
      options: [
        "collect",
        "withdraw",
        "postpone",
        "dismiss",
      ],
      correct: "collect",
    },
  ],

  pdfFileName: "b2-technology-media-digital-life-worksheet.pdf",
  pdfTemplate: "/exercises/vocabulary/family-friends/template.png",
};

export default function TechnologyMediaDigitalLifePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b2/education-learning-knowledge"
      previousTitle="Education, Learning & Knowledge"
      nextHref="/exercises/vocabulary/b2/environment-climate-sustainability"
      nextTitle="Environment, Climate & Sustainability"
    />
  );
}