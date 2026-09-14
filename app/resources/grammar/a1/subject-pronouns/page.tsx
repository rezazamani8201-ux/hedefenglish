"use client";

import Link from "next/link";

const pronouns = [
  {
    pronoun: "I",
    meaning: "the person speaking",
    example: "I am a teacher.",
  },
  {
    pronoun: "You",
    meaning: "the person or people you are speaking to",
    example: "You are very kind.",
  },
  {
    pronoun: "He",
    meaning: "one male person",
    example: "He is my brother.",
  },
  {
    pronoun: "She",
    meaning: "one female person",
    example: "She is a doctor.",
  },
  {
    pronoun: "It",
    meaning: "a thing, animal, place, or situation",
    example: "It is a beautiful house.",
  },
  {
    pronoun: "We",
    meaning: "the speaker and another person or people",
    example: "We are students.",
  },
  {
    pronoun: "They",
    meaning: "two or more people, things, or animals",
    example: "They are my friends.",
  },
];

const examples = [
  ["I", "I am from Turkey."],
  ["You", "You are my friend."],
  ["He", "He works in a bank."],
  ["She", "She likes coffee."],
  ["It", "It is very cold today."],
  ["We", "We study English."],
  ["They", "They live in Istanbul."],
];

const practice = [
  {
    question: "___ am a student.",
    answer: "I",
  },
  {
    question: "___ is my sister.",
    answer: "She",
  },
  {
    question: "___ are my parents.",
    answer: "They",
  },
  {
    question: "___ is a beautiful dog.",
    answer: "It",
  },
  {
    question: "___ are from Turkey.",
    answer: "We",
  },
];

export default function SubjectPronounsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        padding: "40px 20px 70px",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Back */}
        <div style={{ marginBottom: "30px" }}>
          <Link
            href="/resources/grammar/a1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "10px",
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              color: "#173b78",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            ← Back to A1 Grammar
          </Link>
        </div>

        {/* Hero */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "42px 35px",
            border: "1px solid #e8edf4",
            boxShadow: "0 10px 30px rgba(23,59,120,0.06)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#2456a6",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}
          >
            A1 GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
              margin: "0 0 16px",
              color: "#173b78",
            }}
          >
            Subject Pronouns
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "720px",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#5b6472",
            }}
          >
            Learn how to use I, you, he, she, it, we, and they correctly in
            English sentences.
          </p>
        </section>

        {/* What are subject pronouns? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "27px",
            }}
          >
            What are Subject Pronouns?
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            A subject pronoun is a word that replaces a person, animal, place,
            or thing as the subject of a sentence.
          </p>

          <div
            style={{
              marginTop: "22px",
              padding: "20px",
              borderRadius: "14px",
              background: "#f7f9fc",
              borderLeft: "4px solid #2456a6",
            }}
          >
            <strong>Example:</strong>
            <div style={{ marginTop: "8px", fontSize: "16px" }}>
              Sarah is a teacher. → <strong>She</strong> is a teacher.
            </div>
          </div>
        </section>

        {/* Pronoun cards */}
        <section style={{ marginBottom: "28px" }}>
          <h2
            style={{
              color: "#173b78",
              fontSize: "27px",
              marginBottom: "18px",
            }}
          >
            The Seven Subject Pronouns
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {pronouns.map((item) => (
              <div
                key={item.pronoun}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8edf4",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 800,
                    color: "#2456a6",
                    marginBottom: "10px",
                  }}
                >
                  {item.pronoun}
                </div>

                <p
                  style={{
                    margin: "0 0 14px",
                    color: "#5b6472",
                    lineHeight: 1.6,
                  }}
                >
                  {item.meaning}
                </p>

                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "#f7f9fc",
                    color: "#1f2937",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verb to be */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "27px",
            }}
          >
            Subject Pronouns + Verb To Be
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "18px",
                minWidth: "500px",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Subject Pronoun</th>
                  <th style={cellStyle}>Verb To Be</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>I</td>
                  <td style={cellStyle}>am</td>
                  <td style={cellStyle}>I am happy.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>You</td>
                  <td style={cellStyle}>are</td>
                  <td style={cellStyle}>You are kind.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>He</td>
                  <td style={cellStyle}>is</td>
                  <td style={cellStyle}>He is tall.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>She</td>
                  <td style={cellStyle}>is</td>
                  <td style={cellStyle}>She is tired.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>It</td>
                  <td style={cellStyle}>is</td>
                  <td style={cellStyle}>It is cold.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>We</td>
                  <td style={cellStyle}>are</td>
                  <td style={cellStyle}>We are ready.</td>
                </tr>
                <tr>
                  <td style={cellStyle}>They</td>
                  <td style={cellStyle}>are</td>
                  <td style={cellStyle}>They are happy.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Important distinction */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "25px",
            }}
          >
            He, She, and It
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: "18px",
            }}
          >
            Use <strong>he</strong> for a male person, <strong>she</strong>{" "}
            for a female person, and <strong>it</strong> for a thing, animal,
            place, or situation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            <ExampleBox title="He" text="He is my father." />
            <ExampleBox title="She" text="She is my mother." />
            <ExampleBox title="It" text="It is my phone." />
          </div>
        </section>

        {/* Examples */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "27px",
            }}
          >
            Example Sentences
          </h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            {examples.map(([pronoun, sentence]) => (
              <div
                key={pronoun}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  padding: "15px 18px",
                  borderRadius: "12px",
                  background: "#f7f9fc",
                }}
              >
                <strong
                  style={{
                    minWidth: "55px",
                    color: "#2456a6",
                  }}
                >
                  {pronoun}
                </strong>

                <span>{sentence}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "27px",
            }}
          >
            Common Mistakes
          </h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Mistake
              wrong="Sarah is a doctor. He is very kind."
              correct="Sarah is a doctor. She is very kind."
            />

            <Mistake
              wrong="Tom and I are friends. They are students."
              correct="Tom and I are friends. We are students."
            />

            <Mistake
              wrong="My parents are at home. We are cooking."
              correct="My parents are at home. They are cooking."
            />
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
              fontSize: "27px",
            }}
          >
            Quick Practice
          </h2>

          <p
            style={{
              color: "#5b6472",
              lineHeight: 1.7,
            }}
          >
            Choose the correct subject pronoun.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {practice.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "18px",
                  borderRadius: "12px",
                  background: "#f7f9fc",
                  border: "1px solid #edf0f5",
                }}
              >
                <strong>
                  {index + 1}. {item.question}
                </strong>

                <details style={{ marginTop: "10px" }}>
                  <summary
                    style={{
                      cursor: "pointer",
                      color: "#2456a6",
                      fontWeight: 600,
                    }}
                  >
                    Show answer
                  </summary>

                  <div
                    style={{
                      marginTop: "8px",
                      color: "#1f2937",
                    }}
                  >
                    Answer: <strong>{item.answer}</strong>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/grammar/a1"
            style={navButtonStyle}
          >
            ← A1 Grammar
          </Link>

          <Link
            href="/resources/grammar/a1/articles"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Articles →
          </Link>
        </div>
      </div>
    </main>
  );
}

function ExampleBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "18px",
        border: "1px solid #dce6f5",
      }}
    >
      <strong
        style={{
          display: "block",
          color: "#2456a6",
          marginBottom: "7px",
        }}
      >
        {title}
      </strong>

      <span>{text}</span>
    </div>
  );
}

function Mistake({
  wrong,
  correct,
}: {
  wrong: string;
  correct: string;
}) {
  return (
    <div
      style={{
        padding: "18px",
        borderRadius: "12px",
        background: "#f7f9fc",
      }}
    >
      <div
        style={{
          color: "#b42318",
          marginBottom: "8px",
        }}
      >
        ✕ {wrong}
      </div>

      <div style={{ color: "#16794c" }}>
        ✓ {correct}
      </div>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  padding: "14px 16px",
  border: "1px solid #e5e7eb",
  textAlign: "left",
  fontSize: "15px",
};

const navButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "11px 18px",
  borderRadius: "10px",
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};