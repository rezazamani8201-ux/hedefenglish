"use client";

import Link from "next/link";
import ExploreButton from "../components/ExploreButton";

const exerciseCategories = [
  {
    title: "Grammar Exercises",
    description: "Grammar practice worksheets and PDF exercises.",
    href: "/exercises/grammar",
    exploreText: "Explore Grammar",
  },
  {
    title: "Vocabulary Exercises",
    description:
      "Build your vocabulary with level-based interactive exercises.",
    href: "/exercises/vocabulary",
    exploreText: "Explore Vocabulary",
  },
  {
    title: "Reading Exercises",
    description:
      "Reading practice and PDF worksheets for different levels.",
    href: "/exercises/reading",
    exploreText: "Explore Reading",
  },
];

export default function Exercises() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        paddingBottom: "80px",
      }}
    >
      {/* HEADER */}
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
            alignItems: "center",
            justifyContent: "space-between",
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
            href="/"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 6% 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#0645E5",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            HEDEF ENGLISH
          </p>

          <h1
            style={{
              margin: "0 0 16px",
              color: "#13294b",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 800,
            }}
          >
            Exercises
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "650px",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Practice your English with useful exercises and downloadable
            learning materials.
          </p>
        </div>

        {/* EXERCISE CATEGORIES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {exerciseCategories.map((item) => (
            <article
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e8edf3",
                borderRadius: "16px",
                padding: "28px",
                boxShadow:
                  "0 8px 25px rgba(23, 59, 120, 0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  margin: "0 0 10px",
                  color: "#173b78",
                  fontSize: "21px",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  margin: "0 0 24px",
                  color: "#64748b",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {item.description}
              </p>

              <ExploreButton
                text={item.exploreText}
                href={item.href}
              />
            </article>
          ))}

          {/* LISTENING & SPEAKING */}
          <article
            style={{
              background: "#ffffff",
              border: "1px solid #e8edf3",
              borderRadius: "16px",
              padding: "28px",
              boxShadow:
                "0 8px 25px rgba(23, 59, 120, 0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                color: "#173b78",
                fontSize: "21px",
              }}
            >
              Listening & Speaking
            </h2>

            <p
              style={{
                margin: "0 0 24px",
                color: "#64748b",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              Listening and speaking practice materials.
            </p>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Coming Soon
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}