import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "My Favorite Season",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My favorite season is spring. I like spring because the weather is warm and the days become longer. After the cold winter, I am always happy to see the sun again.

In spring, the trees become green and many flowers start to grow. I especially like the pink and yellow flowers in our garden. The air is fresh, and I enjoy spending time outside.

In the mornings, I sometimes walk to school with my friends. We talk and laugh on the way. At weekends, my family often goes to the park. We take some food with us and have a small picnic.

Spring is also a good time for sports. I like riding my bicycle because the weather is not too hot. My brother likes playing football in the park. Sometimes we play together with our friends.

I also enjoy taking photos in spring. There are many beautiful trees and flowers everywhere. For me, spring is a happy and colorful season. It makes me feel active and positive.`,

  section1: [
    {
      question: "What is the writer's favorite season?",
      options: ["Winter", "Spring", "Summer", "Autumn"],
      correct: "Spring",
    },
    {
      question: "Why does the writer like spring?",
      options: [
        "The weather is very cold.",
        "The weather is warm and the days become longer.",
        "There is a lot of snow.",
        "The writer stays at home.",
      ],
      correct: "The weather is warm and the days become longer.",
    },
    {
      question: "What color are some flowers in the writer's garden?",
      options: ["Pink and yellow", "Blue and black", "White and gray", "Red and purple"],
      correct: "Pink and yellow",
    },
    {
      question: "What does the writer like riding?",
      options: ["A horse", "A bicycle", "A motorcycle", "A bus"],
      correct: "A bicycle",
    },
    {
      question: "What does the writer enjoy taking?",
      options: ["Photos", "Books", "Bags", "Shoes"],
      correct: "Photos",
    },
  ],

  section2: [
    {
      statement: "Spring comes after winter.",
      correct: "True",
    },
    {
      statement: "The writer thinks spring is a cold season.",
      correct: "False",
    },
    {
      statement: "The writer sometimes walks to school with friends.",
      correct: "True",
    },
    {
      statement: "The writer's brother likes swimming in the park.",
      correct: "False",
    },
    {
      statement: "The writer thinks spring is a colorful season.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'longer' mean in 'the days become longer'?",
      options: [
        "With more hours of daylight",
        "With less daylight",
        "Much colder",
        "Very rainy",
      ],
      correct: "With more hours of daylight",
    },
    {
      question: "What does 'fresh' mean in 'the air is fresh'?",
      options: [
        "Clean and pleasant",
        "Very hot",
        "Very noisy",
        "Very dark",
      ],
      correct: "Clean and pleasant",
    },
    {
      question: "What does 'picnic' mean?",
      options: [
        "A meal eaten outdoors",
        "A school lesson",
        "A sports competition",
        "A shopping trip",
      ],
      correct: "A meal eaten outdoors",
    },
    {
      question: "What does 'everywhere' mean?",
      options: [
        "In many or all places",
        "Only at home",
        "Only at school",
        "In one small place",
      ],
      correct: "In many or all places",
    },
    {
      question: "What does 'active' mean?",
      options: [
        "Doing things and moving",
        "Sleeping all day",
        "Feeling sick",
        "Being very quiet",
      ],
      correct: "Doing things and moving",
    },
  ],

  section4: [
    {
      sentence: "The writer's favorite season is _____.",
      correct: "spring",
    },
    {
      sentence: "Many flowers start to _____ in spring.",
      correct: "grow",
    },
    {
      sentence: "The family often goes to the _____ at weekends.",
      correct: "park",
    },
    {
      sentence: "The writer likes riding a _____.",
      correct: "bicycle",
    },
    {
      sentence: "Spring makes the writer feel active and _____.",
      correct: "positive",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "The writer explains why spring is a favorite season.",
        "The writer talks about a winter holiday.",
        "The writer describes a school day.",
        "The writer explains how to ride a bicycle.",
      ],
      correct: "The writer explains why spring is a favorite season.",
    },
    {
      question: "Why does the writer enjoy spending time outside in spring?",
      options: [
        "The weather is pleasant and nature is beautiful.",
        "There is a lot of snow.",
        "The writer does not like being at home.",
        "The writer has to work outside.",
      ],
      correct: "The weather is pleasant and nature is beautiful.",
    },
    {
      question: "How does spring make the writer feel?",
      options: [
        "Active and positive",
        "Tired and angry",
        "Sad and worried",
        "Cold and nervous",
      ],
      correct: "Active and positive",
    },
  ],

  pdfFileName: "a1-my-favorite-season-reading.pdf",
};

export default function MyFavoriteSeasonPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/a-trip-to-the-beach"
      previousTitle="A Trip to the Beach"
      nextHref="/exercises/reading/a1/a-birthday-party"
      nextTitle="A Birthday Party"
    />
  );
}