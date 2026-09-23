"use client";
import "../exercise.css";
import Link from "next/link";
import { useState } from "react";
import jsPDF from "jspdf";

const section1 = [
  ["My mother's husband is my ______.", ["uncle", "father", "brother"], "father"],
  ["My father's wife is my ______.", ["sister", "aunt", "mother"], "mother"],
  ["My mother's mother is my ______.", ["grandmother", "cousin", "aunt"], "grandmother"],
  ["My father's father is my ______.", ["brother", "uncle", "grandfather"], "grandfather"],
  ["My mother's brother is my ______.", ["grandfather", "uncle", "cousin"], "uncle"],
  ["My father's sister is my ______.", ["mother", "cousin", "aunt"], "aunt"],
  ["My uncle's child is my ______.", ["grandfather", "cousin", "brother"], "cousin"],
  ["A person you know and like at school can be your ______.", ["friend", "uncle", "grandparent"], "friend"],
];

const section2 = [
  ["father", "your mother's husband"],
  ["mother", "your father's wife"],
  ["brother", "a boy or man with the same parents as you"],
  ["sister", "a girl or woman with the same parents as you"],
  ["uncle", "your mother's or father's brother"],
  ["aunt", "your mother's or father's sister"],
];

const definitions = [
  "your mother's or father's sister",
  "your father's wife",
  "a girl or woman with the same parents as you",
  "your mother's husband",
  "your mother's or father's brother",
  "a boy or man with the same parents as you",
];

const section3 = [
  ["My mother's mother is my ______.", "grandmother"],
  ["My father's father is my ______.", "grandfather"],
  ["My mother's brother is my ______.", "uncle"],
  ["My father's sister is my ______.", "aunt"],
  ["My uncle's child is my ______.", "cousin"],
  ["A person you know and like is your ______.", "friend"],
];

const section4 = [
  ["My mother's sister is my ______.", ["cousin", "aunt", "grandmother"], "aunt"],
  ["My father's brother is my ______.", ["uncle", "father", "cousin"], "uncle"],
  ["My sister's brother is my ______.", ["grandfather", "brother", "uncle"], "brother"],
  ["My father's mother is my ______.", ["aunt", "sister", "grandmother"], "grandmother"],
  ["My mother's son is my ______.", ["brother", "uncle", "grandfather"], "brother"],
];

const section5 = [
  ["Tom's mother's mother is Tom's ______.", ["aunt", "grandmother", "cousin"], "grandmother"],
  ["Sara's father's brother is Sara's ______.", ["uncle", "brother", "grandfather"], "uncle"],
  ["Ali's mother's sister is Ali's ______.", ["cousin", "aunt", "mother"], "aunt"],
  ["Emma's uncle's child is Emma's ______.", ["cousin", "sister", "grandmother"], "cousin"],
  ["John's father's father is John's ______.", ["uncle", "brother", "grandfather"], "grandfather"],
];

export default function FamilyFriends() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const setAnswer = (key: string, value: string) => {
    setAnswers((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const score = [
    ...section1.map((q, i) => answers[`s1-${i}`] === q[2]),
    ...section2.map((q, i) => answers[`s2-${i}`] === q[1]),
    ...section3.map((q, i) => answers[`s3-${i}`]?.trim().toLowerCase() === q[1]),
    ...section4.map((q, i) => answers[`s4-${i}`] === q[2]),
    ...section5.map((q, i) => answers[`s5-${i}`] === q[2]),
  ].filter(Boolean).length;

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
        if (y + amount > 270) page();
      };
const sectionSpace = (amount: number) => {
  const remaining = 270 - y;

  // If at least 2/3 of the section can fit,
  // keep it on the current page.
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
      pdf.text("Family & Friends", 105, y, {
        align: "center",
      });

      y += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text("A1 Vocabulary Worksheet", 105, y, {
        align: "center",
      });

      y += 13;

      // SECTION 1
      sectionSpace(200);
      title("Section 1 — Multiple Choice");

      section1.forEach((q, i) => {
        question(i + 1, q[0] as string, q[1] as string[]);
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
        question(i + 1, (q[0] as string).replace("______", "____________"));
      });

      // SECTION 4
      sectionSpace(140);
      title("Section 4 — Choose the Correct Word");

      section4.forEach((q, i) => {
        question(i + 1, q[0] as string, q[1] as string[]);
      });

      // SECTION 5
      sectionSpace(140);
      title("Section 5 — Family Relationships");

      section5.forEach((q, i) => {
        question(i + 1, q[0] as string, q[1] as string[]);
      });

      

      pdf.save("family-and-friends-a1-worksheet.pdf");
    };

    reader.readAsDataURL(blob);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        paddingBottom: "80px",
      }}
    >
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8edf3",
          padding: "28px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#173b78",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            Hedef <span style={{ color: "#3b82f6" }}>English</span>
          </Link>

          <Link
            href="/exercises/vocabulary/a1"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontWeight: 600,
            }}
          >
            ← Back to A1 Vocabulary
          </Link>
        </div>
      </header>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 6%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <p
            style={{
              color: "#3b82f6",
              fontWeight: 800,
              letterSpacing: "1.5px",
              fontSize: "13px",
            }}
          >
            A1 VOCABULARY
          </p>

          <h1
            style={{
              color: "#13294b",
              fontSize: "clamp(32px, 5vw, 48px)",
              margin: "0 0 12px",
            }}
          >
            Family & Friends
          </h1>

          <p style={{ color: "#64748b" }}>
            Complete all five sections.
          </p>
        </div>

        {/* SECTION 1 */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>1. Multiple Choice</h2>

          {section1.map((q, i) => (
            <div
  key={i}
  style={getQuestionStyle(
    showResult,
    answers[`s1-${i}`] === q[2]
  )}
>
              <p>
                <strong>{i + 1}. </strong>
                {q[0] as string}
              </p>

              {(q[1] as string[]).map((option) => (
                <label key={option} style={optionStyle}>
                  <input
                    type="radio"
                    name={`s1-${i}`}
                    checked={answers[`s1-${i}`] === option}
                    onChange={() => setAnswer(`s1-${i}`, option)}
                  />
                  {option}
                </label>
              ))}
                            {showResult && answers[`s1-${i}`] !== q[2] && (
                <div
                  style={{
                    marginTop: "8px",
                    color: "#16a34a",
                    fontWeight: 700,
                  }}
                >
                  Correct answer: {q[2] as string}
                </div>
              )}
            </div>
          ))}
          
        </div>

        {/* SECTION 2 */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>2. Matching</h2>

          <p style={instructionStyle}>
            Match each word with the correct definition.
          </p>

          {section2.map((q, i) => (
            <div
  key={i}
  style={{
    ...matchRow,
    padding: showResult ? "14px" : "0",
    borderRadius: "10px",
    border: showResult
      ? `2px solid ${
          answers[`s2-${i}`] === q[1]
            ? "#22c55e"
            : "#ef4444"
        }`
      : "none",
    background: showResult
      ? answers[`s2-${i}`] === q[1]
        ? "#f0fdf4"
        : "#fef2f2"
      : "transparent",
  }}
>
              <strong>
                {i + 1}. {q[0]}
              </strong>

              <select
                value={answers[`s2-${i}`] || ""}
                onChange={(e) =>
                  setAnswer(`s2-${i}`, e.target.value)
                }
                style={selectStyle}
              >
                <option value="">Choose...</option>

                {definitions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {showResult && answers[`s2-${i}`] !== q[1] && (
  <div
    style={{
      marginTop: "8px",
      color: "#16a34a",
      fontWeight: 700,
    }}
  >
    Correct answer: {q[1] as string}
  </div>
)}
            </div>
          ))}
        </div>

        {/* SECTION 3 */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>3. Complete the Sentences</h2>

          <p style={instructionStyle}>
            Write the correct family word.
          </p>

          {section3.map((q, i) => (
            <div
  key={i}
  style={getQuestionStyle(
    showResult,
    answers[`s3-${i}`]?.trim().toLowerCase() === q[1]
  )}
>
              <p>
                <strong>{i + 1}. </strong>
                {q[0] as string}
              </p>

              <input
                type="text"
                value={answers[`s3-${i}`] || ""}
                onChange={(e) =>
                  setAnswer(`s3-${i}`, e.target.value)
                }
                style={inputStyle}
              />
              {showResult &&
  answers[`s3-${i}`]?.trim().toLowerCase() !== q[1] && (
    <div
      style={{
        marginTop: "8px",
        color: "#16a34a",
        fontWeight: 700,
      }}
    >
      Correct answer: {q[1] as string}
    </div>
  )}
            </div>
          ))}
        </div>

        {/* SECTION 4 */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>4. Choose the Correct Word</h2>

          {section4.map((q, i) => (
            <div
  key={i}
  style={getQuestionStyle(
    showResult,
    answers[`s4-${i}`] === q[2]
  )}
>
              <p>
                <strong>{i + 1}. </strong>
                {q[0] as string}
              </p>

              <select
                value={answers[`s4-${i}`] || ""}
                onChange={(e) =>
                  setAnswer(`s4-${i}`, e.target.value)
                }
                style={selectStyle}
              >
                <option value="">Choose...</option>

                {(q[1] as string[]).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {showResult && answers[`s4-${i}`] !== q[2] && (
  <div
    style={{
      marginTop: "8px",
      color: "#16a34a",
      fontWeight: 700,
    }}
  >
    Correct answer: {q[2] as string}
  </div>
)}
            </div>
          ))}
        </div>

        {/* SECTION 5 */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>5. Family Relationships</h2>

          {section5.map((q, i) => (
            <div
  key={i}
  style={getQuestionStyle(
    showResult,
    answers[`s5-${i}`] === q[2]
  )}
>
              <p>
                <strong>{i + 1}. </strong>
                {q[0] as string}
              </p>

              {(q[1] as string[]).map((option) => (
                <label key={option} style={optionStyle}>
                  <input
                    type="radio"
                    name={`s5-${i}`}
                    checked={answers[`s5-${i}`] === option}
                    onChange={() => setAnswer(`s5-${i}`, option)}
                  />
                  {option}
                </label>
                           ))}

              {showResult && answers[`s5-${i}`] !== q[2] && (
                <div
                  style={{
                    marginTop: "8px",
                    color: "#16a34a",
                    fontWeight: 700,
                  }}
                >
                  Correct answer: {q[2] as string}
                </div>
              )}
            </div>
            
          ))}
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <button
            type="button"
            onClick={() => setShowResult(true)}
            style={buttonStyle}
          >
            Check Answers
          </button>

          <button
            type="button"
            onClick={downloadPDF}
            style={{
              ...buttonStyle,
              background: "#3b82f6",
            }}
          >
            Download PDF
          </button>
        </div>

        {showResult && (
          <div
            style={{
              marginTop: "25px",
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#64748b" }}>YOUR SCORE</p>

            <h2
              style={{
                color: "#173b78",
                fontSize: "38px",
                margin: 0,
              }}
            >
              {score} / 30
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}

const cardStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  background: "#ffffff",
  border: "1px solid #e8edf3",
  borderRadius: "18px",
  padding: "28px",
  marginBottom: "24px",
  boxShadow: "0 8px 25px rgba(23, 59, 120, 0.05)",
};

const headingStyle = {
  margin: "0 0 22px",
  color: "#173b78",
  fontSize: "22px",
};

const instructionStyle = {
  color: "#64748b",
  marginBottom: "20px",
};

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

const optionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "11px 13px",
  marginBottom: "8px",
  border: "1px solid #e5eaf0",
  borderRadius: "10px",
  cursor: "pointer",
};

const matchRow = {
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  gap: "15px",
  alignItems: "center",
  marginBottom: "14px",
};

const selectStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "11px",
  border: "1px solid #dfe6ee",
  borderRadius: "9px",
  background: "#ffffff",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "12px",
  border: "1px solid #dfe6ee",
  borderRadius: "9px",
};

const buttonStyle = {
  border: "none",
  background: "#173b78",
  color: "#ffffff",
  borderRadius: "12px",
  padding: "14px 28px",
  fontSize: "15px",
  fontWeight: 700,
  cursor: "pointer",
};