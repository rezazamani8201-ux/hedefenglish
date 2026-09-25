"use client";

import Link from "next/link";

const topics = [
  {
    number: 1,
    title: "Relationships & Social Life",

    description:
      "Learn useful vocabulary about relationships, friendship, communication, and social life.",
    image: "/images/b1/relationships-social-life.png",
    href: "/exercises/vocabulary/b1/relationships-social-life",
  },
  {
    number: 2,
    title: "Work & Career",

    description:
      "Practice vocabulary about jobs, careers, workplaces, responsibilities, and professional life.",
    image: "/images/b1/work-career.png",
    href: "/exercises/vocabulary/b1/work-career",
  },
  {
    number: 3,
    title: "Lifestyle & Personal Development",

    description:
      "Build vocabulary for habits, goals, motivation, routines, and personal development.",
    image: "/images/b1/lifestyle-personal-development.png",
    href: "/exercises/vocabulary/b1/lifestyle-personal-development",
  },
  {
    number: 4,
    title: "Health & Well-being",

    description:
      "Learn vocabulary related to health, treatment, exercise, nutrition, and well-being.",
    image: "/images/b1/health-well-being.png",
    href: "/exercises/vocabulary/b1/health-well-being",
  },
  {
    number: 5,
    title: "Food, Cooking & Eating Habits",

    description:
      "Practice vocabulary about food, cooking methods, ingredients, nutrition, and meals.",
    image: "/images/b1/food-cooking-eating-habits.png",
    href: "/exercises/vocabulary/b1/food-cooking-eating-habits",
  },
  {
    number: 6,
    title: "Travel & Experiences",

    description:
      "Learn useful vocabulary about travel, accommodation, sightseeing, transport, and experiences.",
    image: "/images/b1/travel-experiences.png",
    href: "/exercises/vocabulary/b1/travel-experiences",
  },
  {
    number: 7,
    title: "City, Society & Services",

    description:
      "Practice vocabulary about cities, public services, transportation, neighborhoods, and urban life.",
    image: "/images/b1/city-society-services.png",
    href: "/exercises/vocabulary/b1/city-society-services",
  },
  {
    number: 8,
    title: "Shopping, Money & Consumer Choices",

    description:
      "Learn vocabulary about shopping, prices, money, products, discounts, and consumer choices.",
    image: "/images/b1/shopping-money-consumer-choices.png",
    href: "/exercises/vocabulary/b1/shopping-money-consumer-choices",
  },
  {
    number: 9,
    title: "Home, Living & Responsibilities",

    description:
      "Practice vocabulary about homes, household tasks, living arrangements, and responsibilities.",
    image: "/images/b1/home-living-responsibilities.png",
    href: "/exercises/vocabulary/b1/home-living-responsibilities",
  },
  {
    number: 10,
    title: "Education & Skills",

    description:
      "Build vocabulary related to education, studying, exams, qualifications, and learning skills.",
    image: "/images/b1/education-skills.png",
    href: "/exercises/vocabulary/b1/education-skills",
  },
  {
    number: 11,
    title: "Technology, Media & Communication",

    description:
      "Learn vocabulary about technology, digital communication, social media, and online information.",
    image: "/images/b1/technology-media-communication.png",
    href: "/exercises/vocabulary/b1/technology-media-communication",
  },
  {
    number: 12,
    title: "Nature, Environment & Climate",

    description:
      "Practice vocabulary about nature, pollution, climate change, wildlife, and sustainable living.",
    image: "/images/b1/nature-environment-climate.png",
    href: "/exercises/vocabulary/b1/nature-environment-climate",
  },
  {
    number: 13,
    title: "Entertainment, Culture & Leisure",

    description:
      "Learn vocabulary about entertainment, culture, hobbies, leisure, events, and free time.",
    image: "/images/b1/entertainment-culture-leisure.png",
    href: "/exercises/vocabulary/b1/entertainment-culture-leisure",
  },
  {
    number: 14,
    title: "Feelings, Opinions & Everyday Problems",

    description:
      "Practice vocabulary about feelings, opinions, reactions, communication, and everyday problems.",
    image: "/images/b1/feelings-opinions-everyday-problems.png",
    href: "/exercises/vocabulary/b1/feelings-opinions-everyday-problems",
  },
];

export default function B1VocabularyPage() {
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
            B1 VOCABULARY
          </p>

          <h1
            style={{
              color: "#13294b",
              fontSize: "clamp(32px, 5vw, 48px)",
              margin: "0 0 12px",
              fontWeight: 800,
            }}
          >
            B1 Vocabulary
          </h1>

          <p
            style={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Improve your English vocabulary with practical B1 topics covering
            everyday life, work, travel, education, technology, and more.
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
  key={topic.image}
  src={`${topic.image}?v=2`}
  alt={topic.title}
  width={800}
  height={450}
  style={{
    width: "100%",
    height: "190px",
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




