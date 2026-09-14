"use client";

import Link from "next/link";

export default function AdvancedTensesReviewPage() {
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
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "11px 18px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            background: "#fff",
            color: "#173b78",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
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
            Advanced Tenses Review
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Review the main English tenses and learn how to choose the right
            tense accurately and naturally in different situations.
          </p>
        </section>

        {/* Learning Objective */}
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

          <p
            style={{
              color: "#475467",
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            In this lesson, you will review the most important English tenses
            and focus on the differences between them. You will also learn how
            tense choice can change the meaning, focus, or time relationship of
            a sentence.
          </p>
        </section>

        {/* Present Tenses */}
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
            1. Present Tenses
          </h2>

          <h3>Present Simple</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the present simple for habits, routines, facts, permanent
            situations, and general truths.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>Example:</strong>
            <br />
            She works in a language school.
            <br />
            The Earth goes around the Sun.
          </div>

          <h3>Present Continuous</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the present continuous for actions happening now, temporary
            situations, and changing situations.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <strong>Example:</strong>
            <br />
            She is working from home this week.
            <br />
            Technology is changing rapidly.
          </div>
        </section>

        {/* Perfect Tenses */}
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
            2. Present Perfect & Present Perfect Continuous
          </h2>

          <h3>Present Perfect</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            The present perfect connects a past action or experience with the
            present. It is often used when the exact past time is not important.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>Example:</strong>
            <br />
            I have visited London three times.
            <br />
            She has just finished her homework.
          </div>

          <h3>Present Perfect Continuous</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use it to emphasize the duration or ongoing nature of an action
            that started in the past and continues into the present.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <strong>Example:</strong>
            <br />
            I have been studying English for three years.
          </div>
        </section>

        {/* Past Tenses */}
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
            3. Past Tenses
          </h2>

          <h3>Past Simple</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use the past simple for completed actions at a definite time in the
            past.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>Example:</strong>
            <br />
            I visited Paris last summer.
          </div>

          <h3>Past Continuous</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use the past continuous for an action that was in progress at a
            particular time in the past.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>Example:</strong>
            <br />
            I was studying when you called.
          </div>

          <h3>Past Perfect</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use the past perfect to show that one past action happened before
            another past action.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <strong>Example:</strong>
            <br />
            When I arrived, the train had already left.
          </div>
        </section>

        {/* Future Tenses */}
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
            4. Future Forms
          </h2>

          <h3>Will</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We commonly use will for predictions, spontaneous decisions, and
            promises.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>Example:</strong>
            <br />
            I think prices will increase next year.
          </div>

          <h3>Be Going To</h3>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use be going to for plans and predictions based on present
            evidence.
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <strong>Example:</strong>
            <br />
            Look at those clouds. It is going to rain.
          </div>
        </section>

        {/* Key Difference */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Key Point</h2>

          <p
            style={{
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            At B2 level, choosing the correct tense is not only about knowing
            the grammar form. You also need to understand the relationship
            between actions, time, duration, completion, and the speaker's
            focus.
          </p>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Choose the correct form:
          </p>

          <div
            style={{
              background: "#f8fafc",
              padding: "18px",
              borderRadius: "10px",
              lineHeight: 2,
            }}
          >
            1. I ______ English for five years.
            <br />
            <strong>Answer:</strong> have been studying
            <br />
            <br />
            2. When we arrived, they ______ dinner.
            <br />
            <strong>Answer:</strong> had already finished
            <br />
            <br />
            3. Look at the sky. It ______ rain.
            <br />
            <strong>Answer:</strong> is going to
          </div>
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
            href="/resources/grammar/b2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "11px 18px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "#fff",
              color: "#173b78",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← B2 Grammar
          </Link>

          <Link
            href="/resources/grammar/b2/past-perfect-past-perfect-continuous"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "11px 18px",
              borderRadius: "10px",
              background: "#173b78",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}