import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "Planning a Holiday",
  level: "A2 Reading Worksheet",
  description:
    "Read about planning a holiday and choosing the best destination.",

  passage: `My friends and I are planning a holiday for next summer. We all want to travel together, but choosing where to go has been difficult because everyone has a different idea.

My friend Lisa wants to visit a large city. She enjoys museums, restaurants, and shopping, so she thinks a city would be perfect. She has already found several hotels near the city center.

Tom prefers the beach. He wants to swim in the sea, relax in the sun, and spend most of the holiday outside. He says that after a busy year at work, he needs a quiet and relaxing holiday.

I would like to visit a small town in the mountains. I enjoy walking and taking photos of nature. I think a mountain holiday would be peaceful and different from our normal daily lives.

We spent one evening talking about our ideas and checking different places online. We compared hotel prices, transportation, weather, and things to do. We also looked at how long it would take to travel to each place.

In the end, we decided to choose a town near the sea. It is not a large city, but it has some museums and restaurants. There is also a beautiful beach nearby, and there are several walking trails in the surrounding hills.

Everyone agreed that this place could offer something for each of us. Lisa can visit museums and restaurants, Tom can enjoy the beach, and I can go walking and take photos.

Now we are checking the hotel options and making a list of things we need to take with us. We are all excited about the trip, and we hope the weather will be good.`,

  section1: [
    {
      question: "Why was it difficult to choose a holiday destination?",
      options: [
        "The friends did not have enough money.",
        "Everyone had a different idea.",
        "They did not want to travel together.",
        "The weather was always bad.",
      ],
      correct: "Everyone had a different idea.",
    },
    {
      question: "What does Lisa want to do on holiday?",
      options: [
        "Walk in the mountains",
        "Relax on the beach",
        "Visit museums, restaurants, and shops",
        "Stay in a small village",
      ],
      correct: "Visit museums, restaurants, and shops",
    },
    {
      question: "Why does Tom want to visit the beach?",
      options: [
        "He wants to work there.",
        "He wants to relax after a busy year.",
        "He wants to visit museums.",
        "He enjoys taking photos of mountains.",
      ],
      correct: "He wants to relax after a busy year.",
    },
    {
      question: "What does the writer enjoy doing?",
      options: [
        "Shopping",
        "Swimming",
        "Walking and taking photos of nature",
        "Visiting large cities",
      ],
      correct: "Walking and taking photos of nature",
    },
    {
      question: "Where did the friends finally decide to go?",
      options: [
        "A large city",
        "A town near the sea",
        "A mountain village",
        "A hotel in the city center",
      ],
      correct: "A town near the sea",
    },
  ],

  section2: [
    {
      statement: "Lisa prefers large cities.",
      correct: "True",
    },
    {
      statement: "Tom wants to spend most of his holiday inside.",
      correct: "False",
    },
    {
      statement: "The writer enjoys nature.",
      correct: "True",
    },
    {
      statement: "The friends only compared hotel prices.",
      correct: "False",
    },
    {
      statement: "The final destination has a beach and walking trails.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'destination' mean?",
      options: [
        "The place where someone is going",
        "A type of hotel",
        "A travel bag",
        "A way of traveling",
      ],
      correct: "The place where someone is going",
    },
    {
      question: "What does 'relaxing' mean?",
      options: [
        "Helping you rest and feel calm",
        "Making you work harder",
        "Making you travel faster",
        "Being very crowded",
      ],
      correct: "Helping you rest and feel calm",
    },
    {
      question: "What does 'compared' mean?",
      options: [
        "Looked at two or more things to see their differences",
        "Bought something immediately",
        "Forgot about something",
        "Changed a travel plan",
      ],
      correct:
        "Looked at two or more things to see their differences",
    },
    {
      question: "What does 'surrounding' mean?",
      options: [
        "Around a particular place",
        "Very far away",
        "Inside a building",
        "Under the ground",
      ],
      correct: "Around a particular place",
    },
    {
      question: "What does 'option' mean?",
      options: [
        "A choice",
        "A problem",
        "A journey",
        "A reservation",
      ],
      correct: "A choice",
    },
  ],

  section4: [
    {
      sentence: "The friends are planning a holiday for next _____.",
      correct: "summer",
    },
    {
      sentence: "Lisa enjoys museums, restaurants, and _____.",
      correct: "shopping",
    },
    {
      sentence: "Tom wants to swim in the _____.",
      correct: "sea",
    },
    {
      sentence: "The friends compared hotel prices and _____.",
      correct: "transportation",
    },
    {
      sentence: "The final destination has walking _____ in the hills.",
      correct: "trails",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Three friends find a holiday destination that offers something for everyone.",
        "Three friends decide to stay at home during the summer.",
        "The friends cannot agree on any holiday destination.",
        "The friends only want to visit a large city.",
      ],
      correct:
        "Three friends find a holiday destination that offers something for everyone.",
    },
    {
      question: "Why is the final destination suitable for all three friends?",
      options: [
        "It has museums, a beach, and places for walking.",
        "It is the cheapest place they found.",
        "It is the largest city in the country.",
        "It only has quiet beaches.",
      ],
      correct:
        "It has museums, a beach, and places for walking.",
    },
    {
      question: "What are the friends doing at the end of the passage?",
      options: [
        "Checking hotels and preparing for the trip",
        "Canceling their holiday",
        "Looking for a different destination",
        "Returning home from their holiday",
      ],
      correct:
        "Checking hotels and preparing for the trip",
    },
  ],

  pdfFileName: "a2-planning-a-holiday-reading.pdf",
};

export default function PlanningAHolidayPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-day-without-my-phone"
      previousTitle="A Day Without My Phone"
      nextHref="/exercises/reading/a2"
      nextTitle="A2 Reading"
    />
  );
}