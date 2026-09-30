import ReadingTemplate, {
  ReadingData,
} from "../../a2/template/ReadingTemplate";

const readingData: ReadingData = {
  title: "The Future of Cities",
  level: "B2 Reading Worksheet",
  description:
    "Read the passage about how cities may develop in the future and answer the questions carefully.",

  passage: `Cities around the world are changing rapidly. Population growth, technological development, environmental concerns, and changing lifestyles are influencing the way urban areas are designed and managed. As more people move to cities, planners are looking for ways to make urban life more efficient, sustainable, and comfortable.

One important trend is the development of smarter transportation systems. Many cities are investing in public transportation, bicycle networks, and pedestrian-friendly streets. Some are also testing electric buses and other low-emission vehicles. The aim is not simply to move people more quickly, but to reduce traffic, air pollution, and dependence on private cars.

Technology is also changing how city services operate. Sensors can collect information about traffic, energy use, and waste management. This information can help local authorities identify problems and use resources more efficiently. However, the growing use of technology also raises questions about privacy and how personal data should be collected and stored.

Another challenge is the need for more green spaces. Parks, trees, and public gardens can improve the quality of urban life by providing places for people to relax and exercise. They can also help reduce temperatures in areas where concrete buildings and roads absorb large amounts of heat.

Future cities will therefore need to balance several different priorities. They must provide housing and transportation for growing populations while also protecting the environment and maintaining a good quality of life. Technology can contribute to these goals, but it cannot solve every problem by itself. Successful urban development will depend on careful planning, public participation, and decisions that consider both present needs and future challenges.`,

  section1: [
    {
      question: "What factors are influencing the development of cities?",
      options: [
        "Only population growth.",
        "Population growth, technology, environmental concerns, and changing lifestyles.",
        "Only transportation problems.",
        "Only changes in building design.",
      ],
      correct:
        "Population growth, technology, environmental concerns, and changing lifestyles.",
    },
    {
      question: "Why are some cities investing in bicycle networks and pedestrian-friendly streets?",
      options: [
        "To increase dependence on private cars.",
        "To reduce traffic and pollution.",
        "To make transportation more expensive.",
        "To reduce the number of public spaces.",
      ],
      correct: "To reduce traffic and pollution.",
    },
    {
      question: "How can sensors help cities?",
      options: [
        "By collecting information that can improve the use of resources.",
        "By replacing all city workers.",
        "By preventing people from using public transportation.",
        "By eliminating the need for urban planning.",
      ],
      correct:
        "By collecting information that can improve the use of resources.",
    },
    {
      question: "What is one benefit of green spaces?",
      options: [
        "They increase traffic.",
        "They make buildings hotter.",
        "They provide places for people to relax and exercise.",
        "They eliminate the need for public transportation.",
      ],
      correct:
        "They provide places for people to relax and exercise.",
    },
    {
      question: "What does successful urban development require?",
      options: [
        "Technology alone.",
        "More private cars.",
        "Careful planning and public participation.",
        "Fewer public spaces.",
      ],
      correct: "Careful planning and public participation.",
    },
  ],

  section2: [
    {
      statement:
        "The passage suggests that cities are changing for several different reasons.",
      correct: "True",
    },
    {
      statement:
        "The main purpose of new transportation systems is only to make journeys faster.",
      correct: "False",
    },
    {
      statement:
        "Technology can help authorities understand how city resources are being used.",
      correct: "True",
    },
    {
      statement:
        "The passage suggests that green spaces have no effect on urban temperatures.",
      correct: "False",
    },
    {
      statement:
        "Technology alone cannot solve every problem faced by future cities.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'urban' mean?",
      options: [
        "Related to cities or towns.",
        "Related only to forests.",
        "Related to rural farming.",
        "Related to oceans and beaches.",
      ],
      correct: "Related to cities or towns.",
    },
    {
      question: "What does 'sustainable' mean in the passage?",
      options: [
        "Able to continue without causing serious long-term damage.",
        "Designed to increase pollution.",
        "Only useful for a short period.",
        "Dependent on private cars.",
      ],
      correct:
        "Able to continue without causing serious long-term damage.",
    },
    {
      question: "What does 'low-emission' mean?",
      options: [
        "Producing relatively small amounts of pollution.",
        "Using a large amount of fuel.",
        "Moving at a very low speed.",
        "Having no passengers.",
      ],
      correct:
        "Producing relatively small amounts of pollution.",
    },
    {
      question: "What does 'privacy' mean in the passage?",
      options: [
        "The protection of personal information and private activities.",
        "The ability to use public transportation.",
        "The development of green spaces.",
        "The management of traffic.",
      ],
      correct:
        "The protection of personal information and private activities.",
    },
    {
      question: "What does 'priorities' mean?",
      options: [
        "Things that are considered more important and should receive attention first.",
        "Problems that have already been solved.",
        "Different types of public transportation.",
        "Technological devices used by cities.",
      ],
      correct:
        "Things that are considered more important and should receive attention first.",
    },
  ],

  section4: [
    {
      sentence:
        "Cities are looking for ways to make urban life more efficient and ______.",
      correct: "sustainable",
    },
    {
      sentence:
        "Some cities are testing electric and other low-______ vehicles.",
      correct: "emission",
    },
    {
      sentence:
        "The use of technology raises questions about data and ______.",
      correct: "privacy",
    },
    {
      sentence:
        "Parks and trees can improve the quality of ______ life.",
      correct: "urban",
    },
    {
      sentence:
        "Future cities will need to balance several different ______.",
      correct: "priorities",
    },
  ],

  section5: [
    {
      question:
        "Why does the writer mention privacy when discussing smart city technology?",
      options: [
        "To show that technological development can create new concerns as well as benefits.",
        "To argue that cities should stop using technology.",
        "To explain why public transportation is becoming less popular.",
        "To show that sensors cannot collect useful information.",
      ],
      correct:
        "To show that technological development can create new concerns as well as benefits.",
    },
    {
      question:
        "What can be inferred about the role of green spaces in future cities?",
      options: [
        "They are likely to be considered part of both environmental and quality-of-life planning.",
        "They will probably disappear as cities become larger.",
        "They are useful only for tourists.",
        "They have no relationship with climate or public health.",
      ],
      correct:
        "They are likely to be considered part of both environmental and quality-of-life planning.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Technology will solve all future urban problems.",
        "Future cities will need to combine technology, environmental planning, transportation, and public needs.",
        "Private cars are the best solution for growing cities.",
        "Green spaces are more important than all other urban services.",
      ],
      correct:
        "Future cities will need to combine technology, environmental planning, transportation, and public needs.",
    },
  ],

  pdfFileName: "b2-the-future-of-cities-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b2/digital-learning"
      previousTitle="Digital Learning"
      nextHref="/exercises/reading/b2/social-media-and-society"
      nextTitle="Social Media and Society"
    />
  );
}