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
          href="/resources/listening-speaking/a2"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← A2 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
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
            LISTENING & SPEAKING — A2
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
            Learn how to make suggestions, respond to ideas, accept or reject
            suggestions politely, and make decisions together in everyday
            English conversations.
          </p>
        </section>

        {/* Learning Goals */}
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
            <li>Make simple suggestions in everyday situations.</li>
            <li>Ask other people for ideas.</li>
            <li>Accept suggestions naturally.</li>
            <li>Reject suggestions politely.</li>
            <li>Compare different options.</li>
            <li>Reach a decision together.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["suggestion", "an idea about what someone could do"],
              ["suggest", "to give someone an idea"],
              ["idea", "a thought or plan"],
              ["option", "one possible choice"],
              ["choice", "something you decide to do"],
              ["plan", "something you intend to do"],
              ["activity", "something you do for work or enjoyment"],
              ["recommend", "to say that something is a good choice"],
              ["decide", "to choose something after thinking about it"],
              ["agree", "to have the same opinion"],
              ["accept", "to say yes to an idea or offer"],
              ["reject", "to say no to an idea or offer"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{word}</strong>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Making Suggestions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Suggestions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            There are several natural ways to make suggestions in English.
          </p>

          <div style={boxStyle}>
            <p>How about going to the cinema?</p>
            <p>What about having dinner together?</p>
            <p>Why don&apos;t we watch a movie?</p>
            <p>Let&apos;s go to the park.</p>
            <p>We could visit the museum.</p>
            <p>Maybe we can meet tomorrow.</p>
            <p>Would you like to go for a walk?</p>
          </div>
        </section>

        {/* Suggestion Patterns */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Suggestion Patterns
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>How about + -ing?</strong>
            </p>
            <p>How about going to the beach?</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>What about + -ing?</strong>
            </p>
            <p>What about having lunch together?</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Why don&apos;t we + base verb?</strong>
            </p>
            <p>Why don&apos;t we take a taxi?</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>Let&apos;s + base verb</strong>
            </p>
            <p>Let&apos;s meet at seven.</p>
          </div>

          <div style={boxStyle}>
            <p>
              <strong>We could + base verb</strong>
            </p>
            <p>We could order pizza.</p>
          </div>
        </section>

        {/* Listening Practice 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Weekend Plans
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation and notice the different ways the speakers
            make suggestions.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Emma:</strong> What should we do this Saturday?
            </p>

            <p>
              <strong>Jack:</strong> How about going hiking?
            </p>

            <p>
              <strong>Emma:</strong> That sounds good, but I think it might
              rain.
            </p>

            <p>
              <strong>Jack:</strong> You&apos;re right. What about going to
              the cinema?
            </p>

            <p>
              <strong>Emma:</strong> That&apos;s a good idea.
            </p>

            <p>
              <strong>Jack:</strong> We could have dinner after the movie.
            </p>

            <p>
              <strong>Emma:</strong> Perfect. Let&apos;s do that.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What does Jack suggest first?</p>
            <p>2. Why doesn&apos;t Emma want to go hiking?</p>
            <p>3. What does Jack suggest next?</p>
            <p>4. What do they decide to do after the movie?</p>
            <p>5. Does Emma like the final plan?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. He suggests going hiking.</p>
            <p>2. Because she thinks it might rain.</p>
            <p>3. He suggests going to the cinema.</p>
            <p>4. They decide to have dinner.</p>
            <p>5. Yes, she likes the final plan.</p>
          </div>
        </section>

        {/* Responding to Suggestions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Responding to Suggestions
          </h2>

          <h3 style={{ color: "#173b78" }}>Accepting a Suggestion</h3>

          <div style={boxStyle}>
            <p>That sounds good.</p>
            <p>That&apos;s a great idea.</p>
            <p>Good idea!</p>
            <p>Sure, why not?</p>
            <p>I&apos;d love to.</p>
            <p>That sounds perfect.</p>
            <p>Yes, let&apos;s do that.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Rejecting a Suggestion Politely</h3>

          <div style={boxStyle}>
            <p>I&apos;m not sure about that.</p>
            <p>I&apos;m not sure that&apos;s a good idea.</p>
            <p>Maybe another time.</p>
            <p>I&apos;d rather do something else.</p>
            <p>That sounds nice, but I&apos;m busy.</p>
            <p>Good idea, but I&apos;m a little tired.</p>
          </div>
        </section>

        {/* Asking for Ideas */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Ideas
          </h2>

          <div style={boxStyle}>
            <p>What should we do?</p>
            <p>What can we do?</p>
            <p>Do you have any ideas?</p>
            <p>What do you suggest?</p>
            <p>Where should we go?</p>
            <p>What do you think we should do?</p>
          </div>
        </section>

        {/* Listening Practice 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Choosing a Gift
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Tom:</strong> We need to buy a birthday present for
              Sarah.
            </p>

            <p>
              <strong>Lisa:</strong> What about a book?
            </p>

            <p>
              <strong>Tom:</strong> She already has a lot of books.
            </p>

            <p>
              <strong>Lisa:</strong> How about a nice bag?
            </p>

            <p>
              <strong>Tom:</strong> That could be a good idea.
            </p>

            <p>
              <strong>Lisa:</strong> We could also buy her a gift card.
            </p>

            <p>
              <strong>Tom:</strong> I think the bag is better.
            </p>

            <p>
              <strong>Lisa:</strong> I agree. Let&apos;s get the bag.
            </p>
          </div>
        </section>

        {/* Listening Questions 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Who needs a birthday present?</p>
            <p>2. What does Lisa suggest first?</p>
            <p>3. Why doesn&apos;t Tom like the book idea?</p>
            <p>4. What other option does Lisa suggest?</p>
            <p>5. What do they finally decide to buy?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. Sarah needs a birthday present.</p>
            <p>2. She suggests a book.</p>
            <p>3. Because Sarah already has a lot of books.</p>
            <p>4. She suggests a gift card.</p>
            <p>5. They decide to buy a bag.</p>
          </div>
        </section>

        {/* Useful Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar
          </h2>

          <h3 style={{ color: "#173b78" }}>
            How About / What About
          </h3>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            After <strong>How about</strong> and <strong>What about</strong>,
            use a verb ending in <strong>-ing</strong>.
          </p>

          <div style={boxStyle}>
            <p>How about going to the beach?</p>
            <p>What about watching a movie?</p>
            <p>How about having coffee?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Why Don&apos;t We / Let&apos;s</h3>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            After <strong>Why don&apos;t we</strong> and{" "}
            <strong>Let&apos;s</strong>, use the base form of the verb.
          </p>

          <div style={boxStyle}>
            <p>Why don&apos;t we go tomorrow?</p>
            <p>Let&apos;s meet at six.</p>
            <p>Why don&apos;t we take the bus?</p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Work with a partner or answer the questions aloud.
          </p>

          <div style={boxStyle}>
            <p>1. What should you do this weekend?</p>
            <p>2. Where should you go for your next holiday?</p>
            <p>3. What can you do with your friends?</p>
            <p>4. Where should you have dinner tonight?</p>
            <p>5. What should you buy for a friend&apos;s birthday?</p>
            <p>6. What activity could you do on a rainy day?</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> What should we do this evening?
            </p>

            <p>
              <strong>B:</strong> How about going to a café?
            </p>

            <p>
              <strong>A:</strong> That sounds good, but I&apos;d rather do
              something outside.
            </p>

            <p>
              <strong>B:</strong> Okay. What about going for a walk?
            </p>

            <p>
              <strong>A:</strong> Great idea. Let&apos;s go to the park.
            </p>
          </div>
        </section>

        {/* Role Play 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Planning a Day Out
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You want to go to the cinema.
            </p>

            <p>
              <strong>Student B:</strong> You want to do something outside.
            </p>

            <p>
              Discuss different options and make a plan together.
            </p>

            <p>
              <strong>Try to use:</strong>
            </p>

            <p>How about...?</p>
            <p>What about...?</p>
            <p>Why don&apos;t we...?</p>
            <p>We could...</p>
            <p>That sounds good.</p>
            <p>I&apos;d rather...</p>
            <p>Let&apos;s...</p>
          </div>
        </section>

        {/* Role Play 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Making a Group Decision
          </h2>

          <div style={boxStyle}>
            <p>
              Imagine you and your friends have one free day.
            </p>

            <p>Choose between:</p>

            <p>• going to the beach</p>
            <p>• visiting a museum</p>
            <p>• going shopping</p>
            <p>• having a picnic</p>
            <p>• watching a movie</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Discuss the options and explain why you prefer one activity.
          </p>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. ______ going to the cinema?
              <br />
              <strong>(How about / Why)</strong>
            </p>

            <p>
              2. What ______ having dinner together?
              <br />
              <strong>(about / do)</strong>
            </p>

            <p>
              3. Why don&apos;t we ______ a taxi?
              <br />
              <strong>(take / taking)</strong>
            </p>

            <p>
              4. Let&apos;s ______ at seven.
              <br />
              <strong>(meet / meeting)</strong>
            </p>

            <p>
              5. We could ______ a movie.
              <br />
              <strong>(watch / watching)</strong>
            </p>

            <p>
              6. That ______ like a great idea.
              <br />
              <strong>(sounds / sounding)</strong>
            </p>

            <p>
              7. I&apos;d ______ do something else.
              <br />
              <strong>(rather / better)</strong>
            </p>

            <p>
              8. Do you have any ______?
              <br />
              <strong>(ideas / ideaing)</strong>
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
            <p>1. How about</p>
            <p>2. about</p>
            <p>3. take</p>
            <p>4. meet</p>
            <p>5. watch</p>
            <p>6. sounds</p>
            <p>7. rather</p>
            <p>8. ideas</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ How about go to the cinema?</p>
            <p>✅ How about going to the cinema?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Why don&apos;t we going tomorrow?</p>
            <p>✅ Why don&apos;t we go tomorrow?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Let&apos;s going to the park.</p>
            <p>✅ Let&apos;s go to the park.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What about go shopping?</p>
            <p>✅ What about going shopping?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ We could going by bus.</p>
            <p>✅ We could go by bus.</p>
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

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>Use “How about...?” to make a suggestion.</li>
            <li>Use “What about...?” to suggest an option.</li>
            <li>Use “Why don&apos;t we...?” for friendly suggestions.</li>
            <li>Use “Let&apos;s...” to suggest doing something together.</li>
            <li>Use “We could...” to suggest one possible option.</li>
            <li>Use “That sounds good” to accept a suggestion.</li>
            <li>Use polite expressions when rejecting an idea.</li>
            <li>Give a reason when explaining your preference.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Good communication means sharing ideas, listening to others, and
            making decisions together.
          </p>
        </section>

        {/* Navigation */}
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
            href="/resources/listening-speaking/a2/opinions-preferences"
            style={buttonStyle}
          >
            ← Opinions & Preferences
          </Link>

          <Link
            href="/resources/listening-speaking/a2/problems-requests"
            style={buttonStyle}
          >
            Next: Problems & Requests →
          </Link>
        </div>
      </div>
    </main>
  );
}