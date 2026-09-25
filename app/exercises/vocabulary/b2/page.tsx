"use client";

import Link from "next/link";

const topics = [
  {
    number: 1,
    title: "Relationships & Communication",
    description:
      "Develop advanced vocabulary for relationships, communication, social interaction, and interpersonal situations.",
    image: "/images/b2/relationships-communication.png",
    href: "/exercises/vocabulary/b2/relationships-communication",
  },
  {
    number: 2,
    title: "Work, Career & Professional Life",
    description:
      "Build advanced vocabulary related to careers, professional communication, workplaces, leadership, and responsibilities.",
    image: "/images/b2/work-career-professional-life.png",
    href: "/exercises/vocabulary/b2/work-career-professional-life",
  },
  {
    number: 3,
    title: "Personal Development & Success",
    description:
      "Learn vocabulary about personal growth, achievement, motivation, goals, productivity, and success.",
    image: "/images/b2/lifestyle-personal-development.png",
    href: "/exercises/vocabulary/b2/lifestyle-personal-development",
  },
  {
    number: 4,
    title: "Health, Medicine & Well-being",
    description:
      "Practice advanced vocabulary related to medicine, treatment, health conditions, prevention, and well-being.",
    image: "/images/b2/health-medicine-well-being.png",
    href: "/exercises/vocabulary/b2/health-medicine-well-being",
  },
  {
    number: 5,
    title: "Food, Nutrition & Lifestyle",
    description:
      "Explore vocabulary about nutrition, eating habits, food choices, health, and modern lifestyles.",
    image: "/images/b2/food-nutrition-lifestyle.png",
    href: "/exercises/vocabulary/b2/food-nutrition-lifestyle",
  },
  {
    number: 6,
    title: "Travel, Tourism & Global Experiences",
    description:
      "Develop vocabulary for international travel, tourism, cultural experiences, transportation, and global communication.",
    image: "/images/b2/travel-tourism-global-experiences.png",
    href: "/exercises/vocabulary/b2/travel-tourism-global-experiences",
  },
  {
    number: 7,
    title: "Society, Politics & Public Issues",
    description:
      "Learn advanced vocabulary for society, public issues, government, politics, civic life, and social change.",
    image: "/images/b2/society-politics-public-issues.png",
    href: "/exercises/vocabulary/b2/society-politics-public-issues",
  },
  {
    number: 8,
    title: "Money, Business & Consumer Behavior",
    description:
      "Practice vocabulary related to finance, business, markets, spending, investment, and consumer behavior.",
    image: "/images/b2/money-business-consumer-behavior.png",
    href: "/exercises/vocabulary/b2/money-business-consumer-behavior",
  },
  {
    number: 9,
    title: "Home, Housing & Modern Living",
    description:
      "Build vocabulary about housing, living arrangements, household responsibilities, and modern lifestyles.",
    image: "/images/b2/home-housing-modern-living.png",
    href: "/exercises/vocabulary/b2/home-housing-modern-living",
  },
  {
    number: 10,
    title: "Education, Learning & Knowledge",
    description:
      "Develop vocabulary related to education, academic life, learning strategies, research, and knowledge.",
    image: "/images/b2/education-learning-knowledge.png",
    href: "/exercises/vocabulary/b2/education-learning-knowledge",
  },
  {
    number: 11,
    title: "Technology, Media & Digital Life",
    description:
      "Explore advanced vocabulary about technology, digital communication, media, online platforms, and digital life.",
    image: "/images/b2/technology-media-digital-life.png",
    href: "/exercises/vocabulary/b2/technology-media-digital-life",
  },
  {
    number: 12,
    title: "Environment, Climate & Sustainability",
    description:
      "Learn vocabulary about climate change, environmental issues, sustainability, energy, and conservation.",
    image: "/images/b2/environment-climate-sustainability.png",
    href: "/exercises/vocabulary/b2/environment-climate-sustainability",
  },
  {
    number: 13,
    title: "Culture, Arts & Entertainment",
    description:
      "Practice advanced vocabulary related to culture, art, literature, entertainment, events, and creative expression.",
    image: "/images/b2/culture-arts-entertainment.png",
    href: "/exercises/vocabulary/b2/culture-arts-entertainment",
  },
  {
    number: 14,
    title: "Emotions, Opinions & Complex Situations",
    description:
      "Develop vocabulary for expressing emotions, opinions, reactions, disagreements, and complex everyday situations.",
    image: "/images/b2/emotions-opinions-complex-situations.png",
    href: "/exercises/vocabulary/b2/emotions-opinions-complex-situations",
  },
];

export default function B2VocabularyPage() {
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
            href="/exercises/vocabulary"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontWeight: 600,
            }}
          >
            &larr; Back to Vocabulary
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
            B2 VOCABULARY
          </p>

          <h1
            style={{
              color: "#13294b",
              fontSize: "clamp(32px, 5vw, 48px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            B2 Vocabulary
          </h1>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Develop advanced English vocabulary through practical topics
            covering communication, work, society, technology, culture, and
            everyday life.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {topics.map((topic) => (
            <Link
              key={topic.number}
              href={topic.href}
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
                  overflow: "hidden",
                  height: "100%",
                  boxSizing: "border-box",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={topic.image}
                    alt={topic.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      color: "#3b82f6",
                      fontWeight: 800,
                      fontSize: "13px",
                      marginBottom: "8px",
                    }}
                  >
                    B2 • {topic.number}
                  </div>

                  <h2
                    style={{
                      color: "#13294b",
                      fontSize: "20px",
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      fontWeight: 800,
                    }}
                  >
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      margin: "0 0 22px",
                    }}
                  >
                    {topic.description}
                  </p>

                  <div
                    style={{
                      color: "#2563eb",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    Explore Topic &rarr;
                  </div>
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
            href="/exercises/vocabulary"
            style={{
              textDecoration: "none",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            &larr; Back to All Vocabulary Levels
          </Link>
        </div>
      </div>
    </main>
  );
}