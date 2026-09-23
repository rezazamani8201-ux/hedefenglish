"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

const section1 = [
  ["You pay for things with ______.", ["money", "water", "bread"], "money"],
  ["You use a ______ to carry things when shopping.", ["shopping bag", "bed", "lamp"], "shopping bag"],
  ["A place where you buy food is a ______.", ["supermarket", "bedroom", "bathroom"], "supermarket"],
  ["If something costs $10, you need ______.", ["ten dollars", "five dollars", "one dollar"], "ten dollars"],
  ["You can buy shoes at a ______.", ["shoe shop", "hospital", "bank"], "shoe shop"],
  ["The person who sells things is the ______.", ["shop assistant", "doctor", "teacher"], "shop assistant"],
  ["A small amount of money returned after you pay is called ______.", ["change", "price", "size"], "change"],
  ["The amount you must pay for something is its ______.", ["price", "color", "door"], "price"],
];

const section2 = [
  ["price", "the amount of money something costs"],
  ["change", "money you get back after paying"],
  ["customer", "a person who buys something"],
  ["shop assistant", "a person who works in a shop"],
  ["supermarket", "a large shop where you buy food"],
  ["money", "what you use to pay for things"],
];

const definitions = [
  "a person who buys something",
  "the amount of money something costs",
  "what you use to pay for things",
  "money you get back after paying",
  "a person who works in a shop",
  "a large shop where you buy food",
];

const section3 = [
  ["This shirt is $20. Its ______ is $20.", "price"],
  ["I need some ______ to buy a new bag.", "money"],
  ["The ______ helped me find a pair of shoes.", "shop assistant"],
  ["I paid $20 for a $15 item and got $5 ______.", "change"],
  ["My mother is a ______ at the supermarket.", "customer"],
  ["We buy fruit and vegetables at the ______.", "supermarket"],
];

const section4 = [
  ["What do you use to pay for something?", ["money", "chair", "window"], "money"],
  ["Where can you buy food?", ["supermarket", "school", "hospital"], "supermarket"],
  ["Who helps customers in a shop?", ["shop assistant", "driver", "doctor"], "shop assistant"],
  ["What do you get when you pay too much?", ["change", "price", "size"], "change"],
  ["What tells you how much something costs?", ["price", "bag", "color"], "price"],
];

const section5 = [
  ["You want to buy a T-shirt. What do you need?", ["money", "medicine", "passport"], "money"],
  ["You are buying food. Where do you go?", ["supermarket", "airport", "library"], "supermarket"],
  ["You need help finding a product. Who do you ask?", ["shop assistant", "pilot", "waiter"], "shop assistant"],
  ["Something costs $8. You give $10. How much change do you get?", ["$2", "$8", "$18"], "$2"],
  ["A person buying something is called a ______.", ["customer", "teacher", "driver"], "customer"],
];

function ShoppingMoneyPage() {
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
    ...section1.map((q, i) => answers[`s1-${i}`] === q[2]),
    ...section2.map((q, i) => answers[`s2-${i}`] === q[1]),
    ...section3.map(
      (q, i) =>
        answers[`s3-${i}`]?.trim().toLowerCase() ===
        (q[1] as string).toLowerCase()
    ),
    ...section4.map((q, i) => answers[`s4-${i}`] === q[2]),
    ...section5.map((q, i) => answers[`s5-${i}`] === q[2]),
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
      ? `2px solid ${isCorrect ? "#22c55e" : "#ef4444"}`
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
        "Shopping & Money",
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
      title("Section 5 — Shopping & Money");

      section5.forEach((q, i) => {
        question(
          i + 1,
          q[0] as string,
          q[1] as string[]
        );
      });

      pdf.save("shopping-money-a1-worksheet.pdf");
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
        Shopping & Money
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
              .toLowerCase() ===
            (q[1] as string).toLowerCase();

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
        <h2>Section 5 — Shopping & Money</h2>

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

export default ShoppingMoneyPage;