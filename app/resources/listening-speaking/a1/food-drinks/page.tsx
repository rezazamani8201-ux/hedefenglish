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

const phraseStyle = {
  background: "#f8fafc",
  border: "1px solid #e5eaf0",
  borderRadius: "12px",
  padding: "16px 18px",
  marginBottom: "12px",
};

export default function FoodDrinksPage() {
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
          href="/resources/listening-speaking/a1"
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
          ← A1 Listening & Speaking
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
            LISTENING & SPEAKING — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Food & Drinks
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about food and drinks, say what you like, and
            order simple meals and drinks.
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
            <li>Talk about common food and drinks.</li>
            <li>Say what you like and dislike.</li>
            <li>Ask about someone&apos;s favorite food.</li>
            <li>Order food and drinks in a simple way.</li>
            <li>Practice conversations about meals.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Food
          </h2>

          <div style={phraseStyle}>
            <strong>bread</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I eat bread for breakfast.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>rice</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I like rice.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>chicken</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              We have chicken for dinner.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>fish</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I like fish.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>eggs</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I have two eggs for breakfast.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cheese</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I like cheese.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>salad</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She has a salad for lunch.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>fruit</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Fruit is healthy.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Common Drinks
          </h2>

          <div style={phraseStyle}>
            <strong>water</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I drink water every day.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>tea</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I drink tea in the morning.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>coffee</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              He drinks coffee at work.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>milk</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The child drinks milk.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>juice</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I would like some orange juice.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Likes and Dislikes
          </h2>

          <div style={phraseStyle}>
            <strong>I like pizza.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I love chocolate.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I really like coffee.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t like fish.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t like spicy food.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite food is pizza.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite drink is tea.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Asking About Food
          </h2>

          <div style={phraseStyle}>
            <strong>What is your favorite food?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite drink?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like pizza?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like coffee?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually have for breakfast?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you want to eat?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Ordering Food and Drinks
          </h2>

          <div style={phraseStyle}>
            <strong>I&apos;d like a coffee, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have some water, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;d like a chicken sandwich.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have the menu, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Anything else?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>That&apos;s all, thank you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have the bill, please?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it in a real restaurant.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Waiter:</strong> Hello. What would you like?
            </p>

            <p>
              <strong>Anna:</strong> I&apos;d like a chicken sandwich, please.
            </p>

            <p>
              <strong>Waiter:</strong> Would you like something to drink?
            </p>

            <p>
              <strong>Anna:</strong> Yes, I&apos;d like a glass of water.
            </p>

            <p>
              <strong>Waiter:</strong> Anything else?
            </p>

            <p>
              <strong>Anna:</strong> No, that&apos;s all. Thank you.
            </p>

            <p>
              <strong>Waiter:</strong> You&apos;re welcome.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud.
          </p>

          <div style={phraseStyle}>
            <strong>What is your favorite food?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite drink?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually eat for breakfast?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like coffee?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like spicy food?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually have for dinner?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are in a restaurant. Practice ordering a meal and a
            drink.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Waiter:</strong> Hello. What would you like?
            </p>

            <p>
              <strong>You:</strong> I&apos;d like ______, please.
            </p>

            <p>
              <strong>Waiter:</strong> Would you like something to drink?
            </p>

            <p>
              <strong>You:</strong> Yes, I&apos;d like ______.
            </p>

            <p>
              <strong>Waiter:</strong> Anything else?
            </p>

            <p>
              <strong>You:</strong> No, that&apos;s all. Thank you.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>1. I ______ pizza.</p>
            <p>2. I don&apos;t ______ coffee.</p>
            <p>3. My favorite ______ is tea.</p>
            <p>4. I&apos;d ______ a glass of water, please.</p>
            <p>5. Can I have the ______, please?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>I like...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t like...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite food is...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite drink is...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;d like..., please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have...?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>That&apos;s all, thank you.</strong>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/a1/family-friends"
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
            ← Family & Friends
          </Link>

          <Link
            href="/resources/listening-speaking/a1/shopping"
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
            Next: Shopping →
          </Link>
        </div>
      </div>
    </main>
  );
}