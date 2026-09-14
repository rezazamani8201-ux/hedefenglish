"use client";

import Link from "next/link";

const topics = [
  {
    title: "Verb to Be — am / is / are",
    slug: "verb-to-be",
  },
  {
    title: "Subject Pronouns",
    slug: "subject-pronouns",
  },
  {
    title: "Possessive Adjectives",
    slug: "possessive-adjectives",
  },
  {
    title: "Articles — a / an / the",
    slug: "articles",
  },
  {
    title: "Plural Nouns",
    slug: "plural-nouns",
  },
  {
    title: "This / That / These / Those",
    slug: "this-that-these-those",
  },
  {
    title: "Have / Has",
    slug: "have-has",
  },
  {
    title: "There is / There are",
    slug: "there-is-there-are",
  },
  {
    title: "Present Simple",
    slug: "present-simple",
  },
  {
    title: "Adverbs of Frequency",
    slug: "adverbs-of-frequency",
  },
  {
    title: "Can / Can't",
    slug: "can-cant",
  },
  {
    title: "Imperatives",
    slug: "imperatives",
  },
  {
    title: "Prepositions of Place",
    slug: "prepositions-of-place",
  },
  {
    title: "Prepositions of Time",
    slug: "prepositions-of-time",
  },
  {
    title: "Question Words",
    slug: "question-words",
  },
  {
    title: "Basic Conjunctions",
    slug: "basic-conjunctions",
  },
];

export default function A1GrammarPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
      }}
    >
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "28px 24px",
        }}
      >
        <Link
          href="/resources"
          style={{
            color: "#173b78",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          ← Back to Resources
        </Link>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px 90px",
        }}
      >
        <div style={{ marginBottom: "45px" }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginBottom: "12px",
            }}
          >
            A1 — BEGINNER
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              fontSize: "clamp(34px, 5vw, 52px)",
              color: "#173b78",
            }}
          >
            A1 Grammar
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: 0,
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Learn the essential grammar structures you need to communicate
            confidently in everyday English.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "18px",
          }}
        >
          {topics.map((topic, index) => (
            <Link
              key={topic.slug}
              href={`/resources/grammar/a1/${topic.slug}`}
              style={{
                background: "#fff",
                border: "1px solid #e5eaf0",
                borderRadius: "16px",
                padding: "22px 24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  minWidth: "42px",
                  borderRadius: "12px",
                  background: "#eef4ff",
                  color: "#173b78",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#173b78",
                  lineHeight: 1.4,
                }}
              >
                {topic.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}