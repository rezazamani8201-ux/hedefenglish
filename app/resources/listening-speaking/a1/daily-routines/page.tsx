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

export default function DailyRoutinesPage() {
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
            Daily Routines
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your everyday activities and describe a
            typical day.
          </p>
        </section>

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
            <li>Talk about your daily routine.</li>
            <li>Describe activities from morning to night.</li>
            <li>Ask someone about their routine.</li>
            <li>Talk about the time of everyday activities.</li>
            <li>Practice simple conversations about daily life.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Daily Activities
          </h2>

          <div style={phraseStyle}>
            <strong>Wake up</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I wake up at 7 o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Get up</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I get up at 7:15.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Have breakfast</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have breakfast at 8 o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Go to work</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go to work at 9 o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Have lunch</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have lunch at 1 o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Go home</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go home at 6 o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Have dinner</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have dinner with my family.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Go to bed</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go to bed at 11 o&apos;clock.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Talking About Your Routine
          </h2>

          <div style={phraseStyle}>
            <strong>I wake up at 7 o&apos;clock.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I take a shower in the morning.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have breakfast at 8 o&apos;clock.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I go to work at 9 o&apos;clock.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I come home in the evening.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I watch TV after dinner.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I go to bed at 11 o&apos;clock.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking About Daily Routines
          </h2>

          <div style={phraseStyle}>
            <strong>What time do you wake up?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you go to work?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do in the morning?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do after work?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you go to bed?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Time Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>in the morning</strong>
          </div>

          <div style={phraseStyle}>
            <strong>in the afternoon</strong>
          </div>

          <div style={phraseStyle}>
            <strong>in the evening</strong>
          </div>

          <div style={phraseStyle}>
            <strong>at night</strong>
          </div>

          <div style={phraseStyle}>
            <strong>before work</strong>
          </div>

          <div style={phraseStyle}>
            <strong>after work</strong>
          </div>

          <div style={phraseStyle}>
            <strong>after dinner</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it in a real conversation.
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
              <strong>Anna:</strong> What time do you wake up?
            </p>

            <p>
              <strong>David:</strong> I wake up at 7 o&apos;clock.
            </p>

            <p>
              <strong>Anna:</strong> What do you do in the morning?
            </p>

            <p>
              <strong>David:</strong> I take a shower and have breakfast.
            </p>

            <p>
              <strong>Anna:</strong> What time do you go to work?
            </p>

            <p>
              <strong>David:</strong> I go to work at 9 o&apos;clock.
            </p>

            <p>
              <strong>Anna:</strong> What do you do after work?
            </p>

            <p>
              <strong>David:</strong> I go home and have dinner.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud about your own daily routine.
          </p>

          <div style={phraseStyle}>
            <strong>What time do you wake up?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do in the morning?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you have breakfast?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you go to work or school?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do after work or school?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you go to bed?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are talking to a new friend about your daily routine.
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
              <strong>A:</strong> What time do you wake up?
            </p>

            <p>
              <strong>B:</strong> I wake up at ______.
            </p>

            <p>
              <strong>A:</strong> What do you do in the morning?
            </p>

            <p>
              <strong>B:</strong> I ______ and ______.
            </p>

            <p>
              <strong>A:</strong> What time do you go to work?
            </p>

            <p>
              <strong>B:</strong> I go to work at ______.
            </p>

            <p>
              <strong>A:</strong> What do you do after work?
            </p>

            <p>
              <strong>B:</strong> I ______.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>1. I ______ up at 7 o&apos;clock.</p>
            <p>2. I have ______ at 8 o&apos;clock.</p>
            <p>3. I go ______ work at 9 o&apos;clock.</p>
            <p>4. I come ______ home in the evening.</p>
            <p>5. I go to ______ at 11 o&apos;clock.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>I wake up at...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have breakfast at...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I go to work at...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I come home at...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>After work, I...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>In the evening, I...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I go to bed at...</strong>
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
            ← Personal Information
          </Link>

          <Link
            href="/resources/listening-speaking/a1/family-friends"
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
            Next: Family & Friends →
          </Link>
        </div>
      </div>
    </main>
  );
}