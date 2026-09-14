"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "It's becoming increasingly common to...",
    meaning:
      "Used to describe a trend that is happening more frequently.",
  },
  {
    expression: "There's no denying that...",
    meaning:
      "Used to introduce something that is clearly true or difficult to disagree with.",
  },
  {
    expression: "One of the main drawbacks is...",
    meaning:
      "Used to introduce a disadvantage or negative aspect.",
  },
  {
    expression: "It has completely transformed the way we...",
    meaning:
      "Used to describe a major change caused by technology.",
  },
  {
    expression: "I'm not entirely convinced that...",
    meaning:
      "Used to express polite disagreement or uncertainty.",
  },
  {
    expression: "The benefits outweigh the disadvantages.",
    meaning:
      "Used when the positive aspects are greater than the negative ones.",
  },
];

const vocabulary = [
  ["artificial intelligence", "computer systems that can perform tasks requiring human intelligence"],
  ["privacy", "the right to keep personal information or activities private"],
  ["algorithm", "a set of instructions used by a computer to solve a problem or make decisions"],
  ["misinformation", "false or inaccurate information, especially when shared widely"],
  ["digital footprint", "the record of information a person leaves online"],
  ["platform", "an online service or system used for communication or content"],
  ["innovation", "a new idea, method, or technology"],
  ["drawback", "a disadvantage or negative feature"],
];

export default function TechnologyMediaPage() {
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
            B2 LISTENING & SPEAKING • LESSON 6
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Technology & Media
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss technology, social media, artificial intelligence, online
            communication, and the impact of digital media on modern life.
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
            technology-related topics. You will learn how to describe trends,
            compare advantages and disadvantages, express uncertainty, and
            discuss the social effects of digital technology.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss the role of technology in everyday life.</li>
            <li>Talk about the advantages and disadvantages of social media.</li>
            <li>Discuss artificial intelligence and automation.</li>
            <li>Express opinions about digital privacy.</li>
            <li>Evaluate information found online.</li>
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
            Read the conversation carefully. Pay attention to the speakers'
            opinions about social media and artificial intelligence.
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
              <strong>Sophie:</strong> Do you think social media has had a
              positive effect on the way people communicate?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> In some ways, yes. It has completely
              transformed the way we stay in touch with people. However, I'm
              not entirely convinced that all of its effects are positive.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> What do you see as the biggest problem?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> Probably the amount of misinformation
              people encounter. It's becoming increasingly common to see
              unverified information spreading online.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> That's true. What about artificial
              intelligence? Do you think it will improve our lives?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> I think it will, especially in medicine,
              education, and research. But there are serious questions about
              privacy and employment.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> So, do the benefits outweigh the
              disadvantages?
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Mark:</strong> Overall, I'd say yes, but only if
              governments and technology companies take responsibility for
              managing the risks.
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
            <li>What positive effect of social media does Mark mention?</li>
            <li>What does Mark consider one of the biggest problems?</li>
            <li>Why does he think artificial intelligence could be useful?</li>
            <li>What concerns does he have about artificial intelligence?</li>
            <li>What does Mark think governments and companies should do?</li>
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
            Discussion: Technology Today
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Give reasons for your opinions and
            support your ideas with examples.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "Has social media improved communication or made it more difficult?",
              "Should people be more concerned about their digital privacy?",
              "Which jobs could artificial intelligence change in the future?",
              "Do you think people depend too much on technology?",
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

        {/* Advantages / Disadvantages */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Advantages & Disadvantages
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Choose one technology and discuss both its benefits and drawbacks.
            Try to give specific examples.
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
              "Social media",
              "Artificial intelligence",
              "Online education",
              "Smartphones",
            ].map((topic, index) => (
              <div
                key={topic}
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
            Imagine that you are participating in a discussion about the
            future of artificial intelligence.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Explain how AI could change education, healthcare, employment, and
            everyday life.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Present both advantages and disadvantages, and explain whether you
            think the benefits will outweigh the risks.
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
            <li>
              You practiced listening to a discussion about technology.
            </li>
            <li>
              You learned expressions for discussing trends and opinions.
            </li>
            <li>
              You discussed social media and digital communication.
            </li>
            <li>
              You explored the advantages and disadvantages of artificial
              intelligence.
            </li>
            <li>
              You practiced evaluating technology from different perspectives.
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
            href="/resources/listening-speaking/b2/social-issues-society"
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
            href="/resources/listening-speaking/b2/work-professional-communication"
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