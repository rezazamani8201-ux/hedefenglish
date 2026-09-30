import ReadingTemplate, {
  ReadingData,
} from "../../a2/template/ReadingTemplate";

const readingData: ReadingData = {
  title: "The Importance of Critical Thinking",
  level: "B2 Reading Worksheet",
  description:
    "Read the passage about critical thinking and answer the questions carefully.",

  passage: `People make decisions and form opinions every day. They receive information from newspapers, websites, social media, advertisements, friends, and colleagues. Because information is available in such large quantities, knowing how to evaluate it has become an increasingly important skill. Critical thinking helps people examine information carefully instead of accepting every claim immediately.

Critical thinking does not simply mean disagreeing with everything. Instead, it involves asking questions about the evidence behind a claim, considering different explanations, and distinguishing between facts and opinions. A critical thinker is willing to change an opinion when new and convincing evidence becomes available.

One useful habit is to consider the source of information. A statement from an expert in a particular field may deserve more attention than an anonymous comment, but expertise alone does not guarantee that every claim is correct. It is also important to consider whether the evidence actually supports the conclusion being presented.

Another useful strategy is to look for alternative explanations. People sometimes prefer information that confirms what they already believe. This tendency can make it difficult to notice evidence that challenges their existing opinions. Considering different perspectives can help reduce this problem.

Critical thinking is especially important when people encounter statistics. Numbers can appear objective, but they can be presented in ways that create a misleading impression. For example, a graph may emphasize a small difference by changing its scale, or a percentage may be presented without explaining how many people were included in the study.

Ultimately, critical thinking is not about finding a perfect answer to every question. It is about developing a careful approach to information and recognizing the limits of what we know. In a world where information can spread quickly, this ability can help people make better-informed decisions and avoid being easily influenced by unsupported claims.`,

  section1: [
    {
      question: "Why has evaluating information become increasingly important?",
      options: [
        "People receive information from many different sources.",
        "People no longer receive information from other people.",
        "Most information is automatically correct.",
        "There are fewer sources of information than in the past.",
      ],
      correct:
        "People receive information from many different sources.",
    },
    {
      question: "What does critical thinking involve?",
      options: [
        "Disagreeing with every claim.",
        "Accepting information immediately.",
        "Examining evidence and considering different explanations.",
        "Ignoring information that challenges existing opinions.",
      ],
      correct:
        "Examining evidence and considering different explanations.",
    },
    {
      question: "Why should people consider the source of information?",
      options: [
        "Because anonymous sources are always wrong.",
        "Because the source can provide useful information about the credibility of a claim.",
        "Because experts can never make mistakes.",
        "Because sources are more important than evidence.",
      ],
      correct:
        "Because the source can provide useful information about the credibility of a claim.",
    },
    {
      question: "What problem can occur when people only prefer information that confirms their beliefs?",
      options: [
        "They may fail to notice evidence that challenges their opinions.",
        "They become better at evaluating statistics.",
        "They automatically consider alternative explanations.",
        "They become more willing to change their opinions.",
      ],
      correct:
        "They may fail to notice evidence that challenges their opinions.",
    },
    {
      question: "Why can statistics sometimes create a misleading impression?",
      options: [
        "Numbers are never useful.",
        "Statistics cannot be presented visually.",
        "Numbers can be presented without important context.",
        "Graphs always contain incorrect information.",
      ],
      correct:
        "Numbers can be presented without important context.",
    },
  ],

  section2: [
    {
      statement:
        "Critical thinking means disagreeing with every piece of information.",
      correct: "False",
    },
    {
      statement:
        "A critical thinker may change an opinion when convincing new evidence appears.",
      correct: "True",
    },
    {
      statement:
        "Being an expert guarantees that every claim made by that person is correct.",
      correct: "False",
    },
    {
      statement:
        "Considering alternative explanations can help people examine their existing beliefs.",
      correct: "True",
    },
    {
      statement:
        "Statistics can sometimes be misleading if important context is missing.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'evaluate' mean in the passage?",
      options: [
        "To examine something and judge its quality or value.",
        "To accept something without thinking.",
        "To avoid using information.",
        "To repeat information to other people.",
      ],
      correct:
        "To examine something and judge its quality or value.",
    },
    {
      question: "What does 'evidence' mean?",
      options: [
        "Information or facts that support a conclusion.",
        "A personal preference.",
        "An unsupported opinion.",
        "A type of advertisement.",
      ],
      correct:
        "Information or facts that support a conclusion.",
    },
    {
      question: "What does 'anonymous' mean?",
      options: [
        "Having a known and respected identity.",
        "Having an identity that is not known or revealed.",
        "Being an expert in a field.",
        "Being supported by strong evidence.",
      ],
      correct:
        "Having an identity that is not known or revealed.",
    },
    {
      question: "What does 'perspective' mean?",
      options: [
        "A particular way of viewing or understanding something.",
        "A statistical calculation.",
        "A reliable source of information.",
        "A type of scientific experiment.",
      ],
      correct:
        "A particular way of viewing or understanding something.",
    },
    {
      question: "What does 'unsupported' mean?",
      options: [
        "Not backed by sufficient evidence or proof.",
        "Supported by several experts.",
        "Based on reliable statistics.",
        "Explained clearly by a source.",
      ],
      correct:
        "Not backed by sufficient evidence or proof.",
    },
  ],

  section4: [
    {
      sentence:
        "Critical thinking helps people ______ information carefully.",
      correct: "evaluate",
    },
    {
      sentence:
        "People should consider the ______ behind a claim.",
      correct: "evidence",
    },
    {
      sentence:
        "A comment from an ______ source may be more difficult to evaluate.",
      correct: "anonymous",
    },
    {
      sentence:
        "Considering different ______ can help people examine an issue more carefully.",
      correct: "perspectives",
    },
    {
      sentence:
        "Critical thinking can help people avoid unsupported ______.",
      correct: "claims",
    },
  ],

  section5: [
    {
      question:
        "Why does the writer say that critical thinking is not simply about disagreeing?",
      options: [
        "Because critical thinking requires examining evidence rather than automatically rejecting claims.",
        "Because people should accept every claim they hear.",
        "Because disagreement is always harmful.",
        "Because evidence is not important when making decisions.",
      ],
      correct:
        "Because critical thinking requires examining evidence rather than automatically rejecting claims.",
    },
    {
      question:
        "What can be inferred from the discussion of statistics?",
      options: [
        "Numbers are always objective and impossible to manipulate.",
        "People need to consider how information is presented, not just the numbers themselves.",
        "Statistics should never be used.",
        "Graphs are always more reliable than written information.",
      ],
      correct:
        "People need to consider how information is presented, not just the numbers themselves.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "People should avoid all information from the internet.",
        "Critical thinking helps people evaluate evidence, consider different perspectives, and make better-informed decisions.",
        "Experts always provide more reliable information than everyone else.",
        "Statistics are the most important form of evidence.",
      ],
      correct:
        "Critical thinking helps people evaluate evidence, consider different perspectives, and make better-informed decisions.",
    },
  ],

  pdfFileName: "b2-the-importance-of-critical-thinking-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b2/social-media-and-society"
      previousTitle="Social Media and Society"
      nextHref="/exercises/reading/b2/artificial-intelligence-in-everyday-life"
      nextTitle="Artificial Intelligence in Everyday Life"
    />
  );
}