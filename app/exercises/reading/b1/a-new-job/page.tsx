import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A New Job",
  level: "B1 Reading Worksheet",
  description:
    "Read about starting a new job, meeting new colleagues, and adapting to a new workplace.",

  passage: `Last month, Daniel started a new job at a small technology company in the city center. He had worked for a larger company before, so the new workplace felt very different at first. There were only fifteen employees, and everyone seemed to know each other well.

On his first day, Daniel arrived twenty minutes early because he did not want to be late. His manager, Sarah, welcomed him and introduced him to the other employees. His new colleagues were friendly, but Daniel felt a little nervous because he did not know what to expect.

During his first week, Daniel spent most of his time learning about the company and understanding his new responsibilities. He also had several meetings with his manager. Sarah explained that Daniel would be responsible for communicating with some of the company's international customers.

At first, Daniel was worried about speaking English with customers because he sometimes needed extra time to find the right words. However, after a few conversations, he became more comfortable. One of his colleagues, Emma, gave him some useful advice: "Don't worry about making small mistakes. The important thing is to communicate clearly."

After a month, Daniel began to feel much more confident. He had learned how the company worked, made several new friends, and become comfortable with his responsibilities. Although starting a new job had been difficult at first, Daniel realized that the experience had helped him become more independent and confident.`,

  section1: [
    {
      question:
        "Why did Daniel arrive twenty minutes early on his first day?",
      options: [
        "He wanted to meet Emma.",
        "He did not want to be late.",
        "He wanted to have breakfast.",
        "He had an early meeting.",
      ],
      correct: "He did not want to be late.",
    },
    {
      question: "How many employees worked at the new company?",
      options: ["Ten", "Fifteen", "Twenty", "Thirty"],
      correct: "Fifteen",
    },
    {
      question: "What was Daniel responsible for?",
      options: [
        "Training new employees.",
        "Managing the company.",
        "Communicating with international customers.",
        "Organizing meetings.",
      ],
      correct: "Communicating with international customers.",
    },
    {
      question: "Why was Daniel worried about speaking English?",
      options: [
        "He did not understand English.",
        "He had never spoken to customers before.",
        "He sometimes needed extra time to find the right words.",
        "His manager did not speak English.",
      ],
      correct: "He sometimes needed extra time to find the right words.",
    },
    {
      question: "How did Daniel feel after one month?",
      options: [
        "More confident.",
        "More nervous.",
        "Unhappy with his job.",
        "Ready to leave the company.",
      ],
      correct: "More confident.",
    },
  ],

  section2: [
    {
      statement:
        "Daniel had worked for a larger company before starting his new job.",
      correct: "True",
    },
    {
      statement:
        "There were more than fifty employees at the new company.",
      correct: "False",
    },
    {
      statement: "Sarah was Daniel's manager.",
      correct: "True",
    },
    {
      statement:
        "Daniel never felt nervous during his first week.",
      correct: "False",
    },
    {
      statement:
        "Emma advised Daniel not to worry about small mistakes.",
      correct: "True",
    },
  ],

  section3: [
    {
      question:
        "In the passage, what does the word 'responsibilities' mean?",
      options: [
        "Things a person is expected to do",
        "Free time",
        "Problems",
        "Friends",
      ],
      correct: "Things a person is expected to do",
    },
    {
      question: "What does 'comfortable' mean in the passage?",
      options: [
        "Relaxed and confident",
        "Angry",
        "Tired",
        "Confused",
      ],
      correct: "Relaxed and confident",
    },
    {
      question: "What does 'colleague' mean?",
      options: [
        "A customer",
        "A person you work with",
        "A manager from another company",
        "A family member",
      ],
      correct: "A person you work with",
    },
    {
      question: "What does 'independent' mean in the final paragraph?",
      options: [
        "Able to do things without depending on others",
        "Unable to work",
        "Afraid of new situations",
        "Interested in meeting customers",
      ],
      correct: "Able to do things without depending on others",
    },
    {
      question: "What does 'experience' refer to in the final paragraph?",
      options: [
        "Daniel's previous holiday",
        "Daniel's time and activities at the new job",
        "Daniel's university studies",
        "Daniel's conversations with his family",
      ],
      correct:
        "Daniel's time and activities at the new job",
    },
  ],

  section4: [
    {
      sentence:
        "Daniel started a new ______ at a technology company.",
      correct: "job",
    },
    {
      sentence:
        "Sarah ______ Daniel to the other employees on his first day.",
      correct: "introduced",
    },
    {
      sentence:
        "Daniel was responsible for communicating with international ______.",
      correct: "customers",
    },
    {
      sentence:
        "Emma told Daniel that he should not worry about making small ______.",
      correct: "mistakes",
    },
    {
      sentence:
        "After one month, Daniel felt much more ______ about his new job.",
      correct: "confident",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Daniel decided to leave his old company.",
        "Daniel learned to adapt to a new job and became more confident.",
        "Daniel wanted to become a manager.",
        "Daniel had problems with all of his colleagues.",
      ],
      correct:
        "Daniel learned to adapt to a new job and became more confident.",
    },
    {
      question:
        "What can we infer about Daniel's colleagues?",
      options: [
        "They were generally supportive.",
        "They did not want to help him.",
        "They were all new employees.",
        "They were unhappy with the company.",
      ],
      correct: "They were generally supportive.",
    },
    {
      question:
        "What lesson did Daniel learn from his experience?",
      options: [
        "Starting a new job is always easy.",
        "Making mistakes means you should stop trying.",
        "New experiences can help people become more independent and confident.",
        "It is better to avoid communicating with customers.",
      ],
      correct:
        "New experiences can help people become more independent and confident.",
    },
  ],

  pdfFileName: "b1-a-new-job-reading.pdf",
};

export default function ANewJobPage() {
  return <ReadingTemplate data={readingData} />;
}