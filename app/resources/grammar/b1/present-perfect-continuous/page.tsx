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

export default function PresentPerfectContinuousPage() {
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
            Present Perfect Continuous
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use the Present Perfect Continuous to talk about
            actions and situations that have continued over a period of time.
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
            <li>Understand the form of the Present Perfect Continuous.</li>
            <li>Talk about actions that started in the past and continue now.</li>
            <li>Describe recent activities and their visible results.</li>
            <li>Use since and for correctly.</li>
            <li>Understand the difference between Present Perfect and Present Perfect Continuous.</li>
          </ul>
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
            1. Form
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            The Present Perfect Continuous is formed with{" "}
            <strong>have / has + been + verb-ing</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Affirmative:</strong>
            </p>

            <p style={{ fontFamily: "monospace" }}>
              Subject + have / has + been + verb-ing
            </p>

            <p>I have been studying English.</p>
            <p>She has been working all morning.</p>

            <p>
              <strong>Negative:</strong>
            </p>

            <p style={{ fontFamily: "monospace" }}>
              Subject + have / has + not + been + verb-ing
            </p>

            <p>I have not been sleeping well.</p>
            <p>He has not been feeling well.</p>

            <p>
              <strong>Question:</strong>
            </p>

            <p style={{ fontFamily: "monospace" }}>
              Have / Has + subject + been + verb-ing?
            </p>

            <p>Have you been studying?</p>
            <p>Has she been working?</p>
          </div>
        </section>

        {/* Use 1 */}
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
            2. Actions That Started in the Past and Continue Now
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Present Perfect Continuous when an activity started in
            the past and is still continuing now.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>I have been learning English for three years.</strong>
            </p>

            <p>
              → I started learning English three years ago and I am still
              learning it.
            </p>

            <p>
              <strong>She has been working here since January.</strong>
            </p>

            <p>
              → She started working here in January and she still works here.
            </p>

            <p>
              <strong>They have been living in Istanbul for six months.</strong>
            </p>
          </div>
        </section>

        {/* Use 2 */}
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
            3. Recent Activities and Present Results
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We can also use the Present Perfect Continuous for an activity that
            has recently stopped or is still happening, especially when there
            is evidence or a result in the present.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>You are out of breath. Have you been running?</strong>
            </p>

            <p>
              → The activity happened recently and there is a result now.
            </p>

            <p>
              <strong>Her hands are dirty because she has been gardening.</strong>
            </p>

            <p>
              <strong>It has been raining, so the streets are wet.</strong>
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
            4. Since and For
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Since and for are very common with the Present Perfect Continuous.
          </p>

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
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Since
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                Use <strong>since</strong> with a starting point.
              </p>

              <p>I have been studying since 8 o&apos;clock.</p>

              <p>She has been working here since June.</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                For
              </h3>

              <p style={{ lineHeight: 1.8 }}>
                Use <strong>for</strong> with a period of time.
              </p>

              <p>I have been studying for two hours.</p>

              <p>She has been working here for six months.</p>
            </div>
          </div>
        </section>

        {/* Present Perfect vs Continuous */}
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
            5. Present Perfect vs Present Perfect Continuous
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Both tenses can describe situations that started in the past. The
            difference is often the focus of the sentence.
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
                    Present Perfect Continuous
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
                    Focus on the result or completed amount.
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Focus on the activity or duration.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I have written five emails.
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I have been writing emails all morning.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    She has read three books this month.
                  </td>

                  <td style={{ padding: "14px" }}>
                    She has been reading all afternoon.
                  </td>
                </tr>
              </tbody>
            </table>
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
            6. Compare These Examples
          </h2>

          <div style={{ lineHeight: 2 }}>
            <p>
              <strong>I have cleaned the kitchen.</strong>
              <br />
              → The important thing is the result. The kitchen is clean.
            </p>

            <p>
              <strong>I have been cleaning the kitchen.</strong>
              <br />
              → The focus is on the activity. I may still be cleaning it.
            </p>

            <p>
              <strong>She has painted three rooms.</strong>
              <br />
              → We focus on the completed number of rooms.
            </p>

            <p>
              <strong>She has been painting the house all day.</strong>
              <br />
              → We focus on the activity and duration.
            </p>
          </div>
        </section>

        {/* Stative Verbs */}
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
            7. Stative Verbs
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Some verbs are not normally used in the continuous form. These
            include verbs such as know, believe, understand, want, need, and
            own.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              ❌ I have been knowing her for ten years.
            </p>

            <p>
              ✅ I have known her for ten years.
            </p>

            <p>
              ❌ She has been owning this car since 2020.
            </p>

            <p>
              ✅ She has owned this car since 2020.
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
            8. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I am studying English since two years.
              <br />
              ✅ I have been studying English for two years.
            </p>

            <p>
              ❌ She has been work here since May.
              <br />
              ✅ She has been working here since May.
            </p>

            <p>
              ❌ They have been lived here for five years.
              <br />
              ✅ They have been living here for five years.
            </p>

            <p>
              ❌ How long are you studying English?
              <br />
              ✅ How long have you been studying English?
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
            9. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Complete the sentences with the correct form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>I __________ (study) English for three years.</li>
            <li>She __________ (work) all morning.</li>
            <li>They __________ (live) here since 2021.</li>
            <li>Why are you tired? __________ you __________ (run)?</li>
            <li>He __________ (wait) for the bus for twenty minutes.</li>
            <li>It __________ (rain) since early morning.</li>
            <li>We __________ (learn) about this topic for two hours.</li>
            <li>She __________ (know) him for many years.</li>
            <li>My hands are dirty because I __________ (paint).</li>
            <li>How long __________ you __________ (work) here?</li>
            <li>They __________ (play) tennis all afternoon.</li>
            <li>I __________ (not / sleep) well recently.</li>
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
              1. have been studying
              <br />
              2. has been working
              <br />
              3. have been living
              <br />
              4. Have / been running
              <br />
              5. has been waiting
              <br />
              6. has been raining
              <br />
              7. have been learning
              <br />
              8. have known
              <br />
              9. have been painting
              <br />
              10. have / been working
              <br />
              11. have been playing
              <br />
              12. have not been sleeping
            </p>
          </div>
        </section>

        {/* Final Review */}
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
              Use <strong>have / has + been + verb-ing</strong>.
            </li>
            <li>
              Use it for activities that started in the past and continue now.
            </li>
            <li>
              Use it for recent activities when the present result is visible
              or important.
            </li>
            <li>
              Use <strong>since</strong> for a starting point.
            </li>
            <li>
              Use <strong>for</strong> for a period of time.
            </li>
            <li>
              Do not normally use stative verbs in the continuous form.
            </li>
            <li>
              Present Perfect often focuses on the result, while Present
              Perfect Continuous often focuses on the activity or duration.
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
            href="/resources/grammar/b1/present-perfect-vs-past-simple"
            style={buttonStyle}
          >
            ← Present Perfect vs Past Simple
          </Link>

          <Link
            href="/resources/grammar/b1/past-continuous-past-perfect"
            style={buttonStyle}
          >
            Next: Past Continuous & Past Perfect →
          </Link>
        </div>
      </div>
    </main>
  );
}