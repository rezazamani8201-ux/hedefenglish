"use client";

import Link from "next/link";

const expressions = [
  {
    expression: "There is growing concern about...",
    meaning:
      "Used to introduce an environmental or social issue that is becoming more worrying.",
  },
  {
    expression: "One of the main causes is...",
    meaning:
      "Used to explain an important reason behind a problem.",
  },
  {
    expression: "We need to take action to...",
    meaning:
      "Used to emphasize that something should be done to address a problem.",
  },
  {
    expression: "The long-term consequences could be...",
    meaning:
      "Used to discuss possible effects that may appear in the future.",
  },
  {
    expression: "It is our responsibility to...",
    meaning:
      "Used to express a sense of duty toward an issue or situation.",
  },
  {
    expression: "If we fail to act...",
    meaning:
      "Used to describe what could happen if people do not respond to a problem.",
  },
];

const vocabulary = [
  ["climate change", "long-term changes in global weather and temperature patterns"],
  ["carbon emissions", "gases released into the atmosphere, especially from burning fuels"],
  ["renewable energy", "energy produced from sources that naturally replace themselves"],
  ["deforestation", "the large-scale removal of forests"],
  ["biodiversity", "the variety of plants, animals, and other living organisms"],
  ["sustainable", "able to continue without causing serious damage to the environment"],
  ["conservation", "the protection and careful management of nature and resources"],
  ["global warming", "the long-term increase in Earth's average temperature"],
];

export default function EnvironmentGlobalIssuesPage() {
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
            B2 LISTENING & SPEAKING • LESSON 10
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Environment & Global Issues
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Discuss climate change, environmental challenges, sustainability,
            and possible solutions to global problems.
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
            In this lesson, you will practice discussing major environmental
            challenges and their possible consequences. You will also learn how
            to explain causes, suggest solutions, and express opinions about
            sustainability and global responsibility.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Discuss climate change and global warming.</li>
            <li>Explain causes and consequences of environmental problems.</li>
            <li>Talk about renewable energy and sustainability.</li>
            <li>Suggest practical environmental solutions.</li>
            <li>Discuss individual and global responsibility.</li>
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
            discuss environmental problems, their causes, and possible
            solutions.
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
              <strong>Sophie:</strong> I've been thinking a lot about climate
              change recently. It seems like environmental problems are becoming
              more difficult to ignore.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> I agree. There is growing concern about
              rising temperatures, extreme weather, and the loss of natural
              habitats.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> What do you think is one of the main
              causes?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> Carbon emissions are certainly a major
              factor. Our dependence on fossil fuels has had a huge impact on
              the environment.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> So what can governments and individuals
              do about it?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> Governments need to invest more in
              renewable energy and public transportation. Individuals can also
              reduce waste and use energy more efficiently.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Sophie:</strong> Do you think individual actions really
              make a difference?
            </p>

            <p style={{ lineHeight: 1.8 }}>
              <strong>Mark:</strong> They can, especially when millions of
              people change their habits. But large-scale action is also
              essential.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
              <strong>Sophie:</strong> So we need both individual
              responsibility and international cooperation.
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
            <li>What environmental problems does Mark mention?</li>
            <li>What does he identify as a major cause?</li>
            <li>What should governments invest in?</li>
            <li>What can individuals do to help?</li>
            <li>Why does Mark believe individual actions can matter?</li>
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
            Global Environmental Challenges
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Discuss each issue. Explain why it is a problem and suggest
            possible solutions.
          </p>

          {[
            "Climate change and rising temperatures",
            "Plastic pollution in oceans",
            "Deforestation and loss of wildlife",
            "Air pollution in large cities",
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
            Sustainable Solutions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Think about how each action could contribute to a more sustainable
            future.
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
              "Use renewable sources of energy.",
              "Improve public transportation.",
              "Reduce unnecessary consumption.",
              "Protect forests and natural habitats.",
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
                  Solution {index + 1}
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
            Imagine that you are speaking at an international environmental
            conference.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Explain which environmental problem you consider the most urgent.
            Describe its causes, possible consequences, and the actions that
            governments, businesses, and individuals should take.
          </p>

          <p
            style={{
              fontWeight: 600,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Try to give a balanced argument and support your ideas with
            examples.
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
              You practiced listening to a discussion about environmental
              issues.
            </li>
            <li>
              You learned expressions for discussing global problems and
              solutions.
            </li>
            <li>
              You discussed climate change and carbon emissions.
            </li>
            <li>
              You explored renewable energy and sustainable living.
            </li>
            <li>
              You practiced expressing opinions about individual and global
              responsibility.
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
            href="/resources/listening-speaking/b2/technology-modern-life"
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
            href="/resources/listening-speaking/b2/presentations-public-speaking"
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