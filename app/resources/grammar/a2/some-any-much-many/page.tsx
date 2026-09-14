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

export default function SomeAnyMuchManyPage() {
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
            Some, Any, Much & Many
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about quantities using some, any, much, and
            many in affirmative sentences, negatives, and questions.
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
            <li>Understand the difference between some and any.</li>
            <li>Use some in affirmative sentences correctly.</li>
            <li>Use any in negative sentences and questions.</li>
            <li>Use much with uncountable nouns.</li>
            <li>Use many with plural countable nouns.</li>
            <li>Ask and answer questions about quantities.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Some
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We commonly use <strong>some</strong> in affirmative sentences
            with plural countable nouns and uncountable nouns.
          </p>

          <div style={boxStyle}>
            <p>some books</p>
            <p>some apples</p>
            <p>some students</p>
            <p>some water</p>
            <p>some milk</p>
            <p>some money</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>I have some books.</p>
            <p>She bought some apples.</p>
            <p>There is some milk in the fridge.</p>
            <p>We need some information.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Any
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We commonly use <strong>any</strong> in negative sentences and
            questions.
          </p>

          <h3 style={{ color: "#173b78" }}>Negative Sentences</h3>

          <div style={boxStyle}>
            <p>I don&apos;t have any money.</p>
            <p>She doesn&apos;t have any brothers.</p>
            <p>There isn&apos;t any milk.</p>
            <p>There aren&apos;t any chairs.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>Do you have any questions?</p>
            <p>Are there any restaurants nearby?</p>
            <p>Is there any water?</p>
            <p>Does she have any children?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Some vs Any
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
                    Some
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Any
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
                    Mostly affirmative sentences
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    Mostly negatives and questions
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    I have some friends.
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    I don&apos;t have any friends.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    There is some coffee.
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderTop: "1px solid #e5eaf0",
                    }}
                  >
                    Is there any coffee?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Some in Questions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can also use <strong>some</strong> in questions when we are
            offering something or asking for something politely.
          </p>

          <div style={boxStyle}>
            <p>Would you like some coffee?</p>
            <p>Would you like some cake?</p>
            <p>Can I have some water, please?</p>
            <p>Could I have some information?</p>
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
              In these situations, the speaker expects or hopes for a positive
              answer.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Much
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>much</strong> with uncountable nouns.
          </p>

          <div style={boxStyle}>
            <p>much water</p>
            <p>much money</p>
            <p>much time</p>
            <p>much information</p>
            <p>much work</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>How much water do you drink?</p>
            <p>How much money do you need?</p>
            <p>How much time do we have?</p>
            <p>How much information do you need?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative Sentences</h3>

          <div style={boxStyle}>
            <p>I don&apos;t have much time.</p>
            <p>She doesn&apos;t have much money.</p>
            <p>We don&apos;t need much information.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Many
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>many</strong> with plural countable nouns.
          </p>

          <div style={boxStyle}>
            <p>many books</p>
            <p>many students</p>
            <p>many people</p>
            <p>many cars</p>
            <p>many questions</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Questions</h3>

          <div style={boxStyle}>
            <p>How many books do you have?</p>
            <p>How many students are there?</p>
            <p>How many people came to the party?</p>
            <p>How many questions are on the test?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative Sentences</h3>

          <div style={boxStyle}>
            <p>I don&apos;t have many friends.</p>
            <p>There aren&apos;t many people here.</p>
            <p>She doesn&apos;t have many books.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Much vs Many
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
            }}
          >
            <div style={boxStyle}>
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                MUCH
              </h3>
              <p>Uncountable nouns</p>
              <p>much water</p>
              <p>much money</p>
              <p>much time</p>
              <p>much work</p>
            </div>

            <div style={boxStyle}>
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                MANY
              </h3>
              <p>Plural countable nouns</p>
              <p>many books</p>
              <p>many people</p>
              <p>many students</p>
              <p>many cars</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. A Lot of
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>A lot of</strong> can be used with both plural countable
            nouns and uncountable nouns. It is very common in affirmative
            sentences.
          </p>

          <div style={boxStyle}>
            <p>She has a lot of friends.</p>
            <p>We have a lot of books.</p>
            <p>There is a lot of water.</p>
            <p>He has a lot of money.</p>
            <p>They have a lot of work.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. How Much and How Many
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>How much</strong> for uncountable nouns and
            <strong> How many</strong> for plural countable nouns.
          </p>

          <div style={boxStyle}>
            <p>
              How much <strong>water</strong> do you drink?
            </p>
            <p>
              How much <strong>money</strong> do you have?
            </p>
            <p>
              How much <strong>time</strong> do we have?
            </p>
          </div>

          <div style={boxStyle}>
            <p>
              How many <strong>books</strong> do you have?
            </p>
            <p>
              How many <strong>students</strong> are there?
            </p>
            <p>
              How many <strong>apples</strong> did you buy?
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Common Expressions
          </h2>

          <div style={boxStyle}>
            <p>a lot of time</p>
            <p>a lot of money</p>
            <p>a lot of people</p>
            <p>a lot of work</p>
            <p>not much time</p>
            <p>not many people</p>
            <p>some information</p>
            <p>any questions</p>
          </div>

          <div style={boxStyle}>
            <p>Do you have any questions?</p>
            <p>I need some information.</p>
            <p>We don&apos;t have much time.</p>
            <p>There aren&apos;t many people here.</p>
            <p>She has a lot of experience.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I don&apos;t have some money.</p>
            <p>✅ I don&apos;t have any money.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How much books do you have?</p>
            <p>✅ How many books do you have?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How many money do you need?</p>
            <p>✅ How much money do you need?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ There are much students here.</p>
            <p>✅ There are many students here.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ There is many water in the bottle.</p>
            <p>✅ There is much water in the bottle.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have many money.</p>
            <p>✅ I have a lot of money.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the correct word or expression.
          </p>

          <div style={boxStyle}>
            <p>1. I have ______ friends. (some / any)</p>
            <p>2. I don&apos;t have ______ money. (some / any)</p>
            <p>3. How ______ books do you have? (much / many)</p>
            <p>4. How ______ water do you drink? (much / many)</p>
            <p>5. There aren&apos;t ______ people here. (much / many)</p>
            <p>6. We don&apos;t have ______ time. (much / many)</p>
            <p>7. Would you like ______ coffee? (some / any)</p>
            <p>8. Are there ______ restaurants nearby? (some / any)</p>
            <p>9. She has ______ books. (a lot of / much)</p>
            <p>10. He doesn&apos;t have ______ questions. (much / many)</p>
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
            <p>1. some</p>
            <p>2. any</p>
            <p>3. many</p>
            <p>4. much</p>
            <p>5. many</p>
            <p>6. much</p>
            <p>7. some</p>
            <p>8. any</p>
            <p>9. a lot of</p>
            <p>10. many</p>
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
            <li>Use some mainly in affirmative sentences.</li>
            <li>Use any mainly in negative sentences and questions.</li>
            <li>Use some in offers and polite requests.</li>
            <li>Use much with uncountable nouns.</li>
            <li>Use many with plural countable nouns.</li>
            <li>Use a lot of with both countable and uncountable nouns.</li>
            <li>Use How much for uncountable nouns.</li>
            <li>Use How many for plural countable nouns.</li>
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
            href="/resources/grammar/a2/present-perfect"
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
            Next: Present Perfect →
          </Link>
        </div>
      </div>
    </main>
  );
}