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

export default function OpinionsPreferencesPage() {
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
            Opinions & Preferences
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to express opinions, talk about preferences, agree or
            disagree politely, and explain what you like and dislike in
            everyday conversations.
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
            <li>Express your opinions clearly.</li>
            <li>Talk about your likes and dislikes.</li>
            <li>Ask other people about their preferences.</li>
            <li>Agree and disagree politely.</li>
            <li>Give simple reasons for your opinions.</li>
            <li>Keep a conversation going by asking follow-up questions.</li>
          </ul>
        </section>

        {/* Opinion Vocabulary */}
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
              ["opinion", "what you think about something"],
              ["preference", "something you like or choose more than another"],
              ["favorite", "the one you like more than all the others"],
              ["enjoy", "to like doing or experiencing something"],
              ["prefer", "to like one thing more than another"],
              ["dislike", "to not like something"],
              ["agree", "to have the same opinion"],
              ["disagree", "to have a different opinion"],
              ["interesting", "something that makes you curious or interested"],
              ["boring", "not interesting or exciting"],
              ["useful", "helpful or practical"],
              ["important", "having a lot of value or meaning"],
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

        {/* Expressing Opinions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Expressing Opinions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use these expressions when you want to tell someone what you
            think.
          </p>

          <div style={boxStyle}>
            <p>I think it&apos;s a good idea.</p>
            <p>I think this restaurant is excellent.</p>
            <p>I don&apos;t think it&apos;s very useful.</p>
            <p>In my opinion, this book is interesting.</p>
            <p>I believe this is a better option.</p>
            <p>For me, comfort is very important.</p>
          </div>
        </section>

        {/* Preferences */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Preferences
          </h2>

          <div style={boxStyle}>
            <p>I like tea.</p>
            <p>I really like listening to music.</p>
            <p>I love traveling.</p>
            <p>I don&apos;t like crowded places.</p>
            <p>I hate waiting in long lines.</p>
            <p>I prefer tea to coffee.</p>
            <p>I prefer staying at home to going out.</p>
          </div>
        </section>

        {/* Listening 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Weekend Plans
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and focus on how the speakers
            express opinions and preferences.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Anna:</strong> What do you usually do at the weekend?
            </p>

            <p>
              <strong>Ben:</strong> I usually meet my friends or watch a
              movie.
            </p>

            <p>
              <strong>Anna:</strong> Do you prefer watching movies at home or
              at the cinema?
            </p>

            <p>
              <strong>Ben:</strong> I prefer watching them at home. It&apos;s
              more comfortable.
            </p>

            <p>
              <strong>Anna:</strong> Really? I prefer the cinema.
            </p>

            <p>
              <strong>Ben:</strong> Why?
            </p>

            <p>
              <strong>Anna:</strong> I love the big screen and the sound.
            </p>

            <p>
              <strong>Ben:</strong> That makes sense. But I don&apos;t like
              crowded cinemas.
            </p>

            <p>
              <strong>Anna:</strong> Yes, that can be annoying.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What does Ben usually do at the weekend?</p>
            <p>2. Where does Ben prefer watching movies?</p>
            <p>3. Why does Ben prefer watching movies at home?</p>
            <p>4. Where does Anna prefer watching movies?</p>
            <p>5. What does Ben dislike about cinemas?</p>
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
            <p>1. He meets his friends or watches a movie.</p>
            <p>2. He prefers watching movies at home.</p>
            <p>3. Because it is more comfortable.</p>
            <p>4. She prefers watching movies at the cinema.</p>
            <p>5. He dislikes crowded cinemas.</p>
          </div>
        </section>

        {/* Asking for Opinions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Opinions
          </h2>

          <div style={boxStyle}>
            <p>What do you think?</p>
            <p>What do you think about this?</p>
            <p>What&apos;s your opinion?</p>
            <p>Do you like it?</p>
            <p>How do you feel about it?</p>
            <p>Which one do you prefer?</p>
            <p>Would you rather stay home or go out?</p>
          </div>
        </section>

        {/* Agreeing */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Agreeing With Someone
          </h2>

          <div style={boxStyle}>
            <p>I agree.</p>
            <p>I completely agree.</p>
            <p>That&apos;s true.</p>
            <p>You&apos;re right.</p>
            <p>I think so too.</p>
            <p>Exactly.</p>
            <p>That makes sense.</p>
          </div>
        </section>

        {/* Disagreeing */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Disagreeing Politely
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When you disagree, it is often better to use a polite expression.
          </p>

          <div style={boxStyle}>
            <p>I&apos;m not sure I agree.</p>
            <p>I see your point, but I think differently.</p>
            <p>I understand, but I prefer...</p>
            <p>Maybe, but I think...</p>
            <p>I&apos;m afraid I disagree.</p>
          </div>
        </section>

        {/* Listening 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Choosing a Restaurant
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Tom:</strong> Where should we have dinner tonight?
            </p>

            <p>
              <strong>Sara:</strong> How about the Italian restaurant near the
              park?
            </p>

            <p>
              <strong>Tom:</strong> I like Italian food, but I think it&apos;s
              a little expensive.
            </p>

            <p>
              <strong>Sara:</strong> That&apos;s true. What about the new
              restaurant on King Street?
            </p>

            <p>
              <strong>Tom:</strong> I&apos;ve heard it&apos;s good. Do you
              prefer that one?
            </p>

            <p>
              <strong>Sara:</strong> Yes. I think it has better prices.
            </p>

            <p>
              <strong>Tom:</strong> Okay. I agree. Let&apos;s try it.
            </p>
          </div>
        </section>

        {/* Listening Questions 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Which restaurant does Sara suggest first?</p>
            <p>2. What does Tom think about its price?</p>
            <p>3. Which restaurant does Sara suggest next?</p>
            <p>4. Why does Sara prefer the second restaurant?</p>
            <p>5. What do they finally decide?</p>
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
            <p>1. The Italian restaurant near the park.</p>
            <p>2. He thinks it is a little expensive.</p>
            <p>3. The new restaurant on King Street.</p>
            <p>4. She thinks it has better prices.</p>
            <p>5. They decide to try the new restaurant.</p>
          </div>
        </section>

        {/* Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: Prefer
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>prefer</strong> when you like one thing more than
            another.
          </p>

          <div style={boxStyle}>
            <p>I prefer tea to coffee.</p>
            <p>She prefers summer to winter.</p>
            <p>We prefer eating at home to eating out.</p>
            <p>He prefers the blue one to the red one.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            You can also ask:
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <p>Which do you prefer?</p>
            <p>Do you prefer tea or coffee?</p>
            <p>Would you prefer to stay home or go out?</p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Answer these questions using complete sentences and give a reason
            whenever possible.
          </p>

          <div style={boxStyle}>
            <p>1. What is your favorite type of food?</p>
            <p>2. Do you prefer tea or coffee? Why?</p>
            <p>3. Do you prefer watching movies at home or at the cinema?</p>
            <p>4. Do you like living in a big city?</p>
            <p>5. What kind of music do you enjoy?</p>
            <p>6. Do you prefer summer or winter?</p>
            <p>7. What is one thing you dislike?</p>
            <p>8. What is your opinion about online learning?</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              I prefer studying in the morning because I feel more focused.
              For me, mornings are quiet and peaceful. I don&apos;t really
              like studying late at night because I get tired.
            </p>

            <p>
              I also prefer learning English online because I can study at
              home. In my opinion, online learning is convenient and flexible.
            </p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Weekend Activity
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You want to go to the cinema.
            </p>

            <p>
              <strong>Student B:</strong> You prefer going to a café.
            </p>

            <p>
              Discuss your options and decide what to do together.
            </p>

            <p>
              <strong>Use:</strong>
            </p>

            <p>What do you think?</p>
            <p>I prefer...</p>
            <p>How about...?</p>
            <p>I agree.</p>
            <p>I&apos;m not sure I agree.</p>
            <p>That sounds good.</p>
          </div>
        </section>

        {/* Opinion Challenge */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Opinion Challenge
          </h2>

          <div style={boxStyle}>
            <p>
              Give your opinion about each statement. Then give one reason.
            </p>

            <p>1. Learning English online is better than learning in a classroom.</p>
            <p>2. Living in a big city is better than living in a small town.</p>
            <p>3. Watching movies is a good way to learn English.</p>
            <p>4. Everyone should learn another language.</p>
            <p>5. Traveling is the best way to learn about other cultures.</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. In my ______, this is a good idea.
              <br />
              <strong>(opinion / preference)</strong>
            </p>

            <p>
              2. I ______ tea to coffee.
              <br />
              <strong>(prefer / agree)</strong>
            </p>

            <p>
              3. I ______ with you.
              <br />
              <strong>(agree / prefer)</strong>
            </p>

            <p>
              4. What do you ______ about this movie?
              <br />
              <strong>(think / prefer)</strong>
            </p>

            <p>
              5. I don&apos;t really ______ crowded places.
              <br />
              <strong>(like / agree)</strong>
            </p>

            <p>
              6. I&apos;m not sure I ______.
              <br />
              <strong>(agree / prefer)</strong>
            </p>

            <p>
              7. Which one do you ______?
              <br />
              <strong>(prefer / think)</strong>
            </p>

            <p>
              8. I think so ______.
              <br />
              <strong>(too / to)</strong>
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
            <p>1. opinion</p>
            <p>2. prefer</p>
            <p>3. agree</p>
            <p>4. think</p>
            <p>5. like</p>
            <p>6. agree</p>
            <p>7. prefer</p>
            <p>8. too</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I prefer tea than coffee.</p>
            <p>✅ I prefer tea to coffee.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am agree with you.</p>
            <p>✅ I agree with you.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I prefer to tea.</p>
            <p>✅ I prefer tea.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What you think about it?</p>
            <p>✅ What do you think about it?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I prefer stay at home.</p>
            <p>✅ I prefer staying at home.</p>
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
            <li>Use “I think...” to express a simple opinion.</li>
            <li>Use “In my opinion...” to introduce your viewpoint.</li>
            <li>Use “I prefer A to B” to compare preferences.</li>
            <li>Use “What do you think?” to ask for an opinion.</li>
            <li>Use “I agree” when you have the same opinion.</li>
            <li>Use polite expressions when you disagree.</li>
            <li>Give a reason to make your opinion clearer.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Sharing opinions and preferences is an important part of everyday
            English communication.
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
            href="/resources/listening-speaking/a2/describing-people-places"
            style={buttonStyle}
          >
            ← Describing People & Places
          </Link>

          <Link
            href="/resources/listening-speaking/a2/making-suggestions"
            style={buttonStyle}
          >
            Next: Making Suggestions →
          </Link>
        </div>
      </div>
    </main>
  );
}