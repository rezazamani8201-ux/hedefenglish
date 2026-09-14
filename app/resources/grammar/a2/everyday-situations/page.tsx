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

export default function EverydaySituationsPage() {
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
            Everyday Situations
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn useful English for common everyday situations such as
            greetings, asking for help, making requests, shopping, ordering
            food, and talking about plans.
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
            <li>Use English confidently in common daily situations.</li>
            <li>Make polite requests.</li>
            <li>Ask for information and clarification.</li>
            <li>Respond naturally in everyday conversations.</li>
            <li>Use useful phrases in shops, restaurants, and public places.</li>
            <li>Handle simple problems and situations in English.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Greetings and Small Talk
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use these expressions when meeting someone or starting a
            conversation.
          </p>

          <div style={boxStyle}>
            <p>Hi! How are you?</p>
            <p>Good morning!</p>
            <p>Nice to meet you.</p>
            <p>How&apos;s your day going?</p>
            <p>What are you doing today?</p>
            <p>See you later!</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Hi! How are you?
            </p>
            <p>
              <strong>B:</strong> I&apos;m good, thanks. How about you?
            </p>
            <p>
              <strong>A:</strong> I&apos;m great. Nice to see you!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Asking for Help
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When you need help, use polite expressions such as:
          </p>

          <div style={boxStyle}>
            <p>Can you help me, please?</p>
            <p>Could you help me?</p>
            <p>Excuse me, can you help me?</p>
            <p>Could you show me how to do this?</p>
            <p>Can you give me a hand?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Excuse me, could you help me?
            </p>
            <p>
              <strong>B:</strong> Sure. What do you need?
            </p>
            <p>
              <strong>A:</strong> I can&apos;t find the train station.
            </p>
            <p>
              <strong>B:</strong> It&apos;s about five minutes from here.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking for Information
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use question words to ask for information.
          </p>

          <div style={boxStyle}>
            <p>Where is the nearest bank?</p>
            <p>What time does the shop open?</p>
            <p>How much is this?</p>
            <p>When does the bus leave?</p>
            <p>How long does it take?</p>
            <p>Which bus goes to the city center?</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Useful expression:</strong>
            <p style={{ marginBottom: 0 }}>
              Excuse me, could you tell me...?
            </p>
          </div>

          <div style={boxStyle}>
            <p>Excuse me, could you tell me where the station is?</p>
            <p>Excuse me, could you tell me what time it opens?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. In a Shop
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use these expressions when shopping.
          </p>

          <div style={boxStyle}>
            <p>How much is this?</p>
            <p>Do you have this in a different size?</p>
            <p>Do you have this in black?</p>
            <p>Can I try it on?</p>
            <p>Do you accept credit cards?</p>
            <p>I&apos;ll take it.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me, how much is this jacket?
            </p>
            <p>
              <strong>Shop Assistant:</strong> It&apos;s $60.
            </p>
            <p>
              <strong>Customer:</strong> Do you have it in a smaller size?
            </p>
            <p>
              <strong>Shop Assistant:</strong> Yes, we do. Here you are.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. At a Restaurant
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            These expressions are useful when ordering food.
          </p>

          <div style={boxStyle}>
            <p>A table for two, please.</p>
            <p>Could we see the menu, please?</p>
            <p>I&apos;d like the chicken, please.</p>
            <p>Can I have some water?</p>
            <p>Could I have the bill, please?</p>
            <p>Is service included?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Waiter:</strong> Are you ready to order?
            </p>
            <p>
              <strong>Customer:</strong> Yes, I&apos;d like the chicken, please.
            </p>
            <p>
              <strong>Waiter:</strong> Would you like anything to drink?
            </p>
            <p>
              <strong>Customer:</strong> Yes, I&apos;ll have a glass of water.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Asking for Directions
          </h2>

          <div style={boxStyle}>
            <p>Excuse me, where is the post office?</p>
            <p>How can I get to the train station?</p>
            <p>Is there a bank near here?</p>
            <p>Is it far from here?</p>
            <p>Can I walk there?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Giving Directions</h3>

          <div style={boxStyle}>
            <p>Go straight ahead.</p>
            <p>Turn left at the traffic lights.</p>
            <p>Turn right at the corner.</p>
            <p>It&apos;s next to the bank.</p>
            <p>It&apos;s opposite the supermarket.</p>
            <p>It&apos;s about ten minutes from here.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Making Requests
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>can</strong>, <strong>could</strong>, or
            <strong> would like</strong> to make requests.
          </p>

          <div style={boxStyle}>
            <p>Can you open the window?</p>
            <p>Could you speak more slowly?</p>
            <p>Could you repeat that, please?</p>
            <p>Would you mind waiting for a moment?</p>
            <p>I&apos;d like a coffee, please.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Polite English:</strong>
            <p style={{ marginBottom: 0 }}>
              Could you + base verb + please?
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Making Suggestions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use <strong>Let&apos;s</strong>, <strong>Why don&apos;t
            we...?</strong>, and <strong>How about...?</strong> to make
            suggestions.
          </p>

          <div style={boxStyle}>
            <p>Let&apos;s go to the cinema.</p>
            <p>Why don&apos;t we have lunch together?</p>
            <p>How about going for a walk?</p>
            <p>We could visit the museum.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Responses</h3>

          <div style={boxStyle}>
            <p>That&apos;s a good idea.</p>
            <p>Sounds great!</p>
            <p>Sure, why not?</p>
            <p>I&apos;m not sure.</p>
            <p>I&apos;d rather stay home.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Making Plans
          </h2>

          <div style={boxStyle}>
            <p>What are you doing tonight?</p>
            <p>Are you free tomorrow?</p>
            <p>Would you like to go out?</p>
            <p>What time shall we meet?</p>
            <p>Where shall we meet?</p>
            <p>How about Saturday?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Are you free tomorrow evening?
            </p>
            <p>
              <strong>B:</strong> Yes, I am.
            </p>
            <p>
              <strong>A:</strong> Would you like to have dinner together?
            </p>
            <p>
              <strong>B:</strong> Sure! What time?
            </p>
            <p>
              <strong>A:</strong> How about 7:30?
            </p>
            <p>
              <strong>B:</strong> Sounds great.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Asking for Clarification
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            If you do not understand someone, these expressions can help.
          </p>

          <div style={boxStyle}>
            <p>Sorry, what did you say?</p>
            <p>Could you repeat that, please?</p>
            <p>Could you speak more slowly?</p>
            <p>What does this word mean?</p>
            <p>What do you mean?</p>
            <p>Could you explain that?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Dealing with a Problem
          </h2>

          <div style={boxStyle}>
            <p>Excuse me, there&apos;s a problem.</p>
            <p>I&apos;m sorry, but this isn&apos;t working.</p>
            <p>Could you help me with this?</p>
            <p>I think there&apos;s a mistake.</p>
            <p>Could you check this, please?</p>
            <p>What can I do?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me, there&apos;s a problem with
              my order.
            </p>
            <p>
              <strong>Staff:</strong> I&apos;m sorry. What happened?
            </p>
            <p>
              <strong>Customer:</strong> I ordered a salad, but I received a
              sandwich.
            </p>
            <p>
              <strong>Staff:</strong> I&apos;m sorry about that. I&apos;ll fix
              it for you.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Useful Everyday Responses
          </h2>

          <div style={boxStyle}>
            <p>Sure!</p>
            <p>Of course.</p>
            <p>No problem.</p>
            <p>That&apos;s fine.</p>
            <p>That&apos;s okay.</p>
            <p>Sounds good.</p>
            <p>Absolutely.</p>
            <p>I&apos;m afraid I can&apos;t.</p>
            <p>Sorry, I&apos;m not available.</p>
            <p>Thanks anyway.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ Can you to help me?</p>
            <p>✅ Can you help me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Could you to repeat that?</p>
            <p>✅ Could you repeat that?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I&apos;d like order a coffee.</p>
            <p>✅ I&apos;d like to order a coffee.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How can I to get there?</p>
            <p>✅ How can I get there?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Where the station is?</p>
            <p>✅ Where is the station?</p>
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
              1. You need help. What do you say? (Could you help me? / Help
              me!)
            </p>

            <p>
              2. You want to ask the price. (How much is it? / How many is it?)
            </p>

            <p>
              3. You do not understand. (Could you repeat that? / Give me
              that?)
            </p>

            <p>
              4. You want to order food. (I&apos;d like the chicken. / I like
              chicken yesterday.)
            </p>

            <p>
              5. You want to ask for directions. (How can I get there? / How
              can I getting there?)
            </p>

            <p>
              6. You want to make a suggestion. (Let&apos;s go out. / Let&apos;s
              to go out.)
            </p>

            <p>
              7. You want to make a polite request. (Could you open the
              window? / Could you to open the window?)
            </p>

            <p>
              8. You want to ask about someone&apos;s availability. (Are you
              free tomorrow? / Are you free yesterday?)
            </p>

            <p>
              9. You have a problem with an order. (There&apos;s a problem. /
              There&apos;s problem?)
            </p>

            <p>
              10. You want to ask someone to speak slowly. (Could you speak
              more slowly? / Could you speaking more slowly?)
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
            <p>1. Could you help me?</p>
            <p>2. How much is it?</p>
            <p>3. Could you repeat that?</p>
            <p>4. I&apos;d like the chicken.</p>
            <p>5. How can I get there?</p>
            <p>6. Let&apos;s go out.</p>
            <p>7. Could you open the window?</p>
            <p>8. Are you free tomorrow?</p>
            <p>9. There&apos;s a problem.</p>
            <p>10. Could you speak more slowly?</p>
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
            <li>Use polite expressions when asking for help.</li>
            <li>Use question words to ask for information.</li>
            <li>Use “Could you...?” for polite requests.</li>
            <li>Use “I&apos;d like...” when ordering or requesting something.</li>
            <li>Use “How can I...?” when asking for directions or instructions.</li>
            <li>Use “Let&apos;s...” and “Why don&apos;t we...?” for suggestions.</li>
            <li>Use “Are you free...?” to ask about plans.</li>
            <li>Use clarification phrases when you do not understand.</li>
            <li>Use simple problem-solving expressions when something goes wrong.</li>
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
            href="/resources/grammar/a2/adverbs-of-frequency"
            style={buttonStyle}
          >
            ← Adverbs of Frequency
          </Link>

          <Link
            href="/resources/grammar/a2/travel-shopping"
            style={buttonStyle}
          >
            Next: Travel & Shopping →
          </Link>
        </div>
      </div>
    </main>
  );
}