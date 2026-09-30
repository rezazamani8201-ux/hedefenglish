import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Healthy Habits",
  level: "A2 Reading Worksheet",
  description:
    "Read about simple healthy habits and how they can improve daily life.",

  passage: `For a long time, I did not have very healthy habits. I often went to bed late, skipped breakfast, and spent many hours sitting in front of my computer. I also ate a lot of fast food because it was quick and easy.

A few months ago, I started feeling tired during the day. I realized that my daily habits were not very good, so I decided to make some changes.

First, I started going to bed earlier. I now try to sleep for at least seven or eight hours every night. I also started eating breakfast every morning. Usually, I have some fruit, yogurt, and a piece of bread before I leave home.

Another important change was exercise. I did not want to join an expensive gym, so I started walking every evening. At first, I walked for about twenty minutes. Now I usually walk for forty minutes or more. Sometimes I also ride my bicycle at the weekend.

I have also changed the way I eat. I still enjoy pizza and burgers sometimes, but I eat more vegetables and fruit now. I drink more water and try not to buy sugary drinks.

These changes were not easy at first. However, after a few weeks, I started to feel more energetic. I can concentrate better at work, and I do not feel as tired during the day.

I have learned that healthy habits do not have to be difficult. Small changes can make a big difference if you continue doing them regularly.`,

  section1: [
    {
      question: "What was one of the writer's unhealthy habits?",
      options: [
        "Going to bed early",
        "Eating breakfast every morning",
        "Spending many hours at the computer",
        "Walking every evening",
      ],
      correct: "Spending many hours at the computer",
    },
    {
      question: "Why did the writer decide to change their habits?",
      options: [
        "They wanted to join a gym.",
        "They often felt tired during the day.",
        "Their friends told them to exercise.",
        "They wanted to become a professional athlete.",
      ],
      correct: "They often felt tired during the day.",
    },
    {
      question: "What does the writer usually eat for breakfast?",
      options: [
        "Pizza and burgers",
        "Eggs and meat",
        "Fruit, yogurt, and bread",
        "Only fruit juice",
      ],
      correct: "Fruit, yogurt, and bread",
    },
    {
      question: "How does the writer usually exercise?",
      options: [
        "By going to an expensive gym",
        "By walking and sometimes riding a bicycle",
        "By swimming every morning",
        "By playing football every day",
      ],
      correct: "By walking and sometimes riding a bicycle",
    },
    {
      question: "How does the writer feel after making these changes?",
      options: [
        "More tired",
        "Less interested in work",
        "More energetic",
        "More stressed",
      ],
      correct: "More energetic",
    },
  ],

  section2: [
    {
      statement: "The writer often went to bed late.",
      correct: "True",
    },
    {
      statement: "The writer always ate healthy food before changing their habits.",
      correct: "False",
    },
    {
      statement: "The writer started walking every evening.",
      correct: "True",
    },
    {
      statement: "The writer never eats pizza or burgers now.",
      correct: "False",
    },
    {
      statement: "The writer believes small changes can make a big difference.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'habit' mean?",
      options: [
        "Something you do regularly",
        "Something you buy once",
        "A type of exercise",
        "A kind of food",
      ],
      correct: "Something you do regularly",
    },
    {
      question: "What does 'skip' mean in 'skip breakfast'?",
      options: [
        "Not do or have something",
        "Prepare something carefully",
        "Enjoy something slowly",
        "Buy something expensive",
      ],
      correct: "Not do or have something",
    },
    {
      question: "What does 'energetic' mean?",
      options: [
        "Having a lot of energy",
        "Feeling very hungry",
        "Feeling worried",
        "Having no free time",
      ],
      correct: "Having a lot of energy",
    },
    {
      question: "What does 'concentrate' mean?",
      options: [
        "Give your attention to something",
        "Stop doing something",
        "Walk for a long time",
        "Eat healthy food",
      ],
      correct: "Give your attention to something",
    },
    {
      question: "What does 'regularly' mean?",
      options: [
        "Often and according to a routine",
        "Only once",
        "Very quickly",
        "Without planning",
      ],
      correct: "Often and according to a routine",
    },
  ],

  section4: [
    {
      sentence: "The writer used to spend many hours in front of the _____.",
      correct: "computer",
    },
    {
      sentence: "The writer now tries to sleep for seven or eight _____ every night.",
      correct: "hours",
    },
    {
      sentence: "The writer started walking every _____.",
      correct: "evening",
    },
    {
      sentence: "The writer drinks more _____ now.",
      correct: "water",
    },
    {
      sentence: "After making changes, the writer can _____ better at work.",
      correct: "concentrate",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Small healthy changes can improve a person's daily life.",
        "Going to the gym is the only way to be healthy.",
        "Healthy food is always expensive.",
        "People should never eat fast food.",
      ],
      correct:
        "Small healthy changes can improve a person's daily life.",
    },
    {
      question: "Why did the writer choose walking instead of joining a gym?",
      options: [
        "Walking was simple and did not require an expensive gym.",
        "The writer did not like exercise.",
        "The writer wanted to become a cyclist.",
        "Walking was recommended by a doctor.",
      ],
      correct:
        "Walking was simple and did not require an expensive gym.",
    },
    {
      question: "What can we understand about the writer's changes?",
      options: [
        "They were difficult at first but became easier and useful.",
        "They made the writer more tired.",
        "They only lasted for a few days.",
        "They completely changed the writer's personality.",
      ],
      correct:
        "They were difficult at first but became easier and useful.",
    },
  ],

  pdfFileName: "a2-healthy-habits-reading.pdf",
};

export default function HealthyHabitsPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-family-trip"
      previousTitle="A Family Trip"
      nextHref="/exercises/reading/a2/an-unexpected-visitor"
      nextTitle="An Unexpected Visitor"
    />
  );
}