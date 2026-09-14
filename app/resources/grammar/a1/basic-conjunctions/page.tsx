"use client";

import Link from "next/link";

const practice = [
  {
    question: "I like tea ___ coffee.",
    answer: "and",
  },
  {
    question: "She is tired, ___ she is happy.",
    answer: "but",
  },
  {
    question: "I stayed home ___ I was sick.",
    answer: "because",
  },
  {
    question: "Hurry up, ___ you will be late.",
    answer: "or",
  },
  {
    question: "He doesn't like coffee ___ tea.",
    answer: "or",
  },
  {
    question: "I study English ___ I want to travel.",
    answer: "because",
  },
  {
    question: "It was cold, ___ we went outside.",
    answer: "but",
  },
  {
    question: "She bought apples ___ bananas.",
    answer: "and",
  },
];

export default function BasicConjunctionsPage() {
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
            Basic Conjunctions
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
            Learn how to connect words, phrases, and simple sentences using
            common conjunctions such as and, but, or, and because.
          </p>
        </section>

        {/* What are conjunctions? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Conjunctions?</h2>

          <p style={paragraphStyle}>
            Conjunctions are words that connect words, phrases, or sentences.
          </p>

          <p style={paragraphStyle}>
            At A1 level, the most useful conjunctions are:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <ConjunctionCard word="and" meaning="addition" />
            <ConjunctionCard word="but" meaning="contrast" />
            <ConjunctionCard word="or" meaning="choice" />
            <ConjunctionCard word="because" meaning="reason" />
            <ConjunctionCard word="so" meaning="result" />
          </div>
        </section>

        {/* AND */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>1. AND</h2>

          <p style={paragraphStyle}>
            Use <strong>and</strong> to add similar or connected information.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I like tea and coffee." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She speaks English and Turkish." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Tom is kind and friendly." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I went home and watched TV." />
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Idea:</strong>
            <br />
            AND = one thing + another thing
          </div>
        </section>

        {/* BUT */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. BUT</h2>

          <p style={paragraphStyle}>
            Use <strong>but</strong> to show a contrast or an unexpected
            difference.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I like coffee, but I don't like tea." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is tired, but she is happy." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="It is cold, but we are outside." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He is young, but he is very responsible." />
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#f7f9fc",
              borderRadius: "12px",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Idea:</strong>
            <br />
            BUT = this is true + something different is also true
          </div>
        </section>

        {/* OR */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>3. OR</h2>

          <p style={paragraphStyle}>
            Use <strong>or</strong> to give a choice or alternative.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Do you want tea or coffee?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Would you like pizza or pasta?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="You can take the bus or the train." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Is your bag black or blue?" />
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Idea:</strong>
            <br />
            OR = this choice + that choice
          </div>
        </section>

        {/* BECAUSE */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. BECAUSE</h2>

          <p style={paragraphStyle}>
            Use <strong>because</strong> to give a reason.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I stayed home because I was sick." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I study English because I want to travel." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is happy because she passed the test." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We are late because the bus was slow." />
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              background: "#eef4ff",
              borderRadius: "12px",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Question:</strong>
            <br />
            Why are you learning English?
            <br />
            <br />
            <strong style={{ color: "#173b78" }}>Answer:</strong>
            <br />
            Because I want to communicate with people.
          </div>
        </section>

        {/* SO */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>5. SO</h2>

          <p style={paragraphStyle}>
            Use <strong>so</strong> to show a result or consequence.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I was tired, so I went to bed." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="It was raining, so we stayed home." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She was hungry, so she made a sandwich." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I studied hard, so I passed the test." />
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Idea:</strong>
            <br />
            Situation + SO + result
          </div>
        </section>

        {/* Because vs So */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. BECAUSE vs SO</h2>

          <p style={paragraphStyle}>
            <strong>Because</strong> gives the reason.
            <br />
            <strong>So</strong> gives the result.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I stayed home because I was sick." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I was sick, so I stayed home." />
          </div>

          <div
            style={{
              marginTop: "22px",
              overflowX: "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "600px",
                borderCollapse: "collapse",
                background: "#ffffff",
              }}
            >
              <thead>
                <tr>
                  <th style={cellStyle}>Conjunction</th>
                  <th style={cellStyle}>Function</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <strong>because</strong>
                  </td>
                  <td style={cellStyle}>reason</td>
                  <td style={cellStyle}>
                    I stayed home because I was sick.
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>so</strong>
                  </td>
                  <td style={cellStyle}>result</td>
                  <td style={cellStyle}>
                    I was sick, so I stayed home.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick comparison */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>7. Quick Comparison</h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                minWidth: "700px",
                borderCollapse: "collapse",
                background: "#ffffff",
              }}
            >
              <thead>
                <tr>
                  <th style={cellStyle}>Word</th>
                  <th style={cellStyle}>Use</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <strong>and</strong>
                  </td>
                  <td style={cellStyle}>addition</td>
                  <td style={cellStyle}>I like tea and coffee.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>but</strong>
                  </td>
                  <td style={cellStyle}>contrast</td>
                  <td style={cellStyle}>I am tired, but I am happy.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>or</strong>
                  </td>
                  <td style={cellStyle}>choice</td>
                  <td style={cellStyle}>Tea or coffee?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>because</strong>
                  </td>
                  <td style={cellStyle}>reason</td>
                  <td style={cellStyle}>I stayed home because I was sick.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>so</strong>
                  </td>
                  <td style={cellStyle}>result</td>
                  <td style={cellStyle}>I was sick, so I stayed home.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sentence building */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>8. Building Longer Sentences</h2>

          <p style={paragraphStyle}>
            Conjunctions help you combine short sentences into longer,
            clearer sentences.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I like English." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I like English and I like Spanish." />
            <div style={{ height: "18px" }} />

            <ExampleBox text="I was tired." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I was tired, but I continued working." />
            <div style={{ height: "18px" }} />

            <ExampleBox text="I stayed home." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I stayed home because it was raining." />
          </div>
        </section>

        {/* Common mistakes */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Common Mistakes</h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Mistake
              wrong="I like tea but coffee."
              correct="I like tea and coffee."
            />

            <Mistake
              wrong="I stayed home so I was sick."
              correct="I stayed home because I was sick."
            />

            <Mistake
              wrong="I was sick because I stayed home."
              correct="I was sick, so I stayed home."
            />

            <Mistake
              wrong="Do you want tea and coffee?"
              correct="Do you want tea or coffee?"
            />
          </div>
        </section>

        {/* Example sentences */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Example Sentences</h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            <Sentence text="I have a brother and a sister." />
            <Sentence text="She is young, but she is very responsible." />
            <Sentence text="Do you want water or juice?" />
            <Sentence text="I am learning English because I need it for work." />
            <Sentence text="It was raining, so we stayed home." />
            <Sentence text="He likes football and basketball." />
            <Sentence text="I wanted to go, but I was too tired." />
            <Sentence text="You can call me or send me a message." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with the correct conjunction.
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

        {/* Final note */}
        <section
          style={{
            background: "#173b78",
            color: "#ffffff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              fontSize: "26px",
            }}
          >
            A1 Grammar Complete
          </h2>

          <p
            style={{
              marginBottom: 0,
              lineHeight: 1.8,
              opacity: 0.95,
            }}
          >
            You have completed the basic A1 grammar topics. Keep practicing
            these structures and try to use them in real conversations.
          </p>
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
          <Link href="/resources/grammar/a1/question-words" style={navButtonStyle}>
            ← Question Words
          </Link>

          <Link
            href="/resources/grammar/a1"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Back to A1 Grammar
          </Link>
        </div>
      </div>
    </main>
  );
}

function ConjunctionCard({
  word,
  meaning,
}: {
  word: string;
  meaning: string;
}) {
  return (
    <div
      style={{
        padding: "20px 14px",
        borderRadius: "14px",
        background: "#f7f9fc",
        border: "1px solid #edf0f5",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: "#173b78",
          marginBottom: "8px",
        }}
      >
        {word}
      </div>

      <div
        style={{
          fontSize: "13px",
          color: "#667085",
          lineHeight: 1.5,
        }}
      >
        {meaning}
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

const sectionStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: "18px",
  padding: "32px",
  border: "1px solid #e8edf4",
  marginBottom: "24px",
};

const blueSectionStyle: React.CSSProperties = {
  background: "#eef4ff",
  borderRadius: "18px",
  padding: "30px",
  marginBottom: "24px",
};

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