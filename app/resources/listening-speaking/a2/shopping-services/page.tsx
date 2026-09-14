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

export default function ShoppingServicesPage() {
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
            Shopping & Services
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to communicate confidently when shopping, comparing
            products, asking about prices, returning items, and using everyday
            services.
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
            <li>Ask about prices and product information.</li>
            <li>Talk about sizes, colors, and preferences.</li>
            <li>Ask for help in a shop.</li>
            <li>Compare different products.</li>
            <li>Return or exchange an item politely.</li>
            <li>Communicate in common service situations.</li>
          </ul>
        </section>

        {/* Vocabulary */}
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
              ["price", "the amount of money something costs"],
              ["cash", "money in the form of notes and coins"],
              ["card", "a bank card used to make a payment"],
              ["receipt", "a paper or digital record of a purchase"],
              ["size", "how large or small something is"],
              ["fitting room", "a room where you can try on clothes"],
              ["customer", "a person who buys something"],
              ["cashier", "a person who receives payments"],
              ["discount", "a reduction in the normal price"],
              ["sale", "a period when products are sold at lower prices"],
              ["refund", "money returned after a purchase"],
              ["exchange", "to replace one item with another"],
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

        {/* Listening - Clothes Shop */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: In a Clothes Shop
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and imagine that you are listening
            to a customer talking to a shop assistant.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Assistant:</strong> Can I help you?
            </p>

            <p>
              <strong>Customer:</strong> Yes, I&apos;m looking for a blue
              jacket.
            </p>

            <p>
              <strong>Assistant:</strong> What size do you need?
            </p>

            <p>
              <strong>Customer:</strong> Medium, please.
            </p>

            <p>
              <strong>Assistant:</strong> Here you are. Would you like to try
              it on?
            </p>

            <p>
              <strong>Customer:</strong> Yes, please. Where is the fitting
              room?
            </p>

            <p>
              <strong>Assistant:</strong> It&apos;s over there, next to the
              mirrors.
            </p>

            <p>
              <strong>Customer:</strong> Thank you.
            </p>

            <p>
              <strong>Assistant:</strong> How does it fit?
            </p>

            <p>
              <strong>Customer:</strong> It fits well. How much is it?
            </p>

            <p>
              <strong>Assistant:</strong> It&apos;s £60, but it&apos;s on sale
              today.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What is the customer looking for?</p>
            <p>2. What size does the customer need?</p>
            <p>3. Where is the fitting room?</p>
            <p>4. How much is the jacket?</p>
            <p>5. Is the jacket on sale?</p>
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
            <p>1. The customer is looking for a blue jacket.</p>
            <p>2. The customer needs a medium.</p>
            <p>3. It is next to the mirrors.</p>
            <p>4. It is £60.</p>
            <p>5. Yes, it is.</p>
          </div>
        </section>

        {/* Useful Shopping Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Shopping Expressions
          </h2>

          <div style={boxStyle}>
            <p>Can I help you?</p>
            <p>I&apos;m looking for...</p>
            <p>Do you have this in a larger size?</p>
            <p>Do you have this in blue?</p>
            <p>Can I try it on?</p>
            <p>Where is the fitting room?</p>
            <p>How much is this?</p>
            <p>Is this on sale?</p>
            <p>Can I pay by card?</p>
            <p>Could I have a receipt, please?</p>
          </div>
        </section>

        {/* Comparing Products */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Comparing Products
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When shopping, you often need to compare two or more products.
            These expressions can help.
          </p>

          <div style={boxStyle}>
            <p>This one is cheaper.</p>
            <p>That one is more expensive.</p>
            <p>This phone is better for me.</p>
            <p>The blue one is more comfortable.</p>
            <p>This bag is smaller than that one.</p>
            <p>I prefer this one.</p>
            <p>I think this is a better choice.</p>
          </div>
        </section>

        {/* Listening - Return */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Returning an Item
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me. I&apos;d like to return
              this shirt.
            </p>

            <p>
              <strong>Assistant:</strong> Is there a problem with it?
            </p>

            <p>
              <strong>Customer:</strong> Yes. It&apos;s too small.
            </p>

            <p>
              <strong>Assistant:</strong> Would you like a different size?
            </p>

            <p>
              <strong>Customer:</strong> Yes, please. Do you have a large?
            </p>

            <p>
              <strong>Assistant:</strong> Let me check. Yes, we do.
            </p>

            <p>
              <strong>Customer:</strong> Great. Can I exchange it?
            </p>

            <p>
              <strong>Assistant:</strong> Of course. Do you have your receipt?
            </p>

            <p>
              <strong>Customer:</strong> Yes, here it is.
            </p>
          </div>
        </section>

        {/* Services */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Everyday Services
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            English is also useful when you use everyday services such as banks,
            post offices, pharmacies, repair shops, and customer service desks.
          </p>

          <div style={boxStyle}>
            <p>Where can I get some information?</p>
            <p>Could you help me, please?</p>
            <p>I&apos;d like to send this package.</p>
            <p>How much does it cost?</p>
            <p>How long does it take?</p>
            <p>Can I pay by card?</p>
            <p>What time do you close?</p>
            <p>Could you explain that again?</p>
          </div>
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
            <p>1. What do you usually buy when you go shopping?</p>
            <p>2. Do you prefer shopping online or in stores?</p>
            <p>3. What is something you bought recently?</p>
            <p>4. What is more important to you: price or quality?</p>
            <p>5. Do you usually compare products before buying?</p>
            <p>6. Have you ever returned something you bought?</p>
            <p>7. What kind of shops do you enjoy visiting?</p>
            <p>8. What service do you use most often?</p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Shopping
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You are a shop assistant.
            </p>

            <p>
              <strong>Student B:</strong> You are a customer looking for a
              jacket.
            </p>

            <p>
              The customer wants to know the size, color, price, and whether
              there is a discount.
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

            <p>I&apos;m looking for...</p>
            <p>Do you have this in a different size?</p>
            <p>How much is it?</p>
            <p>Is it on sale?</p>
            <p>Can I try it on?</p>
            <p>I&apos;ll take it.</p>
          </div>
        </section>

        {/* Customer Service Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Customer Service
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You work at a customer service desk.
            </p>

            <p>
              <strong>Student B:</strong> You have a problem with a product.
            </p>

            <p>
              Explain the problem politely and ask for a solution.
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

            <p>I&apos;d like to return this.</p>
            <p>There is a problem with it.</p>
            <p>It doesn&apos;t work properly.</p>
            <p>Could I get a refund?</p>
            <p>Could I exchange it?</p>
            <p>What can you do about it?</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. How ______ is this shirt?
              <br />
              <strong>(much / many)</strong>
            </p>

            <p>
              2. Do you have this ______ a larger size?
              <br />
              <strong>(in / on)</strong>
            </p>

            <p>
              3. Can I try it ______?
              <br />
              <strong>(on / in)</strong>
            </p>

            <p>
              4. I&apos;d like to ______ this item.
              <br />
              <strong>(return / returning)</strong>
            </p>

            <p>
              5. Could I have a ______, please?
              <br />
              <strong>(receipt / price)</strong>
            </p>

            <p>
              6. This phone is ______ than that one.
              <br />
              <strong>(cheaper / cheap)</strong>
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
            <p>1. much</p>
            <p>2. in</p>
            <p>3. on</p>
            <p>4. return</p>
            <p>5. receipt</p>
            <p>6. cheaper</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ How much costs this?</p>
            <p>✅ How much does this cost?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want return this.</p>
            <p>✅ I want to return this.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Can I try on it?</p>
            <p>✅ Can I try it on?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ This one is more cheap.</p>
            <p>✅ This one is cheaper.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want a refund my money.</p>
            <p>✅ I want a refund.</p>
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
            <li>Use “How much is it?” to ask about a price.</li>
            <li>Use “Can I try it on?” when shopping for clothes.</li>
            <li>Use “Do you have this in...?” to ask about sizes or colors.</li>
            <li>Use “I&apos;d like to return this” to return an item.</li>
            <li>Use “Could I get a refund?” to ask for your money back.</li>
            <li>Use polite questions when speaking to staff.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Good shopping English helps you ask clearly, compare products, and
            solve problems politely.
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
            href="/resources/listening-speaking/a2/travel-holidays"
            style={buttonStyle}
          >
            ← Travel & Holidays
          </Link>

          <Link
            href="/resources/listening-speaking/a2/health-doctor-visits"
            style={buttonStyle}
          >
            Next: Health & Doctor Visits →
          </Link>
        </div>
      </div>
    </main>
  );
}