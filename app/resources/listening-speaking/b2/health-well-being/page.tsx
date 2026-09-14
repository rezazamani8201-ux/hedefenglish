"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "I've been feeling under the weather.",
    meaning: "Used to say that you are feeling slightly ill.",
  },
  {
    expression: "I'd recommend getting it checked.",
    meaning: "Used to suggest that someone consult a doctor or professional.",
  },
  {
    expression: "It's worth taking into consideration.",
    meaning: "Used when suggesting that something should be carefully considered.",
  },
  {
    expression: "I've been meaning to...",
    meaning: "Used when you have intended to do something for some time.",
  },
  {
    expression: "I can't seem to...",
    meaning: "Used when you have difficulty doing something despite trying.",
  },
  {
    expression: "It has a significant impact on...",
    meaning: "Used to describe a strong effect on something.",
  },
];

const vocabulary = [
  ["well-being", "the state of being comfortable, healthy, and happy"],
  ["sedentary", "involving a lot of sitting and very little physical activity"],
  ["balanced", "containing the right combination of different things"],
  ["preventive", "intended to stop a problem or illness before it happens"],
  ["symptom", "a physical or mental sign of an illness or condition"],
  ["recovery", "the process of becoming healthy again"],
  ["stress", "pressure or worry caused by difficult situations"],
  ["routine", "a regular way of doing things"],
];

export default function HealthWellBeingPage() {
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
        {/* Back */}
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
            B2 LISTENING & SPEAKING • LESSON 4
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Health & Well-Being
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss health, lifestyle, stress, habits, and well-being while
            communicating clearly in real-life situations.
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
            health and lifestyle. You will learn how to describe health
            problems, discuss habits, give advice, explain causes and effects,
            and talk about ways to improve your overall well-being.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss physical and mental well-being.</li>
            <li>Talk about healthy and unhealthy habits.</li>
            <li>Give advice about lifestyle choices.</li>
            <li>Explain causes and effects.</li>
            <li>Describe personal experiences with stress and recovery.</li>
          </ul>
        </section>

        {/* Expressions */}
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
            Useful Health Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {expressions.map((item) => (
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

        {/* Listening */}
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
            Read the conversation carefully. Focus on the speakers' problems,
            explanations, and suggestions.
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
              <strong>Anna:</strong> You seem a little tired lately. Is
              everything okay?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> I've been feeling exhausted for the past
              few weeks. I think it's mainly because I've been working long
              hours.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> Have you been getting enough sleep?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> Not really. I usually work until
              midnight, and then I have to get up early.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> That sounds difficult. I'd recommend
              changing your routine if you can. Lack of sleep can have a
              significant impact on your health.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>David:</strong> I know. I've actually been meaning to
              start exercising again, but I can't seem to find the time.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Anna:</strong> You don't necessarily need to spend hours
              at the gym. Even a thirty-minute walk could make a difference.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>David:</strong> That's probably true. I think I need to
              make my health more of a priority.
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
            <li>Why has David been feeling exhausted?</li>
            <li>How many hours does he usually work?</li>
            <li>What does Anna recommend changing?</li>
            <li>Why doesn't David exercise regularly?</li>
            <li>What does David decide to make more of a priority?</li>
          </ol>
        </section>

        {/* Discussion */}
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
            Health & Lifestyle Discussion
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Give detailed answers and explain
            your opinions with examples.
          </p>

          <div style={{ marginTop: "20px" }}>
            {[
              "What habits have the biggest impact on a person's health?",
              "Why do many people find it difficult to maintain a healthy lifestyle?",
              "How can people manage stress more effectively?",
              "Do you think modern lifestyles are becoming healthier or less healthy?",
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

        {/* Advice Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Giving Advice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Imagine that a friend has the following problems. Give practical
            advice and explain why your suggestions might help.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "They sleep only five hours every night.",
              "They spend most of the day sitting at a desk.",
              "They feel stressed because of their job.",
              "They rarely have time to prepare healthy meals.",
            ].map((problem, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  border: "1px solid #dbe4f0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <strong
                  style={{
                    color: "#173b78",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  Situation {index + 1}
                </strong>

                <p
                  style={{
                    color: "#475467",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {problem}
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
            Give a two-minute talk about your ideal healthy lifestyle.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Talk about sleep, exercise, food, work, free time, stress
            management, and social activities.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Explain which habits are most important to you and why. Try to
            use at least three expressions from this lesson.
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
            {vocabulary.map(([word, definition]) => (
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
            <li>You practiced listening to a conversation about lifestyle.</li>
            <li>You learned expressions for discussing health and well-being.</li>
            <li>You practiced giving advice and recommendations.</li>
            <li>You discussed stress, sleep, exercise, and healthy habits.</li>
            <li>You practiced explaining causes and effects.</li>
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
            href="/resources/listening-speaking/b2/travel-cultural-experiences"
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
            href="/resources/listening-speaking/b2/social-issues-society"
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