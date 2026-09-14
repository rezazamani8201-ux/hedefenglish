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

export default function FutureFormsPage() {
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
            Future Forms
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about the future using will, be going to, the
            Present Continuous, and the Present Simple.
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
            <li>Understand the main future forms in English.</li>
            <li>Use will for predictions, decisions, offers, and promises.</li>
            <li>Use be going to for plans and intentions.</li>
            <li>Use the Present Continuous for arranged future events.</li>
            <li>Use the Present Simple for schedules and timetables.</li>
            <li>Choose the correct future form in everyday situations.</li>
          </ul>
        </section>

        {/* Will */}
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
            1. Will
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use <strong>will</strong> for several different situations,
            especially when we make a decision at the moment of speaking.
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
              <strong>Form:</strong>
            </p>

            <p style={{ fontFamily: "monospace" }}>
              Subject + will + base verb
            </p>

            <p>I will call you later.</p>
            <p>She will help us.</p>
            <p>They will arrive tomorrow.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Decisions Made at the Moment
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            The phone is ringing. <strong>I&apos;ll answer it.</strong>
          </p>

          <h3 style={{ color: "#173b78" }}>
            Offers
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>I&apos;ll carry your bag.</strong>
          </p>

          <h3 style={{ color: "#173b78" }}>
            Promises
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>I&apos;ll call you tonight.</strong>
          </p>

          <h3 style={{ color: "#173b78" }}>
            Predictions
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>I think it will rain tomorrow.</strong>
          </p>
        </section>

        {/* Going To */}
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
            2. Be Going To
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use <strong>be going to</strong> when we have already decided
            to do something or when there is present evidence for a future
            prediction.
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
              <strong>Form:</strong>
            </p>

            <p style={{ fontFamily: "monospace" }}>
              Subject + am / is / are + going to + base verb
            </p>

            <p>I am going to study tonight.</p>
            <p>She is going to visit her parents.</p>
            <p>They are going to move to London.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Plans and Intentions
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            I&apos;m going to start a new course next month.
          </p>

          <h3 style={{ color: "#173b78" }}>
            Prediction Based on Evidence
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            Look at those clouds. It&apos;s going to rain.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Be careful! You&apos;re going to fall.
          </p>
        </section>

        {/* Present Continuous */}
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
            3. Present Continuous for Future Arrangements
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Present Continuous to talk about definite future
            arrangements, especially when a time and place have been arranged.
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
              <strong>I&apos;m meeting Sarah tomorrow.</strong>
            </p>

            <p>
              <strong>We&apos;re flying to Rome next Friday.</strong>
            </p>

            <p>
              <strong>She&apos;s seeing the doctor at 3 p.m.</strong>
            </p>

            <p>
              <strong>They&apos;re having dinner with us tonight.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            These are not just ideas. They are arranged events.
          </p>
        </section>

        {/* Present Simple */}
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
            4. Present Simple for Future Schedules
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Present Simple for official schedules, timetables,
            programs, and fixed events.
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
            <p>The train leaves at 8:30 tomorrow morning.</p>

            <p>The class starts at 10 a.m.</p>

            <p>The flight arrives at 6:45 p.m.</p>

            <p>The movie begins at 9 tonight.</p>
          </div>
        </section>

        {/* Comparison Table */}
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
            5. Which Future Form Should You Use?
          </h2>

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
                    Form
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Main Use
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Example
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
                    Will
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Predictions, offers, promises, instant decisions
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I think it will be a good day.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Going to
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Plans, intentions, evidence-based predictions
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I&apos;m going to study tonight.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Present Continuous
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Arranged future events
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I&apos;m meeting Tom tomorrow.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    Present Simple
                  </td>

                  <td style={{ padding: "14px" }}>
                    Schedules and timetables
                  </td>

                  <td style={{ padding: "14px" }}>
                    The train leaves at 9.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Will vs Going To */}
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
            6. Will vs Going To
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Compare these examples carefully.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>
                A: There&apos;s someone at the door.
              </strong>
              <br />
              <strong>B: I&apos;ll open it.</strong>
              <br />
              → The decision is made now.
            </p>

            <p>
              <strong>
                I&apos;m going to visit my parents this weekend.
              </strong>
              <br />
              → The plan already existed.
            </p>

            <p>
              <strong>
                Look at that car! It&apos;s going to crash.
              </strong>
              <br />
              → There is evidence now.
            </p>

            <p>
              <strong>
                I think electric cars will become more popular.
              </strong>
              <br />
              → This is a general prediction.
            </p>
          </div>
        </section>

        {/* Questions and Negatives */}
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
            7. Questions and Negative Forms
          </h2>

          <h3 style={{ color: "#173b78" }}>
            Will
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Will you come tomorrow?</strong>
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>I won&apos;t be late.</strong>
          </p>

          <h3 style={{ color: "#173b78" }}>
            Going To
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Are you going to study tonight?</strong>
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>She isn&apos;t going to travel this summer.</strong>
          </p>

          <h3 style={{ color: "#173b78" }}>
            Present Continuous
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Are you meeting John tomorrow?</strong>
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>We aren&apos;t working next Monday.</strong>
          </p>
        </section>

        {/* Future Time Expressions */}
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
            8. Useful Future Time Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {[
              "tomorrow",
              "tonight",
              "next week",
              "next month",
              "next year",
              "this weekend",
              "soon",
              "in the future",
              "later",
              "in two days",
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
            9. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I will going to call you.
              <br />
              ✅ I will call you.
            </p>

            <p>
              ❌ I am going call you.
              <br />
              ✅ I am going to call you.
            </p>

            <p>
              ❌ She going to travel tomorrow.
              <br />
              ✅ She is going to travel tomorrow.
            </p>

            <p>
              ❌ I will to help you.
              <br />
              ✅ I will help you.
            </p>

            <p>
              ❌ The train will leaves at 8.
              <br />
              ✅ The train leaves at 8.
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
            10. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the most appropriate future form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              A: The phone is ringing. B: I __________ (answer) it.
            </li>

            <li>
              We __________ (visit) our grandparents next weekend. We have
              already planned it.
            </li>

            <li>
              Look at those dark clouds! It __________ (rain).
            </li>

            <li>
              I think people __________ (use) more electric cars in the future.
            </li>

            <li>
              We __________ (meet) our teacher at 4 p.m. tomorrow.
            </li>

            <li>
              The train __________ (leave) at 7:30 tomorrow morning.
            </li>

            <li>
              Don&apos;t worry. I __________ (help) you with your homework.
            </li>

            <li>
              She __________ (start) a new job next month. She has already
              accepted the offer.
            </li>

            <li>
              What __________ you __________ (do) this evening? Do you have
              any plans?
            </li>

            <li>
              The flight __________ (arrive) at 9:15 p.m.
            </li>

            <li>
              I promise I __________ (not / tell) anyone.
            </li>

            <li>
              They __________ (have) dinner with us tonight. The table is
              already reserved.
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
              1. will answer
              <br />
              2. are going to visit
              <br />
              3. is going to rain
              <br />
              4. will use
              <br />
              5. are meeting
              <br />
              6. leaves
              <br />
              7. will help
              <br />
              8. is going to start
              <br />
              9. are / doing
              <br />
              10. arrives
              <br />
              11. will not tell
              <br />
              12. are having
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
              Use <strong>will</strong> for predictions, promises, offers, and
              decisions made at the moment.
            </li>

            <li>
              Use <strong>be going to</strong> for plans and intentions.
            </li>

            <li>
              Use <strong>be going to</strong> when a future prediction is
              based on present evidence.
            </li>

            <li>
              Use the <strong>Present Continuous</strong> for definite future
              arrangements.
            </li>

            <li>
              Use the <strong>Present Simple</strong> for schedules and
              timetables.
            </li>

            <li>
              Always consider the situation before choosing a future form.
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
            href="/resources/grammar/b1/past-continuous-past-perfect"
            style={buttonStyle}
          >
            ← Past Continuous &amp; Past Perfect
          </Link>

          <Link
            href="/resources/grammar/b1/first-conditional"
            style={buttonStyle}
          >
            Next: First Conditional →
          </Link>
        </div>
      </div>
    </main>
  );
}