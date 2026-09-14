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

export default function ProblemSolvingDecisionsPage() {
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
            B1 LISTENING & SPEAKING — LESSON 08
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Problem Solving & Decisions
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
            Learn how to describe problems, suggest solutions, make decisions,
            compare options, and explain your reasons clearly.
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
            <li>Describe common problems clearly.</li>
            <li>Suggest possible solutions.</li>
            <li>Ask for and give advice.</li>
            <li>Compare different options.</li>
            <li>Agree or disagree with a proposed solution.</li>
            <li>Explain why you made a particular decision.</li>
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
            Key Problem-Solving Vocabulary
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
              ["problem", "a difficult situation that needs to be dealt with"],
              ["solution", "an answer to a problem"],
              ["option", "one possible choice"],
              ["decision", "a choice made after thinking about different possibilities"],
              ["advice", "an opinion about what someone should do"],
              ["suggestion", "an idea about what someone could do"],
              ["advantage", "a positive point or benefit"],
              ["disadvantage", "a negative point or drawback"],
              ["risk", "the possibility that something bad may happen"],
              ["priority", "something that is more important than other things"],
              ["consequence", "a result of an action or decision"],
              ["compromise", "an agreement in which everyone accepts less than they originally wanted"],
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

        {/* Describing Problems */}
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
            Describing Problems
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Start by explaining what the problem is and how it affects the
            situation.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>We have a problem with the delivery.</p>
            <p>There seems to be an issue with the computer.</p>
            <p>We&apos;re having trouble finding a solution.</p>
            <p>The main problem is that we don&apos;t have enough time.</p>
            <p>Unfortunately, we can&apos;t finish the project today.</p>
            <p>This could cause serious problems for the team.</p>
            <p>We need to deal with this as soon as possible.</p>
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

          <p style={{ lineHeight: 1.8 }}>
            Read the conversation and pay attention to how the speakers
            identify a problem, discuss options, and make a decision.
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
              <strong>Emma:</strong> We need to talk about the presentation.
              We&apos;ve got a problem.
            </p>

            <p>
              <strong>David:</strong> What happened?
            </p>

            <p>
              <strong>Emma:</strong> The client has asked us to finish it two
              days earlier than expected.
            </p>

            <p>
              <strong>David:</strong> That&apos;s going to be difficult. How
              much work is left?
            </p>

            <p>
              <strong>Emma:</strong> We still need to prepare the final
              slides and check all the information.
            </p>

            <p>
              <strong>David:</strong> We have a few options. We could ask
              another colleague to help us.
            </p>

            <p>
              <strong>Emma:</strong> That could work. Another option would be
              to remove some of the less important slides.
            </p>

            <p>
              <strong>David:</strong> I think asking for help is better. The
              presentation is already quite short.
            </p>

            <p>
              <strong>Emma:</strong> I agree. I&apos;ll ask Sarah to help with
              the final slides.
            </p>

            <p>
              <strong>David:</strong> Great. I&apos;ll check the information
              while you talk to her.
            </p>
          </div>
        </section>

        {/* Listening Comprehension */}
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
            <li>What is the problem?</li>
            <li>When does the client want the presentation finished?</li>
            <li>What work still needs to be done?</li>
            <li>What are the two possible solutions?</li>
            <li>Which solution does David prefer?</li>
            <li>What decision do Emma and David make?</li>
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

            <p>
              1. They have to finish a presentation earlier than expected.
            </p>
            <p>2. Two days earlier than expected.</p>
            <p>
              3. They need to prepare the final slides and check the
              information.
            </p>
            <p>
              4. Ask another colleague for help or remove some less important
              slides.
            </p>
            <p>5. He prefers asking another colleague for help.</p>
            <p>
              6. Emma will ask Sarah to help, while David checks the
              information.
            </p>
          </div>
        </section>

        {/* Making Suggestions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Suggestions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use different expressions to suggest possible solutions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>We could ask someone for help.</p>
            <p>Why don&apos;t we change the plan?</p>
            <p>How about taking a short break?</p>
            <p>What about trying a different approach?</p>
            <p>Maybe we should speak to the manager.</p>
            <p>Perhaps we could postpone the meeting.</p>
            <p>It might be a good idea to check the information again.</p>
          </div>
        </section>

        {/* Giving Advice */}
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
            Asking for and Giving Advice
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Asking:</strong> What do you think I should do?
            </p>

            <p>
              <strong>Asking:</strong> What would you do in my situation?
            </p>

            <p>
              <strong>Asking:</strong> Do you think I should accept the offer?
            </p>

            <p>
              <strong>Giving:</strong> I think you should talk to your manager.
            </p>

            <p>
              <strong>Giving:</strong> If I were you, I&apos;d wait a little
              longer.
            </p>

            <p>
              <strong>Giving:</strong> You might want to consider another
              option.
            </p>

            <p>
              <strong>Giving:</strong> I&apos;d recommend checking the details
              first.
            </p>
          </div>
        </section>

        {/* Comparing Options */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Comparing Options
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Good decisions often require comparing the advantages and
            disadvantages of different choices.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Option A is cheaper, but it takes more time.</p>
            <p>Option B is more expensive, but it&apos;s faster.</p>
            <p>The main advantage is that it&apos;s easy to use.</p>
            <p>The biggest disadvantage is the cost.</p>
            <p>One benefit is that we can finish it quickly.</p>
            <p>The downside is that we would need more staff.</p>
            <p>On balance, I think the first option is better.</p>
          </div>
        </section>

        {/* Agreeing and Disagreeing */}
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
            Agreeing and Disagreeing
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
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
                Agreeing
              </h3>

              <p>I completely agree.</p>
              <p>That&apos;s a good point.</p>
              <p>I think you&apos;re right.</p>
              <p>That sounds like a good idea.</p>
              <p>I agree with you on that.</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Disagreeing Politely
              </h3>

              <p>I&apos;m not sure I agree.</p>
              <p>I see your point, but...</p>
              <p>I&apos;m not convinced that&apos;s the best option.</p>
              <p>I understand what you mean, but I think...</p>
              <p>That&apos;s one possibility, although...</p>
            </div>
          </div>
        </section>

        {/* Decision Making */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making a Decision
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When you make a decision, explain the choice and give a clear
            reason.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I think we should choose the second option.</p>
            <p>I&apos;ve decided to accept the offer.</p>
            <p>We decided to postpone the meeting.</p>
            <p>After considering all the options, I chose the first one.</p>
            <p>We chose this option because it was more practical.</p>
            <p>On balance, this seems to be the best solution.</p>
          </div>
        </section>

        {/* Useful Expressions */}
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
            Useful Problem-Solving Expressions
          </h2>

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
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Function
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Describe a problem", "We have an issue with..."],
                  ["Suggest", "We could..."],
                  ["Ask for advice", "What do you think I should do?"],
                  ["Give advice", "If I were you, I would..."],
                  ["Compare", "The main advantage is..."],
                  ["Agree", "That sounds like a good idea."],
                  ["Disagree politely", "I see your point, but..."],
                  ["Decide", "I think we should..."],
                  ["Explain a reason", "The main reason is that..."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
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

        {/* Speaking Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each situation. Describe the
            problem, suggest at least two solutions, and explain which one you
            would choose.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "You have an important exam tomorrow, but you have not studied enough.",
              "Your computer stops working before an important presentation.",
              "You have received two job offers and cannot decide which one to accept.",
              "Your friend wants to move to another city but is worried about finding a job.",
              "Your team has a project deadline, but one team member is absent.",
              "You want to improve your English, but you do not have much free time.",
            ].map((topic, index) => (
              <div
                key={topic}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Situation {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Challenge */}
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
            Discussion Challenge
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Imagine that your company has a limited budget and can choose only
            one of the following improvements.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>1. Buy new computers.</p>
            <p>2. Organize professional training.</p>
            <p>3. Improve the office environment.</p>
            <p>4. Hire an additional employee.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Discuss the advantages and disadvantages of each option. Then
            choose one and explain why you think it is the best decision.
          </p>
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
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You and your colleague need to
              organize an important event, but you have a limited budget.
            </p>

            <p>
              <strong>Student A:</strong> Explain the problem and suggest
              several possible solutions.
            </p>

            <p>
              <strong>Student B:</strong> Ask questions, compare the options,
              agree or disagree with the suggestions, and help make the final
              decision.
            </p>

            <p>
              Try to use expressions such as “We could...”, “What about...?”,
              “I see your point, but...”, and “On balance...”.
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
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ We should to change the plan.
              <br />
              ✅ We should change the plan.
            </p>

            <p>
              ❌ I suggest to ask Sarah.
              <br />
              ✅ I suggest asking Sarah.
            </p>

            <p>
              ❌ What do you think that I should do?
              <br />
              ✅ What do you think I should do?
            </p>

            <p>
              ❌ If I would be you, I would wait.
              <br />
              ✅ If I were you, I would wait.
            </p>

            <p>
              ❌ We decided postponing the meeting.
              <br />
              ✅ We decided to postpone the meeting.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>Complete: “We ______ ask another colleague for help.”</li>
            <li>Complete: “What ______ we change the plan?”</li>
            <li>Complete: “I suggest ______ the problem again.”</li>
            <li>Complete: “If I ______ you, I would wait.”</li>
            <li>What is the opposite of “advantage”?</li>
            <li>Give one expression for asking for advice.</li>
            <li>Give one polite expression for disagreeing.</li>
            <li>Suggest one solution to a problem at work.</li>
            <li>Give one reason for choosing an option.</li>
            <li>What is a compromise?</li>
          </ol>

          <div
            style={{
              background: "#fff",
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
              1. could
              <br />
              2. don&apos;t
              <br />
              3. discussing
              <br />
              4. were
              <br />
              5. Disadvantage.
              <br />
              6. “What do you think I should do?”
              <br />
              7. “I see your point, but...”
              <br />
              8. “We could ask someone for help.”
              <br />
              9. “I chose this option because it is more practical.”
              <br />
              10. An agreement in which everyone accepts less than they
              originally wanted.
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>Describe the problem before discussing solutions.</li>
            <li>Use “could”, “should”, and “why don&apos;t we” to make suggestions.</li>
            <li>Use “If I were you...” when giving advice.</li>
            <li>Compare advantages, disadvantages, risks, and benefits.</li>
            <li>Agree and disagree politely in discussions.</li>
            <li>Explain the reason behind your decision.</li>
            <li>Use compromise when people have different opinions.</li>
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
            href="/resources/listening-speaking/b1/work-education"
            style={buttonStyle}
          >
            ← Work & Education
          </Link>

          <Link
            href="/resources/listening-speaking/b1/technology-media"
            style={buttonStyle}
          >
            Next: Technology & Media →
          </Link>
        </div>
      </div>
    </main>
  );
}