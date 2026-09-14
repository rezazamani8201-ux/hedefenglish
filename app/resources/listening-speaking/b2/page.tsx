"use client";

import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Advanced Conversations",
    description:
      "Understand and participate in longer, more natural conversations in real-life situations.",
    slug: "advanced-conversations-real-life-communication",
  },
  {
    number: 2,
    title: "Workplace Communication",
    description:
      "Develop confident listening and speaking skills for meetings, discussions, and professional situations.",
    slug: "workplace-communication",
  },
  {
    number: 3,
    title: "Travel & Cultural Experiences",
    description:
      "Talk about travel, cultural experiences, problems, and unexpected situations with confidence.",
    slug: "travel-cultural-experiences",
  },
  {
    number: 4,
    title: "Health & Well-Being",
    description:
      "Discuss health, lifestyle, treatment, and well-being using clear and appropriate language.",
    slug: "health-well-being",
  },
  {
    number: 5,
    title: "Social Issues & Society",
    description:
      "Listen to and discuss social issues, modern life, communities, and different points of view.",
    slug: "social-issues-society",
  },
  {
    number: 6,
    title: "Opinions, Arguments & Debates",
    description:
      "Express opinions, support arguments, challenge ideas, and participate in structured discussions.",
    slug: "opinions-arguments-debates",
  },
  {
    number: 7,
    title: "Education & Career",
    description:
      "Talk about education, careers, goals, achievements, and future professional plans.",
    slug: "education-career",
  },
  {
    number: 8,
    title: "Problems & Solutions",
    description:
      "Discuss complex problems, explain possible solutions, and negotiate practical decisions.",
    slug: "problems-solutions",
  },
  {
    number: 9,
    title: "Technology & Modern Life",
    description:
      "Discuss technology, digital communication, social media, and their impact on everyday life.",
    slug: "technology-modern-life",
  },
  {
    number: 10,
    title: "Environment & Global Issues",
    description:
      "Discuss environmental challenges, global issues, responsibility, and possible solutions.",
    slug: "environment-global-issues",
  },
  {
    number: 11,
    title: "Presentations & Public Speaking",
    description:
      "Build the language and confidence needed for presentations, explanations, and public speaking.",
    slug: "presentations-public-speaking",
  },
  {
    number: 12,
    title: "B2 Listening & Speaking Review",
    description:
      "Review advanced listening and speaking skills through practical communication tasks.",
    slug: "communication-review",
  },
];

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "18px",
  padding: "26px",
  textDecoration: "none",
  color: "#172033",
  boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

export default function B2ListeningSpeakingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Back */}
        <Link
          href="/resources"
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
          ← Back to Resources
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
            marginBottom: "35px",
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
            B2 LISTENING & SPEAKING
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            B2 Listening & Speaking
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "760px",
              margin: 0,
            }}
          >
            Improve your ability to understand natural English, express
            complex ideas, participate in discussions, and communicate
            confidently in real-life and professional situations.
          </p>
        </section>

        {/* Introduction */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "12px",
            }}
          >
            Build Confident Communication
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            At B2 level, listening and speaking are about more than
            understanding individual words. You should be able to follow
            longer conversations, understand different viewpoints, explain
            your ideas clearly, and respond naturally in a wide range of
            situations.
          </p>
        </section>

        {/* Lessons */}
        <section>
          <div style={{ marginBottom: "22px" }}>
            <h2
              style={{
                color: "#173b78",
                margin: 0,
                fontSize: "28px",
              }}
            >
              B2 Listening & Speaking Lessons
            </h2>

            <p
              style={{
                color: "#667085",
                marginTop: "8px",
                lineHeight: 1.7,
              }}
            >
              Choose a lesson and develop your advanced communication skills.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={`/resources/listening-speaking/b2/${lesson.slug}`}
                style={cardStyle}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#173b78",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {lesson.number}
                  </div>

                  <div
                    style={{
                      color: "#98a2b3",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    LESSON {lesson.number}
                  </div>
                </div>

                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "20px",
                    lineHeight: 1.35,
                    margin: "0 0 12px",
                  }}
                >
                  {lesson.title}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {lesson.description}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    color: "#173b78",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Start Lesson →
                </div>
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
            padding: "28px",
            marginTop: "35px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            B2 Study Tip
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Listen to natural English regularly and try to speak without
            translating every sentence in your head. Focus on meaning,
            context, pronunciation, and useful expressions. The more you
            practice, the more naturally you will communicate.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link href="/resources" style={navStyle}>
            ← Resources
          </Link>

          <Link
            href="/resources/grammar/b2"
            style={{
              ...navStyle,
              background: "#173b78",
              color: "#fff",
              border: "1px solid #173b78",
            }}
          >
            B2 Grammar →
          </Link>
        </div>
      </div>
    </main>
  );
}

const navStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};