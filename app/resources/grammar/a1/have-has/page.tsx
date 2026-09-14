"use client";

import Link from "next/link";

const subjectForms = [
  {
    subject: "I",
    form: "have",
    example: "I have a car.",
  },
  {
    subject: "You",
    form: "have",
    example: "You have a new phone.",
  },
  {
    subject: "We",
    form: "have",
    example: "We have two children.",
  },
  {
    subject: "They",
    form: "have",
    example: "They have a big house.",
  },
  {
    subject: "He",
    form: "has",
    example: "He has a brother.",
  },
  {
    subject: "She",
    form: "has",
    example: "She has a beautiful bag.",
  },
  {
    subject: "It",
    form: "has",
    example: "It has four legs.",
  },
];

const practice = [
  {
    question: "I ___ a new computer.",
    answer: "have",
  },
  {
    question: "She ___ two sisters.",
    answer: "has",
  },
  {
    question: "They ___ a big house.",
    answer: "have",
  },
  {
    question: "He ___ a new job.",
    answer: "has",
  },
  {
    question: "We ___ English lessons.",
    answer: "have",
  },
  {
    question: "It ___ four legs.",
    answer: "has",
  },
  {
    question: "You ___ a nice car.",
    answer: "have",
  },
  {
    question: "My mother ___ a blue bag.",
    answer: "has",
  },
];

export default function HaveHasPage() {
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
            Have / Has
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
            Learn how to use have and has to talk about possession, people,
            things, and relationships.
          </p>
        </section>

        {/* What do have and has mean? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Do “Have” and “Has” Mean?</h2>

          <p style={paragraphStyle}>
            <strong>Have</strong> and <strong>has</strong> are forms of the
            verb <strong>to have</strong>.
          </p>

          <p style={paragraphStyle}>
            We commonly use them to talk about possession, relationships,
            family members, characteristics, and things that people or
            animals have.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <InfoBox
              title="Have"
              text="I, you, we, they"
            />

            <InfoBox
              title="Has"
              text="He, she, it"
            />
          </div>
        </section>

        {/* Basic rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>The Basic Rule</h2>

          <p style={paragraphStyle}>
            Use <strong>have</strong> with <strong>I, you, we,</strong> and{" "}
            <strong>they</strong>.
          </p>

          <p style={paragraphStyle}>
            Use <strong>has</strong> with <strong>he, she,</strong> and{" "}
            <strong>it</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <RuleBox
              title="HAVE"
              text="I / You / We / They"
            />

            <RuleBox
              title="HAS"
              text="He / She / It"
            />
          </div>
        </section>

        {/* Subject table */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Have or Has?</h2>

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
                  <th style={cellStyle}>Subject</th>
                  <th style={cellStyle}>Verb</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                {subjectForms.map((item) => (
                  <tr key={item.subject}>
                    <td style={strongCellStyle}>{item.subject}</td>
                    <td
                      style={{
                        ...cellStyle,
                        fontWeight: 700,
                        color: "#2456a6",
                      }}
                    >
                      {item.form}
                    </td>
                    <td style={cellStyle}>{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Have */}
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
            <div style={wordBadgeStyle}>HAVE</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              Using “Have”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>have</strong> with <strong>I, you, we,</strong> and{" "}
            <strong>they</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I have a car." />

            <ExampleBox text="You have a nice house." />

            <ExampleBox text="We have two children." />

            <ExampleBox text="They have a new teacher." />
          </div>
        </section>

        {/* Has */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <div style={wordHeaderStyle}>
            <div style={wordBadgeStyle}>HAS</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              Using “Has”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>has</strong> with <strong>he, she,</strong> and{" "}
            <strong>it</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="He has a new job." />

            <ExampleBox text="She has two sisters." />

            <ExampleBox text="It has four legs." />

            <ExampleBox text="My brother has a blue car." />
          </div>
        </section>

        {/* Possession */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Talking About Possession</h2>

          <p style={paragraphStyle}>
            We often use <strong>have</strong> and <strong>has</strong> to say
            that someone owns or possesses something.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I have a laptop." />

            <ExampleBox text="She has a new phone." />

            <ExampleBox text="They have a large apartment." />

            <ExampleBox text="He has a bicycle." />
          </div>
        </section>

        {/* Family and relationships */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Talking About Family and Relationships</h2>

          <p style={paragraphStyle}>
            We can also use <strong>have</strong> and <strong>has</strong> to
            talk about family members and relationships.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I have one brother." />

            <ExampleBox text="She has two sisters." />

            <ExampleBox text="He has three children." />

            <ExampleBox text="We have a large family." />

            <ExampleBox text="They have many friends." />
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
            In the present simple, use <strong>do not</strong> or{" "}
            <strong>does not</strong> to make negative sentences.
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
                I / You / We / They
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                <strong>do not have</strong>
                <br />
                <strong>don&apos;t have</strong>
              </p>

              <div style={examplePanelStyle}>
                I don&apos;t have a car.
                <br />
                They don&apos;t have children.
              </div>
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
                He / She / It
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                <strong>does not have</strong>
                <br />
                <strong>doesn&apos;t have</strong>
              </p>

              <div style={examplePanelStyle}>
                She doesn&apos;t have a car.
                <br />
                He doesn&apos;t have a sister.
              </div>
            </div>
          </div>
        </section>

        {/* Important negative rule */}
        <section
          style={{
            background: "#fff7ed",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Important Rule in Negative Sentences</h2>

          <p style={paragraphStyle}>
            After <strong>doesn&apos;t</strong>, always use{" "}
            <strong>have</strong>, not <strong>has</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "18px",
            }}
          >
            <Mistake
              wrong="She doesn't has a car."
              correct="She doesn't have a car."
            />

            <Mistake
              wrong="He doesn't has a brother."
              correct="He doesn't have a brother."
            />
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
          <h2 style={headingStyle}>Questions with Have / Has</h2>

          <p style={paragraphStyle}>
            To ask questions about possession, we usually use{" "}
            <strong>Do</strong> or <strong>Does</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="Do you have a car?" />

            <ExampleBox text="Do they have children?" />

            <ExampleBox text="Does he have a brother?" />

            <ExampleBox text="Does she have a laptop?" />

            <ExampleBox text="Does it have four legs?" />
          </div>
        </section>

        {/* Short answers */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
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
                <tr style={{ background: "#ffffff" }}>
                  <th style={cellStyle}>Question</th>
                  <th style={cellStyle}>Yes</th>
                  <th style={cellStyle}>No</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>Do you have a car?</td>
                  <td style={cellStyle}>Yes, I do.</td>
                  <td style={cellStyle}>No, I don&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Does she have a dog?</td>
                  <td style={cellStyle}>Yes, she does.</td>
                  <td style={cellStyle}>No, she doesn&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Do they have children?</td>
                  <td style={cellStyle}>Yes, they do.</td>
                  <td style={cellStyle}>No, they don&apos;t.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* There is / There are connection */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Have / Has vs. There Is / There Are</h2>

          <p style={paragraphStyle}>
            <strong>Have / has</strong> usually tells us that someone or
            something possesses something.
          </p>

          <p style={paragraphStyle}>
            <strong>There is / there are</strong> tells us that something
            exists in a particular place.
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
            <CompareBox
              title="Have / Has"
              first="She has a car."
              second="The car belongs to her."
            />

            <CompareBox
              title="There is / There are"
              first="There is a car outside."
              second="A car exists outside."
            />
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
            <Note text="Use have with I, you, we, and they." />

            <Note text="Use has with he, she, and it." />

            <Note text="After does or doesn't, use have, not has." />

            <Note text="Use do and does to make most present simple questions." />

            <Note text="Have and has can describe possession, family, relationships, and characteristics." />
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
              wrong="She have a car."
              correct="She has a car."
            />

            <Mistake
              wrong="He have two brothers."
              correct="He has two brothers."
            />

            <Mistake
              wrong="They has a house."
              correct="They have a house."
            />

            <Mistake
              wrong="I has a new phone."
              correct="I have a new phone."
            />

            <Mistake
              wrong="Does she has a dog?"
              correct="Does she have a dog?"
            />

            <Mistake
              wrong="He doesn't has a car."
              correct="He doesn't have a car."
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
            <Sentence text="I have a new laptop." />

            <Sentence text="You have a beautiful house." />

            <Sentence text="He has two brothers." />

            <Sentence text="She has a blue car." />

            <Sentence text="We have English class today." />

            <Sentence text="They have three children." />

            <Sentence text="The dog has four legs." />

            <Sentence text="My friend has a new job." />
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
            Choose <strong>have</strong> or <strong>has</strong>.
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
            href="/resources/grammar/a1/there-is-there-are"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: There Is / There Are →
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
          fontSize: "19px",
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

function RuleBox({
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
        borderRadius: "14px",
        padding: "22px",
        border: "1px solid #dce6f5",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: 800,
          color: "#2456a6",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#5b6472",
          lineHeight: 1.7,
        }}
      >
        {text}
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

function CompareBox({
  title,
  first,
  second,
}: {
  title: string;
  first: string;
  second: string;
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
          margin: "0 0 14px",
          color: "#2456a6",
          fontSize: "18px",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontWeight: 700,
          marginBottom: "7px",
        }}
      >
        {first}
      </div>

      <div
        style={{
          color: "#5b6472",
          lineHeight: 1.6,
        }}
      >
        {second}
      </div>
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

const examplePanelStyle: React.CSSProperties = {
  padding: "15px 16px",
  background: "#ffffff",
  borderRadius: "10px",
  lineHeight: 1.9,
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