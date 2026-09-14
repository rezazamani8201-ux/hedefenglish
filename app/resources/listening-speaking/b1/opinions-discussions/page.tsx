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

export default function OpinionsDiscussionsPage() {
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
            B1 LISTENING & SPEAKING — LESSON 06
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Opinions & Discussions
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
            Learn how to express opinions, explain your ideas, agree and
            disagree politely, ask for other people&apos;s views, and take
            part in everyday discussions.
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
            <li>Express your opinion clearly and naturally.</li>
            <li>Ask other people what they think.</li>
            <li>Give reasons and examples to support your ideas.</li>
            <li>Agree and disagree politely.</li>
            <li>Compare different points of view.</li>
            <li>Keep a discussion going by asking follow-up questions.</li>
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
            Key Discussion Vocabulary
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
              ["opinion", "what you think or believe about something"],
              ["point of view", "a particular way of thinking about a subject"],
              ["argument", "a reason or set of reasons supporting an idea"],
              ["issue", "an important subject or problem being discussed"],
              ["advantage", "a positive feature or benefit"],
              ["disadvantage", "a negative feature or drawback"],
              ["reason", "an explanation for why something happens or is true"],
              ["evidence", "facts or information used to support an idea"],
              ["agree", "to have the same opinion as another person"],
              ["disagree", "to have a different opinion from another person"],
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

        {/* Expressing Opinions */}
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
            Expressing Opinions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            These expressions help you introduce your opinion clearly.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I think...</p>
            <p>I believe...</p>
            <p>In my opinion...</p>
            <p>In my view...</p>
            <p>From my point of view...</p>
            <p>Personally, I think...</p>
            <p>As far as I&apos;m concerned...</p>
            <p>The way I see it...</p>
          </div>
        </section>

        {/* Giving Reasons */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Giving Reasons
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            At B1 level, it is important not only to give an opinion but also
            to explain why you think that way.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I think public transport is useful because it is affordable.</p>
            <p>
              In my opinion, working from home is convenient because you save
              time.
            </p>
            <p>
              I believe exercise is important since it helps people stay
              healthy.
            </p>
            <p>
              I prefer studying in the morning because I can concentrate
              better.
            </p>
          </div>
        </section>

        {/* Listening Conversation */}
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

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation and notice how the speakers give opinions,
            support their ideas, and respond to different points of view.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Emma:</strong> What do you think about working from home?
            </p>

            <p>
              <strong>Daniel:</strong> Personally, I think it&apos;s a great
              option. You don&apos;t have to spend time commuting.
            </p>

            <p>
              <strong>Emma:</strong> That&apos;s true, but don&apos;t you think
              people can feel isolated?
            </p>

            <p>
              <strong>Daniel:</strong> I see your point. However, people can
              still communicate with their colleagues online.
            </p>

            <p>
              <strong>Emma:</strong> That&apos;s possible, but I prefer working
              in an office.
            </p>

            <p>
              <strong>Daniel:</strong> Why is that?
            </p>

            <p>
              <strong>Emma:</strong> I like being around other people, and I
              find it easier to discuss ideas face to face.
            </p>

            <p>
              <strong>Daniel:</strong> That makes sense. I suppose it depends
              on the person and the type of job.
            </p>

            <p>
              <strong>Emma:</strong> Exactly. There are advantages and
              disadvantages to both options.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>What does Daniel think about working from home?</li>
            <li>What concern does Emma mention?</li>
            <li>Why does Emma prefer working in an office?</li>
            <li>What does Daniel say at the end?</li>
            <li>Do they think one option is perfect for everyone?</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. He thinks it is a great option.</p>
            <p>2. She thinks people can feel isolated.</p>
            <p>3. She likes being around other people and discussing ideas face to face.</p>
            <p>4. He says it depends on the person and the type of job.</p>
            <p>5. No. They agree that both options have advantages and disadvantages.</p>
          </div>
        </section>

        {/* Agreeing */}
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
            Agreeing
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I completely agree.</p>
            <p>I totally agree.</p>
            <p>Exactly.</p>
            <p>That&apos;s exactly what I think.</p>
            <p>You&apos;re absolutely right.</p>
            <p>I couldn&apos;t agree more.</p>
            <p>That&apos;s a good point.</p>
            <p>I feel the same way.</p>
          </div>
        </section>

        {/* Disagreeing */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Disagreeing Politely
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            In everyday English, it is often better to disagree politely
            rather than directly saying that someone is wrong.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I&apos;m not sure I agree.</p>
            <p>I see your point, but I think...</p>
            <p>I understand what you mean, but...</p>
            <p>I&apos;m afraid I disagree.</p>
            <p>That&apos;s one way of looking at it, but...</p>
            <p>I have a slightly different opinion.</p>
          </div>
        </section>

        {/* Asking Opinions */}
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
            Asking for Opinions
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>What do you think?</p>
            <p>What&apos;s your opinion?</p>
            <p>How do you feel about it?</p>
            <p>What&apos;s your view on this?</p>
            <p>Do you agree?</p>
            <p>What do you think about this idea?</p>
            <p>How do you see the situation?</p>
          </div>
        </section>

        {/* Discussion Connectors */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Linking Expressions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Linking expressions make your speaking more organized and easier
            to follow.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Adding:</strong> Also, In addition, Another point is...
            </p>

            <p>
              <strong>Contrasting:</strong> However, On the other hand, But...
            </p>

            <p>
              <strong>Giving a reason:</strong> Because, Since, The reason is...
            </p>

            <p>
              <strong>Giving an example:</strong> For example, For instance...
            </p>

            <p>
              <strong>Concluding:</strong> Overall, In conclusion, To sum up...
            </p>
          </div>
        </section>

        {/* Pros and Cons */}
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
            Discussing Advantages and Disadvantages
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Advantages
              </h3>

              <p>One advantage is that...</p>
              <p>One benefit is...</p>
              <p>The main advantage is...</p>
              <p>Another positive point is...</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Disadvantages
              </h3>

              <p>One disadvantage is that...</p>
              <p>One drawback is...</p>
              <p>The main problem is...</p>
              <p>Another negative point is...</p>
            </div>
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
            Speak for one to two minutes about each topic. Give your opinion
            and support it with at least one reason or example.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Is it better to work from home or in an office?",
              "Do you think people spend too much time on their phones?",
              "Is learning English easier with a teacher or by yourself?",
              "Should people use public transport more often?",
              "Is it better to live in a big city or a small town?",
              "Should students have less homework?",
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

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Topic:</strong> Should people spend less time on social
              media?
            </p>

            <p>
              Person A should argue that people should spend less time on
              social media.
            </p>

            <p>
              Person B should argue that social media has many benefits.
            </p>

            <p>
              Both speakers should give at least two reasons and respond to
              each other politely.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#eef4ff",
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
              ❌ In my opinion I think it is useful.
              <br />
              ✅ In my opinion, it is useful.
              <br />
              <span style={{ color: "#667085" }}>
                Avoid using both “In my opinion” and “I think” together.
              </span>
            </p>

            <p>
              ❌ I am agree with you.
              <br />
              ✅ I agree with you.
            </p>

            <p>
              ❌ I think that because it is cheap.
              <br />
              ✅ I think it is useful because it is cheap.
            </p>

            <p>
              ❌ I disagree you.
              <br />
              ✅ I disagree with you.
            </p>

            <p>
              ❌ According to my opinion...
              <br />
              ✅ In my opinion...
            </p>
          </div>
        </section>

        {/* Quick Practice */}
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
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>Give one expression for introducing your opinion.</li>
            <li>Ask someone what they think about a topic.</li>
            <li>Give one polite expression for disagreement.</li>
            <li>Complete: “I agree ______ you.”</li>
            <li>Give one expression for introducing an example.</li>
            <li>Explain one advantage of working from home.</li>
            <li>Explain one disadvantage of using social media.</li>
            <li>Complete: “In my ______, public transport is useful.”</li>
            <li>Give one expression for showing strong agreement.</li>
            <li>Give one expression for changing the direction of an argument.</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
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
              1. “In my opinion...”
              <br />
              2. “What do you think?”
              <br />
              3. “I&apos;m not sure I agree.”
              <br />
              4. with
              <br />
              5. “For example...”
              <br />
              6. “One advantage is that you don&apos;t have to commute.”
              <br />
              7. “One disadvantage is that it can take a lot of time.”
              <br />
              8. opinion
              <br />
              9. “I couldn&apos;t agree more.”
              <br />
              10. “However...” / “On the other hand...”
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>Use different expressions to introduce your opinion.</li>
            <li>Give reasons and examples to make your ideas stronger.</li>
            <li>Ask other people for their opinions.</li>
            <li>Agree and disagree politely.</li>
            <li>Use linking expressions to organize your ideas.</li>
            <li>Discuss advantages and disadvantages.</li>
            <li>Ask follow-up questions to keep conversations going.</li>
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
            href="/resources/listening-speaking/b1/social-life-relationships"
            style={buttonStyle}
          >
            ← Social Life & Relationships
          </Link>

          <Link
            href="/resources/listening-speaking/b1/work-education"
            style={buttonStyle}
          >
            Next: Work & Education →
          </Link>
        </div>
      </div>
    </main>
  );
}