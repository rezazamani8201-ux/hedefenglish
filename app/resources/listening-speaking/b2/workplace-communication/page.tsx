"use client";

import Link from "next/link";

export default function WorkplaceCommunicationPage() {
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
            B2 LISTENING & SPEAKING • LESSON 2
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Workplace Communication
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Communicate clearly and confidently in professional situations,
            meetings, and workplace conversations.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will practice listening to professional
            conversations and speaking clearly in workplace situations. You
            will learn how to contribute to discussions, ask for clarification,
            make suggestions, and respond professionally.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Participate confidently in workplace conversations.</li>
            <li>Express ideas clearly and professionally.</li>
            <li>Ask for clarification and additional information.</li>
            <li>Make suggestions and respond to suggestions.</li>
            <li>Agree and disagree politely.</li>
          </ul>
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
            Useful Workplace Expressions
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
                expression: "I'd like to add something.",
                meaning: "Used to introduce another idea during a discussion.",
              },
              {
                expression: "Could you clarify that?",
                meaning: "Used when you need more information or explanation.",
              },
              {
                expression: "From my perspective...",
                meaning: "Used to introduce your personal opinion.",
              },
              {
                expression: "I'd suggest that we...",
                meaning: "Used to make a professional suggestion.",
              },
              {
                expression: "I see your point, but...",
                meaning: "Used to disagree politely.",
              },
              {
                expression: "That sounds reasonable.",
                meaning: "Used to show that you agree with a suggestion.",
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
            Read the conversation as if you were listening to a real workplace
            meeting. Pay attention to how the speakers make suggestions,
            respond to ideas, and politely express different opinions.
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
              <strong>Sarah:</strong> We need to decide how we're going to
              improve communication between the different teams.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> From my perspective, the main problem is
              that we don't have enough regular communication.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sarah:</strong> I agree to some extent. I'd suggest that
              we have a short meeting every Monday morning.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> That sounds reasonable, although I'm not
              sure everyone will be available at the same time.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sarah:</strong> That's true. Could you suggest an
              alternative?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> We could use a shared online channel
              instead. Each team could post important updates there.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Sarah:</strong> I see your point. Why don't we try that
              first and review the results after a month?
            </p>
          </div>
        </section>

        {/* Understanding */}
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
            <li>What problem does Mark identify?</li>
            <li>What solution does Sarah initially suggest?</li>
            <li>Why is Mark not completely convinced by the idea?</li>
            <li>What alternative does Mark suggest?</li>
            <li>What do Sarah and Mark finally decide to do?</li>
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
            Imagine that you are part of a professional team. Answer the
            questions below using complete sentences and supporting details.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "What makes communication effective in a workplace?",
              "How should employees deal with disagreements?",
              "What is the best way to give constructive feedback?",
              "How can technology improve communication between teams?",
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

        {/* Role Play */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#fff", marginTop: 0 }}>
            Workplace Role Play
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            You are attending a team meeting. Your manager asks for ideas to
            improve productivity.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Give one suggestion, explain why you think it would help, respond
            to another person's opinion, and ask at least one question.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to use at least three expressions from the Useful Workplace
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
              ["productivity", "the amount of useful work produced"],
              ["communication", "the exchange of information or ideas"],
              ["alternative", "another possible choice or solution"],
              ["feedback", "comments intended to help someone improve"],
              ["suggestion", "an idea about what someone should do"],
              ["constructive", "useful and intended to produce improvement"],
              ["update", "new information about a situation"],
              ["available", "free or ready to be used"],
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

        {/* Review */}
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
            <li>You practiced professional listening and speaking.</li>
            <li>You learned useful workplace expressions.</li>
            <li>You practiced making and responding to suggestions.</li>
            <li>You practiced polite disagreement.</li>
            <li>You discussed effective workplace communication.</li>
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
            href="/resources/listening-speaking/b2/advanced-conversations-real-life-communication"
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
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/listening-speaking/b2/travel-cultural-experiences"
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