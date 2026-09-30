import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "The Importance of Sleep",
  level: "B1 Reading Worksheet",
  description:
    "Read about the importance of sleep and how good sleeping habits can improve everyday life.",

  passage: `Sleep is an important part of a healthy life, but many people do not get enough of it. They often stay up late because of work, study, entertainment, or their phones. As a result, they may feel tired and have difficulty concentrating during the day.

For many people, getting enough sleep can make a big difference. When we sleep, our bodies have time to rest and recover. Our brains also process information and memories from the day. This is one reason why students may find it easier to learn when they get enough sleep.

Good sleeping habits can help people improve the quality of their sleep. For example, going to bed at about the same time every night can help the body develop a regular routine. It is also useful to avoid using phones or watching television immediately before going to bed. The light from screens can make it more difficult for some people to relax.

The environment is also important. A quiet, dark, and comfortable bedroom can make it easier to fall asleep. Some people also find that reading a book or listening to calm music helps them relax before bedtime.

Getting more sleep does not solve every problem, but it can improve a person's energy, concentration, and mood. Instead of seeing sleep as wasted time, people should understand that it is an important part of taking care of their health.`,

  section1: [
    {
      question: "Why do many people stay up late?",
      options: [
        "They do not need sleep.",
        "They are busy with work, study, entertainment, or phones.",
        "They exercise every night.",
        "They are always traveling.",
      ],
      correct:
        "They are busy with work, study, entertainment, or phones.",
    },
    {
      question: "What happens to the body during sleep?",
      options: [
        "It becomes more active.",
        "It stops working completely.",
        "It has time to rest and recover.",
        "It learns a new language.",
      ],
      correct: "It has time to rest and recover.",
    },
    {
      question:
        "Why can enough sleep be helpful for students?",
      options: [
        "It gives them more homework.",
        "It helps their brains process information and memories.",
        "It makes school shorter.",
        "It allows them to use their phones more.",
      ],
      correct:
        "It helps their brains process information and memories.",
    },
    {
      question:
        "What can make it easier to fall asleep?",
      options: [
        "A noisy bedroom",
        "Using a phone all night",
        "A quiet, dark, and comfortable bedroom",
        "Watching television until morning",
      ],
      correct:
        "A quiet, dark, and comfortable bedroom",
    },
    {
      question:
        "Which of the following can improve a person's daily life?",
      options: [
        "Getting enough sleep",
        "Staying awake all night",
        "Using screens before sleeping",
        "Changing bedtime every night",
      ],
      correct: "Getting enough sleep",
    },
  ],

  section2: [
    {
      statement:
        "Many people do not get enough sleep.",
      correct: "True",
    },
    {
      statement:
        "Sleep only helps the body and has nothing to do with the brain.",
      correct: "False",
    },
    {
      statement:
        "Going to bed at a similar time every night can help create a routine.",
      correct: "True",
    },
    {
      statement:
        "The passage says that a noisy bedroom is the best place to sleep.",
      correct: "False",
    },
    {
      statement:
        "Sleep can affect a person's energy and mood.",
      correct: "True",
    },
  ],

  section3: [
    {
      question:
        "What does the word 'concentrating' mean in the passage?",
      options: [
        "Paying attention",
        "Sleeping",
        "Traveling",
        "Cooking",
      ],
      correct: "Paying attention",
    },
    {
      question:
        "What does 'recover' mean in the second paragraph?",
      options: [
        "Become tired",
        "Rest and return to a healthy condition",
        "Work harder",
        "Forget information",
      ],
      correct:
        "Rest and return to a healthy condition",
    },
    {
      question:
        "What does 'regular' mean in 'a regular routine'?",
      options: [
        "Something that happens in a consistent way",
        "Something that happens once",
        "Something that is difficult",
        "Something that is unusual",
      ],
      correct:
        "Something that happens in a consistent way",
    },
    {
      question:
        "What does 'environment' mean in the passage?",
      options: [
        "The place and conditions around a person",
        "A person's job",
        "A type of food",
        "A sleeping problem",
      ],
      correct:
        "The place and conditions around a person",
    },
    {
      question:
        "What does 'wasted time' suggest in the final paragraph?",
      options: [
        "Time that is used effectively",
        "Time that people think is not useful",
        "Time spent studying",
        "Time spent exercising",
      ],
      correct:
        "Time that people think is not useful",
    },
  ],

  section4: [
    {
      sentence:
        "Many people feel ______ during the day when they do not sleep enough.",
      correct: "tired",
    },
    {
      sentence:
        "When we sleep, our bodies have time to rest and ______.",
      correct: "recover",
    },
    {
      sentence:
        "Going to bed at the same time can help create a regular ______.",
      correct: "routine",
    },
    {
      sentence:
        "A quiet and comfortable bedroom can make it easier to ______ asleep.",
      correct: "fall",
    },
    {
      sentence:
        "Enough sleep can improve a person's energy, concentration, and ______.",
      correct: "mood",
    },
  ],

  section5: [
    {
      question:
        "What is the main idea of the passage?",
      options: [
        "People should never use phones.",
        "Sleep is an important part of a healthy life and good habits can improve sleep.",
        "Students should study all night.",
        "Everyone needs exactly the same amount of sleep.",
      ],
      correct:
        "Sleep is an important part of a healthy life and good habits can improve sleep.",
    },
    {
      question:
        "What can we infer about people who regularly sleep too little?",
      options: [
        "They may have more difficulty concentrating during the day.",
        "They always have more energy.",
        "They never feel tired.",
        "They automatically become healthier.",
      ],
      correct:
        "They may have more difficulty concentrating during the day.",
    },
    {
      question:
        "Why does the writer say that sleep should not be seen as wasted time?",
      options: [
        "Because sleeping is a form of entertainment.",
        "Because sleep supports physical and mental health.",
        "Because people can work while sleeping.",
        "Because sleep makes every problem disappear.",
      ],
      correct:
        "Because sleep supports physical and mental health.",
    },
  ],

  pdfFileName: "b1-the-importance-of-sleep-reading.pdf",
};

export default function TheImportanceOfSleepPage() {
  return <ReadingTemplate data={readingData} />;
}