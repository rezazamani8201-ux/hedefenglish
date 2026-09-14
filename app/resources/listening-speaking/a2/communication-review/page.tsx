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

export default function CommunicationReviewPage() {
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
            A2 Communication Review
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Review the key listening and speaking skills from A2. Practice
            everyday conversations, express opinions, make plans, ask for
            information, solve simple problems, and communicate with more
            confidence.
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
            <li>Understand common everyday conversations.</li>
            <li>Talk about past experiences and future plans.</li>
            <li>Ask for information and make polite requests.</li>
            <li>Express opinions and preferences.</li>
            <li>Make suggestions and respond to suggestions.</li>
            <li>Describe people, places, and situations.</li>
            <li>Handle simple problems in everyday situations.</li>
          </ul>
        </section>

        {/* Communication Skills */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            A2 Communication Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["Experiences", "Talk about things you have done and experienced."],
              ["Future Plans", "Talk about plans, arrangements, and intentions."],
              ["Travel", "Communicate at airports, hotels, and other travel situations."],
              ["Shopping", "Ask about products, prices, sizes, and services."],
              ["Health", "Explain simple health problems and ask for advice."],
              ["Food", "Order food, ask questions, and talk about preferences."],
              ["Opinions", "Express opinions and agree or disagree politely."],
              ["Suggestions", "Suggest ideas and respond to other people's ideas."],
              ["Problems", "Explain problems and ask for help."],
              ["Descriptions", "Describe people, places, and everyday situations."],
              ["Conversations", "Start, continue, and finish everyday conversations."],
              ["Requests", "Make polite requests using common expressions."],
            ].map(([title, description]) => (
              <div
                key={title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "18px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{title}</strong>

                <p
                  style={{
                    margin: "8px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Essential Communication Expressions
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Asking for information:</strong> Could you tell me...?
            </p>
            <p>
              <strong>Making a request:</strong> Could you help me?
            </p>
            <p>
              <strong>Giving an opinion:</strong> I think...
            </p>
            <p>
              <strong>Giving a preference:</strong> I&apos;d rather...
            </p>
            <p>
              <strong>Making a suggestion:</strong> Why don&apos;t we...?
            </p>
            <p>
              <strong>Agreeing:</strong> I agree.
            </p>
            <p>
              <strong>Disagreeing politely:</strong> I&apos;m not sure I agree.
            </p>
            <p>
              <strong>Showing interest:</strong> Really? That&apos;s
              interesting.
            </p>
            <p>
              <strong>Clarifying:</strong> What do you mean?
            </p>
            <p>
              <strong>Responding:</strong> That sounds good.
            </p>
          </div>
        </section>

        {/* Listening Review 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Review: Making Plans
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Anna:</strong> Are you free this Saturday?
            </p>

            <p>
              <strong>Mike:</strong> I think so. Why?
            </p>

            <p>
              <strong>Anna:</strong> I&apos;m planning to go to the city center.
              Do you want to come?
            </p>

            <p>
              <strong>Mike:</strong> Sure. What are you going to do there?
            </p>

            <p>
              <strong>Anna:</strong> I want to buy a new jacket and have lunch.
            </p>

            <p>
              <strong>Mike:</strong> Sounds good. What time should we meet?
            </p>

            <p>
              <strong>Anna:</strong> How about eleven?
            </p>

            <p>
              <strong>Mike:</strong> Eleven is perfect.
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>1. When are Anna and Mike meeting?</p>
            <p>2. Where are they going?</p>
            <p>3. What does Anna want to buy?</p>
            <p>4. What else does she want to do?</p>
            <p>5. What time will they meet?</p>
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
            <p>1. They are meeting on Saturday.</p>
            <p>2. They are going to the city center.</p>
            <p>3. She wants to buy a new jacket.</p>
            <p>4. She wants to have lunch.</p>
            <p>5. They will meet at eleven.</p>
          </div>
        </section>

        {/* Listening Review 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Review: Solving a Problem
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me. There&apos;s a problem with
              my order.
            </p>

            <p>
              <strong>Staff:</strong> I&apos;m sorry to hear that. What&apos;s
              the problem?
            </p>

            <p>
              <strong>Customer:</strong> I ordered a large coffee, but I got a
              small one.
            </p>

            <p>
              <strong>Staff:</strong> I&apos;m sorry about that. I&apos;ll get
              you a large coffee.
            </p>

            <p>
              <strong>Customer:</strong> Thank you.
            </p>

            <p>
              <strong>Staff:</strong> You&apos;re welcome.
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>1. What problem does the customer have?</p>
            <p>2. What did the customer order?</p>
            <p>3. What did the customer receive?</p>
            <p>4. What does the staff offer to do?</p>
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
            <p>1. There is a problem with the order.</p>
            <p>2. The customer ordered a large coffee.</p>
            <p>3. The customer received a small coffee.</p>
            <p>4. The staff offers to get a large coffee.</p>
          </div>
        </section>

        {/* Speaking Review */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Review
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Speak for one or two minutes about each topic. Try to ask yourself
            follow-up questions.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>1. Experiences:</strong> Talk about a place you have
              visited.
            </p>

            <p>
              <strong>2. Plans:</strong> Talk about what you are going to do
              next weekend.
            </p>

            <p>
              <strong>3. Travel:</strong> Describe your ideal holiday.
            </p>

            <p>
              <strong>4. Shopping:</strong> Describe something you want to buy.
            </p>

            <p>
              <strong>5. Health:</strong> Give advice to someone who feels
              tired.
            </p>

            <p>
              <strong>6. Food:</strong> Describe your favorite restaurant.
            </p>

            <p>
              <strong>7. Opinions:</strong> Give your opinion about learning
              English online.
            </p>

            <p>
              <strong>8. Suggestions:</strong> Suggest an activity for the
              weekend.
            </p>

            <p>
              <strong>9. Problems:</strong> Explain a problem with a product.
            </p>

            <p>
              <strong>10. Descriptions:</strong> Describe your neighborhood.
            </p>
          </div>
        </section>

        {/* Conversation Challenge */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Conversation Challenge
          </h2>

          <div style={boxStyle}>
            <p>
              Imagine you meet a new person at a café.
            </p>

            <p>Start a conversation and talk about:</p>

            <p>• where you are from</p>
            <p>• work or studies</p>
            <p>• hobbies</p>
            <p>• food and drinks</p>
            <p>• weekend plans</p>

            <p>
              Ask at least three questions and use at least two follow-up
              questions.
            </p>
          </div>
        </section>

        {/* Final Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Final A2 Communication Practice
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>1.</strong> Complete: How ______ you been?
            </p>

            <p>
              <strong>2.</strong> Complete: What are you ______ to do tomorrow?
            </p>

            <p>
              <strong>3.</strong> Choose: Could / Must you help me, please?
            </p>

            <p>
              <strong>4.</strong> Complete: I ______ that&apos;s a good idea.
            </p>

            <p>
              <strong>5.</strong> Complete: Why don&apos;t we ______ a movie?
            </p>

            <p>
              <strong>6.</strong> Choose: There is / There are a problem.
            </p>

            <p>
              <strong>7.</strong> Complete: How ______ you?
            </p>

            <p>
              <strong>8.</strong> Complete: I&apos;d ______ to have a coffee.
            </p>

            <p>
              <strong>9.</strong> Complete: Tell me more ______ it.
            </p>

            <p>
              <strong>10.</strong> Choose: Did / Have you ever visited London?
            </p>

            <p>
              <strong>11.</strong> Complete: What ______ you doing right now?
            </p>

            <p>
              <strong>12.</strong> Complete: I&apos;m not sure I ______.
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
            <p>1. have</p>
            <p>2. going</p>
            <p>3. Could</p>
            <p>4. think</p>
            <p>5. watch</p>
            <p>6. There is</p>
            <p>7. about</p>
            <p>8. like</p>
            <p>9. about</p>
            <p>10. Have</p>
            <p>11. are</p>
            <p>12. agree</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Communication Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ What you are going to do?</p>
            <p>✅ What are you going to do?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Could you to help me?</p>
            <p>✅ Could you help me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Why don&apos;t we going?</p>
            <p>✅ Why don&apos;t we go?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am agree.</p>
            <p>✅ I agree.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ There are a problem.</p>
            <p>✅ There is a problem.</p>
          </div>
        </section>

        {/* Final Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            A2 Communication Checklist
          </h2>

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>I can talk about my past experiences.</li>
            <li>I can talk about future plans.</li>
            <li>I can communicate while traveling.</li>
            <li>I can shop and ask for services.</li>
            <li>I can talk about simple health problems.</li>
            <li>I can order food and talk about preferences.</li>
            <li>I can express opinions and preferences.</li>
            <li>I can make and respond to suggestions.</li>
            <li>I can explain simple problems and ask for help.</li>
            <li>I can describe people and places.</li>
            <li>I can start and continue everyday conversations.</li>
            <li>I can make polite requests.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
              lineHeight: 1.7,
            }}
          >
            Great job! You have completed the A2 Listening & Speaking
            communication review. Keep practicing regularly and use English
            whenever you can.
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
            href="/resources/listening-speaking/a2/everyday-conversations"
            style={buttonStyle}
          >
            ← Everyday Conversations
          </Link>

          <Link
            href="/resources/listening-speaking/a2"
            style={buttonStyle}
          >
            A2 Listening & Speaking ✓
          </Link>
        </div>
      </div>
    </main>
  );
}