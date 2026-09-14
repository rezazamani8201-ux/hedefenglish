"use client";

import Link from "next/link";

const practice = [
  {
    question: "I ___ drink coffee in the morning. (100%)",
    answer: "always",
  },
  {
    question: "She ___ goes to work by bus. (80%)",
    answer: "usually",
  },
  {
    question: "We ___ eat at restaurants. (60%)",
    answer: "often",
  },
  {
    question: "He ___ watches TV after dinner. (40%)",
    answer: "sometimes",
  },
  {
    question: "They ___ go to the cinema. (20%)",
    answer: "rarely",
  },
  {
    question: "I ___ smoke. (0%)",
    answer: "never",
  },
];

export default function AdverbsOfFrequencyPage() {
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
            Adverbs of Frequency
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
            Learn how to talk about how often you do something using adverbs
            such as always, usually, often, sometimes, rarely, and never.
          </p>
        </section>

        {/* What are they? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Adverbs of Frequency?</h2>

          <p style={paragraphStyle}>
            Adverbs of frequency tell us <strong>how often</strong> something
            happens.
          </p>

          <p style={paragraphStyle}>
            They are especially common with the <strong>present simple</strong>
            because we often use the present simple to talk about habits and
            routines.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I always have breakfast." />
            <ExampleBox text="She usually walks to work." />
            <ExampleBox text="They sometimes play tennis." />
            <ExampleBox text="He never drinks coffee." />
          </div>
        </section>

        {/* Frequency scale */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Frequency Scale</h2>

          <p style={paragraphStyle}>
            These adverbs show different levels of frequency.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            <FrequencyBox word="Always" percent="100%" />
            <FrequencyBox word="Usually" percent="80%" />
            <FrequencyBox word="Often" percent="60%" />
            <FrequencyBox word="Sometimes" percent="40%" />
            <FrequencyBox word="Rarely" percent="20%" />
            <FrequencyBox word="Never" percent="0%" />
          </div>
        </section>

        {/* Always */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Always</h2>

          <p style={paragraphStyle}>
            <strong>Always</strong> means something happens every time or
            almost every time.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I always brush my teeth in the morning." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She always arrives on time." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We always have dinner together." />
          </div>
        </section>

        {/* Usually */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Usually</h2>

          <p style={paragraphStyle}>
            <strong>Usually</strong> means something happens most of the time.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I usually wake up at 7 o'clock." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He usually goes to work by bus." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They usually eat at home." />
          </div>
        </section>

        {/* Often */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Often</h2>

          <p style={paragraphStyle}>
            <strong>Often</strong> means something happens many times.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I often listen to music." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She often visits her family." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We often go for a walk." />
          </div>
        </section>

        {/* Sometimes */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Sometimes</h2>

          <p style={paragraphStyle}>
            <strong>Sometimes</strong> means something happens on some
            occasions, but not regularly.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I sometimes watch movies at night." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He sometimes cooks dinner." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They sometimes travel at the weekend." />
          </div>
        </section>

        {/* Rarely */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Rarely</h2>

          <p style={paragraphStyle}>
            <strong>Rarely</strong> means something does not happen very
            often.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I rarely eat fast food." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She rarely watches television." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We rarely go out on weekdays." />
          </div>
        </section>

        {/* Never */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Never</h2>

          <p style={paragraphStyle}>
            <strong>Never</strong> means something does not happen at any
            time.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I never smoke." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He never drinks alcohol." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They never arrive late." />
          </div>
        </section>

        {/* Position */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Where Do We Put Adverbs of Frequency?</h2>

          <p style={paragraphStyle}>
            With most main verbs, the adverb of frequency usually comes{" "}
            <strong>before the main verb</strong>.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I always drink coffee." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She usually walks to work." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They often play football." />
          </div>
        </section>

        {/* To be position */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>With the Verb “To Be”</h2>

          <p style={paragraphStyle}>
            When the main verb is <strong>to be</strong>, the adverb usually
            comes <strong>after am, is, or are</strong>.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I am always happy." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is usually tired after work." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They are often late." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He is never angry." />
          </div>

          <div style={{ marginTop: "20px" }}>
            <Note text="Main verb: I usually drink coffee." />
            <div style={{ height: "10px" }} />
            <Note text="To be: I am usually happy." />
          </div>
        </section>

        {/* Sometimes position */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>The Position of “Sometimes”</h2>

          <p style={paragraphStyle}>
            <strong>Sometimes</strong> is flexible and can appear in different
            positions in a sentence.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="Sometimes I walk to work." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I sometimes walk to work." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I walk to work sometimes." />
          </div>
        </section>

        {/* Questions */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Questions with How Often</h2>

          <p style={paragraphStyle}>
            Use <strong>How often...?</strong> to ask about frequency.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="How often do you exercise?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How often does she go shopping?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How often do they visit their parents?" />
          </div>
        </section>

        {/* Answers */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Answering “How Often?”</h2>

          <p style={paragraphStyle}>
            We can answer with an adverb of frequency or a frequency
            expression.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="How often do you exercise? — I usually exercise." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How often does he cook? — He sometimes cooks." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="How often do they travel? — They rarely travel." />
          </div>
        </section>

        {/* Frequency expressions */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Frequency Expressions</h2>

          <p style={paragraphStyle}>
            We can also use expressions such as every day, once a week, twice
            a month, and three times a year.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I study English every day." />
            <ExampleBox text="She goes swimming twice a week." />
            <ExampleBox text="We visit our grandparents once a month." />
            <ExampleBox text="They travel three times a year." />
          </div>
        </section>

        {/* Important distinction */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Adverb vs. Frequency Expression</h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "18px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Type</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>Adverb</td>
                  <td style={cellStyle}>
                    I usually study English.
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>Frequency expression</td>
                  <td style={cellStyle}>
                    I study English every day.
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>Adverb</td>
                  <td style={cellStyle}>
                    She rarely goes out.
                  </td>
                </tr>

                <tr>
                  <td style={cellStyle}>Frequency expression</td>
                  <td style={cellStyle}>
                    She goes out once a week.
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
              wrong="I drink always coffee."
              correct="I always drink coffee."
            />

            <Mistake
              wrong="She always is happy."
              correct="She is always happy."
            />

            <Mistake
              wrong="He never doesn't eat breakfast."
              correct="He never eats breakfast."
            />

            <Mistake
              wrong="They usually are late."
              correct="They are usually late."
            />

            <Mistake
              wrong="I am never don't tired."
              correct="I am never tired."
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
            <Sentence text="I always get up early." />
            <Sentence text="She usually drinks tea in the morning." />
            <Sentence text="We often go to the park." />
            <Sentence text="He sometimes plays computer games." />
            <Sentence text="They rarely eat fast food." />
            <Sentence text="I never go to bed late." />
            <Sentence text="She is always friendly." />
            <Sentence text="He is usually busy." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Choose the correct adverb of frequency.
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
            href="/resources/grammar/a1/can-cant"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Can / Can&apos;t →
          </Link>
        </div>
      </div>
    </main>
  );
}

function FrequencyBox({
  word,
  percent,
}: {
  word: string;
  percent: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #dce6f5",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#173b78",
          marginBottom: "8px",
        }}
      >
        {word}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        {percent}
      </div>
    </div>
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