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

export default function ModalPossibilityPage() {
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
            Modal Verbs of Possibility
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about things that may, might, or could happen,
            and how to express different levels of possibility in English.
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
            <li>Understand may, might, and could for possibility.</li>
            <li>Express strong and weak possibilities.</li>
            <li>Talk about possible situations in the present and future.</li>
            <li>Make negative statements about possibility.</li>
            <li>Use modal verbs naturally in everyday conversations.</li>
          </ul>
        </section>

        {/* What Is Possibility */}
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
            1. Talking About Possibility
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use modal verbs such as <strong>may</strong>,{" "}
            <strong>might</strong>, and <strong>could</strong> when we are not
            certain that something is true or will happen.
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
            <p>It <strong>may</strong> rain later.</p>
            <p>She <strong>might</strong> be at home.</p>
            <p>They <strong>could</strong> arrive late.</p>
          </div>
        </section>

        {/* Structure */}
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
            2. Basic Structure
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Modal verbs are followed by the <strong>base form</strong> of the
            main verb.
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
              Subject + may / might / could + base verb
            </p>

            <p>He <strong>may come</strong> tomorrow.</p>
            <p>She <strong>might call</strong> later.</p>
            <p>We <strong>could stay</strong> at home.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Do not use <strong>to</strong> after these modal verbs.
          </p>

          <p>
            ❌ She might <strong>to come</strong>.
          </p>

          <p>
            ✅ She might <strong>come</strong>.
          </p>
        </section>

        {/* May */}
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
            3. May — Possibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>May</strong> means that something is possible. It is often
            used when the speaker thinks there is a reasonable chance that
            something will happen.
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
            <p>It <strong>may rain</strong> this evening.</p>
            <p>She <strong>may come</strong> to the party.</p>
            <p>We <strong>may need</strong> more time.</p>
            <p>He <strong>may be</strong> busy right now.</p>
          </div>
        </section>

        {/* Might */}
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
            4. Might — Weaker Possibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Might</strong> is commonly used when something is possible
            but less certain.
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
            <p>I <strong>might go</strong> out tonight.</p>
            <p>She <strong>might be</strong> tired.</p>
            <p>They <strong>might arrive</strong> late.</p>
            <p>It <strong>might snow</strong> tomorrow.</p>
          </div>
        </section>

        {/* Could */}
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
            5. Could — Possible Situation
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Could</strong> can also express possibility. It often means
            that something is one possible option or outcome.
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
            <p>We <strong>could go</strong> to the cinema tonight.</p>
            <p>He <strong>could be</strong> at work.</p>
            <p>They <strong>could win</strong> the match.</p>
            <p>This <strong>could be</strong> the answer.</p>
          </div>
        </section>

        {/* May Might Could */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. May vs Might vs Could
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            In many everyday situations, these three verbs have very similar
            meanings. The exact level of certainty is often not very strict.
          </p>

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
                    Modal
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Typical Meaning
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
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    May
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Possible
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    She may come later.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Might
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Possible, often less certain
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    She might come later.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>Could</td>

                  <td style={{ padding: "14px" }}>
                    One possible option or result
                  </td>

                  <td style={{ padding: "14px" }}>
                    She could come later.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Present Possibility */}
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
            7. Possibility in the Present
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>may, might,</strong> or <strong>could</strong> to talk
            about something that is possibly true now.
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
            <p>John isn&apos;t answering. He <strong>may be</strong> busy.</p>

            <p>Sarah isn&apos;t here. She <strong>might be</strong> at home.</p>

            <p>Where is Tom? He <strong>could be</strong> in his office.</p>

            <p>They <strong>may be</strong> tired after the journey.</p>
          </div>
        </section>

        {/* Future Possibility */}
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
            8. Possibility in the Future
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            These modal verbs can also describe possible future events.
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
            <p>It <strong>may rain</strong> tomorrow.</p>

            <p>We <strong>might travel</strong> next month.</p>

            <p>She <strong>could get</strong> the job.</p>

            <p>They <strong>may move</strong> to another city.</p>
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
            9. Negative Possibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We can use <strong>may not</strong> and <strong>might not</strong>{" "}
            to say that something is possibly not true or may possibly not
            happen.
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
            <p>He <strong>may not come</strong> tonight.</p>

            <p>She <strong>might not know</strong> the answer.</p>

            <p>We <strong>may not have</strong> enough time.</p>

            <p>They <strong>might not agree</strong> with us.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Be careful with <strong>couldn&apos;t</strong>. It usually means
            that something was impossible or that someone was unable to do
            something, rather than simply expressing a weak possibility.
          </p>

          <p>It <strong>couldn&apos;t be</strong> true.</p>
        </section>

        {/* Must for Strong Deduction */}
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
            10. Must for Strong Possibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Must</strong> can express a strong logical conclusion. It
            means the speaker believes something is almost certainly true
            because of the evidence.
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
            <p>The lights are on. They <strong>must be</strong> at home.</p>

            <p>He has worked all day. He <strong>must be</strong> tired.</p>

            <p>She speaks excellent English. She <strong>must have</strong>{" "}
              lots of practice.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Here, <strong>must</strong> does not express an obligation. It
            expresses a strong conclusion.
          </p>
        </section>

        {/* Can't for Strong Impossibility */}
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
            11. Can&apos;t for Strong Impossibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We use <strong>can&apos;t</strong> when we believe something is
            impossible based on the evidence.
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
              That <strong>can&apos;t be</strong> John. He is in London.
            </p>

            <p>
              This <strong>can&apos;t be</strong> the right address.
            </p>

            <p>
              She <strong>can&apos;t be</strong> at work. The office is closed.
            </p>
          </div>
        </section>

        {/* Must vs May/Might/Could */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Levels of Certainty
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            These expressions can help us show how certain we are.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
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
                    Expression
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Meaning
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    must
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Very strong logical conclusion
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    may / could
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Possible
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    might
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Possible, often less certain
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    can&apos;t
                  </td>

                  <td style={{ padding: "14px" }}>
                    Strong logical impossibility
                  </td>
                </tr>
              </tbody>
            </table>
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
            13. Asking About Possibility
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We often use questions such as these when discussing possible
            situations:
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
            <p>Do you think it might rain?</p>

            <p>Could he be at home?</p>

            <p>Do you think she may come later?</p>

            <p>Could this be the right answer?</p>
          </div>
        </section>

        {/* Everyday Conversation */}
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
            14. Everyday Conversation
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Emma:</strong> Where is Daniel?
            </p>

            <p>
              <strong>Tom:</strong> I&apos;m not sure. He might be at home.
            </p>

            <p>
              <strong>Emma:</strong> He isn&apos;t answering his phone.
            </p>

            <p>
              <strong>Tom:</strong> He may be sleeping.
            </p>

            <p>
              <strong>Emma:</strong> Could he be at the gym?
            </p>

            <p>
              <strong>Tom:</strong> He could be. He usually goes there after
              work.
            </p>

            <p>
              <strong>Emma:</strong> Then he must be busy.
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
            15. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ She might <strong>to come</strong> later.
              <br />
              ✅ She might <strong>come</strong> later.
            </p>

            <p>
              ❌ He may <strong>comes</strong> tomorrow.
              <br />
              ✅ He may <strong>come</strong> tomorrow.
            </p>

            <p>
              ❌ It might <strong>raining</strong>.
              <br />
              ✅ It might <strong>rain</strong>.
            </p>

            <p>
              ❌ She could <strong>to be</strong> at work.
              <br />
              ✅ She could <strong>be</strong> at work.
            </p>

            <p>
              ❌ He may <strong>not comes</strong>.
              <br />
              ✅ He may <strong>not come</strong>.
            </p>

            <p>
              ❌ She must <strong>to be</strong> tired.
              <br />
              ✅ She must <strong>be</strong> tired.
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
            16. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the best answer.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              It __________ rain later. (may / mustn&apos;t)
            </li>

            <li>
              Sarah isn&apos;t answering. She __________ be asleep. (might /
              has to)
            </li>

            <li>
              We __________ go to the beach tomorrow if the weather is good.
              (could / mustn&apos;t)
            </li>

            <li>
              He has worked for twelve hours. He __________ be tired. (must /
              might not)
            </li>

            <li>
              This __________ be the right address. The number is completely
              different. (can&apos;t / may)
            </li>

            <li>
              They __________ not come to the meeting. They are very busy.
              (might / have to)
            </li>

            <li>
              She __________ be at home, but I&apos;m not sure. (could / must)
            </li>

            <li>
              The lights are on and her car is outside. She __________ be home.
              (must / might not)
            </li>

            <li>
              He __________ arrive late because of the traffic. (may / mustn&apos;t)
            </li>

            <li>
              You __________ be right. I need to check the information. (might /
              mustn&apos;t)
            </li>

            <li>
              They __________ not have enough time to finish the project. (may /
              must)
            </li>

            <li>
              That __________ be Anna. She is in another country this week.
              (can&apos;t / could)
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
              1. may
              <br />
              2. might
              <br />
              3. could
              <br />
              4. must
              <br />
              5. can&apos;t
              <br />
              6. might
              <br />
              7. could
              <br />
              8. must
              <br />
              9. may
              <br />
              10. might
              <br />
              11. may
              <br />
              12. can&apos;t
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
              <strong>may</strong>, <strong>might</strong>, and{" "}
              <strong>could</strong> express possibility.
            </li>

            <li>
              Modal verbs are followed by the <strong>base verb</strong>.
            </li>

            <li>
              <strong>might</strong> often suggests a less certain possibility,
              although the difference with may is often small.
            </li>

            <li>
              <strong>must</strong> can express a strong logical conclusion.
            </li>

            <li>
              <strong>can&apos;t</strong> can express strong logical
              impossibility.
            </li>

            <li>
              <strong>may not</strong> and <strong>might not</strong> express
              negative possibility.
            </li>

            <li>
              These forms can describe possibilities in the present and
              future.
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
            href="/resources/grammar/b1/modal-obligation-advice"
            style={buttonStyle}
          >
            ← Modal Verbs of Obligation &amp; Advice
          </Link>

          <Link
            href="/resources/grammar/b1/passive-voice"
            style={buttonStyle}
          >
            Next: Passive Voice →
          </Link>
        </div>
      </div>
    </main>
  );
}