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

export default function FuturePlansPage() {
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
            Future Plans
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about future plans, arrangements, intentions,
            and predictions using common future forms.
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
            <li>Talk about future plans and intentions.</li>
            <li>Describe arrangements for the future.</li>
            <li>Make predictions about the future.</li>
            <li>Use will and be going to correctly.</li>
            <li>Use the Present Continuous for future arrangements.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Talking About the Future
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            English has several ways to talk about the future. At A2 level,
            three useful forms are:
          </p>

          <div style={boxStyle}>
            <strong>1. will</strong>
            <p>I will call you later.</p>
          </div>

          <div style={boxStyle}>
            <strong>2. be going to</strong>
            <p>I am going to study tonight.</p>
          </div>

          <div style={boxStyle}>
            <strong>3. Present Continuous</strong>
            <p>I am meeting my friend tomorrow.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Will
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We often use <strong>will</strong> for predictions, quick
            decisions, promises, offers, and future facts.
          </p>

          <h3 style={{ color: "#173b78" }}>Structure</h3>

          <div style={boxStyle}>
            <strong>Subject + will + base verb</strong>
            <p>I will help you.</p>
            <p>She will call later.</p>
            <p>They will arrive tomorrow.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Contraction</h3>

          <div style={boxStyle}>
            <p>I will → I&apos;ll</p>
            <p>You will → You&apos;ll</p>
            <p>He will → He&apos;ll</p>
            <p>She will → She&apos;ll</p>
            <p>We will → We&apos;ll</p>
            <p>They will → They&apos;ll</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Will for Quick Decisions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use <strong>will</strong> when we decide to do something at
            the moment of speaking.
          </p>

          <div style={boxStyle}>
            <p>
              A: The phone is ringing.
            </p>
            <p>
              B: I&apos;ll answer it.
            </p>
          </div>

          <div style={boxStyle}>
            <p>
              A: I&apos;m thirsty.
            </p>
            <p>
              B: I&apos;ll get you some water.
            </p>
          </div>

          <div style={boxStyle}>
            <p>
              A: We need some bread.
            </p>
            <p>
              B: I&apos;ll buy some.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Will for Predictions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>will</strong> when you think something will happen in
            the future.
          </p>

          <div style={boxStyle}>
            <p>I think it will rain tomorrow.</p>
            <p>She will probably pass the exam.</p>
            <p>People will use more electric cars in the future.</p>
            <p>I think you will like this movie.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Negative Predictions
          </h3>

          <div style={boxStyle}>
            <p>It will not rain tomorrow.</p>
            <p>It won&apos;t rain tomorrow.</p>
            <p>He won&apos;t be late.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Be Going To
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use <strong>be going to</strong> mainly for plans and
            intentions that already exist.
          </p>

          <h3 style={{ color: "#173b78" }}>Structure</h3>

          <div style={boxStyle}>
            <strong>Subject + am / is / are + going to + base verb</strong>
            <p>I am going to study tonight.</p>
            <p>She is going to buy a new phone.</p>
            <p>They are going to travel next month.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>I&apos;m going to learn Spanish.</p>
            <p>He&apos;s going to start a new job.</p>
            <p>We&apos;re going to visit our family.</p>
            <p>They&apos;re going to move to another city.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Going To for Predictions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can also use <strong>going to</strong> for predictions when
            there is clear evidence that something is about to happen.
          </p>

          <div style={boxStyle}>
            <p>Look at those clouds. It&apos;s going to rain.</p>
            <p>Be careful! You&apos;re going to fall.</p>
            <p>That car is driving too fast. It&apos;s going to crash.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Present Continuous for Future Arrangements
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use the Present Continuous to talk about fixed or arranged
            future plans.
          </p>

          <div style={boxStyle}>
            <p>I&apos;m meeting Sarah tomorrow.</p>
            <p>We&apos;re having dinner at 8 p.m.</p>
            <p>She&apos;s flying to London next week.</p>
            <p>They&apos;re coming to our house on Saturday.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginTop: "15px",
            }}
          >
            <strong>Tip:</strong>
            <p style={{ marginBottom: 0 }}>
              The Present Continuous is especially common when the time or
              place has already been arranged.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Will vs Going To
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
                    Will
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Going To
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Quick decisions
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Plans and intentions
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I&apos;ll help you.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I&apos;m going to help him tomorrow.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    General prediction
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Prediction with evidence
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I think it will be difficult.
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Look at the clouds. It&apos;s going to rain.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Questions About Future Plans
          </h2>

          <div style={boxStyle}>
            <p>What are you going to do tomorrow?</p>
            <p>Where are you going to stay?</p>
            <p>Are you going to travel this summer?</p>
            <p>Will you come with us?</p>
            <p>What will you do next weekend?</p>
            <p>Who are you meeting tonight?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Useful Answers</h3>

          <div style={boxStyle}>
            <p>I&apos;m going to stay at home.</p>
            <p>I&apos;m going to visit my parents.</p>
            <p>I think I&apos;ll stay here.</p>
            <p>Yes, I&apos;ll come with you.</p>
            <p>I&apos;m meeting a friend tonight.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Common Time Expressions
          </h2>

          <div style={boxStyle}>
            <p>tomorrow</p>
            <p>tonight</p>
            <p>this evening</p>
            <p>next week</p>
            <p>next month</p>
            <p>next year</p>
            <p>soon</p>
            <p>later</p>
            <p>in the future</p>
          </div>

          <div style={boxStyle}>
            <p>I&apos;m going to call you <strong>later</strong>.</p>
            <p>We&apos;re traveling <strong>next week</strong>.</p>
            <p>She&apos;ll probably arrive <strong>tomorrow</strong>.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I will to call you.</p>
            <p>✅ I will call you.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She going to study tonight.</p>
            <p>✅ She is going to study tonight.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am going to studying.</p>
            <p>✅ I am going to study.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I will going to travel.</p>
            <p>✅ I am going to travel.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Tomorrow I meet my friend.</p>
            <p>✅ Tomorrow I am meeting my friend.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences with the correct future form.
          </p>

          <div style={boxStyle}>
            <p>1. I think it ______ rain tomorrow. (will)</p>
            <p>2. She ______ going to start a new job. (be)</p>
            <p>3. Look at those clouds! It ______ going to rain. (be)</p>
            <p>4. A: I&apos;m thirsty. B: I ______ get you some water. (will)</p>
            <p>5. We ______ meeting our friends tonight. (be)</p>
            <p>6. They ______ going to travel next month. (be)</p>
            <p>7. I promise I ______ help you. (will)</p>
            <p>8. What ______ you going to do this weekend? (be)</p>
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
            <p>1. will</p>
            <p>2. is</p>
            <p>3. is</p>
            <p>4. will</p>
            <p>5. are</p>
            <p>6. are</p>
            <p>7. will</p>
            <p>8. are</p>
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
            <li>Use will for quick decisions and many predictions.</li>
            <li>Use going to for plans and intentions.</li>
            <li>Use going to for predictions based on present evidence.</li>
            <li>Use Present Continuous for arranged future plans.</li>
            <li>Remember: will + base verb.</li>
            <li>Remember: going to + base verb.</li>
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
            href="/resources/grammar/a2/comparatives-superlatives"
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
            Next: Comparatives & Superlatives →
          </Link>
        </div>
      </div>
    </main>
  );
}