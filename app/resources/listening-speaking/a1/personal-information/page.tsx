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

export default function PersonalInformationPage() {
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
            Personal Information
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your name, age, country, job, phone
            number, and other basic personal information.
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
            <li>Give basic information about yourself.</li>
            <li>Ask someone for personal information.</li>
            <li>Talk about your country and nationality.</li>
            <li>Talk about your job or studies.</li>
            <li>Ask and answer simple personal questions.</li>
          </ul>
        </section>

        {/* Name */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Name
          </h2>

          <div style={phraseStyle}>
            <strong>What&apos;s your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My name is David.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m David.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What&apos;s your first name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What&apos;s your last name?</strong>
          </div>
        </section>

        {/* Age */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Age
          </h2>

          <div style={phraseStyle}>
            <strong>How old are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m 25 years old.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m 25.</strong>
          </div>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Remember: We say <strong>&quot;I&apos;m 25&quot;</strong> or{" "}
            <strong>&quot;I&apos;m 25 years old.&quot;</strong>
          </p>
        </section>

        {/* Country */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Country & Nationality
          </h2>

          <div style={phraseStyle}>
            <strong>Where are you from?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m from Turkey.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you live?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I live in Istanbul.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What&apos;s your nationality?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m Turkish.</strong>
          </div>
        </section>

        {/* Job and Studies */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Job & Studies
          </h2>

          <div style={phraseStyle}>
            <strong>What do you do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m a teacher.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m a student.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you work?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I work at a school.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you study?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I study English.</strong>
          </div>
        </section>

        {/* Phone */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Phone Number
          </h2>

          <div style={phraseStyle}>
            <strong>What&apos;s your phone number?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My phone number is 555-123-4567.</strong>
          </div>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            When saying phone numbers in English, we usually say each number
            separately.
          </p>
        </section>

        {/* Listening Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
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
              <strong>Anna:</strong> Hi! What&apos;s your name?
            </p>

            <p>
              <strong>David:</strong> I&apos;m David. And you?
            </p>

            <p>
              <strong>Anna:</strong> I&apos;m Anna. Nice to meet you.
            </p>

            <p>
              <strong>David:</strong> Nice to meet you, too.
            </p>

            <p>
              <strong>Anna:</strong> Where are you from?
            </p>

            <p>
              <strong>David:</strong> I&apos;m from Turkey. I live in Istanbul.
            </p>

            <p>
              <strong>Anna:</strong> What do you do?
            </p>

            <p>
              <strong>David:</strong> I&apos;m a teacher.
            </p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud using complete sentences.
          </p>

          <div style={phraseStyle}>
            <strong>What&apos;s your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How old are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where are you from?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you live?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you study?</strong>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are meeting a new classmate. Use the questions below
            to start a conversation.
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
              <strong>A:</strong> Hello! What&apos;s your name?
            </p>

            <p>
              <strong>B:</strong> My name is ______.
            </p>

            <p>
              <strong>A:</strong> Where are you from?
            </p>

            <p>
              <strong>B:</strong> I&apos;m from ______.
            </p>

            <p>
              <strong>A:</strong> What do you do?
            </p>

            <p>
              <strong>B:</strong> I&apos;m a ______.
            </p>

            <p>
              <strong>A:</strong> Nice to meet you!
            </p>

            <p>
              <strong>B:</strong> Nice to meet you, too!
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Quick Practice
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
            <p>1. My ______ is Sarah.</p>
            <p>2. I&apos;m 22 years ______.</p>
            <p>3. I&apos;m ______ Turkey.</p>
            <p>4. I ______ in Istanbul.</p>
            <p>5. I&apos;m a ______.</p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>What&apos;s your name?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How old are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where are you from?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you live?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Nice to meet you.</strong>
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
            href="/resources/listening-speaking/a1/greetings-introductions"
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
            ← Greetings & Introductions
          </Link>

          <Link
            href="/resources/listening-speaking/a1/daily-routines"
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
            Next: Daily Routines →
          </Link>
        </div>
      </div>
    </main>
  );
}