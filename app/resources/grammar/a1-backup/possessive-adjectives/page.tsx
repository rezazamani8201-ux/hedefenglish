"use client";

import Link from "next/link";

const possessives = [
  {
    adjective: "my",
    pronoun: "I",
    meaning: "belongs to me",
    example: "This is my book.",
  },
  {
    adjective: "your",
    pronoun: "you",
    meaning: "belongs to you",
    example: "Is this your phone?",
  },
  {
    adjective: "his",
    pronoun: "he",
    meaning: "belongs to a male person",
    example: "That is his car.",
  },
  {
    adjective: "her",
    pronoun: "she",
    meaning: "belongs to a female person",
    example: "This is her bag.",
  },
  {
    adjective: "its",
    pronoun: "it",
    meaning: "belongs to a thing or animal",
    example: "The dog is eating its food.",
  },
  {
    adjective: "our",
    pronoun: "we",
    meaning: "belongs to us",
    example: "This is our house.",
  },
  {
    adjective: "their",
    pronoun: "they",
    meaning: "belongs to them",
    example: "That is their classroom.",
  },
];

const examples = [
  ["My", "My name is David."],
  ["Your", "What is your name?"],
  ["His", "His brother is a doctor."],
  ["Her", "Her mother is a teacher."],
  ["Its", "The cat is licking its paw."],
  ["Our", "Our house is very big."],
  ["Their", "Their children are at school."],
];

const practice = [
  {
    question: "I have a car. This is ___ car.",
    answer: "my",
  },
  {
    question: "She has a new phone. This is ___ phone.",
    answer: "her",
  },
  {
    question: "He has a brother. ___ brother is 20 years old.",
    answer: "His",
  },
  {
    question: "We have a house. This is ___ house.",
    answer: "our",
  },
  {
    question: "They have two children. ___ children are very friendly.",
    answer: "Their",
  },
  {
    question: "You have a book. Is this ___ book?",
    answer: "your",
  },
  {
    question: "The dog is eating ___ food.",
    answer: "its",
  },
];

export default function PossessiveAdjectivesPage() {
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
            Possessive Adjectives
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
            Learn how to use my, your, his, her, its, our, and their to show
            who something belongs to.
          </p>
        </section>

        {/* What are possessive adjectives? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Are Possessive Adjectives?</h2>

          <p style={paragraphStyle}>
            Possessive adjectives show who owns something or who something
            belongs to.
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

            <div
              style={{
                marginTop: "10px",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              I have a book. → This is <strong>my book</strong>.
            </div>
          </div>
        </section>

        {/* Important rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Important Rule</h2>

          <p style={paragraphStyle}>
            A possessive adjective comes <strong>before a noun</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <ExampleBox
              title="Possessive + Noun"
              text="my car"
            />

            <ExampleBox
              title="Possessive + Noun"
              text="her house"
            />

            <ExampleBox
              title="Possessive + Noun"
              text="their children"
            />
          </div>
        </section>

        {/* Main table */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>The Seven Possessive Adjectives</h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "18px",
                minWidth: "650px",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Subject Pronoun</th>
                  <th style={cellStyle}>Possessive Adjective</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                {possessives.map((item) => (
                  <tr key={item.adjective}>
                    <td style={cellStyle}>{item.pronoun}</td>
                    <td
                      style={{
                        ...cellStyle,
                        fontWeight: 700,
                        color: "#2456a6",
                      }}
                    >
                      {item.adjective}
                    </td>
                    <td style={cellStyle}>{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed cards */}
        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ ...headingStyle, marginBottom: "18px" }}>
            Possessive Adjectives in Detail
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {possessives.map((item) => (
              <div
                key={item.adjective}
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
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#2456a6",
                    marginBottom: "8px",
                  }}
                >
                  {item.adjective}
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    marginBottom: "12px",
                  }}
                >
                  Subject: <strong>{item.pronoun}</strong>
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

        {/* My / Your */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>My and Your</h2>

          <p style={paragraphStyle}>
            Use <strong>my</strong> when something belongs to the speaker.
            Use <strong>your</strong> when something belongs to the person or
            people you are speaking to.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <ExampleBox
              title="My"
              text="My name is Anna."
            />

            <ExampleBox
              title="Your"
              text="What is your name?"
            />
          </div>
        </section>

        {/* His / Her */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>His and Her</h2>

          <p style={paragraphStyle}>
            Use <strong>his</strong> for something belonging to a male person
            and <strong>her</strong> for something belonging to a female
            person.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <ExampleBox
              title="His"
              text="His name is John."
            />

            <ExampleBox
              title="Her"
              text="Her name is Sarah."
            />
          </div>
        </section>

        {/* Its */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Its</h2>

          <p style={paragraphStyle}>
            Use <strong>its</strong> when something belongs to a thing or an
            animal.
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "18px",
              borderRadius: "12px",
              background: "#f7f9fc",
              lineHeight: 1.8,
            }}
          >
            The cat is eating <strong>its food</strong>.
            <br />
            The company changed <strong>its website</strong>.
          </div>
        </section>

        {/* Our / Their */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Our and Their</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <ExampleBox
              title="Our"
              text="Our teacher is very friendly."
            />

            <ExampleBox
              title="Their"
              text="Their house is near the school."
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
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Note text="Possessive adjectives are always followed by a noun." />

            <Note text="We say my book, not my is book." />

            <Note text="We say her car, not she car." />

            <Note text="We say their house, not they house." />

            <Note text="Possessive adjectives do not change for singular or plural nouns." />
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
              wrong="She is my sister. His name is Sarah."
              correct="She is my sister. Her name is Sarah."
            />

            <Mistake
              wrong="They have a house. They house is big."
              correct="They have a house. Their house is big."
            />

            <Mistake
              wrong="I have a new car. I car is black."
              correct="I have a new car. My car is black."
            />

            <Mistake
              wrong="He has a dog. Her dog is very small."
              correct="He has a dog. His dog is very small."
            />
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
          <h2 style={headingStyle}>Example Sentences</h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            {examples.map(([word, sentence]) => (
              <div
                key={word}
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
                  {word}
                </strong>

                <span>{sentence}</span>
              </div>
            ))}
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
            Complete each sentence with the correct possessive adjective.
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