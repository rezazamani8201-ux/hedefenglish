"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "There is growing concern about...",
    meaning: "Used to introduce a social problem that is becoming more serious.",
  },
  {
    expression: "From a broader perspective...",
    meaning: "Used to discuss an issue from a wider point of view.",
  },
  {
    expression: "One possible explanation is that...",
    meaning: "Used to suggest a reason for a situation.",
  },
  {
    expression: "It could be argued that...",
    meaning: "Used to introduce an argument or opinion in a formal way.",
  },
  {
    expression: "This has a significant impact on...",
    meaning: "Used to describe an important effect on people or society.",
  },
  {
    expression: "There are two sides to this issue.",
    meaning: "Used to show that a topic has different perspectives.",
  },
];

const vocabulary = [
  ["inequality", "an unfair difference in opportunities, resources, or treatment"],
  ["awareness", "knowledge or understanding of an issue or situation"],
  ["community", "a group of people who live or work together"],
  ["poverty", "the condition of being extremely poor"],
  ["opportunity", "a chance to do or achieve something"],
  ["responsibility", "a duty to deal with something or take care of someone"],
  ["access", "the ability or opportunity to use or obtain something"],
  ["policy", "an official plan or set of ideas used to guide decisions"],
];

export default function SocialIssuesSocietyPage() {
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
            B2 LISTENING & SPEAKING • LESSON 5
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Social Issues & Society
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss important social issues, different perspectives, and the
            challenges facing modern communities.
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
            In this lesson, you will practice understanding and discussing
            complex social topics. You will learn how to express opinions,
            explain causes and effects, compare different perspectives, and
            support your ideas with examples.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss common social issues.</li>
            <li>Express and support your opinions.</li>
            <li>Compare different points of view.</li>
            <li>Explain causes and consequences.</li>
            <li>Suggest possible solutions to social problems.</li>
          </ul>
        </section>

        {/* Expressions */}
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
            Useful Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {expressions.map((item) => (
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
            Read the conversation carefully. Pay attention to how the speakers
            introduce different opinions, explain causes, and suggest possible
            solutions.
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
              <strong>Emma:</strong> I've been reading about the increasing
              number of people moving from smaller towns to large cities.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Yes, urbanisation has become a major
              social issue. There is growing concern about the pressure it puts
              on housing and public services.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> I agree. At the same time, cities can
              provide better access to education and employment opportunities.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> That's true, but the benefits aren't
              always equally distributed. Some people struggle to find
              affordable housing.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> One possible explanation is that urban
              development hasn't always kept pace with population growth.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Exactly. From a broader perspective,
              governments need to think about how cities can grow without
              increasing inequality.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> It could be argued that better public
              transport and affordable housing policies could make a
              significant difference.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Daniel:</strong> I agree. There are two sides to this
              issue, but the long-term goal should be to create cities where
              everyone has a fair opportunity to live and work.
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
            <li>What social trend are Emma and Daniel discussing?</li>
            <li>What problems can rapid urbanisation create?</li>
            <li>What benefits can cities provide?</li>
            <li>Why do some people struggle with affordable housing?</li>
            <li>What solutions do the speakers suggest?</li>
          </ol>
        </section>

        {/* Discussion */}
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
            Discussion: Society Today
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Give reasons for your opinions and
            support your ideas with examples.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "What are the biggest social problems facing communities today?",
              "Should governments do more to reduce inequality?",
              "What can individuals do to improve their local communities?",
              "Does technology bring people closer together or make society more divided?",
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

        {/* Problem & Solution */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Problem & Solution Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Choose one problem and explain what causes it, who is affected, and
            what could be done to improve the situation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Affordable housing",
              "Traffic congestion",
              "Youth unemployment",
              "Social inequality",
            ].map((problem, index) => (
              <div
                key={problem}
                style={{
                  background: "#fff",
                  border: "1px solid #dbe4f0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <strong
                  style={{
                    color: "#173b78",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  Topic {index + 1}
                </strong>

                <p
                  style={{
                    color: "#475467",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Challenge */}
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
            Speaking Challenge
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose a social issue that matters to you and give a two-minute
            presentation about it.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Explain the problem, discuss its possible causes, describe its
            effects on society, and suggest at least one realistic solution.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to use at least three expressions from the Useful Expressions
            section and present more than one perspective.
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
            {vocabulary.map(([word, definition]) => (
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
            <li>You practiced listening to a discussion about society.</li>
            <li>You learned expressions for discussing complex issues.</li>
            <li>You practiced comparing different perspectives.</li>
            <li>You discussed causes and effects of social problems.</li>
            <li>You practiced proposing realistic solutions.</li>
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
            href="/resources/listening-speaking/b2/health-well-being"
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
            href="/resources/listening-speaking/b2/technology-media"
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