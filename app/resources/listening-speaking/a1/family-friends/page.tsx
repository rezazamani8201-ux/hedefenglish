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

export default function FamilyFriendsPage() {
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
            Family & Friends
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your family, describe people, and speak
            about your friends.
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
            <li>Talk about your family members.</li>
            <li>Describe simple family relationships.</li>
            <li>Talk about your friends.</li>
            <li>Describe people using simple adjectives.</li>
            <li>Ask and answer questions about family and friends.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Family Members
          </h2>

          <div style={phraseStyle}>
            <strong>mother</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              This is my mother.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>father</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              This is my father.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>brother</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have one brother.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>sister</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have two sisters.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>husband / wife</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She is my wife.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>son / daughter</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              They have a daughter.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>parents</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My parents live in Ankara.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Talking About Your Family
          </h2>

          <div style={phraseStyle}>
            <strong>I have a small family.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have two brothers.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have one sister.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My mother is a teacher.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My father works in a bank.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I live with my parents.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking About Family
          </h2>

          <div style={phraseStyle}>
            <strong>Do you have any brothers or sisters?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How many brothers do you have?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How many sisters do you have?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Who do you live with?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where does your family live?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Describing People
          </h2>

          <div style={phraseStyle}>
            <strong>friendly</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My sister is very friendly.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>kind</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My mother is kind.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>funny</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My brother is funny.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>quiet</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My father is quiet.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>nice</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She is a very nice person.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Talking About Friends
          </h2>

          <div style={phraseStyle}>
            <strong>She is my best friend.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>He is a good friend of mine.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>We go to school together.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>We work together.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>We like watching movies together.</strong>
          </div>
        </section>

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
              <strong>Anna:</strong> Do you have any brothers or sisters?
            </p>

            <p>
              <strong>David:</strong> Yes, I do. I have one brother and one
              sister.
            </p>

            <p>
              <strong>Anna:</strong> Who do you live with?
            </p>

            <p>
              <strong>David:</strong> I live with my parents.
            </p>

            <p>
              <strong>Anna:</strong> What does your brother do?
            </p>

            <p>
              <strong>David:</strong> He is a student.
            </p>

            <p>
              <strong>Anna:</strong> And your sister?
            </p>

            <p>
              <strong>David:</strong> She is a teacher. She is very friendly.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud about your family and friends.
          </p>

          <div style={phraseStyle}>
            <strong>Do you have any brothers or sisters?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How many people are there in your family?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Who do you live with?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What does your mother do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What does your father do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Tell me about your best friend.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are meeting a new friend. Ask questions about their
            family.
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
              <strong>A:</strong> Do you have any brothers or sisters?
            </p>

            <p>
              <strong>B:</strong> Yes, I have ______.
            </p>

            <p>
              <strong>A:</strong> Who do you live with?
            </p>

            <p>
              <strong>B:</strong> I live with ______.
            </p>

            <p>
              <strong>A:</strong> What does your ______ do?
            </p>

            <p>
              <strong>B:</strong> He/She is a ______.
            </p>
          </div>
        </section>

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
            <p>1. My ______ is a teacher.</p>
            <p>2. I have two ______.</p>
            <p>3. My ______ live in Istanbul.</p>
            <p>4. She is my best ______.</p>
            <p>5. My brother is very ______.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>I have a small family.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have one brother.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I have two sisters.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Who do you live with?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>This is my mother.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>She is my best friend.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>He is a good friend of mine.</strong>
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
            ← Daily Routines
          </Link>

          <Link
            href="/resources/listening-speaking/a1/food-drinks"
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
            Next: Food & Drinks →
          </Link>
        </div>
      </div>
    </main>
  );
}