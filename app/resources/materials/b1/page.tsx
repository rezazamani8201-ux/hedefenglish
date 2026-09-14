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

const materials = [
  {
    title: "Vocabulary Builder",
    description:
      "Build a stronger B1 vocabulary with useful words, phrases, collocations, and everyday expressions.",
    items: [
      "Everyday vocabulary",
      "Work & education",
      "Travel & communication",
      "Health & lifestyle",
      "Technology & media",
      "Common collocations",
    ],
  },
  {
    title: "Speaking Practice",
    description:
      "Practice speaking independently with practical questions and discussion topics.",
    items: [
      "Giving opinions",
      "Agreeing and disagreeing",
      "Giving advice",
      "Making suggestions",
      "Describing experiences",
      "Discussing problems",
    ],
  },
  {
    title: "Writing Practice",
    description:
      "Improve your B1 writing by practicing useful real-life writing tasks.",
    items: [
      "Emails",
      "Messages",
      "Personal descriptions",
      "Opinions",
      "Informal letters",
      "Short paragraphs",
    ],
  },
  {
    title: "Grammar Review",
    description:
      "Review important grammar structures that support confident B1 communication.",
    items: [
      "Present perfect",
      "Conditionals",
      "Modal verbs",
      "Passive voice",
      "Reported speech",
      "Relative clauses",
    ],
  },
  {
    title: "Reading Practice",
    description:
      "Develop reading skills with practical texts and comprehension activities.",
    items: [
      "Short articles",
      "Everyday situations",
      "Travel texts",
      "Work-related texts",
      "Opinions",
      "Reading comprehension",
    ],
  },
  {
    title: "Self-Study Checklist",
    description:
      "Use this checklist to organize your independent English learning routine.",
    items: [
      "Learn new vocabulary",
      "Review grammar",
      "Listen to English",
      "Speak for 10 minutes",
      "Read a short text",
      "Write a short paragraph",
    ],
  },
];

export default function B1MaterialsPage() {
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
          href="/resources"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← Resources
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
            marginBottom: "28px",
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
            B1 FREE LEARNING MATERIALS
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            B1 Learning Materials
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
            Free materials to help you review vocabulary, grammar, reading,
            writing, listening, and speaking while studying at B1 level.
          </p>
        </section>

        {/* How to Use */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            How to Use These Materials
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#475467",
            }}
          >
            Use these materials alongside your B1 lessons. Choose one or two
            areas each day and practice regularly instead of trying to study
            everything at once.
          </p>

          <ol
            style={{
              lineHeight: 2,
              color: "#475467",
            }}
          >
            <li>Review vocabulary and useful expressions.</li>
            <li>Practice one grammar point.</li>
            <li>Read or listen to something in English.</li>
            <li>Speak about a familiar topic.</li>
            <li>Write a short paragraph or message.</li>
          </ol>
        </section>

        {/* Materials Grid */}
        <section>
          <h2
            style={{
              color: "#173b78",
              marginBottom: "18px",
            }}
          >
            Free B1 Materials
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {materials.map((material) => (
              <article
                key={material.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5eaf0",
                  borderRadius: "18px",
                  padding: "26px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                    marginBottom: "10px",
                    fontSize: "21px",
                  }}
                >
                  {material.title}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    lineHeight: 1.7,
                    fontSize: "14px",
                    marginBottom: "18px",
                  }}
                >
                  {material.description}
                </p>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#475467",
                    lineHeight: 1.9,
                    fontSize: "14px",
                  }}
                >
                  {material.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Weekly Plan */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "28px",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Simple Weekly Study Plan
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
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Day
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Practice
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Suggested Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Monday", "Vocabulary + Grammar", "30 minutes"],
                  ["Tuesday", "Listening + Speaking", "30 minutes"],
                  ["Wednesday", "Reading + Vocabulary", "30 minutes"],
                  ["Thursday", "Grammar + Writing", "30 minutes"],
                  ["Friday", "Listening + Speaking", "30 minutes"],
                  ["Saturday", "Review + Free Practice", "45 minutes"],
                  ["Sunday", "Light English practice", "20 minutes"],
                ].map(([day, practice, time]) => (
                  <tr key={day}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {day}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#475467",
                      }}
                    >
                      {practice}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
                      }}
                    >
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Self Assessment */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B1 Self-Assessment
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Check the skills you feel comfortable with. Review the areas that
            still need more practice.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2.2,
            }}
          >
            {[
              "I can understand the main idea of everyday conversations.",
              "I can talk about my experiences.",
              "I can express my opinions and give reasons.",
              "I can agree and disagree politely.",
              "I can give advice and make suggestions.",
              "I can talk about future plans.",
              "I can describe problems and suggest solutions.",
              "I can write a clear short message or paragraph.",
              "I can understand the main points of a short article.",
              "I can speak for several minutes about a familiar topic.",
            ].map((item) => (
              <div key={item}>□ {item}</div>
            ))}
          </div>
        </section>

        {/* Final Tip */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "35px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Keep Practicing
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Progress comes from regular practice. Even 20–30 minutes of
            focused English practice every day can make a noticeable
            difference over time.
          </p>
        </section>

        {/* Bottom Navigation */}
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
            href="/resources"
            style={buttonStyle}
          >
            ← Resources
          </Link>

          <Link
            href="/resources/listening-speaking/b1"
            style={buttonStyle}
          >
            B1 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}