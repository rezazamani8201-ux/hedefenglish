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

export default function PresentPerfectVsPastSimplePage() {
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
            Present Perfect vs Past Simple
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to choose between the Present Perfect and Past Simple
            when talking about past events, experiences, and completed actions.
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
            <li>Understand the difference between Present Perfect and Past Simple.</li>
            <li>Talk about life experiences.</li>
            <li>Describe completed actions at a specific time in the past.</li>
            <li>Use common time expressions correctly.</li>
            <li>Choose the correct tense in everyday conversations.</li>
          </ul>
        </section>

        {/* Present Perfect */}
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
            1. Present Perfect
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Present Perfect to talk about past actions that are
            connected to the present. The exact time is usually not important
            or is not mentioned.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <strong>Form:</strong>
            <p style={{ margin: "10px 0", fontFamily: "monospace" }}>
              Subject + have / has + past participle
            </p>

            <p style={{ margin: "8px 0" }}>
              I have visited London.
            </p>

            <p style={{ margin: "8px 0" }}>
              She has finished her homework.
            </p>
          </div>

          <h3 style={{ color: "#173b78", marginTop: "25px" }}>
            Common Uses
          </h3>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>
              <strong>Life experiences:</strong> I have been to Italy.
            </li>
            <li>
              <strong>Recent actions:</strong> She has just arrived.
            </li>
            <li>
              <strong>Actions with a present result:</strong> He has lost his keys.
            </li>
            <li>
              <strong>Unfinished time periods:</strong> I have seen her twice this week.
            </li>
          </ul>
        </section>

        {/* Past Simple */}
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
            2. Past Simple
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Past Simple for completed actions that happened at a
            finished or specific time in the past.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <strong>Form:</strong>
            <p style={{ margin: "10px 0", fontFamily: "monospace" }}>
              Subject + past form of the verb
            </p>

            <p style={{ margin: "8px 0" }}>
              I visited London last year.
            </p>

            <p style={{ margin: "8px 0" }}>
              She finished her homework yesterday.
            </p>
          </div>

          <h3 style={{ color: "#173b78", marginTop: "25px" }}>
            Common Time Expressions
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            {[
              "yesterday",
              "last week",
              "last year",
              "two days ago",
              "in 2020",
              "when I was young",
            ].map((item) => (
              <span
                key={item}
                style={{
                  background: "#eef4ff",
                  color: "#173b78",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Main Difference */}
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
            3. The Main Difference
          </h2>

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
                    Present Perfect
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Past Simple
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                    The exact time is not important.
                  </td>

                  <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                    The time is finished or specific.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                    I have visited Paris.
                  </td>

                  <td style={{ padding: "14px", borderBottom: "1px solid #eee" }}>
                    I visited Paris in 2022.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    She has lost her phone.
                  </td>

                  <td style={{ padding: "14px" }}>
                    She lost her phone yesterday.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Time Expressions */}
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
            4. Common Time Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Present Perfect
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                ever, never, already, yet, just, recently, so far, since, for,
                this week, today
              </p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Past Simple
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                yesterday, last night, last week, ago, in 2019, when I was a
                child
              </p>
            </div>
          </div>
        </section>

        {/* Examples */}
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
            5. Compare These Examples
          </h2>

          <div style={{ lineHeight: 2 }}>
            <p>
              <strong>I have seen that movie.</strong>
              <br />
              → The experience is important, but the time is not mentioned.
            </p>

            <p>
              <strong>I saw that movie last Saturday.</strong>
              <br />
              → The action happened at a specific finished time.
            </p>

            <p>
              <strong>She has gone to London.</strong>
              <br />
              → She is still in London or the result is relevant now.
            </p>

            <p>
              <strong>She went to London last month.</strong>
              <br />
              → The visit happened during a finished period.
            </p>

            <p>
              <strong>Have you ever eaten sushi?</strong>
              <br />
              → We are asking about life experience.
            </p>

            <p>
              <strong>Did you eat sushi yesterday?</strong>
              <br />
              → We are asking about a specific past time.
            </p>
          </div>
        </section>

        {/* Since and For */}
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
            6. Since and For
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Since and for are commonly used with the Present Perfect to talk
            about situations that started in the past and continue until now.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "18px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Since</strong> = the starting point
            </p>

            <p>
              I have lived here <strong>since 2020</strong>.
            </p>

            <p>
              She has worked here <strong>since Monday</strong>.
            </p>

            <p>
              <strong>For</strong> = the duration
            </p>

            <p>
              I have lived here <strong>for five years</strong>.
            </p>

            <p>
              She has worked here <strong>for three days</strong>.
            </p>
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
            7. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I have visited London last year.
              <br />
              ✅ I visited London last year.
            </p>

            <p>
              ❌ I went to Italy three times in my life.
              <br />
              ✅ I have been to Italy three times.
            </p>

            <p>
              ❌ She has finished school yesterday.
              <br />
              ✅ She finished school yesterday.
            </p>

            <p>
              ❌ Did you ever visit Spain?
              <br />
              ✅ Have you ever visited Spain?
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
            8. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>I __________ (visit) London three times.</li>
            <li>She __________ (buy) a new phone yesterday.</li>
            <li>We __________ (never / try) Indian food.</li>
            <li>They __________ (move) to Turkey in 2021.</li>
            <li>__________ you ever __________ (see) snow?</li>
            <li>He __________ (finish) his work an hour ago.</li>
            <li>I __________ (know) her for ten years.</li>
            <li>My parents __________ (live) here since 2018.</li>
            <li>We __________ (watch) that film last night.</li>
            <li>She __________ (just / arrive) at the office.</li>
            <li>He __________ (lose) his keys, so he cannot open the door.</li>
            <li>They __________ (go) to Paris last summer.</li>
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
              1. have visited
              <br />
              2. bought
              <br />
              3. have never tried
              <br />
              4. moved
              <br />
              5. Have / seen
              <br />
              6. finished
              <br />
              7. have known
              <br />
              8. have lived
              <br />
              9. watched
              <br />
              10. has just arrived
              <br />
              11. has lost
              <br />
              12. went
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
              Use <strong>Present Perfect</strong> when the past is connected
              to the present.
            </li>
            <li>
              Use <strong>Past Simple</strong> for completed actions at a
              finished or specific time.
            </li>
            <li>
              Use <strong>since</strong> for a starting point.
            </li>
            <li>
              Use <strong>for</strong> for a duration.
            </li>
            <li>
              Avoid Present Perfect with finished past-time expressions such
              as yesterday, last year, or two days ago.
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
          <Link href="/resources/grammar/b1" style={buttonStyle}>
            ← B1 Grammar
          </Link>

          <Link
            href="/resources/grammar/b1/present-perfect-continuous"
            style={buttonStyle}
          >
            Next: Present Perfect Continuous →
          </Link>
        </div>
      </div>
    </main>
  );
}