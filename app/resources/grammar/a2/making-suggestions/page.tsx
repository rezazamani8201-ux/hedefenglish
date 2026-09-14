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

export default function MakingSuggestionsPage() {
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
            ...buttonStyle,
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
            Making Suggestions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to make suggestions, invite people to do things, accept
            ideas, and respond politely when you agree or disagree.
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
            <li>Make simple suggestions.</li>
            <li>Suggest activities and plans.</li>
            <li>Invite someone to do something.</li>
            <li>Accept or reject suggestions politely.</li>
            <li>Ask other people for their ideas.</li>
            <li>Use common expressions for everyday conversations.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Using “Let&apos;s”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use <strong>Let&apos;s + base verb</strong> to make a suggestion
            about doing something together.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginBottom: "18px",
            }}
          >
            <strong>Structure:</strong>
            <p style={{ marginBottom: 0 }}>
              Let&apos;s + base verb
            </p>
          </div>

          <div style={boxStyle}>
            <p>Let&apos;s go to the cinema.</p>
            <p>Let&apos;s have lunch.</p>
            <p>Let&apos;s study together.</p>
            <p>Let&apos;s watch a movie.</p>
            <p>Let&apos;s take a taxi.</p>
            <p>Let&apos;s meet at 7 o&apos;clock.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative Suggestion</h3>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>Let&apos;s not + base verb</strong> when you suggest
            that you and another person should not do something.
          </p>

          <div style={boxStyle}>
            <p>Let&apos;s not go there.</p>
            <p>Let&apos;s not be late.</p>
            <p>Let&apos;s not spend too much money.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Using “Why don&apos;t we...?”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Why don&apos;t we...?</strong> is a very common and natural
            way to make a suggestion.
          </p>

          <div style={boxStyle}>
            <p>Why don&apos;t we go for a walk?</p>
            <p>Why don&apos;t we have dinner together?</p>
            <p>Why don&apos;t we take the bus?</p>
            <p>Why don&apos;t we study at the library?</p>
            <p>Why don&apos;t we meet tomorrow?</p>
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
              Use the base form of the verb after <strong>Why don&apos;t we</strong>.
            </p>
            <p style={{ marginBottom: 0 }}>
              Why don&apos;t we <strong>go</strong>?
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Using “How about...?”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use <strong>How about...?</strong> to suggest an idea or
            activity.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginBottom: "18px",
            }}
          >
            <strong>Structure:</strong>
            <p style={{ marginBottom: 0 }}>
              How about + noun?
            </p>
            <p style={{ marginBottom: 0 }}>
              How about + verb-ing?
            </p>
          </div>

          <div style={boxStyle}>
            <p>How about pizza?</p>
            <p>How about a coffee?</p>
            <p>How about going to the beach?</p>
            <p>How about watching a movie?</p>
            <p>How about meeting at 6?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Using “What about...?”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>What about...?</strong> is similar to <strong>How about...?</strong>
            and is often used to suggest another option.
          </p>

          <div style={boxStyle}>
            <p>What about going by train?</p>
            <p>What about Saturday?</p>
            <p>What about having dinner at home?</p>
            <p>What about a different restaurant?</p>
            <p>What about taking a break?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Using “We could...”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>We could + base verb</strong> when you want to offer a
            possible idea or option.
          </p>

          <div style={boxStyle}>
            <p>We could go to the park.</p>
            <p>We could order pizza.</p>
            <p>We could take a taxi.</p>
            <p>We could study together.</p>
            <p>We could visit the museum.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Meaning:</strong>
            <p style={{ marginBottom: 0 }}>
              &quot;We could...&quot; means that something is one possible
              choice.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Asking for Suggestions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            You can also ask another person for ideas.
          </p>

          <div style={boxStyle}>
            <p>What should we do?</p>
            <p>Where should we go?</p>
            <p>What do you suggest?</p>
            <p>Do you have any ideas?</p>
            <p>What do you think we should do?</p>
            <p>Where do you think we should eat?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Accepting a Suggestion
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When you like someone&apos;s idea, you can respond positively.
          </p>

          <div style={boxStyle}>
            <p>That&apos;s a good idea.</p>
            <p>Sounds good.</p>
            <p>Great idea!</p>
            <p>That sounds great.</p>
            <p>Sure!</p>
            <p>Why not?</p>
            <p>I&apos;d love to.</p>
            <p>That works for me.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> How about going to the cinema tonight?
            </p>
            <p>
              <strong>B:</strong> Sounds good!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Politely Rejecting a Suggestion
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            If you do not like an idea, you can disagree politely.
          </p>

          <div style={boxStyle}>
            <p>I&apos;m not sure.</p>
            <p>I&apos;m afraid I can&apos;t.</p>
            <p>Maybe another time.</p>
            <p>I&apos;d rather stay home.</p>
            <p>I don&apos;t think that&apos;s a good idea.</p>
            <p>Sorry, I&apos;m busy tonight.</p>
            <p>That sounds nice, but I can&apos;t.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Why don&apos;t we go hiking tomorrow?
            </p>
            <p>
              <strong>B:</strong> That sounds nice, but I&apos;m busy tomorrow.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Suggestions with “Should”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use <strong>should</strong> to make a suggestion or give
            advice.
          </p>

          <div style={boxStyle}>
            <p>We should leave early.</p>
            <p>We should book a hotel.</p>
            <p>We should take an umbrella.</p>
            <p>We should call them first.</p>
            <p>We should check the train times.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Structure:</strong>
            <p style={{ marginBottom: 0 }}>
              Subject + should + base verb
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Making Suggestions in Conversations
          </h2>

          <h3 style={{ color: "#173b78" }}>Conversation 1</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> What should we do this evening?
            </p>
            <p>
              <strong>B:</strong> How about going to a restaurant?
            </p>
            <p>
              <strong>A:</strong> Great idea!
            </p>
            <p>
              <strong>B:</strong> Which restaurant should we choose?
            </p>
            <p>
              <strong>A:</strong> We could try the new Italian restaurant.
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Conversation 2</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> I&apos;m tired.
            </p>
            <p>
              <strong>B:</strong> Why don&apos;t we take a short break?
            </p>
            <p>
              <strong>A:</strong> Sounds good.
            </p>
            <p>
              <strong>B:</strong> How about having some coffee?
            </p>
            <p>
              <strong>A:</strong> Sure!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Suggestion Expressions at a Glance
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
                <tr style={{ background: "#eef4ff" }}>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Expression
                  </th>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    Let&apos;s...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    Let&apos;s go out.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    Why don&apos;t we...?
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    Why don&apos;t we take the bus?
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    How about...?
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    How about going tomorrow?
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    What about...?
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    What about dinner?
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    We could...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    We could visit the museum.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    We should...
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    We should leave early.
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
            <p>❌ Let&apos;s to go home.</p>
            <p>✅ Let&apos;s go home.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Why don&apos;t we going out?</p>
            <p>✅ Why don&apos;t we go out?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How about go to the cinema?</p>
            <p>✅ How about going to the cinema?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What about to have dinner?</p>
            <p>✅ What about having dinner?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ We could to take a taxi.</p>
            <p>✅ We could take a taxi.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ We should to leave early.</p>
            <p>✅ We should leave early.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the best answer.
          </p>

          <div style={boxStyle}>
            <p>
              1. ______ go to the cinema tonight.
              <br />
              (Let&apos;s / Let&apos;s to)
            </p>

            <p>
              2. Why don&apos;t we ______ a taxi?
              <br />
              (take / taking)
            </p>

            <p>
              3. How about ______ pizza?
              <br />
              (order / ordering)
            </p>

            <p>
              4. We could ______ at home.
              <br />
              (stay / staying)
            </p>

            <p>
              5. We should ______ early.
              <br />
              (leave / leaving)
            </p>

            <p>
              6. What about ______ to the beach?
              <br />
              (going / go)
            </p>

            <p>
              7. Which sentence is a suggestion?
              <br />
              (Let&apos;s have lunch. / We had lunch.)
            </p>

            <p>
              8. Which response accepts a suggestion?
              <br />
              (Sounds good! / Maybe another time.)
            </p>

            <p>
              9. Which response politely rejects a suggestion?
              <br />
              (Great idea! / I&apos;m afraid I can&apos;t.)
            </p>

            <p>
              10. Complete: “What ______ we do?”
              <br />
              (should / are)
            </p>
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
            <p>1. Let&apos;s</p>
            <p>2. take</p>
            <p>3. ordering</p>
            <p>4. stay</p>
            <p>5. leave</p>
            <p>6. going</p>
            <p>7. Let&apos;s have lunch.</p>
            <p>8. Sounds good!</p>
            <p>9. I&apos;m afraid I can&apos;t.</p>
            <p>10. should</p>
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
            <li>
              Use <strong>Let&apos;s + base verb</strong> for suggestions.
            </li>
            <li>
              Use <strong>Why don&apos;t we + base verb?</strong> for suggestions.
            </li>
            <li>
              Use <strong>How about + noun / verb-ing?</strong>.
            </li>
            <li>
              Use <strong>What about + noun / verb-ing?</strong>.
            </li>
            <li>
              Use <strong>We could + base verb</strong> for possible ideas.
            </li>
            <li>
              Use <strong>should + base verb</strong> for suggestions and advice.
            </li>
            <li>
              Say <strong>Sounds good!</strong> when you agree with an idea.
            </li>
            <li>
              Say <strong>I&apos;m afraid I can&apos;t.</strong> when you need to
              reject an idea politely.
            </li>
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
            href="/resources/grammar/a2/travel-shopping"
            style={buttonStyle}
          >
            ← Travel & Shopping
          </Link>

          <Link
            href="/resources/grammar/a2/giving-opinions"
            style={buttonStyle}
          >
            Next: Giving Opinions →
          </Link>
        </div>
      </div>
    </main>
  );
}