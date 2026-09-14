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

const phraseStyle = {
  background: "#f8fafc",
  border: "1px solid #e5eaf0",
  borderRadius: "12px",
  padding: "16px 18px",
  marginBottom: "12px",
};

export default function GreetingsIntroductionsPage() {
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
          href="/resources/listening-speaking/a1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ← A1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 30px",
            border: "1px solid #e5eaf0",
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
            LISTENING & SPEAKING — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Greetings & Introductions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to greet people, introduce yourself, and have simple
            conversations with new people.
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
            <li>Greet people in everyday situations.</li>
            <li>Introduce yourself.</li>
            <li>Ask someone&apos;s name.</li>
            <li>Ask simple personal questions.</li>
            <li>End a simple conversation politely.</li>
          </ul>
        </section>

        {/* Greetings */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Greetings
          </h2>

          <div style={phraseStyle}>
            <strong>Hello!</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              A common greeting for almost any situation.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Hi!</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              A friendly and informal greeting.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Good morning!</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Used in the morning.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Good afternoon!</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Used in the afternoon.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Good evening!</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Used when meeting someone in the evening.
            </p>
          </div>
        </section>

        {/* Introductions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Introducing Yourself
          </h2>

          <div style={phraseStyle}>
            <strong>My name is Anna.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m Anna.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Nice to meet you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It&apos;s nice to meet you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Nice to meet you, too.</strong>
          </div>
        </section>

        {/* Asking Names */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking Someone&apos;s Name
          </h2>

          <div style={phraseStyle}>
            <strong>What&apos;s your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>And you?</strong>
          </div>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            These questions are useful when you meet someone for the first
            time.
          </p>
        </section>

        {/* Asking How Someone Is */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. How Are You?
          </h2>

          <div style={phraseStyle}>
            <strong>How are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m fine, thank you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m good, thanks.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m great!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Not bad.</strong>
          </div>
        </section>

        {/* Listening Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it in a real situation.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Anna:</strong> Hi!
            </p>
            <p>
              <strong>Tom:</strong> Hello!
            </p>
            <p>
              <strong>Anna:</strong> What&apos;s your name?
            </p>
            <p>
              <strong>Tom:</strong> I&apos;m Tom. And you?
            </p>
            <p>
              <strong>Anna:</strong> I&apos;m Anna. Nice to meet you.
            </p>
            <p>
              <strong>Tom:</strong> Nice to meet you, too.
            </p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Practice this conversation aloud. Then change the names and create
            your own conversation.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>A:</strong> Hello! My name is Sarah.
            </p>
            <p>
              <strong>B:</strong> Hi! I&apos;m David.
            </p>
            <p>
              <strong>A:</strong> Nice to meet you.
            </p>
            <p>
              <strong>B:</strong> Nice to meet you, too.
            </p>
            <p>
              <strong>A:</strong> How are you?
            </p>
            <p>
              <strong>B:</strong> I&apos;m great, thanks. And you?
            </p>
            <p>
              <strong>A:</strong> I&apos;m good, thank you.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the conversation:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              A: Hi! What&apos;s your ______?
            </p>
            <p>
              B: My ______ is John.
            </p>
            <p>
              A: Nice to ______ you.
            </p>
            <p>
              B: Nice to meet you, ______.
            </p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>Hello / Hi</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Good morning</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What&apos;s your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My name is...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Nice to meet you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m fine, thanks.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>See you!</strong>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/a1"
            style={{
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
            }}
          >
            ← A1 Listening & Speaking
          </Link>

          <Link
            href="/resources/listening-speaking/a1/personal-information"
            style={{
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
            }}
          >
            Next: Personal Information →
          </Link>
        </div>
      </div>
    </main>
  );
}