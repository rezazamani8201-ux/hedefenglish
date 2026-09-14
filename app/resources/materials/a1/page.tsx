"use client";

import Link from "next/link";

const materials = [
  {
    title: "A1 Vocabulary Lists",
    description:
      "Useful beginner vocabulary organized by everyday topics.",
    items: [
      "Greetings & Introductions",
      "Family & People",
      "Food & Drinks",
      "Home & Daily Life",
      "Places & Directions",
      "Shopping",
      "Travel & Transport",
      "Weather & Seasons",
    ],
  },
  {
    title: "A1 Speaking Phrases",
    description:
      "Simple English phrases for common everyday conversations.",
    items: [
      "Introducing Yourself",
      "Asking Questions",
      "Making Requests",
      "Ordering Food",
      "Shopping",
      "Asking for Directions",
      "Making Plans",
      "Ending Conversations",
    ],
  },
  {
    title: "A1 Study Guides",
    description:
      "Simple study guides to help you review and practice English.",
    items: [
      "Daily English Practice",
      "Beginner Grammar Review",
      "Vocabulary Review",
      "Speaking Practice",
      "Listening Practice",
      "Common Mistakes",
      "Useful Expressions",
      "A1 Review Checklist",
    ],
  },
];

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 5px 18px rgba(0,0,0,0.04)",
};

export default function A1MaterialsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        <Link
          href="/resources"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ← Back to Resources
        </Link>

        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "30px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            FREE LEARNING MATERIALS — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            A1 Free Learning Materials
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Free English learning materials for beginner learners. Use these
            resources to review vocabulary, practice speaking, and build a
            strong foundation in English.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {materials.map((material) => (
            <div key={material.title} style={cardStyle}>
              <h2
                style={{
                  color: "#173b78",
                  fontSize: "22px",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                {material.title}
              </h2>

              <p
                style={{
                  color: "#667085",
                  lineHeight: 1.7,
                  minHeight: "75px",
                  marginBottom: "20px",
                }}
              >
                {material.description}
              </p>

              <div>
                {material.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 0",
                      borderBottom: "1px solid #eef1f5",
                      color: "#344054",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#173b78",
                        flex: "0 0 8px",
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "10px",
            }}
          >
            Build Your A1 English Foundation
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            Combine these free materials with the A1 Grammar and Listening &
            Speaking lessons for a complete beginner English practice routine.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/resources/grammar/a1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                borderRadius: "10px",
                background: "#173b78",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              A1 Grammar
            </Link>

            <Link
              href="/resources/listening-speaking/a1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 20px",
                borderRadius: "10px",
                background: "#fff",
                color: "#173b78",
                border: "1px solid #dbe2ea",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              A1 Listening & Speaking
            </Link>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources"
            style={{
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
            }}
          >
            ← Resources
          </Link>

          <Link
            href="/resources/listening-speaking/a1"
            style={{
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
            }}
          >
            A1 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}