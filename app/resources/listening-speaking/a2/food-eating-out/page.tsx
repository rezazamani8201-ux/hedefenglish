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

export default function FoodEatingOutPage() {
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
            Food & Eating Out
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn practical English for talking about food, ordering meals,
            asking about menus, making requests, and communicating confidently
            at restaurants and cafés.
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
            <li>Talk about food, meals, and eating habits.</li>
            <li>Order food and drinks at a restaurant.</li>
            <li>Ask about ingredients and menu items.</li>
            <li>Make polite requests.</li>
            <li>Ask for the bill and pay at a restaurant.</li>
            <li>Describe likes, dislikes, and food preferences.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Food Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["menu", "a list of food and drinks available in a restaurant"],
              ["dish", "a particular type of food prepared as part of a meal"],
              ["meal", "food eaten at a particular time of the day"],
              ["starter", "a small dish served before the main course"],
              ["main course", "the main dish of a meal"],
              ["dessert", "sweet food usually eaten at the end of a meal"],
              ["drink", "a liquid that you can drink"],
              ["ingredient", "one of the foods used to make a dish"],
              ["waiter", "a person who serves customers in a restaurant"],
              ["bill", "a list showing how much you need to pay"],
              ["order", "the food or drinks that you ask for"],
              ["tip", "extra money given to restaurant staff for good service"],
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

        {/* Likes and Dislikes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Food Preferences
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use these expressions to talk about the food you enjoy or do not
            enjoy.
          </p>

          <div style={boxStyle}>
            <p>I really like Italian food.</p>
            <p>I love spicy food.</p>
            <p>I enjoy eating fresh vegetables.</p>
            <p>I don&apos;t really like seafood.</p>
            <p>I don&apos;t like very spicy food.</p>
            <p>I prefer tea to coffee.</p>
            <p>My favorite dish is pasta.</p>
          </div>
        </section>

        {/* Listening Restaurant */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At a Restaurant
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and imagine that you are listening
            to a customer ordering a meal.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Waiter:</strong> Good evening. Here are your menus.
            </p>

            <p>
              <strong>Customer:</strong> Thank you. Could we have a few
              minutes, please?
            </p>

            <p>
              <strong>Waiter:</strong> Of course. Take your time.
            </p>

            <p>
              <strong>Customer:</strong> Excuse me. What do you recommend?
            </p>

            <p>
              <strong>Waiter:</strong> The grilled chicken is very popular.
            </p>

            <p>
              <strong>Customer:</strong> Does it come with vegetables?
            </p>

            <p>
              <strong>Waiter:</strong> Yes, it comes with rice and vegetables.
            </p>

            <p>
              <strong>Customer:</strong> Great. I&apos;ll have the grilled
              chicken.
            </p>

            <p>
              <strong>Waiter:</strong> And what would you like to drink?
            </p>

            <p>
              <strong>Customer:</strong> I&apos;d like a glass of water,
              please.
            </p>

            <p>
              <strong>Waiter:</strong> Certainly.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What does the waiter recommend?</p>
            <p>2. What does the grilled chicken come with?</p>
            <p>3. What does the customer order?</p>
            <p>4. What does the customer want to drink?</p>
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
            <p>1. The waiter recommends the grilled chicken.</p>
            <p>2. It comes with rice and vegetables.</p>
            <p>3. The customer orders grilled chicken.</p>
            <p>4. The customer wants a glass of water.</p>
          </div>
        </section>

        {/* Useful Restaurant Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Restaurant Expressions
          </h2>

          <div style={boxStyle}>
            <p>Could we have a table for two?</p>
            <p>Could I see the menu, please?</p>
            <p>What do you recommend?</p>
            <p>What&apos;s today&apos;s special?</p>
            <p>Does this come with rice?</p>
            <p>Does this contain nuts?</p>
            <p>I&apos;d like the chicken, please.</p>
            <p>Could I have some water, please?</p>
            <p>Could we have the bill, please?</p>
            <p>Can I pay by card?</p>
          </div>
        </section>

        {/* Asking About Ingredients */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking About Ingredients
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When you are unsure about a dish, ask questions before ordering.
          </p>

          <div style={boxStyle}>
            <p>What&apos;s in this dish?</p>
            <p>What ingredients are in the soup?</p>
            <p>Does this contain cheese?</p>
            <p>Does this dish contain nuts?</p>
            <p>Is this spicy?</p>
            <p>Is there a vegetarian option?</p>
            <p>Can I have this without onions?</p>
          </div>
        </section>

        {/* Café Conversation */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At a Café
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Barista:</strong> Hi. What can I get for you?
            </p>

            <p>
              <strong>Customer:</strong> I&apos;d like a cappuccino, please.
            </p>

            <p>
              <strong>Barista:</strong> Sure. Would you like anything to eat?
            </p>

            <p>
              <strong>Customer:</strong> Yes. Can I have a cheese sandwich?
            </p>

            <p>
              <strong>Barista:</strong> Of course. Would you like it toasted?
            </p>

            <p>
              <strong>Customer:</strong> Yes, please.
            </p>

            <p>
              <strong>Barista:</strong> Anything else?
            </p>

            <p>
              <strong>Customer:</strong> No, that&apos;s all. How much is it?
            </p>

            <p>
              <strong>Barista:</strong> It&apos;s £8.50.
            </p>

            <p>
              <strong>Customer:</strong> Here you are.
            </p>
          </div>
        </section>

        {/* Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: Would Like
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>would like</strong> to make polite requests or orders.
          </p>

          <div style={boxStyle}>
            <p>I&apos;d like a coffee, please.</p>
            <p>I&apos;d like the chicken.</p>
            <p>Would you like some dessert?</p>
            <p>Would you like anything to drink?</p>
            <p>What would you like?</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Would like</strong> is more polite than simply saying
            <strong> want</strong> in many service situations.
          </p>
        </section>

        {/* Speaking */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Answer these questions using complete sentences.
          </p>

          <div style={boxStyle}>
            <p>1. What is your favorite food?</p>
            <p>2. What do you usually have for breakfast?</p>
            <p>3. Do you prefer eating at home or in restaurants?</p>
            <p>4. What kind of food do you dislike?</p>
            <p>5. What is your favorite restaurant?</p>
            <p>6. What do you usually order at a café?</p>
            <p>7. Do you like spicy food?</p>
            <p>8. What food would you recommend to a tourist?</p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Ordering at a Restaurant
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You are a waiter.
            </p>

            <p>
              <strong>Student B:</strong> You are a customer.
            </p>

            <p>
              The customer asks about the menu, chooses a main course and a
              drink, and asks for the bill at the end.
            </p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong style={{ color: "#173b78" }}>
              Useful phrases:
            </strong>

            <p>What do you recommend?</p>
            <p>What&apos;s today&apos;s special?</p>
            <p>I&apos;d like...</p>
            <p>Could I have...?</p>
            <p>Does this come with...?</p>
            <p>Could we have the bill, please?</p>
          </div>
        </section>

        {/* Restaurant Problem */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: A Problem With Your Order
          </h2>

          <div style={boxStyle}>
            <p>
              Imagine that you ordered chicken, but you received fish. Explain
              the problem politely and ask the waiter for help.
            </p>

            <p>
              <strong>Useful phrases:</strong>
            </p>

            <p>Excuse me, I think there is a mistake.</p>
            <p>I ordered chicken, not fish.</p>
            <p>Could you check my order, please?</p>
            <p>Could you bring me the correct dish?</p>
            <p>Thank you for your help.</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. Could I see the ______, please?
              <br />
              <strong>(menu / bill)</strong>
            </p>

            <p>
              2. What do you ______?
              <br />
              <strong>(recommend / order)</strong>
            </p>

            <p>
              3. I&apos;d ______ the grilled fish, please.
              <br />
              <strong>(like / liking)</strong>
            </p>

            <p>
              4. Does this ______ cheese?
              <br />
              <strong>(contain / contains)</strong>
            </p>

            <p>
              5. Could we have the ______, please?
              <br />
              <strong>(bill / menu)</strong>
            </p>

            <p>
              6. Would you like anything ______ drink?
              <br />
              <strong>(to / for)</strong>
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
            <p>1. menu</p>
            <p>2. recommend</p>
            <p>3. like</p>
            <p>4. contain</p>
            <p>5. bill</p>
            <p>6. to</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I would like to a coffee.</p>
            <p>✅ I would like a coffee.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What do you recommend me?</p>
            <p>✅ What do you recommend?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Does this contains nuts?</p>
            <p>✅ Does this contain nuts?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want a water.</p>
            <p>✅ I&apos;d like some water.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Give me the bill.</p>
            <p>✅ Could we have the bill, please?</p>
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
            <li>Use “I&apos;d like...” to order politely.</li>
            <li>Use “What do you recommend?” to ask for suggestions.</li>
            <li>Use “Does this contain...?” to ask about ingredients.</li>
            <li>Use “Could I have...?” for polite requests.</li>
            <li>Use “Could we have the bill, please?” when you want to pay.</li>
            <li>Use complete and polite sentences in service situations.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Confident restaurant English helps you order clearly, ask
            questions, and handle everyday situations naturally.
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
            href="/resources/listening-speaking/a2/health-doctor-visits"
            style={buttonStyle}
          >
            ← Health & Doctor Visits
          </Link>

          <Link
            href="/resources/listening-speaking/a2/describing-people-places"
            style={buttonStyle}
          >
            Next: Describing People & Places →
          </Link>
        </div>
      </div>
    </main>
  );
}