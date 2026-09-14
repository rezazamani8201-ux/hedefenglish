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

export default function PastContinuousPastPerfectPage() {
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
            Past Continuous &amp; Past Perfect
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to describe actions in progress in the past and events
            that happened before another past event.
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
            <li>Understand the form of the Past Continuous.</li>
            <li>Understand the form of the Past Perfect.</li>
            <li>Describe actions that were in progress at a specific time in the past.</li>
            <li>Show which past event happened first.</li>
            <li>Use these tenses together in stories and everyday situations.</li>
          </ul>
        </section>

        {/* Past Continuous */}
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
            1. Past Continuous
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Past Continuous to talk about an action that was in
            progress at a particular moment in the past.
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
              Subject + was / were + verb-ing
            </p>

            <p>I was studying at 8 p.m.</p>
            <p>They were watching TV.</p>
            <p>She was driving home.</p>
          </div>
        </section>

        {/* Past Continuous Uses */}
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
            2. Uses of the Past Continuous
          </h2>

          <h3 style={{ color: "#173b78" }}>
            Action in Progress at a Specific Time
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            At 10 o&apos;clock last night, I was studying.
          </p>

          <h3 style={{ color: "#173b78" }}>
            A Longer Action Interrupted by a Shorter Action
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            I was taking a shower when the phone rang.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            She was walking home when it started to rain.
          </p>

          <h3 style={{ color: "#173b78" }}>
            Two Actions Happening at the Same Time
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            While I was cooking, my brother was setting the table.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            They were talking while they were waiting for the bus.
          </p>
        </section>

        {/* Past Perfect */}
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
            3. Past Perfect
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the Past Perfect to show that one action happened before
            another action in the past.
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
              Subject + had + past participle
            </p>

            <p>I had finished my work.</p>
            <p>She had already left.</p>
            <p>They had eaten before we arrived.</p>
          </div>
        </section>

        {/* Past Perfect Timeline */}
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
            4. Understanding the Past Perfect
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Think of the Past Perfect as the &quot;past before the past.&quot;
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
              <strong>First:</strong> I finished dinner.
            </p>

            <p>
              <strong>Second:</strong> I went for a walk.
            </p>

            <p>
              Combined:
              <br />
              I had finished dinner before I went for a walk.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The Past Perfect makes the order of events clear.
          </p>
        </section>

        {/* Together */}
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
            5. Past Continuous and Past Perfect Together
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            These two tenses can appear together when we describe a past
            situation with several events.
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
              <strong>
                I was waiting for the bus because I had missed my train.
              </strong>
            </p>

            <p>
              → <strong>was waiting</strong> = an action in progress.
              <br />
              → <strong>had missed</strong> = an earlier event.
            </p>

            <p>
              <strong>
                She was feeling tired because she had not slept well.
              </strong>
            </p>

            <p>
              <strong>
                They were looking for a restaurant because they had forgotten
                to make a reservation.
              </strong>
            </p>
          </div>
        </section>

        {/* Comparison */}
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
            6. Past Simple vs Past Continuous vs Past Perfect
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
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
                    Tense
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
                    Past Simple
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Completed past action
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I watched a movie.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Past Continuous
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Action in progress
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    I was watching a movie.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    Past Perfect
                  </td>

                  <td style={{ padding: "14px" }}>
                    Earlier past action
                  </td>

                  <td style={{ padding: "14px" }}>
                    I had watched the movie before dinner.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When and While */}
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
            7. When and While
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>When</strong> is often used with a shorter event that
            interrupts an action.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            I was sleeping <strong>when</strong> the alarm rang.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>While</strong> is often used with an action in progress.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>While</strong> I was sleeping, the alarm rang.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            They were talking <strong>while</strong> they were walking home.
          </p>
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
            8. Useful Time Expressions
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
              "when",
              "while",
              "before",
              "after",
              "already",
              "just",
              "by the time",
              "before that",
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

          <div style={{ marginTop: "25px", lineHeight: 1.9 }}>
            <p>
              <strong>By the time</strong> we arrived, the movie had started.
            </p>

            <p>
              She had already left before I called her.
            </p>

            <p>
              After they had finished dinner, they went home.
            </p>
          </div>
        </section>

        {/* Story Example */}
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
            9. Story Example
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              Last Saturday, I was driving to the city when I saw an accident.
              I stopped my car and called the police. The police arrived a few
              minutes later. Fortunately, someone had already called an
              ambulance.
            </p>

            <p>
              While we were waiting, I was talking to one of the drivers. He
              told me that he had been driving carefully before the accident
              happened.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Notice how different tenses help us organize the story and make
            the sequence of events clear.
          </p>
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
            10. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I was study when you called.
              <br />
              ✅ I was studying when you called.
            </p>

            <p>
              ❌ She had went home before I arrived.
              <br />
              ✅ She had gone home before I arrived.
            </p>

            <p>
              ❌ They were watch TV when I came.
              <br />
              ✅ They were watching TV when I came.
            </p>

            <p>
              ❌ When I arrived, he had already leave.
              <br />
              ✅ When I arrived, he had already left.
            </p>

            <p>
              ❌ I had finished my work when the phone was ringing.
              <br />
              ✅ I had finished my work when the phone rang.
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
            11. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Complete the sentences with the correct form of the verb.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>I __________ (watch) TV when my friend called.</li>
            <li>She __________ (finish) her homework before she went out.</li>
            <li>They __________ (sleep) when the alarm rang.</li>
            <li>By the time we arrived, the meeting __________ (start).</li>
            <li>He __________ (drive) home when he saw the accident.</li>
            <li>I was tired because I __________ (not / sleep) well.</li>
            <li>While Sarah __________ (cook), her brother was washing the dishes.</li>
            <li>We __________ (already / eat) when they invited us to dinner.</li>
            <li>What __________ you __________ (do) at 9 p.m. last night?</li>
            <li>When I opened the door, the children __________ (play) in the garden.</li>
            <li>She couldn&apos;t get into the house because she __________ (lose) her keys.</li>
            <li>While I was walking to work, it __________ (start) to rain.</li>
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
              1. was watching
              <br />
              2. had finished
              <br />
              3. were sleeping
              <br />
              4. had started
              <br />
              5. was driving
              <br />
              6. had not slept
              <br />
              7. was cooking
              <br />
              8. had already eaten
              <br />
              9. were / doing
              <br />
              10. were playing
              <br />
              11. had lost
              <br />
              12. started
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
              Use <strong>Past Continuous</strong> for an action in progress
              at a particular time in the past.
            </li>

            <li>
              Form the Past Continuous with{" "}
              <strong>was / were + verb-ing</strong>.
            </li>

            <li>
              Use <strong>Past Perfect</strong> for an action that happened
              before another past action.
            </li>

            <li>
              Form the Past Perfect with <strong>had + past participle</strong>.
            </li>

            <li>
              Use <strong>when</strong> for many short or interrupting events.
            </li>

            <li>
              Use <strong>while</strong> to connect actions happening in
              progress.
            </li>

            <li>
              Think of the Past Perfect as the <strong>past before the past</strong>.
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
            href="/resources/grammar/b1/present-perfect-continuous"
            style={buttonStyle}
          >
            ← Present Perfect Continuous
          </Link>

          <Link
            href="/resources/grammar/b1/future-forms"
            style={buttonStyle}
          >
            Next: Future Forms →
          </Link>
        </div>
      </div>
    </main>
  );
}