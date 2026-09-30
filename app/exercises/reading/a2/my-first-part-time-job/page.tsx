import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My First Part-Time Job",
  level: "A2 Reading Worksheet",
  description:
    "Read about a young person who gets their first part-time job.",

  passage: `Last summer, I decided to find a part-time job. I wanted to earn some money and also get some work experience. I had never worked before, so I was a little nervous about finding my first job.

After looking at several advertisements online, I found a job at a small cafe near my house. The cafe was looking for someone to work three afternoons a week. I sent my information to the manager, and she invited me for an interview.

During the interview, the manager asked me about my school, my interests, and my free time. She also asked why I wanted the job. I explained that I wanted to learn new skills and become more independent.

A few days later, the manager called me and offered me the job. I was very happy. My first day was busy because I had to learn how everything worked. One of my colleagues showed me how to prepare drinks, clean the tables, and use the cash register.

At first, I made a few small mistakes. Once, I gave a customer the wrong drink. I apologized and quickly prepared the correct one. My colleagues were friendly and helped me when I had questions.

After a few weeks, I became much more comfortable at work. I learned how to communicate with customers, work as part of a team, and manage my time.

The job was sometimes tiring, especially after a long day at school, but I enjoyed it. I also saved some of the money I earned. Most importantly, my first job taught me that working can be challenging, but it can also help you become more confident and responsible.`,

  section1: [
    {
      question: "Why did the writer want a part-time job?",
      options: [
        "To leave school",
        "To earn money and get work experience",
        "To travel to another country",
        "To help a family member",
      ],
      correct: "To earn money and get work experience",
    },
    {
      question: "Where did the writer find a job?",
      options: [
        "At a restaurant",
        "At a school",
        "At a small cafe",
        "At a supermarket",
      ],
      correct: "At a small cafe",
    },
    {
      question: "How many afternoons a week did the cafe need the worker?",
      options: [
        "One",
        "Two",
        "Three",
        "Five",
      ],
      correct: "Three",
    },
    {
      question: "What did the writer learn to do at the cafe?",
      options: [
        "Drive a car",
        "Prepare drinks and use the cash register",
        "Cook large meals",
        "Teach other workers",
      ],
      correct: "Prepare drinks and use the cash register",
    },
    {
      question: "What did the writer learn from the job?",
      options: [
        "How to become famous",
        "How to communicate, work in a team, and manage time",
        "How to open a large business",
        "How to avoid difficult situations",
      ],
      correct:
        "How to communicate, work in a team, and manage time",
    },
  ],

  section2: [
    {
      statement: "The writer had worked before getting the cafe job.",
      correct: "False",
    },
    {
      statement: "The writer found the job advertisement online.",
      correct: "True",
    },
    {
      statement: "The manager invited the writer for an interview.",
      correct: "True",
    },
    {
      statement: "The writer never made any mistakes at work.",
      correct: "False",
    },
    {
      statement: "The writer became more comfortable after a few weeks.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'earn' mean?",
      options: [
        "Get money for working",
        "Spend money quickly",
        "Borrow money from someone",
        "Lose money",
      ],
      correct: "Get money for working",
    },
    {
      question: "What does 'advertisement' mean?",
      options: [
        "Information about something being offered",
        "A conversation with a customer",
        "A type of work",
        "A school subject",
      ],
      correct: "Information about something being offered",
    },
    {
      question: "What does 'independent' mean?",
      options: [
        "Able to do things without depending on others",
        "Unable to work alone",
        "Very tired after work",
        "Interested in meeting people",
      ],
      correct: "Able to do things without depending on others",
    },
    {
      question: "What does 'colleague' mean?",
      options: [
        "A person you work with",
        "A customer in a cafe",
        "A school teacher",
        "A family member",
      ],
      correct: "A person you work with",
    },
    {
      question: "What does 'responsible' mean?",
      options: [
        "Able to be trusted to do what you should do",
        "Always worried about money",
        "Interested in changing jobs",
        "Unwilling to learn",
      ],
      correct: "Able to be trusted to do what you should do",
    },
  ],

  section4: [
    {
      sentence: "The writer wanted to earn some _____ from the part-time job.",
      correct: "money",
    },
    {
      sentence: "The cafe manager invited the writer for an _____.",
      correct: "interview",
    },
    {
      sentence: "A colleague showed the writer how to use the cash _____.",
      correct: "register",
    },
    {
      sentence: "The writer once gave a customer the wrong _____.",
      correct: "drink",
    },
    {
      sentence: "The job helped the writer become more confident and _____.",
      correct: "responsible",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "A first part-time job gives the writer useful experience and new skills.",
        "The writer decides to leave school to work full-time.",
        "The writer has problems with the manager at a cafe.",
        "The writer wants to open a cafe in the future.",
      ],
      correct:
        "A first part-time job gives the writer useful experience and new skills.",
    },
    {
      question: "Why was the writer nervous at first?",
      options: [
        "It was the writer's first work experience.",
        "The cafe was very far away.",
        "The manager was unfriendly.",
        "The writer did not like customers.",
      ],
      correct: "It was the writer's first work experience.",
    },
    {
      question: "What can we understand about the writer at the end?",
      options: [
        "The writer gained confidence and learned to be more responsible.",
        "The writer decided that working was a bad idea.",
        "The writer wanted to stop studying.",
        "The writer did not enjoy working with other people.",
      ],
      correct:
        "The writer gained confidence and learned to be more responsible.",
    },
  ],

  pdfFileName: "a2-my-first-part-time-job-reading.pdf",
};

export default function MyFirstPartTimeJobPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-rainy-day"
      previousTitle="A Rainy Day"
      nextHref="/exercises/reading/a2/a-family-trip"
      nextTitle="A Family Trip"
    />
  );
}