"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "Technology has changed the way we...",
    meaning:
      "Used to describe how technology has influenced everyday activities.",
  },
  {
    expression: "We have become increasingly dependent on...",
    meaning:
      "Used to describe growing reliance on a person, system, or technology.",
  },
  {
    expression: "It has become an essential part of...",
    meaning:
      "Used when something is now considered necessary or very important.",
  },
  {
    expression: "There is growing concern about...",
    meaning:
      "Used to introduce an issue that more people are becoming worried about.",
  },
  {
    expression: "It's difficult to imagine life without...",
    meaning:
      "Used to emphasize how important or common something has become.",
  },
  {
    expression: "We need to strike a balance between...",
    meaning:
      "Used when discussing the need to balance two different priorities.",
  },
];

const vocabulary = [
  ["dependence", "the state of relying strongly on someone or something"],
  ["convenience", "the quality of being easy, useful, or suitable"],
  ["automation", "the use of technology to perform tasks with little human involvement"],
  ["connectivity", "the ability of devices or people to connect and communicate"],
  ["screen time", "the amount of time spent using computers, phones, tablets, or other screens"],
  ["productivity", "the ability to produce useful results efficiently"],
  ["distraction", "something that takes your attention away from what you should be doing"],
  ["digital lifestyle", "a way of living that depends heavily on digital technology"],
];

export default function TechnologyModernLifePage() {
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
            B2 LISTENING & SPEAKING • LESSON 9
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Technology & Modern Life
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Explore how technology influences communication, work, education,
            entertainment, and everyday life.
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
            In this lesson, you will discuss how modern technology has changed
            people's daily lives. You will practice expressing opinions,
            describing trends, discussing advantages and disadvantages, and
            considering the possible effects of technology on society.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss the impact of technology on everyday life.</li>
            <li>Talk about digital habits and screen time.</li>
            <li>Discuss automation and the future of work.</li>
            <li>Explain the benefits and drawbacks of technology.</li>
            <li>Discuss how to maintain a healthy digital lifestyle.</li>
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
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
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

        {/* Listening */}
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
            discuss the role of technology in their daily lives.
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
              <strong>Anna:</strong> Have you noticed how much technology has
              changed your daily routine?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> Definitely. It's difficult to imagine
              life without my smartphone now. I use it for work, banking,
              communication, and even studying.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> I feel the same way. It has become an
              essential part of my life, but sometimes I think we have become
              too dependent on technology.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> That's a fair point. I sometimes spend
              several hours looking at screens without even realising it.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> There is growing concern about screen
              time, especially among young people. Do you think technology
              makes people less productive?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> Not necessarily. Technology can make us
              much more productive if we use it properly. The problem is that
              social media and other apps can easily become distractions.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> So perhaps we need to strike a balance
              between using technology and spending time offline.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>David:</strong> Exactly. Technology should make our lives
              easier, not control the way we live.
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
            <li>What does David use his smartphone for?</li>
            <li>Why does Anna think people may be too dependent on technology?</li>
            <li>What concern does Anna mention?</li>
            <li>Why doesn't David think technology necessarily reduces productivity?</li>
            <li>What balance does Anna suggest?</li>
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
            Technology in Everyday Life
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Give detailed answers and support
            your opinions with examples.
          </p>

          {[
            "Which technology has had the biggest impact on your daily life?",
            "Do smartphones make people more connected or more distracted?",
            "How has technology changed the way people learn?",
            "Could people live comfortably without the internet today?",
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
        </section>

        {/* Digital Balance */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Building a Healthy Digital Lifestyle
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss which habits could help people use technology in a
            healthier and more productive way.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Limit unnecessary screen time.",
              "Turn off non-essential notifications.",
              "Take regular breaks from screens.",
              "Spend more time on offline activities.",
            ].map((topic, index) => (
              <div
                key={index}
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
                  Habit {index + 1}
                </strong>

                <p
                  style={{
                    color: "#475467",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {topic}
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
            Imagine that you are giving a presentation about how technology
            will change everyday life over the next ten years.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Talk about communication, education, transportation, healthcare,
            entertainment, and work.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Explain both the opportunities and the possible risks of these
            changes.
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
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
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
            <li>
              You practiced listening to a discussion about modern technology.
            </li>
            <li>
              You learned expressions for describing technological changes.
            </li>
            <li>
              You discussed dependence on smartphones and digital technology.
            </li>
            <li>
              You explored the relationship between technology and productivity.
            </li>
            <li>
              You practiced discussing how to maintain a healthy digital
              lifestyle.
            </li>
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
            href="/resources/listening-speaking/b2/problems-solutions"
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
            href="/resources/listening-speaking/b2/environment-global-issues"
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