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

export default function PresentContinuousPage() {
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
            Present Continuous
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use the Present Continuous to talk about actions
            happening now, temporary situations, and changing situations.
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
            <li>Talk about actions happening now.</li>
            <li>Describe temporary situations.</li>
            <li>Ask and answer questions about current activities.</li>
            <li>Use time expressions with the Present Continuous.</li>
            <li>Understand common spelling changes with -ing.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Is the Present Continuous?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            The Present Continuous describes an action that is happening now
            or around the present time.
          </p>

          <div style={boxStyle}>
            <strong>Examples:</strong>
            <p>I am studying English now.</p>
            <p>She is talking on the phone.</p>
            <p>They are watching TV.</p>
            <p>We are having dinner.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Basic Structure</h3>

          <div style={boxStyle}>
            <strong>Subject + am / is / are + verb-ing</strong>
            <p>I am working.</p>
            <p>He is sleeping.</p>
            <p>They are studying.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Affirmative Sentences
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
                minWidth: "600px",
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
                    Subject
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Be
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    am
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I am reading.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He / She / It
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    is
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She is reading.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    You / We / They
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    are
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They are reading.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ color: "#173b78" }}>Contractions</h3>

          <div style={boxStyle}>
            <p>I am → I&apos;m</p>
            <p>He is → He&apos;s</p>
            <p>She is → She&apos;s</p>
            <p>It is → It&apos;s</p>
            <p>We are → We&apos;re</p>
            <p>They are → They&apos;re</p>
            <p>You are → You&apos;re</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Negative Sentences
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            To make a negative sentence, put <strong>not</strong> after
            am, is, or are.
          </p>

          <div style={boxStyle}>
            <p>I am not sleeping.</p>
            <p>He is not working.</p>
            <p>She is not watching TV.</p>
            <p>We are not studying.</p>
            <p>They are not playing football.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Common Contractions</h3>

          <div style={boxStyle}>
            <p>I&apos;m not</p>
            <p>He isn&apos;t / He&apos;s not</p>
            <p>She isn&apos;t / She&apos;s not</p>
            <p>We aren&apos;t / We&apos;re not</p>
            <p>They aren&apos;t / They&apos;re not</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Questions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Move am, is, or are to the beginning of the sentence.
          </p>

          <div style={boxStyle}>
            <strong>Am / Is / Are + subject + verb-ing?</strong>
            <p>Are you studying?</p>
            <p>Is she working?</p>
            <p>Are they watching TV?</p>
            <p>Is he sleeping?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Short Answers</h3>

          <div style={boxStyle}>
            <p>Are you studying?</p>
            <p>Yes, I am.</p>
            <p>No, I&apos;m not.</p>

            <p>Is she working?</p>
            <p>Yes, she is.</p>
            <p>No, she isn&apos;t.</p>

            <p>Are they playing?</p>
            <p>Yes, they are.</p>
            <p>No, they aren&apos;t.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Spelling Rules for -ing
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Most verbs simply take <strong>-ing</strong>.
          </p>

          <div style={boxStyle}>
            <p>work → working</p>
            <p>play → playing</p>
            <p>read → reading</p>
            <p>watch → watching</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Verbs ending in <strong>-e</strong> usually lose the final
            <strong> e</strong>.
          </p>

          <div style={boxStyle}>
            <p>make → making</p>
            <p>write → writing</p>
            <p>come → coming</p>
            <p>dance → dancing</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Some short verbs double the final consonant.
          </p>

          <div style={boxStyle}>
            <p>run → running</p>
            <p>sit → sitting</p>
            <p>swim → swimming</p>
            <p>get → getting</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Verbs ending in <strong>-ie</strong> usually change to
            <strong> -ying</strong>.
          </p>

          <div style={boxStyle}>
            <p>lie → lying</p>
            <p>die → dying</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. When Do We Use the Present Continuous?
          </h2>

          <h3 style={{ color: "#173b78" }}>Actions Happening Now</h3>

          <div style={boxStyle}>
            <p>I am talking to you now.</p>
            <p>She is cooking dinner.</p>
            <p>They are playing outside.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Temporary Situations</h3>

          <div style={boxStyle}>
            <p>I am staying with my friend this week.</p>
            <p>He is working in London this month.</p>
            <p>We are studying for an exam.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Changing Situations</h3>

          <div style={boxStyle}>
            <p>The weather is getting colder.</p>
            <p>Your English is improving.</p>
            <p>Technology is changing quickly.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Time Expressions
          </h2>

          <div style={boxStyle}>
            <p>now</p>
            <p>right now</p>
            <p>at the moment</p>
            <p>today</p>
            <p>this week</p>
            <p>this month</p>
            <p>these days</p>
          </div>

          <div style={boxStyle}>
            <p>I am working <strong>right now</strong>.</p>
            <p>She is studying <strong>at the moment</strong>.</p>
            <p>They are staying here <strong>this week</strong>.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Present Simple vs Present Continuous
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            The Present Simple describes habits and regular actions. The
            Present Continuous describes actions happening now or temporary
            situations.
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
                    Present Continuous
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I work every day.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I am working now.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She usually drinks coffee.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She is drinking tea now.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They play football on Sundays.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They are playing football now.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I am study English.</p>
            <p>✅ I am studying English.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She is work now.</p>
            <p>✅ She is working now.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ They are play football.</p>
            <p>✅ They are playing football.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Are you work today?</p>
            <p>✅ Are you working today?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He doesn&apos;t working now.</p>
            <p>✅ He isn&apos;t working now.</p>
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
            <p>1. I ______ English now. (study)</p>
            <p>2. She ______ dinner at the moment. (cook)</p>
            <p>3. They ______ football right now. (play)</p>
            <p>4. He ______ TV. (not / watch)</p>
            <p>5. ______ you ______ today? (work)</p>
            <p>6. We ______ for an exam this week. (study)</p>
            <p>7. The weather ______ colder. (get)</p>
            <p>8. She ______ with her parents this month. (stay)</p>
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
            <p>1. am studying</p>
            <p>2. is cooking</p>
            <p>3. are playing</p>
            <p>4. isn&apos;t watching</p>
            <p>5. Are / working</p>
            <p>6. are studying</p>
            <p>7. is getting</p>
            <p>8. is staying</p>
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
            <li>Use am, is, or are + verb-ing.</li>
            <li>Use the Present Continuous for actions happening now.</li>
            <li>It can also describe temporary situations.</li>
            <li>Use am/is/are + not for negative sentences.</li>
            <li>Use am/is/are before the subject in questions.</li>
            <li>Remember the common spelling rules for -ing.</li>
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
            href="/resources/grammar/a2/future-plans"
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
            Next: Future Plans →
          </Link>
        </div>
      </div>
    </main>
  );
}