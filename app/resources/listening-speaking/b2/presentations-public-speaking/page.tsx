"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "I'd like to begin by...",
    meaning: "Used to introduce the first point of a presentation.",
  },
  {
    expression: "Let's take a closer look at...",
    meaning: "Used to introduce a topic that needs more detailed explanation.",
  },
  {
    expression: "Moving on to...",
    meaning: "Used to smoothly introduce the next point.",
  },
  {
    expression: "As you can see...",
    meaning: "Used to draw attention to information, examples, or visual material.",
  },
  {
    expression: "I'd like to highlight...",
    meaning: "Used to emphasize an important idea or piece of information.",
  },
  {
    expression: "To sum up...",
    meaning: "Used to introduce the conclusion or main points of a presentation.",
  },
];

const vocabulary = [
  ["audience", "the people who watch or listen to a presentation"],
  ["visual aid", "an image, chart, graph, or other material used to support a presentation"],
  ["highlight", "to emphasize or draw attention to something important"],
  ["perspective", "a particular way of viewing or understanding an issue"],
  ["engage", "to attract and maintain someone's attention or interest"],
  ["clarify", "to make an idea or statement easier to understand"],
  ["conclusion", "the final part of a presentation where the main ideas are summarized"],
  ["confident", "feeling sure about your abilities or ideas"],
];

export default function PresentationsPublicSpeakingPage() {
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
            B2 LISTENING & SPEAKING • LESSON 11
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Presentations & Public Speaking
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Build confidence in public speaking, organize ideas clearly, and
            deliver effective presentations for different audiences.
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
            In this lesson, you will practice organizing and delivering
            presentations. You will learn useful language for introducing
            ideas, changing topics, emphasizing key information, responding to
            questions, and concluding a presentation effectively.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Structure a presentation clearly.</li>
            <li>Introduce and develop key points.</li>
            <li>Use transitions to connect ideas smoothly.</li>
            <li>Engage an audience with confident language.</li>
            <li>Summarize ideas and answer questions effectively.</li>
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
            Useful Presentation Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
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
            Read the conversation carefully. Pay attention to how the speaker
            introduces the presentation, develops ideas, and responds to
            questions.
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
              <strong>Emma:</strong> Good morning, everyone. I'd like to begin
              by explaining why we're here today. Our presentation focuses on
              the future of remote work.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> First, we'll look at how remote work has
              changed over the last few years. Then we'll discuss its main
              advantages and challenges.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> Let's take a closer look at productivity.
              Many employees report that working from home allows them to
              organize their time more efficiently.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> However, there are also potential
              disadvantages. Some people find it difficult to separate their
              professional and personal lives.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> I'd like to highlight one important point:
              remote work doesn't have the same effect on everyone.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> Exactly. Personal circumstances,
              personality, and the type of job can all influence the experience.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Emma:</strong> Moving on to our final point, let's
              consider what the future might look like.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Daniel:</strong> We believe that a combination of remote
              and office-based work may become increasingly common.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Emma:</strong> To sum up, remote work offers important
              benefits, but organizations need to find a balance that works for
              both employees and employers.
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
            <li>What is the main topic of the presentation?</li>
            <li>What advantage of remote work does Emma mention?</li>
            <li>What challenge does Daniel identify?</li>
            <li>Why doesn't remote work affect everyone in the same way?</li>
            <li>What future working model do they predict?</li>
          </ol>
        </section>

        {/* Presentation Structure */}
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
            Structure Your Presentation
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A clear structure can make a presentation easier to follow and
            more engaging for the audience.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              [
                "1. Introduction",
                "Introduce the topic and explain the purpose of the presentation.",
              ],
              [
                "2. Main Points",
                "Present your key ideas in a logical order.",
              ],
              [
                "3. Examples",
                "Support your ideas with facts, examples, or experiences.",
              ],
              [
                "4. Conclusion",
                "Summarize the main ideas and leave the audience with a clear message.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
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
                    marginTop: 0,
                    fontSize: "17px",
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

        {/* Speaking Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Choose one topic and prepare a short three-minute presentation.
            Use clear transitions between your ideas.
          </p>

          {[
            "The advantages and disadvantages of working from home.",
            "How technology is changing education.",
            "The future of transportation.",
            "What makes a successful workplace.",
          ].map((topic, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "15px",
                padding: "18px 0",
                borderBottom:
                  index !== 3 ? "1px solid #dbe4f0" : "none",
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
                {topic}
              </p>
            </div>
          ))}
        </section>

        {/* Audience Questions */}
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
            Handling Questions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            After a presentation, speakers often need to respond to questions.
            Practice answering clearly and confidently.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Could you explain that in a little more detail?",
              "That's an interesting question.",
              "There are several factors to consider.",
              "I'd say the main reason is...",
            ].map((phrase) => (
              <div
                key={phrase}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <strong
                  style={{
                    color: "#173b78",
                    lineHeight: 1.6,
                  }}
                >
                  {phrase}
                </strong>
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
            Imagine that you have been invited to give a five-minute
            presentation to a group of university students.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Your topic is:
            <strong> "How can technology improve our everyday lives?"</strong>
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Include an introduction, at least three main points, examples, and
            a clear conclusion.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to speak naturally rather than memorizing every sentence.
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
            <li>
              You practiced listening to a structured presentation.
            </li>
            <li>
              You learned useful expressions for introducing and connecting
              ideas.
            </li>
            <li>
              You practiced organizing a presentation into clear sections.
            </li>
            <li>
              You learned language for handling audience questions.
            </li>
            <li>
              You practiced delivering a longer speaking presentation.
            </li>
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
            href="/resources/listening-speaking/b2/environment-global-issues"
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
            href="/resources/listening-speaking/b2/communication-review"
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