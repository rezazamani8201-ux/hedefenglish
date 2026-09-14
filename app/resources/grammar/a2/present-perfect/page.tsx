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

export default function PresentPerfectPage() {
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
            Present Perfect
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use the Present Perfect to talk about experiences,
            recent events, and actions that connect the past with the present.
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
            <li>Understand the structure of the Present Perfect.</li>
            <li>Use have and has correctly.</li>
            <li>Use the past participle correctly.</li>
            <li>Talk about life experiences.</li>
            <li>Talk about recent actions and results.</li>
            <li>Use already, yet, just, ever, and never.</li>
            <li>Understand the difference between Present Perfect and Past Simple.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Is the Present Perfect?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use the <strong>Present Perfect</strong> to talk about past
            actions that are connected to the present.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "18px",
            }}
          >
            <strong>Basic idea:</strong>
            <p style={{ marginBottom: 0, marginTop: "10px" }}>
              The exact time of the action is often not important or is not
              mentioned.
            </p>
          </div>

          <div style={boxStyle}>
            <p>I have visited London.</p>
            <p>She has finished her homework.</p>
            <p>We have seen this movie.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Structure
          </h2>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Affirmative
            </h3>
            <p>
              Subject + <strong>have / has</strong> + past participle
            </p>
            <p>I have worked.</p>
            <p>She has worked.</p>
            <p>They have finished.</p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Negative
            </h3>
            <p>
              Subject + <strong>have not / has not</strong> + past participle
            </p>
            <p>I have not finished.</p>
            <p>He has not arrived.</p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Question
            </h3>
            <p>
              <strong>Have / Has</strong> + subject + past participle?
            </p>
            <p>Have you finished?</p>
            <p>Has she arrived?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Have or Has?
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
                    Auxiliary
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
                    I / You / We / They
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    have
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They have arrived.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He / She / It
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    has
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She has arrived.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Past Participles
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Regular verbs usually form the past participle with
            <strong> -ed</strong>.
          </p>

          <div style={boxStyle}>
            <p>work → worked</p>
            <p>play → played</p>
            <p>clean → cleaned</p>
            <p>finish → finished</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Irregular verbs have different past participle forms.
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
                minWidth: "550px",
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
                    Base Verb
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Past Participle
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
                    go
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    gone
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I have gone home.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    see
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    seen
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I have seen that movie.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    eat
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    eaten
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She has eaten lunch.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    write
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    written
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He has written a letter.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    take
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    taken
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They have taken the bus.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Contractions
          </h2>

          <div style={boxStyle}>
            <p>I have → I&apos;ve</p>
            <p>You have → You&apos;ve</p>
            <p>We have → We&apos;ve</p>
            <p>They have → They&apos;ve</p>
            <p>He has → He&apos;s</p>
            <p>She has → She&apos;s</p>
            <p>It has → It&apos;s</p>
          </div>

          <div style={boxStyle}>
            <p>I&apos;ve finished my work.</p>
            <p>She&apos;s visited Paris.</p>
            <p>They&apos;ve seen this movie.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Negative Form
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>haven&apos;t</strong> with I, you, we, and they.
            Use <strong>hasn&apos;t</strong> with he, she, and it.
          </p>

          <div style={boxStyle}>
            <p>I haven&apos;t finished yet.</p>
            <p>You haven&apos;t called me.</p>
            <p>We haven&apos;t seen that movie.</p>
            <p>They haven&apos;t arrived.</p>
            <p>He hasn&apos;t finished his work.</p>
            <p>She hasn&apos;t called me.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Questions
          </h2>

          <div style={boxStyle}>
            <p>Have you finished your homework?</p>
            <p>Have they arrived?</p>
            <p>Has she called you?</p>
            <p>Has he eaten breakfast?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Short Answers</h3>

          <div style={boxStyle}>
            <p>Have you finished?</p>
            <p>Yes, I have.</p>
            <p>No, I haven&apos;t.</p>

            <p style={{ marginTop: "15px" }}>Has she arrived?</p>
            <p>Yes, she has.</p>
            <p>No, she hasn&apos;t.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Life Experiences
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use the Present Perfect to talk about experiences in our lives
            when we do not say exactly when they happened.
          </p>

          <div style={boxStyle}>
            <p>I have visited Italy.</p>
            <p>She has ridden a horse.</p>
            <p>They have traveled to Spain.</p>
            <p>He has never flown on a plane.</p>
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
              We normally do not use a finished past time expression with the
              Present Perfect.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Ever and Never
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Ever</strong> is commonly used in questions about life
            experiences.
          </p>

          <div style={boxStyle}>
            <p>Have you ever visited London?</p>
            <p>Have you ever eaten sushi?</p>
            <p>Has she ever been to Paris?</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Never</strong> means &quot;not at any time&quot;.
          </p>

          <div style={boxStyle}>
            <p>I have never visited London.</p>
            <p>She has never eaten sushi.</p>
            <p>We have never been there.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Just
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>just</strong> for something that happened a very short
            time ago.
          </p>

          <div style={boxStyle}>
            <p>I have just finished my homework.</p>
            <p>She has just arrived.</p>
            <p>They have just left.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Position: <strong>have/has + just + past participle</strong>
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Already
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>already</strong> when something happened earlier than
            expected.
          </p>

          <div style={boxStyle}>
            <p>I have already eaten.</p>
            <p>She has already finished the project.</p>
            <p>We have already seen this movie.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Yet
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>yet</strong> mainly in negative sentences and
            questions. It usually comes at the end of the sentence.
          </p>

          <div style={boxStyle}>
            <p>I haven&apos;t finished yet.</p>
            <p>She hasn&apos;t arrived yet.</p>
            <p>Have you finished yet?</p>
            <p>Has he called you yet?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            13. For and Since
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>for</strong> with a period of time.
          </p>

          <div style={boxStyle}>
            <p>for two hours</p>
            <p>for three years</p>
            <p>for a long time</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>since</strong> with the starting point.
          </p>

          <div style={boxStyle}>
            <p>since Monday</p>
            <p>since 2020</p>
            <p>since last year</p>
            <p>since 9 o&apos;clock</p>
          </div>

          <div style={boxStyle}>
            <p>I have lived here for five years.</p>
            <p>She has worked here since 2022.</p>
            <p>We have known each other for a long time.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. Present Perfect vs Past Simple
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
                minWidth: "700px",
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
                    Present Perfect
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
                    Time is not specified or is connected to the present.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    A finished past time is usually mentioned.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I have visited Paris.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I visited Paris last year.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She has finished her work.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She finished her work yesterday.
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
            <p>❌ I have saw this movie.</p>
            <p>✅ I have seen this movie.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She have finished her work.</p>
            <p>✅ She has finished her work.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have visited London last year.</p>
            <p>✅ I visited London last year.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have been here since five years.</p>
            <p>✅ I have been here for five years.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Have you finished already?</p>
            <p>✅ Have you finished yet?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the correct answer.
          </p>

          <div style={boxStyle}>
            <p>1. She ______ finished her homework. (has / have)</p>
            <p>2. They ______ visited Paris. (has / have)</p>
            <p>3. I ______ never eaten sushi. (have / has)</p>
            <p>4. ______ you ever seen this movie? (Have / Has)</p>
            <p>5. He hasn&apos;t arrived ______. (yet / already)</p>
            <p>6. We have ______ finished the project. (just / since)</p>
            <p>7. She has lived here ______ 2020. (for / since)</p>
            <p>8. I have worked here ______ three years. (for / since)</p>
            <p>9. He ______ already left. (has / have)</p>
            <p>10. I ______ this book last year. (read / have read)</p>
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
            <p>1. has</p>
            <p>2. have</p>
            <p>3. have</p>
            <p>4. Have</p>
            <p>5. yet</p>
            <p>6. just</p>
            <p>7. since</p>
            <p>8. for</p>
            <p>9. has</p>
            <p>10. read</p>
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
            <li>Present Perfect = have/has + past participle.</li>
            <li>Use have with I, you, we, and they.</li>
            <li>Use has with he, she, and it.</li>
            <li>Use ever for questions about experiences.</li>
            <li>Use never for experiences that have not happened.</li>
            <li>Use just for very recent actions.</li>
            <li>Use already for actions completed earlier than expected.</li>
            <li>Use yet mainly in questions and negative sentences.</li>
            <li>Use for with a period of time.</li>
            <li>Use since with a starting point.</li>
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
            href="/resources/grammar/a2/modal-verbs"
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
            Next: Modal Verbs →
          </Link>
        </div>
      </div>
    </main>
  );
}