"use client";

import Link from "next/link";

const topics = [
  {
    number: 1,
    title: "Present & Past Simple",
    slug: "present-past-simple",
    description: "Talk about routines, habits, finished actions, and past events.",
  },
  {
    number: 2,
    title: "Present Continuous",
    slug: "present-continuous",
    description: "Talk about actions happening now and temporary situations.",
  },
  {
    number: 3,
    title: "Future Plans",
    slug: "future-plans",
    description: "Use common future forms to talk about plans and arrangements.",
  },
  {
    number: 4,
    title: "Comparatives & Superlatives",
    slug: "comparatives-superlatives",
    description: "Compare people, places, things, and experiences.",
  },
  {
    number: 5,
    title: "Countable & Uncountable Nouns",
    slug: "countable-uncountable",
    description: "Understand nouns that can and cannot be counted.",
  },
  {
    number: 6,
    title: "Some, Any, Much & Many",
    slug: "some-any-much-many",
    description: "Talk about quantities in positive, negative, and question forms.",
  },
  {
    number: 7,
    title: "Present Perfect",
    slug: "present-perfect",
    description: "Talk about experiences and actions connected to the present.",
  },
  {
    number: 8,
    title: "Modal Verbs",
    slug: "modal-verbs",
    description: "Use can, could, should, must, and have to in everyday English.",
  },
  {
    number: 9,
    title: "Adverbs of Frequency",
    slug: "adverbs-of-frequency",
    description: "Describe how often you do everyday activities.",
  },
  {
    number: 10,
    title: "Everyday Situations",
    slug: "everyday-situations",
    description: "Use practical grammar for common everyday situations.",
  },
  {
    number: 11,
    title: "Travel & Shopping",
    slug: "travel-shopping",
    description: "Use useful English for travel, shops, tickets, and prices.",
  },
  {
    number: 12,
    title: "Making Suggestions",
    slug: "making-suggestions",
    description: "Make suggestions and respond to other people's ideas.",
  },
  {
    number: 13,
    title: "Giving Opinions",
    slug: "giving-opinions",
    description: "Express simple opinions and explain what you think.",
  },
  {
    number: 14,
    title: "Describing People & Places",
    slug: "describing-people-places",
    description: "Describe appearance, personality, places, and surroundings.",
  },
  {
    number: 15,
    title: "Everyday Conversations",
    slug: "everyday-conversations",
    description: "Build longer conversations using practical A2 grammar.",
  },
  {
    number: 16,
    title: "Review & Communication",
    slug: "review-communication",
    description: "Review key A2 grammar and use it in real communication.",
  },
];

export default function A2GrammarPage() {
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
            GRAMMAR & VOCABULARY — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            A2 Grammar & Vocabulary
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
            Build your elementary English skills with practical grammar,
            useful vocabulary, and clear examples for everyday communication.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/resources/grammar/a2/${topic.slug}`}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid #e5eaf0",
                borderRadius: "16px",
                padding: "24px",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "#eef4ff",
                  color: "#173b78",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                {topic.number}
              </div>

              <h2
                style={{
                  color: "#173b78",
                  fontSize: "20px",
                  margin: "0 0 10px",
                }}
              >
                {topic.title}
              </h2>

              <p
                style={{
                  color: "#667085",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {topic.description}
              </p>

              <div
                style={{
                  marginTop: "18px",
                  color: "#173b78",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Open Lesson →
              </div>
            </Link>
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
            Continue Your A2 Practice
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            Practice grammar together with listening and speaking activities
            to improve your everyday English communication.
          </p>

          <Link
            href="/resources/listening-speaking/a2"
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
            A2 Listening & Speaking →
          </Link>
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
            href="/resources/grammar/a1"
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
            ← A1 Grammar
          </Link>
        </div>
      </div>
    </main>
  );
}