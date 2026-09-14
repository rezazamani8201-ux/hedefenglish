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

export default function PastPerfectPage() {
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
            Past Perfect & Past Perfect Continuous
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to describe actions that happened before another past
            event and how to emphasize duration, activity, and results.
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
            In this lesson, you will learn the difference between the past
            perfect and past perfect continuous. You will also learn when to
            focus on the completion of an action and when to focus on its
            duration or activity.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Past Perfect form and uses</li>
            <li>Past Perfect Continuous form and uses</li>
            <li>Time relationships in the past</li>
            <li>Completed actions vs. ongoing activities</li>
            <li>Common mistakes and useful expressions</li>
          </ul>
        </section>

        {/* Past Perfect */}
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
            1. Past Perfect
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The past perfect describes an action that happened before another
            action or moment in the past.
          </p>

          <h3>Form</h3>

          <div style={boxStyle}>
            <strong>Subject + had + past participle</strong>
            <br />
            <br />
            I had finished.
            <br />
            She had left.
            <br />
            They had arrived.
          </div>

          <h3>Examples</h3>

          <div style={boxStyle}>
            When I arrived at the station, the train had already left.
            <br />
            <br />
            She was tired because she had worked all day.
            <br />
            <br />
            By the time we got home, everyone had gone to bed.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The past perfect makes the order of two past events clear. The
            earlier event is expressed with the past perfect.
          </p>
        </section>

        {/* Past Perfect Continuous */}
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
            2. Past Perfect Continuous
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The past perfect continuous describes an activity that had been
            happening for a period of time before another past event.
          </p>

          <h3>Form</h3>

          <div style={boxStyle}>
            <strong>Subject + had been + verb-ing</strong>
            <br />
            <br />
            I had been studying.
            <br />
            She had been working.
            <br />
            They had been waiting.
          </div>

          <h3>Examples</h3>

          <div style={boxStyle}>
            She was tired because she had been working all morning.
            <br />
            <br />
            They had been waiting for an hour when the bus finally arrived.
            <br />
            <br />
            He had been studying English for three years before he moved
            abroad.
          </div>
        </section>

        {/* Difference */}
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
            3. Past Perfect vs. Past Perfect Continuous
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Both tenses connect an earlier past action with a later past
            situation, but the focus is different.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Past Perfect
              </h3>

              <p style={{ color: "#475467", lineHeight: 1.7 }}>
                Focuses on completion, result, or the fact that something had
                happened.
              </p>

              <strong>Example:</strong>
              <br />
              She had written three emails before lunch.
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Past Perfect Continuous
              </h3>

              <p style={{ color: "#475467", lineHeight: 1.7 }}>
                Focuses on duration, activity, or the evidence of an ongoing
                action.
              </p>

              <strong>Example:</strong>
              <br />
              She had been writing emails for two hours before lunch.
            </div>
          </div>
        </section>

        {/* For and Since */}
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
            4. Using For and Since
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We often use <strong>for</strong> to express a duration and{" "}
            <strong>since</strong> to identify the starting point of an
            activity.
          </p>

          <div style={boxStyle}>
            They had been waiting <strong>for</strong> two hours.
            <br />
            <br />
            She had been living there <strong>since</strong> 2018.
          </div>
        </section>

        {/* When / Before / After */}
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
            5. Time Expressions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These tenses commonly appear with expressions that show the
            relationship between past events.
          </p>

          <div style={boxStyle}>
            <strong>Before:</strong> He had left before I arrived.
            <br />
            <br />
            <strong>After:</strong> After she had finished the report, she went
            home.
            <br />
            <br />
            <strong>When:</strong> When we arrived, they had already started.
            <br />
            <br />
            <strong>By the time:</strong> By the time I called, he had gone to
            sleep.
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
            6. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She had been worked all day.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She had been working all day.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            When I arrived, he has left.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            When I arrived, he had left.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            They had been waited for two hours.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            They had been waiting for two hours.
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
            Complete the sentences with the correct form of the verb.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> When I got home, my family ______ dinner.
            (finish)
            <br />
            <strong>Answer:</strong> had finished
            <br />
            <br />

            <strong>2.</strong> She was exhausted because she ______ all day.
            (work)
            <br />
            <strong>Answer:</strong> had been working
            <br />
            <br />

            <strong>3.</strong> They ______ for thirty minutes when the doctor
            arrived. (wait)
            <br />
            <strong>Answer:</strong> had been waiting
            <br />
            <br />

            <strong>4.</strong> By the time we arrived, the meeting ______.
            (start)
            <br />
            <strong>Answer:</strong> had started
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
            Use the <strong>Past Perfect</strong> when the important idea is
            that an earlier action was completed. Use the{" "}
            <strong>Past Perfect Continuous</strong> when you want to emphasize
            the duration or ongoing nature of an activity before another past
            event.
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
            href="/resources/grammar/b2/advanced-tenses-review"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/future-perfect-future-continuous"
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