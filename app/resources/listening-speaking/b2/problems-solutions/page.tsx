"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "One possible solution would be to...",
    meaning: "Used to suggest one way of dealing with a problem.",
  },
  {
    expression: "The root cause of the problem is...",
    meaning: "Used to identify the main underlying reason for a problem.",
  },
  {
    expression: "We need to take into account...",
    meaning: "Used when considering an important factor before making a decision.",
  },
  {
    expression: "A short-term solution would be...",
    meaning: "Used to suggest something that can solve a problem temporarily.",
  },
  {
    expression: "In the long run...",
    meaning: "Used when discussing effects or results over a longer period.",
  },
  {
    expression: "There are several ways to tackle this issue.",
    meaning: "Used to introduce different possible approaches to a problem.",
  },
];

const vocabulary = [
  ["challenge", "a difficult situation that requires effort or careful thinking"],
  ["solution", "a way of solving a problem"],
  ["approach", "a particular way of dealing with a situation"],
  ["root cause", "the main underlying reason why a problem exists"],
  ["consequence", "a result or effect of an action or situation"],
  ["implement", "to put a plan or decision into practice"],
  ["prevent", "to stop something from happening"],
  ["long-term", "continuing or having an effect over a long period"],
];

export default function ProblemsSolutionsPage() {
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
            B2 LISTENING & SPEAKING • LESSON 8
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Problems & Solutions
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss everyday and professional problems, explain their causes,
            suggest practical solutions, and evaluate different approaches.
          </p>
        </section>

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
            In this lesson, you will practice identifying problems, explaining
            their causes, proposing solutions, and evaluating their possible
            consequences. You will also learn useful language for discussing
            problems in a clear and structured way.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Explain the causes of problems.</li>
            <li>Suggest practical solutions.</li>
            <li>Compare short-term and long-term solutions.</li>
            <li>Discuss possible consequences.</li>
            <li>Evaluate different approaches to difficult situations.</li>
          </ul>
        </section>

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
            Useful Expressions
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
            Read the conversation carefully. Pay attention to how the speakers
            identify a problem, discuss its causes, and suggest solutions.
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
              <strong>Laura:</strong> Our team seems to be missing deadlines
              quite regularly. Do you think we need to change the way we work?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> I think the main problem is that we don't
              have a clear system for prioritising tasks. Everyone is working
              hard, but we're not always focusing on the most important things.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> So, what do you think we should do?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> One possible solution would be to have a
              short planning meeting every Monday. We could decide which tasks
              are urgent and assign clear responsibilities.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> That could help. But wouldn't it take
              extra time?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>James:</strong> It would take about thirty minutes, but
              in the long run it could save us much more time.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Laura:</strong> What about the current deadlines? We
              still need a short-term solution.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>James:</strong> We could temporarily reduce the number
              of projects each person is responsible for. Then we can work on
              a better system for the future.
            </p>
          </div>
        </section>

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
            <li>What problem is the team experiencing?</li>
            <li>What does James think is the root cause?</li>
            <li>What solution does he suggest?</li>
            <li>Why does Laura think the solution could be difficult?</li>
            <li>What short-term solution does James propose?</li>
          </ol>
        </section>

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
            Problem-Solving Discussion
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss the questions below. Explain the problem, identify possible
            causes, and suggest more than one solution.
          </p>

          {[
            "Many people spend too much time on their phones.",
            "Students often find it difficult to stay motivated.",
            "Traffic congestion is becoming a serious problem in large cities.",
            "Many employees struggle to maintain a healthy work-life balance.",
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
        </section>

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Short-Term or Long-Term?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Think about each situation and explain whether a short-term
            solution, a long-term solution, or both would be appropriate.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "A company is facing a temporary shortage of employees.",
              "A city has serious traffic problems.",
              "A student is preparing for an important exam next week.",
              "A business wants to reduce its environmental impact.",
            ].map((topic, index) => (
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
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </section>

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
            Imagine that you are a manager in a company where employees are
            experiencing increasing levels of stress.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Explain what you think the root causes might be and propose at
            least three possible solutions.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Compare the solutions and explain which one you would implement
            first and why.
          </p>
        </section>

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
              You practiced listening to a conversation about workplace
              problems.
            </li>
            <li>
              You learned how to explain the causes of problems.
            </li>
            <li>
              You practiced suggesting practical solutions.
            </li>
            <li>
              You compared short-term and long-term approaches.
            </li>
            <li>
              You practiced evaluating different solutions and their possible
              consequences.
            </li>
          </ul>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/listening-speaking/b2/education-career"
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
            href="/resources/listening-speaking/b2/technology-modern-life"
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