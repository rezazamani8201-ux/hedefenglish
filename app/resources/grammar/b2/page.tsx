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

const topics = [
  {
    number: "01",
    title: "Advanced Tenses Review",
    slug: "advanced-tenses-review",
    description:
      "Review and compare advanced uses of present, past, and future tenses.",
  },
  {
    number: "02",
    title: "Past Perfect & Past Perfect Continuous",
    slug: "past-perfect-past-perfect-continuous",
    description:
      "Use past perfect forms to describe earlier actions and their duration.",
  },
  {
    number: "03",
    title: "Future Perfect & Future Continuous",
    slug: "future-perfect-future-continuous",
    description:
      "Talk about actions that will be in progress or completed in the future.",
  },
  {
    number: "04",
    title: "Advanced Conditionals",
    slug: "advanced-conditionals",
    description:
      "Explore mixed and advanced conditional structures for real and hypothetical situations.",
  },
  {
    number: "05",
    title: "Modal Verbs in the Past",
    slug: "modal-verbs-past",
    description:
      "Use modal verbs to talk about possibility, ability, criticism, and regret in the past.",
  },
  {
    number: "06",
    title: "Advanced Passive Voice",
    slug: "advanced-passive-voice",
    description:
      "Use passive structures naturally in formal and advanced communication.",
  },
  {
    number: "07",
    title: "Reported Speech & Reporting Verbs",
    slug: "reported-speech-reporting-verbs",
    description:
      "Report statements, questions, opinions, and information accurately.",
  },
  {
    number: "08",
    title: "Advanced Relative Clauses",
    slug: "advanced-relative-clauses",
    description:
      "Use defining, non-defining, reduced, and advanced relative clauses.",
  },
  {
    number: "09",
    title: "Gerunds, Infinitives & Verb Patterns",
    slug: "gerunds-infinitives-verb-patterns",
    description:
      "Understand advanced verb patterns and differences between gerunds and infinitives.",
  },
  {
    number: "10",
    title: "Articles, Determiners & Quantifiers",
    slug: "articles-determiners-quantifiers",
    description:
      "Use articles, determiners, and quantity expressions accurately.",
  },
  {
    number: "11",
    title: "Phrasal Verbs & Idiomatic Expressions",
    slug: "phrasal-verbs-idiomatic-expressions",
    description:
      "Learn advanced phrasal verbs and common idiomatic expressions.",
  },
  {
    number: "12",
    title: "Collocations & Word Combinations",
    slug: "collocations-word-combinations",
    description:
      "Build natural English through common collocations and word combinations.",
  },
  {
    number: "13",
    title: "Inversion & Emphasis",
    slug: "inversion-emphasis",
    description:
      "Use inversion and emphasis to create more sophisticated English sentences.",
  },
  {
    number: "14",
    title: "Cleft Sentences & Focus Structures",
    slug: "cleft-sentences-focus-structures",
    description:
      "Emphasize specific information using cleft and focus structures.",
  },
  {
    number: "15",
    title: "Linking Devices & Complex Sentences",
    slug: "linking-devices-complex-sentences",
    description:
      "Connect ideas clearly using advanced linking words and complex structures.",
  },
  {
    number: "16",
    title: "Advanced Communication & Functional English",
    slug: "advanced-communication-functional-english",
    description:
      "Use advanced grammar and functional language in professional and everyday situations.",
  },
];

export default function B2GrammarPage() {
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
            B2 GRAMMAR & VOCABULARY
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            B2 Grammar & Vocabulary
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
            Develop advanced grammar and vocabulary skills through structured
            lessons, practical examples, and clear explanations.
          </p>
        </section>

        {/* Introduction */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            What You Will Learn
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#475467",
              marginBottom: 0,
            }}
          >
            The B2 level focuses on accuracy, flexibility, and natural
            communication. These lessons will help you understand more
            sophisticated grammar structures and use a wider range of
            vocabulary in real-life and professional situations.
          </p>
        </section>

        {/* Topics */}
        <section>
          <h2
            style={{
              color: "#173b78",
              marginBottom: "18px",
            }}
          >
            B2 Grammar & Vocabulary Topics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/resources/grammar/b2/${topic.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <article
                  style={{
                    height: "100%",
                    boxSizing: "border-box",
                    background: "#fff",
                    border: "1px solid #e5eaf0",
                    borderRadius: "18px",
                    padding: "25px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#eef4ff",
                      color: "#173b78",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      marginBottom: "18px",
                    }}
                  >
                    {topic.number}
                  </div>

                  <h3
                    style={{
                      color: "#173b78",
                      margin: "0 0 10px",
                      fontSize: "20px",
                      lineHeight: 1.4,
                    }}
                  >
                    {topic.title}
                  </h3>

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
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Study Tip */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "28px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B2 Study Tip
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            At B2 level, do not focus only on memorizing grammar rules. Pay
            attention to how advanced structures are used in context, and try
            to use new vocabulary and grammar when speaking and writing.
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
          <Link href="/resources" style={buttonStyle}>
            ← Resources
          </Link>

          <Link
            href="/resources/listening-speaking/b2"
            style={buttonStyle}
          >
            B2 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}