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

export default function WorkProfessionalCommunicationPage() {
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
        {/* Back */}
        <Link
          href="/resources/listening-speaking/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
            marginBottom: "25px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            B1 LISTENING & SPEAKING — LESSON 02
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Work & Professional Communication
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Practice useful English for the workplace, including talking about
            jobs, responsibilities, meetings, schedules, requests, and
            professional situations.
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
            <li>Talk about your job and responsibilities.</li>
            <li>Describe your typical working day.</li>
            <li>Discuss schedules, meetings, and deadlines.</li>
            <li>Make polite requests at work.</li>
            <li>Ask for clarification and confirm information.</li>
            <li>Participate in simple workplace conversations.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Workplace Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["deadline", "the latest time something must be finished"],
              ["schedule", "a plan showing when activities will happen"],
              ["meeting", "a planned discussion with other people"],
              ["colleague", "a person you work with"],
              ["manager", "a person who manages a team or department"],
              ["responsibility", "something you are expected to do"],
              ["task", "a piece of work that needs to be completed"],
              ["project", "a planned piece of work with a particular goal"],
              ["shift", "a period of time when you work"],
              ["appointment", "an arranged meeting at a particular time"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  {word}
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talking About Your Job */}
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
            Talking About Your Job
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use these patterns to describe your job and responsibilities.
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
              <strong>I work as a...</strong> → I work as a graphic designer.
            </p>

            <p>
              <strong>I work for...</strong> → I work for an international
              company.
            </p>

            <p>
              <strong>I&apos;m responsible for...</strong> → I&apos;m
              responsible for customer support.
            </p>

            <p>
              <strong>I usually...</strong> → I usually answer emails and
              attend meetings.
            </p>

            <p>
              <strong>My main job is to...</strong> → My main job is to manage
              the sales team.
            </p>
          </div>
        </section>

        {/* Listening Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation once for the main idea. Then read it again
            and identify the expressions used to talk about responsibilities,
            schedules, and meetings.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Emma:</strong> Hi, Daniel. Do you have a minute?
            </p>

            <p>
              <strong>Daniel:</strong> Sure. What&apos;s up?
            </p>

            <p>
              <strong>Emma:</strong> I wanted to ask about tomorrow&apos;s
              meeting. What time does it start?
            </p>

            <p>
              <strong>Daniel:</strong> It starts at ten, but we need to be
              there about fifteen minutes early.
            </p>

            <p>
              <strong>Emma:</strong> Okay. Is there anything I need to
              prepare?
            </p>

            <p>
              <strong>Daniel:</strong> Yes. Could you prepare the sales
              figures from last month?
            </p>

            <p>
              <strong>Emma:</strong> Of course. I&apos;ll have them ready
              before the meeting.
            </p>

            <p>
              <strong>Daniel:</strong> Great. Also, don&apos;t forget that the
              project deadline is Friday.
            </p>

            <p>
              <strong>Emma:</strong> Thanks for reminding me. I&apos;m almost
              finished.
            </p>

            <p>
              <strong>Daniel:</strong> Perfect. Let me know if you need any
              help.
            </p>

            <p>
              <strong>Emma:</strong> Thanks. I appreciate it.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
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
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>What are Emma and Daniel talking about?</li>
            <li>What time does the meeting start?</li>
            <li>What does Emma need to prepare?</li>
            <li>When is the project deadline?</li>
            <li>What does Daniel offer to do?</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. They are talking about tomorrow&apos;s meeting and work tasks.</p>
            <p>2. It starts at ten o&apos;clock.</p>
            <p>3. She needs to prepare the sales figures from last month.</p>
            <p>4. The deadline is Friday.</p>
            <p>5. Daniel offers to help if Emma needs it.</p>
          </div>
        </section>

        {/* Polite Requests */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Polite Requests
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            In professional situations, polite requests are often better than
            direct commands.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Can you send me the report?</strong>
            </p>

            <p>
              <strong>Could you send me the report?</strong>
            </p>

            <p>
              <strong>Would you mind sending me the report?</strong>
            </p>

            <p>
              <strong>Could you please check this file?</strong>
            </p>

            <p>
              <strong>Would it be possible to move the meeting?</strong>
            </p>
          </div>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.8,
              marginTop: "18px",
            }}
          >
            <strong>Could</strong> and <strong>Would you mind</strong> are
            especially useful when you want to sound more polite.
          </p>
        </section>

        {/* Meetings */}
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
            Useful Language for Meetings
          </h2>

          <div style={{ overflowX: "auto" }}>
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
                    Function
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Useful Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Start a meeting", "Shall we get started?"],
                  ["Give an opinion", "I think we should..."],
                  ["Agree", "I completely agree."],
                  ["Disagree politely", "I'm not sure I agree."],
                  ["Ask for clarification", "Could you explain that again?"],
                  ["Ask for an opinion", "What do you think?"],
                  ["Interrupt politely", "Sorry to interrupt, but..."],
                  ["Return to the topic", "Let's get back to the main point."],
                  ["Summarize", "So, to sum up..."],
                  ["End a meeting", "I think that's everything for today."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {expression}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Clarification */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Clarification
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            If you do not understand something at work, ask for clarification
            instead of pretending that you understand.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Could you explain that again?</p>
            <p>Sorry, could you repeat that?</p>
            <p>What exactly do you mean?</p>
            <p>Could you give me an example?</p>
            <p>Do you mean that we need to finish it today?</p>
            <p>Just to clarify, do you need this by Friday?</p>
          </div>
        </section>

        {/* Speaking Practice */}
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
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each situation. Try to use
            professional expressions from this lesson.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe your current job or a job you would like to have.",
              "Explain what you usually do during a working day.",
              "Tell a colleague that you need more time to finish a task.",
              "Ask a colleague to send you an important document.",
              "Explain that you cannot attend a meeting and suggest another time.",
              "Give your opinion about a new idea at work.",
            ].map((situation, index) => (
              <div
                key={situation}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Situation {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{situation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You and your colleague are preparing
              for an important project.
            </p>

            <p>
              Discuss the tasks, responsibilities, deadline, and schedule.
            </p>

            <p>
              One person should ask for information and the other should
              explain the plan.
            </p>

            <p>
              Try to use at least five expressions from this lesson.
            </p>
          </div>
        </section>

        {/* Professional vs Direct */}
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
            Sound More Professional
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ Send me the report.
              <br />
              ✅ Could you send me the report, please?
            </p>

            <p>
              ❌ Explain this.
              <br />
              ✅ Could you explain this again?
            </p>

            <p>
              ❌ I don&apos;t understand.
              <br />
              ✅ Sorry, could you clarify that?
            </p>

            <p>
              ❌ Change the meeting.
              <br />
              ✅ Would it be possible to move the meeting?
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I am working in a company.
              <br />
              ✅ I work for a company.
            </p>

            <p>
              ❌ I am responsible of sales.
              <br />
              ✅ I am responsible for sales.
            </p>

            <p>
              ❌ I have a meeting in Monday.
              <br />
              ✅ I have a meeting on Monday.
            </p>

            <p>
              ❌ Can you to send me the file?
              <br />
              ✅ Can you send me the file?
            </p>

            <p>
              ❌ I need that you finish it today.
              <br />
              ✅ I need you to finish it today.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
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
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              Complete: “I&apos;m responsible ______ customer support.”
            </li>

            <li>
              Make this request more polite: “Send me the report.”
            </li>

            <li>
              Ask a colleague to repeat something you did not understand.
            </li>

            <li>
              Complete: “The project deadline is ______ Friday.”
            </li>

            <li>
              Ask someone for their opinion during a meeting.
            </li>

            <li>
              Complete: “Could you ______ that again?”
            </li>

            <li>
              Say that you agree with an idea.
            </li>

            <li>
              Politely disagree with someone in a meeting.
            </li>

            <li>
              Ask whether it is possible to move a meeting.
            </li>

            <li>
              Complete: “I work ______ an international company.”
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
              Sample Answers
            </h3>

            <p>
              1. for
              <br />
              2. “Could you send me the report, please?”
              <br />
              3. “Sorry, could you repeat that?”
              <br />
              4. on
              <br />
              5. “What do you think?”
              <br />
              6. explain
              <br />
              7. “I completely agree.”
              <br />
              8. “I&apos;m not sure I agree.”
              <br />
              9. “Would it be possible to move the meeting?”
              <br />
              10. for
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
            <li>Use clear language to describe your job and responsibilities.</li>
            <li>Use polite requests in professional situations.</li>
            <li>Use workplace vocabulary such as deadline, task, meeting, and schedule.</li>
            <li>Ask for clarification when you do not understand something.</li>
            <li>Use useful expressions to participate in meetings.</li>
            <li>Give opinions and disagree politely.</li>
            <li>Practice speaking about realistic workplace situations.</li>
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
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/b1/everyday-conversations-small-talk"
            style={buttonStyle}
          >
            ← Everyday Conversations & Small Talk
          </Link>

          <Link
            href="/resources/listening-speaking/b1/travel-real-life-situations"
            style={buttonStyle}
          >
            Next: Travel & Real-Life Situations →
          </Link>
        </div>
      </div>
    </main>
  );
}