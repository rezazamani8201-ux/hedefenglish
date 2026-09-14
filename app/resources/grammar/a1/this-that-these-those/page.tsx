"use client";

import Link from "next/link";

const demonstratives = [
  {
    word: "THIS",
    number: "Singular",
    distance: "Near",
    example: "This book is interesting.",
    meaning: "one thing that is near",
  },
  {
    word: "THAT",
    number: "Singular",
    distance: "Far",
    example: "That car is expensive.",
    meaning: "one thing that is far",
  },
  {
    word: "THESE",
    number: "Plural",
    distance: "Near",
    example: "These books are new.",
    meaning: "two or more things that are near",
  },
  {
    word: "THOSE",
    number: "Plural",
    distance: "Far",
    example: "Those cars are expensive.",
    meaning: "two or more things that are far",
  },
];

const practice = [
  {
    question: "___ is my phone. (near / one)",
    answer: "This",
  },
  {
    question: "___ is your house. (far / one)",
    answer: "That",
  },
  {
    question: "___ are my shoes. (near / more than one)",
    answer: "These",
  },
  {
    question: "___ are beautiful mountains. (far / more than one)",
    answer: "Those",
  },
  {
    question: "___ book is mine. (near / one)",
    answer: "This",
  },
  {
    question: "___ students are in my class. (near / more than one)",
    answer: "These",
  },
  {
    question: "___ building is very old. (far / one)",
    answer: "That",
  },
  {
    question: "___ flowers are beautiful. (far / more than one)",
    answer: "Those",
  },
];

export default function ThisThatTheseThosePage() {
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
            This / That / These / Those
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
            Learn how to point to people, animals, places, and things using
            this, that, these, and those.
          </p>
        </section>

        {/* What are demonstratives? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Are Demonstratives?</h2>

          <p style={paragraphStyle}>
            <strong>This, that, these,</strong> and <strong>those</strong> are
            demonstratives. We use them to identify or point to people, things,
            or places.
          </p>

          <p style={paragraphStyle}>
            The correct word depends on two things:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <InfoBox
              title="Number"
              text="Is it one thing or more than one?"
            />

            <InfoBox
              title="Distance"
              text="Is it near or far?"
            />
          </div>
        </section>

        {/* Four words overview */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>The Four Demonstratives</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {demonstratives.map((item) => (
              <div
                key={item.word}
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  padding: "22px",
                  border: "1px solid #dce6f5",
                }}
              >
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "#2456a6",
                    marginBottom: "10px",
                  }}
                >
                  {item.word}
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: "6px",
                    fontSize: "14px",
                    color: "#5b6472",
                    lineHeight: 1.6,
                  }}
                >
                  <div>
                    <strong>Number:</strong> {item.number}
                  </div>

                  <div>
                    <strong>Distance:</strong> {item.distance}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "14px",
                    padding: "12px",
                    background: "#f7f9fc",
                    borderRadius: "10px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* This */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>THIS</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “This”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>this</strong> for <strong>one thing</strong> that is
            <strong> near</strong> you.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="This book is mine." />

            <ExampleBox text="This phone is new." />

            <ExampleBox text="This chair is comfortable." />

            <ExampleBox text="This is my bag." />
          </div>
        </section>

        {/* That */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>THAT</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “That”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>that</strong> for <strong>one thing</strong> that is
            <strong> far</strong> from you.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="That car is beautiful." />

            <ExampleBox text="That house is very old." />

            <ExampleBox text="That man is my teacher." />

            <ExampleBox text="That is my school." />
          </div>
        </section>

        {/* These */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>THESE</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “These”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>these</strong> for <strong>two or more things</strong>{" "}
            that are <strong>near</strong> you.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="These books are mine." />

            <ExampleBox text="These shoes are new." />

            <ExampleBox text="These apples are fresh." />

            <ExampleBox text="These are my keys." />
          </div>
        </section>

        {/* Those */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>THOSE</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “Those”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>those</strong> for <strong>two or more things</strong>{" "}
            that are <strong>far</strong> from you.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="Those cars are expensive." />

            <ExampleBox text="Those houses are beautiful." />

            <ExampleBox text="Those students are in my class." />

            <ExampleBox text="Those are my friends." />
          </div>
        </section>

        {/* Main comparison */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Quick Comparison</h2>

          <div style={{ overflowX: "auto", marginTop: "18px" }}>
            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Word</th>
                  <th style={cellStyle}>Number</th>
                  <th style={cellStyle}>Distance</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={strongCellStyle}>this</td>
                  <td style={cellStyle}>one</td>
                  <td style={cellStyle}>near</td>
                  <td style={cellStyle}>This book is good.</td>
                </tr>

                <tr>
                  <td style={strongCellStyle}>that</td>
                  <td style={cellStyle}>one</td>
                  <td style={cellStyle}>far</td>
                  <td style={cellStyle}>That book is good.</td>
                </tr>

                <tr>
                  <td style={strongCellStyle}>these</td>
                  <td style={cellStyle}>more than one</td>
                  <td style={cellStyle}>near</td>
                  <td style={cellStyle}>These books are good.</td>
                </tr>

                <tr>
                  <td style={strongCellStyle}>those</td>
                  <td style={cellStyle}>more than one</td>
                  <td style={cellStyle}>far</td>
                  <td style={cellStyle}>Those books are good.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Singular and plural */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Singular and Plural</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <CompareBox
              first="This book"
              second="These books"
            />

            <CompareBox
              first="That car"
              second="Those cars"
            />

            <CompareBox
              first="This student"
              second="These students"
            />

            <CompareBox
              first="That house"
              second="Those houses"
            />
          </div>
        </section>

        {/* Near and far */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Near and Far</h2>

          <p style={paragraphStyle}>
            Think about the distance between you and the person or thing.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "#f7f9fc",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Near
              </h3>

              <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
                <strong>This</strong> = one
                <br />
                <strong>These</strong> = more than one
              </p>
            </div>

            <div
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "#f7f9fc",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Far
              </h3>

              <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
                <strong>That</strong> = one
                <br />
                <strong>Those</strong> = more than one
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Using Demonstratives in Questions</h2>

          <p style={paragraphStyle}>
            We can use these words in questions when we want to identify
            something.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="What is this?" />

            <ExampleBox text="What is that?" />

            <ExampleBox text="What are these?" />

            <ExampleBox text="What are those?" />

            <ExampleBox text="Is this your phone?" />

            <ExampleBox text="Are those your shoes?" />
          </div>
        </section>

        {/* Important notes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Important Notes</h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "18px",
            }}
          >
            <Note text="This and that are singular." />

            <Note text="These and those are plural." />

            <Note text="This and these are used for things that are near." />

            <Note text="That and those are used for things that are far." />

            <Note text="Use a plural noun after these and those." />

            <Note text="Use a singular noun after this and that." />
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
          <h2 style={headingStyle}>Common Mistakes</h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Mistake
              wrong="These book is interesting."
              correct="This book is interesting."
            />

            <Mistake
              wrong="This books are new."
              correct="These books are new."
            />

            <Mistake
              wrong="Those car is expensive."
              correct="That car is expensive."
            />

            <Mistake
              wrong="That shoes are beautiful."
              correct="Those shoes are beautiful."
            />

            <Mistake
              wrong="These is my phone."
              correct="This is my phone."
            />

            <Mistake
              wrong="Those is my friends."
              correct="Those are my friends."
            />
          </div>
        </section>

        {/* Example sentences */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Example Sentences</h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            <Sentence text="This is my computer." />

            <Sentence text="That is your chair." />

            <Sentence text="These are my books." />

            <Sentence text="Those are beautiful flowers." />

            <Sentence text="This bag is heavy." />

            <Sentence text="That building is very tall." />

            <Sentence text="These shoes are comfortable." />

            <Sentence text="Those mountains are amazing." />
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
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Choose <strong>this, that, these,</strong> or{" "}
            <strong>those</strong>.
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

                  <div style={{ marginTop: "8px" }}>
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
            href="/resources/grammar/a1/have-has"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Have / Has →
          </Link>
        </div>
      </div>
    </main>
  );
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "14px",
        background: "#f7f9fc",
        border: "1px solid #edf0f5",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          color: "#2456a6",
          fontSize: "18px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          lineHeight: 1.7,
          color: "#5b6472",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function ExampleBox({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "16px 18px",
        background: "#f7f9fc",
        borderRadius: "12px",
        border: "1px solid #edf0f5",
        fontSize: "15px",
        lineHeight: 1.7,
      }}
    >
      {text}
    </div>
  );
}

function CompareBox({
  first,
  second,
}: {
  first: string;
  second: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "20px",
        border: "1px solid #dce6f5",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          color: "#2456a6",
          marginBottom: "8px",
        }}
      >
        {first}
      </div>

      <div
        style={{
          color: "#5b6472",
        }}
      >
        {second}
      </div>
    </div>
  );
}

function Note({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "15px 18px",
        borderRadius: "12px",
        background: "#ffffff",
        border: "1px solid #dce6f5",
        lineHeight: 1.7,
      }}
    >
      ✓ {text}
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
          lineHeight: 1.6,
        }}
      >
        ✕ {wrong}
      </div>

      <div
        style={{
          color: "#16794c",
          lineHeight: 1.6,
        }}
      >
        ✓ {correct}
      </div>
    </div>
  );
}

function Sentence({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "15px 18px",
        borderRadius: "12px",
        background: "#f7f9fc",
        lineHeight: 1.7,
      }}
    >
      {text}
    </div>
  );
}

const headingStyle: React.CSSProperties = {
  marginTop: 0,
  color: "#173b78",
  fontSize: "27px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#4b5563",
};

const wordHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",
};

const wordBadgeStyle: React.CSSProperties = {
  width: "58px",
  height: "58px",
  borderRadius: "14px",
  background: "#eef4ff",
  color: "#2456a6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: 800,
  flexShrink: 0,
};

const cellStyle: React.CSSProperties = {
  padding: "14px 16px",
  border: "1px solid #e5e7eb",
  textAlign: "left",
  fontSize: "15px",
};

const strongCellStyle: React.CSSProperties = {
  ...cellStyle,
  fontWeight: 700,
  color: "#2456a6",
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