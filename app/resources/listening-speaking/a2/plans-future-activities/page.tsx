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

export default function PlansFutureActivitiesPage() {
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
            Plans & Future Activities
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your future plans, arrangements, and
            activities and ask other people about what they are going to do.
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
            <li>Talk about your future plans and intentions.</li>
            <li>Ask people about their plans.</li>
            <li>Talk about future arrangements.</li>
            <li>Make plans with friends and family.</li>
            <li>Respond naturally to invitations and suggestions.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
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
              ["plan", "something you intend to do"],
              ["arrangement", "a plan made with another person"],
              ["appointment", "a planned meeting"],
              ["trip", "a journey to another place"],
              ["holiday", "a period when you travel or relax"],
              ["tonight", "this evening or night"],
              ["tomorrow", "the day after today"],
              ["next week", "the week after this week"],
              ["later", "at a time after now"],
              ["free", "available; not busy"],
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

        {/* Talking About Future */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About the Future
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use different structures to talk about future plans and
            activities.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>be going to + verb</strong>
            </p>

            <p>I&apos;m going to study tonight.</p>
            <p>She&apos;s going to visit her family tomorrow.</p>
            <p>We&apos;re going to travel next month.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Present Continuous for arrangements</strong>
            </p>

            <p>I&apos;m meeting Sarah tomorrow.</p>
            <p>We&apos;re having dinner at 8 p.m.</p>
            <p>He&apos;s flying to London next Friday.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginTop: "15px",
            }}
          >
            <strong style={{ color: "#173b78" }}>
              Remember:
            </strong>

            <p style={{ marginBottom: 0 }}>
              Use a time expression such as <strong>tomorrow</strong>,{" "}
              <strong>tonight</strong>, <strong>next week</strong>, or{" "}
              <strong>next month</strong> to make the future meaning clear.
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
            to two friends talking about their weekend plans.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Anna:</strong> What are you doing this weekend?
            </p>

            <p>
              <strong>Mark:</strong> I&apos;m going to visit my parents on
              Saturday.
            </p>

            <p>
              <strong>Anna:</strong> That sounds nice. What are you doing on
              Sunday?
            </p>

            <p>
              <strong>Mark:</strong> I&apos;m meeting some friends for lunch.
            </p>

            <p>
              <strong>Anna:</strong> Are you free in the evening?
            </p>

            <p>
              <strong>Mark:</strong> Yes, I am. Why?
            </p>

            <p>
              <strong>Anna:</strong> Would you like to watch a movie?
            </p>

            <p>
              <strong>Mark:</strong> Sure! That sounds great.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Who is Mark going to visit on Saturday?</p>
            <p>2. What is he doing on Sunday?</p>
            <p>3. Is he free on Sunday evening?</p>
            <p>4. What does Anna suggest?</p>
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
            <p>1. He is going to visit his parents.</p>
            <p>2. He is meeting some friends for lunch.</p>
            <p>3. Yes, he is.</p>
            <p>4. She suggests watching a movie.</p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>What are you doing this weekend?</strong>
            </p>
            <p>I&apos;m visiting my family.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>What are your plans?</strong>
            </p>
            <p>I&apos;m going to study for my exam.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Are you free tomorrow?</strong>
            </p>
            <p>Yes, I am. / No, I&apos;m not.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Would you like to...?</strong>
            </p>
            <p>Would you like to have coffee?</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Sounds great!</strong>
            </p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Sorry, I can&apos;t.</strong>
            </p>
            <p>I&apos;m busy that evening.</p>
          </div>
        </section>

        {/* Speaking */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Ask a partner these questions and give complete answers.
          </p>

          <div style={boxStyle}>
            <p>1. What are you doing tonight?</p>
            <p>2. What are you going to do tomorrow?</p>
            <p>3. What are your plans for the weekend?</p>
            <p>4. Are you doing anything special next week?</p>
            <p>5. Are you going to travel this year?</p>
            <p>6. Who are you meeting this week?</p>
            <p>7. What are you going to do on your next holiday?</p>
            <p>8. Are you free this evening?</p>
          </div>
        </section>

        {/* Making Plans */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Plans Together
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Are you free on Saturday afternoon?
            </p>

            <p>
              <strong>B:</strong> Yes, I am.
            </p>

            <p>
              <strong>A:</strong> Would you like to go shopping?
            </p>

            <p>
              <strong>B:</strong> Sure. What time?
            </p>

            <p>
              <strong>A:</strong> How about 3 p.m.?
            </p>

            <p>
              <strong>B:</strong> That sounds great.
            </p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            You and a friend want to make plans for the weekend. Discuss your
            schedules and decide what to do together.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> Suggest two different activities.
            </p>

            <p>
              <strong>Student B:</strong> Accept one suggestion and refuse
              another politely.
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
              Useful phrases:
            </strong>

            <p>Are you free on Saturday?</p>
            <p>How about going to the cinema?</p>
            <p>Would you like to have lunch together?</p>
            <p>That sounds great!</p>
            <p>I&apos;d love to, but I&apos;m busy.</p>
            <p>What time should we meet?</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. I&apos;m ______ visit my grandparents tomorrow.
              <br />
              <strong>(going to / go to)</strong>
            </p>

            <p>
              2. We&apos;re ______ dinner at 8 p.m.
              <br />
              <strong>(having / have)</strong>
            </p>

            <p>
              3. She is going ______ study tonight.
              <br />
              <strong>(to / at)</strong>
            </p>

            <p>
              4. ______ you free tomorrow evening?
              <br />
              <strong>(Are / Do)</strong>
            </p>

            <p>
              5. Would you like ______ a movie?
              <br />
              <strong>(to watch / watching)</strong>
            </p>

            <p>
              6. I&apos;m ______ my friend on Saturday.
              <br />
              <strong>(meeting / meet)</strong>
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
            <p>1. going to</p>
            <p>2. having</p>
            <p>3. to</p>
            <p>4. Are</p>
            <p>5. to watch</p>
            <p>6. meeting</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I am going visit my friend.</p>
            <p>✅ I am going to visit my friend.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I going to study tonight.</p>
            <p>✅ I am going to study tonight.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Would you like going to the cinema?</p>
            <p>✅ Would you like to go to the cinema?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am meet Sarah tomorrow.</p>
            <p>✅ I am meeting Sarah tomorrow.</p>
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
            <li>
              Use <strong>be going to</strong> to talk about plans and
              intentions.
            </li>
            <li>
              Use the <strong>Present Continuous</strong> for future
              arrangements.
            </li>
            <li>Ask “What are you doing?” to ask about future plans.</li>
            <li>Use “Would you like to...?” to make an invitation.</li>
            <li>Use “That sounds great!” to accept a suggestion.</li>
            <li>Use polite language when refusing an invitation.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Good communication means making plans, asking questions, and
            responding naturally.
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
            href="/resources/listening-speaking/a2/talking-about-experiences"
            style={buttonStyle}
          >
            ← Talking About Experiences
          </Link>

          <Link
            href="/resources/listening-speaking/a2/travel-holidays"
            style={buttonStyle}
          >
            Next: Travel & Holidays →
          </Link>
        </div>
      </div>
    </main>
  );
}