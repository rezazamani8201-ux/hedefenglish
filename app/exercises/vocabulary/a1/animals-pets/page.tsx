"use client";

import { useState } from "react";
import jsPDF from "jspdf";

type MultipleChoiceQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type MatchingQuestion = {
  word: string;
  definition: string;
};

type SentenceQuestion = {
  question: string;
  answer: string;
};

const section1: MultipleChoiceQuestion[] = [
  {
    question: "A dog is a ______.",
    options: ["pet", "fruit", "drink"],
    answer: "pet",
  },
  {
    question: "Which animal says 'meow'?",
    options: ["dog", "cat", "horse"],
    answer: "cat",
  },
  {
    question: "A baby dog is called a ______.",
    options: ["kitten", "puppy", "chick"],
    answer: "puppy",
  },
  {
    question: "Which animal can fly?",
    options: ["bird", "fish", "cow"],
    answer: "bird",
  },
  {
    question: "A rabbit has long ______.",
    options: ["ears", "wings", "fins"],
    answer: "ears",
  },
  {
    question: "Which animal gives us milk?",
    options: ["cow", "lion", "monkey"],
    answer: "cow",
  },
  {
    question: "A fish lives in ______.",
    options: ["water", "trees", "sand"],
    answer: "water",
  },
  {
    question: "Which animal says 'woof'?",
    options: ["cat", "dog", "bird"],
    answer: "dog",
  },
];

const section2: MatchingQuestion[] = [
  {
    word: "dog",
    definition: "a common pet that says woof",
  },
  {
    word: "cat",
    definition: "a pet that says meow",
  },
  {
    word: "fish",
    definition: "an animal that lives in water",
  },
  {
    word: "bird",
    definition: "an animal that can fly",
  },
  {
    word: "rabbit",
    definition: "an animal with long ears",
  },
  {
    word: "horse",
    definition: "a large animal people can ride",
  },
];

const section3: SentenceQuestion[] = [
  {
    question: "I have a dog. My dog is my ______.",
    answer: "pet",
  },
  {
    question: "The cat has four ______.",
    answer: "legs",
  },
  {
    question: "A bird has two ______.",
    answer: "wings",
  },
  {
    question: "Fish live in ______.",
    answer: "water",
  },
  {
    question: "A baby cat is called a ______.",
    answer: "kitten",
  },
  {
    question: "The rabbit has two long ______.",
    answer: "ears",
  },
];

const section4: MultipleChoiceQuestion[] = [
  {
    question: "The lion is a ______ animal.",
    options: ["wild", "small"],
    answer: "wild",
  },
  {
    question: "My dog ______ its tail.",
    options: ["wags", "flies"],
    answer: "wags",
  },
  {
    question: "A horse can ______.",
    options: ["run", "drive"],
    answer: "run",
  },
  {
    question: "Birds can ______.",
    options: ["fly", "drive"],
    answer: "fly",
  },
  {
    question: "Cats like to ______.",
    options: ["sleep", "read"],
    answer: "sleep",
  },
];

const section5: MultipleChoiceQuestion[] = [
  {
    question: "Which animal is usually kept as a pet?",
    options: ["dog", "lion", "tiger"],
    answer: "dog",
  },
  {
    question: "Which animal lives in a tank?",
    options: ["fish", "horse", "cow"],
    answer: "fish",
  },
  {
    question: "Which animal has a long trunk?",
    options: ["elephant", "rabbit", "cat"],
    answer: "elephant",
  },
  {
    question: "Which animal is known for giving us eggs?",
    options: ["chicken", "dog", "horse"],
    answer: "chicken",
  },
  {
    question:
      "Which animal is very tall and has a long neck?",
    options: ["giraffe", "fish", "rabbit"],
    answer: "giraffe",
  },
];

const questionStyle = {
  marginBottom: "24px",
  color: "#1f2937",
  lineHeight: 1.6,
};

const getQuestionStyle = (
  showResult: boolean,
  isCorrect: boolean
) => ({
  ...questionStyle,
  padding: showResult ? "14px" : "0",
  borderRadius: "10px",
  border: showResult
    ? `2px solid ${isCorrect ? "#22c55e" : "#ef4444"}`
    : "none",
  background: showResult
    ? isCorrect
      ? "#f0fdf4"
      : "#fef2f2"
    : "transparent",
});

function AnimalsPetsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>(
    {}
  );

  const [showResult, setShowResult] = useState(false);

  const setAnswer = (key: string, value: string) => {
    setAnswers((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const score = [
    ...section1.map(
      (q, i) => answers[`s1-${i}`] === q.answer
    ),

    ...section2.map(
      (q, i) => answers[`s2-${i}`] === q.definition
    ),

    ...section3.map(
      (q, i) =>
        answers[`s3-${i}`]?.trim().toLowerCase() ===
        q.answer
    ),

    ...section4.map(
      (q, i) => answers[`s4-${i}`] === q.answer
    ),

    ...section5.map(
      (q, i) => answers[`s5-${i}`] === q.answer
    ),
  ].filter(Boolean).length;

  const resetExercise = () => {
    setAnswers({});
    setShowResult(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;

    const background = new Image();
    background.src =
      "/exercises/vocabulary/family-friends/template.png";

    let y = 42;

    const addBackground = () => {
      doc.addImage(
        background,
        "PNG",
        0,
        0,
        pageWidth,
        pageHeight
      );
    };

    const page = () => {
      doc.addPage();
      addBackground();
      y = 42;
    };

    const sectionSpace = (amount: number) => {
      const remaining = 270 - y;

      if (remaining < amount * (2 / 3)) {
        page();
      }
    };

    const addSectionTitle = (title: string) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(title, 15, y);
      doc.setFont("helvetica", "normal");
      y += 8;
    };

    const addQuestion = (
      number: number,
      question: string,
      options?: string[]
    ) => {
      doc.setFontSize(9);

      doc.text(`${number}. ${question}`, 15, y);

      y += 5;

      if (options) {
        options.forEach(
          (option: string, index: number) => {
            const letter = String.fromCharCode(
              65 + index
            );

            doc.text(
              `${letter}) ${option}`,
              20,
              y
            );

            y += 4.5;
          }
        );

        y += 2;
      } else {
        y += 3;
      }
    };

    addBackground();

    // SECTION 1
    sectionSpace(200);

    addSectionTitle("1. Multiple Choice");

    section1.forEach(
      (q: MultipleChoiceQuestion, i: number) => {
        addQuestion(
          i + 1,
          q.question,
          q.options
        );
      }
    );

    y += 4;

    // SECTION 2
    sectionSpace(110);

    addSectionTitle("2. Matching");

    section2.forEach(
      (q: MatchingQuestion, i: number) => {
        addQuestion(
          i + 1,
          `${q.word} — ______________________________`
        );
      }
    );

    y += 4;

    // SECTION 3
    sectionSpace(165);

    addSectionTitle("3. Complete the Sentences");

    section3.forEach(
      (q: SentenceQuestion, i: number) => {
        addQuestion(i + 1, q.question);
      }
    );

    y += 4;

    // SECTION 4
    sectionSpace(140);

    addSectionTitle("4. Choose the Correct Word");

    section4.forEach(
      (q: MultipleChoiceQuestion, i: number) => {
        addQuestion(
          i + 1,
          q.question,
          q.options
        );
      }
    );

    y += 4;

    // SECTION 5
    sectionSpace(140);

    addSectionTitle("5. Animals & Pets");

    section5.forEach(
      (q: MultipleChoiceQuestion, i: number) => {
        addQuestion(
          i + 1,
          q.question,
          q.options
        );
      }
    );

    doc.save("animals-pets-a1-worksheet.pdf");
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "50px 20px",
        color: "#1f2937",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "10px",
          color: "#111827",
        }}
      >
        Animals & Pets
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "40px",
        }}
      >
        A1 Vocabulary Exercises
      </p>

      {/* SECTION 1 */}
      <section style={{ marginBottom: "45px" }}>
        <h2 style={{ marginBottom: "25px" }}>
          1. Multiple Choice
        </h2>

        {section1.map(
          (q: MultipleChoiceQuestion, i: number) => {
            const isCorrect =
              answers[`s1-${i}`] === q.answer;

            return (
              <div
                key={i}
                style={getQuestionStyle(
                  showResult,
                  isCorrect
                )}
              >
                <p>
                  <strong>{i + 1}.</strong>{" "}
                  {q.question}
                </p>

                {q.options.map(
                  (option: string, j: number) => (
                    <label
                      key={j}
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`s1-${i}`}
                        value={option}
                        checked={
                          answers[`s1-${i}`] ===
                          option
                        }
                        onChange={(e) =>
                          setAnswer(
                            `s1-${i}`,
                            e.target.value
                          )
                        }
                        style={{
                          marginRight: "8px",
                        }}
                      />

                      {option}
                    </label>
                  )
                )}

                {showResult && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: isCorrect
                        ? "#16a34a"
                        : "#dc2626",
                    }}
                  >
                    Correct answer: {q.answer}
                  </p>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* SECTION 2 */}
      <section style={{ marginBottom: "45px" }}>
        <h2 style={{ marginBottom: "25px" }}>
          2. Matching
        </h2>

        <p
          style={{
            marginBottom: "25px",
            color: "#6b7280",
          }}
        >
          Match each word with the correct
          definition.
        </p>

        {section2.map(
          (q: MatchingQuestion, i: number) => {
            const isCorrect =
              answers[`s2-${i}`] === q.definition;

            return (
              <div
                key={i}
                style={getQuestionStyle(
                  showResult,
                  isCorrect
                )}
              >
                <p>
                  <strong>
                    {i + 1}. {q.word}
                  </strong>
                </p>

                <select
                  value={
                    answers[`s2-${i}`] || ""
                  }
                  onChange={(e) =>
                    setAnswer(
                      `s2-${i}`,
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    padding: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid #d1d5db",
                    fontSize: "15px",
                  }}
                >
                  <option value="">
                    Select the definition
                  </option>

                  {section2.map(
                    (
                      item: MatchingQuestion,
                      j: number
                    ) => (
                      <option
                        key={j}
                        value={item.definition}
                      >
                        {item.definition}
                      </option>
                    )
                  )}
                </select>

                {showResult && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: isCorrect
                        ? "#16a34a"
                        : "#dc2626",
                    }}
                  >
                    Correct answer:{" "}
                    {q.definition}
                  </p>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* SECTION 3 */}
      <section style={{ marginBottom: "45px" }}>
        <h2 style={{ marginBottom: "25px" }}>
          3. Complete the Sentences
        </h2>

        {section3.map(
          (q: SentenceQuestion, i: number) => {
            const isCorrect =
              answers[`s3-${i}`]
                ?.trim()
                .toLowerCase() === q.answer;

            return (
              <div
                key={i}
                style={getQuestionStyle(
                  showResult,
                  isCorrect
                )}
              >
                <p>
                  <strong>{i + 1}.</strong>{" "}
                  {q.question}
                </p>

                <input
                  type="text"
                  value={
                    answers[`s3-${i}`] || ""
                  }
                  onChange={(e) =>
                    setAnswer(
                      `s3-${i}`,
                      e.target.value
                    )
                  }
                  placeholder="Write your answer"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    padding: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid #d1d5db",
                    fontSize: "15px",
                  }}
                />

                {showResult && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: isCorrect
                        ? "#16a34a"
                        : "#dc2626",
                    }}
                  >
                    Correct answer: {q.answer}
                  </p>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* SECTION 4 */}
      <section style={{ marginBottom: "45px" }}>
        <h2 style={{ marginBottom: "25px" }}>
          4. Choose the Correct Word
        </h2>

        {section4.map(
          (q: MultipleChoiceQuestion, i: number) => {
            const isCorrect =
              answers[`s4-${i}`] === q.answer;

            return (
              <div
                key={i}
                style={getQuestionStyle(
                  showResult,
                  isCorrect
                )}
              >
                <p>
                  <strong>{i + 1}.</strong>{" "}
                  {q.question}
                </p>

                {q.options.map(
                  (option: string, j: number) => (
                    <label
                      key={j}
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`s4-${i}`}
                        value={option}
                        checked={
                          answers[`s4-${i}`] ===
                          option
                        }
                        onChange={(e) =>
                          setAnswer(
                            `s4-${i}`,
                            e.target.value
                          )
                        }
                        style={{
                          marginRight: "8px",
                        }}
                      />

                      {option}
                    </label>
                  )
                )}

                {showResult && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: isCorrect
                        ? "#16a34a"
                        : "#dc2626",
                    }}
                  >
                    Correct answer: {q.answer}
                  </p>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* SECTION 5 */}
      <section style={{ marginBottom: "45px" }}>
        <h2 style={{ marginBottom: "25px" }}>
          5. Animals & Pets
        </h2>

        {section5.map(
          (q: MultipleChoiceQuestion, i: number) => {
            const isCorrect =
              answers[`s5-${i}`] === q.answer;

            return (
              <div
                key={i}
                style={getQuestionStyle(
                  showResult,
                  isCorrect
                )}
              >
                <p>
                  <strong>{i + 1}.</strong>{" "}
                  {q.question}
                </p>

                {q.options.map(
                  (option: string, j: number) => (
                    <label
                      key={j}
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`s5-${i}`}
                        value={option}
                        checked={
                          answers[`s5-${i}`] ===
                          option
                        }
                        onChange={(e) =>
                          setAnswer(
                            `s5-${i}`,
                            e.target.value
                          )
                        }
                        style={{
                          marginRight: "8px",
                        }}
                      />

                      {option}
                    </label>
                  )
                )}

                {showResult && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: isCorrect
                        ? "#16a34a"
                        : "#dc2626",
                    }}
                  >
                    Correct answer: {q.answer}
                  </p>
                )}
              </div>
            );
          }
        )}
      </section>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <button
          onClick={() => setShowResult(true)}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Check Answers
        </button>

        <button
          onClick={resetExercise}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            background: "#6b7280",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        <button
          onClick={downloadPDF}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            background: "#16a34a",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Download PDF
        </button>
      </div>

      {/* SCORE */}
      {showResult && (
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "12px",
            background: "#eff6ff",
            color: "#1e3a8a",
          }}
        >
          <h3>Your Score: {score} / 30</h3>
        </div>
      )}
    </main>
  );
}

export default AnimalsPetsPage;