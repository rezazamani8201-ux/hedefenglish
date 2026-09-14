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

export default function RestaurantPage() {
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
            At the Restaurant
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to order food, ask for a menu, talk to a waiter, and
            communicate in a simple restaurant situation.
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
            <li>Ask for a table.</li>
            <li>Ask for the menu.</li>
            <li>Order food and drinks.</li>
            <li>Ask for the bill.</li>
            <li>Practice a simple restaurant conversation.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Restaurant Words
          </h2>

          <div style={phraseStyle}>
            <strong>restaurant</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              This is a nice restaurant.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>table</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              We need a table for two.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>menu</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Can I see the menu, please?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>waiter</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The waiter is very friendly.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>order</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Are you ready to order?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>meal</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The meal is delicious.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>bill</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Can I have the bill, please?
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>tip</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The service was good, so we left a tip.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Getting a Table
          </h2>

          <div style={phraseStyle}>
            <strong>A table for one, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>A table for two, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you have a table for two?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can we sit here?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is this table free?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking for the Menu
          </h2>

          <div style={phraseStyle}>
            <strong>Can I have the menu, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Could we have two menus, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I see the drinks menu?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is today&apos;s special?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Ordering Food
          </h2>

          <div style={phraseStyle}>
            <strong>I&apos;d like the chicken, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;d like a pizza, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have the pasta, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;ll have the chicken salad.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have some bread, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have some water, please?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Asking About Food
          </h2>

          <div style={phraseStyle}>
            <strong>What is this?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is in this dish?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it spicy?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it vegetarian?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is this dish hot?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you recommend?</strong>
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
              <strong>Waiter:</strong> Good evening. A table for how many?
            </p>

            <p>
              <strong>Anna:</strong> A table for two, please.
            </p>

            <p>
              <strong>Waiter:</strong> Of course. Here is your table.
            </p>

            <p>
              <strong>Anna:</strong> Thank you. Can we have the menu, please?
            </p>

            <p>
              <strong>Waiter:</strong> Certainly. Here you are.
            </p>

            <p>
              <strong>Anna:</strong> I&apos;d like the chicken, please.
            </p>

            <p>
              <strong>David:</strong> I&apos;ll have the pasta.
            </p>

            <p>
              <strong>Waiter:</strong> Would you like something to drink?
            </p>

            <p>
              <strong>Anna:</strong> Yes, I&apos;d like some water.
            </p>

            <p>
              <strong>David:</strong> I&apos;d like a coffee, please.
            </p>

            <p>
              <strong>Waiter:</strong> Anything else?
            </p>

            <p>
              <strong>Anna:</strong> No, that&apos;s all. Thank you.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Asking for the Bill
          </h2>

          <div style={phraseStyle}>
            <strong>Can I have the bill, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Could we have the bill, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I pay by card?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I pay in cash?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have a receipt, please?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud.
          </p>

          <div style={phraseStyle}>
            <strong>What is your favorite restaurant?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What food do you usually order?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite drink?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like eating at restaurants?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you prefer pizza or pasta?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you usually pay by card or cash?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Role Play
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
              <strong>Waiter:</strong> Good evening. A table for how many?
            </p>

            <p>
              <strong>You:</strong> A table for ______, please.
            </p>

            <p>
              <strong>Waiter:</strong> Here is your table. Would you like the
              menu?
            </p>

            <p>
              <strong>You:</strong> Yes, ______, please.
            </p>

            <p>
              <strong>Waiter:</strong> Are you ready to order?
            </p>

            <p>
              <strong>You:</strong> Yes. I&apos;d like ______.
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
            10. Quick Practice
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
            <p>1. A table for ______, please.</p>
            <p>2. Can I have the ______, please?</p>
            <p>3. I&apos;d ______ the chicken, please.</p>
            <p>4. Can I have some ______, please?</p>
            <p>5. Can I have the ______, please?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>A table for two, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have the menu, please?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you recommend?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I&apos;d like..., please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I have...?</strong>
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
            ← Places & Directions
          </Link>

          <Link
            href="/resources/listening-speaking/a1/travel-transport"
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
            Next: Travel & Transport →
          </Link>
        </div>
      </div>
    </main>
  );
}