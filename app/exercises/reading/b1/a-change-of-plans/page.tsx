import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Change of Plans",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about an unexpected change of plans and answer the questions carefully.",

  passage: `People often make detailed plans for important events, but sometimes unexpected problems force them to change those plans. Learning how to adapt can make difficult situations easier to manage.

Last Saturday, Emma and her brother Leo planned to drive to a small coastal town for the day. They wanted to walk along the beach, have lunch at a local restaurant, and visit a small museum. They had checked the weather forecast during the week, and everything seemed perfect.

On Saturday morning, however, Emma received a message from the museum saying that it would be closed because of a problem with the building. At first, Leo suggested canceling the trip completely. Emma did not want to waste the day, so she suggested changing their plans instead.

They decided to drive to a nearby village that they had never visited before. When they arrived, they discovered a small market in the town square. Local people were selling handmade products, fresh vegetables, and traditional food. After walking around the market, Emma and Leo found a small cafe where they had lunch.

Later that afternoon, they followed a walking path that led to a hill overlooking the sea. The view was beautiful, and they stayed there for almost an hour. Although the day had not gone according to their original plan, both of them agreed that the unexpected change had made the trip more interesting.

On the way home, Leo admitted that he had initially been disappointed about the museum. However, he realized that if they had followed their original plan, they would never have discovered the village or the beautiful view. Emma agreed that sometimes a change of plans can lead to experiences that people would not have expected.`,

  section1: [
    {
      question: "What did Emma and Leo originally plan to do?",
      options: [
        "Visit a mountain village.",
        "Spend a day in a coastal town.",
        "Go to a large shopping center.",
        "Visit their family.",
      ],
      correct: "Spend a day in a coastal town.",
    },
    {
      question: "Why was the museum closed?",
      options: [
        "There were no visitors.",
        "The weather was bad.",
        "There was a problem with the building.",
        "The museum was being moved.",
      ],
      correct: "There was a problem with the building.",
    },
    {
      question: "What did Emma suggest when they learned about the museum?",
      options: [
        "Going home immediately.",
        "Canceling the entire trip.",
        "Changing their plans.",
        "Waiting until the museum reopened.",
      ],
      correct: "Changing their plans.",
    },
    {
      question: "What did Emma and Leo find in the village?",
      options: [
        "A large hotel.",
        "A local market.",
        "A new museum.",
        "A sports center.",
      ],
      correct: "A local market.",
    },
    {
      question: "Where did they spend almost an hour later that afternoon?",
      options: [
        "At the museum.",
        "At the beach restaurant.",
        "On a hill overlooking the sea.",
        "At the town market.",
      ],
      correct: "On a hill overlooking the sea.",
    },
  ],

  section2: [
    {
      statement:
        "Emma and Leo had planned their trip carefully.",
      correct: "True",
    },
    {
      statement:
        "The museum was open when they arrived.",
      correct: "False",
    },
    {
      statement:
        "Leo wanted to cancel the trip after hearing about the museum.",
      correct: "True",
    },
    {
      statement:
        "The village market sold handmade products and traditional food.",
      correct: "True",
    },
    {
      statement:
        "Leo thought the unexpected change made the trip less interesting.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does 'forecast' mean in the passage?",
      options: [
        "A prediction about future conditions, especially weather.",
        "A plan for a museum visit.",
        "A description of a restaurant.",
        "A report about a market.",
      ],
      correct:
        "A prediction about future conditions, especially weather.",
    },
    {
      question: "What does 'coastal' mean?",
      options: [
        "Located near the sea.",
        "Located in the mountains.",
        "Located far from any town.",
        "Located inside a large city.",
      ],
      correct: "Located near the sea.",
    },
    {
      question: "What does 'initially' mean?",
      options: [
        "At the beginning.",
        "At the end.",
        "After several years.",
        "Unexpectedly.",
      ],
      correct: "At the beginning.",
    },
    {
      question: "What does 'admit' mean in the passage?",
      options: [
        "To say that something is true, often after first refusing or hesitating.",
        "To leave a place quickly.",
        "To organize an event.",
        "To change a destination.",
      ],
      correct:
        "To say that something is true, often after first refusing or hesitating.",
    },
    {
      question: "What does 'unexpected' mean?",
      options: [
        "Something that was planned carefully.",
        "Something that was not expected.",
        "Something that happens every day.",
        "Something that is impossible.",
      ],
      correct: "Something that was not expected.",
    },
  ],

  section4: [
    {
      sentence:
        "Emma and Leo checked the weather ______ before their trip.",
      correct: "forecast",
    },
    {
      sentence:
        "They originally planned to visit a ______ town.",
      correct: "coastal",
    },
    {
      sentence:
        "Emma suggested ______ their plans instead of canceling the trip.",
      correct: "changing",
    },
    {
      sentence:
        "Leo was ______ disappointed when he heard that the museum was closed.",
      correct: "initially",
    },
    {
      sentence:
        "The change in their plans led to an ______ experience.",
      correct: "unexpected",
    },
  ],

  section5: [
    {
      question:
        "Why did Emma decide not to cancel the trip?",
      options: [
        "She did not want to waste the day.",
        "She wanted to visit the museum anyway.",
        "She had already booked a hotel.",
        "Leo asked her to continue the original plan.",
      ],
      correct: "She did not want to waste the day.",
    },
    {
      question:
        "What can we infer from Leo's reaction at the end of the story?",
      options: [
        "He still believed the trip had been a mistake.",
        "He realized that the unexpected change had created new experiences.",
        "He wanted to return to the museum immediately.",
        "He did not enjoy visiting the village.",
      ],
      correct:
        "He realized that the unexpected change had created new experiences.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "People should never make detailed plans.",
        "Unexpected changes can sometimes lead to positive experiences.",
        "Museums are more interesting than villages.",
        "Traveling is usually a waste of time.",
      ],
      correct:
        "Unexpected changes can sometimes lead to positive experiences.",
    },
  ],

  pdfFileName: "b1-a-change-of-plans-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/the-value-of-friendship"
      previousTitle="The Value of Friendship"
      nextHref="/exercises/reading/b1"
      nextTitle="B1 Reading"
    />
  );
}