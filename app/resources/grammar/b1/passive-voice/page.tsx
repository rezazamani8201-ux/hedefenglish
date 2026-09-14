"use client";

import Link from "next/link";

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

export default function PassiveVoicePage() {
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
          href="/resources/grammar/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "25px",
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
            B1 GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Passive Voice
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use the passive voice to focus on actions, results,
            and the person or thing affected by an action.
          </p>
        </section>

        {/* Learning Goals */}
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
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Understand the difference between active and passive voice.</li>
            <li>Form passive sentences correctly.</li>
            <li>Use the passive voice in common tenses.</li>
            <li>Know when to use or omit “by”.</li>
            <li>Avoid common passive voice mistakes.</li>
          </ul>
        </section>

        {/* Active vs Passive */}
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
            1. Active vs Passive Voice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            In an active sentence, the subject performs the action. In a
            passive sentence, the focus is on the person or thing that receives
            the action.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                lineHeight: 2,
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Active
              </h3>

              <p>
                The chef <strong>cooked</strong> the meal.
              </p>

              <p>
                Focus: <strong>the chef</strong>
              </p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
                lineHeight: 2,
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Passive
              </h3>

              <p>
                The meal <strong>was cooked</strong> by the chef.
              </p>

              <p>
                Focus: <strong>the meal</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Basic Structure */}
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
            2. Basic Passive Structure
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The basic passive structure is:
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "15px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            Subject + be + past participle
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The verb <strong>be</strong> changes according to the tense. The
            main verb is always in its <strong>past participle</strong> form.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>English <strong>is spoken</strong> here.</p>
            <p>The car <strong>was repaired</strong> yesterday.</p>
            <p>The house <strong>will be painted</strong> next week.</p>
          </div>
        </section>

        {/* Present Simple */}
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
            3. Present Simple Passive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Form:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            am / is / are + past participle
          </div>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              Active: People <strong>speak</strong> English worldwide.
            </p>

            <p>
              Passive: English <strong>is spoken</strong> worldwide.
            </p>

            <p>
              Active: They <strong>clean</strong> the rooms every day.
            </p>

            <p>
              Passive: The rooms <strong>are cleaned</strong> every day.
            </p>
          </div>
        </section>

        {/* Past Simple */}
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
            4. Past Simple Passive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Form:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            was / were + past participle
          </div>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              Active: Someone <strong>stole</strong> my bike.
            </p>

            <p>
              Passive: My bike <strong>was stolen</strong>.
            </p>

            <p>
              Active: They <strong>built</strong> the bridge in 1990.
            </p>

            <p>
              Passive: The bridge <strong>was built</strong> in 1990.
            </p>
          </div>
        </section>

        {/* Future */}
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
            5. Future Simple Passive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Form:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            will be + past participle
          </div>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              Active: They <strong>will announce</strong> the results tomorrow.
            </p>

            <p>
              Passive: The results <strong>will be announced</strong> tomorrow.
            </p>

            <p>
              Active: They <strong>will build</strong> a new hospital.
            </p>

            <p>
              Passive: A new hospital <strong>will be built</strong>.
            </p>
          </div>
        </section>

        {/* Present Perfect */}
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
            6. Present Perfect Passive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Form:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            has / have been + past participle
          </div>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              Active: Someone <strong>has cleaned</strong> the room.
            </p>

            <p>
              Passive: The room <strong>has been cleaned</strong>.
            </p>

            <p>
              Active: They <strong>have completed</strong> the project.
            </p>

            <p>
              Passive: The project <strong>has been completed</strong>.
            </p>
          </div>
        </section>

        {/* Modal Passive */}
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
            7. Modal Verbs in the Passive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Modal verbs can also be followed by a passive structure.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            modal + be + past participle
          </div>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>The work <strong>must be finished</strong> today.</p>

            <p>The problem <strong>should be discussed</strong>.</p>

            <p>The documents <strong>can be downloaded</strong> online.</p>

            <p>The rules <strong>have to be followed</strong>.</p>
          </div>
        </section>

        {/* By */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. When Do We Use “By”?
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We use <strong>by</strong> when we want to mention who performed
            the action.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              The novel was written <strong>by George Orwell</strong>.
            </p>

            <p>
              The picture was painted <strong>by a famous artist</strong>.
            </p>

            <p>
              The song was performed <strong>by the band</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            However, we usually do not mention the person when they are
            unknown, obvious, or unimportant.
          </p>

          <p>
            My phone was stolen.
          </p>

          <p>
            The road was closed.
          </p>
        </section>

        {/* When to Use */}
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
            9. When Do We Use the Passive?
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              <strong>1. The person is unknown:</strong>
              <br />
              My car was stolen.
            </p>

            <p>
              <strong>2. The person is not important:</strong>
              <br />
              The office is cleaned every evening.
            </p>

            <p>
              <strong>3. We want to focus on the result:</strong>
              <br />
              The project has been completed.
            </p>

            <p>
              <strong>4. The style is formal or objective:</strong>
              <br />
              The results will be published tomorrow.
            </p>

            <p>
              <strong>5. The process is more important than the person:</strong>
              <br />
              The products are tested before they are sold.
            </p>
          </div>
        </section>

        {/* Questions and Negatives */}
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
            10. Negative and Question Forms
          </h2>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              lineHeight: 2,
            }}
          >
            <p>The room <strong>isn&apos;t cleaned</strong> every day.</p>

            <p>The documents <strong>weren&apos;t sent</strong> yesterday.</p>

            <p>The work <strong>hasn&apos;t been finished</strong> yet.</p>
          </div>

          <h3 style={{ color: "#173b78", marginTop: "25px" }}>
            Questions
          </h3>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "18px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Is</strong> English spoken here?
            </p>

            <p>
              <strong>Was</strong> the car repaired yesterday?
            </p>

            <p>
              <strong>Has</strong> the project been completed?
            </p>

            <p>
              <strong>Will</strong> the results be announced tomorrow?
            </p>
          </div>
        </section>

        {/* Important Rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. An Important Rule
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Only <strong>transitive verbs</strong> can normally be changed into
            the passive voice because they have an object.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              Active: Someone <strong>opened the door</strong>.
            </p>

            <p>
              Passive: The door <strong>was opened</strong>.
            </p>

            <p style={{ marginTop: "15px" }}>
              But verbs without an object usually cannot form a normal passive
              sentence.
            </p>

            <p>
              Example: He <strong>arrived</strong>.
            </p>

            <p>
              There is no direct object, so a normal passive form is not
              possible.
            </p>
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
            12. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ The car <strong>was repair</strong> yesterday.
              <br />
              ✅ The car <strong>was repaired</strong> yesterday.
            </p>

            <p>
              ❌ The room <strong>is clean</strong> every day.
              <br />
              ✅ The room <strong>is cleaned</strong> every day.
            </p>

            <p>
              ❌ The project <strong>has completed</strong>.
              <br />
              ✅ The project <strong>has been completed</strong>.
            </p>

            <p>
              ❌ The work <strong>must finished</strong> today.
              <br />
              ✅ The work <strong>must be finished</strong> today.
            </p>

            <p>
              ❌ English <strong>is speak</strong> here.
              <br />
              ✅ English <strong>is spoken</strong> here.
            </p>

            <p>
              ❌ The house <strong>was built from</strong> the workers.
              <br />
              ✅ The house <strong>was built by</strong> the workers.
            </p>
          </div>
        </section>

        {/* Practice */}
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
            13. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct answer.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              English __________ in many countries. (is spoken / speaks)
            </li>

            <li>
              The car __________ yesterday. (was repaired / repaired)
            </li>

            <li>
              The results __________ tomorrow. (will be announced / will
              announce)
            </li>

            <li>
              The project __________ already. (has been completed / has
              completed)
            </li>

            <li>
              The rooms __________ every morning. (are cleaned / clean)
            </li>

            <li>
              My wallet __________ on the bus. (was stolen / stole)
            </li>

            <li>
              The documents must __________ before Friday. (be signed / signed)
            </li>

            <li>
              The new hospital __________ next year. (will be built / will build)
            </li>

            <li>
              The problem __________ yesterday. (was discussed / discussed)
            </li>

            <li>
              The emails __________ yet. (haven&apos;t been sent / haven&apos;t
              sent)
            </li>

            <li>
              Is this building __________ by the government? (owned / own)
            </li>

            <li>
              The painting was created __________ a famous artist. (by / from)
            </li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>
              1. is spoken
              <br />
              2. was repaired
              <br />
              3. will be announced
              <br />
              4. has been completed
              <br />
              5. are cleaned
              <br />
              6. was stolen
              <br />
              7. be signed
              <br />
              8. will be built
              <br />
              9. was discussed
              <br />
              10. haven&apos;t been sent
              <br />
              11. owned
              <br />
              12. by
            </p>
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

          <ul style={{ lineHeight: 1.9 }}>
            <li>
              Passive voice focuses on the person or thing receiving the
              action.
            </li>

            <li>
              The basic structure is <strong>be + past participle</strong>.
            </li>

            <li>
              Present Simple: <strong>am / is / are + past participle</strong>.
            </li>

            <li>
              Past Simple: <strong>was / were + past participle</strong>.
            </li>

            <li>
              Future: <strong>will be + past participle</strong>.
            </li>

            <li>
              Present Perfect:{" "}
              <strong>has / have been + past participle</strong>.
            </li>

            <li>
              Modal Passive: <strong>modal + be + past participle</strong>.
            </li>

            <li>
              Use <strong>by</strong> when the person performing the action is
              important.
            </li>

            <li>
              Always remember that the main verb in a passive sentence is in
              the <strong>past participle</strong> form.
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources/grammar/b1/modal-possibility"
            style={buttonStyle}
          >
            ← Modal Verbs of Possibility
          </Link>

          <Link
            href="/resources/grammar/b1/reported-speech"
            style={buttonStyle}
          >
            Next: Reported Speech →
          </Link>
        </div>
      </div>
    </main>
  );
}