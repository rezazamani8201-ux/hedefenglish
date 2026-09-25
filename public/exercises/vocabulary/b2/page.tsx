"use client";

import Link from "next/link";

const topics = [
  {
    number: 1,
    title: "Relationships & Communication",
    description:
      "Develop advanced vocabulary for relationships, communication styles, social interaction, and interpersonal situations.",
    image: "/images/b2/relationships-communication.png",
    href: "/exercises/vocabulary/b2/relationships-communication",
  },
  {
    number: 2,
    title: "Work, Career & Professional Life",
    description:
      "Build advanced vocabulary for careers, professional communication, workplace responsibilities, and career development.",
    image: "/images/b2/work-career-professional-life.png",
    href: "/exercises/vocabulary/b2/work-career-professional-life",
  },
  {
    number: 3,
    title: "Personal Development & Success",
    description:
      "Explore vocabulary related to ambition, achievement, motivation, self-improvement, and personal success.",
    image: "/images/b2/lifestyle-personal-development.png",
    href: "/exercises/vocabulary/b2/lifestyle-personal-development",
  },
  {
    number: 4,
    title: "Health, Medicine & Well-being",
    description:
      "Learn advanced vocabulary about medical conditions, treatment, healthcare, prevention, and well-being.",
    image: "/images/b2/health-medicine-well-being.png",
    href: "/exercises/vocabulary/b2/health-medicine-well-being",
  },
  {
    number: 5,
    title: "Food, Nutrition & Lifestyle",
    description:
      "Practice vocabulary related to nutrition, eating habits, dietary choices, food culture, and healthy lifestyles.",
    image: "/images/b2/food-nutrition-lifestyle.png",
    href: "/exercises/vocabulary/b2/food-nutrition-lifestyle",
  },
  {
    number: 6,
    title: "Travel, Tourism & Global Experiences",
    description:
      "Develop vocabulary for international travel, tourism, cultural experiences, destinations, and global mobility.",
    image: "/images/b2/travel-tourism-global-experiences.png",
    href: "/exercises/vocabulary/b2/travel-tourism-global-experiences",
  },
  {
    number: 7,
    title: "Society, Politics & Public Issues",
    description:
      "Explore vocabulary related to society, public issues, government, politics, social change, and civic life.",
    image: "/images/b2/society-politics-public-issues.png",
    href: "/exercises/vocabulary/b2/society-politics-public-issues",
  },
  {
    number: 8,
    title: "Money, Business & Consumer Behavior",
    description:
      "Learn advanced vocabulary about finance, business, markets, spending, investment, and consumer behavior.",
    image: "/images/b2/money-business-consumer-behavior.png",
    href: "/exercises/vocabulary/b2/money-business-consumer-behavior",
  },
  {
    number: 9,
    title: "Home, Housing & Modern Living",
    description:
      "Practice vocabulary related to housing, property, household life, living arrangements, and modern lifestyles.",
    image: "/images/b2/home-housing-modern-living.png",
    href: "/exercises/vocabulary/b2/home-housing-modern-living",
  },
  {
    number: 10,
    title: "Education, Learning & Knowledge",
    description:
      "Build advanced vocabulary for education systems, learning strategies, academic life, knowledge, and skills.",
    image: "/images/b2/education-learning-knowledge.png",
    href: "/exercises/vocabulary/b2/education-learning-knowledge",
  },
  {
    number: 11,
    title: "Technology, Media & Digital Life",
    description:
      "Explore vocabulary about digital technology, media, online communication, content creation, and digital life.",
    image: "/images/b2/technology-media-digital-life.png",
    href: "/exercises/vocabulary/b2/technology-media-digital-life",
  },
  {
    number: 12,
    title: "Environment, Climate & Sustainability",
    description:
      "Learn advanced vocabulary related to climate change, environmental challenges, conservation, and sustainability.",
    image: "/images/b2/environment-climate-sustainability.png",
    href: "/exercises/vocabulary/b2/environment-climate-sustainability",
  },
  {
    number: 13,
    title: "Culture, Arts & Entertainment",
    description:
      "Develop vocabulary for art, music, literature, film, cultural events, entertainment, and creative expression.",
    image: "/images/b2/culture-arts-entertainment.png",
    href: "/exercises/vocabulary/b2/culture-arts-entertainment",
  },
  {
    number: 14,
    title: "Emotions, Opinions & Complex Situations",
    description:
      "Practice advanced vocabulary for emotions, opinions, reactions, disagreements, challenges, and complex situations.",
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

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 6%",
        }}
      >
        {/* TITLE */}
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
            Improve your English vocabulary with advanced B2 topics covering
            communication, work, society, technology, culture, and more.
          </p>
        </div>

        {/* TOPICS GRID */}
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
                {/* IMAGE */}
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#f1f5f9",
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

                {/* CARD CONTENT */}
                <div
                  style={{
                    padding: "25px",
                  }}
                >
                  {/* NUMBER */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "16px",
                      marginBottom: "18px",
                    }}
                  >
                    {topic.number}
                  </div>

                  {/* TITLE */}
                  <h2
                    style={{
                      color: "#13294b",
                      fontSize: "21px",
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      fontWeight: 800,
                    }}
                  >
                    {topic.title}
                  </h2>

                  {/* DESCRIPTION */}
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

                  {/* LINK */}
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

        {/* BOTTOM LINK */}
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