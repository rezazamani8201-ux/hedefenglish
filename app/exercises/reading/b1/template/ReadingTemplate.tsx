"use client";

import { useState } from "react";
import Link from "next/link";

export type ReadingData = {
  title: string;
  level: string;
  description: string;
  passage: string;

  section1: {
    question: string;
    options: string[];
    correct: string;
  }[];

  section2: {
    statement: string;
    correct: "True" | "False";
  }[];

  section3: {
    question: string;
    options: string[];
    correct: string;
  }[];

  section4: {
    sentence: string;
    correct: string;
  }[];

  section5: {
    question: string;
    options: string[];
    correct: string;
  }[];

  pdfFileName: string;
};

type ReadingTemplateProps = {
  data: ReadingData;
  previousHref?: string;
  previousTitle?: string;
  nextHref?: string;
  nextTitle?: string;
};

export default function ReadingTemplate({
  data,
  previousHref,
  previousTitle,
  nextHref,
  nextTitle,
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

  const totalQuestions =
    data.section1.length +
    data.section2.length +
    data.section3.length +
    data.section4.length +
    data.section5.length;

  const calculateScore = () => {
    let correct = 0;

    data.section1.forEach((question, index) => {
      if (section1Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section2.forEach((question, index) => {
      if (section2Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section3.forEach((question, index) => {
      if (section3Answers[index] === question.correct) {
        correct++;
      }
    });

    data.section4.forEach((question, index) => {
      if (
        section4Answers[index]?.trim().toLowerCase() ===
        question.correct.trim().toLowerCase()
      ) {
        correct++;
      }
    });

    data.section5.forEach((question, index) => {
      if (section5Answers[index] === question.correct) {
        correct++;
      }
    });

    return {
      correct,
      incorrect: totalQuestions - correct,
    };
  };

  const score = calculateScore();

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

  const pageStyle = {
    minHeight: "100vh",
    background: "#f7f9fc",
    padding: "50px 20px 80px",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const sectionStyle = {
    background: "#ffffff",
    border: "1px solid #e3e9f2",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "28px",
    boxShadow: "0 8px 24px rgba(30, 60, 100, 0.04)",
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

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <div style={{ marginBottom: "25px" }}>
          <Link
            href="/exercises/reading/b1"
            style={{
              textDecoration: "none",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            &larr; Back to B1 Reading
          </Link>
        </div>

        <header
          style={{
            background: "#ffffff",
            border: "1px solid #e3e9f2",
            borderRadius: "20px",
            padding: "35px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "58px",
              height: "36px",
              padding: "0 14px",
              borderRadius: "9px",
              background: "#edf4ff",
              color: "#2f6df6",
              fontSize: "14px",
              fontWeight: 800,
              marginBottom: "18px",
            }}
          >
            {data.level}
          </div>

          <h1
            style={{
              margin: 0,
              color: "#102a56",
              fontSize: "40px",
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "18px auto 0",
              color: "#58708f",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            {data.description}
          </p>
        </header>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "24px",
            }}
          >
            Reading Passage
          </h2>

          <div
            style={{
              color: "#334155",
              fontSize: "17px",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
            }}
          >
            {data.passage}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "22px",
            }}
          >
            Section 1 - Reading Comprehension
          </h2>

          {data.section1.map((question, index) => {
            const selected = section1Answers[index];
            const correct = selected === question.correct;

            return (
              <div
                key={index}
                style={{
                  marginTop: "25px",
                  paddingTop: index > 0 ? "25px" : 0,
                  borderTop:
                    index > 0 ? "1px solid #e8edf4" : "none",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#1e293b",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {question.question}
                </p>

                <div style={{ marginTop: "12px" }}>
                  {question.options.map((option) => (
                    <label
                      key={option}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        background:
                          showResult && option === selected
                            ? option === question.correct
                              ? "#ecfdf5"
                              : "#fef2f2"
                            : "#f8fafc",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`section1-${index}`}
                        value={option}
                        checked={selected === option}
                        onChange={() =>
                          setSection1Answers((prev) => ({
                            ...prev,
                            [index]: option,
                          }))
                        }
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {showResult && (
                  <div
                    style={
                      correct
                        ? correctAnswerStyle
                        : wrongAnswerStyle
                    }
                  >
                    {correct
                      ? "Correct"
                      : `Incorrect - Correct answer: ${question.correct}`}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "22px",
            }}
          >
            Section 2 - True or False
          </h2>

          {data.section2.map((question, index) => {
            const selected = section2Answers[index];
            const correct = selected === question.correct;

            return (
              <div
                key={index}
                style={{
                  marginTop: "22px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#1e293b",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {question.statement}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "12px",
                  }}
                >
                  {["True", "False"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setSection2Answers((prev) => ({
                          ...prev,
                          [index]: option,
                        }))
                      }
                      style={{
                        padding: "9px 18px",
                        borderRadius: "8px",
                        border: "1px solid #d8e0eb",
                        background:
                          selected === option
                            ? "#edf4ff"
                            : "#ffffff",
                        color:
                          selected === option
                            ? "#2f6df6"
                            : "#475569",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div
                    style={
                      correct
                        ? correctAnswerStyle
                        : wrongAnswerStyle
                    }
                  >
                    {correct
                      ? "Correct"
                      : `Incorrect - Correct answer: ${question.correct}`}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "22px",
            }}
          >
            Section 3 - Vocabulary in Context
          </h2>

          {data.section3.map((question, index) => {
            const selected = section3Answers[index];
            const correct = selected === question.correct;

            return (
              <div
                key={index}
                style={{
                  marginTop: "25px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#1e293b",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {question.question}
                </p>

                <div style={{ marginTop: "12px" }}>
                  {question.options.map((option) => (
                    <label
                      key={option}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        background:
                          showResult && option === selected
                            ? option === question.correct
                              ? "#ecfdf5"
                              : "#fef2f2"
                            : "#f8fafc",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`section3-${index}`}
                        value={option}
                        checked={selected === option}
                        onChange={() =>
                          setSection3Answers((prev) => ({
                            ...prev,
                            [index]: option,
                          }))
                        }
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {showResult && (
                  <div
                    style={
                      correct
                        ? correctAnswerStyle
                        : wrongAnswerStyle
                    }
                  >
                    {correct
                      ? "Correct"
                      : `Incorrect - Correct answer: ${question.correct}`}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "22px",
            }}
          >
            Section 4 - Complete the Sentence
          </h2>

          {data.section4.map((question, index) => {
            const selected = section4Answers[index] || "";

            const correct =
              selected.trim().toLowerCase() ===
              question.correct.trim().toLowerCase();

            return (
              <div
                key={index}
                style={{
                  marginTop: "25px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#1e293b",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {question.sentence}
                </p>

                <input
                  type="text"
                  value={selected}
                  onChange={(event) =>
                    setSection4Answers((prev) => ({
                      ...prev,
                      [index]: event.target.value,
                    }))
                  }
                  placeholder="Type your answer"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    marginTop: "12px",
                    padding: "11px 13px",
                    border: "1px solid #d8e0eb",
                    borderRadius: "8px",
                    fontSize: "15px",
                    outline: "none",
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
                      ? "Correct"
                      : `Incorrect - Correct answer: ${question.correct}`}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section style={sectionStyle}>
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "22px",
            }}
          >
            Section 5 - Deeper Understanding
          </h2>

          {data.section5.map((question, index) => {
            const selected = section5Answers[index];
            const correct = selected === question.correct;

            return (
              <div
                key={index}
                style={{
                  marginTop: "25px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#1e293b",
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  {index + 1}. {question.question}
                </p>

                <div style={{ marginTop: "12px" }}>
                  {question.options.map((option) => (
                    <label
                      key={option}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        background:
                          showResult && option === selected
                            ? option === question.correct
                              ? "#ecfdf5"
                              : "#fef2f2"
                            : "#f8fafc",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name={`section5-${index}`}
                        value={option}
                        checked={selected === option}
                        onChange={() =>
                          setSection5Answers((prev) => ({
                            ...prev,
                            [index]: option,
                          }))
                        }
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {showResult && (
                  <div
                    style={
                      correct
                        ? correctAnswerStyle
                        : wrongAnswerStyle
                    }
                  >
                    {correct
                      ? "Correct"
                      : `Incorrect - Correct answer: ${question.correct}`}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {showResult && (
          <section
            style={{
              ...sectionStyle,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#173b78",
              }}
            >
              Your Result
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "45px",
                flexWrap: "wrap",
                marginTop: "25px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#15803d",
                  }}
                >
                  {score.correct}
                </div>

                <div style={{ color: "#64748b" }}>
                  Correct
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#dc2626",
                  }}
                >
                  {score.incorrect}
                </div>

                <div style={{ color: "#64748b" }}>
                  Incorrect
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#173b78",
                  }}
                >
                  {totalQuestions}
                </div>

                <div style={{ color: "#64748b" }}>
                  Total
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                fontSize: "20px",
                fontWeight: 800,
                color: "#173b78",
              }}
            >
              Score:{" "}
              {Math.round(
                (score.correct / totalQuestions) * 100
              )}
              %
            </div>
          </section>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <button
            type="button"
            onClick={resetExercise}
            style={{
              padding: "11px 20px",
              border: "1px solid #d8e0eb",
              borderRadius: "9px",
              background: "#ffffff",
              color: "#475569",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => {
              setShowResult(true);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            style={{
              padding: "11px 20px",
              border: "none",
              borderRadius: "9px",
              background: "#173b78",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Check Answers
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "50px",
            paddingTop: "25px",
            borderTop: "1px solid #e3e9f2",
          }}
        >
          {previousHref ? (
            <Link
              href={previousHref}
              style={{
                color: "#58708f",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              &larr; {previousTitle}
            </Link>
          ) : (
            <span />
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              style={{
                color: "#2f6df6",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              {nextTitle} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}