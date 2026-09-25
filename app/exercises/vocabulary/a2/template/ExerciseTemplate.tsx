"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

/* =========================================================
   TYPES
========================================================= */

export type MultipleChoiceQuestion = {
  question: string;
  options: string[];
  correct: string;
};

export type MatchingQuestion = {
  word: string;
  correct: string;
};

export type FillQuestion = {
  question: string;
  correct: string;
};

export type ExerciseData = {
  title: string;
  level?: string;
  description?: string;

  section1: MultipleChoiceQuestion[];

  section2: {
    questions: MatchingQuestion[];
    definitions: string[];
  };

  section3: FillQuestion[];

  section4: MultipleChoiceQuestion[];

  section5: MultipleChoiceQuestion[];

  pdfFileName: string;

  pdfTemplate?: string;
};

export type ExerciseTemplateProps = {
  data: ExerciseData;

  previousHref?: string;
  nextHref?: string;

  previousTitle?: string;
  nextTitle?: string;
};

/* =========================================================
   SHUFFLE
========================================================= */

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/* =========================================================
   SHUFFLE MULTIPLE CHOICE
========================================================= */

function prepareMultipleChoice(
  questions: MultipleChoiceQuestion[]
): MultipleChoiceQuestion[] {
  return questions.map((question) => ({
    ...question,
    options: shuffle(question.options),
  }));
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ExerciseTemplate({
  data,
  previousHref,
  nextHref,
  previousTitle = "Previous",
  nextTitle = "Next",
}: ExerciseTemplateProps) {
  /* =======================================================
     RANDOMIZED QUESTIONS
  ======================================================= */

const [randomizedSection1, setRandomizedSection1] = useState<
  MultipleChoiceQuestion[]
>(() => data.section1.map((question) => ({
  ...question,
  options: [...question.options],
})));

const [randomizedSection4, setRandomizedSection4] = useState<
  MultipleChoiceQuestion[]
>(() => data.section4.map((question) => ({
  ...question,
  options: [...question.options],
})));

const [randomizedSection5, setRandomizedSection5] = useState<
  MultipleChoiceQuestion[]
>(() => data.section5.map((question) => ({
  ...question,
  options: [...question.options],
})));

const [randomizedDefinitions, setRandomizedDefinitions] = useState<
  string[]
>(() => [...data.section2.definitions]);

useEffect(() => {
  setRandomizedSection1(prepareMultipleChoice(data.section1));
  setRandomizedSection4(prepareMultipleChoice(data.section4));
  setRandomizedSection5(prepareMultipleChoice(data.section5));
  setRandomizedDefinitions(shuffle(data.section2.definitions));
}, []);

  /* =======================================================
     ANSWERS
  ======================================================= */

  const [section1Answers, setSection1Answers] = useState<
    Record<number, string>
  >({});

  const [section2Answers, setSection2Answers] = useState<
    Record<number, string>
  >({});

  const [section3Answers, setSection3Answers] = useState<
    Record<number, string>
  >({});

  const [section4Answers, setSection4Answers] = useState<
    Record<number, string>
  >({});

  const [section5Answers, setSection5Answers] = useState<
    Record<number, string>
  >({});

  const [showResult, setShowResult] = useState(false);

  /* =======================================================
     SCORE
  ======================================================= */

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    randomizedSection1.forEach((question, index) => {
      total++;

      if (section1Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section2.questions.forEach((question, index) => {
      total++;

      if (section2Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section3.forEach((question, index) => {
      total++;

      const userAnswer = (section3Answers[index] || "")
        .trim()
        .toLowerCase();

      const correctAnswer = question.correct
        .trim()
        .toLowerCase();

      if (userAnswer === correctAnswer) {
        correct++;
      }
    });

    randomizedSection4.forEach((question, index) => {
      total++;

      if (section4Answers[index] === question.correct) {
        correct++;
      }
    });

    randomizedSection5.forEach((question, index) => {
      total++;

      if (section5Answers[index] === question.correct) {
        correct++;
      }
    });

    return {
      correct,
      total,
      incorrect: total - correct,
    };
  };

  const score = calculateScore();

  /* =======================================================
     CHECK HELPERS
  ======================================================= */

  const isSection1Correct = (index: number) =>
    section1Answers[index] ===
    randomizedSection1[index]?.correct;

  const isSection2Correct = (index: number) =>
    section2Answers[index] ===
    data.section2.questions[index]?.correct;

  const isSection3Correct = (index: number) =>
    (section3Answers[index] || "")
      .trim()
      .toLowerCase() ===
    (data.section3[index]?.correct || "")
      .trim()
      .toLowerCase();

  const isSection4Correct = (index: number) =>
    section4Answers[index] ===
    randomizedSection4[index]?.correct;

  const isSection5Correct = (index: number) =>
    section5Answers[index] ===
    randomizedSection5[index]?.correct;

  /* =======================================================
     RESET
  ======================================================= */

  const resetExercise = () => {
    setSection1Answers({});
    setSection2Answers({});
    setSection3Answers({});
    setSection4Answers({});
    setSection5Answers({});
    setShowResult(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     CHECK ANSWERS
  ======================================================= */

  const checkAnswers = () => {
    setShowResult(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     PDF
  ======================================================= */

  const downloadPDF = async () => {
    try {
      const templatePath =
        data.pdfTemplate ||
        "/exercises/vocabulary/family-friends/template.png";

      const response = await fetch(templatePath);

      if (!response.ok) {
        alert("The worksheet template could not be loaded.");
        return;
      }

      const blob = await response.blob();

      const imageData = await new Promise<string>(
        (resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result as string);
          };

          reader.onerror = () => {
            reject(
              new Error("Could not read worksheet template.")
            );
          };

          reader.readAsDataURL(blob);
        }
      );

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const left = 18;
      const contentWidth = 174;

      let y = 42;

      /* -----------------------------------------------------
         BACKGROUND
      ----------------------------------------------------- */

      const addBackground = () => {
        pdf.addImage(
          imageData,
          "PNG",
          0,
          0,
          pageWidth,
          pageHeight
        );
      };

      /* -----------------------------------------------------
         NEW PAGE
      ----------------------------------------------------- */

      const newPage = () => {
        pdf.addPage();
        addBackground();
        y = 42;
      };

      /* -----------------------------------------------------
         SPACE
      ----------------------------------------------------- */

      const ensureSpace = (height: number) => {
        if (y + height > 272) {
          newPage();
        }
      };

      /* -----------------------------------------------------
         SECTION START
      ----------------------------------------------------- */

      const startSection = (minimumSpace: number) => {
        const remaining = 272 - y;

        if (remaining < minimumSpace) {
          newPage();
        }
      };

      /* -----------------------------------------------------
         SECTION TITLE
      ----------------------------------------------------- */

      const addSectionTitle = (text: string) => {
        ensureSpace(16);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.setTextColor(15, 23, 42);

        pdf.text(text, left, y);

        y += 9;
      };

      /* -----------------------------------------------------
         QUESTION
      ----------------------------------------------------- */

      const addPDFQuestion = (
        number: number,
        questionText: string,
        options?: string[]
      ) => {
        ensureSpace(20);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9.5);
        pdf.setTextColor(15, 23, 42);

        const questionLines = pdf.splitTextToSize(
          `${number}. ${questionText}`,
          contentWidth
        );

        pdf.text(questionLines, left, y);

        y += questionLines.length * 4.5 + 2;

        if (options && options.length > 0) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(9);

          options.forEach((option, optionIndex) => {
            ensureSpace(7);

            const optionLines = pdf.splitTextToSize(
              `${String.fromCharCode(
                65 + optionIndex
              )}) ${option}`,
              contentWidth - 8
            );

            pdf.text(
              optionLines,
              left + 6,
              y
            );

            y += optionLines.length * 4.2 + 1;
          });
        }

        y += 3;
      };

      /* =====================================================
         FIRST PAGE
      ===================================================== */

      /*
        IMPORTANT:
        We use the existing jsPDF first page.
        We do NOT call addPage() before writing content.
        This prevents the blank first page problem.
      */

      addBackground();

      /* -----------------------------------------------------
         TITLE
      ----------------------------------------------------- */

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.setTextColor(15, 23, 42);

      pdf.text(
        data.title,
        pageWidth / 2,
        y,
        {
          align: "center",
        }
      );

      y += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);

      pdf.text(
        data.level || "A2 Vocabulary Worksheet",
        pageWidth / 2,
        y,
        {
          align: "center",
        }
      );

      y += 7;

      if (data.description) {
        const descriptionLines =
          pdf.splitTextToSize(
            data.description,
            contentWidth
          );

        pdf.setFontSize(9);

        pdf.text(
          descriptionLines,
          left,
          y
        );

        y += descriptionLines.length * 4 + 6;
      }

      /* =====================================================
         SECTION 1
      ===================================================== */

      startSection(35);

      addSectionTitle(
        "Section 1 - Multiple Choice"
      );

      randomizedSection1.forEach(
        (question, index) => {
          addPDFQuestion(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         SECTION 2
      ===================================================== */

      startSection(40);

      addSectionTitle(
        "Section 2 - Matching"
      );

      data.section2.questions.forEach(
        (question, index) => {
          ensureSpace(9);

          pdf.setFont(
            "helvetica",
            "bold"
          );
          pdf.setFontSize(9);

          pdf.text(
            `${index + 1}. ${question.word} ______________________________`,
            left,
            y
          );

          y += 7;
        }
      );

      ensureSpace(10);

      pdf.setFont(
        "helvetica",
        "bold"
      );

      pdf.setFontSize(9.5);

      pdf.text(
        "Definitions:",
        left,
        y
      );

      y += 6;

      randomizedDefinitions.forEach(
        (definition, index) => {
          ensureSpace(8);

          pdf.setFont(
            "helvetica",
            "normal"
          );

          const lines =
            pdf.splitTextToSize(
              `${String.fromCharCode(
                65 + index
              )}) ${definition}`,
              contentWidth - 5
            );

          pdf.text(
            lines,
            left + 5,
            y
          );

          y += lines.length * 4.2 + 2;
        }
      );

      /* =====================================================
         SECTION 3
      ===================================================== */

      startSection(35);

      addSectionTitle(
        "Section 3 - Fill in the Blank"
      );

      data.section3.forEach(
        (question, index) => {
          addPDFQuestion(
            index + 1,
            question.question
          );
        }
      );

      /* =====================================================
         SECTION 4
      ===================================================== */

      startSection(35);

      addSectionTitle(
        "Section 4 - Choose the Correct Word"
      );

      randomizedSection4.forEach(
        (question, index) => {
          addPDFQuestion(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         SECTION 5
      ===================================================== */

      startSection(35);

      addSectionTitle(
        "Section 5 - Practice"
      );

      randomizedSection5.forEach(
        (question, index) => {
          addPDFQuestion(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         SAVE
      ===================================================== */

      pdf.save(data.pdfFileName);
    } catch (error) {
      console.error(
        "PDF generation error:",
        error
      );

      alert(
        "Could not create the PDF. Please try again."
      );
    }
  };

  /* =======================================================
     STYLES
  ======================================================= */

  const pageStyle = {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "40px 20px 80px",
    color: "#111827",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const headerStyle = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "24px",
    boxShadow:
      "0 8px 30px rgba(15, 23, 42, 0.06)",
    border: "1px solid #edf0f5",
  };

  const sectionStyle = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow:
      "0 8px 30px rgba(15, 23, 42, 0.06)",
    border: "1px solid #edf0f5",
  };

  const sectionTitleStyle = {
    margin: "0 0 8px",
    fontSize: "22px",
    fontWeight: 800,
    color: "#111827",
  };

  const instructionStyle = {
    margin: "0 0 22px",
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: 1.6,
  };

  const questionStyle = {
    marginBottom: "24px",
  };

  const questionTextStyle = {
    margin: "0 0 12px",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: 1.5,
  };

  const normalOptionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    padding: "11px 13px",
    borderRadius: "10px",
    background: "#f8fafc",
    cursor: "pointer",
    border: "1px solid #e5e7eb",
  };

  const correctOptionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    padding: "11px 13px",
    borderRadius: "10px",
    background: "#ecfdf5",
    cursor: "pointer",
    border: "1px solid #22c55e",
  };

  const wrongOptionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    padding: "11px 13px",
    borderRadius: "10px",
    background: "#fef2f2",
    cursor: "pointer",
    border: "1px solid #ef4444",
  };

  const selectStyle = {
    width: "100%",
    padding: "11px 12px",
    borderRadius: "10px",
    border: "1px solid #dbe2ea",
    background: "#ffffff",
    fontSize: "14px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #dbe2ea",
    fontSize: "15px",
    boxSizing: "border-box" as const,
  };

  const buttonStyle = {
    border: "none",
    borderRadius: "10px",
    padding: "12px 20px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  };

  const correctAnswerStyle = {
    marginTop: "8px",
    padding: "9px 12px",
    borderRadius: "8px",
    background: "#ecfdf5",
    color: "#15803d",
    fontSize: "14px",
    fontWeight: 700,
  };

  const wrongAnswerStyle = {
    marginTop: "8px",
    padding: "9px 12px",
    borderRadius: "8px",
    background: "#fef2f2",
    color: "#dc2626",
    fontSize: "14px",
    fontWeight: 700,
  };

  /* =======================================================
     UI
  ======================================================= */
const isB1 = data.level === "B1 Vocabulary Worksheet";
const isB2 = data.level === "B2 Vocabulary Worksheet";

const vocabularyHref = isB2
  ? "/exercises/vocabulary/b2"
  : isB1
  ? "/exercises/vocabulary/b1"
  : "/exercises/vocabulary/a2";

const vocabularyName = isB2
  ? "B2 Vocabulary"
  : isB1
  ? "B1 Vocabulary"
  : "A2 Vocabulary";
return (
    <main style={pageStyle}>
      <div style={containerStyle}>

        {/* =================================================
            HEADER
        ================================================= */}

        <div style={headerStyle}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#2563eb",
              marginBottom: "8px",
            }}
          >
            Hedef English
          </div>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "34px",
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            {data.title}
          </h1>

          {data.level && (
            <div
              style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "999px",
                background: "#eff6ff",
                color: "#2563eb",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              {data.level.toUpperCase()}
            </div>
          )}

          {data.description && (
            <p
              style={{
                margin: "4px 0 0",
                color: "#64748b",
                lineHeight: 1.7,
                fontSize: "15px",
              }}
            >
              {data.description}
            </p>
          )}
        </div>

        {/* =================================================
            SECTION 1
        ================================================= */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 1 - Multiple Choice
          </h2>

          <p style={instructionStyle}>
            Choose the correct answer.
          </p>

          {randomizedSection1.map(
            (question, index) => {
              const answered =
                section1Answers[index];

              const correct =
                isSection1Correct(index);

              return (
                <div
                  key={`section1-${index}`}
                  style={questionStyle}
                >
                  <p style={questionTextStyle}>
                    {index + 1}.{" "}
                    {question.question}
                  </p>

                  {question.options.map(
                    (option) => {
                      let optionStyle =
                        normalOptionStyle;

                      if (showResult) {
                        if (
                          option ===
                          question.correct
                        ) {
                          optionStyle =
                            correctOptionStyle;
                        } else if (
                          option === answered &&
                          option !==
                            question.correct
                        ) {
                          optionStyle =
                            wrongOptionStyle;
                        }
                      }

                      return (
                        <label
                          key={option}
                          style={optionStyle}
                        >
                          <input
                            type="radio"
                            name={`section1-${index}`}
                            value={option}
                            checked={
                              answered ===
                              option
                            }
                            onChange={() => {
                              setSection1Answers(
                                (previous) => ({
                                  ...previous,
                                  [index]:
                                    option,
                                })
                              );

                              if (
                                showResult
                              ) {
                                setShowResult(
                                  false
                                );
                              }
                            }}
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}

                  {showResult && (
                    <div
                      style={
                        correct
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {correct
                        ? "\u2713 Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* =================================================
            SECTION 2
        ================================================= */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 2 - Matching
          </h2>

          <p style={instructionStyle}>
            Match each word with the correct
            definition.
          </p>

          {data.section2.questions.map(
            (question, index) => {
              const correct =
                isSection2Correct(index);

              return (
                <div
                  key={`section2-${index}`}
                  style={questionStyle}
                >
                  <p style={questionTextStyle}>
                    {index + 1}.{" "}
                    {question.word}
                  </p>

                  <select
                    value={
                      section2Answers[index] ||
                      ""
                    }
                    onChange={(event) => {
                      setSection2Answers(
                        (previous) => ({
                          ...previous,
                          [index]:
                            event.target.value,
                        })
                      );

                      if (showResult) {
                        setShowResult(false);
                      }
                    }}
                    style={{
                      ...selectStyle,
                      ...(showResult
                        ? {
                            background: correct
                              ? "#ecfdf5"
                              : "#fef2f2",
                            border: correct
                              ? "1px solid #22c55e"
                              : "1px solid #ef4444",
                          }
                        : {}),
                    }}
                  >
                    <option value="">
                      Select a definition
                    </option>

                    {randomizedDefinitions.map(
                      (
                        definition,
                        definitionIndex
                      ) => (
                        <option
                          key={definition}
                          value={definition}
                        >
                          {String.fromCharCode(
                            65 +
                              definitionIndex
                          )}
                          {") "}
                          {definition}
                        </option>
                      )
                    )}
                  </select>

                  {showResult && (
                    <div
                      style={
                        correct
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {correct
                        ? "\u2713 Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* =================================================
            SECTION 3
        ================================================= */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 3 -Fill in the Blank
          </h2>

          <p style={instructionStyle}>
            Type the correct word.
          </p>

          {data.section3.map(
            (question, index) => {
              const correct =
                isSection3Correct(index);

              return (
                <div
                  key={`section3-${index}`}
                  style={questionStyle}
                >
                  <p style={questionTextStyle}>
                    {index + 1}.{" "}
                    {question.question}
                  </p>

                  <input
                    type="text"
                    value={
                      section3Answers[index] ||
                      ""
                    }
                    onChange={(event) => {
                      setSection3Answers(
                        (previous) => ({
                          ...previous,
                          [index]:
                            event.target.value,
                        })
                      );

                      if (showResult) {
                        setShowResult(false);
                      }
                    }}
                    style={{
                      ...inputStyle,
                      ...(showResult
                        ? {
                            background: correct
                              ? "#ecfdf5"
                              : "#fef2f2",
                            border: correct
                              ? "1px solid #22c55e"
                              : "1px solid #ef4444",
                          }
                        : {}),
                    }}
                  />

                  {showResult && (
                    <div
                      style={
                        correct
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {correct
                        ? "\u2713 Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* =================================================
            SECTION 4
        ================================================= */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 4 - Choose the Correct Word
          </h2>

          <p style={instructionStyle}>
            Choose the correct word.
          </p>

          {randomizedSection4.map(
            (question, index) => {
              const answered =
                section4Answers[index];

              const correct =
                isSection4Correct(index);

              return (
                <div
                  key={`section4-${index}`}
                  style={questionStyle}
                >
                  <p style={questionTextStyle}>
                    {index + 1}.{" "}
                    {question.question}
                  </p>

                  {question.options.map(
                    (option) => {
                      let optionStyle =
                        normalOptionStyle;

                      if (showResult) {
                        if (
                          option ===
                          question.correct
                        ) {
                          optionStyle =
                            correctOptionStyle;
                        } else if (
                          option === answered &&
                          option !==
                            question.correct
                        ) {
                          optionStyle =
                            wrongOptionStyle;
                        }
                      }

                      return (
                        <label
                          key={option}
                          style={optionStyle}
                        >
                          <input
                            type="radio"
                            name={`section4-${index}`}
                            value={option}
                            checked={
                              answered ===
                              option
                            }
                            onChange={() => {
                              setSection4Answers(
                                (previous) => ({
                                  ...previous,
                                  [index]:
                                    option,
                                })
                              );

                              if (
                                showResult
                              ) {
                                setShowResult(
                                  false
                                );
                              }
                            }}
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}

                  {showResult && (
                    <div
                      style={
                        correct
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {correct
                        ? "\u2713 Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* =================================================
            SECTION 5
        ================================================= */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 5 - Practice
          </h2>

          <p style={instructionStyle}>
            Choose the correct answer.
          </p>

          {randomizedSection5.map(
            (question, index) => {
              const answered =
                section5Answers[index];

              const correct =
                isSection5Correct(index);

              return (
                <div
                  key={`section5-${index}`}
                  style={questionStyle}
                >
                  <p style={questionTextStyle}>
                    {index + 1}.{" "}
                    {question.question}
                  </p>

                  {question.options.map(
                    (option) => {
                      let optionStyle =
                        normalOptionStyle;

                      if (showResult) {
                        if (
                          option ===
                          question.correct
                        ) {
                          optionStyle =
                            correctOptionStyle;
                        } else if (
                          option === answered &&
                          option !==
                            question.correct
                        ) {
                          optionStyle =
                            wrongOptionStyle;
                        }
                      }

                      return (
                        <label
                          key={option}
                          style={optionStyle}
                        >
                          <input
                            type="radio"
                            name={`section5-${index}`}
                            value={option}
                            checked={
                              answered ===
                              option
                            }
                            onChange={() => {
                              setSection5Answers(
                                (previous) => ({
                                  ...previous,
                                  [index]:
                                    option,
                                })
                              );

                              if (
                                showResult
                              ) {
                                setShowResult(
                                  false
                                );
                              }
                            }}
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}

                  {showResult && (
                    <div
                      style={
                        correct
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {correct
                        ? "\u2713 Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* =================================================
            RESULT
        ================================================= */}

        {showResult && (
          <div
            style={{
              ...sectionStyle,
              textAlign: "center",
              background: "#f8fafc",
            }}
          >
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: "26px",
              }}
            >
              Your Result
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "30px",
                    color: "#16a34a",
                  }}
                >
                  {score.correct}
                </strong>

                <span>Correct</span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "30px",
                    color: "#dc2626",
                  }}
                >
                  {score.incorrect}
                </strong>

                <span>Incorrect</span>
              </div>

              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "30px",
                  }}
                >
                  {score.total}
                </strong>

                <span>Total</span>
              </div>
            </div>

            <p
              style={{
                marginTop: "20px",
                fontWeight: 700,
              }}
            >
              Score: {score.correct} /{" "}
              {score.total}
            </p>
          </div>
        )}

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          style={{
            ...sectionStyle,
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={resetExercise}
            style={{
              ...buttonStyle,
              background: "#e5e7eb",
              color: "#111827",
            }}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={checkAnswers}
            style={{
              ...buttonStyle,
              background: "#2563eb",
              color: "#ffffff",
            }}
          >
            Check Answers
          </button>

          <button
            type="button"
            onClick={downloadPDF}
            style={{
              ...buttonStyle,
              background: "#111827",
              color: "#ffffff",
            }}
          >
            Download PDF
          </button>
        </div>

        {/* =================================================
            PREVIOUS / NEXT
        ================================================= */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          {previousHref ? (
            <Link
              href={previousHref}
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                color: "#111827",
                fontWeight: 700,
              }}
            >
           &larr; {previousTitle}
            </Link>
          ) : (
            <div />
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                background: "#2563eb",
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
            {nextTitle} &rarr;
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* =================================================
            BACK TO A2
        ================================================= */}

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Link
            href={vocabularyHref}
            style={{
              textDecoration: "none",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            &larr; Back to {vocabularyName}
          </Link>
        </div>
      </div>
    </main>
  );
}

