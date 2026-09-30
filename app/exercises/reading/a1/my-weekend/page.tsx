import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Weekend",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Jack, and I really enjoy weekends. I do not have school on Saturday and Sunday, so I have more free time.

On Saturday morning, I usually wake up at eight o'clock. I have breakfast with my family and then clean my room. After that, I often meet my best friend, Ben. We usually ride our bikes around the neighborhood or play football in the park.

In the afternoon, I sometimes go shopping with my mother. We buy food for the week. When we get home, I help my mother put the food in the kitchen.

On Saturday evening, my family usually watches a movie together. We make some popcorn and sit on the sofa. I really enjoy these evenings.

Sunday is usually a quiet day. I do my homework in the morning and help my father in the garden. In the afternoon, I like reading books or listening to music.

On Sunday evening, I prepare my school bag and clothes for Monday. Then I have dinner with my family and go to bed early. I like weekends because I can relax and spend time with my family and friends.`,

  section1: [
    {
      question: "What does Jack enjoy?",
      options: ["School days", "Weekends", "Shopping", "Cooking"],
      correct: "Weekends",
    },
    {
      question: "What does Jack usually do after breakfast on Saturday?",
      options: [
        "Goes to school",
        "Cleans his room",
        "Goes shopping",
        "Watches a movie",
      ],
      correct: "Cleans his room",
    },
    {
      question: "Who does Jack often meet on Saturday?",
      options: ["His teacher", "His cousin", "His best friend", "His neighbor"],
      correct: "His best friend",
    },
    {
      question: "What does Jack do with his mother?",
      options: [
        "Plays football",
        "Goes shopping",
        "Rides bikes",
        "Reads books",
      ],
      correct: "Goes shopping",
    },
    {
      question: "What does Jack prepare on Sunday evening?",
      options: [
        "His breakfast",
        "His school bag and clothes",
        "His bicycle",
        "His garden",
      ],
      correct: "His school bag and clothes",
    },
  ],

  section2: [
    {
      statement: "Jack has school on Saturday.",
      correct: "False",
    },
    {
      statement: "Jack sometimes rides his bike with Ben.",
      correct: "True",
    },
    {
      statement: "Jack never helps his mother.",
      correct: "False",
    },
    {
      statement: "The family watches movies on Saturday evening.",
      correct: "True",
    },
    {
      statement: "Jack prepares for Monday on Sunday evening.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'free time' mean?",
      options: [
        "Time when you do not have work or school",
        "Time at school",
        "Time for sleeping only",
        "Time for shopping",
      ],
      correct: "Time when you do not have work or school",
    },
    {
      question: "What does 'neighborhood' mean?",
      options: [
        "An area where people live",
        "A school subject",
        "A kind of food",
        "A sports club",
      ],
      correct: "An area where people live",
    },
    {
      question: "What does 'popcorn' mean?",
      options: [
        "A type of drink",
        "A food made from corn",
        "A kind of fruit",
        "A type of sandwich",
      ],
      correct: "A food made from corn",
    },
    {
      question: "What does 'quiet' mean?",
      options: [
        "Not noisy",
        "Very busy",
        "Very expensive",
        "Very large",
      ],
      correct: "Not noisy",
    },
    {
      question: "What does 'prepare' mean?",
      options: [
        "Get something ready",
        "Throw something away",
        "Buy something",
        "Clean something",
      ],
      correct: "Get something ready",
    },
  ],

  section4: [
    {
      sentence: "Jack usually wakes up at _____ o'clock on Saturday.",
      correct: "eight",
    },
    {
      sentence: "Jack often rides his _____ with Ben.",
      correct: "bike",
    },
    {
      sentence: "Jack sometimes goes _____ with his mother.",
      correct: "shopping",
    },
    {
      sentence: "The family watches a _____ together on Saturday evening.",
      correct: "movie",
    },
    {
      sentence: "Jack helps his father in the _____ on Sunday.",
      correct: "garden",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Jack describes how he spends his weekends.",
        "Jack talks about his school subjects.",
        "Jack describes his favorite movie.",
        "Jack explains how to grow vegetables.",
      ],
      correct: "Jack describes how he spends his weekends.",
    },
    {
      question: "Why does Jack like weekends?",
      options: [
        "He has many tests.",
        "He can relax and spend time with family and friends.",
        "He goes to school every day.",
        "He works in a shop.",
      ],
      correct:
        "He can relax and spend time with family and friends.",
    },
    {
      question: "What does Jack usually do on Sunday morning?",
      options: [
        "Goes shopping",
        "Watches a movie",
        "Does his homework and helps his father",
        "Rides his bike",
      ],
      correct: "Does his homework and helps his father",
    },
  ],

  pdfFileName: "a1-my-weekend-reading.pdf",
};

export default function MyWeekendPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/a-day-at-the-park"
      previousTitle="A Day at the Park"
      nextHref="/exercises/reading/a1/my-pet"
      nextTitle="My Pet"
    />
  );
}