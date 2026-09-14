"use client";

import Link from "next/link";

const practice = [
  {
    question: "___ is your name?",
    answer: "What",
  },
  {
    question: "___ do you live?",
    answer: "Where",
  },
  {
    question: "___ old are you?",
    answer: "How",
  },
  {
    question: "___ is your birthday?",
    answer: "When",
  },
  {
    question: "___ is your English teacher?",
    answer: "Who",
  },
  {
    question: "___ do you like English?",
    answer: "Why",
  },
  {
    question: "___ book do you want?",
    answer: "Which",
  },
  {
    question: "___ many brothers do you have?",
    answer: "How",
  },
];

export default function QuestionWordsPage() {
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
            Question Words
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
            Learn how to use common question words to ask for information
            about people, places, time, reasons, things, and quantities.
          </p>
        </section>

        {/* What are question words? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Question Words?</h2>

          <p style={paragraphStyle}>
            Question words are words we use to ask for specific information.
          </p>

          <p style={paragraphStyle}>
            The most common question words are:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <QuestionCard word="What" meaning="things / information" />
            <QuestionCard word="Where" meaning="places" />
            <QuestionCard word="When" meaning="time" />
            <QuestionCard word="Who" meaning="people" />
            <QuestionCard word="Why" meaning="reasons" />
            <QuestionCard word="Which" meaning="choice" />
            <QuestionCard word="How" meaning="method / condition" />
          </div>
        </section>

        {/* What */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>1. What</h2>

          <p style={paragraphStyle}>
            Use <strong>what</strong> to ask about things, information, names,
            activities, and general details.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="What is your name?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="What is this?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="What do you do?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="What do you want?" />
          </div>
        </section>

        {/* Where */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. Where</h2>

          <p style={paragraphStyle}>
            Use <strong>where</strong> to ask about places or locations.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Where do you live?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Where is the bank?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Where are my keys?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Where does she work?" />
          </div>
        </section>

        {/* When */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>3. When</h2>

          <p style={paragraphStyle}>
            Use <strong>when</strong> to ask about time.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="When is your birthday?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="When do you get up?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="When does the class start?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="When are you coming?" />
          </div>
        </section>

        {/* Who */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Who</h2>

          <p style={paragraphStyle}>
            Use <strong>who</strong> to ask about people.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Who is she?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Who is your teacher?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Who do you live with?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Who called you?" />
          </div>
        </section>

        {/* Why */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>5. Why</h2>

          <p style={paragraphStyle}>
            Use <strong>why</strong> to ask for a reason.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Why are you tired?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Why are you late?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Why do you study English?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Why did she leave?" />
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #dce7f8",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#173b78" }}>Common answer:</strong>
            <br />
            Because + reason
            <br />
            <br />
            Example:
            <br />
            <strong>Why do you study English?</strong>
            <br />
            Because I want to communicate with people.
          </div>
        </section>

        {/* Which */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Which</h2>

          <p style={paragraphStyle}>
            Use <strong>which</strong> when choosing between specific
            possibilities.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Which color do you like?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Which one do you want?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Which bus goes to the city center?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Which book is yours?" />
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px 18px",
              borderRadius: "12px",
              background: "#eef4ff",
              color: "#173b78",
              lineHeight: 1.7,
            }}
          >
            <strong>What or Which?</strong>
            <br />
            <br />
            <strong>What</strong> = a general choice
            <br />
            <strong>Which</strong> = a choice from a limited or known group
          </div>
        </section>

        {/* How */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>7. How</h2>

          <p style={paragraphStyle}>
            Use <strong>how</strong> to ask about the way something happens,
            conditions, measurements, and quantities.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="How are you?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How do you go to work?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How does this work?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How old are you?" />
          </div>
        </section>

        {/* How + expressions */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>8. Common "How" Questions</h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
                background: "#ffffff",
              }}
            >
              <thead>
                <tr>
                  <th style={cellStyle}>Question</th>
                  <th style={cellStyle}>Meaning</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <strong>How old</strong>
                  </td>
                  <td style={cellStyle}>age</td>
                  <td style={cellStyle}>How old are you?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How many</strong>
                  </td>
                  <td style={cellStyle}>countable quantity</td>
                  <td style={cellStyle}>How many books do you have?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How much</strong>
                  </td>
                  <td style={cellStyle}>uncountable quantity / price</td>
                  <td style={cellStyle}>How much is this?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How often</strong>
                  </td>
                  <td style={cellStyle}>frequency</td>
                  <td style={cellStyle}>How often do you exercise?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How long</strong>
                  </td>
                  <td style={cellStyle}>duration</td>
                  <td style={cellStyle}>How long is the lesson?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How far</strong>
                  </td>
                  <td style={cellStyle}>distance</td>
                  <td style={cellStyle}>How far is the airport?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Basic question structure */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>9. Basic Question Structure</h2>

          <p style={paragraphStyle}>
            With many A1 questions, we use this structure:
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "20px",
              background: "#ffffff",
              borderRadius: "12px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            Question Word + Auxiliary + Subject + Main Verb?
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Where do you live?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="What do you want?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="When does she work?" />
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            With the verb <strong>to be</strong>, we do not use do/does.
          </p>

          <div style={{ marginTop: "14px" }}>
            <ExampleBox text="Where are you?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Who is he?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How old are you?" />
          </div>
        </section>

        {/* Question word table */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Question Words at a Glance</h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
                background: "#ffffff",
              }}
            >
              <thead>
                <tr>
                  <th style={cellStyle}>Word</th>
                  <th style={cellStyle}>Ask About</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <strong>What</strong>
                  </td>
                  <td style={cellStyle}>things / information</td>
                  <td style={cellStyle}>What is your name?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>Where</strong>
                  </td>
                  <td style={cellStyle}>places</td>
                  <td style={cellStyle}>Where do you live?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>When</strong>
                  </td>
                  <td style={cellStyle}>time</td>
                  <td style={cellStyle}>When is the meeting?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>Who</strong>
                  </td>
                  <td style={cellStyle}>people</td>
                  <td style={cellStyle}>Who is she?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>Why</strong>
                  </td>
                  <td style={cellStyle}>reasons</td>
                  <td style={cellStyle}>Why are you sad?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>Which</strong>
                  </td>
                  <td style={cellStyle}>specific choice</td>
                  <td style={cellStyle}>Which one do you want?</td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>How</strong>
                  </td>
                  <td style={cellStyle}>way / condition / quantity</td>
                  <td style={cellStyle}>How are you?</td>
                </tr>
              </tbody>
            </table>
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
              wrong="Where you live?"
              correct="Where do you live?"
            />

            <Mistake
              wrong="What you want?"
              correct="What do you want?"
            />

            <Mistake
              wrong="Where do you are?"
              correct="Where are you?"
            />

            <Mistake
              wrong="Why you are late?"
              correct="Why are you late?"
            />

            <Mistake
              wrong="How many money do you have?"
              correct="How much money do you have?"
            />
          </div>
        </section>

        {/* Example sentences */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Example Questions</h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            <Sentence text="What is your favorite food?" />
            <Sentence text="Where do you work?" />
            <Sentence text="When do you usually get up?" />
            <Sentence text="Who is your best friend?" />
            <Sentence text="Why are you learning English?" />
            <Sentence text="Which color do you prefer?" />
            <Sentence text="How are you today?" />
            <Sentence text="How old is your brother?" />
            <Sentence text="How many languages do you speak?" />
            <Sentence text="How often do you study English?" />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each question with the correct question word.
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
          <Link href="/resources/grammar/a1" style={navButtonStyle}>
            ← A1 Grammar
          </Link>

          <Link
            href="/resources/grammar/a1/basic-conjunctions"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Basic Conjunctions →
          </Link>
        </div>
      </div>
    </main>
  );
}

function QuestionCard({
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