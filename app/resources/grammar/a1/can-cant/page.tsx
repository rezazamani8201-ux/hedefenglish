"use client";

import Link from "next/link";

const practice = [
  {
    question: "I ___ swim very well.",
    answer: "can",
  },
  {
    question: "She ___ speak English.",
    answer: "can",
  },
  {
    question: "He ___ drive a car. He is only ten.",
    answer: "can't",
  },
  {
    question: "___ you play the guitar?",
    answer: "Can",
  },
  {
    question: "They ___ come to the party tonight.",
    answer: "can't",
  },
  {
    question: "___ she cook?",
    answer: "Can",
  },
];

export default function CanCantPage() {
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
            Can / Can&apos;t
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
            Learn how to use can and can&apos;t to talk about ability,
            possibility, permission, and things that are not possible.
          </p>
        </section>

        {/* What is Can? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Is “Can”?</h2>

          <p style={paragraphStyle}>
            <strong>Can</strong> is a modal verb. We use it to talk about what
            someone is able to do.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <InfoCard
              title="Ability"
              text="I can swim."
            />

            <InfoCard
              title="Possibility"
              text="We can meet tomorrow."
            />

            <InfoCard
              title="Permission"
              text="Can I come in?"
            />
          </div>
        </section>

        {/* Can and Can't */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Can and Can&apos;t</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
              marginTop: "22px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #dce6f5",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  color: "#16794c",
                  fontSize: "22px",
                }}
              >
                CAN
              </h3>

              <p style={paragraphStyle}>
                We use <strong>can</strong> when someone is able to do
                something.
              </p>

              <ExampleBox text="I can swim." />
              <div style={{ height: "10px" }} />
              <ExampleBox text="She can speak English." />
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid #dce6f5",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  color: "#b42318",
                  fontSize: "22px",
                }}
              >
                CAN&apos;T
              </h3>

              <p style={paragraphStyle}>
                We use <strong>can&apos;t</strong> when someone is not able to
                do something.
              </p>

              <ExampleBox text="I can't swim." />
              <div style={{ height: "10px" }} />
              <ExampleBox text="He can't drive." />
            </div>
          </div>
        </section>

        {/* Structure */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Basic Structure</h2>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#173b78",
              textAlign: "center",
            }}
          >
            Subject + can + base verb
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I can speak English." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She can play tennis." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They can help us." />
          </div>

          <Note text="After can, always use the base form of the verb." />
        </section>

        {/* Important rule */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Important Rule</h2>

          <p style={paragraphStyle}>
            We do <strong>not</strong> add <strong>-s</strong> after can.
          </p>

          <div style={{ marginTop: "18px" }}>
            <Mistake
              wrong="She can speaks English."
              correct="She can speak English."
            />

            <div style={{ height: "12px" }} />

            <Mistake
              wrong="He can plays football."
              correct="He can play football."
            />

            <div style={{ height: "12px" }} />

            <Mistake
              wrong="She cans swim."
              correct="She can swim."
            />
          </div>
        </section>

        {/* Affirmative */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Affirmative Sentences</h2>

          <p style={paragraphStyle}>
            The structure is the same with all subjects.
          </p>

          <div
            style={{
              overflowX: "auto",
              marginTop: "20px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "600px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Subject</th>
                  <th style={cellStyle}>Can</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>I</td>
                  <td style={cellStyle}>can</td>
                  <td style={cellStyle}>I can swim.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>You</td>
                  <td style={cellStyle}>can</td>
                  <td style={cellStyle}>You can drive.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>He / She / It</td>
                  <td style={cellStyle}>can</td>
                  <td style={cellStyle}>She can cook.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>We</td>
                  <td style={cellStyle}>can</td>
                  <td style={cellStyle}>We can help.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>They</td>
                  <td style={cellStyle}>can</td>
                  <td style={cellStyle}>They can play.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Negative */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Negative Sentences</h2>

          <p style={paragraphStyle}>
            The negative form of <strong>can</strong> is{" "}
            <strong>cannot</strong> or the more common contraction{" "}
            <strong>can&apos;t</strong>.
          </p>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              marginTop: "20px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Subject + can&apos;t + base verb
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="I can't swim." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He can't drive." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="We can't come today." />
          </div>
        </section>

        {/* Cannot */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Cannot or Can&apos;t?</h2>

          <p style={paragraphStyle}>
            <strong>Cannot</strong> and <strong>can&apos;t</strong> have the
            same meaning.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I cannot swim." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="I can't swim." />
          </div>

          <Note text="Can’t is very common in everyday spoken English." />
        </section>

        {/* Questions */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Questions with Can</h2>

          <p style={paragraphStyle}>
            To make a question, put <strong>can</strong> before the subject.
          </p>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              marginTop: "20px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Can + subject + base verb?
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Can you swim?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Can she speak English?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Can they help us?" />
          </div>
        </section>

        {/* Short answers */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Short Answers</h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "18px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "600px",
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
                  <td style={cellStyle}>Can you swim?</td>
                  <td style={cellStyle}>Yes, I can.</td>
                  <td style={cellStyle}>No, I can&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Can she drive?</td>
                  <td style={cellStyle}>Yes, she can.</td>
                  <td style={cellStyle}>No, she can&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Can they come?</td>
                  <td style={cellStyle}>Yes, they can.</td>
                  <td style={cellStyle}>No, they can&apos;t.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ability */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Talking About Ability</h2>

          <p style={paragraphStyle}>
            We commonly use <strong>can</strong> to talk about skills and
            abilities.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="I can speak three languages." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She can play the piano." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="He can cook very well." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="They can dance." />
          </div>
        </section>

        {/* Permission */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Asking for Permission</h2>

          <p style={paragraphStyle}>
            We can use <strong>Can I...?</strong> to ask for permission in
            everyday English.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="Can I open the window?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Can I use your phone?" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Can I sit here?" />
          </div>
        </section>

        {/* Possibility */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Talking About Possibility</h2>

          <p style={paragraphStyle}>
            <strong>Can</strong> can also describe something that is possible.
          </p>

          <div style={{ marginTop: "18px" }}>
            <ExampleBox text="We can meet tomorrow." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="You can buy tickets online." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="It can be very cold here in winter." />
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
              wrong="She can speaks English."
              correct="She can speak English."
            />

            <Mistake
              wrong="I can to swim."
              correct="I can swim."
            />

            <Mistake
              wrong="Do you can swim?"
              correct="Can you swim?"
            />

            <Mistake
              wrong="He doesn't can drive."
              correct="He can't drive."
            />

            <Mistake
              wrong="Can she plays tennis?"
              correct="Can she play tennis?"
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
            <Sentence text="I can speak English." />
            <Sentence text="She can play tennis." />
            <Sentence text="He can't swim." />
            <Sentence text="We can help you." />
            <Sentence text="They can't come today." />
            <Sentence text="Can you drive?" />
            <Sentence text="Can I use your phone?" />
            <Sentence text="Yes, you can." />
            <Sentence text="No, you can't." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with <strong>can</strong> or{" "}
            <strong>can&apos;t</strong>.
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
            href="/resources/grammar/a1/imperatives"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Imperatives →
          </Link>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#f7f9fc",
        borderRadius: "14px",
        padding: "20px",
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
          color: "#5b6472",
          lineHeight: 1.7,
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
        marginTop: "18px",
        padding: "15px 18px",
        borderRadius: "12px",
        background: "#eef4ff",
        border: "1px solid #dce6f5",
        color: "#2456a6",
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