"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Entertainment, Culture & Leisure",
  level: "B1 Vocabulary Worksheet",
 
  description:
    "Learn and practice useful B1 vocabulary about entertainment, culture, hobbies, leisure activities, events, and free time.",

  section1: [
    {
      question:
        "I usually ________ my free time by reading books or watching films.",
      options: ["spend", "take", "make", "do"],
      correct: "spend",
    },
    {
      question:
        "We went to a live music ________ at the weekend.",
      options: ["performance", "audience", "review", "collection"],
      correct: "performance",
    },
    {
      question:
        "The museum has an impressive ________ of modern paintings.",
      options: ["collection", "audience", "performance", "entertainment"],
      correct: "collection",
    },
    {
      question:
        "The film received excellent ________ from critics.",
      options: ["reviews", "tickets", "stages", "hobbies"],
      correct: "reviews",
    },
    {
      question:
        "The theater was full, and the ________ applauded loudly at the end.",
      options: ["audience", "artist", "character", "collection"],
      correct: "audience",
    },
    {
      question:
        "Photography is one of my favorite ________.",
      options: ["hobbies", "performances", "reviews", "exhibitions"],
      correct: "hobbies",
    },
    {
      question:
        "The city is hosting an art ________ next month.",
      options: ["exhibition", "audience", "character", "leisure"],
      correct: "exhibition",
    },
    {
      question:
        "Going for a walk is a simple way to ________ after a busy day.",
      options: ["relax", "perform", "review", "exhibit"],
      correct: "relax",
    },
  ],

  section2: {
    questions: [
      {
        word: "leisure",
        correct:
          "free time when you are not working or studying",
      },
      {
        word: "performance",
        correct:
          "an act of entertaining people by singing, acting, dancing, or playing music",
      },
      {
        word: "audience",
        correct:
          "the people watching or listening to a performance",
      },
      {
        word: "exhibition",
        correct:
          "an organized event where works of art or other interesting objects are displayed",
      },
      {
        word: "entertainment",
        correct:
          "activities or performances that provide enjoyment",
      },
      {
        word: "venue",
        correct:
          "a place where an event or activity takes place",
      },
    ],

    definitions: [
      "free time when you are not working or studying",
      "an act of entertaining people by singing, acting, dancing, or playing music",
      "the people watching or listening to a performance",
      "an organized event where works of art or other interesting objects are displayed",
      "activities or performances that provide enjoyment",
      "a place where an event or activity takes place",
    ],
  },

  section3: [
    {
      question:
        "I enjoy reading during my ________.",
      correct: "leisure",
    },
    {
      question:
        "The singer gave an amazing ________ last night.",
      correct: "performance",
    },
    {
      question:
        "The ________ stood up and applauded after the concert.",
      correct: "audience",
    },
    {
      question:
        "We visited an art ________ at the city museum.",
      correct: "exhibition",
    },
    {
      question:
        "Films, concerts, and theater are forms of ________.",
      correct: "entertainment",
    },
    {
      question:
        "The concert ________ can hold more than five thousand people.",
      correct: "venue",
    },
  ],

  section4: [
    {
      question:
        "What does leisure mean?",
      options: [
        "Free time when you are not working or studying",
        "A professional performance",
        "A place where a concert takes place",
        "A collection of paintings",
      ],
      correct:
        "Free time when you are not working or studying",
    },
    {
      question:
        "What is a performance?",
      options: [
        "An act of entertaining people through music, acting, dancing, or similar activities",
        "A group of people watching a show",
        "A building where paintings are displayed",
        "A written opinion about a film",
      ],
      correct:
        "An act of entertaining people through music, acting, dancing, or similar activities",
    },
    {
      question:
        "What is an audience?",
      options: [
        "People watching or listening to a performance",
        "People who organize a museum",
        "Artists who create paintings",
        "People who sell concert tickets",
      ],
      correct:
        "People watching or listening to a performance",
    },
    {
      question:
        "What is an exhibition?",
      options: [
        "An event where art or other interesting objects are displayed",
        "A place where people buy tickets",
        "A written review of a film",
        "A type of musical performance",
      ],
      correct:
        "An event where art or other interesting objects are displayed",
    },
    {
      question:
        "What is a venue?",
      options: [
        "A place where an event or activity takes place",
        "A person who watches a performance",
        "A type of hobby",
        "A written description of an artist",
      ],
      correct:
        "A place where an event or activity takes place",
    },
  ],

  section5: [
    {
      question:
        "Which sentence uses 'leisure' correctly?",
      options: [
        "I enjoy listening to music in my leisure time.",
        "I leisure to work every morning.",
        "The leisure was performing on stage.",
        "She bought a leisure at the museum.",
      ],
      correct:
        "I enjoy listening to music in my leisure time.",
    },
    {
      question:
        "Who is part of the audience?",
      options: [
        "People watching a play in a theater.",
        "The actors performing on stage.",
        "The person selling tickets outside.",
        "The technician repairing the building.",
      ],
      correct:
        "People watching a play in a theater.",
    },
    {
      question:
        "Which situation is an example of an exhibition?",
      options: [
        "A museum displaying photographs by local artists.",
        "A singer performing on a concert stage.",
        "People watching a football match.",
        "Friends having dinner at a restaurant.",
      ],
      correct:
        "A museum displaying photographs by local artists.",
    },
    {
      question:
        "Which activity is most likely to help someone relax?",
      options: [
        "Reading a book in a quiet park.",
        "Working overtime every evening.",
        "Studying for ten hours without a break.",
        "Driving through heavy traffic for several hours.",
      ],
      correct:
        "Reading a book in a quiet park.",
    },
    {
      question:
        "Which sentence is correct?",
      options: [
        "The concert will take place at a large venue.",
        "The concert will take place on a large venue.",
        "The concert will take place to a large venue.",
        "The concert will take place by a large venue.",
      ],
      correct:
        "The concert will take place at a large venue.",
    },
  ],

  pdfFileName:
    "b1-entertainment-culture-and-leisure-worksheet.pdf",

  pdfTemplate:
    "/exercises/vocabulary/family-friends/template.png",
};

export default function EntertainmentCultureLeisurePage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b1/nature-environment-climate"
      nextHref="/exercises/vocabulary/b1/feelings-opinions-everyday-problems"
      previousTitle="Nature, Environment & Climate"
      nextTitle="Feelings, Opinions & Everyday Problems"
    />
  );
}




