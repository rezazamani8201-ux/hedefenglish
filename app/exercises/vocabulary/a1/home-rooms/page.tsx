"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

const section1 = [
  ["You sleep in the ______.", ["bedroom", "kitchen", "bathroom"], "bedroom"],
  ["You cook food in the ______.", ["bathroom", "kitchen", "bedroom"], "kitchen"],
  ["You take a shower in the ______.", ["living room", "bathroom", "garden"], "bathroom"],
  ["You watch TV in the ______.", ["living room", "kitchen", "garage"], "living room"],
  ["You park your car in the ______.", ["bedroom", "garage", "bathroom"], "garage"],
  ["You can eat outside in the ______.", ["garden", "bedroom", "hallway"], "garden"],
  ["You usually eat dinner in the ______.", ["dining room", "bathroom", "garage"], "dining room"],
  ["You enter a house through the ______.", ["door", "roof", "floor"], "door"],
];

const section2 = [
  ["bedroom", "a room where you sleep"],
  ["kitchen", "a room where you cook food"],
  ["bathroom", "a room where you take a shower"],
  ["garden", "an outdoor area with plants"],
  ["garage", "a place where you keep a car"],
  ["living room", "a room where you sit and relax"],
];

const definitions = [
  "a room where you cook food",
  "a place where you keep a car",
  "a room where you sit and relax",
  "an outdoor area with plants",
  "a room where you sleep",
  "a room where you take a shower",
];

const section3 = [
  ["There is a sofa in the ______.", "living room"],
  ["There is a bed in the ______.", "bedroom"],
  ["There is a shower in the ______.", "bathroom"],
  ["There is a cooker in the ______.", "kitchen"],
  ["There is a car in the ______.", "garage"],
  ["There are flowers in the ______.", "garden"],
];

const section4 = [
  ["We cook food in the ______.", ["kitchen", "bedroom", "garage"], "kitchen"],
  ["We sleep in the ______.", ["bathroom", "bedroom", "garden"], "bedroom"],
  ["We wash our hands in the ______.", ["bathroom", "garage", "living room"], "bathroom"],
  ["We relax on a sofa in the ______.", ["kitchen", "living room", "garden"], "living room"],
  ["We keep the car in the ______.", ["garage", "bedroom", "bathroom"], "garage"],
];

const section5 = [
  [
    "Which room has a bed?",
    ["bedroom", "kitchen", "bathroom"],
    "bedroom",
  ],
  [
    "Which room has a cooker?",
    ["garage", "kitchen", "bedroom"],
    "kitchen",
  ],
  [
    "Which room has a shower?",
    ["bathroom", "living room", "garden"],
    "bathroom",
  ],
  [
    "Which room usually has a sofa?",
    ["garage", "living room", "kitchen"],
    "living room",
  ],
  [
    "Which place is outside the house?",
    ["garden", "bedroom", "bathroom"],
    "garden",
  ],
];

function HomeRoomsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const setAnswer = (key: string, value: string) => {
    setAnswers((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const score = [
    ...section1.map(
      (q, i) => answers[`s1-${i}`] === q[2]
    ),
    ...section2.map(
      (q, i) => answers[`s2-${i}`] === q[1]
    ),
    ...section3.map(
      (q, i) =>
        answers[`s3-${i}`]?.trim().toLowerCase() ===
        q[1]
    ),
    ...section4.map(
      (q, i) => answers[`s4-${i}`] === q[2]
    ),
    ...section5.map(
      (q, i) => answers[`s5-${i}`] === q[2]
    ),
  ].filter(Boolean).length;

  const questionStyle = {
    marginBottom: "24px",
    color: "#1f2937",
    lineHeight: 1.6,
  };

  const getQuestionStyle = (
    result: boolean,
    isCorrect: boolean
  ) => ({
    ...questionStyle,
    padding: result ? "14px" : "0",
    borderRadius: "10px",
    border: result
      ? `2px solid ${
          isCorrect ? "#22c55e" : "#ef4444"
        }`
      : "none",
    background: result
      ? isCorrect
        ? "#f0fdf4"
        : "#fef2f2"
      : "transparent",
  });

  const downloadPDF = async () => {
    const response = await fetch(
      "/exercises/vocabulary/family-friends/template.png"
    );

    if (!response.ok) {
      alert("The worksheet template could not be loaded.");
      return;
    }

    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const image = reader.result as string;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const W = 210;
      const H = 297;
      const left = 18;
      const width = 174;

      let y = 38;

      const background = () => {
        pdf.addImage(image, "PNG", 0, 0, W, H);
      };

      const page = () => {
        pdf.addPage();
        background();
        y = 38;
      };

      const space = (amount: number) => {
        if (y + amount > 270) {
          page();
        }
      };

      const sectionSpace = (amount: number) => {
        const remaining = 270 - y;

        if (remaining < amount * (2 / 3)) {
          page();
        }
      };

      const title = (text: string) => {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.text(text, left, y);
        y += 8;
      };

      const question = (
        number: number,
        text: string,
        options?: string[]
      ) => {
        space(25);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9.5);

        const lines = pdf.splitTextToSize(
          `${number}. ${text}`,
          width
        );

        pdf.text(lines, left, y);

        y += lines.length * 4.5 + 2;

        if (options) {
          pdf.setFont("helvetica", "normal");

          options.forEach((option, i) => {
            pdf.text(
              `${String.fromCharCode(65 + i)}) ${option}`,
              left + 6,
              y
            );

            y += 4.5;
          });
        }

        y += 2;
      };

      background();

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text(
        "Home & Rooms",
        105,
        y,
        { align: "center" }
      );

      y += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text(
        "A1 Vocabulary Worksheet",
        105,
        y,
        { align: "center" }
      );

      y += 13;

      // SECTION 1
      sectionSpace(200);
      title("Section 1 — Multiple Choice");

      section1.forEach((q, i) => {
        question(
          i + 1,
          q[0] as string,
          q[1] as string[]
        );
      });

      // SECTION 2
      sectionSpace(110);
      title("Section 2 — Matching");

      section2.forEach((q, i) => {
        space(9);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9.5);

        pdf.text(
          `${i + 1}. ${q[0]} ______________________________`,
          left,
          y
        );

        y += 6;
      });

      pdf.setFont("helvetica", "bold");
      pdf.text("Options:", left, y);
      y += 5;

      pdf.setFont("helvetica", "normal");

      definitions.forEach((d, i) => {
        const lines = pdf.splitTextToSize(
          `${String.fromCharCode(65 + i)}) ${d}`,
          width
        );

        space(lines.length * 4 + 2);

        pdf.text(lines, left + 5, y);
        y += lines.length * 4 + 1;
      });

      // SECTION 3
      sectionSpace(165);
      title("Section 3 — Complete the Sentences");

      section3.forEach((q, i) => {
        question(
          i + 1,
          (q[0] as string).replace(
            "______",
            "____________"
          )
        );
      });

      // SECTION 4
      sectionSpace(140);
      title("Section 4 — Choose the Correct Word");

      section4.forEach((q, i) => {
        question(
          i + 1,
          q[0] as string,
          q[1] as string[]
        );
      });

      // SECTION 5
      sectionSpace(140);
      title("Section 5 — Home & Room Activities");

      section5.forEach((q, i) => {
        question(
          i + 1,
          q[0] as string,
          q[1] as string[]
        );
      });

      pdf.save(
        "home-and-rooms-a1-worksheet.pdf"
      );
    };

    reader.readAsDataURL(blob);
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "50px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "34px",
          marginBottom: "8px",
        }}
      >
        Home & Rooms
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginBottom: "35px",
        }}
      >
        A1 Vocabulary Practice
      </p>

      {/* SECTION 1 */}
      <section>
        <h2>Section 1 — Multiple Choice</h2>

        {section1.map((q, i) => {
          const isCorrect =
            answers[`s1-${i}`] === q[2];

          return (
            <div
              key={i}
              style={getQuestionStyle(
                showResult,
                isCorrect
              )}
            >
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <div style={{ marginTop: "10px" }}>
                {(q[1] as string[]).map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "block",
                      marginBottom: "7px",
                    }}
                  >
                    <input
                      type="radio"
                      name={`s1-${i}`}
                      value={option}
                      checked={
                        answers[`s1-${i}`] === option
                      }
                      onChange={() =>
                        setAnswer(
                          `s1-${i}`,
                          option
                        )
                      }
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>

              {showResult && (
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Correct answer: {q[2]}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* SECTION 2 */}
      <section>
        <h2>Section 2 — Matching</h2>

        {section2.map((q, i) => {
          const isCorrect =
            answers[`s2-${i}`] === q[1];

          return (
            <div
              key={i}
              style={getQuestionStyle(
                showResult,
                isCorrect
              )}
            >
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <select
                value={answers[`s2-${i}`] || ""}
                onChange={(e) =>
                  setAnswer(
                    `s2-${i}`,
                    e.target.value
                  )
                }
                style={{
                  display: "block",
                  marginTop: "10px",
                  padding: "8px",
                  width: "100%",
                  borderRadius: "6px",
                }}
              >
                <option value="">
                  Select an answer
                </option>

                {definitions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {showResult && (
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Correct answer: {q[1]}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* SECTION 3 */}
      <section>
        <h2>
          Section 3 — Complete the Sentences
        </h2>

        {section3.map((q, i) => {
          const isCorrect =
            answers[`s3-${i}`]
              ?.trim()
              .toLowerCase() === q[1];

          return (
            <div
              key={i}
              style={getQuestionStyle(
                showResult,
                isCorrect
              )}
            >
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <input
                type="text"
                value={answers[`s3-${i}`] || ""}
                onChange={(e) =>
                  setAnswer(
                    `s3-${i}`,
                    e.target.value
                  )
                }
                style={{
                  display: "block",
                  marginTop: "10px",
                  padding: "9px",
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                }}
              />

              {showResult && (
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Correct answer: {q[1]}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* SECTION 4 */}
      <section>
        <h2>
          Section 4 — Choose the Correct Word
        </h2>

        {section4.map((q, i) => {
          const isCorrect =
            answers[`s4-${i}`] === q[2];

          return (
            <div
              key={i}
              style={getQuestionStyle(
                showResult,
                isCorrect
              )}
            >
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <div style={{ marginTop: "10px" }}>
                {(q[1] as string[]).map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "block",
                      marginBottom: "7px",
                    }}
                  >
                    <input
                      type="radio"
                      name={`s4-${i}`}
                      value={option}
                      checked={
                        answers[`s4-${i}`] === option
                      }
                      onChange={() =>
                        setAnswer(
                          `s4-${i}`,
                          option
                        )
                      }
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>

              {showResult && (
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Correct answer: {q[2]}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* SECTION 5 */}
      <section>
        <h2>
          Section 5 — Home & Room Activities
        </h2>

        {section5.map((q, i) => {
          const isCorrect =
            answers[`s5-${i}`] === q[2];

          return (
            <div
              key={i}
              style={getQuestionStyle(
                showResult,
                isCorrect
              )}
            >
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <div style={{ marginTop: "10px" }}>
                {(q[1] as string[]).map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "block",
                      marginBottom: "7px",
                    }}
                  >
                    <input
                      type="radio"
                      name={`s5-${i}`}
                      value={option}
                      checked={
                        answers[`s5-${i}`] === option
                      }
                      onChange={() =>
                        setAnswer(
                          `s5-${i}`,
                          option
                        )
                      }
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>

              {showResult && (
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Correct answer: {q[2]}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "35px",
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
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Check Answers
        </button>

        <button
          onClick={reset}
          style={{
            padding: "12px 24px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            background: "white",
            cursor: "pointer",
            fontWeight: "bold",
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
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Download PDF
        </button>
      </div>

      {showResult && (
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Score: {score} / 30
        </div>
      )}
    </main>
  );
}

export default HomeRoomsPage;