"use client";

import Link from "next/link";

const practice = [
  {
    question: "She ___ to work every day.",
    answer: "goes",
  },
  {
    question: "I ___ coffee every morning.",
    answer: "drink",
  },
  {
    question: "They ___ football on Sundays.",
    answer: "play",
  },
  {
    question: "He ___ English very well.",
    answer: "speaks",
  },
  {
    question: "We ___ in Turkey.",
    answer: "live",
  },
  {
    question: "My brother ___ TV every evening.",
    answer: "watches",
  },
  {
    question: "You ___ very fast.",
    answer: "run",
  },
  {
    question: "The sun ___ in the east.",
    answer: "rises",
  },
];

export default function PresentSimplePage() {
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
            Present Simple
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
            Learn how to use the present simple to talk about habits,
            routines, facts, and things that happen regularly.
          </p>
        </section>

        {/* What is Present Simple? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Is the Present Simple?</h2>

          <p style={paragraphStyle}>
            The <strong>present simple</strong> is one of the most common
            tenses in English.
          </p>

          <p style={paragraphStyle}>
            We use it to talk about things that happen regularly, habits,
            routines, facts, and situations that are generally true.
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
              title="Habits"
              text="I drink coffee every morning."
            />

            <InfoBox
              title="Routines"
              text="She goes to work at 8."
            />

            <InfoBox
              title="Facts"
              text="Water boils at 100°C."
            />

            <InfoBox
              title="General Truths"
              text="The sun rises in the east."
            />
          </div>
        </section>

        {/* Basic Structure */}
        <section style={blueSectionStyle}>
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
              title="I / You / We / They"
              structure="Subject + base verb"
              example="I work every day."
            />

            <StructureBox
              title="He / She / It"
              structure="Subject + verb + s/es"
              example="She works every day."
            />
          </div>
        </section>

        {/* Affirmative */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Affirmative Sentences</h2>

          <p style={paragraphStyle}>
            In affirmative sentences, use the base form of the verb with{" "}
            <strong>I, you, we,</strong> and <strong>they</strong>.
          </p>

          <p style={paragraphStyle}>
            With <strong>he, she,</strong> and <strong>it</strong>, the verb
            usually takes <strong>-s</strong> or <strong>-es</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I work in an office." />

            <ExampleBox text="You speak English." />

            <ExampleBox text="We live in Turkey." />

            <ExampleBox text="They play football." />

            <ExampleBox text="He works in a bank." />

            <ExampleBox text="She speaks English." />

            <ExampleBox text="It looks beautiful." />
          </div>
        </section>

        {/* Third Person */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>He / She / It: Adding -s or -es</h2>

          <p style={paragraphStyle}>
            With <strong>he, she,</strong> and <strong>it</strong>, we usually
            add <strong>-s</strong> to the verb.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="work → works" />

            <ExampleBox text="play → plays" />

            <ExampleBox text="read → reads" />

            <ExampleBox text="eat → eats" />
          </div>

          <p
            style={{
              ...paragraphStyle,
              marginTop: "22px",
            }}
          >
            Some verbs take <strong>-es</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "15px",
            }}
          >
            <ExampleBox text="go → goes" />

            <ExampleBox text="watch → watches" />

            <ExampleBox text="wash → washes" />

            <ExampleBox text="fix → fixes" />
          </div>
        </section>

        {/* Spelling Rules */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Spelling Rules for He / She / It</h2>

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
                  <th style={cellStyle}>Verb</th>
                  <th style={cellStyle}>Form</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>work</td>
                  <td style={cellStyle}>works</td>
                  <td style={cellStyle}>He works here.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>go</td>
                  <td style={cellStyle}>goes</td>
                  <td style={cellStyle}>She goes to school.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>watch</td>
                  <td style={cellStyle}>watches</td>
                  <td style={cellStyle}>He watches TV.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>study</td>
                  <td style={cellStyle}>studies</td>
                  <td style={cellStyle}>She studies English.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>have</td>
                  <td style={cellStyle}>has</td>
                  <td style={cellStyle}>He has a car.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Negative */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Negative Sentences</h2>

          <p style={paragraphStyle}>
            Use <strong>do not</strong> or <strong>does not</strong> to make
            negative sentences.
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
            <InfoBox
              title="I / You / We / They"
              text="do not (don't) + base verb"
            />

            <InfoBox
              title="He / She / It"
              text="does not (doesn't) + base verb"
            />
          </div>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I don't drink coffee." />

            <ExampleBox text="They don't work on Sundays." />

            <ExampleBox text="He doesn't play football." />

            <ExampleBox text="She doesn't live here." />
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
          <h2 style={headingStyle}>
            Important Rule: No -s After Does
          </h2>

          <p style={paragraphStyle}>
            After <strong>does</strong> or <strong>doesn&apos;t</strong>, use
            the <strong>base form</strong> of the verb.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Mistake
              wrong="She doesn't works here."
              correct="She doesn't work here."
            />

            <Mistake
              wrong="He doesn't plays football."
              correct="He doesn't play football."
            />

            <Mistake
              wrong="Does she speaks English?"
              correct="Does she speak English?"
            />
          </div>
        </section>

        {/* Questions */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Questions</h2>

          <p style={paragraphStyle}>
            Use <strong>do</strong> with I, you, we, and they.
          </p>

          <p style={paragraphStyle}>
            Use <strong>does</strong> with he, she, and it.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="Do you speak English?" />

            <ExampleBox text="Do they live in Turkey?" />

            <ExampleBox text="Do we have class today?" />

            <ExampleBox text="Does he work here?" />

            <ExampleBox text="Does she like coffee?" />

            <ExampleBox text="Does it work?" />
          </div>
        </section>

        {/* Short Answers */}
        <section style={blueSectionStyle}>
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
                  <td style={cellStyle}>Do you work here?</td>
                  <td style={cellStyle}>Yes, I do.</td>
                  <td style={cellStyle}>No, I don&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Does she speak English?</td>
                  <td style={cellStyle}>Yes, she does.</td>
                  <td style={cellStyle}>No, she doesn&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Do they live here?</td>
                  <td style={cellStyle}>Yes, they do.</td>
                  <td style={cellStyle}>No, they don&apos;t.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>Does he play football?</td>
                  <td style={cellStyle}>Yes, he does.</td>
                  <td style={cellStyle}>No, he doesn&apos;t.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequency */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Present Simple with Frequency</h2>

          <p style={paragraphStyle}>
            The present simple is often used with words and expressions that
            show how often something happens.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <InfoBox title="Always" text="I always get up early." />

            <InfoBox title="Usually" text="She usually walks to work." />

            <InfoBox title="Often" text="We often eat together." />

            <InfoBox title="Sometimes" text="They sometimes play tennis." />

            <InfoBox title="Never" text="He never drinks coffee." />
          </div>
        </section>

        {/* Everyday routines */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Talking About Daily Routines</h2>

          <p style={paragraphStyle}>
            We commonly use the present simple to describe what we do every
            day.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="I wake up at 7 o'clock." />

            <ExampleBox text="I have breakfast at 8." />

            <ExampleBox text="I go to work at 9." />

            <ExampleBox text="She finishes work at 5." />

            <ExampleBox text="He goes home in the evening." />

            <ExampleBox text="We have dinner together." />
          </div>
        </section>

        {/* Facts */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Facts and General Truths</h2>

          <p style={paragraphStyle}>
            We use the present simple for facts and things that are generally
            true.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="The Earth goes around the Sun." />

            <ExampleBox text="Water freezes at 0°C." />

            <ExampleBox text="Birds fly." />

            <ExampleBox text="Dogs need water." />

            <ExampleBox text="The sun rises in the east." />
          </div>
        </section>

        {/* Stative */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Common Present Simple Verbs</h2>

          <p style={paragraphStyle}>
            Many common verbs are frequently used in the present simple.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <ExampleBox text="like" />
            <ExampleBox text="love" />
            <ExampleBox text="want" />
            <ExampleBox text="need" />
            <ExampleBox text="know" />
            <ExampleBox text="understand" />
            <ExampleBox text="live" />
            <ExampleBox text="work" />
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
              wrong="He work every day."
              correct="He works every day."
            />

            <Mistake
              wrong="She go to school."
              correct="She goes to school."
            />

            <Mistake
              wrong="They goes to work."
              correct="They go to work."
            />

            <Mistake
              wrong="I doesn't like coffee."
              correct="I don't like coffee."
            />

            <Mistake
              wrong="He don't play football."
              correct="He doesn't play football."
            />

            <Mistake
              wrong="Does she likes English?"
              correct="Does she like English?"
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
            <Sentence text="I live in Turkey." />

            <Sentence text="You speak English very well." />

            <Sentence text="He works in a hospital." />

            <Sentence text="She studies English every day." />

            <Sentence text="We usually have dinner at 8." />

            <Sentence text="They play football on Sundays." />

            <Sentence text="My father watches TV every evening." />

            <Sentence text="The shop opens at 9 o'clock." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with the correct form of the verb.
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
            href="/resources/grammar/a1/adverbs-of-frequency"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Adverbs of Frequency →
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
        background: "#ffffff",
        borderRadius: "14px",
        padding: "22px",
        border: "1px solid #dce6f5",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px",
          color: "#2456a6",
          fontSize: "18px",
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
          background: "#f7f9fc",
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

const sentenceStyle: React.CSSProperties = {
  padding: "15px 18px",
  borderRadius: "12px",
  background: "#f7f9fc",
  lineHeight: 1.7,
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