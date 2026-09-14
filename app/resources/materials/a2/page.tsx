"use client";

import Link from "next/link";

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
};

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

export default function A2MaterialsPage() {
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
        <Link
          href="/resources"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← Resources
        </Link>

        {/* Hero */}
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
            FREE LEARNING MATERIALS — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            A2 Free Learning Materials
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Use these free materials to review vocabulary, practice useful
            expressions, organize your study time, and build stronger everyday
            English skills at A2 level.
          </p>
        </section>

        {/* Materials */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
            marginBottom: "30px",
          }}
        >
          {/* Vocabulary */}
          <div style={cardStyle}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#eef4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "18px",
              }}
            >
              📚
            </div>

            <h2
              style={{
                color: "#173b78",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              A2 Vocabulary Lists
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: 1.7,
              }}
            >
              Review useful A2 vocabulary grouped by everyday topics and
              situations.
            </p>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 1.9,
                color: "#4b5563",
              }}
            >
              <li>Travel & Transport</li>
              <li>Food & Restaurants</li>
              <li>Shopping & Services</li>
              <li>Health & Daily Life</li>
              <li>Work & Education</li>
              <li>Hobbies & Free Time</li>
              <li>People & Places</li>
              <li>Weather & Seasons</li>
            </ul>
          </div>

          {/* Speaking */}
          <div style={cardStyle}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#eef4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "18px",
              }}
            >
              💬
            </div>

            <h2
              style={{
                color: "#173b78",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              A2 Speaking Phrases
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: 1.7,
              }}
            >
              Learn practical phrases that help you communicate naturally in
              common situations.
            </p>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 1.9,
                color: "#4b5563",
              }}
            >
              <li>Starting conversations</li>
              <li>Asking for information</li>
              <li>Making polite requests</li>
              <li>Giving opinions</li>
              <li>Expressing preferences</li>
              <li>Making suggestions</li>
              <li>Agreeing & disagreeing</li>
              <li>Handling simple problems</li>
            </ul>
          </div>

          {/* Study Guides */}
          <div style={cardStyle}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#eef4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "18px",
              }}
            >
              📝
            </div>

            <h2
              style={{
                color: "#173b78",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              A2 Study Guides
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: 1.7,
              }}
            >
              Follow simple study strategies to make your English practice
              more organized and effective.
            </p>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 1.9,
                color: "#4b5563",
              }}
            >
              <li>How to practice vocabulary</li>
              <li>How to improve listening</li>
              <li>How to practice speaking</li>
              <li>How to review grammar</li>
              <li>How to learn from conversations</li>
              <li>How to build a weekly study routine</li>
              <li>How to remember new words</li>
              <li>How to stay consistent</li>
            </ul>
          </div>
        </section>

        {/* Vocabulary Topics */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            A2 Vocabulary Topics
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
            }}
          >
            Build your vocabulary around topics that you are likely to use in
            real conversations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              "Daily Routines",
              "Family & Relationships",
              "Food & Drinks",
              "Restaurants",
              "Shopping",
              "Travel",
              "Transport",
              "Health",
              "Work",
              "Education",
              "Hobbies",
              "Sports",
              "Weather",
              "Technology",
              "People",
              "Places",
              "Clothes",
              "House & Home",
              "Feelings",
              "Plans & Activities",
            ].map((topic) => (
              <div
                key={topic}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "10px",
                  padding: "13px 15px",
                  color: "#344054",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Phrases */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful A2 Speaking Phrases
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              "Could you help me, please?",
              "Could you tell me where it is?",
              "What do you think?",
              "In my opinion...",
              "I think that's a good idea.",
              "I'm not sure I agree.",
              "How about going tomorrow?",
              "Why don't we meet at six?",
              "I'd like to order, please.",
              "Could I have the bill, please?",
              "What's the matter?",
              "Can I ask you a question?",
            ].map((phrase) => (
              <div
                key={phrase}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  color: "#173b78",
                  fontWeight: 600,
                }}
              >
                {phrase}
              </div>
            ))}
          </div>
        </section>

        {/* Study Plan */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Simple A2 Weekly Study Plan
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Day
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Practice
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Suggested Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Monday", "Grammar + Vocabulary", "30–45 minutes"],
                  ["Tuesday", "Listening Practice", "20–30 minutes"],
                  ["Wednesday", "Speaking Practice", "20–30 minutes"],
                  ["Thursday", "Grammar Review", "30 minutes"],
                  ["Friday", "Vocabulary + Conversation", "30–45 minutes"],
                  ["Saturday", "Listening + Speaking", "30–45 minutes"],
                  ["Sunday", "Review + Free Practice", "20–30 minutes"],
                ].map(([day, practice, time]) => (
                  <tr key={day}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                        color: "#173b78",
                      }}
                    >
                      {day}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#4b5563",
                      }}
                    >
                      {practice}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
                      }}
                    >
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Study Tips */}
        <section
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            A2 Study Tips
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              [
                "Learn words in context",
                "Do not study vocabulary only as isolated words. Learn useful phrases and example sentences.",
              ],
              [
                "Speak every day",
                "Even five or ten minutes of speaking practice can help you become more confident.",
              ],
              [
                "Listen more than once",
                "Listen to the same conversation several times and notice new words and expressions.",
              ],
              [
                "Review regularly",
                "Short, regular review sessions are more effective than studying everything at once.",
              ],
              [
                "Use English actively",
                "Try to use new vocabulary and expressions in your own sentences.",
              ],
              [
                "Do not fear mistakes",
                "Mistakes are a normal part of learning. Focus on communicating your meaning.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "18px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                    fontSize: "17px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    lineHeight: 1.6,
                    marginBottom: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            Continue Your A2 Practice
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 22px",
            }}
          >
            Combine these free materials with grammar and listening practice
            to build stronger and more confident everyday English.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/resources/grammar/a2"
              style={{
                ...buttonStyle,
                background: "#173b78",
                color: "#fff",
                borderColor: "#173b78",
              }}
            >
              A2 Grammar
            </Link>

            <Link
              href="/resources/listening-speaking/a2"
              style={{
                ...buttonStyle,
                background: "#fff",
              }}
            >
              A2 Listening & Speaking
            </Link>
          </div>
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
          <Link href="/resources" style={buttonStyle}>
            ← All Resources
          </Link>

          <Link href="/resources/materials/a1" style={buttonStyle}>
            A1 Materials
          </Link>
        </div>
      </div>
    </main>
  );
}