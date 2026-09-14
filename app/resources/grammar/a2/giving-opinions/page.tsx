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

export default function GivingOpinionsPage() {
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
            Giving Opinions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to express your opinions, ask what other people think,
            agree or disagree politely, and give simple reasons for your ideas.
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
            <li>Express your opinions clearly.</li>
            <li>Ask other people for their opinions.</li>
            <li>Agree with someone politely.</li>
            <li>Disagree politely.</li>
            <li>Give simple reasons for your opinions.</li>
            <li>Use opinion expressions in everyday conversations.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. “I Think...”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>I think...</strong> is one of the most common ways to give
            your opinion.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginBottom: "18px",
            }}
          >
            <strong>Structure:</strong>
            <p style={{ marginBottom: 0 }}>
              I think + sentence
            </p>
          </div>

          <div style={boxStyle}>
            <p>I think this restaurant is good.</p>
            <p>I think English is interesting.</p>
            <p>I think this book is useful.</p>
            <p>I think we should leave early.</p>
            <p>I think this is a good idea.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative Opinion</h3>

          <div style={boxStyle}>
            <p>I don&apos;t think this is a good idea.</p>
            <p>I don&apos;t think the movie is very good.</p>
            <p>I don&apos;t think we should go there.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Important:</strong>
            <p style={{ marginBottom: 0 }}>
              We normally say <strong>I don&apos;t think...</strong>, not
              <strong> I think not...</strong>.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. “In My Opinion...”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>In my opinion...</strong> is a clear and useful expression
            for giving your personal view.
          </p>

          <div style={boxStyle}>
            <p>In my opinion, this hotel is excellent.</p>
            <p>In my opinion, public transport is better.</p>
            <p>In my opinion, this phone is too expensive.</p>
            <p>In my opinion, learning English is important.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. “I Feel...”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use <strong>I feel...</strong> to express a personal feeling
            or view.
          </p>

          <div style={boxStyle}>
            <p>I feel this is the best choice.</p>
            <p>I feel that this movie is too long.</p>
            <p>I feel we need more time.</p>
            <p>I feel this plan is better.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. “For Me...”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>For me...</strong> can be used when you want to show that an
            opinion is personal.
          </p>

          <div style={boxStyle}>
            <p>For me, the most important thing is comfort.</p>
            <p>For me, this restaurant is too expensive.</p>
            <p>For me, Saturday is better.</p>
            <p>For me, English is easier than German.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Asking for Opinions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use these questions when you want to know what another person
            thinks.
          </p>

          <div style={boxStyle}>
            <p>What do you think?</p>
            <p>What do you think about this?</p>
            <p>What do you think of the movie?</p>
            <p>What&apos;s your opinion?</p>
            <p>How do you feel about it?</p>
            <p>Do you agree?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> What do you think about this restaurant?
            </p>
            <p>
              <strong>B:</strong> I think it&apos;s very good.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Agreeing with an Opinion
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When you have the same opinion, you can use these expressions.
          </p>

          <div style={boxStyle}>
            <p>I agree.</p>
            <p>I completely agree.</p>
            <p>I agree with you.</p>
            <p>That&apos;s true.</p>
            <p>Exactly.</p>
            <p>I think so too.</p>
            <p>That&apos;s a good point.</p>
            <p>You&apos;re right.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> I think this city is beautiful.
            </p>
            <p>
              <strong>B:</strong> I agree. It&apos;s really beautiful.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Disagreeing Politely
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            You can disagree without sounding rude.
          </p>

          <div style={boxStyle}>
            <p>I&apos;m not sure I agree.</p>
            <p>I don&apos;t really agree.</p>
            <p>I see your point, but...</p>
            <p>I understand, but I think...</p>
            <p>I&apos;m afraid I disagree.</p>
            <p>Maybe, but I think...</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> I think this phone is the best.
            </p>
            <p>
              <strong>B:</strong> I see your point, but I think the other one
              is better.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Giving Reasons
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            A good opinion often includes a reason. Use{" "}
            <strong>because</strong> to explain why you think something.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginBottom: "18px",
            }}
          >
            <strong>Structure:</strong>
            <p style={{ marginBottom: 0 }}>
              Opinion + because + reason
            </p>
          </div>

          <div style={boxStyle}>
            <p>I like this restaurant because the food is delicious.</p>
            <p>I think this hotel is good because it is clean.</p>
            <p>I prefer the train because it is faster.</p>
            <p>I like studying in the morning because it is quiet.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Strong and Soft Opinions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Sometimes we want to make our opinion stronger or softer.
          </p>

          <div
            style={{
              overflowX: "auto",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
              }}
            >
              <thead>
                <tr style={{ background: "#eef4ff" }}>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Expression
                  </th>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I think...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I think it&apos;s good.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I really think...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I really think it&apos;s useful.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I strongly believe...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I strongly believe this is important.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I&apos;m not sure...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I&apos;m not sure it&apos;s a good idea.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I guess...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    I guess it&apos;s okay.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Opinions About Everyday Topics
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Food:</strong> I think Italian food is delicious.
            </p>
            <p>
              <strong>Movies:</strong> In my opinion, comedy movies are more
              enjoyable.
            </p>
            <p>
              <strong>Travel:</strong> I think travelling by train is
              comfortable.
            </p>
            <p>
              <strong>Learning:</strong> I think speaking practice is very
              important.
            </p>
            <p>
              <strong>Technology:</strong> I think smartphones are useful.
            </p>
            <p>
              <strong>Weather:</strong> For me, sunny weather is better.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Opinion Conversation
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> What do you think about online learning?
            </p>
            <p>
              <strong>B:</strong> I think it&apos;s very useful.
            </p>
            <p>
              <strong>A:</strong> Why do you think so?
            </p>
            <p>
              <strong>B:</strong> Because you can study from anywhere.
            </p>
            <p>
              <strong>A:</strong> That&apos;s true. I agree with you.
            </p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> I think travelling by car is better than
              travelling by train.
            </p>
            <p>
              <strong>B:</strong> I see your point, but I think trains are
              more comfortable.
            </p>
            <p>
              <strong>A:</strong> Why?
            </p>
            <p>
              <strong>B:</strong> Because you don&apos;t have to drive.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Opinion Expressions
          </h2>

          <div style={boxStyle}>
            <p>I think...</p>
            <p>I don&apos;t think...</p>
            <p>In my opinion...</p>
            <p>I feel...</p>
            <p>For me...</p>
            <p>What do you think?</p>
            <p>What&apos;s your opinion?</p>
            <p>I agree.</p>
            <p>I agree with you.</p>
            <p>I see your point, but...</p>
            <p>I&apos;m not sure I agree.</p>
            <p>That&apos;s a good point.</p>
            <p>Because...</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I think is a good idea.</p>
            <p>✅ I think it is a good idea.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I think not this is good.</p>
            <p>✅ I don&apos;t think this is good.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I agree you.</p>
            <p>✅ I agree with you.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What you think about it?</p>
            <p>✅ What do you think about it?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ In my opinion is very useful.</p>
            <p>✅ In my opinion, it is very useful.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I think because it is cheap.</p>
            <p>✅ I like it because it is cheap.</p>
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
              1. ______ this restaurant is very good.
              <br />
              (I think / I thinking)
            </p>

            <p>
              2. What ______ you think about this movie?
              <br />
              (do / are)
            </p>

            <p>
              3. I agree ______ you.
              <br />
              (with / to)
            </p>

            <p>
              4. In my ______, this is the best choice.
              <br />
              (opinion / think)
            </p>

            <p>
              5. I like this hotel because ______ is clean.
              <br />
              (it / it&apos;s)
            </p>

            <p>
              6. I don&apos;t ______ this is a good idea.
              <br />
              (think / thinking)
            </p>

            <p>
              7. Which sentence politely disagrees?
              <br />
              (I see your point, but... / You are wrong.)
            </p>

            <p>
              8. Which sentence asks for an opinion?
              <br />
              (What do you think? / I think it&apos;s good.)
            </p>

            <p>
              9. Complete: “I prefer the train ______ it is more comfortable.”
              <br />
              (because / but)
            </p>

            <p>
              10. Complete: “I&apos;m not sure I ______.”
              <br />
              (agree / agreeing)
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
            <p>1. I think</p>
            <p>2. do</p>
            <p>3. with</p>
            <p>4. opinion</p>
            <p>5. it</p>
            <p>6. think</p>
            <p>7. I see your point, but...</p>
            <p>8. What do you think?</p>
            <p>9. because</p>
            <p>10. agree</p>
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
            <li>
              Use <strong>I think...</strong> to give a common opinion.
            </li>
            <li>
              Use <strong>In my opinion...</strong> to introduce your personal
              view.
            </li>
            <li>
              Use <strong>What do you think?</strong> to ask for an opinion.
            </li>
            <li>
              Use <strong>I agree with you.</strong> to agree with someone.
            </li>
            <li>
              Use <strong>I see your point, but...</strong> to disagree
              politely.
            </li>
            <li>
              Use <strong>because</strong> to give a reason.
            </li>
            <li>
              Use <strong>I don&apos;t think...</strong> for a negative opinion.
            </li>
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
            href="/resources/grammar/a2/making-suggestions"
            style={buttonStyle}
          >
            ← Making Suggestions
          </Link>

          <Link
            href="/resources/grammar/a2/describing-people-places"
            style={buttonStyle}
          >
            Next: Describing People & Places →
          </Link>
        </div>
      </div>
    </main>
  );
}