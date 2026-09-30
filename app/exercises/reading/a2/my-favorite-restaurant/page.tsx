import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Favorite Restaurant",
  level: "A2 Reading Worksheet",
  description:
    "Read about a favorite restaurant, food, and a family dinner.",

  passage: `My favorite restaurant is a small Italian restaurant near my home. It is called Bella Italia, and my family usually goes there once or twice a month. The restaurant is not very large, but it has a warm and friendly atmosphere.

I first went there with my parents when I was twelve years old. I remember liking it immediately because the staff were very friendly and the food smelled wonderful. Since then, it has become one of my favorite places to eat.

The restaurant serves different kinds of Italian food. My favorite dish is pasta with tomato sauce and vegetables. My father usually orders pizza, while my mother prefers a salad and soup. My younger brother always asks for spaghetti because it is his favorite.

Last Friday, we went to Bella Italia to celebrate my mother's birthday. We arrived at seven in the evening and found a table near the window. The waiter brought us the menus, and we ordered our food.

While we were waiting, we talked about our week. The restaurant was busy, but our food arrived after about twenty minutes. Everything tasted delicious. At the end of the meal, the waiter brought my mother a small chocolate cake with a candle. We sang Happy Birthday, and she was very surprised.

It was a simple evening, but we all enjoyed it. That is one of the reasons I love this restaurant.`,

  section1: [
    {
      question: "Where is Bella Italia?",
      options: [
        "Near the writer's school",
        "Near the writer's home",
        "In another city",
        "Near the airport",
      ],
      correct: "Near the writer's home",
    },
    {
      question: "When did the writer first visit the restaurant?",
      options: [
        "When the writer was ten",
        "When the writer was twelve",
        "When the writer was fifteen",
        "Last Friday",
      ],
      correct: "When the writer was twelve",
    },
    {
      question: "What is the writer's favorite dish?",
      options: [
        "Pizza",
        "Salad and soup",
        "Pasta with tomato sauce and vegetables",
        "Spaghetti",
      ],
      correct: "Pasta with tomato sauce and vegetables",
    },
    {
      question: "Why did the family go to the restaurant last Friday?",
      options: [
        "To celebrate the writer's birthday",
        "To celebrate the father's birthday",
        "To celebrate the mother's birthday",
        "To meet the waiter",
      ],
      correct: "To celebrate the mother's birthday",
    },
    {
      question: "What did the waiter bring the mother?",
      options: [
        "A pizza",
        "A chocolate cake with a candle",
        "A bowl of soup",
        "A birthday card",
      ],
      correct: "A chocolate cake with a candle",
    },
  ],

  section2: [
    {
      statement: "Bella Italia is a large restaurant.",
      correct: "False",
    },
    {
      statement: "The restaurant has a friendly atmosphere.",
      correct: "True",
    },
    {
      statement: "The writer's father usually orders pizza.",
      correct: "True",
    },
    {
      statement: "The family arrived at the restaurant at eight o'clock.",
      correct: "False",
    },
    {
      statement: "The food arrived after about twenty minutes.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'atmosphere' mean?",
      options: [
        "The feeling or mood of a place",
        "The size of a restaurant",
        "The price of food",
        "The number of tables",
      ],
      correct: "The feeling or mood of a place",
    },
    {
      question: "What does 'staff' mean?",
      options: [
        "People who work in a place",
        "People who visit a place",
        "The food in a restaurant",
        "The tables in a restaurant",
      ],
      correct: "People who work in a place",
    },
    {
      question: "What does 'dish' mean in the passage?",
      options: [
        "A particular type of food",
        "A restaurant table",
        "A cooking lesson",
        "A kitchen tool",
      ],
      correct: "A particular type of food",
    },
    {
      question: "What does 'celebrate' mean?",
      options: [
        "Do something special for an important event",
        "Leave a place quickly",
        "Order food",
        "Clean a restaurant",
      ],
      correct: "Do something special for an important event",
    },
    {
      question: "What does 'surprised' mean?",
      options: [
        "Feeling unexpected excitement",
        "Feeling very hungry",
        "Feeling tired",
        "Feeling angry",
      ],
      correct: "Feeling unexpected excitement",
    },
  ],

  section4: [
    {
      sentence: "Bella Italia is a small _____ restaurant.",
      correct: "Italian",
    },
    {
      sentence: "The writer first visited the restaurant at the age of _____.",
      correct: "twelve",
    },
    {
      sentence: "The writer's favorite dish is _____.",
      correct: "pasta",
    },
    {
      sentence: "The family sat at a table near the _____.",
      correct: "window",
    },
    {
      sentence: "The waiter brought the mother a chocolate _____.",
      correct: "cake",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer explains why a family restaurant is special to them.",
        "The writer describes how to cook Italian food.",
        "The writer talks about working in a restaurant.",
        "The writer explains how to open a restaurant.",
      ],
      correct:
        "The writer explains why a family restaurant is special to them.",
    },
    {
      question: "Why did the writer like the restaurant from the beginning?",
      options: [
        "It was very expensive.",
        "The staff were friendly and the food smelled wonderful.",
        "It was very close to school.",
        "The restaurant was always empty.",
      ],
      correct:
        "The staff were friendly and the food smelled wonderful.",
    },
    {
      question: "What can we understand about the birthday dinner?",
      options: [
        "It was a simple but enjoyable family evening.",
        "The family did not enjoy the food.",
        "The mother was unhappy with the surprise.",
        "The restaurant was empty that night.",
      ],
      correct:
        "It was a simple but enjoyable family evening.",
    },
  ],

  pdfFileName: "a2-my-favorite-restaurant-reading.pdf",
};

export default function MyFavoriteRestaurantPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-new-student"
      previousTitle="A New Student"
      nextHref="/exercises/reading/a2/a-weekend-in-the-city"
      nextTitle="A Weekend in the City"
    />
  );
}