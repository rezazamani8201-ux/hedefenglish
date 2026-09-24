"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "People & Personality",
    description: "Words for describing people, appearance, and personality.",
    image: "/images/a2/people-personality.png",
    href: "/exercises/vocabulary/a2/people-personality",
  },
  {
    title: "Jobs & Work",
    description: "Vocabulary about jobs, workplaces, and work activities.",
    image: "/images/a2/jobs-work.png",
    href: "/exercises/vocabulary/a2/jobs-work",
  },
  {
    title: "Daily Life & Habits",
    description: "Vocabulary for routines, habits, and everyday activities.",
    image: "/images/a2/daily-life-habits.png",
    href: "/exercises/vocabulary/a2/daily-life-habits",
  },
  {
    title: "Health & Lifestyle",
    description: "Words for health, common problems, and healthy living.",
    image: "/images/a2/health-lifestyle.png",
    href: "/exercises/vocabulary/a2/health-lifestyle",
  },
  {
    title: "Food & Cooking",
    description: "Vocabulary for ingredients, cooking, food, and tastes.",
    image: "/images/a2/food-cooking.png",
    href: "/exercises/vocabulary/a2/food-cooking",
  },
  {
    title: "Travel & Holidays",
    description: "Useful vocabulary for trips, hotels, airports, and holidays.",
    image: "/images/a2/travel-holidays.png",
    href: "/exercises/vocabulary/a2/travel-holidays",
  },
  {
    title: "City & Services",
    description: "Vocabulary for places, services, and everyday city life.",
    image: "/images/a2/city-services.png",
    href: "/exercises/vocabulary/a2/city-services",
  },
  {
    title: "Shopping & Fashion",
    description: "Words for shopping, clothes, sizes, prices, and discounts.",
    image: "/images/a2/shopping-fashion.png",
    href: "/exercises/vocabulary/a2/shopping-fashion",
  },
  {
    title: "House & Chores",
    description: "Vocabulary for homes, household items, and chores.",
    image: "/images/a2/house-chores.png",
    href: "/exercises/vocabulary/a2/house-chores",
  },
  {
    title: "Education & Learning",
    description: "Words related to school, classes, exams, and learning.",
    image: "/images/a2/education-learning.png",
    href: "/exercises/vocabulary/a2/education-learning",
  },
  {
    title: "Technology & Communication",
    description: "Vocabulary for phones, computers, internet, and communication.",
    image: "/images/a2/technology-communication.png",
    href: "/exercises/vocabulary/a2/technology-communication",
  },
  {
    title: "Nature & Environment",
    description: "Words for nature, animals, weather, and the environment.",
    image: "/images/a2/nature-environment.png",
    href: "/exercises/vocabulary/a2/nature-environment",
  },
  {
    title: "Free Time & Entertainment",
    description: "Vocabulary for hobbies, films, music, sports, and entertainment.",
    image: "/images/a2/free-time-entertainment.png",
    href: "/exercises/vocabulary/a2/free-time-entertainment",
  },
  {
  title: "Feelings & Everyday Situations",
  description: "Useful words for feelings and common social situations.",
  image: "/images/a2/feelings-everyday-situations.png",
  href: "/exercises/vocabulary/a2/feelings-everyday-situations",
},
];

export default function A2VocabularyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        padding: "60px 24px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#2563eb",
              marginBottom: "12px",
            }}
          >
            A2 VOCABULARY
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "42px",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            Vocabulary Exercises
          </h1>

          <p
            style={{
              margin: "16px auto 0",
              maxWidth: "680px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#6b7280",
            }}
          >
            Build your A2 vocabulary with practical exercises and useful
            everyday English.
          </p>
        </div>

        {/* Categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "18px",
                  boxShadow: "0 8px 30px rgba(15, 23, 42, 0.07)",
                  border: "1px solid #edf0f5",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#eef5ff",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <Image
  src={category.image}
  alt={category.title}
  fill
  unoptimized
  sizes="(max-width: 768px) 100vw, 33vw"
  style={{
    objectFit: "cover",
  }}
/>
                </div>

                {/* Title */}
                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "21px",
                    fontWeight: 800,
                    color: "#111827",
                  }}
                >
                  {category.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#6b7280",
                  }}
                >
                  {category.description}
                </p>

                {/* Button */}
                <div
                  style={{
                    marginTop: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#2563eb",
                  }}
                >
                  Start Exercise
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back */}
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <Link
            href="/exercises/vocabulary"
            style={{
              color: "#6b7280",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Back to Vocabulary
          </Link>
        </div>
      </div>
    </main>
  );
}