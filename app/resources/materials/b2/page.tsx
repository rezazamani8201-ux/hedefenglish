"use client";

import Link from "next/link";

const materials = [
  {
    title: "Advanced Vocabulary Builder",
    description:
      "Expand your B2 vocabulary with useful words and expressions for everyday, academic, and professional communication.",
    items: [
      "Learn 10–15 new words each week.",
      "Write your own example sentences.",
      "Group vocabulary by topic.",
      "Review new words regularly.",
    ],
  },
  {
    title: "Speaking Practice",
    description:
      "Develop fluency and confidence by speaking about complex topics and real-life situations.",
    items: [
      "Choose one topic and speak for 3–5 minutes.",
      "Give reasons and examples for your opinions.",
      "Compare different perspectives.",
      "Record yourself and review your performance.",
    ],
  },
  {
    title: "Writing Practice",
    description:
      "Improve your ability to organize ideas and communicate clearly in longer written texts.",
    items: [
      "Write short opinion paragraphs.",
      "Practice formal and informal messages.",
      "Use linking words effectively.",
      "Check grammar and vocabulary after writing.",
    ],
  },
  {
    title: "Grammar Review",
    description:
      "Review important B2 grammar structures and use them naturally in communication.",
    items: [
      "Review advanced tenses.",
      "Practice conditionals and modal verbs.",
      "Review passive and reported structures.",
      "Use complex sentences in your own examples.",
    ],
  },
  {
    title: "Reading Practice",
    description:
      "Build reading speed and improve your ability to understand longer and more complex texts.",
    items: [
      "Read news articles and opinion pieces.",
      "Identify the main argument.",
      "Look for supporting details.",
      "Guess unfamiliar words from context.",
    ],
  },
  {
    title: "Listening Practice",
    description:
      "Improve your understanding of natural spoken English through regular exposure.",
    items: [
      "Listen to podcasts and interviews.",
      "Focus on the main idea first.",
      "Listen again for specific details.",
      "Write down useful expressions you hear.",
    ],
  },
];

const weeklyPlan = [
  {
    day: "Monday",
    focus: "Vocabulary & Grammar",
    task: "Learn new vocabulary and review one grammar topic.",
  },
  {
    day: "Tuesday",
    focus: "Listening",
    task: "Listen to a podcast, interview, or English video for 20–30 minutes.",
  },
  {
    day: "Wednesday",
    focus: "Speaking",
    task: "Choose a B2 topic and speak for 3–5 minutes.",
  },
  {
    day: "Thursday",
    focus: "Reading",
    task: "Read an English article and identify the main ideas.",
  },
  {
    day: "Friday",
    focus: "Writing",
    task: "Write a short opinion paragraph or formal message.",
  },
  {
    day: "Weekend",
    focus: "Review & Communication",
    task: "Review the week's vocabulary and have a longer English conversation.",
  },
];

const checklist = [
  "I can understand the main ideas of longer conversations.",
  "I can express my opinions and support them with reasons.",
  "I can discuss advantages, disadvantages, and different perspectives.",
  "I can explain problems and suggest practical solutions.",
  "I can understand a wide range of everyday and professional vocabulary.",
  "I can write organized paragraphs using linking expressions.",
  "I can give a short structured presentation.",
  "I can communicate without translating every sentence into my first language.",
];

export default function B2MaterialsPage() {
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
          ← Back to Resources
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
            B2 FREE LEARNING MATERIALS
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            B2 Free Learning Materials
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Practical resources to help you continue improving your English
            independently at B2 level.
          </p>
        </section>

        {/* How to use */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            How to Use These Materials
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
            }}
          >
            At B2 level, consistency is more important than studying for long
            hours occasionally. Choose a few activities each week and combine
            vocabulary, grammar, listening, speaking, reading, and writing.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Study a little every day.</li>
            <li>Use new vocabulary in your own sentences.</li>
            <li>Speak English even when you make mistakes.</li>
            <li>Listen to natural English regularly.</li>
            <li>Review old material instead of always learning something new.</li>
          </ul>
        </section>

        {/* Materials */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            Your B2 Study Toolkit
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "16px",
            }}
          >
            {materials.map((material) => (
              <div
                key={material.title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "16px",
                  padding: "22px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "18px",
                    marginTop: 0,
                    marginBottom: "10px",
                  }}
                >
                  {material.title}
                </h3>

                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginTop: 0,
                  }}
                >
                  {material.description}
                </p>

                <ul
                  style={{
                    color: "#475467",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  {material.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly plan */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            Simple Weekly Study Plan
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
            }}
          >
            You can use this flexible schedule as a starting point. Adjust the
            amount of practice according to your own time and goals.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {weeklyPlan.map((item) => (
              <div
                key={item.day}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 190px 1fr",
                  gap: "16px",
                  alignItems: "center",
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "13px",
                  padding: "17px 18px",
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  {item.day}
                </strong>

                <strong
                  style={{
                    color: "#344054",
                    fontSize: "14px",
                  }}
                >
                  {item.focus}
                </strong>

                <span
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Communication Challenge */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "32px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#fff",
              marginTop: 0,
            }}
          >
            B2 Communication Challenge
          </h2>

          <p
            style={{
              lineHeight: 1.8,
            }}
          >
            Choose one of these topics and have a five-minute conversation in
            English. Try to give examples, explain your reasoning, and respond
            naturally to follow-up questions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            {[
              "Is artificial intelligence changing education for the better?",
              "What makes a city a good place to live?",
              "Should people work remotely whenever possible?",
              "What can individuals do to protect the environment?",
            ].map((topic, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  borderRadius: "14px",
                  padding: "18px",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Topic {index + 1}
                </strong>

                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Self assessment */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            B2 Self-Assessment
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
            }}
          >
            Use this checklist to identify the skills you can already use
            confidently and the ones you should continue practicing.
          </p>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {checklist.map((statement, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                  background: "#fff",
                  border: "1px solid #dbe4f0",
                  borderRadius: "12px",
                  padding: "15px 17px",
                }}
              >
                <div
                  style={{
                    width: "21px",
                    height: "21px",
                    border: "2px solid #173b78",
                    borderRadius: "5px",
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    color: "#344054",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {statement}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Keep practicing */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
            }}
          >
            Keep Practicing
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
            }}
          >
            Reaching B2 is an important achievement, but maintaining regular
            contact with English will help you continue moving toward advanced
            fluency.
          </p>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Keep challenging yourself with authentic English, longer
            conversations, professional situations, and topics that require
            you to explain and defend your ideas.
          </p>
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
            href="/resources"
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
            ← Back to Resources
          </Link>

          <Link
            href="/resources/listening-speaking/b2"
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
            B2 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}