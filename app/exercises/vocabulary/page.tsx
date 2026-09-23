"use client";

import Link from "next/link";

export default function VocabularyExercises() {
  const levels = [
    {
      level: "A1",
      title: "Beginner",
      description: "Build your basic English vocabulary with simple interactive exercises.",
      href: "/exercises/vocabulary/a1",
    },
    {
      level: "A2",
      title: "Elementary",
      description: "Expand your everyday vocabulary and improve your word knowledge.",
      href: "#",
    },
    {
      level: "B1",
      title: "Intermediate",
      description: "Develop a wider vocabulary for everyday and practical English.",
      href: "#",
    },
    {
      level: "B2",
      title: "Upper-Intermediate",
      description: "Strengthen your vocabulary with more advanced English practice.",
      href: "#",
    },
  ];

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
            href="/exercises"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Back to Exercises
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
              color: "#3b82f6",
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
            Vocabulary Exercises
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "680px",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Choose your English level and practice vocabulary with
            interactive exercises and downloadable materials.
          </p>
        </div>

        {/* LEVEL CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "22px",
          }}
        >
          {levels.map((item) => {
            const isAvailable = item.href !== "#";

            const card = (
              <div
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  border: "1px solid #e8edf3",
                  borderRadius: "18px",
                  padding: "30px",
                  boxShadow: "0 8px 25px rgba(23, 59, 120, 0.05)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: isAvailable ? "pointer" : "default",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "15px",
                    background: "#eef5ff",
                    color: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: 800,
                    marginBottom: "22px",
                  }}
                >
                  {item.level}
                </div>

                <h2
                  style={{
                    margin: "0 0 10px",
                    color: "#173b78",
                    fontSize: "22px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    lineHeight: 1.65,
                    fontSize: "15px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "24px",
                    color: isAvailable ? "#2563eb" : "#94a3b8",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {isAvailable ? "Explore A1 →" : "Coming soon"}
                </div>
              </div>
            );

            return isAvailable ? (
              <Link
                key={item.level}
                href={item.href}
                style={{
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {card}
              </Link>
            ) : (
              <div key={item.level}>{card}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}