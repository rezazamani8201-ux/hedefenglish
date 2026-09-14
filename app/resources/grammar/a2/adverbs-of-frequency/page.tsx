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

export default function AdverbsOfFrequencyPage() {
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
            Adverbs of Frequency
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use always, usually, often, sometimes, rarely, and
            never to describe how frequently things happen.
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
            <li>Understand what adverbs of frequency are.</li>
            <li>Learn the most common adverbs of frequency.</li>
            <li>Use adverbs correctly with main verbs.</li>
            <li>Use adverbs correctly with the verb to be.</li>
            <li>Ask and answer questions about frequency.</li>
            <li>Talk about daily habits and routines.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Are Adverbs of Frequency?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Adverbs of frequency tell us <strong>how often</strong> something
            happens.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "18px",
            }}
          >
            <strong>Question:</strong>
            <p style={{ marginBottom: 0, marginTop: "10px" }}>
              How often do you do something?
            </p>
          </div>

          <div style={boxStyle}>
            <p>I always drink coffee in the morning.</p>
            <p>She usually walks to work.</p>
            <p>They sometimes eat at restaurants.</p>
            <p>He never watches TV.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Common Adverbs of Frequency
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            These adverbs show different levels of frequency.
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
                    Adverb
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Approximate Frequency
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
                    Always
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    100%
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I always get up early.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Usually
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Very often
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    She usually walks to work.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Often
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Frequently
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    We often eat together.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Sometimes
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Occasionally
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    I sometimes work late.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Rarely
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Not often
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    He rarely eats fast food.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    Never
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    0%
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    They never smoke.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Position with Main Verbs
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With most main verbs, the adverb of frequency usually comes
            <strong> before the main verb</strong>.
          </p>

          <div style={boxStyle}>
            <p>I always drink tea.</p>
            <p>She usually gets up early.</p>
            <p>We often go shopping.</p>
            <p>They sometimes play tennis.</p>
            <p>He rarely watches TV.</p>
            <p>I never eat breakfast at work.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Pattern:</strong>
            <p style={{ marginBottom: 0 }}>
              Subject + adverb + main verb
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Position with the Verb To Be
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With <strong>am, is, and are</strong>, the adverb usually comes
            <strong> after the verb to be</strong>.
          </p>

          <div style={boxStyle}>
            <p>I am always tired after work.</p>
            <p>She is usually happy.</p>
            <p>He is often late.</p>
            <p>We are sometimes busy.</p>
            <p>They are rarely at home.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Pattern:</strong>
            <p style={{ marginBottom: 0 }}>
              Subject + be + adverb
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Questions About Frequency
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We often use <strong>How often</strong> to ask about frequency.
          </p>

          <div style={boxStyle}>
            <p>How often do you exercise?</p>
            <p>How often does she go shopping?</p>
            <p>How often do they visit their parents?</p>
            <p>How often does he watch TV?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Possible Answers</h3>

          <div style={boxStyle}>
            <p>I always exercise in the morning.</p>
            <p>I usually exercise three times a week.</p>
            <p>I sometimes exercise at the weekend.</p>
            <p>I rarely exercise.</p>
            <p>I never exercise.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Sometimes
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Sometimes</strong> is flexible. It can appear at the
            beginning, middle, or end of a sentence.
          </p>

          <div style={boxStyle}>
            <p>Sometimes I walk to work.</p>
            <p>I sometimes walk to work.</p>
            <p>I walk to work sometimes.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Frequency Expressions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can also use expressions such as <strong>every day</strong>,
            <strong> once a week</strong>, and
            <strong> twice a month</strong>.
          </p>

          <div style={boxStyle}>
            <p>every day</p>
            <p>every week</p>
            <p>every month</p>
            <p>once a day</p>
            <p>once a week</p>
            <p>twice a month</p>
            <p>three times a week</p>
            <p>every weekend</p>
          </div>

          <div style={boxStyle}>
            <p>I exercise every day.</p>
            <p>She goes shopping once a week.</p>
            <p>We visit our grandparents twice a month.</p>
            <p>They play football three times a week.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Adverbs in Daily Routines
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Adverbs of frequency are especially useful when talking about
            habits and routines.
          </p>

          <div style={boxStyle}>
            <p>I always wake up at 7 o&apos;clock.</p>
            <p>I usually have breakfast at home.</p>
            <p>I often take the bus to work.</p>
            <p>I sometimes meet my friends after work.</p>
            <p>I rarely go out on weekdays.</p>
            <p>I never go to bed late on Monday.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I drink always coffee.</p>
            <p>✅ I always drink coffee.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She usually is tired.</p>
            <p>✅ She is usually tired.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He never doesn't eat breakfast.</p>
            <p>✅ He never eats breakfast.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am always go to work early.</p>
            <p>✅ I always go to work early.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How often you go shopping?</p>
            <p>✅ How often do you go shopping?</p>
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
            <p>1. I ______ drink coffee in the morning. (always / am)</p>
            <p>2. She is ______ late for work. (usually / usually is)</p>
            <p>3. They ______ go to the cinema. (sometimes / are sometimes)</p>
            <p>4. He ______ eats fast food. (rarely / is rarely)</p>
            <p>5. We ______ watch TV after dinner. (often / are often)</p>
            <p>6. I ______ go to bed early. (never / am never)</p>
            <p>7. ______ do you exercise? (How often / How many)</p>
            <p>8. She goes shopping ______ a week. (once / always)</p>
            <p>9. We visit our grandparents ______ a month. (twice / never)</p>
            <p>10. He ______ plays football on Sundays. (usually / is usually)</p>
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
            <p>1. always</p>
            <p>2. usually</p>
            <p>3. sometimes</p>
            <p>4. rarely</p>
            <p>5. often</p>
            <p>6. never</p>
            <p>7. How often</p>
            <p>8. once</p>
            <p>9. twice</p>
            <p>10. usually</p>
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
            <li>Adverbs of frequency tell us how often something happens.</li>
            <li>Common examples are always, usually, often, sometimes, rarely, and never.</li>
            <li>With most main verbs, the adverb comes before the verb.</li>
            <li>With the verb to be, the adverb usually comes after am, is, or are.</li>
            <li>Use “How often...?” to ask about frequency.</li>
            <li>Sometimes can appear in different positions.</li>
            <li>Frequency expressions include once, twice, and three times.</li>
            <li>These expressions are useful for talking about habits and routines.</li>
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
            href="/resources/grammar/a2/everyday-situations"
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
            Next: Everyday Situations →
          </Link>
        </div>
      </div>
    </main>
  );
}