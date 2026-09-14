"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "I'm considering pursuing...",
    meaning: "Used when thinking seriously about a future field of study or career.",
  },
  {
    expression: "It requires a great deal of...",
    meaning: "Used to describe something that needs a lot of a particular skill or quality.",
  },
  {
    expression: "I'm particularly interested in...",
    meaning: "Used to explain a specific academic or professional interest.",
  },
  {
    expression: "There are plenty of opportunities to...",
    meaning: "Used to talk about available possibilities or chances.",
  },
  {
    expression: "I'd like to gain experience in...",
    meaning: "Used when talking about practical experience you want to develop.",
  },
  {
    expression: "It would be a valuable opportunity.",
    meaning: "Used to describe an experience that could be useful in the future.",
  },
];

const vocabulary = [
  ["career path", "the direction your professional life takes over time"],
  ["qualification", "an official skill, certificate, or educational achievement"],
  ["internship", "a temporary position designed to provide practical work experience"],
  ["specialisation", "a particular area of study or professional expertise"],
  ["professional development", "activities that help someone improve their professional skills"],
  ["workforce", "all the people who are available to work in a particular place or field"],
  ["promotion", "a move to a higher position or level at work"],
  ["work-life balance", "a healthy relationship between professional and personal life"],
];

export default function EducationCareerPage() {
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
            B2 LISTENING & SPEAKING • LESSON 7
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Education & Career
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss education, career choices, professional development,
            workplace skills, and plans for the future.
          </p>
        </section>

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
            In this lesson, you will practice discussing educational choices,
            career plans, professional skills, and future opportunities. You
            will also learn how to explain career decisions and compare
            different professional paths.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss academic and career goals.</li>
            <li>Talk about qualifications and professional skills.</li>
            <li>Explain career choices and future plans.</li>
            <li>Discuss the importance of work experience.</li>
            <li>Talk about work-life balance and professional development.</li>
          </ul>
        </section>

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
            explain their education and career decisions.
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
              <strong>Emma:</strong> Have you decided what you want to do
              after university?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Not completely. I'm considering
              pursuing a career in environmental research because I've always
              been interested in climate and sustainability.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> That sounds interesting. What kind of
              qualifications do you need?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> A postgraduate degree would probably be
              useful. It also requires a great deal of research experience and
              analytical skills.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> Are you thinking about doing an
              internship?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Definitely. I'd like to gain experience
              in a real research environment before making a final decision.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> I think practical experience can make a
              huge difference. I'm particularly interested in marketing, so
              I'm looking for an internship this summer.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Daniel:</strong> That sounds like a good plan. There are
              plenty of opportunities if you know where to look.
            </p>
          </div>
        </section>

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
            <li>What career is Daniel considering?</li>
            <li>Why is he interested in environmental research?</li>
            <li>What qualifications could help him?</li>
            <li>Why does Daniel want to do an internship?</li>
            <li>What career area is Emma interested in?</li>
          </ol>
        </section>

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
            Education & Career Discussion
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Give detailed answers and support
            your opinions with examples.
          </p>

          {[
            "Is a university degree necessary for a successful career?",
            "How important is practical work experience?",
            "Should students choose a career based on their interests or future income?",
            "What professional skills will become more important in the future?",
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

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Career Path Challenge
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Choose one of the following career areas and explain what someone
            would need to become successful in that field.
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
              "Technology",
              "Education",
              "Healthcare",
              "Business",
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
                  Career Area {index + 1}
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
            Imagine that you are giving advice to a student who is about to
            choose a career.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Explain how they should decide what career path to follow. Talk
            about interests, qualifications, financial goals, work experience,
            and work-life balance.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to give a balanced answer rather than focusing on only one
            factor.
          </p>
        </section>

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
              You practiced listening to a conversation about education and
              career choices.
            </li>
            <li>
              You learned expressions for discussing future professional plans.
            </li>
            <li>
              You discussed qualifications and practical work experience.
            </li>
            <li>
              You practiced talking about different career paths.
            </li>
            <li>
              You discussed important factors in choosing a career.
            </li>
          </ul>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/listening-speaking/b2/technology-media"
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
            href="/resources/listening-speaking/b2/problems-solutions"
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