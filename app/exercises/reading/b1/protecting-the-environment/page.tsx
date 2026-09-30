import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Protecting the Environment",
  level: "B1 Reading Worksheet",
  description:
    "Read the passage about protecting the environment and answer the questions carefully.",

  passage: `Protecting the environment has become an important issue for people around the world. Human activities such as using large amounts of energy, producing waste, and cutting down forests can have a negative effect on nature. Although governments and large companies have important responsibilities, individuals can also make a difference through their everyday choices.

One simple way to help the environment is to reduce unnecessary waste. People can use reusable bags and bottles instead of disposable ones. Recycling paper, glass, metal, and plastic can also reduce the amount of waste that ends up in landfills.

Another important issue is energy use. Turning off lights when they are not needed, using energy-efficient appliances, and choosing public transportation can help reduce energy consumption. Some people also choose to walk or cycle for short journeys instead of using a car.

However, protecting the environment is not only about individual actions. Governments can introduce laws that protect forests, reduce pollution, and encourage the use of renewable energy. Companies can also develop products and systems that use fewer natural resources.

There is no single solution to environmental problems. Real progress requires cooperation between individuals, businesses, and governments. Small actions may seem unimportant on their own, but when many people make better choices, they can have a significant effect over time.`,

  section1: [
    {
      question: "What is one cause of environmental problems mentioned in the passage?",
      options: [
        "Using large amounts of energy and producing waste.",
        "Walking and cycling.",
        "Recycling household materials.",
        "Using reusable bottles.",
      ],
      correct: "Using large amounts of energy and producing waste.",
    },
    {
      question: "How can people reduce unnecessary waste?",
      options: [
        "By using more disposable products.",
        "By using reusable bags and bottles.",
        "By buying more plastic products.",
        "By avoiding recycling.",
      ],
      correct: "By using reusable bags and bottles.",
    },
    {
      question: "What can help reduce energy consumption?",
      options: [
        "Leaving lights on all day.",
        "Using a car for every journey.",
        "Turning off unnecessary lights.",
        "Buying more electronic devices.",
      ],
      correct: "Turning off unnecessary lights.",
    },
    {
      question: "What can governments do to protect the environment?",
      options: [
        "Encourage people to produce more waste.",
        "Introduce laws that reduce pollution and protect forests.",
        "Stop companies from developing new products.",
        "Prevent people from using public transportation.",
      ],
      correct:
        "Introduce laws that reduce pollution and protect forests.",
    },
    {
      question: "According to the passage, what is necessary for real progress?",
      options: [
        "Only individual action.",
        "Only government action.",
        "Cooperation between individuals, businesses, and governments.",
        "Avoiding all modern technology.",
      ],
      correct:
        "Cooperation between individuals, businesses, and governments.",
    },
  ],

  section2: [
    {
      statement:
        "The passage says that individuals cannot do anything to help the environment.",
      correct: "False",
    },
    {
      statement:
        "Using reusable products can help reduce waste.",
      correct: "True",
    },
    {
      statement:
        "Walking and cycling can be alternatives to using a car for short journeys.",
      correct: "True",
    },
    {
      statement:
        "Only governments have responsibilities for protecting the environment.",
      correct: "False",
    },
    {
      statement:
        "Small actions can have a significant effect when many people make better choices.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'disposable' mean in the passage?",
      options: [
        "Designed to be used once or a limited number of times.",
        "Designed to last forever.",
        "Made from natural materials only.",
        "Very expensive to produce.",
      ],
      correct:
        "Designed to be used once or a limited number of times.",
    },
    {
      question: "What does 'landfills' mean?",
      options: [
        "Places where waste is buried or stored.",
        "Places where forests are protected.",
        "Factories that produce renewable energy.",
        "Public transportation stations.",
      ],
      correct: "Places where waste is buried or stored.",
    },
    {
      question: "What does 'renewable energy' refer to?",
      options: [
        "Energy from sources that can naturally be replaced.",
        "Energy that can only be used once.",
        "Energy produced from plastic waste.",
        "Energy that always comes from cars.",
      ],
      correct:
        "Energy from sources that can naturally be replaced.",
    },
    {
      question: "What does 'cooperation' mean?",
      options: [
        "Working together toward a common goal.",
        "Working completely alone.",
        "Avoiding responsibility.",
        "Competing with other people.",
      ],
      correct: "Working together toward a common goal.",
    },
    {
      question: "What does 'significant' mean in the passage?",
      options: [
        "Very small and unimportant.",
        "Important or noticeable.",
        "Temporary and unexpected.",
        "Difficult to understand.",
      ],
      correct: "Important or noticeable.",
    },
  ],

  section4: [
    {
      sentence:
        "Using reusable bags and bottles can reduce unnecessary ______.",
      correct: "waste",
    },
    {
      sentence:
        "Recycling can reduce the amount of waste that ends up in ______.",
      correct: "landfills",
    },
    {
      sentence:
        "People can choose public ______ instead of using a car.",
      correct: "transportation",
    },
    {
      sentence:
        "Governments can introduce laws that reduce ______.",
      correct: "pollution",
    },
    {
      sentence:
        "Real progress requires ______ between individuals, businesses, and governments.",
      correct: "cooperation",
    },
  ],

  section5: [
    {
      question:
        "Why does the writer mention both individual and government actions?",
      options: [
        "To show that environmental protection requires action at different levels.",
        "To prove that individuals have no responsibilities.",
        "To explain why governments should do everything alone.",
        "To suggest that companies cannot help the environment.",
      ],
      correct:
        "To show that environmental protection requires action at different levels.",
    },
    {
      question:
        "What can we infer about small environmental actions?",
      options: [
        "They are completely useless.",
        "They can become important when many people take part.",
        "They only help businesses.",
        "They are more important than government policies in every situation.",
      ],
      correct:
        "They can become important when many people take part.",
    },
    {
      question: "What is the main idea of the passage?",
      options: [
        "Environmental problems can only be solved by governments.",
        "Individuals, businesses, and governments all have roles in protecting the environment.",
        "People should stop using all modern technology.",
        "Recycling is the only solution to environmental problems.",
      ],
      correct:
        "Individuals, businesses, and governments all have roles in protecting the environment.",
    },
  ],

  pdfFileName: "b1-protecting-the-environment-reading.pdf",
};

export default function LessonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/b1/working-from-home"
      previousTitle="Working from Home"
      nextHref="/exercises/reading/b1/the-value-of-friendship"
      nextTitle="The Value of Friendship"
    />
  );
}