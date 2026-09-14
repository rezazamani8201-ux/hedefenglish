"use client";

import Link from "next/link";

const articles = [
  {
    article: "a",
    use: "Use before a singular countable noun that begins with a consonant sound.",
    examples: ["a book", "a car", "a teacher", "a university"],
  },
  {
    article: "an",
    use: "Use before a singular countable noun that begins with a vowel sound.",
    examples: ["an apple", "an egg", "an English teacher", "an hour"],
  },
  {
    article: "the",
    use: "Use when we talk about a specific person, thing, or place.",
    examples: ["the sun", "the teacher", "the door", "the car"],
  },
];

const comparisonRows = [
  {
    article: "a",
    rule: "Singular + consonant sound",
    example: "a dog",
  },
  {
    article: "an",
    rule: "Singular + vowel sound",
    example: "an apple",
  },
  {
    article: "the",
    rule: "Specific or already known",
    example: "the dog",
  },
];

const practice = [
  {
    question: "I have ___ dog.",
    answer: "a",
  },
  {
    question: "She is ___ English teacher.",
    answer: "an",
  },
  {
    question: "Please close ___ door.",
    answer: "the",
  },
  {
    question: "He wants to buy ___ new car.",
    answer: "a",
  },
  {
    question: "I ate ___ apple this morning.",
    answer: "an",
  },
  {
    question: "Where is ___ book I gave you?",
    answer: "the",
  },
  {
    question: "She has ___ brother.",
    answer: "a",
  },
  {
    question: "He is ___ honest man.",
    answer: "an",
  },
];

export default function ArticlesPage() {
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
            Articles — A, An & The
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
            Learn how to use the articles a, an, and the correctly in basic
            English sentences.
          </p>
        </section>

        {/* What are articles? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Are Articles?</h2>

          <p style={paragraphStyle}>
            Articles are small words that come before nouns. In English, the
            three main articles are <strong>a</strong>, <strong>an</strong>,
            and <strong>the</strong>.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
            }}
          >
            <ArticleBox
              article="A"
              description="one non-specific thing"
            />

            <ArticleBox
              article="AN"
              description="one non-specific thing"
            />

            <ArticleBox
              article="THE"
              description="a specific thing"
            />
          </div>
        </section>

        {/* A */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div style={articleBadgeStyle}>A</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “A”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>a</strong> before a singular countable noun when the
            next word begins with a <strong>consonant sound</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="a book" />

            <ExampleBox text="a car" />

            <ExampleBox text="a teacher" />

            <ExampleBox text="a house" />
          </div>

          <div style={ruleBoxStyle}>
            <strong>Examples:</strong>
            <br />
            I have <strong>a car</strong>.
            <br />
            She is <strong>a teacher</strong>.
            <br />
            He lives in <strong>a house</strong>.
          </div>
        </section>

        {/* An */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div style={articleBadgeStyle}>AN</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “An”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>an</strong> before a singular countable noun when the
            next word begins with a <strong>vowel sound</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="an apple" />

            <ExampleBox text="an egg" />

            <ExampleBox text="an orange" />

            <ExampleBox text="an umbrella" />
          </div>

          <div style={ruleBoxStyle}>
            <strong>Examples:</strong>
            <br />
            I ate <strong>an apple</strong>.
            <br />
            She has <strong>an umbrella</strong>.
            <br />
            He is <strong>an English teacher</strong>.
          </div>
        </section>

        {/* A vs An */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>A or An?</h2>

          <p style={paragraphStyle}>
            The choice between <strong>a</strong> and <strong>an</strong>
            depends on the <strong>sound</strong>, not simply the spelling.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "22px",
                borderRadius: "14px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                A + consonant sound
              </h3>

              <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
                a car
                <br />
                a dog
                <br />
                a university
                <br />
                a European country
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "22px",
                borderRadius: "14px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                An + vowel sound
              </h3>

              <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
                an apple
                <br />
                an egg
                <br />
                an hour
                <br />
                an honest person
              </p>
            </div>
          </div>
        </section>

        {/* The */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div style={articleBadgeStyle}>THE</div>

            <h2 style={{ ...headingStyle, margin: 0 }}>
              When to Use “The”
            </h2>
          </div>

          <p style={paragraphStyle}>
            Use <strong>the</strong> when the person listening or reading knows
            exactly which person, thing, or place we mean.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="Please open the door." />

            <ExampleBox text="Where is the teacher?" />

            <ExampleBox text="The car is outside." />
          </div>
        </section>

        {/* First mention / second mention */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>First Mention and Second Mention</h2>

          <p style={paragraphStyle}>
            We often use <strong>a/an</strong> when we mention something for
            the first time. Then we use <strong>the</strong> when we mention
            the same thing again.
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#f7f9fc",
              borderRadius: "14px",
              lineHeight: 1.9,
            }}
          >
            I saw <strong>a dog</strong> in the street.
            <br />
            <strong>The dog</strong> was very friendly.
          </div>

          <div
            style={{
              marginTop: "16px",
              padding: "20px",
              background: "#f7f9fc",
              borderRadius: "14px",
              lineHeight: 1.9,
            }}
          >
            She bought <strong>an umbrella</strong>.
            <br />
            <strong>The umbrella</strong> is black.
          </div>
        </section>

        {/* Specific examples */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Specific Things</h2>

          <p style={paragraphStyle}>
            We use <strong>the</strong> when the listener knows which thing we
            are talking about.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="The book on the table is mine." />

            <ExampleBox text="The girl in the blue dress is my sister." />

            <ExampleBox text="The restaurant near my house is very good." />
          </div>
        </section>

        {/* Unique things */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Unique Things</h2>

          <p style={paragraphStyle}>
            We use <strong>the</strong> with things that are unique or commonly
            understood as one specific thing.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="the sun" />

            <ExampleBox text="the moon" />

            <ExampleBox text="the Earth" />

            <ExampleBox text="the sky" />
          </div>
        </section>

        {/* Comparison table */}
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

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "collapse",
                marginTop: "18px",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Article</th>
                  <th style={cellStyle}>Use</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.article}>
                    <td
                      style={{
                        ...cellStyle,
                        fontWeight: 700,
                        color: "#2456a6",
                      }}
                    >
                      {row.article}
                    </td>

                    <td style={cellStyle}>{row.rule}</td>

                    <td style={cellStyle}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <Note text="Use a and an only with singular countable nouns." />

            <Note text="Use an according to the sound, not simply the first letter." />

            <Note text="Use the when the listener knows which person or thing you mean." />

            <Note text="A and an usually introduce something for the first time." />

            <Note text="The is often used when we talk about something specific or already mentioned." />
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
              wrong="I have an car."
              correct="I have a car."
            />

            <Mistake
              wrong="She is a English teacher."
              correct="She is an English teacher."
            />

            <Mistake
              wrong="I saw dog in the street."
              correct="I saw a dog in the street."
            />

            <Mistake
              wrong="Please close a door."
              correct="Please close the door."
            />

            <Mistake
              wrong="He is an university student."
              correct="He is a university student."
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
            <Sentence text="I have a new phone." />

            <Sentence text="She is an artist." />

            <Sentence text="He bought a sandwich." />

            <Sentence text="The sandwich was delicious." />

            <Sentence text="There is a book on the table." />

            <Sentence text="The book is very interesting." />

            <Sentence text="The sun is shining." />
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
            Complete each sentence with <strong>a</strong>,{" "}
            <strong>an</strong>, or <strong>the</strong>.
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
            href="/resources/grammar/a1/plural-nouns"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Plural Nouns →
          </Link>
        </div>
      </div>
    </main>
  );
}

function ArticleBox({
  article,
  description,
}: {
  article: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#f7f9fc",
        borderRadius: "14px",
        padding: "22px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          fontWeight: 800,
          color: "#2456a6",
          marginBottom: "8px",
        }}
      >
        {article}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#5b6472",
          lineHeight: 1.6,
        }}
      >
        {description}
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

const articleBadgeStyle: React.CSSProperties = {
  width: "58px",
  height: "58px",
  borderRadius: "14px",
  background: "#eef4ff",
  color: "#2456a6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: 800,
  flexShrink: 0,
};

const ruleBoxStyle: React.CSSProperties = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "12px",
  background: "#f7f9fc",
  lineHeight: 1.9,
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