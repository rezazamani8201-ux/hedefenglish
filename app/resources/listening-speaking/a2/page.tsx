"use client";

import Link from "next/link";

const topics = [
  {
    number: 1,
    title: "Talking About Experiences",
    slug: "talking-about-experiences",
    description:
      "Talk about things you have done, places you have visited, and experiences you have had.",
  },
  {
    number: 2,
    title: "Plans & Future Activities",
    slug: "plans-future-activities",
    description:
      "Talk about your plans, arrangements, and activities for the future.",
  },
  {
    number: 3,
    title: "Travel & Holidays",
    slug: "travel-holidays",
    description:
      "Practice useful English for airports, hotels, transportation, and holidays.",
  },
  {
    number: 4,
    title: "Shopping & Services",
    slug: "shopping-services",
    description:
      "Ask about prices, sizes, products, services, and make simple requests.",
  },
  {
    number: 5,
    title: "Health & Doctor Visits",
    slug: "health-doctor-visits",
    description:
      "Describe common health problems and communicate with a doctor or pharmacist.",
  },
  {
    number: 6,
    title: "Food & Eating Out",
    slug: "food-eating-out",
    description:
      "Order food, talk about preferences, and communicate in restaurants and cafés.",
  },
  {
    number: 7,
    title: "Describing People & Places",
    slug: "describing-people-places",
    description:
      "Describe appearance, personality, places, and everyday surroundings.",
  },
  {
    number: 8,
    title: "Opinions & Preferences",
    slug: "opinions-preferences",
    description:
      "Express opinions, agree or disagree, and talk about your likes and dislikes.",
  },
  {
    number: 9,
    title: "Making Suggestions",
    slug: "making-suggestions",
    description:
      "Suggest activities, respond to suggestions, and make plans with other people.",
  },
  {
    number: 10,
    title: "Problems & Requests",
    slug: "problems-requests",
    description:
      "Explain simple problems, ask for help, and make polite requests.",
  },
  {
    number: 11,
    title: "Everyday Conversations",
    slug: "everyday-conversations",
    description:
      "Practice natural conversations about work, family, routines, plans, and daily life.",
  },
  {
    number: 12,
    title: "A2 Communication Review",
    slug: "communication-review",
    description:
      "Review your A2 listening and speaking skills through practical communication activities.",
  },
];

export default function A2ListeningSpeakingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
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
            boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
          }}
        >
          ← Resources
        </Link>

        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "30px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
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
              marginBottom: "15px",
            }}
          >
            LISTENING & SPEAKING — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            A2 Listening & Speaking
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
              maxWidth: "780px",
            }}
          >
            Improve your ability to understand everyday English and speak with
            more confidence in common real-life situations.
          </p>
        </section>

        <section>
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
                href={`/resources/listening-speaking/a2/${topic.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <article
                  style={{
                    height: "100%",
                    boxSizing: "border-box",
                    background: "#fff",
                    border: "1px solid #e5eaf0",
                    borderRadius: "18px",
                    padding: "25px",
                    boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "#eef4ff",
                      color: "#173b78",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "18px",
                    }}
                  >
                    {topic.number}
                  </div>

                  <h2
                    style={{
                      fontSize: "21px",
                      color: "#173b78",
                      margin: "0 0 12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {topic.title}
                  </h2>

                  <p
                    style={{
                      color: "#667085",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {topic.description}
                  </p>

                  <div
                    style={{
                      marginTop: "20px",
                      color: "#173b78",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Open Lesson →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#eef4ff",
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
            What You&apos;ll Practice
          </h2>

          <ul
            style={{
              color: "#344054",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Understanding everyday conversations</li>
            <li>Speaking about past experiences</li>
            <li>Talking about future plans</li>
            <li>Expressing opinions and preferences</li>
            <li>Making suggestions and requests</li>
            <li>Handling common real-life situations</li>
            <li>Building confidence in spoken English</li>
          </ul>
        </section>

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
            href="/resources/grammar/a2"
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
            ← A2 Grammar
          </Link>

          <Link
            href="/resources/listening-speaking"
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
            Listening & Speaking
          </Link>
        </div>
      </div>
    </main>
  );
}