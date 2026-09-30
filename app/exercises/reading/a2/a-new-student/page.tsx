import ReadingTemplate, {
  ReadingData,
} from "../template/ReadingTemplate";

const readingData: ReadingData = {
  title: "A New Student",
  level: "A2 Reading Worksheet",
  description:
    "Read about a new student and her first days at a new school.",

  passage: `When Anna moved to a new city, she had to start at a different school. At first, she felt nervous because she did not know anyone there. Her parents told her that it would take some time to make new friends.

On her first day, Anna arrived at school early. She went to her classroom and chose a seat near the window. A girl named Sophie sat next to her and smiled. Sophie introduced herself and asked Anna where she was from.

During the first lesson, the teacher asked Anna to tell the class a little about herself. Anna talked about her old school, her hobbies, and her favorite subjects. She was a little nervous at first, but the students listened carefully.

At lunchtime, Sophie invited Anna to sit with her and some other students. They talked about music, sports, and their favorite movies. Anna discovered that she and Sophie both enjoyed drawing and listening to pop music.

By the end of the day, Anna felt much better. She still missed her old school, but she was excited about her new one. After a few weeks, she had made several friends and felt comfortable in her new classroom.`,

  section1: [
    {
      question: "Why did Anna start at a different school?",
      options: [
        "She wanted to change her hobbies.",
        "She moved to a new city.",
        "Her old school closed for one day.",
        "She wanted to study music.",
      ],
      correct: "She moved to a new city.",
    },
    {
      question: "How did Anna feel before her first day?",
      options: [
        "Nervous",
        "Angry",
        "Bored",
        "Excited about a holiday",
      ],
      correct: "Nervous",
    },
    {
      question: "Where did Anna sit in the classroom?",
      options: [
        "Near the door",
        "Near the teacher",
        "Near the window",
        "At the back of the room",
      ],
      correct: "Near the window",
    },
    {
      question: "What did Anna and Sophie both enjoy?",
      options: [
        "Playing tennis and cooking",
        "Drawing and listening to pop music",
        "Reading and swimming",
        "Dancing and traveling",
      ],
      correct: "Drawing and listening to pop music",
    },
    {
      question: "How did Anna feel after a few weeks?",
      options: [
        "Uncomfortable",
        "Lonely",
        "Comfortable in her new classroom",
        "Ready to leave the city",
      ],
      correct: "Comfortable in her new classroom",
    },
  ],

  section2: [
    {
      statement: "Anna already knew many students at her new school.",
      correct: "False",
    },
    {
      statement: "Anna arrived at school early on her first day.",
      correct: "True",
    },
    {
      statement: "Sophie sat next to Anna.",
      correct: "True",
    },
    {
      statement: "Anna talked about her hobbies in class.",
      correct: "True",
    },
    {
      statement: "Anna never made any friends at her new school.",
      correct: "False",
    },
  ],

  section3: [
    {
      question: "What does 'nervous' mean?",
      options: [
        "Worried or not completely relaxed",
        "Very angry",
        "Very tired",
        "Completely bored",
      ],
      correct: "Worried or not completely relaxed",
    },
    {
      question: "What does 'introduced herself' mean?",
      options: [
        "Said who she was",
        "Left the classroom",
        "Asked for homework",
        "Changed her seat",
      ],
      correct: "Said who she was",
    },
    {
      question: "What does 'hobbies' mean?",
      options: [
        "Activities you enjoy doing in your free time",
        "School subjects",
        "Things you have to do at work",
        "Places you visit",
      ],
      correct: "Activities you enjoy doing in your free time",
    },
    {
      question: "What does 'discovered' mean?",
      options: [
        "Found out something",
        "Forgot something",
        "Lost something",
        "Bought something",
      ],
      correct: "Found out something",
    },
    {
      question: "What does 'comfortable' mean?",
      options: [
        "Relaxed and happy in a situation",
        "Very nervous",
        "Very busy",
        "Ready to go home",
      ],
      correct: "Relaxed and happy in a situation",
    },
  ],

  section4: [
    {
      sentence: "Anna moved to a new _____.",
      correct: "city",
    },
    {
      sentence: "Anna chose a seat near the _____.",
      correct: "window",
    },
    {
      sentence: "_____ introduced herself to Anna.",
      correct: "Sophie",
    },
    {
      sentence: "Anna talked about her hobbies and favorite _____.",
      correct: "subjects",
    },
    {
      sentence: "After a few weeks, Anna had made several _____.",
      correct: "friends",
    },
  ],

  section5: [
    {
      question: "What is the main idea of the passage?",
      options: [
        "Anna adjusts to a new school and makes new friends.",
        "Anna decides to leave school.",
        "Anna teaches Sophie how to draw.",
        "Anna talks about her old city.",
      ],
      correct: "Anna adjusts to a new school and makes new friends.",
    },
    {
      question: "Why did Anna feel better during the day?",
      options: [
        "She finished all her homework.",
        "She met Sophie and other students.",
        "She went home early.",
        "She received a new book.",
      ],
      correct: "She met Sophie and other students.",
    },
    {
      question: "What can we understand about Sophie?",
      options: [
        "She was friendly and helped Anna feel welcome.",
        "She did not want to talk to Anna.",
        "She was Anna's teacher.",
        "She wanted Anna to leave the school.",
      ],
      correct:
        "She was friendly and helped Anna feel welcome.",
    },
  ],

  pdfFileName: "a2-a-new-student-reading.pdf",
};

export default function ANewStudentPage() {
  return (
    <ReadingTemplate
      data={readingData}
      previousHref="/exercises/reading/a2/a-busy-morning"
      previousTitle="A Busy Morning"
      nextHref="/exercises/reading/a2/my-favorite-restaurant"
      nextTitle="My Favorite Restaurant"
    />
  );
}