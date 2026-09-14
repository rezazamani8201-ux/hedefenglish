"use client";

import Link from "next/link";

const navStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

const boxStyle = {
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "10px",
  marginTop: "15px",
  lineHeight: 1.8,
};

export default function AdvancedConditionalsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          href="/resources/grammar/b2"
          style={{ ...navStyle, marginBottom: "30px" }}
        >
          ← B2 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "40px 32px",
            marginBottom: "25px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            B2 GRAMMAR
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "38px",
              lineHeight: 1.25,
              margin: "0 0 15px",
            }}
          >
            Advanced Conditionals
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to use advanced conditional structures to talk about
            real, unreal, hypothetical, past, and mixed situations with
            greater accuracy and flexibility.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            What You Will Learn
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will review the main conditional patterns and
            then move on to more advanced structures used in formal and
            everyday English.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Advanced uses of the first, second, and third conditionals</li>
            <li>Mixed conditionals</li>
            <li>Alternative conditional structures</li>
            <li>Unless, provided, as long as, and in case</li>
            <li>Inverted conditionals</li>
            <li>Common mistakes and practical examples</li>
          </ul>
        </section>

        {/* Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Conditional Review
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Conditionals connect a condition with a result. The choice of
            conditional depends on whether the situation is real, possible,
            hypothetical, or impossible.
          </p>

          <div style={boxStyle}>
            <strong>First Conditional — real possibility</strong>
            <br />
            If it rains, we will stay at home.
            <br />
            <br />

            <strong>Second Conditional — hypothetical present or future</strong>
            <br />
            If I had more time, I would learn another language.
            <br />
            <br />

            <strong>Third Conditional — unreal past</strong>
            <br />
            If she had studied harder, she would have passed the exam.
          </div>
        </section>

        {/* Mixed Conditionals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Mixed Conditionals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Mixed conditionals combine different time references. They are
            useful when a past situation has a present result, or a present
            situation has a past result.
          </p>

          <h3>Past Condition → Present Result</h3>

          <div style={boxStyle}>
            If I had accepted that job, I would be living in London now.
            <br />
            <br />
            If she had studied medicine, she would be a doctor today.
          </div>

          <h3>Present Condition → Past Result</h3>

          <div style={boxStyle}>
            If I were more organized, I would not have missed the meeting.
            <br />
            <br />
            If he were more careful, he would not have made that mistake.
          </div>
        </section>

        {/* Unless */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Unless
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Unless</strong> means "if not." It introduces a condition
            that must be avoided for the result to happen.
          </p>

          <div style={boxStyle}>
            Unless you hurry, you will miss the bus.
            <br />
            <br />
            Unless we leave now, we will be late.
            <br />
            <br />
            I will not go unless you come with me.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Avoid using another negative form after <strong>unless</strong>.
          </p>

          <div style={boxStyle}>
            <strong>Correct:</strong> Unless you study, you will fail.
            <br />
            <br />
            <strong>Not:</strong> Unless you don't study, you will fail.
          </div>
        </section>

        {/* Provided / As Long As */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Provided, Providing, and As Long As
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These expressions mean that something will happen only if a
            particular condition is satisfied.
          </p>

          <div style={boxStyle}>
            You can borrow my car provided that you drive carefully.
            <br />
            <br />
            We can go out as long as you finish your work first.
            <br />
            <br />
            You can stay here providing that you keep the room clean.
          </div>
        </section>

        {/* In Case */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. In Case
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>In case</strong> is used when we do something as a
            precaution because something might happen.
          </p>

          <div style={boxStyle}>
            Take an umbrella in case it rains.
            <br />
            <br />
            I saved his phone number in case I need to contact him.
            <br />
            <br />
            Bring some extra money in case the tickets are more expensive than
            expected.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Notice that <strong>in case</strong> does not simply mean
            "if."
          </p>
        </section>

        {/* Even If / Even Though */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Even If
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Even if</strong> emphasizes that the result will remain
            the same regardless of whether the condition happens.
          </p>

          <div style={boxStyle}>
            Even if it rains, we will go hiking.
            <br />
            <br />
            I will support you even if everyone else disagrees.
            <br />
            <br />
            Even if he offered me the job, I would not accept it.
          </div>
        </section>

        {/* Inverted Conditionals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Inverted Conditionals
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In formal English, some conditional sentences can be inverted by
            removing <strong>if</strong> and placing the auxiliary verb before
            the subject.
          </p>

          <h3>Had</h3>

          <div style={boxStyle}>
            <strong>Standard:</strong> If I had known, I would have helped.
            <br />
            <br />
            <strong>Inverted:</strong> Had I known, I would have helped.
          </div>

          <h3>Were</h3>

          <div style={boxStyle}>
            <strong>Standard:</strong> If I were you, I would accept the offer.
            <br />
            <br />
            <strong>Inverted:</strong> Were I you, I would accept the offer.
          </div>

          <h3>Should</h3>

          <div style={boxStyle}>
            <strong>Standard:</strong> If you should need help, call me.
            <br />
            <br />
            <strong>Inverted:</strong> Should you need help, call me.
          </div>
        </section>

        {/* Formal Conditionals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Formal Conditional Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Advanced conditionals are especially useful in formal writing,
            professional communication, and academic English.
          </p>

          <div style={boxStyle}>
            Should you have any questions, please contact us.
            <br />
            <br />
            Were the company to change its policy, many customers would be
            affected.
            <br />
            <br />
            Had the team prepared better, the result might have been
            different.
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            If I would have known, I would have helped.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            If I had known, I would have helped.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            If I knew about the problem yesterday, I would tell you.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            If I had known about the problem yesterday, I would have told you.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Unless you don't hurry, you will miss the train.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Unless you hurry, you will miss the train.
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Complete the sentences with the correct conditional structure.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> If I had taken that job, I ______ in London
            now.
            <br />
            <strong>Answer:</strong> would be living
            <br />
            <br />

            <strong>2.</strong> Unless you hurry, you ______ the bus.
            <br />
            <strong>Answer:</strong> will miss
            <br />
            <br />

            <strong>3.</strong> ______ you need any further information,
            please contact us.
            <br />
            <strong>Answer:</strong> Should
            <br />
            <br />

            <strong>4.</strong> If she were more careful, she ______ that
            mistake yesterday.
            <br />
            <strong>Answer:</strong> would not have made
            <br />
            <br />

            <strong>5.</strong> Take your phone with you ______ you need to
            call someone.
            <br />
            <strong>Answer:</strong> in case
          </div>
        </section>

        {/* Key Point */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Key Point</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
            Advanced conditionals allow you to express more precise
            relationships between conditions and results. Mixed conditionals,
            alternative conditional expressions, and inverted structures help
            you communicate naturally and effectively at a higher level.
          </p>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/grammar/b2/future-perfect-future-continuous"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/modal-verbs-past"
            style={{
              ...navStyle,
              background: "#173b78",
              color: "#fff",
              border: "1px solid #173b78",
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}