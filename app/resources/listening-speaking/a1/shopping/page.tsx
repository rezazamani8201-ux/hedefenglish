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

export default function ShoppingPage() {
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
            Shopping
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to ask about prices, describe products, and communicate
            in simple shopping situations.
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
            <li>Ask about prices.</li>
            <li>Talk about colors, sizes, and basic products.</li>
            <li>Ask if something is available.</li>
            <li>Say what you want to buy.</li>
            <li>Practice a simple shopping conversation.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Shopping Words
          </h2>

          <div style={phraseStyle}>
            <strong>shop</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I am in a clothes shop.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>customer</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The customer is looking for a jacket.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>price</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              What is the price?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>size</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Do you have this in a larger size?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>color</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Do you have this in black?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cash</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Can I pay in cash?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>card</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Can I pay by card?
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Asking About Prices
          </h2>

          <div style={phraseStyle}>
            <strong>How much is this?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much are these shoes?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much does it cost?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is the price?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it expensive?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is there a cheaper one?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking for Something
          </h2>

          <div style={phraseStyle}>
            <strong>I&apos;d like this shirt, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have this one, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m looking for a jacket.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have this in blue?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have a smaller size?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have a larger size?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Colors and Sizes
          </h2>

          <div style={phraseStyle}>
            <strong>black</strong>
          </div>

          <div style={phraseStyle}>
            <strong>white</strong>
          </div>

          <div style={phraseStyle}>
            <strong>red</strong>
          </div>

          <div style={phraseStyle}>
            <strong>blue</strong>
          </div>

          <div style={phraseStyle}>
            <strong>green</strong>
          </div>

          <div style={phraseStyle}>
            <strong>small / medium / large</strong>
          </div>

          <div style={phraseStyle}>
            <strong>small size / large size</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. At the Cashier
          </h2>

          <div style={phraseStyle}>
            <strong>Can I pay by card?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I pay in cash?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you need a bag?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Yes, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>No, thank you.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have a receipt, please?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it in a real clothes shop.
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
              <strong>Customer:</strong> Excuse me. How much is this shirt?
            </p>

            <p>
              <strong>Shop Assistant:</strong> It&apos;s 30 dollars.
            </p>

            <p>
              <strong>Customer:</strong> Do you have it in blue?
            </p>

            <p>
              <strong>Shop Assistant:</strong> Yes, we do.
            </p>

            <p>
              <strong>Customer:</strong> Do you have a larger size?
            </p>

            <p>
              <strong>Shop Assistant:</strong> Yes. Here you are.
            </p>

            <p>
              <strong>Customer:</strong> Great. I&apos;d like this one, please.
            </p>

            <p>
              <strong>Shop Assistant:</strong> How would you like to pay?
            </p>

            <p>
              <strong>Customer:</strong> By card, please.
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
            <strong>What do you like to buy?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite color?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What size do you usually wear?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like shopping?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you usually pay by card or cash?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually buy when you go shopping?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are shopping for a shirt. Practice the conversation
            with a shop assistant.
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
              <strong>Shop Assistant:</strong> Hello. Can I help you?
            </p>

            <p>
              <strong>You:</strong> Yes, I&apos;m looking for ______.
            </p>

            <p>
              <strong>Shop Assistant:</strong> What color would you like?
            </p>

            <p>
              <strong>You:</strong> I&apos;d like ______.
            </p>

            <p>
              <strong>Shop Assistant:</strong> What size do you need?
            </p>

            <p>
              <strong>You:</strong> I need a ______.
            </p>

            <p>
              <strong>Shop Assistant:</strong> Here you are.
            </p>

            <p>
              <strong>You:</strong> How much is it?
            </p>

            <p>
              <strong>Shop Assistant:</strong> It&apos;s ______.
            </p>

            <p>
              <strong>You:</strong> I&apos;d like it, please.
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
            <p>1. How ______ is this shirt?</p>
            <p>2. Do you have this ______ blue?</p>
            <p>3. I&apos;m looking ______ a jacket.</p>
            <p>4. Do you have a larger ______?</p>
            <p>5. Can I pay ______ card?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>How much is this?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much are these?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;m looking for...</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have this in...?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have a larger size?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;d like this one, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I pay by card?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have a receipt, please?</strong>
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
            href="/resources/listening-speaking/a1/food-drinks"
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
            ← Food & Drinks
          </Link>

          <Link
            href="/resources/listening-speaking/a1/places-directions"
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
            Next: Places & Directions →
          </Link>
        </div>
      </div>
    </main>
  );
}