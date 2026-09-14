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
            Practice natural English conversations for everyday situations,
            including meeting people, making plans, asking questions, solving
            simple problems, and keeping a conversation going.
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
            <li>Start and end everyday conversations naturally.</li>
            <li>Ask and answer common questions.</li>
            <li>Talk about your daily life and plans.</li>
            <li>Show interest in what another person says.</li>
            <li>Ask follow-up questions.</li>
            <li>Keep a conversation going with simple expressions.</li>
          </ul>
        </section>

        {/* Key Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Expressions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["How are you?", "A common way to ask about someone's condition."],
              ["How's it going?", "A friendly way to ask how someone is doing."],
              ["What have you been up to?", "Ask about someone's recent activities."],
              ["How about you?", "Return the same question to another person."],
              ["Really?", "Show interest or surprise."],
              ["That's interesting.", "Show interest in what someone says."],
              ["Sounds good.", "Show that you like an idea or plan."],
              ["See you later.", "A friendly way to say goodbye."],
            ].map(([expression, meaning]) => (
              <div
                key={expression}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  {expression}
                </strong>

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

        {/* Starting a Conversation */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Starting a Conversation
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            You can start a conversation with a simple greeting or a question.
          </p>

          <div style={boxStyle}>
            <p>Hi! How are you?</p>
            <p>Hi! How&apos;s it going?</p>
            <p>Good morning. How are you doing?</p>
            <p>Hey! What are you doing here?</p>
            <p>How has your day been?</p>
            <p>What have you been up to?</p>
          </div>
        </section>

        {/* Listening Practice 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Meeting a Friend
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Emma:</strong> Hi, Daniel! How are you?
            </p>

            <p>
              <strong>Daniel:</strong> I&apos;m good, thanks. How about you?
            </p>

            <p>
              <strong>Emma:</strong> I&apos;m great. What have you been up to?
            </p>

            <p>
              <strong>Daniel:</strong> I&apos;ve been pretty busy with work.
            </p>

            <p>
              <strong>Emma:</strong> Really? What are you working on?
            </p>

            <p>
              <strong>Daniel:</strong> A new project for our company.
            </p>

            <p>
              <strong>Emma:</strong> That sounds interesting.
            </p>

            <p>
              <strong>Daniel:</strong> It is. What about you?
            </p>

            <p>
              <strong>Emma:</strong> I&apos;ve started a photography course.
            </p>

            <p>
              <strong>Daniel:</strong> Nice! Are you enjoying it?
            </p>

            <p>
              <strong>Emma:</strong> Yes, I really am.
            </p>
          </div>
        </section>

        {/* Listening Questions 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. How is Daniel?</p>
            <p>2. What has he been busy with?</p>
            <p>3. What is he working on?</p>
            <p>4. What has Emma started?</p>
            <p>5. Does Emma enjoy the course?</p>
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
            <p>1. He is good.</p>
            <p>2. He has been busy with work.</p>
            <p>3. He is working on a new company project.</p>
            <p>4. She has started a photography course.</p>
            <p>5. Yes, she does.</p>
          </div>
        </section>

        {/* Asking Follow-up Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking Follow-up Questions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Follow-up questions show that you are interested and help keep the
            conversation going.
          </p>

          <div style={boxStyle}>
            <p>Really? Why?</p>
            <p>What happened?</p>
            <p>How was it?</p>
            <p>Where did you go?</p>
            <p>Who did you go with?</p>
            <p>How long did you stay?</p>
            <p>Did you enjoy it?</p>
            <p>What happened next?</p>
          </div>
        </section>

        {/* Keeping a Conversation Going */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Keeping a Conversation Going
          </h2>

          <div style={boxStyle}>
            <p>That&apos;s interesting.</p>
            <p>Really?</p>
            <p>Oh, nice!</p>
            <p>That sounds great.</p>
            <p>Tell me more about it.</p>
            <p>What about you?</p>
            <p>How about you?</p>
            <p>And then what happened?</p>
          </div>
        </section>

        {/* Listening Practice 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Weekend Plans
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Tom:</strong> Are you doing anything this weekend?
            </p>

            <p>
              <strong>Lisa:</strong> Yes. I&apos;m going to visit my sister.
            </p>

            <p>
              <strong>Tom:</strong> Oh, nice! Where does she live?
            </p>

            <p>
              <strong>Lisa:</strong> She lives near the coast.
            </p>

            <p>
              <strong>Tom:</strong> That sounds great. Are you staying there
              for the weekend?
            </p>

            <p>
              <strong>Lisa:</strong> Yes, probably until Sunday evening.
            </p>

            <p>
              <strong>Tom:</strong> Are you planning to do anything special?
            </p>

            <p>
              <strong>Lisa:</strong> We might go to the beach if the weather
              is good.
            </p>

            <p>
              <strong>Tom:</strong> I hope you have a great time!
            </p>

            <p>
              <strong>Lisa:</strong> Thanks!
            </p>
          </div>
        </section>

        {/* Listening Questions 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What is Lisa doing this weekend?</p>
            <p>2. Where does her sister live?</p>
            <p>3. How long is Lisa staying?</p>
            <p>4. What might they do?</p>
            <p>5. What does Tom say at the end?</p>
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
            <p>1. She is visiting her sister.</p>
            <p>2. Her sister lives near the coast.</p>
            <p>3. Until Sunday evening.</p>
            <p>4. They might go to the beach.</p>
            <p>5. He hopes she has a great time.</p>
          </div>
        </section>

        {/* Everyday Topics */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Everyday Conversation Topics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              "Work and school",
              "Family and friends",
              "Weekend plans",
              "Hobbies",
              "Food and restaurants",
              "Travel",
              "Weather",
              "Shopping",
              "Movies and music",
              "Daily routines",
              "Sports",
              "Future plans",
            ].map((topic) => (
              <div
                key={topic}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "15px 18px",
                  color: "#344054",
                  fontWeight: 600,
                }}
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        {/* Useful Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: Question Forms
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Asking questions correctly helps you have longer and more natural
            conversations.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Present Simple:</strong> What do you do?
            </p>

            <p>
              <strong>Past Simple:</strong> What did you do yesterday?
            </p>

            <p>
              <strong>Present Continuous:</strong> What are you doing?
            </p>

            <p>
              <strong>Present Perfect:</strong> What have you been doing?
            </p>

            <p>
              <strong>Future:</strong> What are you going to do tomorrow?
            </p>
          </div>
        </section>

        {/* Conversation Strategies */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Conversation Strategies
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>1. Ask a question.</strong>
            </p>
            <p>How was your weekend?</p>

            <p>
              <strong>2. Listen to the answer.</strong>
            </p>
            <p>Show interest in what the other person says.</p>

            <p>
              <strong>3. Ask a follow-up question.</strong>
            </p>
            <p>Where did you go?</p>

            <p>
              <strong>4. Share something about yourself.</strong>
            </p>
            <p>I went to the beach too.</p>

            <p>
              <strong>5. Continue the conversation.</strong>
            </p>
            <p>What are you planning to do next weekend?</p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Practice these conversations with a partner or answer aloud.
          </p>

          <div style={boxStyle}>
            <p>1. Ask a friend about their weekend.</p>
            <p>2. Talk about what you did yesterday.</p>
            <p>3. Ask someone about their hobbies.</p>
            <p>4. Talk about your plans for next week.</p>
            <p>5. Ask a friend about their favorite restaurant.</p>
            <p>6. Talk about a movie you recently watched.</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Hey! How&apos;s it going?
            </p>

            <p>
              <strong>B:</strong> Pretty good, thanks. How about you?
            </p>

            <p>
              <strong>A:</strong> I&apos;m good. What did you do last weekend?
            </p>

            <p>
              <strong>B:</strong> I went to the beach with some friends.
            </p>

            <p>
              <strong>A:</strong> Really? How was it?
            </p>

            <p>
              <strong>B:</strong> It was great. The weather was beautiful.
            </p>

            <p>
              <strong>A:</strong> Nice! Are you doing anything this weekend?
            </p>

            <p>
              <strong>B:</strong> I&apos;m going to visit my parents.
            </p>
          </div>
        </section>

        {/* Role Play 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Meeting an Old Friend
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You meet an old friend after several
              months.
            </p>

            <p>
              <strong>Student B:</strong> You are the friend.
            </p>

            <p>Talk about:</p>

            <p>• work or school</p>
            <p>• family</p>
            <p>• recent activities</p>
            <p>• hobbies</p>
            <p>• future plans</p>

            <p>
              Ask follow-up questions and show interest in each other&apos;s
              answers.
            </p>
          </div>
        </section>

        {/* Role Play 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Small Talk
          </h2>

          <div style={boxStyle}>
            <p>
              Imagine you are waiting for a class, bus, or appointment.
            </p>

            <p>Start a short conversation with another person.</p>

            <p>Talk about:</p>

            <p>• the weather</p>
            <p>• your day</p>
            <p>• your plans</p>
            <p>• a hobby</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. How ______ you?
              <br />
              <strong>(are / do)</strong>
            </p>

            <p>
              2. What ______ you doing?
              <br />
              <strong>(are / do)</strong>
            </p>

            <p>
              3. What ______ you do yesterday?
              <br />
              <strong>(did / do)</strong>
            </p>

            <p>
              4. How ______ you been?
              <br />
              <strong>(have / are)</strong>
            </p>

            <p>
              5. What ______ you been up to?
              <br />
              <strong>(have / did)</strong>
            </p>

            <p>
              6. How about ______?
              <br />
              <strong>(you / your)</strong>
            </p>

            <p>
              7. That ______ interesting.
              <br />
              <strong>(sounds / sound)</strong>
            </p>

            <p>
              8. Tell me more ______ it.
              <br />
              <strong>(about / for)</strong>
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
            <p>1. are</p>
            <p>2. are</p>
            <p>3. did</p>
            <p>4. have</p>
            <p>5. have</p>
            <p>6. you</p>
            <p>7. sounds</p>
            <p>8. about</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ How you are?</p>
            <p>✅ How are you?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What you are doing?</p>
            <p>✅ What are you doing?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What did you did yesterday?</p>
            <p>✅ What did you do yesterday?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Tell me more for it.</p>
            <p>✅ Tell me more about it.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How about your?</p>
            <p>✅ How about you?</p>
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
            <li>Start conversations with friendly questions.</li>
            <li>Use follow-up questions to show interest.</li>
            <li>Use “How about you?” to return a question.</li>
            <li>Use “Really?” and “That’s interesting” naturally.</li>
            <li>Share information about yourself too.</li>
            <li>Use different question forms for different situations.</li>
            <li>Keep the conversation balanced between speaking and listening.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Good everyday conversations are about asking, listening, responding,
            and showing genuine interest.
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
            href="/resources/listening-speaking/a2/problems-requests"
            style={buttonStyle}
          >
            ← Problems & Requests
          </Link>

          <Link
            href="/resources/listening-speaking/a2/communication-review"
            style={buttonStyle}
          >
            Next: A2 Communication Review →
          </Link>
        </div>
      </div>
    </main>
  );
}