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

export default function PresentPastSimplePage() {
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
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
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
            Present & Past Simple
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Review the Present Simple and Past Simple and learn how to use
            them clearly when talking about routines, habits, finished
            actions, and past events.
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
            <li>Talk about habits and regular activities.</li>
            <li>Describe facts and everyday situations.</li>
            <li>Talk about completed actions in the past.</li>
            <li>Ask and answer questions about the past.</li>
            <li>Use time expressions correctly.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Present Simple
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use the Present Simple to talk about things that happen
            regularly, habits, facts, and situations that are generally true.
          </p>

          <div style={boxStyle}>
            <strong>Examples:</strong>
            <p>I work from Monday to Friday.</p>
            <p>She lives in Istanbul.</p>
            <p>They usually have breakfast at 8 o&apos;clock.</p>
            <p>The sun rises in the east.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Affirmative</h3>

          <div style={boxStyle}>
            <strong>I / You / We / They + base verb</strong>
            <p>I work every day.</p>
            <p>They play tennis on Sundays.</p>
          </div>

          <div style={boxStyle}>
            <strong>He / She / It + verb + s/es</strong>
            <p>He works every day.</p>
            <p>She watches TV in the evening.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div style={boxStyle}>
            <strong>do not / don&apos;t + base verb</strong>
            <p>I don&apos;t work on Sundays.</p>
            <p>They don&apos;t like coffee.</p>
          </div>

          <div style={boxStyle}>
            <strong>does not / doesn&apos;t + base verb</strong>
            <p>He doesn&apos;t work on Sundays.</p>
            <p>She doesn&apos;t like coffee.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <strong>Do + subject + base verb?</strong>
            <p>Do you work here?</p>
            <p>Do they speak English?</p>
          </div>

          <div style={boxStyle}>
            <strong>Does + subject + base verb?</strong>
            <p>Does he work here?</p>
            <p>Does she speak English?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Present Simple — Spelling Rules
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With <strong>he, she,</strong> and <strong>it</strong>, we usually
            add <strong>-s</strong> to the verb.
          </p>

          <div style={boxStyle}>
            <strong>work → works</strong>
            <br />
            play → plays
            <br />
            read → reads
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Some verbs take <strong>-es</strong>.
          </p>

          <div style={boxStyle}>
            <strong>watch → watches</strong>
            <br />
            go → goes
            <br />
            wash → washes
            <br />
            fix → fixes
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Verbs ending in consonant + <strong>y</strong> change
            <strong> y → ies</strong>.
          </p>

          <div style={boxStyle}>
            <strong>study → studies</strong>
            <br />
            try → tries
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Past Simple
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use the Past Simple to talk about actions and events that
            started and finished in the past.
          </p>

          <div style={boxStyle}>
            <strong>Examples:</strong>
            <p>I watched a movie last night.</p>
            <p>She visited her parents yesterday.</p>
            <p>We went to Ankara last weekend.</p>
            <p>They arrived two hours ago.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Regular Verbs</h3>

          <div style={boxStyle}>
            <strong>verb + ed</strong>
            <p>work → worked</p>
            <p>play → played</p>
            <p>visit → visited</p>
            <p>watch → watched</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Irregular Verbs</h3>

          <div style={boxStyle}>
            <strong>Some verbs change completely.</strong>
            <p>go → went</p>
            <p>eat → ate</p>
            <p>see → saw</p>
            <p>buy → bought</p>
            <p>take → took</p>
            <p>come → came</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Past Simple — Negative
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>did not</strong> or <strong>didn&apos;t</strong> +
            the base form of the verb.
          </p>

          <div style={boxStyle}>
            <p>I didn&apos;t watch TV.</p>
            <p>She didn&apos;t go to work.</p>
            <p>We didn&apos;t buy anything.</p>
            <p>They didn&apos;t see him.</p>
          </div>

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Important:</strong>
            <p>
              After <strong>didn&apos;t</strong>, use the base form of the
              verb.
            </p>
            <p>❌ She didn&apos;t went.</p>
            <p>✅ She didn&apos;t go.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Past Simple — Questions
          </h2>

          <div style={boxStyle}>
            <strong>Did + subject + base verb?</strong>
            <p>Did you watch the movie?</p>
            <p>Did she go to work?</p>
            <p>Did they visit London?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Short Answers</h3>

          <div style={boxStyle}>
            <p>Yes, I did.</p>
            <p>No, I didn&apos;t.</p>
            <p>Yes, she did.</p>
            <p>No, she didn&apos;t.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Present Simple vs Past Simple
          </h2>

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
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Present Simple
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Past Simple
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I work every day.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I worked yesterday.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She goes to school every day.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She went to school yesterday.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They play football on Sundays.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They played football last Sunday.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He doesn&apos;t eat meat.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He didn&apos;t eat meat yesterday.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Time Expressions
          </h2>

          <div style={boxStyle}>
            <strong>Present Simple</strong>
            <p>every day</p>
            <p>usually</p>
            <p>often</p>
            <p>sometimes</p>
            <p>always</p>
            <p>never</p>
            <p>on Mondays</p>
          </div>

          <div style={boxStyle}>
            <strong>Past Simple</strong>
            <p>yesterday</p>
            <p>last night</p>
            <p>last week</p>
            <p>last year</p>
            <p>two days ago</p>
            <p>in 2024</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ She go to work every day.</p>
            <p>✅ She goes to work every day.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Did you went there?</p>
            <p>✅ Did you go there?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He didn&apos;t watched TV.</p>
            <p>✅ He didn&apos;t watch TV.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I see him yesterday.</p>
            <p>✅ I saw him yesterday.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences with the correct form of the verb.
          </p>

          <div style={boxStyle}>
            <p>1. She ______ to work every day. (go)</p>
            <p>2. I ______ a movie last night. (watch)</p>
            <p>3. They ______ football on Sundays. (play)</p>
            <p>4. He ______ to London last year. (go)</p>
            <p>5. We ______ coffee in the morning. (drink)</p>
            <p>6. She ______ her homework yesterday. (finish)</p>
            <p>7. I ______ work on Sundays. (not / work)</p>
            <p>8. Did you ______ him yesterday? (see)</p>
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
            <p>2. watched</p>
            <p>3. play</p>
            <p>4. went</p>
            <p>5. drink</p>
            <p>6. finished</p>
            <p>7. don&apos;t work</p>
            <p>8. see</p>
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
            <li>Use Present Simple for habits, routines, and facts.</li>
            <li>Use Past Simple for completed past actions.</li>
            <li>Use do/does for Present Simple questions.</li>
            <li>Use did for Past Simple questions.</li>
            <li>After did or didn&apos;t, use the base verb.</li>
            <li>Learn common irregular past forms.</li>
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
            href="/resources/grammar/a2"
            style={{
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
            }}
          >
            ← A2 Grammar
          </Link>

          <Link
            href="/resources/grammar/a2/present-continuous"
            style={{
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
            }}
          >
            Next: Present Continuous →
          </Link>
        </div>
      </div>
    </main>
  );
}