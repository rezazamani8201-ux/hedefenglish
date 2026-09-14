"use client";

import Link from "next/link";

const practice = [
  {
    question: "___ the door, please. (close)",
    answer: "Close",
  },
  {
    question: "___ quiet, please.",
    answer: "Be",
  },
  {
    question: "___ your homework.",
    answer: "Do",
  },
  {
    question: "___ run in the classroom.",
    answer: "Don't",
  },
  {
    question: "___ careful!",
    answer: "Be",
  },
  {
    question: "___ touch that.",
    answer: "Don't",
  },
];

export default function ImperativesPage() {
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
            Imperatives
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
            Learn how to use imperatives to give instructions, commands,
            advice, and warnings in everyday English.
          </p>
        </section>

        {/* What are imperatives? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Imperatives?</h2>

          <p style={paragraphStyle}>
            We use <strong>imperatives</strong> when we want to tell someone
            what to do or what not to do.
          </p>

          <p style={paragraphStyle}>
            Imperatives are common when giving instructions, commands,
            directions, advice, and warnings.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Open the window." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Sit down." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Listen carefully." />
          </div>
        </section>

        {/* Basic structure */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Basic Structure</h2>

          <p style={paragraphStyle}>
            An affirmative imperative usually starts with the{" "}
            <strong>base form of the verb</strong>.
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
            Base Verb + ...
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Open the door." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Read the book." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Listen to me." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Come here." />
          </div>
        </section>

        {/* Positive imperatives */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Affirmative Imperatives</h2>

          <p style={paragraphStyle}>
            Use the base form of the verb to tell someone to do something.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <InfoCard
              title="Instruction"
              text="Open your book."
            />

            <InfoCard
              title="Command"
              text="Stop!"
            />

            <InfoCard
              title="Direction"
              text="Turn left."
            />

            <InfoCard
              title="Advice"
              text="Take a break."
            />
          </div>
        </section>

        {/* Negative imperatives */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Negative Imperatives</h2>

          <p style={paragraphStyle}>
            To tell someone not to do something, use{" "}
            <strong>Don&apos;t + base verb</strong>.
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
            Don&apos;t + Base Verb
          </div>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Don't open the door." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't touch that." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't run." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't worry." />
          </div>
        </section>

        {/* Be */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Imperatives with “Be”</h2>

          <p style={paragraphStyle}>
            We can use <strong>be</strong> in imperatives to describe a
            condition, behavior, or attitude.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Be careful." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Be quiet." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Be patient." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Be honest." />
          </div>
        </section>

        {/* Don't be */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Negative Imperatives with “Be”</h2>

          <p style={paragraphStyle}>
            The negative form is <strong>Don&apos;t be + adjective</strong>.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Don't be late." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't be angry." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't be noisy." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't be afraid." />
          </div>
        </section>

        {/* Please */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Using “Please”</h2>

          <p style={paragraphStyle}>
            Adding <strong>please</strong> makes an imperative more polite.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Please sit down." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Open the window, please." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Please wait here." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Please listen carefully." />
          </div>

          <Note text="Please can come at the beginning or the end of an imperative." />
        </section>

        {/* Instructions */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Giving Instructions</h2>

          <p style={paragraphStyle}>
            Imperatives are very common when explaining how to do something.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Open the box." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Take out the paper." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Write your name." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Press the button." />
          </div>
        </section>

        {/* Directions */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Giving Directions</h2>

          <p style={paragraphStyle}>
            We also use imperatives when giving directions.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Go straight." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Turn left." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Turn right." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Cross the street." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Stop at the traffic lights." />
          </div>
        </section>

        {/* Advice */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>Giving Advice</h2>

          <p style={paragraphStyle}>
            Imperatives can also be used to give simple advice.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Get some rest." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Drink more water." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Eat healthy food." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Take an umbrella." />
          </div>
        </section>

        {/* Warnings */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Warnings</h2>

          <p style={paragraphStyle}>
            Imperatives are often used for warnings and safety instructions.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Be careful!" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't touch that!" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Don't go there!" />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Watch out!" />
          </div>
        </section>

        {/* Let's */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>“Let&apos;s” for Suggestions</h2>

          <p style={paragraphStyle}>
            <strong>Let&apos;s + base verb</strong> is used to make a
            suggestion that includes the speaker and other people.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Let's go." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Let's study English." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Let's have lunch." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Let's watch a movie." />
          </div>

          <Note text="Let's means Let us in this type of suggestion." />
        </section>

        {/* Negative Let's */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Negative “Let&apos;s”</h2>

          <p style={paragraphStyle}>
            Use <strong>Let&apos;s not + base verb</strong> to make a negative
            suggestion.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="Let's not go outside." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Let's not talk about it." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="Let's not be late." />
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
              wrong="To open the door."
              correct="Open the door."
            />

            <Mistake
              wrong="Don't to touch that."
              correct="Don't touch that."
            />

            <Mistake
              wrong="Don't touching the machine."
              correct="Don't touch the machine."
            />

            <Mistake
              wrong="Be not late."
              correct="Don't be late."
            />

            <Mistake
              wrong="Please to sit down."
              correct="Please sit down."
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
            <Sentence text="Open your book." />
            <Sentence text="Listen carefully." />
            <Sentence text="Please sit down." />
            <Sentence text="Don't make noise." />
            <Sentence text="Be careful." />
            <Sentence text="Don't be late." />
            <Sentence text="Go straight." />
            <Sentence text="Turn left." />
            <Sentence text="Let's study together." />
            <Sentence text="Let's not worry about it." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with the correct imperative.
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
            href="/resources/grammar/a1/prepositions-of-place"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Prepositions of Place →
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