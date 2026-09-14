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

export default function TravelTransportPage() {
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
            Travel & Transport
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn useful English for traveling, using public transport,
            buying tickets, and asking simple travel questions.
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
            <li>Talk about common types of transport.</li>
            <li>Ask about buses, trains, and taxis.</li>
            <li>Buy a ticket.</li>
            <li>Ask about departure and arrival times.</li>
            <li>Practice simple travel conversations.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Types of Transport
          </h2>

          <div style={phraseStyle}>
            <strong>bus</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I usually take the bus to work.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>train</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              We are going by train.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>taxi</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Let&apos;s take a taxi.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>car</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I travel by car.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>plane</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The plane leaves at eight o&apos;clock.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>subway</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              We can take the subway.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>ship</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              They travel by ship.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>bicycle</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              He goes to work by bicycle.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Useful Travel Words
          </h2>

          <div style={phraseStyle}>
            <strong>ticket</strong>
          </div>

          <div style={phraseStyle}>
            <strong>station</strong>
          </div>

          <div style={phraseStyle}>
            <strong>airport</strong>
          </div>

          <div style={phraseStyle}>
            <strong>platform</strong>
          </div>

          <div style={phraseStyle}>
            <strong>departure</strong>
          </div>

          <div style={phraseStyle}>
            <strong>arrival</strong>
          </div>

          <div style={phraseStyle}>
            <strong>luggage</strong>
          </div>

          <div style={phraseStyle}>
            <strong>passport</strong>
          </div>

          <div style={phraseStyle}>
            <strong>hotel</strong>
          </div>

          <div style={phraseStyle}>
            <strong>trip</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Buying a Ticket
          </h2>

          <div style={phraseStyle}>
            <strong>One ticket to London, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>A ticket to Istanbul, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much is a ticket?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much is a return ticket?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I buy a ticket here?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can I pay by card?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time is the next train?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Asking About Transport
          </h2>

          <div style={phraseStyle}>
            <strong>Where is the bus stop?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is the train station?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time does the bus leave?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time does the train arrive?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Which bus goes to the city center?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Does this train go to Ankara?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How long does the journey take?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. At the Airport
          </h2>

          <div style={phraseStyle}>
            <strong>Where is the check-in desk?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is the gate?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time is boarding?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where can I collect my luggage?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is this the flight to London?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is passport control?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it at a train station.
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
              <strong>Passenger:</strong> Excuse me. What time is the next
              train to Ankara?
            </p>

            <p>
              <strong>Staff:</strong> The next train leaves at 10:30.
            </p>

            <p>
              <strong>Passenger:</strong> What platform is it?
            </p>

            <p>
              <strong>Staff:</strong> Platform four.
            </p>

            <p>
              <strong>Passenger:</strong> How much is a ticket?
            </p>

            <p>
              <strong>Staff:</strong> It&apos;s 500 lira.
            </p>

            <p>
              <strong>Passenger:</strong> One ticket, please.
            </p>

            <p>
              <strong>Staff:</strong> Of course. Here you are.
            </p>

            <p>
              <strong>Passenger:</strong> Thank you.
            </p>

            <p>
              <strong>Staff:</strong> You&apos;re welcome.
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
            <strong>How do you usually travel?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you prefer traveling by car or by train?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How often do you travel?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite way to travel?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like traveling by plane?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where do you want to travel?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are at a train station. Buy a ticket and ask about
            the train.
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
              <strong>You:</strong> Excuse me. What time is the next train to
              ______?
            </p>

            <p>
              <strong>Staff:</strong> It leaves at ______.
            </p>

            <p>
              <strong>You:</strong> What platform is it?
            </p>

            <p>
              <strong>Staff:</strong> Platform ______.
            </p>

            <p>
              <strong>You:</strong> How much is a ticket?
            </p>

            <p>
              <strong>Staff:</strong> It&apos;s ______.
            </p>

            <p>
              <strong>You:</strong> One ticket, please.
            </p>

            <p>
              <strong>Staff:</strong> Here you are.
            </p>

            <p>
              <strong>You:</strong> Thank you.
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
            <p>1. I travel by ______.</p>
            <p>2. Where is the train ______?</p>
            <p>3. How much is a ______?</p>
            <p>4. What ______ does the train leave?</p>
            <p>5. Where is the bus ______?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>Where is the bus stop?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time does the train leave?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What time does the train arrive?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How much is a ticket?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>One ticket, please.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Which platform is it?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How long does the journey take?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is the airport?</strong>
          </div>
        </section>

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
            href="/resources/listening-speaking/a1/restaurant"
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
            ← At the Restaurant
          </Link>

          <Link
            href="/resources/listening-speaking/a1/free-time-hobbies"
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
            Next: Free Time & Hobbies →
          </Link>
        </div>
      </div>
    </main>
  );
}