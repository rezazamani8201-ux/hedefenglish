"use client";

import Link from "next/link";

const levels = [
  {
    level: "A1",
    title: "A1 Vocabulary",
    description:
      "Build your foundation with essential vocabulary for everyday English.",
    href: "/exercises/vocabulary/a1",
  },
  {
    level: "A2",
    title: "A2 Vocabulary",
    description:
      "Expand your vocabulary with practical topics for everyday communication.",
    href: "/exercises/vocabulary/a2",
  },
  {
    level: "B1",
    title: "B1 Vocabulary",
    description:
      "Improve your vocabulary with practical intermediate topics for real-life English.",
    href: "/exercises/vocabulary/b1",
  },
  {
    level: "B2",
    title: "B2 Vocabulary",
    description:
      "Develop advanced vocabulary for communication, work, society, technology, culture, and more.",
    href: "/exercises/vocabulary/b2",
  },
];

export default function VocabularyLevelsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        paddingBottom: "80px",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e8edf3",
          padding: "28px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#173b78",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            Hedef <span style={{ color: "#3b82f6" }}>English</span>
          </Link>

          <Link
            href="/exercises"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontWeight: 600,
            }}
          >
            &larr; Back to Exercises
          </Link>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 6%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              color: "#3b82f6",
              fontWeight: 800,
              letterSpacing: "1.5px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            VOCABULARY
          </p>

          <h1
            style={{
              color: "#13294b",
              fontSize: "clamp(32px, 5vw, 48px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            Vocabulary Levels
          </h1>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Choose your English level and practice vocabulary through
            structured exercises designed for each stage of your learning.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {levels.map((item) => (
            <Link
              key={item.level}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
                  padding: "30px",
                  height: "100%",
                  boxSizing: "border-box",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "#eff6ff",
                    color: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                    marginBottom: "22px",
                  }}
                >
                  {item.level}
                </div>

                <h2
                  style={{
                    color: "#13294b",
                    fontSize: "24px",
                    margin: "0 0 12px",
                    fontWeight: 800,
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: "0 0 22px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    color: "#2563eb",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  Explore Level &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          <Link
            href="/exercises"
            style={{
              textDecoration: "none",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            &larr; Back to Exercises
          </Link>
        </div>
      </div>
    </main>
  );
}