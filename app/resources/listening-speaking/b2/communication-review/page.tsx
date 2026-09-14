"use client";

import Link from "next/link";

const reviewAreas = [
  {
    title: "Advanced Conversations",
    description:
      "Express ideas naturally, respond to different opinions, and maintain longer conversations.",
  },
  {
    title: "Workplace Communication",
    description:
      "Discuss professional situations, meetings, responsibilities, and workplace challenges.",
  },
  {
    title: "Travel & Cultural Experiences",
    description:
      "Describe experiences, compare cultures, and communicate confidently while travelling.",
  },
  {
    title: "Health & Well-Being",
    description:
      "Discuss healthy habits, lifestyle choices, problems, and possible solutions.",
  },
  {
    title: "Society & Social Issues",
    description:
      "Explain social problems, discuss their causes, and suggest practical solutions.",
  },
  {
    title: "Opinions & Debates",
    description:
      "Present arguments, disagree respectfully, and support opinions with clear reasons.",
  },
  {
    title: "Education & Career",
    description:
      "Discuss education, career development, professional goals, and future opportunities.",
  },
  {
    title: "Problems & Solutions",
    description:
      "Describe complex problems and communicate possible solutions effectively.",
  },
  {
    title: "Technology & Modern Life",
    description:
      "Discuss technology, digital habits, productivity, and changes in modern life.",
  },
  {
    title: "Environment & Global Issues",
    description:
      "Discuss environmental challenges, sustainability, and global responsibility.",
  },
  {
    title: "Presentations & Public Speaking",
    description:
      "Organize presentations, connect ideas, engage an audience, and answer questions.",
  },
];

const expressions = [
  "From my perspective, ...",
  "There are several factors to consider.",
  "I agree to some extent, but...",
  "That's an interesting point. However, ...",
  "One possible explanation is...",
  "A more practical solution would be...",
  "The main advantage is that...",
  "The long-term consequences could be...",
  "I'd like to highlight one important point.",
  "To sum up, ...",
];

const vocabulary = [
  ["perspective", "a particular way of thinking about or understanding something"],
  ["consequence", "a result or effect of an action or situation"],
  ["approach", "a particular way of dealing with a problem or situation"],
  ["evidence", "information or facts that support an idea or opinion"],
  ["priority", "something considered more important than other things"],
  ["challenge", "a difficult situation that requires effort to solve"],
  ["opportunity", "a situation that creates a possibility for progress or success"],
  ["sustainable", "able to continue without causing serious long-term damage"],
];

export default function CommunicationReviewPage() {
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
            B2 LISTENING & SPEAKING • LESSON 12
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            B2 Listening & Speaking Review
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Review the communication skills, vocabulary, expressions, and
            speaking strategies covered throughout the B2 course.
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
            Review Goals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            This final lesson brings together the main listening and speaking
            skills developed throughout the B2 course. Use it to identify your
            strengths and the areas that need more practice.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Communicate confidently in longer conversations.</li>
            <li>Express and support opinions clearly.</li>
            <li>Discuss complex topics and real-life situations.</li>
            <li>Explain problems and suggest appropriate solutions.</li>
            <li>Give structured presentations and respond to questions.</li>
          </ul>
        </section>

        {/* Course Review */}
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
            What You Have Practiced
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {reviewAreas.map((item, index) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#173b78",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "13px",
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    style={{
                      color: "#173b78",
                      fontSize: "16px",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Strategy */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B2 Listening Strategies
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              [
                "Listen for the main idea",
                "Focus on the speaker's overall message before worrying about individual words.",
              ],
              [
                "Listen for key details",
                "Pay attention to names, numbers, reasons, examples, and important facts.",
              ],
              [
                "Notice the speaker's attitude",
                "Listen for language that shows agreement, doubt, criticism, or enthusiasm.",
              ],
              [
                "Use context",
                "When you hear an unfamiliar word, use the surrounding information to understand its meaning.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #dbe4f0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    fontSize: "16px",
                    marginTop: 0,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: "#475467",
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
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
            Essential B2 Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
            }}
          >
            {expressions.map((expression, index) => (
              <div
                key={expression}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "16px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <span
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {index + 1}.
                </span>

                <span
                  style={{
                    color: "#344054",
                    lineHeight: 1.6,
                  }}
                >
                  {expression}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking Assessment */}
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
            B2 Speaking Self-Assessment
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Ask yourself how confidently you can complete each task without
            preparing every sentence in advance.
          </p>

          {[
            "I can explain my opinion and support it with clear reasons.",
            "I can participate in a discussion and respond to different opinions.",
            "I can describe a problem and suggest several possible solutions.",
            "I can compare different ideas, experiences, or situations.",
            "I can give a structured presentation for several minutes.",
            "I can answer unexpected questions without losing the main point.",
          ].map((statement, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "17px 0",
                borderBottom:
                  index !== 5 ? "1px solid #e5eaf0" : "none",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  border: "2px solid #173b78",
                  borderRadius: "5px",
                  flexShrink: 0,
                }}
              />

              <p
                style={{
                  color: "#344054",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {statement}
              </p>
            </div>
          ))}
        </section>

        {/* Final Speaking Challenge */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "32px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#fff", marginTop: 0 }}>
            Final B2 Speaking Challenge
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose one of the following topics and speak for five minutes.
            Organize your ideas clearly and use examples to support your
            arguments.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            {[
              "Will artificial intelligence improve or threaten the future of work?",
              "What should governments do to make cities better places to live?",
              "How can education prepare young people for the future?",
              "What responsibilities do individuals have toward the environment?",
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
                    lineHeight: 1.6,
                    fontSize: "14px",
                  }}
                >
                  {topic}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginBottom: 0,
              marginTop: "24px",
              fontWeight: 600,
              lineHeight: 1.8,
            }}
          >
            Try to speak naturally, connect your ideas, acknowledge different
            perspectives, and finish with a clear conclusion.
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
            Essential B2 Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
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

        {/* Final Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "35px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B2 Course Review
          </h2>

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
            }}
          >
            You have completed the B2 Listening & Speaking sequence. At this
            level, the goal is not simply to speak more, but to communicate
            ideas clearly, naturally, and appropriately in a wide range of
            situations.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Keep listening to authentic English regularly.</li>
            <li>Speak about complex topics without translating every sentence.</li>
            <li>Record yourself and review your pronunciation and fluency.</li>
            <li>Learn vocabulary in context rather than as isolated words.</li>
            <li>Continue challenging yourself with longer conversations and presentations.</li>
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
            href="/resources/listening-speaking/b2/presentations-public-speaking"
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
            Back to B2 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}