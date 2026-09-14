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

export default function EverydayConversationsSmallTalkPage() {
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
            B1 LISTENING & SPEAKING — LESSON 01
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Everyday Conversations & Small Talk
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
            Practice natural conversations, small talk, follow-up questions,
            and useful expressions for everyday social situations.
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
            <li>Start and maintain simple conversations.</li>
            <li>Make natural small talk with other people.</li>
            <li>Ask follow-up questions.</li>
            <li>Talk about familiar everyday topics.</li>
            <li>Show interest and respond naturally.</li>
            <li>End a conversation politely.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary & Expressions
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
              ["How's it going?", "How are things?"],
              ["What have you been up to?", "What have you been doing recently?"],
              ["Long time no see!", "I haven't seen you for a long time."],
              ["How have you been?", "How are you these days?"],
              ["That sounds great.", "A positive response to information."],
              ["Really?", "A natural way to show interest or surprise."],
              ["No way!", "A strong informal reaction to surprising information."],
              ["By the way...", "Used to introduce a new topic."],
              ["What about you?", "Used to ask the same question back."],
              ["It was nice talking to you.", "A polite way to end a conversation."],
            ].map(([expression, meaning]) => (
              <div
                key={expression}
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
                  {expression}
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

        {/* Listening Strategy */}
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
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation once for the general meaning. Then read it
            again and pay attention to the expressions used to keep the
            conversation going.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Anna:</strong> Hey, Mike! Long time no see. How have you
              been?
            </p>

            <p>
              <strong>Mike:</strong> Hi, Anna! I've been pretty good, thanks.
              How about you?
            </p>

            <p>
              <strong>Anna:</strong> I'm doing well. I've been quite busy with
              work lately.
            </p>

            <p>
              <strong>Mike:</strong> Really? What have you been working on?
            </p>

            <p>
              <strong>Anna:</strong> We're working on a new project. It's
              interesting, but it's taking a lot of time.
            </p>

            <p>
              <strong>Mike:</strong> That sounds exciting. Are you enjoying it?
            </p>

            <p>
              <strong>Anna:</strong> Yes, definitely. What about you? Anything
              new?
            </p>

            <p>
              <strong>Mike:</strong> Actually, I've started going to the gym
              again.
            </p>

            <p>
              <strong>Anna:</strong> No way! I thought you hated the gym.
            </p>

            <p>
              <strong>Mike:</strong> I used to, but I'm trying to be healthier.
            </p>

            <p>
              <strong>Anna:</strong> That's great. Anyway, I should get going.
              It was nice talking to you.
            </p>

            <p>
              <strong>Mike:</strong> You too. See you soon!
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>Why has Anna been busy?</li>
            <li>What is Mike doing to become healthier?</li>
            <li>Did Mike always enjoy going to the gym?</li>
            <li>How does Anna end the conversation?</li>
            <li>Which expression does Anna use to show surprise?</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. She has been busy with a new work project.</p>
            <p>2. He has started going to the gym again.</p>
            <p>3. No. He used to hate the gym.</p>
            <p>4. She says she should get going and says goodbye politely.</p>
            <p>5. “No way!”</p>
          </div>
        </section>

        {/* Small Talk Topics */}
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
            Small Talk Topics
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Small talk is usually about simple, familiar topics. Try asking
            open questions instead of questions that only require “yes” or
            “no”.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {[
              ["Work", "How's work going?"],
              ["Free Time", "What do you usually do at weekends?"],
              ["Travel", "Have you traveled anywhere recently?"],
              ["Food", "Have you tried any good restaurants lately?"],
              ["Movies", "Have you seen any good movies recently?"],
              ["Hobbies", "What do you like doing in your free time?"],
              ["Weather", "Beautiful day, isn't it?"],
              ["Plans", "What are you doing this weekend?"],
            ].map(([topic, question]) => (
              <div
                key={topic}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "18px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                    marginBottom: "8px",
                  }}
                >
                  {topic}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475467",
                    lineHeight: 1.6,
                  }}
                >
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Follow-up Questions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Follow-Up Questions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Good conversations continue because people ask follow-up
            questions.
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
              <strong>A:</strong> I've started learning Spanish.
            </p>

            <p>
              <strong>B:</strong> Really? <strong>Why did you decide to learn
              Spanish?</strong>
            </p>

            <p>
              <strong>A:</strong> I want to travel to Spain next year.
            </p>

            <p>
              <strong>B:</strong> That's great! <strong>Have you been to Spain
              before?</strong>
            </p>

            <p>
              <strong>A:</strong> No, I haven't.
            </p>

            <p>
              <strong>B:</strong> <strong>What places would you like to visit?</strong>
            </p>
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#667085",
              lineHeight: 1.8,
            }}
          >
            Useful follow-up starters: <strong>Really?</strong>{" "}
            <strong>Why?</strong> <strong>How?</strong>{" "}
            <strong>What about...?</strong> <strong>How often...?</strong>{" "}
            <strong>What was it like?</strong>
          </p>
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
            Speak for one to two minutes about each situation. Try to ask at
            least two follow-up questions.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "You meet an old friend you haven't seen for several months.",
              "You are sitting next to a new colleague during a coffee break.",
              "You meet someone at a party and want to start a conversation.",
              "You are waiting for a train and start talking to another passenger.",
              "You meet a neighbor and talk about your weekend plans.",
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

          <p style={{ lineHeight: 1.8 }}>
            Work with a partner. One person starts the conversation and the
            other person keeps it going with follow-up questions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You meet a new colleague on your
              first day at work.
            </p>

            <p>
              Talk about your job, hobbies, weekend plans, and something
              interesting you have done recently.
            </p>

            <p>
              Try to use at least five expressions from this lesson.
            </p>
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
            Useful Conversation Expressions
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
                    Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Start a conversation", "How's it going?"],
                  ["Show interest", "Really?"],
                  ["Show surprise", "No way!"],
                  ["Ask for more information", "What have you been up to?"],
                  ["Return the question", "What about you?"],
                  ["Change the topic", "By the way..."],
                  ["React positively", "That sounds great."],
                  ["Agree", "Exactly."],
                  ["Continue the conversation", "Tell me more about it."],
                  ["End the conversation", "It was nice talking to you."],
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
              ❌ What you are doing?
              <br />
              ✅ What are you doing?
            </p>

            <p>
              ❌ How you have been?
              <br />
              ✅ How have you been?
            </p>

            <p>
              ❌ What about you are?
              <br />
              ✅ What about you?
            </p>

            <p>
              ❌ I am agree.
              <br />
              ✅ I agree.
            </p>

            <p>
              ❌ I very like it.
              <br />
              ✅ I really like it.
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
              Your friend says: “I've started a new job.” You want more
              information. What can you say?
            </li>

            <li>
              Someone tells you surprising news. Give a natural reaction.
            </li>

            <li>
              You want to ask the other person the same question. What
              expression can you use?
            </li>

            <li>
              You want to change the topic naturally. What expression can you
              use?
            </li>

            <li>
              You need to leave a conversation politely. What can you say?
            </li>

            <li>
              Someone says: “I've been learning to cook.” Ask a follow-up
              question.
            </li>

            <li>
              Someone says: “I'm going to Italy next month.” Show interest and
              ask another question.
            </li>

            <li>
              Complete: “I've been really busy lately. __________?”
            </li>

            <li>
              Complete: “It was really nice __________ you.”
            </li>

            <li>
              Complete: “__________ way, did you call Sarah?”
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
              1. “Really? What kind of job is it?”
              <br />
              2. “No way!” / “Really?”
              <br />
              3. “What about you?”
              <br />
              4. “By the way...”
              <br />
              5. “It was nice talking to you.”
              <br />
              6. “What kind of food do you like cooking?”
              <br />
              7. “That sounds great. Have you been to Italy before?”
              <br />
              8. “How about you?”
              <br />
              9. “talking to”
              <br />
              10. “By”
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
            <li>Use simple questions to start a conversation.</li>
            <li>
              Use follow-up questions to show interest and keep the
              conversation going.
            </li>
            <li>
              Expressions such as <strong>Really?</strong>,{" "}
              <strong>No way!</strong>, and{" "}
              <strong>That sounds great.</strong> make conversations more
              natural.
            </li>
            <li>
              Use <strong>What about you?</strong> to return a question.
            </li>
            <li>
              Use <strong>By the way...</strong> to introduce a new topic.
            </li>
            <li>
              Use polite expressions when ending a conversation.
            </li>
            <li>
              Focus on communicating naturally rather than trying to produce
              perfect sentences.
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
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/b1"
            style={buttonStyle}
          >
            ← B1 Listening & Speaking
          </Link>

          <Link
            href="/resources/listening-speaking/b1/work-professional-communication"
            style={buttonStyle}
          >
            Next: Work & Professional Communication →
          </Link>
        </div>
      </div>
    </main>
  );
}