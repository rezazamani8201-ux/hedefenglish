"use client";

import Link from "next/link";

export default function TravelCulturalExperiencesPage() {
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
          href="/resources/listening-speaking/b2"
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
          ← Back to B2 Listening & Speaking
        </Link>

        {/* Header */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "40px 32px",
            marginBottom: "25px",
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
            B2 LISTENING & SPEAKING • LESSON 3
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Travel & Cultural Experiences
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Talk about travel experiences, cultural differences, unexpected
            situations, and memorable journeys with confidence.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will practice listening to conversations about
            travel and cultural experiences. You will learn how to describe
            experiences in detail, compare cultures, explain unexpected
            situations, and share your reactions naturally.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Describe memorable travel experiences.</li>
            <li>Talk about cultural differences and similarities.</li>
            <li>Explain unexpected situations while travelling.</li>
            <li>Express reactions and personal opinions.</li>
            <li>Ask detailed follow-up questions.</li>
          </ul>
        </section>

        {/* Key Expressions */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Travel Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                expression: "One of the most memorable things was...",
                meaning: "Used to introduce an important or unforgettable experience.",
              },
              {
                expression: "What surprised me most was...",
                meaning: "Used to describe something unexpected.",
              },
              {
                expression: "Compared with my country...",
                meaning: "Used to compare cultures, habits, or lifestyles.",
              },
              {
                expression: "I wasn't expecting that.",
                meaning: "Used to express surprise about an unexpected situation.",
              },
              {
                expression: "It gave me a completely different perspective.",
                meaning: "Used when an experience changes the way you think.",
              },
              {
                expression: "Looking back, I'd say...",
                meaning: "Used to give an opinion about a past experience.",
              },
            ].map((item) => (
              <div
                key={item.expression}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "17px",
                    margin: "0 0 9px",
                  }}
                >
                  {item.expression}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Read the conversation carefully. Focus on the details of the
            journey, the cultural differences mentioned, and the speaker's
            reactions.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderLeft: "4px solid #173b78",
              borderRadius: "10px",
              padding: "22px",
              marginTop: "20px",
            }}
          >
            <p style={{ lineHeight: 1.8, marginTop: 0 }}>
              <strong>Laura:</strong> You spent three weeks in Japan last
              summer, didn't you? What was the trip like?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> It was incredible. One of the most
              memorable things was staying with a local family for a few days.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> That must have been interesting. Was
              anything particularly different from what you're used to?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> Definitely. Compared with my country,
              people seemed much more conscious of being quiet in public
              places.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> Really? What surprised you most?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> The public transport system. It was
              incredibly efficient, and everything seemed to run on time. I
              wasn't expecting that level of punctuality.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> Did the experience change the way you
              think about travelling?
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>James:</strong> Absolutely. Looking back, I'd say the
              biggest lesson was that travelling isn't just about seeing new
              places. It's about understanding how other people live.
            </p>
          </div>
        </section>

        {/* Understanding */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Check Your Understanding
          </h2>

          <ol
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "24px",
            }}
          >
            <li>How long did James stay in Japan?</li>
            <li>Who did James stay with for a few days?</li>
            <li>What cultural difference did James notice?</li>
            <li>What surprised him about public transport?</li>
            <li>What did James learn from his experience?</li>
          </ol>
        </section>

        {/* Cultural Comparison */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Cultural Comparison
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Compare your own culture with another country. Think about
            communication, food, public behaviour, family life, transport,
            work, or social traditions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "How do people behave in public places?",
              "What are some common social customs?",
              "How is public transport different?",
              "What cultural habit might surprise a visitor?",
            ].map((question, index) => (
              <div
                key={index}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  Question {index + 1}
                </div>

                <p
                  style={{
                    color: "#475467",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Answer the questions below. Try to give detailed answers and
            support your ideas with examples from your own experiences.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "What is the most memorable trip you have ever taken?",
              "Have you ever experienced a cultural difference that surprised you?",
              "What country would you like to visit, and why?",
              "What can people learn by travelling to other countries?",
            ].map((question, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "15px",
                  padding: "18px 0",
                  borderBottom:
                    index !== 3 ? "1px solid #e5eaf0" : "none",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#173b78",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#344054",
                    lineHeight: 1.7,
                  }}
                >
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Challenge */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#fff", marginTop: 0 }}>
            Speaking Challenge
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Imagine that a foreign visitor is planning to travel to your
            country for the first time.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Give the visitor useful advice about local customs, food,
            transportation, behaviour, and places they should experience.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to compare at least two aspects of your culture with another
            culture and use three expressions from the Key Travel Expressions
            section.
          </p>
        </section>

        {/* Vocabulary */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["memorable", "worth remembering because it is special or unusual"],
              ["custom", "a traditional way of behaving in a culture"],
              ["punctuality", "the quality of arriving or happening on time"],
              ["perspective", "a particular way of viewing or understanding something"],
              ["experience", "something that happens to you or that you take part in"],
              ["culture", "the customs, beliefs, and way of life of a society"],
              ["efficient", "working well without wasting time or resources"],
              ["unexpected", "something that was not anticipated"],
            ].map(([word, definition]) => (
              <div
                key={word}
                style={{
                  padding: "16px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <strong
                  style={{
                    color: "#173b78",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  {word}
                </strong>

                <span
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {definition}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "35px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Lesson Review
          </h2>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>You practiced listening to a detailed travel conversation.</li>
            <li>You learned useful expressions for describing experiences.</li>
            <li>You practiced comparing cultures.</li>
            <li>You discussed unexpected and memorable experiences.</li>
            <li>You practiced giving advice to international travellers.</li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/listening-speaking/b2/workplace-communication"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "#fff",
              color: "#173b78",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/listening-speaking/b2/health-well-being"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "1px solid #173b78",
              background: "#173b78",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}