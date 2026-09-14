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

export default function ReportedSpeechPage() {
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
          style={{ ...buttonStyle, marginBottom: "30px" }}
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
            Reported Speech
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to report what someone said without repeating their exact
            words, using common reporting verbs and changes in tense, pronouns,
            and time expressions.
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
            <li>Understand the difference between direct and reported speech.</li>
            <li>Report statements using common reporting verbs.</li>
            <li>Understand common tense changes.</li>
            <li>Change pronouns and time expressions correctly.</li>
            <li>Report questions and basic requests.</li>
          </ul>
        </section>

        {/* Direct vs Reported */}
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
            1. Direct Speech vs Reported Speech
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            <strong>Direct speech</strong> gives the exact words that a person
            said. <strong>Reported speech</strong> gives the meaning of what
            the person said without using their exact words.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                lineHeight: 2,
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Direct Speech
              </h3>

              <p>
                Anna said, <strong>&quot;I am tired.&quot;</strong>
              </p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                lineHeight: 2,
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Reported Speech
              </h3>

              <p>
                Anna said that <strong>she was tired.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reporting Verbs */}
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
            2. Common Reporting Verbs
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The most common reporting verbs are <strong>say</strong> and{" "}
            <strong>tell</strong>.
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
              She <strong>said</strong> that she was busy.
            </p>

            <p>
              He <strong>told me</strong> that he was busy.
            </p>

            <p>
              They <strong>said</strong> they needed help.
            </p>

            <p>
              They <strong>told us</strong> they needed help.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            <strong>Tell</strong> is normally followed by a person:
          </p>

          <p>
            He told <strong>me</strong> the news.
          </p>

          <p>
            She told <strong>her friend</strong> the truth.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            We normally use <strong>say</strong> without a person immediately
            after it:
          </p>

          <p>
            He said that he was tired.
          </p>
        </section>

        {/* Tense Changes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Common Tense Changes
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When the reporting verb is in the past, the tense often moves one
            step back.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
                background: "#fff",
                borderRadius: "10px",
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
                    Direct Speech
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Reported Speech
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
                    Present Simple
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Past Simple
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Present Continuous
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Past Continuous
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Past Simple
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Past Perfect
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Present Perfect
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Past Perfect
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    will
                  </td>
                  <td style={{ padding: "14px" }}>would</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            4. Present Simple → Past Simple
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            A present simple statement often changes to the past simple in
            reported speech.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Direct: Tom said, &quot;I <strong>work</strong> here.&quot;
            </p>

            <p>
              Reported: Tom said that he <strong>worked</strong> there.
            </p>

            <p>
              Direct: Lisa said, &quot;I <strong>like</strong> coffee.&quot;
            </p>

            <p>
              Reported: Lisa said that she <strong>liked</strong> coffee.
            </p>
          </div>
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
            5. Present Continuous → Past Continuous
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "15px",
            }}
          >
            <p>
              Direct: Sara said, &quot;I <strong>am studying</strong>.&quot;
            </p>

            <p>
              Reported: Sara said that she <strong>was studying</strong>.
            </p>

            <p>
              Direct: They said, &quot;We <strong>are waiting</strong>.&quot;
            </p>

            <p>
              Reported: They said that they <strong>were waiting</strong>.
            </p>
          </div>
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
            6. Past Simple → Past Perfect
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            A past simple statement can change to the past perfect when we need
            to show that the original action happened before another past
            moment.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "15px",
            }}
          >
            <p>
              Direct: Mark said, &quot;I <strong>lost</strong> my keys.&quot;
            </p>

            <p>
              Reported: Mark said that he <strong>had lost</strong> his keys.
            </p>

            <p>
              Direct: She said, &quot;I <strong>visited</strong> Paris.&quot;
            </p>

            <p>
              Reported: She said that she <strong>had visited</strong> Paris.
            </p>
          </div>
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
            7. Present Perfect → Past Perfect
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "15px",
            }}
          >
            <p>
              Direct: Anna said, &quot;I <strong>have finished</strong> my
              homework.&quot;
            </p>

            <p>
              Reported: Anna said that she <strong>had finished</strong> her
              homework.
            </p>

            <p>
              Direct: He said, &quot;I <strong>have seen</strong> this
              movie.&quot;
            </p>

            <p>
              Reported: He said that he <strong>had seen</strong> that movie.
            </p>
          </div>
        </section>

        {/* Future */}
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
            8. will → would
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When <strong>will</strong> is reported after a past reporting verb,
            it often changes to <strong>would</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "15px",
            }}
          >
            <p>
              Direct: He said, &quot;I <strong>will call</strong> you.&quot;
            </p>

            <p>
              Reported: He said that he <strong>would call</strong> me.
            </p>

            <p>
              Direct: They said, &quot;We <strong>will help</strong>.&quot;
            </p>

            <p>
              Reported: They said that they <strong>would help</strong>.
            </p>
          </div>
        </section>

        {/* Pronouns */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Changing Pronouns
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Pronouns often change because the speaker and listener may be
            different in reported speech.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Direct: Mary said, &quot;<strong>I</strong> am tired.&quot;
            </p>

            <p>
              Reported: Mary said that <strong>she</strong> was tired.
            </p>

            <p>
              Direct: John said, &quot;<strong>My</strong> car is new.&quot;
            </p>

            <p>
              Reported: John said that <strong>his</strong> car was new.
            </p>

            <p>
              Direct: They said, &quot;<strong>We</strong> are ready.&quot;
            </p>

            <p>
              Reported: They said that <strong>they</strong> were ready.
            </p>
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
            10. Changing Time and Place Expressions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Time and place expressions may change depending on when and where
            the report is made.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
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
                    Direct
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Reported
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
                    today
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    that day
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    yesterday
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    the day before
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    tomorrow
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    the next day
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    here
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    there
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>this</td>
                  <td style={{ padding: "14px" }}>that</td>
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
            11. Reported Questions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Reported questions use normal statement word order. We do not use
            the question form inside the reported clause.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Direct: &quot;Where do you live?&quot;
            </p>

            <p>
              Reported: She asked me <strong>where I lived</strong>.
            </p>

            <p>
              Direct: &quot;Are you busy?&quot;
            </p>

            <p>
              Reported: He asked me <strong>if I was busy</strong>.
            </p>

            <p>
              Direct: &quot;Did you see Tom?&quot;
            </p>

            <p>
              Reported: She asked me <strong>if I had seen Tom</strong>.
            </p>
          </div>
        </section>

        {/* Yes No Questions */}
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
            12. Yes/No Questions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            For yes/no questions, we commonly use <strong>if</strong> or{" "}
            <strong>whether</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              &quot;Is he coming?&quot;
            </p>

            <p>
              → She asked <strong>if he was coming</strong>.
            </p>

            <p>
              &quot;Do you like coffee?&quot;
            </p>

            <p>
              → He asked <strong>whether I liked coffee</strong>.
            </p>
          </div>
        </section>

        {/* Requests */}
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
            13. Reported Requests
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We can report requests using verbs such as{" "}
            <strong>ask + object + to + verb</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Direct: &quot;Please open the window.&quot;
            </p>

            <p>
              Reported: She asked me <strong>to open</strong> the window.
            </p>

            <p>
              Direct: &quot;Please help me.&quot;
            </p>

            <p>
              Reported: He asked me <strong>to help</strong> him.
            </p>

            <p>
              Direct: &quot;Don&apos;t touch that.&quot;
            </p>

            <p>
              Reported: She told me <strong>not to touch</strong> that.
            </p>
          </div>
        </section>

        {/* When Backshift Is Not Necessary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. When Backshift Is Not Always Necessary
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Tense changes are common, but they are not always necessary. If the
            information is still true, the original tense may sometimes remain
            unchanged.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Direct: The teacher said, &quot;Water <strong>boils</strong> at
              100°C.&quot;
            </p>

            <p>
              Reported: The teacher said that water <strong>boils</strong> at
              100°C.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            This is especially common with facts, general truths, and
            information that is still valid.
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
            15. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ He told <strong>that</strong> he was tired.
              <br />
              ✅ He <strong>said that</strong> he was tired.
              <br />
              ✅ He <strong>told me that</strong> he was tired.
            </p>

            <p>
              ❌ She said me that she was busy.
              <br />
              ✅ She <strong>told me</strong> that she was busy.
            </p>

            <p>
              ❌ He asked me where <strong>did I live</strong>.
              <br />
              ✅ He asked me where <strong>I lived</strong>.
            </p>

            <p>
              ❌ She asked if <strong>was I ready</strong>.
              <br />
              ✅ She asked if <strong>I was ready</strong>.
            </p>

            <p>
              ❌ He told me <strong>to not go</strong>.
              <br />
              ✅ He told me <strong>not to go</strong>.
            </p>

            <p>
              ❌ She said she <strong>is</strong> tired.
              <br />
              ✅ She said she <strong>was</strong> tired.
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
              Tom said, &quot;I am tired.&quot; → Tom said that he __________
              tired. (was / is)
            </li>

            <li>
              Anna said, &quot;I have finished.&quot; → Anna said that she
              __________ finished. (had / has)
            </li>

            <li>
              He said, &quot;I will call you.&quot; → He said that he
              __________ call me. (would / will)
            </li>

            <li>
              Mary said, &quot;I work here.&quot; → Mary said that she
              __________ there. (worked / works)
            </li>

            <li>
              She asked, &quot;Where do you live?&quot; → She asked me where I
              __________. (lived / did I live)
            </li>

            <li>
              He asked, &quot;Are you ready?&quot; → He asked if I __________
              ready. (was / am)
            </li>

            <li>
              Sara said, &quot;I am studying.&quot; → Sara said that she
              __________ studying. (was / is)
            </li>

            <li>
              John said, &quot;I lost my phone.&quot; → John said that he
              __________ his phone. (had lost / lost)
            </li>

            <li>
              She said, &quot;Please help me.&quot; → She asked me __________
              her. (to help / helping)
            </li>

            <li>
              He said, &quot;Don&apos;t open the door.&quot; → He told me
              __________ the door. (not to open / don&apos;t open)
            </li>

            <li>
              He said, &quot;My car is new.&quot; → He said that __________ car
              was new. (his / my)
            </li>

            <li>
              They said, &quot;We are ready.&quot; → They said that __________
              were ready. (they / we)
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
              1. was
              <br />
              2. had
              <br />
              3. would
              <br />
              4. worked
              <br />
              5. lived
              <br />
              6. was
              <br />
              7. was
              <br />
              8. had lost
              <br />
              9. to help
              <br />
              10. not to open
              <br />
              11. his
              <br />
              12. they
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
              Reported speech tells us what someone said without repeating the
              exact words.
            </li>

            <li>
              <strong>Say</strong> is usually used without a person immediately
              after it.
            </li>

            <li>
              <strong>Tell</strong> normally needs a person:{" "}
              <strong>tell me, tell her, tell us</strong>.
            </li>

            <li>
              Present Simple often changes to Past Simple.
            </li>

            <li>
              Present Continuous often changes to Past Continuous.
            </li>

            <li>
              Past Simple and Present Perfect often change to Past Perfect when
              appropriate.
            </li>

            <li>
              <strong>will</strong> often changes to <strong>would</strong>.
            </li>

            <li>
              Pronouns and time expressions may need to change.
            </li>

            <li>
              Reported questions use normal statement word order.
            </li>

            <li>
              Requests commonly use{" "}
              <strong>ask/tell + object + to + verb</strong>.
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
            href="/resources/grammar/b1/passive-voice"
            style={buttonStyle}
          >
            ← Passive Voice
          </Link>

          <Link
            href="/resources/grammar/b1/relative-clauses"
            style={buttonStyle}
          >
            Next: Relative Clauses →
          </Link>
        </div>
      </div>
    </main>
  );
}