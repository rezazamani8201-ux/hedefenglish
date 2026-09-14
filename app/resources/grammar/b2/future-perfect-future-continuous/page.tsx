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

export default function FuturePerfectPage() {
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
            Future Perfect & Future Continuous
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to talk about actions that will be completed before a
            future time and activities that will be in progress at a specific
            moment in the future.
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
            In this lesson, you will learn how to use the Future Perfect and
            Future Continuous accurately in real communication.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Future Perfect form and uses</li>
            <li>Future Continuous form and uses</li>
            <li>The difference between the two tenses</li>
            <li>Future time expressions</li>
            <li>Common mistakes and practical examples</li>
          </ul>
        </section>

        {/* Future Perfect */}
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
            1. Future Perfect
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The Future Perfect describes an action that will be completed
            before a particular time or another event in the future.
          </p>

          <h3>Form</h3>

          <div style={boxStyle}>
            <strong>Subject + will have + past participle</strong>
            <br />
            <br />
            I will have finished.
            <br />
            She will have arrived.
            <br />
            They will have completed the project.
          </div>

          <h3>Examples</h3>

          <div style={boxStyle}>
            By next Friday, I will have finished the report.
            <br />
            <br />
            She will have graduated by the end of the year.
            <br />
            <br />
            By 2030, they will have built a new airport.
          </div>
        </section>

        {/* By */}
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
            2. Using "By"
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The Future Perfect is frequently used with <strong>by</strong> to
            show a deadline or the latest point by which something will be
            completed.
          </p>

          <div style={boxStyle}>
            By tomorrow, I will have completed the assignment.
            <br />
            <br />
            By 8 p.m., she will have arrived home.
            <br />
            <br />
            By the end of this month, we will have finished the course.
          </div>
        </section>

        {/* Future Continuous */}
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
            3. Future Continuous
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The Future Continuous describes an action that will be in progress
            at a specific time in the future.
          </p>

          <h3>Form</h3>

          <div style={boxStyle}>
            <strong>Subject + will be + verb-ing</strong>
            <br />
            <br />
            I will be studying.
            <br />
            She will be working.
            <br />
            They will be traveling.
          </div>

          <h3>Examples</h3>

          <div style={boxStyle}>
            This time tomorrow, I will be flying to London.
            <br />
            <br />
            At 9 p.m. tonight, she will be studying.
            <br />
            <br />
            Don't call me at noon. I will be having lunch.
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
            4. Future Perfect vs. Future Continuous
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The main difference is whether we focus on completion or on an
            activity that will be in progress.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
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
                Future Perfect
              </h3>

              <p style={{ color: "#475467", lineHeight: 1.7 }}>
                Focuses on an action that will be completed before a future
                point.
              </p>

              <strong>Example:</strong>
              <br />
              By 6 p.m., I will have finished my work.
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Future Continuous
              </h3>

              <p style={{ color: "#475467", lineHeight: 1.7 }}>
                Focuses on an activity that will be happening at a future
                moment.
              </p>

              <strong>Example:</strong>
              <br />
              At 6 p.m., I will be working.
            </div>
          </div>
        </section>

        {/* Future Perfect Continuous Note */}
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
            5. Focus on Duration
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When we want to emphasize how long an activity will have continued
            up to a future point, English can also use the Future Perfect
            Continuous.
          </p>

          <div style={boxStyle}>
            By next June, I will have been working here for five years.
            <br />
            <br />
            By the time you arrive, she will have been waiting for an hour.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The important idea here is <strong>duration up to a future
            point</strong>, rather than simple completion.
          </p>
        </section>

        {/* Time Expressions */}
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
            6. Useful Time Expressions
          </h2>

          <div style={boxStyle}>
            <strong>By tomorrow</strong>
            <br />
            I will have finished the work by tomorrow.
            <br />
            <br />

            <strong>By next week</strong>
            <br />
            They will have completed the project by next week.
            <br />
            <br />

            <strong>By the end of the year</strong>
            <br />
            She will have graduated by the end of the year.
            <br />
            <br />

            <strong>This time tomorrow</strong>
            <br />
            This time tomorrow, we will be traveling.
            <br />
            <br />

            <strong>At this time next week</strong>
            <br />
            At this time next week, I will be staying in Paris.
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
            7. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            By tomorrow, I will have finish the project.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            By tomorrow, I will have finished the project.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            At 8 p.m., I will be work.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            At 8 p.m., I will be working.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            By next year, she will has graduated.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            By next year, she will have graduated.
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
            Complete the sentences with the correct future tense.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> By Friday, we ______ the project.
            (complete)
            <br />
            <strong>Answer:</strong> will have completed
            <br />
            <br />

            <strong>2.</strong> This time tomorrow, I ______ to Istanbul.
            (travel)
            <br />
            <strong>Answer:</strong> will be traveling
            <br />
            <br />

            <strong>3.</strong> By the end of the month, she ______ the
            course. (finish)
            <br />
            <strong>Answer:</strong> will have finished
            <br />
            <br />

            <strong>4.</strong> At 10 tonight, they ______ dinner.
            (have)
            <br />
            <strong>Answer:</strong> will be having
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
            Use the <strong>Future Perfect</strong> to focus on something that
            will be completed before a future time. Use the{" "}
            <strong>Future Continuous</strong> to focus on an activity that
            will be in progress at a particular future moment.
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
            href="/resources/grammar/b2/past-perfect-past-perfect-continuous"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/advanced-conditionals"
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