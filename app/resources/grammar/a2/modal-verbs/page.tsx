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

export default function ModalVerbsPage() {
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
            Modal Verbs
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use can, could, should, must, have to, and may to
            talk about ability, permission, advice, obligation, and
            possibility.
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
            <li>Understand what modal verbs are.</li>
            <li>Talk about ability using can and could.</li>
            <li>Ask for and give permission.</li>
            <li>Give advice using should and shouldn&apos;t.</li>
            <li>Express obligation using must and have to.</li>
            <li>Talk about possibility using may and might.</li>
            <li>Make polite requests.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Are Modal Verbs?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Modal verbs are special helping verbs. They are used before the
            main verb to express ideas such as ability, possibility,
            permission, advice, or obligation.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "18px",
            }}
          >
            <strong>Important rule:</strong>
            <p style={{ marginBottom: 0, marginTop: "10px" }}>
              After most modal verbs, use the base form of the verb.
            </p>
          </div>

          <div style={boxStyle}>
            <p>I can swim.</p>
            <p>She should study.</p>
            <p>They must leave.</p>
            <p>He may come.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Basic Structure
          </h2>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Affirmative
            </h3>
            <p>
              Subject + modal verb + base verb
            </p>
            <p>She can drive.</p>
            <p>You should rest.</p>
            <p>We must go.</p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Negative
            </h3>
            <p>
              Subject + modal verb + not + base verb
            </p>
            <p>She cannot drive.</p>
            <p>You should not worry.</p>
            <p>We must not leave.</p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Question
            </h3>
            <p>
              Modal verb + subject + base verb?
            </p>
            <p>Can you drive?</p>
            <p>Should I call him?</p>
            <p>May I come in?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Can — Ability
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>can</strong> to talk about ability in the present.
          </p>

          <div style={boxStyle}>
            <p>I can swim.</p>
            <p>She can speak English.</p>
            <p>He can drive.</p>
            <p>They can play football.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div style={boxStyle}>
            <p>I can&apos;t swim.</p>
            <p>She can&apos;t drive.</p>
            <p>He cannot speak Spanish.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>Can you swim?</p>
            <p>Can she drive?</p>
            <p>Can they speak English?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Could — Past Ability
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>could</strong> to talk about general ability in the
            past.
          </p>

          <div style={boxStyle}>
            <p>I could swim when I was six.</p>
            <p>She could read when she was five.</p>
            <p>He could run very fast when he was young.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div style={boxStyle}>
            <p>I couldn&apos;t swim when I was five.</p>
            <p>She couldn&apos;t drive when she was a teenager.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>Could you swim when you were five?</p>
            <p>Could he speak English as a child?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Can and Could — Requests
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use <strong>can</strong> and <strong>could</strong> to make
            requests. <strong>Could</strong> is usually more polite.
          </p>

          <div style={boxStyle}>
            <p>Can you help me?</p>
            <p>Can you open the window?</p>
            <p>Could you help me, please?</p>
            <p>Could you repeat that, please?</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Polite request:</strong>
            <p style={{ marginBottom: 0 }}>
              Could you + base verb + please?
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Can — Permission
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>can</strong> to ask for or give permission in everyday
            English.
          </p>

          <div style={boxStyle}>
            <p>Can I use your phone?</p>
            <p>Can I sit here?</p>
            <p>Can we leave early?</p>
            <p>Yes, you can.</p>
            <p>No, you can&apos;t.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. May — Permission and Possibility
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>May</strong> can be used to ask for permission. It is
            more formal than <strong>can</strong>.
          </p>

          <div style={boxStyle}>
            <p>May I come in?</p>
            <p>May I ask a question?</p>
            <p>May I use your phone?</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>May</strong> can also express possibility.
          </p>

          <div style={boxStyle}>
            <p>It may rain tomorrow.</p>
            <p>She may come later.</p>
            <p>We may go to the beach this weekend.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Should — Advice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>should</strong> to give advice or say what you think
            is a good idea.
          </p>

          <div style={boxStyle}>
            <p>You should study more.</p>
            <p>She should see a doctor.</p>
            <p>We should leave early.</p>
            <p>He should get some rest.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div style={boxStyle}>
            <p>You shouldn&apos;t eat too much fast food.</p>
            <p>He shouldn&apos;t stay up so late.</p>
            <p>We shouldn&apos;t be late.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>Should I call her?</p>
            <p>Should we leave now?</p>
            <p>What should I do?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Must — Strong Obligation
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>must</strong> when something is necessary or very
            important.
          </p>

          <div style={boxStyle}>
            <p>You must wear a seat belt.</p>
            <p>Students must complete the homework.</p>
            <p>We must be careful.</p>
            <p>You must bring your passport.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Mustn&apos;t</h3>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Mustn&apos;t</strong> means something is prohibited or not
            allowed.
          </p>

          <div style={boxStyle}>
            <p>You mustn&apos;t smoke here.</p>
            <p>You mustn&apos;t touch this.</p>
            <p>Visitors mustn&apos;t enter this room.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Have To — Obligation
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>have to</strong> when something is necessary because
            of a rule, situation, or outside requirement.
          </p>

          <div style={boxStyle}>
            <p>I have to work tomorrow.</p>
            <p>She has to wear a uniform.</p>
            <p>We have to pay the bill.</p>
            <p>He has to get up early.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative</h3>

          <div style={boxStyle}>
            <p>I don&apos;t have to work tomorrow.</p>
            <p>She doesn&apos;t have to come.</p>
            <p>We don&apos;t have to pay now.</p>
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
              Don&apos;t have to means that something is not necessary. It does
              not mean that something is prohibited.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Must vs Have To
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
                    Must
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Have To
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    Strong obligation
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    External or practical obligation
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    I must finish this today.
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    I have to finish this today.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    You must be careful.
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    You have to wear a uniform.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Might — Possibility
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>might</strong> to say that something is possible but
            not certain.
          </p>

          <div style={boxStyle}>
            <p>It might rain later.</p>
            <p>She might come to the party.</p>
            <p>We might go out tonight.</p>
            <p>He might be busy.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Possibility:</strong>
            <p style={{ marginBottom: 0 }}>
              may and might both express possibility.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            13. Modal Verbs at a Glance
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
                minWidth: "750px",
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
                    Modal
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Main Use
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
                    can
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Ability / permission
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I can swim.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    could
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Past ability / polite request
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Could you help me?
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    should
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Advice
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    You should rest.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    must
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Strong obligation
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    You must stop.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    have to
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Obligation
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I have to work.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    may
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Permission / possibility
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    It may rain.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    might
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Possibility
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She might come.
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
            <p>❌ She can to swim.</p>
            <p>✅ She can swim.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He can swims.</p>
            <p>✅ He can swim.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She should to study.</p>
            <p>✅ She should study.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ You must to leave.</p>
            <p>✅ You must leave.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ You don&apos;t must go.</p>
            <p>✅ You mustn&apos;t go.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ You mustn&apos;t come tomorrow. (if you mean it is not necessary)</p>
            <p>✅ You don&apos;t have to come tomorrow.</p>
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
            <p>1. I ______ swim very well. (can / should)</p>
            <p>2. You ______ see a doctor. (should / can)</p>
            <p>3. ______ you help me, please? (Could / Must)</p>
            <p>4. Students ______ wear uniforms. (have to / might)</p>
            <p>5. You ______ smoke here. It is prohibited. (mustn&apos;t / don&apos;t have to)</p>
            <p>6. ______ I come in? (May / Must)</p>
            <p>7. It ______ rain tonight. (might / mustn&apos;t)</p>
            <p>8. When I was young, I ______ run very fast. (could / must)</p>
            <p>9. You ______ bring your passport. It is necessary. (must / might)</p>
            <p>10. You ______ come tomorrow. It is not necessary. (don&apos;t have to / mustn&apos;t)</p>
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
            <p>1. can</p>
            <p>2. should</p>
            <p>3. Could</p>
            <p>4. have to</p>
            <p>5. mustn&apos;t</p>
            <p>6. May</p>
            <p>7. might</p>
            <p>8. could</p>
            <p>9. must</p>
            <p>10. don&apos;t have to</p>
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
            <li>Can = present ability or everyday permission.</li>
            <li>Could = past ability or polite requests.</li>
            <li>Should = advice.</li>
            <li>Must = strong obligation.</li>
            <li>Have to = necessity or external obligation.</li>
            <li>Mustn&apos;t = prohibition.</li>
            <li>Don&apos;t have to = not necessary.</li>
            <li>May = formal permission or possibility.</li>
            <li>Might = possibility.</li>
            <li>After a modal verb, use the base form of the verb.</li>
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
            href="/resources/grammar/a2/adverbs-of-frequency"
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
            Next: Adverbs of Frequency →
          </Link>
        </div>
      </div>
    </main>
  );
}