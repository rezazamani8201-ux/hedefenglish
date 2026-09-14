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

export default function TravelShoppingPage() {
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
            Travel & Shopping
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn useful English for travelling, hotels, airports, shops,
            prices, sizes, payments, and everyday shopping situations.
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
            <li>Use common travel vocabulary.</li>
            <li>Ask for travel information.</li>
            <li>Check in at a hotel.</li>
            <li>Buy tickets and ask about transportation.</li>
            <li>Ask about prices, sizes, and colors.</li>
            <li>Make purchases and talk about payment.</li>
            <li>Handle common problems while travelling or shopping.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Travel Vocabulary
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            These are some common words and phrases you need when travelling.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Airport</strong> — a place where planes arrive and leave
            </p>
            <p>
              <strong>Boarding pass</strong> — a document you need to get on a
              plane
            </p>
            <p>
              <strong>Luggage</strong> — bags and suitcases
            </p>
            <p>
              <strong>Passport</strong> — an official document for
              international travel
            </p>
            <p>
              <strong>Ticket</strong> — something that allows you to travel
            </p>
            <p>
              <strong>Platform</strong> — the place where you wait for a train
            </p>
            <p>
              <strong>Departure</strong> — the time when a plane, train, or bus
              leaves
            </p>
            <p>
              <strong>Arrival</strong> — the time when it reaches a place
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. At the Airport
          </h2>

          <div style={boxStyle}>
            <p>Where is the check-in desk?</p>
            <p>Where is security?</p>
            <p>Which gate is it?</p>
            <p>What time does boarding start?</p>
            <p>Is the flight on time?</p>
            <p>Where can I collect my luggage?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Passenger:</strong> Excuse me, where is the check-in desk?
            </p>
            <p>
              <strong>Staff:</strong> It&apos;s over there, next to the
              information desk.
            </p>
            <p>
              <strong>Passenger:</strong> Thank you. What time does boarding
              start?
            </p>
            <p>
              <strong>Staff:</strong> Boarding starts at 6:30.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Buying a Ticket
          </h2>

          <div style={boxStyle}>
            <p>I&apos;d like a ticket to London, please.</p>
            <p>Can I have a return ticket?</p>
            <p>How much is a one-way ticket?</p>
            <p>What time is the next train?</p>
            <p>Which platform does it leave from?</p>
            <p>Can I pay by card?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> I&apos;d like a return ticket to
              Manchester, please.
            </p>
            <p>
              <strong>Clerk:</strong> Sure. When are you coming back?
            </p>
            <p>
              <strong>Customer:</strong> On Friday.
            </p>
            <p>
              <strong>Clerk:</strong> That&apos;s £45.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. At a Hotel
          </h2>

          <div style={boxStyle}>
            <p>I have a reservation.</p>
            <p>I&apos;d like to check in.</p>
            <p>What time is check-out?</p>
            <p>Is breakfast included?</p>
            <p>Is there Wi-Fi in the room?</p>
            <p>Could I have the room key, please?</p>
            <p>Could you recommend a good restaurant?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Receptionist:</strong> Good evening. How can I help you?
            </p>
            <p>
              <strong>Guest:</strong> I have a reservation under Smith.
            </p>
            <p>
              <strong>Receptionist:</strong> Let me check. Yes, here it is.
            </p>
            <p>
              <strong>Guest:</strong> Is breakfast included?
            </p>
            <p>
              <strong>Receptionist:</strong> Yes, breakfast is included.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Asking About Prices
          </h2>

          <div style={boxStyle}>
            <p>How much is this?</p>
            <p>How much does it cost?</p>
            <p>How much are these shoes?</p>
            <p>Is there a discount?</p>
            <p>Is this on sale?</p>
            <p>Can you give me a better price?</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Remember:</strong>
            <p style={{ marginBottom: 0 }}>
              Use <strong>How much is...?</strong> with singular items.
            </p>
            <p style={{ marginBottom: 0 }}>
              Use <strong>How much are...?</strong> with plural items.
            </p>
          </div>

          <div style={boxStyle}>
            <p>How much is this shirt?</p>
            <p>How much are these trousers?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Sizes and Colors
          </h2>

          <div style={boxStyle}>
            <p>Do you have this in a larger size?</p>
            <p>Do you have this in a smaller size?</p>
            <p>Do you have it in blue?</p>
            <p>What sizes do you have?</p>
            <p>Can I try this on?</p>
            <p>Where are the changing rooms?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Common Sizes</h3>

          <div style={boxStyle}>
            <p>Extra Small — XS</p>
            <p>Small — S</p>
            <p>Medium — M</p>
            <p>Large — L</p>
            <p>Extra Large — XL</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Comparing Products
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use comparative adjectives when comparing two products.
          </p>

          <div style={boxStyle}>
            <p>This phone is cheaper than that one.</p>
            <p>This jacket is more expensive than the other one.</p>
            <p>This bag is bigger than that bag.</p>
            <p>This shirt is smaller than the blue one.</p>
            <p>This model is better than the old model.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Useful pattern:</strong>
            <p style={{ marginBottom: 0 }}>
              A + be + comparative adjective + than + B
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Paying for Something
          </h2>

          <div style={boxStyle}>
            <p>Can I pay by card?</p>
            <p>Can I pay in cash?</p>
            <p>Do you accept credit cards?</p>
            <p>Could I have a receipt, please?</p>
            <p>Do you have change?</p>
            <p>Here&apos;s my card.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Cashier:</strong> That&apos;s $35.
            </p>
            <p>
              <strong>Customer:</strong> Can I pay by card?
            </p>
            <p>
              <strong>Cashier:</strong> Of course.
            </p>
            <p>
              <strong>Customer:</strong> Could I have a receipt, please?
            </p>
            <p>
              <strong>Cashier:</strong> Sure. Here you are.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Returning Something
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Sometimes you need to return something because it is damaged,
            incorrect, or the wrong size.
          </p>

          <div style={boxStyle}>
            <p>I&apos;d like to return this, please.</p>
            <p>I&apos;d like to exchange this.</p>
            <p>It&apos;s the wrong size.</p>
            <p>It doesn&apos;t fit.</p>
            <p>It&apos;s damaged.</p>
            <p>I have the receipt.</p>
            <p>Can I get a refund?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Asking About Transportation
          </h2>

          <div style={boxStyle}>
            <p>Where is the bus station?</p>
            <p>How often does the bus run?</p>
            <p>How long does the journey take?</p>
            <p>How much is a ticket?</p>
            <p>What time does the last train leave?</p>
            <p>Does this bus go to the city center?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Travel Problems
          </h2>

          <div style={boxStyle}>
            <p>My flight is delayed.</p>
            <p>My flight has been cancelled.</p>
            <p>I can&apos;t find my luggage.</p>
            <p>I missed my train.</p>
            <p>My room is not clean.</p>
            <p>There is a problem with my reservation.</p>
            <p>Could you help me, please?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Example</h3>

          <div style={boxStyle}>
            <p>
              <strong>Guest:</strong> Excuse me, there&apos;s a problem with my
              room.
            </p>
            <p>
              <strong>Receptionist:</strong> I&apos;m sorry. What&apos;s the
              problem?
            </p>
            <p>
              <strong>Guest:</strong> The air conditioning isn&apos;t working.
            </p>
            <p>
              <strong>Receptionist:</strong> I&apos;ll send someone to check
              it.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Useful Travel Questions
          </h2>

          <div style={boxStyle}>
            <p>Where can I buy a ticket?</p>
            <p>Where can I exchange money?</p>
            <p>Is there a supermarket nearby?</p>
            <p>How far is the hotel from here?</p>
            <p>What time does the museum open?</p>
            <p>How can I get to the city center?</p>
            <p>Is there a taxi stand nearby?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ How much this costs?</p>
            <p>✅ How much does this cost?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How much are this shirt?</p>
            <p>✅ How much is this shirt?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want a ticket for London.</p>
            <p>✅ I&apos;d like a ticket to London, please.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Can I pay with cash?</p>
            <p>✅ Can I pay in cash?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Where is the check in?</p>
            <p>✅ Where is the check-in desk?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want return this.</p>
            <p>✅ I&apos;d like to return this.</p>
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
              1. You want to ask the price of a shirt. (How much is this shirt?
              / How many is this shirt?)
            </p>

            <p>
              2. You want to buy a ticket. (I&apos;d like a ticket, please. /
              I&apos;d like ticket please.)
            </p>

            <p>
              3. You want to ask about your flight. (Is the flight on time? /
              Does the flight on time?)
            </p>

            <p>
              4. You want a larger size. (Do you have a larger size? / Do you
              have larger?)
            </p>

            <p>
              5. You want to pay by card. (Can I pay by card? / Can I pay with
              card?)
            </p>

            <p>
              6. Your item is damaged. (I&apos;d like to return this. /
              I&apos;d like return this.)
            </p>

            <p>
              7. You want to ask about the train. (What time does the train
              leave? / What time the train leaves?)
            </p>

            <p>
              8. You are checking into a hotel. (I have a reservation. / I have
              reservation.)
            </p>

            <p>
              9. You cannot find your luggage. (I can&apos;t find my luggage. /
              I don&apos;t can find my luggage.)
            </p>

            <p>
              10. You want to ask for a receipt. (Could I have a receipt,
              please? / Could I have receipt please?)
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
            <p>1. How much is this shirt?</p>
            <p>2. I&apos;d like a ticket, please.</p>
            <p>3. Is the flight on time?</p>
            <p>4. Do you have a larger size?</p>
            <p>5. Can I pay by card?</p>
            <p>6. I&apos;d like to return this.</p>
            <p>7. What time does the train leave?</p>
            <p>8. I have a reservation.</p>
            <p>9. I can&apos;t find my luggage.</p>
            <p>10. Could I have a receipt, please?</p>
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
            <li>Use polite expressions when asking for travel information.</li>
            <li>Use “I&apos;d like...” when buying tickets or ordering something.</li>
            <li>Use “How much is...?” for a singular item.</li>
            <li>Use “How much are...?” for plural items.</li>
            <li>Use “Can I pay by card?” to ask about card payment.</li>
            <li>Use “I&apos;d like to return this” when returning an item.</li>
            <li>Use comparative adjectives to compare products.</li>
            <li>Use “I have a reservation” when checking into a hotel.</li>
            <li>Use “Could you help me?” when you have a problem.</li>
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
            href="/resources/grammar/a2/everyday-situations"
            style={buttonStyle}
          >
            ← Everyday Situations
          </Link>

          <Link
            href="/resources/grammar/a2/making-suggestions"
            style={buttonStyle}
          >
            Next: Making Suggestions →
          </Link>
        </div>
      </div>
    </main>
  );
}