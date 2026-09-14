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
          href="/resources/grammar/a2"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← A2 Grammar
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
            GRAMMAR & VOCABULARY — A2
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
            Learn useful expressions and sentence patterns for common
            everyday conversations in English.
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
            <li>Start and end everyday conversations.</li>
            <li>Ask and answer common questions.</li>
            <li>Make polite requests.</li>
            <li>Offer help and respond to offers.</li>
            <li>Talk about plans and daily activities.</li>
            <li>Express simple feelings and opinions.</li>
            <li>Keep a conversation going naturally.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Starting a Conversation
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use simple greetings and questions to start a conversation.
          </p>

          <div style={boxStyle}>
            <p>Hi! How are you?</p>
            <p>How&apos;s your day going?</p>
            <p>How have you been?</p>
            <p>What are you doing?</p>
            <p>What are you up to?</p>
            <p>How was your weekend?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Hi! How are you?
            </p>
            <p>
              <strong>B:</strong> I&apos;m good, thanks. How about you?
            </p>
            <p>
              <strong>A:</strong> I&apos;m great. What are you up to?
            </p>
            <p>
              <strong>B:</strong> I&apos;m going to the gym.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Keeping a Conversation Going
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Short follow-up questions help you continue a conversation.
          </p>

          <div style={boxStyle}>
            <p>Really?</p>
            <p>That&apos;s interesting!</p>
            <p>What about you?</p>
            <p>How about you?</p>
            <p>Why?</p>
            <p>When?</p>
            <p>Where?</p>
            <p>Who with?</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Example:</strong>
            <p style={{ marginBottom: 0 }}>
              I&apos;m going to Istanbul this weekend.{" "}
              <strong>What about you?</strong>
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking for Information
          </h2>

          <div style={boxStyle}>
            <p>What time does the store open?</p>
            <p>Where is the nearest bank?</p>
            <p>How much is this?</p>
            <p>What does this word mean?</p>
            <p>How can I get there?</p>
            <p>When does the bus leave?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Polite Questions</h3>

          <div style={boxStyle}>
            <p>Could you help me?</p>
            <p>Could you tell me the way?</p>
            <p>Can you tell me what time it is?</p>
            <p>Do you know where the station is?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Making Requests
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>Can</strong>, <strong>Could</strong>, and{" "}
            <strong>Would you mind</strong> to make requests.
          </p>

          <div style={boxStyle}>
            <p>Can you open the window?</p>
            <p>Can you help me with this?</p>
            <p>Could you speak more slowly?</p>
            <p>Could you repeat that, please?</p>
            <p>Would you mind waiting here?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Useful Responses</h3>

          <div style={boxStyle}>
            <p>Sure!</p>
            <p>Of course.</p>
            <p>No problem.</p>
            <p>Absolutely.</p>
            <p>Sorry, I can&apos;t.</p>
            <p>I&apos;m afraid I can&apos;t.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Offering Help
          </h2>

          <div style={boxStyle}>
            <p>Can I help you?</p>
            <p>Can I help with that?</p>
            <p>Do you need any help?</p>
            <p>Would you like some help?</p>
            <p>Let me help you.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Accepting Help</h3>

          <div style={boxStyle}>
            <p>Yes, please.</p>
            <p>That would be great.</p>
            <p>Thanks, I appreciate it.</p>
            <p>Thank you. That&apos;s very kind of you.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Refusing Politely</h3>

          <div style={boxStyle}>
            <p>No, thanks. I&apos;m fine.</p>
            <p>Thanks, but I can manage.</p>
            <p>That&apos;s okay, thanks.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Talking About Plans
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>be going to</strong> and the{" "}
            <strong>present continuous</strong> to talk about future plans.
          </p>

          <div style={boxStyle}>
            <p>I&apos;m going to visit my family tomorrow.</p>
            <p>She&apos;s going to study tonight.</p>
            <p>We&apos;re meeting our friends on Saturday.</p>
            <p>They&apos;re having dinner at 8 p.m.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Asking About Plans</h3>

          <div style={boxStyle}>
            <p>What are you doing tonight?</p>
            <p>What are you doing this weekend?</p>
            <p>Are you doing anything tomorrow?</p>
            <p>Do you have any plans for Friday?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Talking About Feelings
          </h2>

          <div style={boxStyle}>
            <p>I&apos;m happy.</p>
            <p>I&apos;m tired.</p>
            <p>I&apos;m worried.</p>
            <p>I&apos;m excited.</p>
            <p>I&apos;m a little nervous.</p>
            <p>I&apos;m not feeling very well.</p>
            <p>I feel great today.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Asking About Feelings</h3>

          <div style={boxStyle}>
            <p>How are you feeling?</p>
            <p>Are you okay?</p>
            <p>What&apos;s wrong?</p>
            <p>How do you feel about it?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Agreeing and Disagreeing
          </h2>

          <div style={boxStyle}>
            <p>I agree.</p>
            <p>Exactly.</p>
            <p>You&apos;re right.</p>
            <p>I think so too.</p>
            <p>I&apos;m not sure.</p>
            <p>I don&apos;t agree.</p>
            <p>I see your point, but I think differently.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <p>
              <strong>Example:</strong>
            </p>
            <p>
              <strong>A:</strong> I think this restaurant is excellent.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>B:</strong> I agree. The food is really good.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Apologizing and Responding
          </h2>

          <div style={boxStyle}>
            <p>Sorry I&apos;m late.</p>
            <p>I&apos;m sorry.</p>
            <p>Sorry about that.</p>
            <p>Excuse me.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Responses</h3>

          <div style={boxStyle}>
            <p>That&apos;s okay.</p>
            <p>No problem.</p>
            <p>Don&apos;t worry about it.</p>
            <p>That&apos;s all right.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Ending a Conversation
          </h2>

          <div style={boxStyle}>
            <p>It was nice talking to you.</p>
            <p>Nice talking to you.</p>
            <p>See you later.</p>
            <p>See you soon.</p>
            <p>Have a nice day!</p>
            <p>Take care!</p>
            <p>Have a good weekend!</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> I have to go now.
            </p>
            <p>
              <strong>B:</strong> Sure. It was nice talking to you.
            </p>
            <p>
              <strong>A:</strong> You too. See you soon!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Useful Conversation Patterns
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>How about + noun / -ing?</strong>
            </p>
            <p>How about coffee?</p>
            <p>How about going for a walk?</p>

            <p style={{ marginTop: "20px" }}>
              <strong>Would you like + noun / to + verb?</strong>
            </p>
            <p>Would you like some tea?</p>
            <p>Would you like to come with us?</p>

            <p style={{ marginTop: "20px" }}>
              <strong>Why don&apos;t we + verb?</strong>
            </p>
            <p>Why don&apos;t we go to the cinema?</p>

            <p style={{ marginTop: "20px" }}>
              <strong>Let&apos;s + verb</strong>
            </p>
            <p>Let&apos;s have lunch.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Complete Conversation
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Hi! How are you?
            </p>
            <p>
              <strong>B:</strong> I&apos;m good, thanks. How about you?
            </p>
            <p>
              <strong>A:</strong> I&apos;m great. What are you doing this
              weekend?
            </p>
            <p>
              <strong>B:</strong> I&apos;m going to visit my sister.
            </p>
            <p>
              <strong>A:</strong> Really? Where does she live?
            </p>
            <p>
              <strong>B:</strong> She lives near the city center.
            </p>
            <p>
              <strong>A:</strong> That sounds nice.
            </p>
            <p>
              <strong>B:</strong> Yes. Would you like to come with me?
            </p>
            <p>
              <strong>A:</strong> Sure! That would be great.
            </p>
          </div>
        </section>

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
            <p>❌ Can you to help me?</p>
            <p>✅ Can you help me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am agree.</p>
            <p>✅ I agree.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Would you like come with us?</p>
            <p>✅ Would you like to come with us?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Let's to go.</p>
            <p>✅ Let&apos;s go.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Why don&apos;t we to go?</p>
            <p>✅ Why don&apos;t we go?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the best answer.
          </p>

          <div style={boxStyle}>
            <p>
              1. How ______ you?
              <br />
              (are / do)
            </p>

            <p>
              2. What ______ you doing tonight?
              <br />
              (are / do)
            </p>

            <p>
              3. ______ you help me, please?
              <br />
              (Can / Do)
            </p>

            <p>
              4. Would you like ______ come with us?
              <br />
              (to / for)
            </p>

            <p>
              5. Let&apos;s ______ lunch.
              <br />
              (have / to have)
            </p>

            <p>
              6. Why don&apos;t we ______ to the park?
              <br />
              (go / to go)
            </p>

            <p>
              7. Which expression is used to offer help?
              <br />
              (Can I help you? / What time is it?)
            </p>

            <p>
              8. Which expression is used to end a conversation?
              <br />
              (See you soon. / What are you doing?)
            </p>

            <p>
              9. Which response is polite after someone says “Sorry”?
              <br />
              (That&apos;s okay. / What?)
            </p>

            <p>
              10. Which sentence is correct?
              <br />
              (I agree. / I am agree.)
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
            <p>3. Can</p>
            <p>4. to</p>
            <p>5. have</p>
            <p>6. go</p>
            <p>7. Can I help you?</p>
            <p>8. See you soon.</p>
            <p>9. That&apos;s okay.</p>
            <p>10. I agree.</p>
          </div>
        </section>

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "30px",
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
            <li>Use simple greetings to start conversations.</li>
            <li>Use follow-up questions to keep conversations going.</li>
            <li>Use Can and Could for polite requests.</li>
            <li>Use common expressions to offer and accept help.</li>
            <li>Use be going to and present continuous for plans.</li>
            <li>Use simple adjectives to describe feelings.</li>
            <li>Use I agree and I don&apos;t agree to express opinions.</li>
            <li>Use polite expressions when apologizing.</li>
            <li>Use See you soon and Have a nice day to end conversations.</li>
            <li>Remember: after Let&apos;s, use the base form of the verb.</li>
          </ul>
        </section>

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
            href="/resources/grammar/a2/describing-people-places"
            style={buttonStyle}
          >
            ← Describing People & Places
          </Link>

          <Link
            href="/resources/grammar/a2/review-communication"
            style={buttonStyle}
          >
            Next: Review & Communication →
          </Link>
        </div>
      </div>
    </main>
  );
}