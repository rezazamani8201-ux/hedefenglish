"use client";

import Link from "next/link";

const sectionStyle = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "18px",
  padding: "30px",
  marginBottom: "25px",
  boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
};

const boxStyle = {
  background: "#f8fafc",
  border: "1px solid #e5eaf0",
  borderRadius: "12px",
  padding: "18px 20px",
  marginBottom: "12px",
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

export default function TalkingAboutExperiencesPage() {
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
          href="/resources/listening-speaking/a2"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← A2 Listening & Speaking
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
            LISTENING & SPEAKING — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Talking About Experiences
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your past experiences, places you have
            visited, things you have done, and interesting experiences in your
            life.
          </p>
        </section>

        {/* Learning Goals */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <ul
            style={{
              lineHeight: 1.9,
              color: "#4b5563",
              paddingLeft: "22px",
            }}
          >
            <li>Talk about experiences you have had.</li>
            <li>Ask other people about their experiences.</li>
            <li>Use common expressions for life experiences.</li>
            <li>Understand questions about past experiences.</li>
            <li>Give short and clear answers in conversations.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["experience", "something that happens to you"],
              ["travel", "to go from one place to another"],
              ["visit", "to go to a place for a short time"],
              ["try", "to do or experience something"],
              ["meet", "to see and spend time with someone"],
              ["learn", "to get knowledge or a new skill"],
              ["see", "to watch or look at something"],
              ["ever", "at any time in your life"],
              ["never", "not at any time"],
              ["already", "before now"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{word}</strong>
                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: Present Perfect
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We often use the Present Perfect to talk about experiences in our
            lives when we do not say exactly when they happened.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>have / has + past participle</strong>
            </p>

            <p>I have visited London.</p>
            <p>She has tried Japanese food.</p>
            <p>We have seen that movie.</p>
            <p>He has never traveled abroad.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginTop: "15px",
            }}
          >
            <strong style={{ color: "#173b78" }}>Questions:</strong>

            <p style={{ marginBottom: "8px" }}>
              Have you ever visited another country?
            </p>

            <p style={{ marginBottom: 0 }}>
              Has she ever tried sushi?
            </p>
          </div>
        </section>

        {/* Listening */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and imagine that you are listening
            to two friends talking about their experiences.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Emma:</strong> Have you ever traveled outside your
              country?
            </p>

            <p>
              <strong>Daniel:</strong> Yes, I have. I went to Italy last year.
            </p>

            <p>
              <strong>Emma:</strong> Really? Have you visited Rome?
            </p>

            <p>
              <strong>Daniel:</strong> Yes, I have. It was amazing.
            </p>

            <p>
              <strong>Emma:</strong> What was your favorite place?
            </p>

            <p>
              <strong>Daniel:</strong> I loved Florence. The city was beautiful.
            </p>

            <p>
              <strong>Emma:</strong> Have you ever tried Italian cooking?
            </p>

            <p>
              <strong>Daniel:</strong> Of course! I&apos;ve tried pizza,
              pasta, and gelato.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Where did Daniel go last year?</p>
            <p>2. Has Daniel visited Rome?</p>
            <p>3. What was his favorite place?</p>
            <p>4. What Italian foods has he tried?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. He went to Italy.</p>
            <p>2. Yes, he has.</p>
            <p>3. Florence was his favorite place.</p>
            <p>4. He has tried pizza, pasta, and gelato.</p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Have you ever...?</strong>
            </p>
            <p>Have you ever been to London?</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Yes, I have.</strong>
            </p>
            <p>Yes, I have. I went there two years ago.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>No, I haven&apos;t.</strong>
            </p>
            <p>No, I haven&apos;t, but I&apos;d like to go.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>I&apos;ve never...</strong>
            </p>
            <p>I&apos;ve never traveled by plane.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>I&apos;ve already...</strong>
            </p>
            <p>I&apos;ve already seen that movie.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>That sounds interesting!</strong>
            </p>
          </div>
        </section>

        {/* Speaking */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Ask a partner these questions. Give complete answers whenever
            possible.
          </p>

          <div style={boxStyle}>
            <p>1. Have you ever traveled to another city?</p>
            <p>2. Have you ever traveled by plane?</p>
            <p>3. Have you ever tried unusual food?</p>
            <p>4. Have you ever met a famous person?</p>
            <p>5. Have you ever learned a new skill?</p>
            <p>6. Have you ever stayed in a beautiful hotel?</p>
            <p>7. Have you ever watched a movie more than three times?</p>
            <p>8. Have you ever done something exciting?</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Have you ever traveled abroad?
            </p>

            <p>
              <strong>B:</strong> Yes, I have. I went to Greece last summer.
            </p>

            <p>
              <strong>A:</strong> Really? What did you like about it?
            </p>

            <p>
              <strong>B:</strong> I loved the beaches and the food.
            </p>

            <p>
              <strong>A:</strong> Would you like to go there again?
            </p>

            <p>
              <strong>B:</strong> Definitely. I&apos;d love to visit again.
            </p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Imagine you are meeting a new friend. Ask each other about your
            life experiences.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> Ask about travel, food, hobbies, and
              interesting experiences.
            </p>

            <p>
              <strong>Student B:</strong> Answer the questions and ask
              follow-up questions.
            </p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong style={{ color: "#173b78" }}>
              Useful follow-up questions:
            </strong>

            <p>Where did you go?</p>
            <p>When did you go?</p>
            <p>Who did you go with?</p>
            <p>What did you do?</p>
            <p>Did you enjoy it?</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. Have you ever ______ to another country?
              <br />
              <strong>(been / went)</strong>
            </p>

            <p>
              2. She has ______ sushi before.
              <br />
              <strong>(tried / try)</strong>
            </p>

            <p>
              3. I have never ______ by plane.
              <br />
              <strong>(traveled / travel)</strong>
            </p>

            <p>
              4. ______ you ever visited London?
              <br />
              <strong>(Have / Did)</strong>
            </p>

            <p>
              5. He has ______ finished his homework.
              <br />
              <strong>(already / ever)</strong>
            </p>

            <p>
              6. I ______ to Spain last year.
              <br />
              <strong>(went / have gone)</strong>
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.9,
            }}
          >
            <p>1. been</p>
            <p>2. tried</p>
            <p>3. traveled</p>
            <p>4. Have</p>
            <p>5. already</p>
            <p>6. went</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I have went to Italy.</p>
            <p>✅ I have been to Italy.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Did you ever been to London?</p>
            <p>✅ Have you ever been to London?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have never went there.</p>
            <p>✅ I have never been there.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have visited Paris last year.</p>
            <p>✅ I visited Paris last year.</p>
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

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>Use “Have you ever...?” to ask about life experiences.</li>
            <li>Use “Yes, I have” for a positive answer.</li>
            <li>Use “No, I haven&apos;t” for a negative answer.</li>
            <li>
              Use the Present Perfect when the exact time is not important.
            </li>
            <li>Use the Past Simple when you say when something happened.</li>
            <li>Ask follow-up questions to keep the conversation going.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            The goal is not only to know the grammar — it is to use it in real
            conversations.
          </p>
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
            href="/resources/listening-speaking/a2"
            style={buttonStyle}
          >
            ← A2 Listening & Speaking
          </Link>

          <Link
            href="/resources/listening-speaking/a2/plans-future-activities"
            style={buttonStyle}
          >
            Next: Plans & Future Activities →
          </Link>
        </div>
      </div>
    </main>
  );
}