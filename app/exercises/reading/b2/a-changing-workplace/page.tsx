import ReadingTemplate, {
  ReadingData,
} from "../../a2/template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A Changing Workplace",
  level: "B2 Reading Worksheet",
  description:
    "Read the passage about changes in the modern workplace and answer the questions carefully.",

  passage: `The modern workplace has changed significantly over the past few decades. Advances in technology, changing employee expectations, and new approaches to management have influenced how, where, and when people work. While some of these changes have created new opportunities, they have also introduced challenges that organizations need to consider.

One major change has been the growth of remote and hybrid working. Employees in many industries can now perform tasks from home or from locations outside a traditional office. This arrangement can reduce commuting time and give employees greater flexibility. However, it may also make communication more complicated, particularly when teams rarely meet in person.

Another important development is the increasing use of digital tools. Video-conferencing platforms, project-management systems, and instant messaging allow employees in different locations to collaborate. At the same time, the constant availability of digital communication can make it difficult for workers to disconnect from their jobs. Some employees feel pressure to respond to messages outside normal working hours.

Companies are therefore having to reconsider what productivity means. In the past, managers often associated productivity with the number of hours employees spent in the office. Today, many organizations are placing greater emphasis on results rather than physical presence. This shift requires managers to establish clear expectations and trust employees to organize their work effectively.

The workplace is likely to continue evolving as technology develops and employee preferences change. Organizations that adapt carefully may create working environments that are both productive and flexible. However, successful change depends not only on technology but also on communication, management practices, and an understanding of employees' needs.`,

  section1: [
    {
      question: "What has influenced changes in the modern workplace?",
      options: [
        "Only advances in technology.",
        "Technology, employee expectations, and management approaches.",
        "Only government regulations.",
        "A decrease in digital communication.",
      ],
      correct:
        "Technology, employee expectations, and management approaches.",
    },
    {
      question: "What is one possible benefit of remote working?",
      options: [
        "More commuting time.",
        "Less flexibility.",
        "Reduced commuting time.",
        "Fewer opportunities to communicate.",
      ],
      correct: "Reduced commuting time.",
    },
    {
      question: "What problem can remote working sometimes create?",
      options: [
        "Communication can become more complicated.",
        "Employees cannot use technology.",
        "Employees always work fewer hours.",
        "Companies cannot measure results.",
      ],
      correct: "Communication can become more complicated.",
    },
    {
      question:
        "Why can digital communication make it difficult for some employees to disconnect?",
      options: [
        "Digital tools are only available during office hours.",
        "Employees may feel pressure to respond outside normal working hours.",
        "Employees cannot communicate with colleagues.",
        "Digital tools prevent employees from working remotely.",
      ],
      correct:
        "Employees may feel pressure to respond outside normal working hours.",
    },
    {
      question: "How are some organizations redefining productivity?",
      options: [
        "By focusing more on results than physical presence.",
        "By requiring employees to work longer hours.",
        "By eliminating digital tools.",
        "By measuring only the time spent in the office.",
      ],
      correct:
        "By focusing more on results than physical presence.",
    },
  ],

  section2: [
    {
      statement:
        "The passage suggests that workplace changes have created both opportunities and challenges.",
      correct: "True",
    },
    {
      statement:
        "Remote working always makes communication easier.",
      correct: "False",
    },
    {
      statement:
        "Digital communication can sometimes make it difficult for employees to disconnect from work.",
      correct: "True",
    },
    {
      statement:
        "Modern organizations are increasingly interested in results rather than physical presence alone.",
      correct: "True",
    },
    {
      statement:
        "The writer believes technology is the only factor necessary for successful workplace change.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does 'hybrid working' mean in the passage?",
      options: [
        "Working only from home.",
        "Combining different ways of working, such as remote and office work.",
        "Working without digital tools.",
        "Working for several companies at once.",
      ],
      correct:
        "Combining different ways of working, such as remote and office work.",
    },
    {
      question: "What does 'collaborate' mean?",
      options: [
        "To work together.",
        "To work alone.",
        "To avoid communication.",
        "To manage a company.",
      ],
      correct: "To work together.",
    },
    {
      question: "What does 'productivity' refer to?",
      options: [
        "The ability to produce useful results effectively.",
        "The amount of time spent traveling.",
        "The number of employees in an office.",
        "The cost of digital technology.",
      ],
      correct:
        "The ability to produce useful results effectively.",
    },
    {
      question: "What does 'emphasis' mean?",
      options: [
        "Special importance or attention given to something.",
        "A reduction in responsibility.",
        "A disagreement between employees.",
        "A physical workplace.",
      ],
      correct:
        "Special importance or attention given to something.",
    },
    {
      question: "What does 'evolving' mean?",
      options: [
        "Remaining exactly the same.",
        "Changing and developing over time.",
        "Becoming less important.",
        "Returning to an earlier situation.",
      ],
      correct: "Changing and developing over time.",
    },
  ],

  section4: [
    {
      sentence:
        "Remote and ______ working have become more common in many industries.",
      correct: "hybrid",
    },
    {
      sentence:
        "Digital tools allow employees in different locations to ______.",
      correct: "collaborate",
    },
    {
      sentence:
        "Some employees find it difficult to ______ from their jobs.",
      correct: "disconnect",
    },
    {
      sentence:
        "Many organizations are placing greater ______ on results.",
      correct: "emphasis",
    },
    {
      sentence:
        "The workplace is likely to continue ______ as technology develops.",
      correct: "evolving",
    },
  ],

  section5: [
    {
      question:
        "What can be inferred about the writer's view of remote and hybrid working?",
      options: [
        "The writer presents it as completely positive.",
        "The writer presents it as completely negative.",
        "The writer recognizes both its benefits and its challenges.",
        "The writer believes it should replace all office work.",
      ],
      correct:
        "The writer recognizes both its benefits and its challenges.",
    },
    {
      question:
        "Why does the writer mention the changing definition of productivity?",
      options: [
        "To show that organizations may need to rethink traditional management practices.",
        "To argue that employees should work fewer hours.",
        "To prove that offices are no longer necessary.",
        "To explain why technology should be removed from workplaces.",
      ],
      correct:
        "To show that organizations may need to rethink traditional management practices.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Technology has made traditional workplaces completely unnecessary.",
        "Modern workplaces are changing, and successful organizations need to balance flexibility, productivity, communication, and employee needs.",
        "Employees are more productive when they never work from home.",
        "Digital communication has created more problems than opportunities.",
      ],
      correct:
        "Modern workplaces are changing, and successful organizations need to balance flexibility, productivity, communication, and employee needs.",
    },
  ],

  pdfFileName: "b2-a-changing-workplace-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b2"
      previousTitle="B2 Reading"
      nextHref="/exercises/reading/b2/digital-learning"
      nextTitle="Digital Learning"
    />
  );
}