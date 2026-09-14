"use client";

import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Everyday Conversations & Small Talk",
    slug: "everyday-conversations-small-talk",
    description:
      "Practice natural conversations, introductions, small talk, and everyday social interactions.",
  },
  {
    number: "02",
    title: "Work & Professional Communication",
    slug: "work-professional-communication",
    description:
      "Talk about jobs, responsibilities, meetings, workplace situations, and professional communication.",
  },
  {
    number: "03",
    title: "Travel & Real-Life Situations",
    slug: "travel-real-life-situations",
    description:
      "Practice useful English for airports, hotels, transportation, and unexpected travel situations.",
  },
  {
    number: "04",
    title: "Health & Well-being",
    slug: "health-well-being",
    description:
      "Talk about health, symptoms, habits, exercise, lifestyle, and everyday well-being.",
  },
  {
    number: "05",
    title: "News & Current Events",
    slug: "news-current-events",
    description:
      "Discuss news stories, events, headlines, and everyday topics from the world around you.",
  },
  {
    number: "06",
    title: "Opinions & Discussions",
    slug: "opinions-discussions",
    description:
      "Express opinions, explain your ideas, agree and disagree, and participate in discussions.",
  },
  {
    number: "07",
    title: "Problems & Solutions",
    slug: "problems-solutions",
    description:
      "Describe problems, explain situations, suggest solutions, and respond to difficult situations.",
  },
  {
    number: "08",
    title: "Relationships & Social Life",
    slug: "relationships-social-life",
    description:
      "Talk about friendships, relationships, social activities, feelings, and personal experiences.",
  },
  {
    number: "09",
    title: "Education & Learning",
    slug: "education-learning",
    description:
      "Discuss education, learning methods, studying, skills, goals, and personal development.",
  },
  {
    number: "10",
    title: "Technology & Modern Life",
    slug: "technology-modern-life",
    description:
      "Talk about technology, social media, digital habits, online communication, and modern life.",
  },
  {
    number: "11",
    title: "Storytelling & Experiences",
    slug: "storytelling-experiences",
    description:
      "Practice telling stories, describing past experiences, and keeping a conversation interesting.",
  },
  {
    number: "12",
    title: "B1 Communication Review",
    slug: "communication-review",
    description:
      "Review key B1 speaking skills, useful expressions, listening strategies, and real-life communication.",
  },
];

export default function B1ListeningSpeakingPage() {
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
        {/* Back */}
        <Link
          href="/resources"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
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
          ← All Resources
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "45px 35px",
            marginBottom: "30px",
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
              marginBottom: "16px",
            }}
          >
            LISTENING & SPEAKING — B1
          </div>

          <h1
            style={{
              margin: "0 0 16px",
              color: "#173b78",
              fontSize: "42px",
              lineHeight: 1.2,
            }}
          >
            B1 Listening & Speaking
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "800px",
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Build confidence in real-life English through listening practice,
            speaking activities, useful expressions, role-plays, and practical
            conversations.
          </p>
        </section>

        {/* Introduction */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "14px",
            }}
          >
            What You&apos;ll Practice
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#475467",
              marginBottom: "18px",
            }}
          >
            At B1 level, you should be able to communicate about familiar
            topics, explain your ideas, describe experiences, and take part in
            everyday conversations with greater confidence.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              "Listening for key information",
              "Speaking with more confidence",
              "Expressing opinions",
              "Describing experiences",
              "Handling real-life situations",
              "Using natural expressions",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "16px",
                  fontWeight: 600,
                  color: "#344054",
                  border: "1px solid #e5eaf0",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section>
          <div style={{ marginBottom: "20px" }}>
            <h2
              style={{
                color: "#173b78",
                margin: 0,
                fontSize: "28px",
              }}
            >
              B1 Topics
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: 1.7,
                marginTop: "8px",
              }}
            >
              Choose a topic and practice listening and speaking through
              realistic situations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "20px",
            }}
          >
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/resources/listening-speaking/b1/${topic.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background: "#fff",
                  border: "1px solid #e5eaf0",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "block",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    color: "#7c8aa5",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    letterSpacing: "0.5px",
                  }}
                >
                  LESSON {topic.number}
                </div>

                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "20px",
                    lineHeight: 1.4,
                    margin: "0 0 12px",
                  }}
                >
                  {topic.title}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    lineHeight: 1.7,
                    fontSize: "14px",
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
                    fontWeight: 700,
                  }}
                >
                  Start Practice →
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
            padding: "30px",
            marginTop: "30px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            B1 Study Tip
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#475467",
              marginBottom: "10px",
            }}
          >
            Don&apos;t try to understand every single word when listening.
            Focus first on the main idea and key information.
          </p>

          <p
            style={{
              lineHeight: 1.8,
              color: "#475467",
              margin: 0,
            }}
          >
            When speaking, focus on communicating your message clearly. Use
            useful expressions, connect your ideas, and don&apos;t be afraid
            of making mistakes.
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
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/grammar/b1"
            style={{
              ...buttonStyle,
            }}
          >
            ← B1 Grammar
          </Link>

          <Link
            href="/resources/materials/b1"
            style={{
              ...buttonStyle,
            }}
          >
            B1 Free Learning Materials →
          </Link>
        </div>
      </div>
    </main>
  );
}

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