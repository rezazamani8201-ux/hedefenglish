"use client";

import Link from "next/link";

export default function AdvancedConversationsPage() {
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
          href="/resources/listening-speaking/b2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ← Back to B2 Listening & Speaking
        </Link>

        {/* Header */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "40px 32px",
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
              marginBottom: "16px",
            }}
          >
            B2 LISTENING & SPEAKING • LESSON 1
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Advanced Conversations
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Advanced Conversations & Real-Life Communication
          </p>
        </section>

        {/* Learning Goal */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            Learning Goals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will practice understanding and participating
            in longer, more natural conversations. You will learn how to
            respond naturally, keep a conversation going, clarify ideas, and
            react appropriately in different real-life situations.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Understand longer conversations and different viewpoints.</li>
            <li>Respond naturally and appropriately.</li>
            <li>Ask follow-up questions.</li>
            <li>Clarify information when necessary.</li>
            <li>Use natural conversation expressions.</li>
          </ul>
        </section>

        {/* Key Expressions */}
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
            Key Conversation Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                expression: "As far as I know...",
                meaning: "Used when giving information you believe is correct.",
              },
              {
                expression: "If I understand you correctly...",
                meaning: "Used to check that you understood someone.",
              },
              {
                expression: "What I mean is...",
                meaning: "Used to clarify or explain an idea.",
              },
              {
                expression: "That's a good point.",
                meaning: "Used to show that you agree with an idea.",
              },
              {
                expression: "I'm not entirely convinced.",
                meaning: "Used to politely express doubt or disagreement.",
              },
              {
                expression: "Let me put it another way.",
                meaning: "Used when explaining something differently.",
              },
            ].map((item) => (
              <div
                key={item.expression}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "17px",
                    margin: "0 0 9px",
                  }}
                >
                  {item.expression}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Practice */}
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

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Read the conversation carefully. Focus on the main idea, the
            speakers' opinions, and the details that support their ideas.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: "4px solid #173b78",
              borderRadius: "10px",
              padding: "22px",
              marginTop: "20px",
            }}
          >
            <p style={{ lineHeight: 1.8, marginTop: 0 }}>
              <strong>Emma:</strong> Have you noticed how much the way we
              communicate has changed over the last few years?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Definitely. We can communicate with
              almost anyone instantly, but I sometimes feel that our
              conversations have become less personal.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> That's a good point. On the other hand,
              technology has made it much easier to stay in touch with people
              who live far away.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> True. I suppose it depends on how we
              use it. Technology itself isn't necessarily the problem.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Emma:</strong> Exactly. If I understand you correctly,
              you're saying that the way we use technology matters more than
              the technology itself.
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
            Check Your Understanding
          </h2>

          <ol
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "24px",
            }}
          >
            <li>How does technology affect communication according to Daniel?</li>
            <li>What positive effect of technology does Emma mention?</li>
            <li>What does Daniel mean when he says that it depends on how we use technology?</li>
            <li>What does Emma mean by “If I understand you correctly”?</li>
          </ol>
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

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Answer the questions below in complete sentences. Try to give
            reasons, examples, and details instead of giving very short
            answers.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "How has technology changed the way people communicate?",
              "Do you think online communication is as effective as face-to-face communication? Why or why not?",
              "What are the advantages and disadvantages of social media?",
              "Describe a situation in which you had to explain something complicated to another person.",
            ].map((question, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "18px 0",
                  borderBottom:
                    index !== 3 ? "1px solid #e5eaf0" : "none",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#173b78",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#344054",
                    lineHeight: 1.7,
                  }}
                >
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Communication Challenge */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#fff" }}>
            Communication Challenge
          </h2>

          <p style={{ lineHeight: 1.8, marginBottom: "15px" }}>
            Imagine that your friend believes that people spend too much time
            on their phones. You have a different opinion.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: "15px" }}>
            Have a short discussion with your friend. Give your opinion,
            explain your reasons, respond to their ideas, and ask at least one
            follow-up question.
          </p>

          <p
            style={{
              marginBottom: 0,
              fontWeight: 600,
              lineHeight: 1.8,
            }}
          >
            Try to use at least three expressions from the Key Conversation
            Expressions section.
          </p>
        </section>

        {/* Vocabulary */}
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
            Useful Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["communicate", "to share information or ideas"],
              ["viewpoint", "a particular way of thinking about something"],
              ["clarify", "to make something easier to understand"],
              ["effective", "successful in producing the desired result"],
              ["personal", "connected with an individual's feelings or life"],
              ["instant", "happening immediately"],
              ["convince", "to make someone believe or agree with something"],
              ["depend on", "to be affected by or determined by something"],
            ].map(([word, definition]) => (
              <div
                key={word}
                style={{
                  padding: "16px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <strong
                  style={{
                    color: "#173b78",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  {word}
                </strong>

                <span
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {definition}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Final Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "35px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Lesson Review
          </h2>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>You practiced understanding longer conversations.</li>
            <li>You learned expressions for natural communication.</li>
            <li>You practiced clarifying and responding to ideas.</li>
            <li>You discussed technology and communication.</li>
            <li>You practiced expressing and supporting your opinions.</li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/listening-speaking/b2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "#fff",
              color: "#173b78",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← B2 Listening & Speaking
          </Link>

          <Link
            href="/resources/listening-speaking/b2/workplace-communication"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "1px solid #173b78",
              background: "#173b78",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}