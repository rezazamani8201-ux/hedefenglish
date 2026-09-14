"use client";

import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Greetings & Introductions",
    description:
      "Learn how to greet people, introduce yourself, and ask basic personal questions.",
    slug: "greetings-introductions",
  },
  {
    number: "02",
    title: "Personal Information",
    description:
      "Practice talking about your name, age, country, job, and basic personal information.",
    slug: "personal-information",
  },
  {
    number: "03",
    title: "Daily Routines",
    description:
      "Talk about everyday activities, routines, and what you do during the day.",
    slug: "daily-routines",
  },
  {
    number: "04",
    title: "Family & Friends",
    description:
      "Learn useful language for describing your family members and friends.",
    slug: "family-friends",
  },
  {
    number: "05",
    title: "Food & Drinks",
    description:
      "Practice simple conversations about food, drinks, likes, and dislikes.",
    slug: "food-drinks",
  },
  {
    number: "06",
    title: "Shopping",
    description:
      "Learn how to ask about prices, sizes, colors, and basic shopping needs.",
    slug: "shopping",
  },
  {
    number: "07",
    title: "Places & Directions",
    description:
      "Practice asking for and giving simple directions in everyday situations.",
    slug: "places-directions",
  },
  {
    number: "08",
    title: "At the Restaurant",
    description:
      "Learn useful expressions for ordering food and communicating in a restaurant.",
    slug: "restaurant",
  },
  {
    number: "09",
    title: "Travel & Transport",
    description:
      "Practice simple conversations about buses, trains, airports, and travel.",
    slug: "travel-transport",
  },
  {
    number: "10",
    title: "Free Time & Hobbies",
    description:
      "Talk about hobbies, interests, free-time activities, and weekend plans.",
    slug: "free-time-hobbies",
  },
  {
    number: "11",
    title: "Weather & Seasons",
    description:
      "Learn how to talk about the weather, seasons, and simple weather conditions.",
    slug: "weather-seasons",
  },
  {
    number: "12",
    title: "Everyday Conversations",
    description:
      "Build confidence with practical conversations used in common daily situations.",
    slug: "everyday-conversations",
  },
];

export default function A1ListeningSpeakingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
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
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "35px",
          }}
        >
          ← Resources
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "45px 35px",
            border: "1px solid #e7ebf0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "15px",
            }}
          >
            LISTENING & SPEAKING — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              margin: "0 0 16px",
              color: "#173b78",
            }}
          >
            Listening & Speaking
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#5d6878",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            Build your confidence with practical English listening and
            speaking lessons for everyday situations.
          </p>
        </section>

        {/* Introduction */}
        <section
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "30px",
            border: "1px solid #e7ebf0",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              fontSize: "25px",
              margin: "0 0 12px",
              color: "#173b78",
            }}
          >
            What Will You Learn?
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#5d6878",
              margin: 0,
            }}
          >
            These A1 lessons focus on simple listening, useful expressions,
            pronunciation, and everyday speaking. You will practice English
            that you can use in real-life conversations.
          </p>
        </section>

        {/* Topics */}
        <section>
          <h2
            style={{
              fontSize: "28px",
              margin: "0 0 20px",
              color: "#173b78",
            }}
          >
            A1 Listening & Speaking Topics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/resources/listening-speaking/a1/${topic.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background: "#fff",
                  border: "1px solid #e3e8ef",
                  borderRadius: "16px",
                  padding: "25px",
                  display: "block",
                  boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#6b7280",
                    marginBottom: "12px",
                  }}
                >
                  LESSON {topic.number}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    color: "#173b78",
                    margin: "0 0 10px",
                  }}
                >
                  {topic.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#667085",
                    margin: "0 0 18px",
                  }}
                >
                  {topic.description}
                </p>

                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#173b78",
                  }}
                >
                  Start Lesson →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <Link
            href="/resources"
            style={{
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
            }}
          >
            ← Back to Resources
          </Link>

          <Link
            href="/resources/grammar/a1"
            style={{
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
            }}
          >
            A1 Grammar →
          </Link>
        </div>
      </div>
    </main>
  );
}