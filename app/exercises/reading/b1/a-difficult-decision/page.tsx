import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Difficult Decision",
  level: "B1 Reading Worksheet",
  description:
    "Read about an important decision and the challenges of choosing between different options.",

  passage: `When Lisa finished university, she received two interesting job offers. One was from a large company in the city where she lived. The salary was good, and the company offered several opportunities for professional development. The other job was at a smaller company in another city. It offered a little less money, but the position was more closely related to Lisa's interests.

At first, Lisa thought the decision would be easy. She believed that the larger company would give her more opportunities in the future. However, after talking to her family and some of her university professors, she started to think more carefully about what she really wanted.

Lisa made a list of the advantages and disadvantages of both jobs. The large company offered a higher salary and a clear career path, but Lisa would have to travel almost two hours every day. The smaller company was closer to the center of the new city, and the position would allow her to work on projects that she found more interesting.

Another important point was the working environment. Lisa visited both companies before making her decision. At the larger company, she noticed that the office was very busy and formal. At the smaller company, people seemed more relaxed and often worked together as a team.

After several days of thinking, Lisa decided to accept the job at the smaller company. She knew that the salary was lower, but she believed that enjoying her work and having enough time for her personal life were also important. She understood that there was no perfect choice, but she felt confident about her decision.`,

  section1: [
    {
      question:
        "What did the larger company offer Lisa?",
      options: [
        "A higher salary and professional development opportunities.",
        "Free accommodation.",
        "A shorter working week.",
        "A position in another country.",
      ],
      correct:
        "A higher salary and professional development opportunities.",
    },
    {
      question:
        "Why was the smaller company attractive to Lisa?",
      options: [
        "It offered the highest salary.",
        "The position was more closely related to her interests.",
        "It was owned by her family.",
        "She already knew everyone there.",
      ],
      correct:
        "The position was more closely related to her interests.",
    },
    {
      question:
        "What did Lisa do to compare the two jobs?",
      options: [
        "She asked her friends to choose for her.",
        "She made a list of advantages and disadvantages.",
        "She rejected both offers immediately.",
        "She compared only the salaries.",
      ],
      correct:
        "She made a list of advantages and disadvantages.",
    },
    {
      question:
        "What did Lisa notice when she visited the larger company?",
      options: [
        "The office was quiet and informal.",
        "People worked mainly from home.",
        "The office was busy and formal.",
        "Employees worked outside.",
      ],
      correct:
        "The office was busy and formal.",
    },
    {
      question:
        "Why did Lisa finally choose the smaller company?",
      options: [
        "She believed work-life balance and enjoying her work were important.",
        "It offered a much higher salary.",
        "Her professors told her to choose it.",
        "It was closer to her university.",
      ],
      correct:
        "She believed work-life balance and enjoying her work were important.",
    },
  ],

  section2: [
    {
      statement:
        "Lisa received two job offers after finishing university.",
      correct: "True",
    },
    {
      statement:
        "Both companies offered exactly the same salary.",
      correct: "False",
    },
    {
      statement:
        "Lisa discussed her decision with family members and professors.",
      correct: "True",
    },
    {
      statement:
        "The larger company had a relaxed and informal working environment.",
      correct: "False",
    },
    {
      statement:
        "Lisa believed there was no perfect choice.",
      correct: "True",
    },
  ],

  section3: [
    {
      question:
        "What does the word 'opportunities' mean in the passage?",
      options: [
        "Chances to do or achieve something",
        "Problems at work",
        "Rules at a company",
        "Working hours",
      ],
      correct:
        "Chances to do or achieve something",
    },
    {
      question:
        "What does 'advantages' mean?",
      options: [
        "Positive points or benefits",
        "Difficult decisions",
        "Negative experiences",
        "Personal problems",
      ],
      correct:
        "Positive points or benefits",
    },
    {
      question:
        "What does 'formal' mean when describing the office?",
      options: [
        "Relaxed and casual",
        "Professional and serious",
        "Small and crowded",
        "Quiet and empty",
      ],
      correct:
        "Professional and serious",
    },
    {
      question:
        "What does 'personal life' refer to?",
      options: [
        "A person's life outside work",
        "A person's university grades",
        "A person's salary",
        "A person's job responsibilities",
      ],
      correct:
        "A person's life outside work",
    },
    {
      question:
        "What does 'confident' mean in the final paragraph?",
      options: [
        "Certain and comfortable about a decision",
        "Angry about a situation",
        "Confused about the future",
        "Afraid to make a choice",
      ],
      correct:
        "Certain and comfortable about a decision",
    },
  ],

  section4: [
    {
      sentence:
        "Lisa received two job ______ after finishing university.",
      correct: "offers",
    },
    {
      sentence:
        "The larger company offered several opportunities for professional ______.",
      correct: "development",
    },
    {
      sentence:
        "Lisa made a list of the advantages and ______ of both jobs.",
      correct: "disadvantages",
    },
    {
      sentence:
        "The smaller company allowed Lisa to work on more interesting ______.",
      correct: "projects",
    },
    {
      sentence:
        "Lisa wanted to enjoy her work and have enough time for her personal ______.",
      correct: "life",
    },
  ],

  section5: [
    {
      question:
        "What is the main idea of the passage?",
      options: [
        "Lisa wanted the highest possible salary.",
        "Lisa carefully compared two job offers and chose the one that better matched her interests and lifestyle.",
        "Lisa decided not to work after university.",
        "Lisa's professors chose her new job for her.",
      ],
      correct:
        "Lisa carefully compared two job offers and chose the one that better matched her interests and lifestyle.",
    },
    {
      question:
        "What can we infer about Lisa?",
      options: [
        "She only cares about money.",
        "She considers several factors when making important decisions.",
        "She does not listen to other people's advice.",
        "She dislikes working with other people.",
      ],
      correct:
        "She considers several factors when making important decisions.",
    },
    {
      question:
        "What does Lisa's decision suggest about her priorities?",
      options: [
        "She values only professional status.",
        "She values work satisfaction and personal time as well as income.",
        "She wants to avoid responsibility.",
        "She prefers difficult working conditions.",
      ],
      correct:
        "She values work satisfaction and personal time as well as income.",
    },
  ],

  pdfFileName: "b1-a-difficult-decision-reading.pdf",
};

export default function ADifficultDecisionPage() {
  return <ReadingTemplate data={readingData} />;
}