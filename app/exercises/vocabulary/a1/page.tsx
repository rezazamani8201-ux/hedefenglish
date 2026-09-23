"use client";
import Image from "next/image";

import Link from "next/link";

const categories = [
  {
    title: "Family & Friends",
    image: "/images/family-friends.png",
    description:
      "Learn and practice vocabulary about family members, friends, and relationships.",
    href: "/exercises/vocabulary/a1/family-friends",
  },
  {
    title: "Daily Routines",
    image: "/images/daily-routines.png",
    description:
      "Practice vocabulary for everyday activities and daily routines.",
    href: "/exercises/vocabulary/a1/daily-routines",
  },
  {
    title: "Home & Rooms",
    image: "/images/home-rooms.png",
    description:
      "Practice vocabulary for rooms, furniture, and things around the home.",
    href: "/exercises/vocabulary/a1/home-rooms",
  },
  {
    title: "Food & Drinks",
    image: "/images/food-drinks.png",
    description:
      "Learn useful vocabulary for food, drinks, meals, and everyday eating.",
    href: "/exercises/vocabulary/a1/food-drinks",
  },
  {
    title: "Clothes & Colors",
    image: "/images/clothes-colors.png",
    description:
      "Practice vocabulary for clothes, colors, and simple descriptions.",
    href: "/exercises/vocabulary/a1/clothes-colors",
  },
  {
    title: "Weather",
    image: "/images/weather.png",
    description:
      "Learn basic vocabulary for weather and everyday conditions.",
    href: "/exercises/vocabulary/a1/weather",
  },
  {
    title: "Places in Town",
    image: "/images/places-town.png",
    description:
      "Practice vocabulary for common places around town.",
    href: "/exercises/vocabulary/a1/places-town",
  },
  {
    title: "Transport",
    image: "/images/transport.png",
    description:
      "Learn useful vocabulary for transportation and getting around.",
    href: "/exercises/vocabulary/a1/transport",
  },
  {
    title: "House & Furniture",
    image: "/images/house-furniture.png",
    description:
      "Practice vocabulary for furniture and things inside the home.",
    href: "/exercises/vocabulary/a1/house-furniture",
  },
  {
    title: "Shopping & Money",
    image: "/images/shopping-money.png",
    description:
      "Practice useful English vocabulary for shopping and money.",
    href: "/exercises/vocabulary/a1/shopping-money",
  },
  {
    title: "School & Classroom",
    image: "/images/school-classroom.png",
    description:
      "Learn essential vocabulary for school and the classroom.",
    href: "/exercises/vocabulary/a1/school-classroom",
  },
  {
    title: "Body & Health",
    image: "/images/body-health.png",
    description:
      "Learn basic vocabulary for parts of the body and everyday health.",
    href: "/exercises/vocabulary/a1/body-health",
  },
  {
    title: "Animals & Pets",
    image: "/images/animals-pets.png",
    description:
      "Practice vocabulary about common animals and pets.",
    href: "/exercises/vocabulary/a1/animals-pets",
  },
  {
    title: "Holidays & Travel",
    image: "/images/holidays-travel.png",
    description:
      "Practice essential vocabulary for holidays and travel.",
    href: "/exercises/vocabulary/a1/holidays-travel",
  },
];

export default function A1Vocabulary() {
  return (
    <main
  className="a1-vocabulary-landing"
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
            href="/exercises/vocabulary"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Back to Vocabulary
          </Link>
        </div>
      </header>

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
            A1 Vocabulary
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
            Choose a topic and practice essential English vocabulary
            through interactive exercises.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                height: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  border: "1px solid #e8edf3",
                  borderRadius: "18px",
                  padding: "28px",
                  boxShadow:
                    "0 8px 25px rgba(23, 59, 120, 0.05)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {category.image ? (
  <div
    style={{
      width: "100%",
      height: "120px",
      borderRadius: "14px",
      overflow: "hidden",
      marginBottom: "20px",
      background: "#eef5ff",
      position: "relative",
    }}
  >
    <Image
      src={category.image}
      alt={category.title}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      style={{
        objectFit: "cover",
      }}
    />
  </div>
) : (
  <div
    style={{
      width: "52px",
      height: "52px",
      borderRadius: "14px",
      background: "#eef5ff",
      color: "#2563eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: 800,
      marginBottom: "20px",
    }}
  >
    {category.title.charAt(0)}
  </div>
)}

                <h2
                  style={{
                    margin: "0 0 10px",
                    color: "#173b78",
                    fontSize: "21px",
                  }}
                >
                  {category.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    lineHeight: 1.65,
                    fontSize: "15px",
                  }}
                >
                  {category.description}
                </p>

                <div
                  style={{
                    marginTop: "22px",
                    color: "#2563eb",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Start exercises →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}