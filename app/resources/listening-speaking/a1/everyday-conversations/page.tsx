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

export default function EverydayConversationsPage() {
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
            Everyday Conversations
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Practice simple English conversations for everyday situations,
            from meeting people and making plans to asking for help.
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
            <li>Start and finish simple conversations.</li>
            <li>Ask and answer everyday questions.</li>
            <li>Make simple requests.</li>
            <li>Talk about plans and activities.</li>
            <li>Respond naturally in common situations.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Starting a Conversation
          </h2>

          <div style={phraseStyle}>
            <strong>Hi! How are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How are you doing?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How&apos;s your day?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Nice to see you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What&apos;s new?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How was your weekend?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are you doing today?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Making Small Talk
          </h2>

          <div style={phraseStyle}>
            <strong>How is your family?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you live?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like this place?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually do at the weekend?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are your hobbies?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have any plans for tomorrow?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Making Requests
          </h2>

          <div style={phraseStyle}>
            <strong>Can you help me, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have some water, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can you say that again?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can you speak more slowly?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Could you help me?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Excuse me, where is the bathroom?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Excuse me, can I ask you a question?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Agreeing and Responding
          </h2>

          <div style={phraseStyle}>
            <strong>Yes, of course.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Sure.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>That&apos;s a good idea.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Sounds good.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>That&apos;s great!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Really?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Me too.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I agree.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Making Plans
          </h2>

          <div style={phraseStyle}>
            <strong>What are you doing tonight?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Are you free tomorrow?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Would you like to go out?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you want to have coffee?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time shall we meet?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where shall we meet?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>See you tomorrow!</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Ending a Conversation
          </h2>

          <div style={phraseStyle}>
            <strong>It was nice talking to you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>See you later.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>See you soon.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Have a nice day!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Have a good evening!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Take care!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Goodbye!</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it between two friends.
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
              <strong>Sarah:</strong> Hi, Tom! How are you?
            </p>

            <p>
              <strong>Tom:</strong> Hi, Sarah! I&apos;m good, thanks. How are
              you?
            </p>

            <p>
              <strong>Sarah:</strong> I&apos;m great. What are you doing
              tonight?
            </p>

            <p>
              <strong>Tom:</strong> I&apos;m free tonight. Why?
            </p>

            <p>
              <strong>Sarah:</strong> Would you like to have dinner together?
            </p>

            <p>
              <strong>Tom:</strong> Sure! That sounds good.
            </p>

            <p>
              <strong>Sarah:</strong> What time shall we meet?
            </p>

            <p>
              <strong>Tom:</strong> How about seven o&apos;clock?
            </p>

            <p>
              <strong>Sarah:</strong> Seven is perfect.
            </p>

            <p>
              <strong>Tom:</strong> Great. See you tonight!
            </p>

            <p>
              <strong>Sarah:</strong> See you!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud.
          </p>

          <div style={phraseStyle}>
            <strong>How are you today?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are you doing tonight?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Are you free tomorrow?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually do at the weekend?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Would you like to go out this evening?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you usually meet your friends?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time do you usually go to bed?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you meet a friend and want to make plans for the
            evening.
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
              <strong>You:</strong> Hi! How are you?
            </p>

            <p>
              <strong>Friend:</strong> I&apos;m ______. How are you?
            </p>

            <p>
              <strong>You:</strong> What are you doing tonight?
            </p>

            <p>
              <strong>Friend:</strong> I&apos;m ______.
            </p>

            <p>
              <strong>You:</strong> Would you like to ______?
            </p>

            <p>
              <strong>Friend:</strong> Sure! That sounds ______.
            </p>

            <p>
              <strong>You:</strong> What time shall we meet?
            </p>

            <p>
              <strong>Friend:</strong> How about ______?
            </p>

            <p>
              <strong>You:</strong> Great. See you ______!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the conversations:
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
              1. A: How are you?
              <br />
              B: I&apos;m ______, thanks.
            </p>

            <p>
              2. A: Are you free tomorrow?
              <br />
              B: Yes, I ______.
            </p>

            <p>
              3. A: Would you like to have coffee?
              <br />
              B: ______, that sounds good.
            </p>

            <p>
              4. A: What time shall we meet?
              <br />
              B: How ______ seven?
            </p>

            <p>
              5. A: See you tomorrow!
              <br />
              B: ______!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>How are you?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are you doing?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Are you free tomorrow?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Would you like to go out?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>That sounds good.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can you help me, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can you say that again?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>See you later!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Have a nice day!</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Take care!</strong>
          </div>
        </section>

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "35px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "10px",
            }}
          >
            A1 Listening & Speaking Complete
          </h2>

          <p
            style={{
              color: "#667085",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            You have completed all 12 A1 Listening & Speaking lessons.
            Keep practicing and use these conversations in your everyday
            English.
          </p>

          <Link
            href="/resources/listening-speaking/a1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              borderRadius: "10px",
              background: "#173b78",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Back to A1 Listening & Speaking
          </Link>
        </section>

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
            href="/resources/listening-speaking/a1/weather-seasons"
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
            ← Weather & Seasons
          </Link>

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
            A1 Listening & Speaking ✓
          </Link>
        </div>
      </div>
    </main>
  );
}