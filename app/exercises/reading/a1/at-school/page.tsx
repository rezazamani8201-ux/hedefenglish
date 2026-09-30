import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "At School",
  level: "A1 Reading Worksheet",
  description:
    "Read the passage carefully and complete all five sections.",

  passage: `My name is Lucas, and I am a student at Green Hill School. I am twelve years old and I am in the seventh grade. I like my school because my teachers are friendly and my classmates are nice.

My school is a large building with many classrooms. There is also a library, a computer room, a science room, and a big playground. My favorite place is the library because I love reading books.

I usually arrive at school at eight o'clock. My first class is English. After English, I have math and science. We have a short break at eleven o'clock. During the break, I usually talk to my friends or eat a small snack.

At lunchtime, I eat in the school cafeteria. Sometimes I bring a sandwich from home. After lunch, I have history and art. My favorite subject is art because I enjoy drawing and painting.

School finishes at three o'clock. I usually go home by bus. When I get home, I have a snack and do my homework before I play with my friends.`,

  section1: [
    {
      question: "How old is Lucas?",
      options: ["Ten", "Twelve", "Fourteen", "Sixteen"],
      correct: "Twelve",
    },
    {
      question: "What grade is Lucas in?",
      options: [
        "Fifth grade",
        "Sixth grade",
        "Seventh grade",
        "Eighth grade",
      ],
      correct: "Seventh grade",
    },
    {
      question: "What is Lucas's favorite place at school?",
      options: ["The cafeteria", "The library", "The playground", "The science room"],
      correct: "The library",
    },
    {
      question: "What does Lucas usually do during the break?",
      options: [
        "Goes home",
        "Talks to friends or eats a snack",
        "Studies math",
        "Plays computer games",
      ],
      correct: "Talks to friends or eats a snack",
    },
    {
      question: "What is Lucas's favorite subject?",
      options: ["Math", "Science", "History", "Art"],
      correct: "Art",
    },
  ],

  section2: [
    {
      statement: "Lucas is twelve years old.",
      correct: "True",
    },
    {
      statement: "There is no library at Lucas's school.",
      correct: "False",
    },
    {
      statement: "Lucas's first class is English.",
      correct: "True",
    },
    {
      statement: "Lucas has lunch at home every day.",
      correct: "False",
    },
    {
      statement: "Lucas goes home by bus.",
      correct: "True",
    },
  ],

  section3: [
    {
      question: "What does 'classmate' mean?",
      options: [
        "A person who teaches you",
        "A person who studies in the same class",
        "A family member",
        "A school bus driver",
      ],
      correct: "A person who studies in the same class",
    },
    {
      question: "What is a 'playground'?",
      options: [
        "A place where students can play",
        "A place where students eat",
        "A place where teachers work",
        "A place where students read",
      ],
      correct: "A place where students can play",
    },
    {
      question: "What does 'break' mean in the passage?",
      options: [
        "A school lesson",
        "A short rest between lessons",
        "The end of school",
        "A homework activity",
      ],
      correct: "A short rest between lessons",
    },
    {
      question: "What is a 'cafeteria'?",
      options: [
        "A place where students eat",
        "A place where students study",
        "A place where students play",
        "A place where teachers sleep",
      ],
      correct: "A place where students eat",
    },
    {
      question: "What does 'drawing' mean?",
      options: [
        "Making pictures with a pen or pencil",
        "Reading a book",
        "Playing a sport",
        "Writing a test",
      ],
      correct: "Making pictures with a pen or pencil",
    },
  ],

  section4: [
    {
      sentence: "Lucas studies at Green Hill _____.",
      correct: "School",
    },
    {
      sentence: "His first class is _____.",
      correct: "English",
    },
    {
      sentence: "Lucas usually talks to his _____ during the break.",
      correct: "friends",
    },
    {
      sentence: "He sometimes brings a _____ from home for lunch.",
      correct: "sandwich",
    },
    {
      sentence: "School finishes at _____ o'clock.",
      correct: "three",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Lucas describes his school day.",
        "Lucas talks about his family.",
        "Lucas describes his favorite restaurant.",
        "Lucas talks about his weekend.",
      ],
      correct: "Lucas describes his school day.",
    },
    {
      question: "Why does Lucas like the library?",
      options: [
        "He likes playing there.",
        "He likes eating there.",
        "He loves reading books.",
        "His friends work there.",
      ],
      correct: "He loves reading books.",
    },
    {
      question: "Why does Lucas like art?",
      options: [
        "He enjoys drawing and painting.",
        "He likes doing math.",
        "He likes reading history books.",
        "He enjoys eating lunch.",
      ],
      correct: "He enjoys drawing and painting.",
    },
  ],

  pdfFileName: "a1-at-school-reading.pdf",
};

export default function AtSchoolPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a1/my-best-friend"
      previousTitle="My Best Friend"
      nextHref="/exercises/reading/a1/my-house"
      nextTitle="My House"
    />
  );
}