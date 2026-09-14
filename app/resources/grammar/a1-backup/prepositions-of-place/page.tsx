"use client";

import Link from "next/link";

const practice = [
  {
    question: "The book is ___ the table.",
    answer: "on",
  },
  {
    question: "The cat is ___ the box.",
    answer: "in",
  },
  {
    question: "The school is ___ the bank and the supermarket.",
    answer: "between",
  },
  {
    question: "The lamp is ___ the sofa.",
    answer: "next to",
  },
  {
    question: "The shoes are ___ the bed.",
    answer: "under",
  },
  {
    question: "The picture is ___ the wall.",
    answer: "on",
  },
];

export default function PrepositionsOfPlacePage() {
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
            Prepositions of Place
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
            Learn how to describe where people and things are using common
            prepositions of place.
          </p>
        </section>

        {/* What are prepositions of place? */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>What Are Prepositions of Place?</h2>

          <p style={paragraphStyle}>
            Prepositions of place tell us <strong>where</strong> a person,
            animal, or thing is located.
          </p>

          <p style={paragraphStyle}>
            They help us describe the position of something in relation to
            another person or thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The book is on the table." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The keys are in the bag." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The cat is under the chair." />
          </div>
        </section>

        {/* In */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>1. In</h2>

          <p style={paragraphStyle}>
            Use <strong>in</strong> when something is inside a place,
            container, room, or area.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The keys are in the bag." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is in the kitchen." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="There is some milk in the fridge." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The children are in the classroom." />
          </div>
        </section>

        {/* On */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. On</h2>

          <p style={paragraphStyle}>
            Use <strong>on</strong> when something is touching a surface.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The book is on the table." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The picture is on the wall." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The phone is on the desk." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="There is a cup on the table." />
          </div>
        </section>

        {/* Under */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>3. Under</h2>

          <p style={paragraphStyle}>
            Use <strong>under</strong> when something is below another thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The shoes are under the bed." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The cat is under the table." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The ball is under the chair." />
          </div>
        </section>

        {/* Above */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. Above</h2>

          <p style={paragraphStyle}>
            Use <strong>above</strong> when something is higher than another
            thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The clock is above the door." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The picture is above the sofa." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The shelf is above the desk." />
          </div>
        </section>

        {/* Below */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>5. Below</h2>

          <p style={paragraphStyle}>
            Use <strong>below</strong> when something is lower than another
            thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The picture is below the clock." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The shelf is below the window." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The temperature is below zero." />
          </div>
        </section>

        {/* Next to */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Next to</h2>

          <p style={paragraphStyle}>
            Use <strong>next to</strong> when two people or things are very
            close to each other.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The bank is next to the supermarket." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is sitting next to me." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The lamp is next to the sofa." />
          </div>
        </section>

        {/* Near */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>7. Near</h2>

          <p style={paragraphStyle}>
            Use <strong>near</strong> when something is close to another
            place or thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The hotel is near the airport." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="There is a café near my house." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The school is near the park." />
          </div>
        </section>

        {/* Between */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>8. Between</h2>

          <p style={paragraphStyle}>
            Use <strong>between</strong> when something is in the middle of
            two people or things.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The bank is between the school and the hotel." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="She is sitting between John and Mary." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The café is between two shops." />
          </div>
        </section>

        {/* Behind */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>9. Behind</h2>

          <p style={paragraphStyle}>
            Use <strong>behind</strong> when something is at the back of
            another thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The car is behind the house." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The garden is behind the building." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The boy is behind the door." />
          </div>
        </section>

        {/* In front of */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>10. In Front Of</h2>

          <p style={paragraphStyle}>
            Use <strong>in front of</strong> when something is positioned
            before another thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The car is in front of the house." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The teacher is standing in front of the class." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="There is a tree in front of the building." />
          </div>
        </section>

        {/* Opposite */}
        <section style={blueSectionStyle}>
          <h2 style={headingStyle}>11. Opposite</h2>

          <p style={paragraphStyle}>
            Use <strong>opposite</strong> when something is directly across
            from another place or thing.
          </p>

          <div style={{ marginTop: "20px" }}>
            <ExampleBox text="The bank is opposite the school." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="The restaurant is opposite the hotel." />
            <div style={{ height: "10px" }} />
            <ExampleBox text="My house is opposite the park." />
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
              wrong="The book is in the table."
              correct="The book is on the table."
            />

            <Mistake
              wrong="The shoes are on the bed."
              correct="The shoes are under the bed."
            />

            <Mistake
              wrong="The bank is next the school."
              correct="The bank is next to the school."
            />

            <Mistake
              wrong="She is between the two shops."
              correct="She is between the two shops."
            />

            <Mistake
              wrong="The car is in front the house."
              correct="The car is in front of the house."
            />
          </div>
        </section>

        {/* Quick comparison */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Comparison</h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "20px",
            }}
          >
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
                  <th style={cellStyle}>Meaning</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>in</td>
                  <td style={cellStyle}>inside</td>
                  <td style={cellStyle}>The keys are in the bag.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>on</td>
                  <td style={cellStyle}>on a surface</td>
                  <td style={cellStyle}>The phone is on the desk.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>under</td>
                  <td style={cellStyle}>below</td>
                  <td style={cellStyle}>The cat is under the chair.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>next to</td>
                  <td style={cellStyle}>very close</td>
                  <td style={cellStyle}>The bank is next to the hotel.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>between</td>
                  <td style={cellStyle}>in the middle of two</td>
                  <td style={cellStyle}>The café is between two shops.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>behind</td>
                  <td style={cellStyle}>at the back</td>
                  <td style={cellStyle}>The car is behind the house.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>in front of</td>
                  <td style={cellStyle}>before / ahead of</td>
                  <td style={cellStyle}>The car is in front of the house.</td>
                </tr>
              </tbody>
            </table>
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
            <Sentence text="The books are on the shelf." />
            <Sentence text="My phone is in my bag." />
            <Sentence text="The dog is under the table." />
            <Sentence text="The picture is above the sofa." />
            <Sentence text="The school is near my house." />
            <Sentence text="The bank is next to the supermarket." />
            <Sentence text="The shop is between the bank and the café." />
            <Sentence text="The car is behind the building." />
            <Sentence text="The teacher is in front of the students." />
            <Sentence text="The hotel is opposite the restaurant." />
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Quick Practice</h2>

          <p style={paragraphStyle}>
            Complete each sentence with the correct preposition.
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
            href="/resources/grammar/a1/prepositions-of-time"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: Prepositions of Time →
          </Link>
        </div>
      </div>
    </main>
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