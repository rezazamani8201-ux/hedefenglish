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

export default function ReviewCommunicationPage() {
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
            Review & Communication
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Review the key A2 grammar and communication skills and practice
            using them together in everyday English.
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
            <li>Review the most important A2 grammar structures.</li>
            <li>Use grammar naturally in everyday situations.</li>
            <li>Review useful vocabulary and expressions.</li>
            <li>Build longer and clearer sentences.</li>
            <li>Practice asking and answering questions.</li>
            <li>Communicate with more confidence.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Present Simple & Past Simple
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Present Simple:</strong> I work in a school.
            </p>
            <p>
              <strong>Present Simple:</strong> She lives in Istanbul.
            </p>
            <p>
              <strong>Past Simple:</strong> I visited Istanbul last year.
            </p>
            <p>
              <strong>Past Simple:</strong> She worked yesterday.
            </p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Remember:</strong>
            <p style={{ marginBottom: 0 }}>
              Use the Present Simple for routines, habits, and facts.
            </p>
            <p style={{ marginBottom: 0 }}>
              Use the Past Simple for completed actions in the past.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Present Continuous
          </h2>

          <div style={boxStyle}>
            <p>I am studying English now.</p>
            <p>She is watching TV.</p>
            <p>They are having dinner.</p>
            <p>We are working on a new project.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use the Present Continuous for actions happening now or around the
            present time.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Future Plans
          </h2>

          <div style={boxStyle}>
            <p>I&apos;m going to visit my family tomorrow.</p>
            <p>She&apos;s going to start a new course.</p>
            <p>We&apos;re meeting our friends tonight.</p>
            <p>They&apos;re traveling next week.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Comparatives & Superlatives
          </h2>

          <div style={boxStyle}>
            <p>My car is faster than yours.</p>
            <p>This book is more interesting than that one.</p>
            <p>She is the tallest student in the class.</p>
            <p>This is the most expensive restaurant here.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Countable & Uncountable Nouns
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Countable:</strong> one apple, two apples, three books
            </p>
            <p>
              <strong>Uncountable:</strong> water, rice, money, information
            </p>
          </div>

          <div style={boxStyle}>
            <p>I have some apples.</p>
            <p>We need some water.</p>
            <p>There aren&apos;t many people here.</p>
            <p>There isn&apos;t much time.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Present Perfect
          </h2>

          <div style={boxStyle}>
            <p>I have visited London.</p>
            <p>She has finished her homework.</p>
            <p>We have never tried sushi.</p>
            <p>Have you ever been to Italy?</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            The Present Perfect connects past experiences or actions with the
            present.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Modal Verbs
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>can:</strong> I can swim.
            </p>
            <p>
              <strong>should:</strong> You should get some rest.
            </p>
            <p>
              <strong>must:</strong> You must wear a seat belt.
            </p>
            <p>
              <strong>have to:</strong> I have to work tomorrow.
            </p>
            <p>
              <strong>might:</strong> It might rain later.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Making Suggestions
          </h2>

          <div style={boxStyle}>
            <p>Let&apos;s go to the cinema.</p>
            <p>Why don&apos;t we have lunch?</p>
            <p>How about going for a walk?</p>
            <p>We could visit the museum.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Giving Opinions
          </h2>

          <div style={boxStyle}>
            <p>I think this restaurant is excellent.</p>
            <p>In my opinion, the city is beautiful.</p>
            <p>I agree with you.</p>
            <p>I don&apos;t agree.</p>
            <p>I&apos;m not sure about that.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Describing People & Places
          </h2>

          <div style={boxStyle}>
            <p>She is tall and friendly.</p>
            <p>He has short black hair.</p>
            <p>The city is busy and crowded.</p>
            <p>The hotel is modern and comfortable.</p>
            <p>The park is next to the library.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Everyday Communication
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Starting:</strong> Hi! How are you?
            </p>
            <p>
              <strong>Asking:</strong> Could you help me?
            </p>
            <p>
              <strong>Offering:</strong> Can I help you?
            </p>
            <p>
              <strong>Agreeing:</strong> I agree.
            </p>
            <p>
              <strong>Apologizing:</strong> I&apos;m sorry.
            </p>
            <p>
              <strong>Ending:</strong> See you soon!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Build a Complete Conversation
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
              <strong>B:</strong> I&apos;m going to visit my family.
            </p>
            <p>
              <strong>A:</strong> That sounds nice. Where do they live?
            </p>
            <p>
              <strong>B:</strong> They live in a small town near the coast.
            </p>
            <p>
              <strong>A:</strong> Have you been there recently?
            </p>
            <p>
              <strong>B:</strong> Yes, I visited them last month.
            </p>
            <p>
              <strong>A:</strong> Would you like to meet for coffee when you
              come back?
            </p>
            <p>
              <strong>B:</strong> Sure! That would be great.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes Review
          </h2>

          <div style={boxStyle}>
            <p>❌ I am agree.</p>
            <p>✅ I agree.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She has tall.</p>
            <p>✅ She is tall.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He have a car.</p>
            <p>✅ He has a car.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have went to London.</p>
            <p>✅ I have been to London.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Let's to go.</p>
            <p>✅ Let&apos;s go.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She is work every day.</p>
            <p>✅ She works every day.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am study now.</p>
            <p>✅ I am studying now.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Would you like come with us?</p>
            <p>✅ Would you like to come with us?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Final A2 Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the best answer.
          </p>

          <div style={boxStyle}>
            <p>
              1. She ______ to work every day.
              <br />
              (goes / is going)
            </p>

            <p>
              2. Look! The children ______ in the garden.
              <br />
              (play / are playing)
            </p>

            <p>
              3. I ______ my friend yesterday.
              <br />
              (visited / have visited)
            </p>

            <p>
              4. We ______ to Istanbul next weekend.
              <br />
              (are going / went)
            </p>

            <p>
              5. This book is ______ than that one.
              <br />
              (interesting / more interesting)
            </p>

            <p>
              6. There isn&apos;t ______ milk in the fridge.
              <br />
              (many / much)
            </p>

            <p>
              7. I ______ never been to Spain.
              <br />
              (have / am)
            </p>

            <p>
              8. You ______ see a doctor if you feel sick.
              <br />
              (should / can to)
            </p>

            <p>
              9. Why don&apos;t we ______ dinner together?
              <br />
              (have / to have)
            </p>

            <p>
              10. Which sentence is correct?
              <br />
              (I agree. / I am agree.)
            </p>

            <p>
              11. What does she ______ like?
              <br />
              (look / looks)
            </p>

            <p>
              12. Could you ______ that again, please?
              <br />
              (repeat / to repeat)
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
            <p>1. goes</p>
            <p>2. are playing</p>
            <p>3. visited</p>
            <p>4. are going</p>
            <p>5. more interesting</p>
            <p>6. much</p>
            <p>7. have</p>
            <p>8. should</p>
            <p>9. have</p>
            <p>10. I agree.</p>
            <p>11. look</p>
            <p>12. repeat</p>
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
            A2 Final Review
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#344054",
            }}
          >
            You have completed the A2 Grammar & Vocabulary section. You have
            reviewed essential grammar structures, useful vocabulary,
            communication patterns, and everyday English expressions.
          </p>

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>Present and Past Simple</li>
            <li>Present Continuous</li>
            <li>Future Plans</li>
            <li>Comparatives and Superlatives</li>
            <li>Countable and Uncountable Nouns</li>
            <li>Some, Any, Much and Many</li>
            <li>Present Perfect</li>
            <li>Modal Verbs</li>
            <li>Adverbs of Frequency</li>
            <li>Suggestions and Opinions</li>
            <li>Describing People and Places</li>
            <li>Everyday Communication</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Keep practicing and use English every day!
          </p>
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
            href="/resources/grammar/a2/everyday-conversations"
            style={buttonStyle}
          >
            ← Everyday Conversations
          </Link>

          <Link
            href="/resources/grammar/a2"
            style={buttonStyle}
          >
            A2 Grammar ✓
          </Link>
        </div>
      </div>
    </main>
  );
}