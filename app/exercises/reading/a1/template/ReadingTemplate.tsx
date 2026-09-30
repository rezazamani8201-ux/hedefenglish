"use client";

import { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

export type MCQQuestion = {
  question: string;
  options: string[];
  correct: string;
};

export type TrueFalseQuestion = {
  statement: string;
  correct: "True" | "False";
};

export type FillQuestion = {
  sentence: string;
  correct: string;
};

export type ReadingData = {
  title: string;
  level: string;
  description: string;
  passage: string;

  section1: MCQQuestion[];
  section2: TrueFalseQuestion[];
  section3: MCQQuestion[];
  section4: FillQuestion[];
  section5: MCQQuestion[];

  pdfFileName: string;
  pdfTemplate?: string;
};

export type ReadingTemplateProps = {
  data: ReadingData;

  previousHref?: string;
  nextHref?: string;

  previousTitle?: string;
  nextTitle?: string;
};

export default function ReadingTemplate({
  data,
  previousHref,
  nextHref,
  previousTitle = "Previous",
  nextTitle = "Next",
}: ReadingTemplateProps) {
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

  /* =========================================================
     SCORE
  ========================================================= */

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    data.section1.forEach((question, index) => {
      total++;

      if (section1Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section2.forEach((question, index) => {
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

    data.section4.forEach((question, index) => {
      total++;

      if (section4Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section5.forEach((question, index) => {
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

  /* =========================================================
     CHECK HELPERS
  ========================================================= */

  const isSection1Correct = (index: number) =>
    section1Answers[index] === data.section1[index]?.correct;

  const isSection2Correct = (index: number) =>
    section2Answers[index] === data.section2[index]?.correct;

  const isSection3Correct = (index: number) =>
    (section3Answers[index] || "")
      .trim()
      .toLowerCase() ===
    (data.section3[index]?.correct || "")
      .trim()
      .toLowerCase();

  const isSection4Correct = (index: number) =>
    section4Answers[index] === data.section4[index]?.correct;

  const isSection5Correct = (index: number) =>
    section5Answers[index] === data.section5[index]?.correct;

  /* =========================================================
     RESET
  ========================================================= */

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

  /* =========================================================
     CHECK ANSWERS
  ========================================================= */

  const checkAnswers = () => {
    setShowResult(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     PDF
  ========================================================= */

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
              new Error(
                "Could not read worksheet template."
              )
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
      const right = 18;

      const contentWidth =
        pageWidth - left - right;

      const top = 42;
      const bottom = 272;

      let y = top;

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

      addBackground();

      const newPage = () => {
        pdf.addPage();
        addBackground();
        y = top;
      };

      const ensureSpace = (height: number) => {
        if (y + height > bottom) {
          newPage();
        }
      };

      const getLines = (
        text: string,
        width: number,
        fontSize = 9
      ) => {
        pdf.setFontSize(fontSize);

        return pdf.splitTextToSize(
          text,
          width
        );
      };

      /* =====================================================
         TITLE
      ===================================================== */

      const titleLines = getLines(
        data.title,
        contentWidth,
        15
      );

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(15);
      pdf.setTextColor(17, 24, 39);

      pdf.text(
        titleLines,
        left,
        y
      );

      y +=
        titleLines.length * 6 +
        2;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);

      pdf.text(
        data.level,
        left,
        y
      );

      y += 6;

      if (data.description) {
        const descriptionLines =
          getLines(
            data.description,
            contentWidth,
            9
          );

        pdf.setFontSize(9);
        pdf.setTextColor(107, 114, 128);

        pdf.text(
          descriptionLines,
          left,
          y
        );

        y +=
          descriptionLines.length * 4 +
          6;
      }

      /* =====================================================
         PASSAGE
      ===================================================== */

      const passageLines = getLines(
        data.passage,
        contentWidth - 10,
        9.5
      );

      const passageHeight =
        passageLines.length * 4.5 + 12;

      ensureSpace(
        Math.min(
          passageHeight,
          bottom - top
        )
      );

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9.5);
      pdf.setTextColor(17, 24, 39);

      pdf.text(
        passageLines,
        left + 5,
        y
      );

      y += passageHeight;

      /* =====================================================
         SECTION TITLE
      ===================================================== */

      const addSectionTitle = (
        title: string
      ) => {
        if (y + 22 > bottom) {
          newPage();
        }

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.setTextColor(17, 24, 39);

        pdf.text(
          title,
          left,
          y
        );

        y += 8;
      };

      /* =====================================================
         MCQ
      ===================================================== */

      const addMCQ = (
        number: number,
        question: string,
        options: string[]
      ) => {
        const questionLines =
          getLines(
            `${number}. ${question}`,
            contentWidth,
            9
          );

        const optionLines =
          options.map((option, index) =>
            getLines(
              `${String.fromCharCode(
                65 + index
              )}) ${option}`,
              contentWidth - 8,
              9
            )
          );

        const questionHeight =
          questionLines.length * 4.2;

        const optionsHeight =
          optionLines.reduce(
            (total, lines) =>
              total +
              lines.length * 4 +
              1.5,
            0
          );

        const blockHeight =
          questionHeight +
          optionsHeight +
          5;

        if (y + blockHeight > bottom) {
          newPage();
        }

        pdf.setFont(
          "helvetica",
          "bold"
        );

        pdf.setFontSize(9);

        pdf.text(
          questionLines,
          left,
          y
        );

        y +=
          questionLines.length * 4.2 +
          2;

        pdf.setFont(
          "helvetica",
          "normal"
        );

        pdf.setFontSize(9);

        optionLines.forEach(
          (lines) => {
            pdf.text(
              lines,
              left + 6,
              y
            );

            y +=
              lines.length * 4 +
              1.5;
          }
        );

        y += 3;
      };

      /* =====================================================
         TRUE / FALSE
      ===================================================== */

      const addTrueFalse = (
        number: number,
        statement: string
      ) => {
        const lines = getLines(
          `${number}. ${statement}`,
          contentWidth,
          9
        );

        const blockHeight =
          lines.length * 4.2 +
          10;

        if (y + blockHeight > bottom) {
          newPage();
        }

        pdf.setFont(
          "helvetica",
          "bold"
        );

        pdf.setFontSize(9);

        pdf.text(
          lines,
          left,
          y
        );

        y +=
          lines.length * 4.2 +
          2;

        pdf.setFont(
          "helvetica",
          "normal"
        );

        pdf.text(
          "True          False",
          left + 6,
          y
        );

        y += 7;
      };

      /* =====================================================
         FILL
      ===================================================== */

      const addFill = (
        number: number,
        sentence: string
      ) => {
        const lines = getLines(
          `${number}. ${sentence}`,
          contentWidth,
          9
        );

        const blockHeight =
          lines.length * 4.2 +
          10;

        if (y + blockHeight > bottom) {
          newPage();
        }

        pdf.setFont(
          "helvetica",
          "bold"
        );

        pdf.setFontSize(9);

        pdf.text(
          lines,
          left,
          y
        );

        y +=
          lines.length * 4.2 +
          3;

        pdf.setDrawColor(
          100,
          116,
          139
        );

        pdf.line(
          left + 6,
          y,
          left +
            contentWidth -
            10,
          y
        );

        y += 7;
      };

      /* =====================================================
         SECTION 1
      ===================================================== */

      addSectionTitle(
        "Section 1 - Reading Comprehension"
      );

      data.section1.forEach(
        (question, index) => {
          addMCQ(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         SECTION 2
      ===================================================== */

      addSectionTitle(
        "Section 2 - True or False"
      );

      data.section2.forEach(
        (question, index) => {
          addTrueFalse(
            index + 1,
            question.statement
          );
        }
      );

      /* =====================================================
         SECTION 3
      ===================================================== */

      addSectionTitle(
        "Section 3 - Vocabulary in Context"
      );

      data.section3.forEach(
        (question, index) => {
          addMCQ(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         SECTION 4
      ===================================================== */

      addSectionTitle(
        "Section 4 - Complete the Sentence"
      );

      data.section4.forEach(
        (question, index) => {
          addFill(
            index + 1,
            question.sentence
          );
        }
      );

      /* =====================================================
         SECTION 5
      ===================================================== */

      addSectionTitle(
        "Section 5 - Main Idea & Deeper Understanding"
      );

      data.section5.forEach(
        (question, index) => {
          addMCQ(
            index + 1,
            question.question,
            question.options
          );
        }
      );

      /* =====================================================
         PAGE NUMBERS
      ===================================================== */

      const totalPages =
        pdf.getNumberOfPages();

      for (
        let page = 1;
        page <= totalPages;
        page++
      ) {
        pdf.setPage(page);

        pdf.setFont(
          "helvetica",
          "normal"
        );

        pdf.setFontSize(8);
        pdf.setTextColor(
          107,
          114,
          128
        );

        pdf.text(
          `Page ${page} / ${totalPages}`,
          pageWidth - 18,
          289,
          {
            align: "right",
          }
        );
      }

      pdf.save(
        data.pdfFileName
      );
    } catch (error) {
      console.error(error);

      alert(
        "Could not create the PDF. Please try again."
      );
    }
  };

  /* =========================================================
     STYLES
  ========================================================= */

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

  /* =========================================================
     UI
  ========================================================= */

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>

        {/* HEADER */}

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

        {/* PASSAGE */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Reading Passage
          </h2>

          <p style={instructionStyle}>
            Read the passage carefully before answering the questions.
          </p>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              color: "#374151",
              fontSize: "15px",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
            }}
          >
            {data.passage}
          </div>
        </section>

        {/* SECTION 1 */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 1 - Reading Comprehension
          </h2>

          <p style={instructionStyle}>
            Choose the correct answer.
          </p>

          {data.section1.map(
            (question, index) => {
              const answered =
                section1Answers[index];

              return (
                <div
                  key={`section1-${index}`}
                  style={questionStyle}
                >
                  <p
                    style={
                      questionTextStyle
                    }
                  >
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
                          option ===
                            answered &&
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
                            onChange={() =>
                              setSection1Answers(
                                (prev) => ({
                                  ...prev,
                                  [index]:
                                    option,
                                })
                              )
                            }
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}

                  {showResult &&
                    !isSection1Correct(
                      index
                    ) &&
                    answered && (
                      <div
                        style={
                          wrongAnswerStyle
                        }
                      >
                        Incorrect - Correct
                        answer:{" "}
                        {question.correct}
                      </div>
                    )}
                </div>
              );
            }
          )}
        </section>

        {/* SECTION 2 */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 2 - True or False
          </h2>

          <p style={instructionStyle}>
            Decide whether each statement is True or False.
          </p>

          {data.section2.map(
            (question, index) => {
              const answered =
                section2Answers[index];

              return (
                <div
                  key={`section2-${index}`}
                  style={questionStyle}
                >
                  <p
                    style={
                      questionTextStyle
                    }
                  >
                    {index + 1}.{" "}
                    {question.statement}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {["True", "False"].map(
                      (option) => {
                        let background =
                          "#f8fafc";

                        let border =
                          "1px solid #e5e7eb";

                        if (
                          showResult &&
                          option ===
                            question.correct
                        ) {
                          background =
                            "#ecfdf5";
                          border =
                            "1px solid #22c55e";
                        }

                        if (
                          showResult &&
                          option === answered &&
                          option !==
                            question.correct
                        ) {
                          background =
                            "#fef2f2";
                          border =
                            "1px solid #ef4444";
                        }

                        return (
                          <label
                            key={option}
                            style={{
                              display: "flex",
                              alignItems:
                                "center",
                              gap: "8px",
                              padding:
                                "11px 18px",
                              borderRadius:
                                "10px",
                              background,
                              border,
                              cursor:
                                "pointer",
                              fontWeight: 600,
                            }}
                          >
                            <input
                              type="radio"
                              name={`section2-${index}`}
                              checked={
                                answered ===
                                option
                              }
                              onChange={() =>
                                setSection2Answers(
                                  (prev) => ({
                                    ...prev,
                                    [index]:
                                      option,
                                  })
                                )
                              }
                            />

                            {option}
                          </label>
                        );
                      }
                    )}
                  </div>

                  {showResult &&
                    !isSection2Correct(
                      index
                    ) &&
                    answered && (
                      <div
                        style={
                          wrongAnswerStyle
                        }
                      >
                        Incorrect - Correct
                        answer:{" "}
                        {question.correct}
                      </div>
                    )}
                </div>
              );
            }
          )}
        </section>

        {/* SECTION 3 */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 3 - Vocabulary in Context
          </h2>

          <p style={instructionStyle}>
            Choose the correct answer based on the passage.
          </p>

          {data.section3.map(
            (question, index) => {
              const answered =
                section3Answers[index];

              return (
                <div
                  key={`section3-${index}`}
                  style={questionStyle}
                >
                  <p
                    style={
                      questionTextStyle
                    }
                  >
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
                          option ===
                            answered &&
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
                            name={`section3-${index}`}
                            checked={
                              answered ===
                              option
                            }
                            onChange={() =>
                              setSection3Answers(
                                (prev) => ({
                                  ...prev,
                                  [index]:
                                    option,
                                })
                              )
                            }
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* SECTION 4 */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 4 - Complete the Sentence
          </h2>

          <p style={instructionStyle}>
            Complete each sentence with the correct answer.
          </p>

          {data.section4.map(
            (question, index) => {
              return (
                <div
                  key={`section4-${index}`}
                  style={questionStyle}
                >
                  <p
                    style={
                      questionTextStyle
                    }
                  >
                    {index + 1}.{" "}
                    {question.sentence}
                  </p>

                  <input
                    type="text"
                    value={
                      section4Answers[
                        index
                      ] || ""
                    }
                    onChange={(e) =>
                      setSection4Answers(
                        (prev) => ({
                          ...prev,
                          [index]:
                            e.target.value,
                        })
                      )
                    }
                    style={inputStyle}
                  />

                  {showResult && (
                    <div
                      style={
                        isSection4Correct(
                          index
                        )
                          ? correctAnswerStyle
                          : wrongAnswerStyle
                      }
                    >
                      {isSection4Correct(
                        index
                      )
                        ? "Correct"
                        : `Incorrect - Correct answer: ${question.correct}`}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* SECTION 5 */}

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>
            Section 5 - Main Idea &amp; Deeper Understanding
          </h2>

          <p style={instructionStyle}>
            Choose the best answer.
          </p>

          {data.section5.map(
            (question, index) => {
              const answered =
                section5Answers[index];

              return (
                <div
                  key={`section5-${index}`}
                  style={questionStyle}
                >
                  <p
                    style={
                      questionTextStyle
                    }
                  >
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
                          option ===
                            answered &&
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
                            checked={
                              answered ===
                              option
                            }
                            onChange={() =>
                              setSection5Answers(
                                (prev) => ({
                                  ...prev,
                                  [index]:
                                    option,
                                })
                              )
                            }
                          />

                          <span>
                            {option}
                          </span>
                        </label>
                      );
                    }
                  )}
                </div>
              );
            }
          )}
        </section>

        {/* SCORE */}

        {showResult && (
          <section style={sectionStyle}>
            <div
              style={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  color: "#2563eb",
                }}
              >
                {score.correct} /{" "}
                {score.total}
              </div>

              <div
                style={{
                  marginTop: "5px",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Your Score
              </div>
            </div>
          </section>
        )}

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          <button
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
            onClick={resetExercise}
            style={{
              ...buttonStyle,
              background: "#ffffff",
              color: "#111827",
              border:
                "1px solid #dbe2ea",
            }}
          >
            Reset
          </button>

          <button
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

        {/* NAVIGATION */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            padding: "20px 4px",
          }}
        >
          {previousHref ? (
            <Link
              href={previousHref}
              style={{
                color: "#2563eb",
                textDecoration:
                  "none",
                fontWeight: 700,
              }}
            >
              &larr;{" "}
              {previousTitle}
            </Link>
          ) : (
            <span
              style={{
                color: "#9ca3af",
              }}
            >
              &larr; Previous
            </span>
          )}

          <Link
            href={
  data.level.startsWith("A2")
    ? "/exercises/reading/a2"
    : data.level.startsWith("B1")
    ? "/exercises/reading/b1"
    : data.level.startsWith("B2")
    ? "/exercises/reading/b2"
    : "/exercises/reading/a1"
}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            A1 Reading
          </Link>

          {nextHref ? (
            <Link
              href={nextHref}
              style={{
                color: "#2563eb",
                textDecoration:
                  "none",
                fontWeight: 700,
              }}
            >
              {nextTitle} &rarr;
            </Link>
          ) : (
            <span
              style={{
                color: "#9ca3af",
              }}
            >
              Next &rarr;
            </span>
          )}
        </div>
      </div>
    </main>
  );
}