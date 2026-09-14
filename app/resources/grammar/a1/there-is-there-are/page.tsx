"use client";

import Link from "next/link";

const practice = [
  {
    question: "___ a book on the table.",
    answer: "There is",
  },
  {
    question: "___ two chairs in the room.",
    answer: "There are",
  },
  {
    question: "___ a supermarket near my house.",
    answer: "There is",
  },
  {
    question: "___ three students in the classroom.",
    answer: "There are",
  },
  {
    question: "___ some milk in the fridge.",
    answer: "There is",
  },
  {
    question: "___ many books on the shelf.",
    answer: "There are",
  },
  {
    question: "___ a problem with my computer.",
    answer: "There is",
  },
  {
    question: "___ five apples in the bag.",
    answer: "There are",
  },
];

export default function ThereIsThereArePage() {
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
            There Is / There Are
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
            Learn how to say that something exists in a place using there is
            and there are.
          </p>
        </section>

        {/* What do they mean? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Do “There Is” and “There Are” Mean?</h2>

          <p style={paragraphStyle}>
            We use <strong>there is</strong> and <strong>there are</strong> to
            say that something or someone exists in a particular place.
          </p>

          <p style={paragraphStyle}>
            The choice depends on whether the noun is singular or plural.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <RuleBox
              title="There is"
              text="Use it with one person or thing."
              example="There is a book on the table."
            />

            <RuleBox
              title="There are"
              text="Use it with two or more people or things."
              example="There are three books on the table."
            />
          </div>
        </section>

        {/* There is */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>IS</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              There Is
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>there is</strong> with a singular noun.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="There is a book on the desk." />

            <ExampleBox text="There is a car outside." />

            <ExampleBox text="There is a student in the classroom." />

            <ExampleBox text="There is an apple in the bag." />
          </div>
        </section>

        {/* There are */}
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
            <div style={wordBadgeStyle}>ARE</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              There Are
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>there are</strong> with plural nouns.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="There are two books on the desk." />

            <ExampleBox text="There are three cars outside." />

            <ExampleBox text="There are ten students in the classroom." />

            <ExampleBox text="There are some apples in the bag." />
          </div>
        </section>

        {/* Basic structure */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Basic Structure</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <StructureBox
              title="Singular"
              structure="There is + singular noun + place."
              example="There is a cat in the garden."
            />

            <StructureBox
              title="Plural"
              structure="There are + plural noun + place."
              example="There are two cats in the garden."
            />
          </div>
        </section>

        {/* Contractions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Contractions</h2>

          <p style={paragraphStyle}>
            In everyday English, <strong>there is</strong> is often shortened
            to <strong>there&apos;s</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="There is a problem. → There's a problem." />

            <ExampleBox text="There is a bank near here. → There's a bank near here." />

            <ExampleBox text="There are two shops here. → There are two shops here." />
          </div>

          <div style={{ marginTop: "18px" }}>
            <Note text="There is → There's" />

            <div style={{ height: "10px" }} />

            <Note text="There are does not normally have a standard contraction in everyday English." />
          </div>
        </section>

        {/* Negative */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Negative Sentences</h2>

          <p style={paragraphStyle}>
            Use <strong>there isn&apos;t</strong> for singular nouns and{" "}
            <strong>there aren&apos;t</strong> for plural nouns.
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
                background: "#f7f9fc",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Singular
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                There isn&apos;t + singular noun
              </p>

              <ExampleBox text="There isn't a bank near here." />

              <div style={{ height: "10px" }} />

              <ExampleBox text="There isn't a problem." />
            </div>

            <div
              style={{
                background: "#f7f9fc",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Plural
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                There aren&apos;t + plural noun
              </p>

              <ExampleBox text="There aren't any shops here." />

              <div style={{ height: "10px" }} />

              <ExampleBox text="There aren't many people outside." />
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Questions</h2>

          <p style={paragraphStyle}>
            To ask if something exists, put <strong>is</strong> or{" "}
            <strong>are</strong> before <strong>there</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="Is there a bank near here?" />

            <ExampleBox text="Is there a problem?" />

            <ExampleBox text="Are there any shops nearby?" />

            <ExampleBox text="Are there two bathrooms in the house?" />
          </div>
        </section>

        {/* Short answers */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Short Answers</h2>

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
                  <th style={cellStyle}>Question</th>
                  <th style={cellStyle}>Yes</th>
                  <th style={cellStyle}>No</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    Is there a supermarket nearby?
                  </td>
                  <td style={cellStyle}>Yes, there is.</td>
                  <td style={cellStyle}>No, there isn&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    Are there any restaurants here?
                  </td>
                  <td style={cellStyle}>Yes, there are.</td>
                  <td style={cellStyle}>No, there aren&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    Is there a problem?
                  </td>
                  <td style={cellStyle}>Yes, there is.</td>
                  <td style={cellStyle}>No, there isn&apos;t.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Some and any */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>There Is / There Are with Some and Any</h2>

          <p style={paragraphStyle}>
            We often use <strong>some</strong> in affirmative sentences and{" "}
            <strong>any</strong> in negative sentences and questions.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="There are some books on the table." />

            <ExampleBox text="There is some water in the bottle." />

            <ExampleBox text="There aren't any books on the table." />

            <ExampleBox text="Are there any books on the table?" />
          </div>
        </section>

        {/* Places */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Talking About Places</h2>

          <p style={paragraphStyle}>
            There is and there are are very useful when describing a room,
            house, city, neighborhood, or other place.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="There is a sofa in the living room." />

            <ExampleBox text="There is a kitchen next to the bedroom." />

            <ExampleBox text="There are two windows in the room." />

            <ExampleBox text="There are many restaurants in this area." />

            <ExampleBox text="There is a park near my house." />
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
            <Note text="Use there is with one person or thing." />

            <Note text="Use there are with two or more people or things." />

            <Note text="There is can become there's in everyday English." />

            <Note text="Use there isn't for singular negative sentences." />

            <Note text="Use there aren't for plural negative sentences." />

            <Note text="Use is there for singular questions and are there for plural questions." />
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
              wrong="There are a book on the table."
              correct="There is a book on the table."
            />

            <Mistake
              wrong="There is two chairs in the room."
              correct="There are two chairs in the room."
            />

            <Mistake
              wrong="There is many people here."
              correct="There are many people here."
            />

            <Mistake
              wrong="There are a problem."
              correct="There is a problem."
            />

            <Mistake
              wrong="There aren't a supermarket here."
              correct="There isn't a supermarket here."
            />

            <Mistake
              wrong="Is there any shops nearby?"
              correct="Are there any shops nearby?"
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
            <Sentence text="There is a cat under the table." />

            <Sentence text="There is a supermarket near my house." />

            <Sentence text="There are three books on the desk." />

            <Sentence text="There are many people in the park." />

            <Sentence text="There isn't a bus stop here." />

            <Sentence text="There aren't any students in the classroom." />

            <Sentence text="Is there a hotel near here?" />

            <Sentence text="Are there any restaurants in this street?" />
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
            Choose <strong>there is</strong> or <strong>there are</strong>.
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
            href="/resources/grammar/a1/present-simple"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Present Simple →
          </Link>
        </div>
      </div>
    </main>
  );
}

function RuleBox({
  title,
  text,
  example,
}: {
  title: string;
  text: string;
  example: string;
}) {
  return (
    <div
      style={{
        background: "#f7f9fc",
        borderRadius: "14px",
        padding: "22px",
        border: "1px solid #edf0f5",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: "#2456a6",
          fontSize: "21px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: "0 0 14px",
          lineHeight: 1.7,
          color: "#5b6472",
        }}
      >
        {text}
      </p>

      <div
        style={{
          padding: "14px",
          borderRadius: "10px",
          background: "#ffffff",
          lineHeight: 1.7,
        }}
      >
        {example}
      </div>
    </div>
  );
}

function StructureBox({
  title,
  structure,
  example,
}: {
  title: string;
  structure: string;
  example: string;
}) {
  return (
    <div
      style={{
        background: "#f7f9fc",
        borderRadius: "14px",
        padding: "22px",
        border: "1px solid #edf0f5",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px",
          color: "#2456a6",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontWeight: 700,
          marginBottom: "12px",
          lineHeight: 1.7,
        }}
      >
        {structure}
      </div>

      <div
        style={{
          padding: "14px",
          background: "#ffffff",
          borderRadius: "10px",
          lineHeight: 1.7,
          color: "#5b6472",
        }}
      >
        {example}
      </div>
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
  background: "#ffffff",
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