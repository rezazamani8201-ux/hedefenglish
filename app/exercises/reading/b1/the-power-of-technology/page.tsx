import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "The Power of Technology",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about the role of technology in modern life and answer the questions carefully.",

  passage: `Technology has changed the way people live, work, communicate, and learn. Many activities that once required a lot of time can now be completed in just a few minutes. People can communicate with friends and family around the world, study online, shop from home, and work from almost anywhere.

One important area affected by technology is education. Students can use computers and smartphones to find information, watch educational videos, and attend online classes. This can make learning more flexible, especially for people who live far from schools or universities.

Technology has also changed the workplace. Many employees can work from home instead of traveling to an office every day. Video meetings and online communication tools allow teams to work together even when they are in different cities or countries.

However, technology also has some disadvantages. Spending too much time looking at screens can reduce physical activity and make it difficult for people to concentrate. Social media can also create pressure to compare one's life with the lives of others.

For this reason, many people believe that technology should be used carefully. It can make life easier and create new opportunities, but people also need to spend time away from their devices. Finding a healthy balance between technology and real-life activities is becoming increasingly important.`,

  section1: [
    {
      question: "How has technology changed people's lives?",
      options: [
        "It has made communication and many daily activities easier.",
        "It has stopped people from working.",
        "It has made education impossible.",
        "It has reduced access to information.",
      ],
      correct:
        "It has made communication and many daily activities easier.",
    },
    {
      question: "How can technology help students?",
      options: [
        "By preventing them from attending classes.",
        "By giving them access to information and online learning.",
        "By making schools unnecessary for everyone.",
        "By reducing the amount of information available.",
      ],
      correct:
        "By giving them access to information and online learning.",
    },
    {
      question: "How has technology changed some workplaces?",
      options: [
        "Employees can never work together anymore.",
        "Employees can work from home and communicate online.",
        "Employees must travel more often.",
        "Offices have completely disappeared.",
      ],
      correct:
        "Employees can work from home and communicate online.",
    },
    {
      question: "What is one disadvantage of spending too much time on screens?",
      options: [
        "It can increase physical activity.",
        "It can make concentration difficult.",
        "It always improves communication.",
        "It makes people sleep better.",
      ],
      correct: "It can make concentration difficult.",
    },
    {
      question: "What do many people believe about technology?",
      options: [
        "It should never be used.",
        "It should be used carefully and in balance with real life.",
        "It should replace all real-life activities.",
        "It is only useful for entertainment.",
      ],
      correct:
        "It should be used carefully and in balance with real life.",
    },
  ],

  section2: [
    {
      statement:
        "Technology allows people to communicate with others around the world.",
      correct: "True",
    },
    {
      statement:
        "Technology has made education less flexible for everyone.",
      correct: "False",
    },
    {
      statement:
        "Some employees can work from home because of technology.",
      correct: "True",
    },
    {
      statement:
        "Spending too much time on screens can increase physical activity.",
      correct: "False",
    },
    {
      statement:
        "The passage suggests that people should find a balance between technology and real-life activities.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'flexible' mean in the context of education?",
      options: [
        "Able to change according to people's needs.",
        "Very difficult to understand.",
        "Available only at one exact time.",
        "Completely unnecessary.",
      ],
      correct: "Able to change according to people's needs.",
    },
    {
      question: "What does 'concentrate' mean?",
      options: [
        "To focus attention on something.",
        "To stop working.",
        "To communicate with friends.",
        "To move to another place.",
      ],
      correct: "To focus attention on something.",
    },
    {
      question: "What does 'pressure' mean in the passage?",
      options: [
        "A feeling of being pushed or influenced to do something.",
        "A type of computer program.",
        "A method of studying.",
        "A physical exercise.",
      ],
      correct:
        "A feeling of being pushed or influenced to do something.",
    },
    {
      question: "What does 'balance' mean in the passage?",
      options: [
        "Using only technology.",
        "Avoiding all modern devices.",
        "Keeping two different parts at a healthy level.",
        "Spending all day online.",
      ],
      correct:
        "Keeping two different parts at a healthy level.",
    },
    {
      question: "What does 'increasingly' mean?",
      options: [
        "Less and less.",
        "More and more over time.",
        "Only once.",
        "Suddenly and unexpectedly.",
      ],
      correct: "More and more over time.",
    },
  ],

  section4: [
    {
      sentence:
        "People can now communicate with friends and family around the ______.",
      correct: "world",
    },
    {
      sentence:
        "Students can attend ______ classes using technology.",
      correct: "online",
    },
    {
      sentence:
        "Many employees can work from ______ instead of traveling to an office.",
      correct: "home",
    },
    {
      sentence:
        "Spending too much time looking at screens can reduce physical ______.",
      correct: "activity",
    },
    {
      sentence:
        "People need to find a healthy ______ between technology and real life.",
      correct: "balance",
    },
  ],

  section5: [
    {
      question:
        "Why might online education be especially useful for some people?",
      options: [
        "It can help people who live far from schools or universities.",
        "It prevents people from learning independently.",
        "It requires everyone to travel more.",
        "It removes access to educational information.",
      ],
      correct:
        "It can help people who live far from schools or universities.",
    },
    {
      question:
        "What can we infer about the writer's view of technology?",
      options: [
        "Technology is completely harmful.",
        "Technology is completely perfect.",
        "Technology has benefits and disadvantages and should be used carefully.",
        "Technology should replace all human activities.",
      ],
      correct:
        "Technology has benefits and disadvantages and should be used carefully.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Technology only causes problems.",
        "Technology has changed many parts of life, but people need to use it responsibly.",
        "People should stop using smartphones.",
        "Online education is the only important use of technology.",
      ],
      correct:
        "Technology has changed many parts of life, but people need to use it responsibly.",
    },
  ],

  pdfFileName: "b1-the-power-of-technology-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/life-in-a-small-town"
      previousTitle="Life in a Small Town"
      nextHref="/exercises/reading/b1/a-memorable-journey"
      nextTitle="A Memorable Journey"
    />
  );
}