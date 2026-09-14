"use client";

import Link from "next/link";

const pluralRules = [
  {
    title: "Most nouns: add -s",
    rule: "For most nouns, simply add -s.",
    examples: ["book → books", "car → cars", "teacher → teachers"],
  },
  {
    title: "Nouns ending in -s, -ss, -sh, -ch, -x, -o",
    rule: "Many of these nouns take -es.",
    examples: ["bus → buses", "box → boxes", "watch → watches"],
  },
  {
    title: "Nouns ending in consonant + y",
    rule: "Change y to i and add -es.",
    examples: ["city → cities", "baby → babies", "family → families"],
  },
  {
    title: "Nouns ending in vowel + y",
    rule: "Keep the y and add -s.",
    examples: ["boy → boys", "toy → toys", "key → keys"],
  },
];

const irregularNouns = [
  ["man", "men"],
  ["woman", "women"],
  ["child", "children"],
  ["person", "people"],
  ["foot", "feet"],
  ["tooth", "teeth"],
  ["mouse", "mice"],
];

const practice = [
  {
    question: "one book → two ___",
    answer: "books",
  },
  {
    question: "one box → two ___",
    answer: "boxes",
  },
  {
    question: "one baby → two ___",
    answer: "babies",
  },
  {
    question: "one boy → two ___",
    answer: "boys",
  },
  {
    question: "one child → two ___",
    answer: "children",
  },
  {
    question: "one woman → two ___",
    answer: "women",
  },
  {
    question: "one watch → two ___",
    answer: "watches",
  },
  {
    question: "one family → two ___",
    answer: "families",
  },
];

export default function PluralNounsPage() {
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
            Plural Nouns
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
            Learn how to make nouns plural and talk about more than one
            person, animal, place, or thing.
          </p>
        </section>

        {/* What are plural nouns? */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>What Are Plural Nouns?</h2>

          <p style={paragraphStyle}>
            A plural noun refers to <strong>two or more</strong> people,
            animals, places, or things.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <ExampleBox
              title="Singular"
              text="one book"
            />

            <ExampleBox
              title="Plural"
              text="two books"
            />

            <ExampleBox
              title="Singular"
              text="one student"
            />

            <ExampleBox
              title="Plural"
              text="three students"
            />
          </div>
        </section>

        {/* Basic rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>The Basic Rule</h2>

          <p style={paragraphStyle}>
            For most nouns, make the plural by adding <strong>-s</strong>.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <RuleBox text="book → books" />

            <RuleBox text="car → cars" />

            <RuleBox text="student → students" />

            <RuleBox text="apple → apples" />
          </div>
        </section>

        {/* Rules */}
        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ ...headingStyle, marginBottom: "18px" }}>
            Plural Rules
          </h2>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {pluralRules.map((rule, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "28px",
                  border: "1px solid #e8edf4",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "#eef4ff",
                      color: "#2456a6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: "4px 0 8px",
                        color: "#173b78",
                        fontSize: "20px",
                      }}
                    >
                      {rule.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#5b6472",
                        lineHeight: 1.7,
                      }}
                    >
                      {rule.rule}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  {rule.examples.map((example) => (
                    <div
                      key={example}
                      style={{
                        padding: "14px 16px",
                        background: "#f7f9fc",
                        borderRadius: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -es */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Adding -es</h2>

          <p style={paragraphStyle}>
            Many nouns ending in <strong>-s, -ss, -sh, -ch, -x</strong> and
            some nouns ending in <strong>-o</strong> take <strong>-es</strong>
            in the plural.
          </p>

          <div
            style={{
              marginTop: "20px",
              overflowX: "auto",
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
                  <th style={cellStyle}>Singular</th>
                  <th style={cellStyle}>Plural</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>bus</td>
                  <td style={cellStyle}>buses</td>
                </tr>

                <tr>
                  <td style={cellStyle}>box</td>
                  <td style={cellStyle}>boxes</td>
                </tr>

                <tr>
                  <td style={cellStyle}>watch</td>
                  <td style={cellStyle}>watches</td>
                </tr>

                <tr>
                  <td style={cellStyle}>brush</td>
                  <td style={cellStyle}>brushes</td>
                </tr>

                <tr>
                  <td style={cellStyle}>class</td>
                  <td style={cellStyle}>classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Y rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Nouns Ending in -y</h2>

          <p style={paragraphStyle}>
            There are two important patterns for nouns ending in{" "}
            <strong>-y</strong>.
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
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Consonant + y
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                Change <strong>y</strong> to <strong>i</strong> and add{" "}
                <strong>-es</strong>.
              </p>

              <div style={examplePanelStyle}>
                baby → babies
                <br />
                city → cities
                <br />
                family → families
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#2456a6",
                }}
              >
                Vowel + y
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                Keep the <strong>y</strong> and add <strong>-s</strong>.
              </p>

              <div style={examplePanelStyle}>
                boy → boys
                <br />
                toy → toys
                <br />
                key → keys
              </div>
            </div>
          </div>
        </section>

        {/* Irregular nouns */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Irregular Plural Nouns</h2>

          <p style={paragraphStyle}>
            Some nouns do not follow the normal plural rules. You need to
            learn these forms individually.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                minWidth: "500px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#f3f6fb" }}>
                  <th style={cellStyle}>Singular</th>
                  <th style={cellStyle}>Plural</th>
                </tr>
              </thead>

              <tbody>
                {irregularNouns.map(([singular, plural]) => (
                  <tr key={singular}>
                    <td style={cellStyle}>{singular}</td>

                    <td
                      style={{
                        ...cellStyle,
                        fontWeight: 700,
                        color: "#2456a6",
                      }}
                    >
                      {plural}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* No change nouns */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Some Nouns Do Not Change</h2>

          <p style={paragraphStyle}>
            Some nouns have the same form in the singular and plural.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <RuleBox text="one sheep → two sheep" />

            <RuleBox text="one fish → two fish" />

            <RuleBox text="one deer → two deer" />
          </div>
        </section>

        {/* Singular vs plural */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px",
            border: "1px solid #e8edf4",
            marginBottom: "24px",
          }}
        >
          <h2 style={headingStyle}>Singular vs Plural</h2>

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
                  <th style={cellStyle}>Singular</th>
                  <th style={cellStyle}>Plural</th>
                  <th style={cellStyle}>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={cellStyle}>one book</td>
                  <td style={cellStyle}>two books</td>
                  <td style={cellStyle}>I have two books.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>one child</td>
                  <td style={cellStyle}>two children</td>
                  <td style={cellStyle}>They have two children.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>one city</td>
                  <td style={cellStyle}>three cities</td>
                  <td style={cellStyle}>I visited three cities.</td>
                </tr>

                <tr>
                  <td style={cellStyle}>one woman</td>
                  <td style={cellStyle}>two women</td>
                  <td style={cellStyle}>Two women are waiting.</td>
                </tr>
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
            <Note text="Plural nouns usually refer to two or more people, animals, places, or things." />

            <Note text="Most nouns become plural by adding -s." />

            <Note text="Many nouns ending in -s, -sh, -ch, -x take -es." />

            <Note text="For consonant + y, change y to i and add -es." />

            <Note text="For vowel + y, keep y and add -s." />

            <Note text="Some irregular nouns have completely different plural forms." />
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
              wrong="two book"
              correct="two books"
            />

            <Mistake
              wrong="three box"
              correct="three boxes"
            />

            <Mistake
              wrong="two citys"
              correct="two cities"
            />

            <Mistake
              wrong="two childs"
              correct="two children"
            />

            <Mistake
              wrong="three womans"
              correct="three women"
            />

            <Mistake
              wrong="two boyes"
              correct="two boys"
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
            <Sentence text="I have two brothers." />

            <Sentence text="There are three books on the table." />

            <Sentence text="She has two children." />

            <Sentence text="The students are in the classroom." />

            <Sentence text="We visited several cities." />

            <Sentence text="Those boxes are very heavy." />

            <Sentence text="The children are playing outside." />
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
            Write the correct plural form of each noun.
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
          <Link
            href="/resources/grammar/a1"
            style={navButtonStyle}
          >
            ← A1 Grammar
          </Link>

          <Link
            href="/resources/grammar/a1/this-that-these-those"
            style={{
              ...navButtonStyle,
              background: "#173b78",
              color: "#ffffff",
              borderColor: "#173b78",
            }}
          >
            Next: This / That / These / Those →
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
        background: "#f7f9fc",
        borderRadius: "12px",
        padding: "18px",
        border: "1px solid #edf0f5",
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

function RuleBox({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "16px 18px",
        background: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #dce6f5",
        fontWeight: 600,
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

const examplePanelStyle: React.CSSProperties = {
  padding: "15px 16px",
  background: "#f7f9fc",
  borderRadius: "10px",
  lineHeight: 1.9,
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