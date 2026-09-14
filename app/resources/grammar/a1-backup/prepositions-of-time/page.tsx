"use client";

import Link from "next/link";

const practice = [
  {
    question: "I wake up ___ 7 o'clock.",
    answer: "at",
  },
  {
    question: "My birthday is ___ July.",
    answer: "in",
  },
  {
    question: "We have English class ___ Monday.",
    answer: "on",
  },
  {
    question: "She was born ___ 1998.",
    answer: "in",
  },
  {
    question: "The movie starts ___ 8:30.",
    answer: "at",
  },
  {
    question: "I usually relax ___ the weekend.",
    answer: "at",
  },
];

export default function PrepositionsOfTimePage() {
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
            Prepositions of Time
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
            Learn how to use common prepositions of time such as
            <strong> at, on, and in</strong> to talk about when things happen.
          </p>
        </section>

        {/* What are prepositions of time? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Prepositions of Time?</h2>

          <p style={paragraphStyle}>
            Prepositions of time help us say <strong>when</strong> something
            happens.
          </p>

          <p style={paragraphStyle}>
            The three most common prepositions of time are:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <TimeCard title="AT" text="specific times" />
            <TimeCard title="ON" text="days and dates" />
            <TimeCard title="IN" text="months, years, seasons and periods" />
          </div>
        </section>

        {/* At */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>1. At</h2>

          <p style={paragraphStyle}>
            Use <strong>at</strong> for specific times.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I get up at 7 o'clock." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The class starts at 9:00." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She goes to bed at midnight." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We have lunch at noon." />
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #dce7f8",
            }}
          >
            <strong style={{ color: "#173b78" }}>Common expressions:</strong>
            <p style={{ margin: "10px 0 0", lineHeight: 1.8 }}>
              at 6 o'clock · at noon · at midnight · at night
            </p>
          </div>
        </section>

        {/* On */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. On</h2>

          <p style={paragraphStyle}>
            Use <strong>on</strong> for days and specific dates.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I work on Monday." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We have a meeting on Friday." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="My birthday is on June 15th." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She arrived on Monday morning." />
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              background: "#f7f9fc",
              borderRadius: "12px",
              border: "1px solid #edf0f5",
            }}
          >
            <strong style={{ color: "#173b78" }}>Examples:</strong>
            <p style={{ margin: "10px 0 0", lineHeight: 1.8 }}>
              on Monday · on Sunday · on July 10th · on my birthday
            </p>
          </div>
        </section>

        {/* In */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>3. In</h2>

          <p style={paragraphStyle}>
            Use <strong>in</strong> for months, years, seasons, and longer
            periods of time.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I was born in 1998." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="My birthday is in July." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We usually travel in summer." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She will finish the course in two weeks." />
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #dce7f8",
            }}
          >
            <strong style={{ color: "#173b78" }}>Examples:</strong>
            <p style={{ margin: "10px 0 0", lineHeight: 1.8 }}>
              in January · in 2026 · in summer · in the morning · in two days
            </p>
          </div>
        </section>

        {/* In the morning / afternoon / evening */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Parts of the Day</h2>

          <p style={paragraphStyle}>
            We usually use <strong>in</strong> with parts of the day.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I study in the morning." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She works in the afternoon." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We watch TV in the evening." />
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
            <strong>Important:</strong> We say <strong>at night</strong>, not
            "in night".
          </div>
        </section>

        {/* At night */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>5. At Night</h2>

          <p style={paragraphStyle}>
            Use <strong>at night</strong> when talking about the general
            nighttime period.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I don't work at night." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The streets are quiet at night." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She usually reads at night." />
          </div>
        </section>

        {/* At the weekend */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. At the Weekend</h2>

          <p style={paragraphStyle}>
            We commonly use <strong>at</strong> with "the weekend" in British
            English.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I usually relax at the weekend." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We visit our family at the weekend." />
          </div>

          <p
            style={{
              marginTop: "18px",
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: 1.7,
            }}
          >
            American English commonly uses <strong>on the weekend</strong>.
          </p>
        </section>

        {/* Time expressions */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>7. Other Useful Time Expressions</h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I will call you in two hours." />
            <ExampleBox text="She will arrive in ten minutes." />
            <ExampleBox text="We moved here two years ago." />
            <ExampleBox text="He finished the work yesterday." />
            <ExampleBox text="They are leaving tomorrow." />
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            Notice that some time expressions such as{" "}
            <strong>yesterday, today, tomorrow, last week</strong>, and{" "}
            <strong>next year</strong> normally do not need a preposition.
          </p>
        </section>

        {/* Quick comparison */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Comparison: At, On, In</h2>

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
                  <th style={cellStyle}>Preposition</th>
                  <th style={cellStyle}>Use</th>
                  <th style={cellStyle}>Examples</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <strong>at</strong>
                  </td>
                  <td style={cellStyle}>specific times</td>
                  <td style={cellStyle}>
                    at 7:00 · at noon · at night
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>on</strong>
                  </td>
                  <td style={cellStyle}>days and dates</td>
                  <td style={cellStyle}>
                    on Monday · on July 15th
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>
                    <strong>in</strong>
                  </td>
                  <td style={cellStyle}>
                    months, years, seasons and longer periods
                  </td>
                  <td style={cellStyle}>
                    in July · in 2026 · in summer
                  </td>
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
              wrong="I wake up in 7 o'clock."
              correct="I wake up at 7 o'clock."
            />

            <Mistake
              wrong="I have English class in Monday."
              correct="I have English class on Monday."
            />

            <Mistake
              wrong="My birthday is on July."
              correct="My birthday is in July."
            />

            <Mistake
              wrong="I study in night."
              correct="I study at night."
            />

            <Mistake
              wrong="She was born on 1998."
              correct="She was born in 1998."
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
            <Sentence text="I get up at 7 o'clock every morning." />
            <Sentence text="We have English class on Tuesday." />
            <Sentence text="She was born in 2000." />
            <Sentence text="My birthday is in September." />
            <Sentence text="They usually go shopping on Saturday." />
            <Sentence text="I like reading in the evening." />
            <Sentence text="He works at night." />
            <Sentence text="We will travel in summer." />
            <Sentence text="The meeting starts at noon." />
            <Sentence text="I will see you on Friday." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with <strong>at, on,</strong> or{" "}
            <strong>in</strong>.
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
            href="/resources/grammar/a1/question-words"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Question Words →
          </Link>
        </div>
      </div>
    </main>
  );
}

function TimeCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        padding: "22px",
        borderRadius: "14px",
        background: "#f7f9fc",
        border: "1px solid #edf0f5",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: 800,
          color: "#173b78",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#667085",
          lineHeight: 1.6,
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