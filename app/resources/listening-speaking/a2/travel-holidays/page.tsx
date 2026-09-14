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

export default function TravelHolidaysPage() {
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
            Travel & Holidays
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Practice useful English for traveling, staying in hotels, using
            transportation, asking for information, and talking about holidays.
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
            <li>Talk about travel plans and holiday experiences.</li>
            <li>Understand common travel conversations.</li>
            <li>Ask for travel information.</li>
            <li>Check in at a hotel.</li>
            <li>Ask for directions and transportation information.</li>
            <li>Describe problems while traveling.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Travel Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["airport", "a place where airplanes arrive and leave"],
              ["flight", "a journey by airplane"],
              ["passport", "an official document for international travel"],
              ["luggage", "bags and suitcases used when traveling"],
              ["ticket", "a document that allows you to travel"],
              ["hotel", "a place where travelers can stay"],
              ["reservation", "an arrangement to keep a room or seat"],
              ["reception", "the place where hotel guests check in"],
              ["journey", "travel from one place to another"],
              ["destination", "the place where you are going"],
              ["tourist", "a person traveling for pleasure"],
              ["sightseeing", "visiting interesting places as a tourist"],
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

        {/* Listening 1 - Airport */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At the Airport
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and imagine that you are listening
            to a passenger checking in for a flight.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Agent:</strong> Good morning. May I see your passport,
              please?
            </p>

            <p>
              <strong>Passenger:</strong> Sure. Here you are.
            </p>

            <p>
              <strong>Agent:</strong> Where are you flying today?
            </p>

            <p>
              <strong>Passenger:</strong> I&apos;m flying to Paris.
            </p>

            <p>
              <strong>Agent:</strong> Do you have any luggage to check in?
            </p>

            <p>
              <strong>Passenger:</strong> Yes, I have one suitcase.
            </p>

            <p>
              <strong>Agent:</strong> Here is your boarding pass. Your gate is
              18.
            </p>

            <p>
              <strong>Passenger:</strong> Thank you. What time does boarding
              start?
            </p>

            <p>
              <strong>Agent:</strong> Boarding starts at 9:20.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Where is the passenger flying?</p>
            <p>2. How many suitcases does the passenger have?</p>
            <p>3. What is the gate number?</p>
            <p>4. What time does boarding start?</p>
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
            <p>1. The passenger is flying to Paris.</p>
            <p>2. The passenger has one suitcase.</p>
            <p>3. The gate number is 18.</p>
            <p>4. Boarding starts at 9:20.</p>
          </div>
        </section>

        {/* Hotel */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At the Hotel
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Receptionist:</strong> Good afternoon. Welcome to the
              Grand Hotel. How can I help you?
            </p>

            <p>
              <strong>Guest:</strong> Hi. I have a reservation under the name
              James Wilson.
            </p>

            <p>
              <strong>Receptionist:</strong> Let me check. Yes, Mr. Wilson. You
              have a double room for three nights.
            </p>

            <p>
              <strong>Guest:</strong> That&apos;s right.
            </p>

            <p>
              <strong>Receptionist:</strong> Could I see your passport, please?
            </p>

            <p>
              <strong>Guest:</strong> Of course. Here you are.
            </p>

            <p>
              <strong>Receptionist:</strong> Your room is on the fourth floor.
              Here is your key.
            </p>

            <p>
              <strong>Guest:</strong> Thank you. What time is breakfast?
            </p>

            <p>
              <strong>Receptionist:</strong> Breakfast is from 7 to 10 a.m.
            </p>
          </div>
        </section>

        {/* Hotel Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Hotel Expressions
          </h2>

          <div style={boxStyle}>
            <p>I have a reservation.</p>
            <p>I&apos;d like to check in.</p>
            <p>Could I see your passport?</p>
            <p>What time is breakfast?</p>
            <p>What floor is my room on?</p>
            <p>Could I have another key?</p>
            <p>Is Wi-Fi available?</p>
            <p>What time is check-out?</p>
          </div>
        </section>

        {/* Directions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Directions
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            These expressions are useful when you need help finding a place.
          </p>

          <div style={boxStyle}>
            <p>Excuse me, how can I get to the train station?</p>
            <p>Is there a bus stop near here?</p>
            <p>How far is the city center?</p>
            <p>Is it within walking distance?</p>
            <p>Which bus should I take?</p>
            <p>Where can I buy a ticket?</p>
          </div>
        </section>

        {/* Travel Conversation */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Everyday Travel Conversation
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>A:</strong> Excuse me. How can I get to the city center?
            </p>

            <p>
              <strong>B:</strong> You can take bus number 12.
            </p>

            <p>
              <strong>A:</strong> Where can I catch the bus?
            </p>

            <p>
              <strong>B:</strong> The bus stop is across from the hotel.
            </p>

            <p>
              <strong>A:</strong> How long does it take?
            </p>

            <p>
              <strong>B:</strong> About twenty minutes.
            </p>

            <p>
              <strong>A:</strong> Thank you for your help.
            </p>

            <p>
              <strong>B:</strong> You&apos;re welcome.
            </p>
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
            <p>1. Where would you like to go on holiday?</p>
            <p>2. How do you usually travel?</p>
            <p>3. What do you usually take in your luggage?</p>
            <p>4. Do you prefer hotels or apartments?</p>
            <p>5. What do you like doing on holiday?</p>
            <p>6. What places would you like to visit?</p>
            <p>7. Have you ever had a problem while traveling?</p>
            <p>8. What is your ideal holiday?</p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Hotel Check-In
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You are a hotel receptionist.
            </p>

            <p>
              <strong>Student B:</strong> You are a guest arriving at the
              hotel.
            </p>

            <p>
              The guest has a reservation for two nights and wants to ask about
              breakfast, Wi-Fi, and check-out time.
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

            <p>I have a reservation under the name...</p>
            <p>I&apos;d like to check in.</p>
            <p>What time is breakfast?</p>
            <p>Is Wi-Fi free?</p>
            <p>What time is check-out?</p>
            <p>Thank you for your help.</p>
          </div>
        </section>

        {/* Holiday Planning */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Plan Your Holiday
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Imagine you are planning a five-day holiday. Talk about your plans
            with a partner.
          </p>

          <div style={boxStyle}>
            <p>Where are you going?</p>
            <p>How are you going to travel?</p>
            <p>Where are you going to stay?</p>
            <p>What are you going to do?</p>
            <p>What places are you going to visit?</p>
            <p>What are you going to take with you?</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. I have a hotel ______ for three nights.
              <br />
              <strong>(reservation / luggage)</strong>
            </p>

            <p>
              2. Where can I ______ the bus?
              <br />
              <strong>(catch / take)</strong>
            </p>

            <p>
              3. Could I see your ______, please?
              <br />
              <strong>(passport / destination)</strong>
            </p>

            <p>
              4. What time does boarding ______?
              <br />
              <strong>(start / arrive)</strong>
            </p>

            <p>
              5. I have one suitcase and one piece of ______.
              <br />
              <strong>(luggage / flight)</strong>
            </p>

            <p>
              6. How ______ is the city center?
              <br />
              <strong>(far / much)</strong>
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
            <p>1. reservation</p>
            <p>2. catch</p>
            <p>3. passport</p>
            <p>4. start</p>
            <p>5. luggage</p>
            <p>6. far</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I have a reservation of two nights.</p>
            <p>✅ I have a reservation for two nights.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Where I can buy a ticket?</p>
            <p>✅ Where can I buy a ticket?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How much far is the airport?</p>
            <p>✅ How far is the airport?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want check in.</p>
            <p>✅ I want to check in.</p>
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
            <li>Use “I have a reservation” when checking into a hotel.</li>
            <li>Use “Could I...?” for polite requests.</li>
            <li>Use “How can I get to...?” to ask for directions.</li>
            <li>Use “How far is...?” to ask about distance.</li>
            <li>Use travel vocabulary to describe your journey.</li>
            <li>Ask follow-up questions to keep travel conversations natural.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            The goal is to communicate confidently in real travel situations.
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
            href="/resources/listening-speaking/a2/plans-future-activities"
            style={buttonStyle}
          >
            ← Plans & Future Activities
          </Link>

          <Link
            href="/resources/listening-speaking/a2/shopping-services"
            style={buttonStyle}
          >
            Next: Shopping & Services →
          </Link>
        </div>
      </div>
    </main>
  );
}