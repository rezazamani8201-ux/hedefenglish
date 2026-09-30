import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Working from Home",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about working from home and answer the questions carefully.",

  passage: `Working from home has become more common in recent years. For some employees, it offers greater flexibility and allows them to organize their working day in a way that suits their personal needs. However, working from home also requires discipline and good time-management skills.

Maria started working from home three days a week after her company introduced a flexible working system. At first, she was happy because she no longer had to spend almost an hour traveling to the office every morning. She could use that extra time to have breakfast with her family and prepare for the day.

However, Maria soon discovered that working from home was not always easy. Her apartment was small, and she did not have a separate office. Sometimes family members interrupted her while she was working. She also found it difficult to stop working at the end of the day because her computer was always nearby.

To solve these problems, Maria created a simple routine. She began working at the same time every morning and used one part of her living room as a workspace. She also told her family when she needed quiet time. At the end of the working day, she closed her computer and went for a short walk.

After several weeks, Maria became more comfortable with her new routine. She enjoyed having more control over her schedule and spending less time commuting. She also learned that working from home could be successful if she created clear boundaries between her work and personal life.`,

  section1: [
    {
      question: "What is one advantage of working from home?",
      options: [
        "It always requires longer working hours.",
        "It can offer greater flexibility.",
        "It prevents people from organizing their day.",
        "It requires employees to travel more.",
      ],
      correct: "It can offer greater flexibility.",
    },
    {
      question: "How much time did Maria usually spend traveling to the office?",
      options: [
        "About ten minutes.",
        "About thirty minutes.",
        "Almost an hour.",
        "More than three hours.",
      ],
      correct: "Almost an hour.",
    },
    {
      question: "What was one problem Maria experienced at home?",
      options: [
        "She had too much office space.",
        "Family members sometimes interrupted her.",
        "She could not use a computer.",
        "She had no internet connection.",
      ],
      correct: "Family members sometimes interrupted her.",
    },
    {
      question: "What did Maria do to create a better working routine?",
      options: [
        "She stopped working from home.",
        "She worked at different times every day.",
        "She created a workspace and set clear boundaries.",
        "She worked only at night.",
      ],
      correct: "She created a workspace and set clear boundaries.",
    },
    {
      question: "What did Maria do at the end of the working day?",
      options: [
        "She continued working for several more hours.",
        "She closed her computer and went for a walk.",
        "She immediately started another job.",
        "She traveled to the office.",
      ],
      correct: "She closed her computer and went for a walk.",
    },
  ],

  section2: [
    {
      statement:
        "Working from home can give employees more flexibility.",
      correct: "True",
    },
    {
      statement:
        "Maria spent more than two hours traveling to work every morning.",
      correct: "False",
    },
    {
      statement:
        "Maria had a separate office in her apartment.",
      correct: "False",
    },
    {
      statement:
        "Maria told her family when she needed quiet time.",
      correct: "True",
    },
    {
      statement:
        "Maria eventually became more comfortable with her working routine.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'flexibility' mean in the passage?",
      options: [
        "The ability to change or organize things according to one's needs.",
        "The need to work longer hours.",
        "The inability to change a schedule.",
        "The amount of money someone earns.",
      ],
      correct:
        "The ability to change or organize things according to one's needs.",
    },
    {
      question: "What does 'interrupt' mean?",
      options: [
        "To help someone finish their work.",
        "To stop or disturb someone while they are doing something.",
        "To organize a schedule.",
        "To leave a workplace.",
      ],
      correct:
        "To stop or disturb someone while they are doing something.",
    },
    {
      question: "What does 'routine' mean?",
      options: [
        "A regular way of doing things.",
        "A sudden problem.",
        "A type of office.",
        "A long vacation.",
      ],
      correct: "A regular way of doing things.",
    },
    {
      question: "What does 'boundaries' mean in the passage?",
      options: [
        "Clear limits between different activities or areas.",
        "Extra working hours.",
        "New technology.",
        "Transportation problems.",
      ],
      correct: "Clear limits between different activities or areas.",
    },
    {
      question: "What does 'commuting' mean?",
      options: [
        "Working from home.",
        "Traveling regularly between home and work.",
        "Taking a vacation.",
        "Changing jobs.",
      ],
      correct: "Traveling regularly between home and work.",
    },
  ],

  section4: [
    {
      sentence:
        "Working from home can offer greater ______.",
      correct: "flexibility",
    },
    {
      sentence:
        "Maria no longer had to spend almost an hour ______ to the office.",
      correct: "traveling",
    },
    {
      sentence:
        "Maria used one part of her living room as a ______.",
      correct: "workspace",
    },
    {
      sentence:
        "Maria created a simple working ______.",
      correct: "routine",
    },
    {
      sentence:
        "Maria learned to create clear ______ between work and personal life.",
      correct: "boundaries",
    },
  ],

  section5: [
    {
      question:
        "Why was it difficult for Maria to stop working at the end of the day?",
      options: [
        "Her office was far from her home.",
        "Her computer was always nearby.",
        "Her family wanted her to work longer.",
        "She had to travel to another city.",
      ],
      correct: "Her computer was always nearby.",
    },
    {
      question:
        "What can we infer about Maria's experience?",
      options: [
        "She found working from home impossible.",
        "She learned how to make working from home more effective.",
        "She preferred commuting after a few weeks.",
        "She stopped communicating with her family.",
      ],
      correct:
        "She learned how to make working from home more effective.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Working from home is always easier than working in an office.",
        "Working from home can have benefits, but clear routines and boundaries are important.",
        "People should never work from home.",
        "Working from home means people do not need discipline.",
      ],
      correct:
        "Working from home can have benefits, but clear routines and boundaries are important.",
    },
  ],

  pdfFileName: "b1-working-from-home-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/healthy-eating-habits"
      previousTitle="Healthy Eating Habits"
      nextHref="/exercises/reading/b1/protecting-the-environment"
      nextTitle="Protecting the Environment"
    />
  );
}