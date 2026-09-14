"use client";

import Link from "next/link";

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: "10px",
  border: "1px solid #dbe2ea",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

export default function SecondConditionalPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        <Link
          href="/resources/grammar/b1"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← B1 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "25px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            B1 GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Second Conditional
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about imaginary, unlikely, or hypothetical
            situations and their possible results using the Second
            Conditional.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Understand the structure of the Second Conditional.</li>
            <li>Talk about imaginary or unlikely situations.</li>
            <li>Describe hypothetical results and consequences.</li>
            <li>Give advice using the Second Conditional.</li>
            <li>Use the Second Conditional in everyday conversations.</li>
          </ul>
        </section>

        {/* What Is Second Conditional */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Is the Second Conditional?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Second Conditional to talk about situations that are
            imaginary, unlikely, or not real in the present or future.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If I had more money, I would travel more.</strong>
            </p>

            <p>
              → I do not have more money now. This is a hypothetical
              situation.
            </p>
          </div>
        </section>

        {/* Form */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Form
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            The basic structure is:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p style={{ fontFamily: "monospace" }}>
              If + Past Simple, would + base verb
            </p>

            <p>
              <strong>If I had a car, I would drive to work.</strong>
            </p>

            <p>
              <strong>If she lived here, we would see her more often.</strong>
            </p>

            <p>
              <strong>If they knew the answer, they would tell us.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The <strong>if-clause</strong> uses the Past Simple, while the
            result clause normally uses <strong>would + base verb</strong>.
          </p>
        </section>

        {/* Important Meaning */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. What Does It Mean?
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The Second Conditional does not usually describe a normal or
            realistic plan. It describes an imagined situation.
          </p>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              <strong>If I won the lottery, I would buy a house.</strong>
            </p>

            <p>
              → I have not won the lottery. I am imagining the situation.
            </p>

            <p>
              <strong>If I were taller, I would play basketball.</strong>
            </p>

            <p>
              → I am imagining a different situation about myself.
            </p>
          </div>
        </section>

        {/* Would */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Would + Base Verb
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>would</strong> before the base form of the verb in the
            result clause.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>If I had more time, I <strong>would learn</strong> Spanish.</p>

            <p>If she had a car, she <strong>would drive</strong> everywhere.</p>

            <p>If we lived near the sea, we <strong>would swim</strong> every
              day.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Do not add <strong>to</strong> after would.
          </p>

          <p>❌ I would to travel.</p>
          <p>✅ I would travel.</p>
        </section>

        {/* Were */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. If I Were You
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            In hypothetical situations, especially with <strong>I</strong> and
            <strong> he/she</strong>, English often uses <strong>were</strong>
            instead of <strong>was</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If I were you, I would talk to the manager.</strong>
            </p>

            <p>
              <strong>If she were here, she would help us.</strong>
            </p>

            <p>
              <strong>If he were more careful, he wouldn&apos;t make so many
              mistakes.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The expression <strong>If I were you...</strong> is especially
            common when giving advice.
          </p>
        </section>

        {/* Advice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Giving Advice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The Second Conditional is very useful for giving advice in a
            polite or hypothetical way.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If I were you, I would take a break.</strong>
            </p>

            <p>
              <strong>If I were you, I would talk to your teacher.</strong>
            </p>

            <p>
              <strong>If I were you, I wouldn&apos;t buy that car.</strong>
            </p>
          </div>
        </section>

        {/* Questions */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Questions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We can use Second Conditional questions to ask about imaginary
            situations.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>What would you do if you won the lottery?</p>

            <p>Where would you live if you could live anywhere?</p>

            <p>What would you buy if you had a million dollars?</p>

            <p>Who would you invite if you could meet any famous person?</p>
          </div>
        </section>

        {/* Negative */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Negative Forms
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We can make either part of the sentence negative.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              If I <strong>didn&apos;t have</strong> work, I would travel.
            </p>

            <p>
              If she had more money, she <strong>wouldn&apos;t worry</strong>
              about it.
            </p>

            <p>
              If we <strong>didn&apos;t live</strong> so far away, we would
              visit more often.
            </p>

            <p>
              If he had a car, he <strong>wouldn&apos;t take</strong> the bus.
            </p>
          </div>
        </section>

        {/* If Clause Position */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Two Possible Word Orders
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Like the First Conditional, the clauses can change position.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If I had more free time, I would learn another
              language.</strong>
            </p>

            <p>
              <strong>I would learn another language if I had more free
              time.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            When the sentence begins with <strong>if</strong>, use a comma
            between the two clauses.
          </p>
        </section>

        {/* Second vs First */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. First Conditional vs Second Conditional
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The most important difference is how realistic or likely the
            situation is.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "750px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    First Conditional
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Second Conditional
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    If I have time, I will call you.
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    If I had more time, I would travel.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Real or possible situation
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Imaginary or unlikely situation
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    If it rains, we will stay home.
                  </td>

                  <td style={{ padding: "14px" }}>
                    If I lived near the sea, I would swim every day.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Expressions */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Useful Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {[
              "If I were you...",
              "If I had the chance...",
              "If I could...",
              "If I won the lottery...",
              "If I lived somewhere else...",
              "What would you do if...?",
              "Where would you go if...?",
              "I would probably...",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
                  borderRadius: "10px",
                  padding: "15px",
                  fontWeight: 600,
                  color: "#173b78",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ If I would have more money, I would travel.
              <br />
              ✅ If I had more money, I would travel.
            </p>

            <p>
              ❌ If she would live here, she would be happier.
              <br />
              ✅ If she lived here, she would be happier.
            </p>

            <p>
              ❌ If I was you, I would talk to him.
              <br />
              ✅ If I were you, I would talk to him.
            </p>

            <p>
              ❌ If I had a car, I would to drive everywhere.
              <br />
              ✅ If I had a car, I would drive everywhere.
            </p>

            <p>
              ❌ If he had more time, he will travel more.
              <br />
              ✅ If he had more time, he would travel more.
            </p>
          </div>
        </section>

        {/* Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            13. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Complete the sentences with the correct form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              If I __________ (have) more money, I would buy a bigger house.
            </li>

            <li>
              If she __________ (live) closer, we would see her more often.
            </li>

            <li>
              If I were you, I __________ (talk) to your teacher.
            </li>

            <li>
              What would you do if you __________ (win) the lottery?
            </li>

            <li>
              If we __________ (have) a car, we would drive to work.
            </li>

            <li>
              If he __________ (be) more careful, he wouldn&apos;t make so many
              mistakes.
            </li>

            <li>
              If they had more free time, they __________ (travel) more.
            </li>

            <li>
              Where __________ you __________ (go) if you could travel
              anywhere?
            </li>

            <li>
              If I __________ (not / have) so much work, I would join you.
            </li>

            <li>
              If she were here, she __________ (help) us.
            </li>

            <li>
              If you could learn any skill, what __________ you __________
              (choose)?
            </li>

            <li>
              If I were you, I __________ (not / buy) that phone.
            </li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>
              1. had
              <br />
              2. lived
              <br />
              3. would talk
              <br />
              4. won
              <br />
              5. had
              <br />
              6. were
              <br />
              7. would travel
              <br />
              8. would / go
              <br />
              9. didn&apos;t have
              <br />
              10. would help
              <br />
              11. would / choose
              <br />
              12. wouldn&apos;t buy
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>
              Use the Second Conditional for imaginary, unlikely, or
              hypothetical situations.
            </li>

            <li>
              The basic structure is{" "}
              <strong>if + Past Simple, would + base verb</strong>.
            </li>

            <li>
              Do not normally use <strong>would</strong> in the if-clause.
            </li>

            <li>
              Use <strong>were</strong> in formal hypothetical expressions
              such as <strong>If I were you...</strong>.
            </li>

            <li>
              The Second Conditional is commonly used to give advice.
            </li>

            <li>
              Use the First Conditional for real or possible situations and
              the Second Conditional for more hypothetical situations.
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources/grammar/b1/first-conditional"
            style={buttonStyle}
          >
            ← First Conditional
          </Link>

          <Link
            href="/resources/grammar/b1/modal-obligation-advice"
            style={buttonStyle}
          >
            Next: Modal Verbs of Obligation &amp; Advice →
          </Link>
        </div>
      </div>
    </main>
  );
}