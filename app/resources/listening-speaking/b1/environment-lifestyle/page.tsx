"use client";

import Link from "next/link";

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

export default function EnvironmentLifestylePage() {
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
          href="/resources/listening-speaking/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
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
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            B1 LISTENING & SPEAKING — LESSON 10
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Environment & Lifestyle
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Talk about the environment, sustainable living, daily habits,
            pollution, climate change, and practical ways to live a healthier
            and more environmentally friendly life.
          </p>
        </section>

        {/* Learning Goals */}
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
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Describe environmental problems.</li>
            <li>Talk about pollution and climate change.</li>
            <li>Discuss sustainable lifestyles.</li>
            <li>Suggest ways to protect the environment.</li>
            <li>Talk about personal habits and lifestyle choices.</li>
            <li>Express opinions and discuss possible solutions.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Environment Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["environment", "the natural world around us"],
              ["pollution", "harmful substances that damage the environment"],
              ["climate change", "long-term changes in weather and temperatures"],
              ["global warming", "the increase in the Earth's average temperature"],
              ["recycling", "the process of collecting and reusing materials"],
              ["waste", "unwanted materials that people throw away"],
              ["renewable energy", "energy from sources that naturally replace themselves"],
              ["solar energy", "energy produced from sunlight"],
              ["carbon footprint", "the amount of greenhouse gases produced by a person or activity"],
              ["sustainable", "able to continue without causing serious environmental damage"],
              ["conservation", "the protection of nature and natural resources"],
              ["natural resources", "materials and substances that come from nature"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  {word}
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Environmental Problems */}
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
            Environmental Problems
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use these expressions to describe common environmental problems.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Air pollution is a serious problem in many cities.</p>
            <p>Plastic waste is damaging oceans and wildlife.</p>
            <p>Climate change is affecting weather patterns.</p>
            <p>Many forests are disappearing because of deforestation.</p>
            <p>Some natural resources are becoming harder to replace.</p>
            <p>Traffic creates a lot of air pollution.</p>
            <p>People produce too much waste every day.</p>
          </div>
        </section>

        {/* Listening Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Read the conversation and pay attention to how the speakers
            discuss environmental habits and possible solutions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Laura:</strong> Have you changed any of your habits to
              help the environment?
            </p>

            <p>
              <strong>Tom:</strong> Yes. I&apos;ve started using public
              transport more often instead of driving everywhere.
            </p>

            <p>
              <strong>Laura:</strong> That&apos;s a good idea. Do you also
              recycle?
            </p>

            <p>
              <strong>Tom:</strong> Yes, I separate paper, glass, and plastic
              at home.
            </p>

            <p>
              <strong>Laura:</strong> I&apos;ve also stopped buying bottled
              water. I use a reusable bottle now.
            </p>

            <p>
              <strong>Tom:</strong> That probably reduces a lot of plastic
              waste.
            </p>

            <p>
              <strong>Laura:</strong> What do you think is the biggest
              environmental problem in our city?
            </p>

            <p>
              <strong>Tom:</strong> I think air pollution is probably the
              biggest problem, especially because of traffic.
            </p>

            <p>
              <strong>Laura:</strong> I agree. Maybe the city should improve
              public transport and create more bicycle lanes.
            </p>

            <p>
              <strong>Tom:</strong> Yes, and people could walk more when
              possible. Small changes can make a difference.
            </p>
          </div>
        </section>

        {/* Listening Comprehension */}
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
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>What has Tom changed?</li>
            <li>What materials does he recycle?</li>
            <li>What has Laura stopped buying?</li>
            <li>What does Tom think is the biggest problem in the city?</li>
            <li>What two solutions does Laura suggest?</li>
            <li>What does Tom say about small changes?</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. He has started using public transport more often.</p>
            <p>2. Paper, glass, and plastic.</p>
            <p>3. Bottled water.</p>
            <p>4. Air pollution caused partly by traffic.</p>
            <p>
              5. Improve public transport and create more bicycle lanes.
            </p>
            <p>6. He thinks small changes can make a difference.</p>
          </div>
        </section>

        {/* Sustainable Living */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Sustainable Living
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Sustainable living means making choices that reduce unnecessary
            waste and protect natural resources.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I try to use less plastic.</p>
            <p>I take reusable bags when I go shopping.</p>
            <p>I usually walk or use public transport.</p>
            <p>I turn off the lights when I leave a room.</p>
            <p>I try not to waste food.</p>
            <p>I buy local products when possible.</p>
            <p>I reuse things instead of throwing them away.</p>
          </div>
        </section>

        {/* Lifestyle Habits */}
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
            Healthy & Sustainable Lifestyle Habits
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            {[
              [
                "Transportation",
                "Walk, cycle, or use public transport when possible.",
              ],
              [
                "Food",
                "Avoid wasting food and choose fresh local products when possible.",
              ],
              [
                "Energy",
                "Turn off unnecessary lights and devices.",
              ],
              [
                "Shopping",
                "Use reusable bags and avoid unnecessary packaging.",
              ],
              [
                "Waste",
                "Reduce, reuse, and recycle materials.",
              ],
              [
                "Water",
                "Avoid wasting water during everyday activities.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#173b78", marginTop: 0 }}>
                  {title}
                </h3>

                <p style={{ lineHeight: 1.7, color: "#667085" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Giving Suggestions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Suggesting Environmental Solutions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use these expressions to suggest practical solutions to
            environmental problems.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>We should use less plastic.</p>
            <p>People could use public transport more often.</p>
            <p>Why don&apos;t we organize a recycling program?</p>
            <p>Maybe the city should create more bicycle lanes.</p>
            <p>We could encourage people to save energy.</p>
            <p>It might be a good idea to plant more trees.</p>
            <p>Everyone can make small changes in their daily lives.</p>
          </div>
        </section>

        {/* Climate Change */}
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
            Talking About Climate Change
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Practice explaining causes, effects, and possible solutions.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Climate change is affecting many parts of the world.</p>
            <p>Rising temperatures can cause more extreme weather.</p>
            <p>Human activities contribute to greenhouse gas emissions.</p>
            <p>Reducing emissions can help slow climate change.</p>
            <p>Renewable energy can reduce dependence on fossil fuels.</p>
            <p>Individuals and governments both have a role to play.</p>
          </div>
        </section>

        {/* Comparing Lifestyle Choices */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Comparing Lifestyle Choices
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Compare different choices and explain which one you prefer.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Walking is healthier and more environmentally friendly than driving.</p>
            <p>Public transport is usually cheaper than using a car.</p>
            <p>Reusable products are better for reducing waste.</p>
            <p>Buying local food can reduce transportation distances.</p>
            <p>Living in a smaller home can require less energy.</p>
            <p>One option may be more convenient, while another may be more sustainable.</p>
          </div>
        </section>

        {/* Useful Expressions */}
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
            Useful Environment & Lifestyle Expressions
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
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
                    }}
                  >
                    Function
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Describe a problem", "Pollution is a serious problem."],
                  ["Give an opinion", "In my opinion..."],
                  ["Suggest", "We could..."],
                  ["Give advice", "People should..."],
                  ["Talk about habits", "I usually..."],
                  ["Talk about change", "We need to reduce..."],
                  ["Give a reason", "The main reason is..."],
                  ["Compare", "This is more environmentally friendly than..."],
                  ["Express possibility", "It might help to..."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
                      }}
                    >
                      {expression}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each topic. Give examples and
            explain your opinions.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe the biggest environmental problem in your city.",
              "What can people do to reduce plastic waste?",
              "How do you usually travel around your city?",
              "What environmentally friendly habits do you have?",
              "What changes should governments make to protect the environment?",
              "Would you change your lifestyle to help the environment? Why or why not?",
            ].map((topic, index) => (
              <div
                key={topic}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Topic {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Challenge */}
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
            Discussion Challenge
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Imagine that your city wants to become more environmentally
            friendly. The local government can choose only three projects.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>1. Build more bicycle lanes.</p>
            <p>2. Improve public transportation.</p>
            <p>3. Plant more trees.</p>
            <p>4. Create more recycling centers.</p>
            <p>5. Reduce traffic in the city center.</p>
            <p>6. Encourage renewable energy.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Choose three projects. Explain the advantages and disadvantages of
            each choice and agree on the best plan.
          </p>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You are members of a local community
              planning an environmental campaign.
            </p>

            <p>
              <strong>Student A:</strong> Suggest ways to reduce waste in the
              neighborhood.
            </p>

            <p>
              <strong>Student B:</strong> Suggest ways to reduce traffic and
              pollution.
            </p>

            <p>
              Discuss both ideas, compare them, and decide which actions should
              be started first.
            </p>

            <p>
              Try to use expressions such as “We could...”, “I think we
              should...”, “One advantage is...”, and “On balance...”.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
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
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ We must to recycle more.
              <br />
              ✅ We must recycle more.
            </p>

            <p>
              ❌ People should to use public transport.
              <br />
              ✅ People should use public transport.
            </p>

            <p>
              ❌ There are too much pollution in the city.
              <br />
              ✅ There is too much pollution in the city.
            </p>

            <p>
              ❌ We need reduce plastic waste.
              <br />
              ✅ We need to reduce plastic waste.
            </p>

            <p>
              ❌ I am interesting in environmental issues.
              <br />
              ✅ I am interested in environmental issues.
            </p>

            <p>
              ❌ People doesn't recycle enough.
              <br />
              ✅ People don't recycle enough.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>Complete: “We should ______ less plastic.”</li>
            <li>Complete: “There is too ______ pollution in the city.”</li>
            <li>Complete: “People could ______ public transport.”</li>
            <li>Complete: “We need ______ reduce waste.”</li>
            <li>Complete: “Renewable energy ______ help reduce emissions.”</li>
            <li>Give one environmental problem in your city.</li>
            <li>Give one way to reduce plastic waste.</li>
            <li>Give one advantage of public transport.</li>
            <li>Give one environmentally friendly habit.</li>
            <li>Suggest one solution to air pollution.</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Sample Answers
            </h3>

            <p>
              1. use
              <br />
              2. much
              <br />
              3. use
              <br />
              4. to
              <br />
              5. can
              <br />
              6. Air pollution.
              <br />
              7. Use reusable bags and bottles.
              <br />
              8. It can reduce traffic and pollution.
              <br />
              9. Recycling.
              <br />
              10. Improve public transport and encourage people to use it.
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>Use environmental vocabulary to describe problems.</li>
            <li>Talk about pollution, climate change, and waste.</li>
            <li>Describe sustainable lifestyle habits.</li>
            <li>Suggest practical environmental solutions.</li>
            <li>Compare different lifestyle choices.</li>
            <li>Give opinions and explain your reasons.</li>
            <li>Discuss how individuals and communities can make a difference.</li>
          </ul>
        </section>

        {/* Navigation */}
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
            href="/resources/listening-speaking/b1/technology-media"
            style={buttonStyle}
          >
            ← Technology & Media
          </Link>

          <Link
            href="/resources/listening-speaking/b1/travel-planning"
            style={buttonStyle}
          >
            Next: Travel & Planning →
          </Link>
        </div>
      </div>
    </main>
  );
}