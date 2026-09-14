"use client";

import Link from "next/link";

const topics = [
  ["Present Perfect vs Past Simple", "present-perfect-vs-past-simple"],
  ["Present Perfect Continuous", "present-perfect-continuous"],
  ["Past Continuous & Past Perfect", "past-continuous-past-perfect"],
  ["Future Forms", "future-forms"],
  ["First Conditional", "first-conditional"],
  ["Second Conditional", "second-conditional"],
  ["Modal Verbs of Obligation & Advice", "modal-obligation-advice"],
  ["Modal Verbs of Possibility", "modal-possibility"],
  ["Passive Voice", "passive-voice"],
  ["Reported Speech", "reported-speech"],
  ["Relative Clauses", "relative-clauses"],
  ["Gerunds & Infinitives", "gerunds-infinitives"],
  ["Articles & Determiners", "articles-determiners"],
  ["Phrasal Verbs", "phrasal-verbs"],
  ["Collocations", "collocations"],
  ["Communication & Functional English", "communication-functional-english"],
];

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

export default function B1GrammarPage() {
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
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← Resources
        </Link>

        {/* Hero */}
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
            GRAMMAR & VOCABULARY — B1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            B1 Grammar & Vocabulary
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
              maxWidth: "820px",
            }}
          >
            Develop your intermediate English with practical grammar,
            vocabulary, collocations, phrasal verbs, and communication skills
            for everyday and professional situations.
          </p>
        </section>

        {/* Topics */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "10px",
            }}
          >
            B1 Topics
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
              marginBottom: "25px",
            }}
          >
            Choose a topic to study the lesson, review examples, and practice
            using English in real situations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {topics.map(([title, slug], index) => (
              <Link
                key={slug}
                href={`/resources/grammar/b1/${slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      minWidth: "38px",
                      borderRadius: "10px",
                      background: "#eef4ff",
                      color: "#173b78",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: "#173b78",
                        fontSize: "17px",
                        lineHeight: 1.4,
                      }}
                    >
                      {title}
                    </h3>

                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "6px",
                        color: "#667085",
                        fontSize: "13px",
                      }}
                    >
                      Study this topic →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom navigation */}
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
            ← All Resources
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