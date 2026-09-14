"use client";

import Link from "next/link";

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

export default function TravelRealLifeSituationsPage() {
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
          href="/resources/listening-speaking/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
            marginBottom: "25px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            B1 LISTENING & SPEAKING — LESSON 03
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Travel & Real-Life Situations
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Practice practical English for airports, hotels, transportation,
            sightseeing, and unexpected situations while traveling.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Handle common situations at airports and train stations.</li>
            <li>Check in and communicate at hotels.</li>
            <li>Ask for directions and transportation information.</li>
            <li>Describe travel problems clearly.</li>
            <li>Ask for help in unexpected situations.</li>
            <li>Speak more confidently while traveling abroad.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Travel Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["boarding pass", "a document that allows you to board a plane"],
              ["departure", "the time when a plane, train, or bus leaves"],
              ["arrival", "the time when a plane, train, or bus reaches a place"],
              ["platform", "the area where you wait for a train"],
              ["reservation", "an arrangement to keep a room, seat, or service"],
              ["reception", "the front desk in a hotel"],
              ["luggage", "bags and suitcases that you take when traveling"],
              ["destination", "the place you are traveling to"],
              ["delay", "a situation when something happens later than planned"],
              ["refund", "money returned after a payment is cancelled"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  {word}
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Airport Conversation */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            At the Airport
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation and pay attention to the questions and
            expressions commonly used at an airport.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Passenger:</strong> Excuse me, where can I check in for
              Flight 208?
            </p>

            <p>
              <strong>Staff:</strong> You can check in at counter 14.
            </p>

            <p>
              <strong>Passenger:</strong> Thank you. Is the flight on time?
            </p>

            <p>
              <strong>Staff:</strong> Yes, it is. Boarding starts at 6:30.
            </p>

            <p>
              <strong>Passenger:</strong> Great. Which gate should I go to?
            </p>

            <p>
              <strong>Staff:</strong> Gate 22. It&apos;s just past security.
            </p>

            <p>
              <strong>Passenger:</strong> Thanks for your help.
            </p>
          </div>
        </section>

        {/* Listening Comprehension */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>Where can the passenger check in?</li>
            <li>Is the flight on time?</li>
            <li>When does boarding start?</li>
            <li>Which gate should the passenger go to?</li>
            <li>Where is the gate?</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. At counter 14.</p>
            <p>2. Yes, it is.</p>
            <p>3. At 6:30.</p>
            <p>4. Gate 22.</p>
            <p>5. It is just past security.</p>
          </div>
        </section>

        {/* Hotel Conversation */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            At the Hotel
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Guest:</strong> Hi, I have a reservation under the name
              Smith.
            </p>

            <p>
              <strong>Receptionist:</strong> Let me check. Yes, I have your
              reservation here.
            </p>

            <p>
              <strong>Guest:</strong> Great. Could I have my room key, please?
            </p>

            <p>
              <strong>Receptionist:</strong> Of course. You&apos;re in room
              405, on the fourth floor.
            </p>

            <p>
              <strong>Guest:</strong> Is breakfast included?
            </p>

            <p>
              <strong>Receptionist:</strong> Yes. Breakfast is served from
              7:00 to 10:00.
            </p>

            <p>
              <strong>Guest:</strong> Perfect. Is there Wi-Fi in the room?
            </p>

            <p>
              <strong>Receptionist:</strong> Yes. The password is written on
              your key card.
            </p>
          </div>
        </section>

        {/* Asking for Directions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Directions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When you are in a new city, these expressions can help you ask for
            directions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Excuse me, how can I get to the city center?</p>
            <p>Could you tell me how to get to the train station?</p>
            <p>Is there a bus stop near here?</p>
            <p>How far is it from here?</p>
            <p>Is it within walking distance?</p>
            <p>Which bus should I take?</p>
            <p>Where can I catch a taxi?</p>
          </div>
        </section>

        {/* Travel Problems */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Dealing with Travel Problems
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Travel does not always go according to plan. Practice explaining
            problems clearly and asking for help.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              ["Missed flight", "I missed my flight. What should I do?"],
              ["Lost luggage", "My luggage hasn't arrived."],
              ["Train delay", "How long is the delay?"],
              ["Wrong room", "I think there is a problem with my room."],
              ["Lost passport", "I've lost my passport. I need some help."],
              ["Wrong direction", "I think I'm going the wrong way."],
            ].map(([problem, expression]) => (
              <div
                key={problem}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "18px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                    marginBottom: "8px",
                  }}
                >
                  {problem}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475467",
                    lineHeight: 1.7,
                  }}
                >
                  {expression}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-Life Conversation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Real-Life Conversation
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Imagine that your train has been delayed and you need to catch
            another train.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Passenger:</strong> Excuse me, could you help me?
            </p>

            <p>
              <strong>Staff:</strong> Of course. What&apos;s the problem?
            </p>

            <p>
              <strong>Passenger:</strong> My train has been delayed, and I
              have another train to catch.
            </p>

            <p>
              <strong>Staff:</strong> I see. What time does your next train
              leave?
            </p>

            <p>
              <strong>Passenger:</strong> It leaves at 4:15.
            </p>

            <p>
              <strong>Staff:</strong> Let me check the schedule for you.
            </p>

            <p>
              <strong>Passenger:</strong> Thank you. I really appreciate your
              help.
            </p>

            <p>
              <strong>Staff:</strong> No problem. There&apos;s another train
              at 4:30.
            </p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Travel Expressions
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Situation
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Useful Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Ask for help", "Could you help me, please?"],
                  ["Ask for information", "Could you tell me where it is?"],
                  ["Ask about time", "What time does it leave?"],
                  ["Ask about price", "How much does it cost?"],
                  ["Ask about distance", "How far is it from here?"],
                  ["Explain a problem", "There seems to be a problem."],
                  ["Ask for an alternative", "Is there another option?"],
                  ["Confirm information", "So, I need to go to Gate 22, right?"],
                  ["Show thanks", "I really appreciate your help."],
                  ["Respond to thanks", "No problem."],
                ].map(([situation, expression]) => (
                  <tr key={situation}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {situation}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {expression}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Speaking Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Speak for one to two minutes about each situation. Explain the
            problem and say what you would do.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Your flight has been delayed and you need to find out what is happening.",
              "Your luggage has not arrived at the airport.",
              "You have arrived at a hotel but the room is not ready.",
              "You are lost in a new city and need directions.",
              "Your train has been cancelled and you need another option.",
              "You have lost an important document while traveling.",
            ].map((situation, index) => (
              <div
                key={situation}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Situation {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{situation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You are at a hotel in a foreign
              country. Your room has a problem, and you need help from the
              receptionist.
            </p>

            <p>
              Explain the problem, ask for a solution, and respond politely to
              the receptionist.
            </p>

            <p>
              Then change roles and repeat the situation with a different
              problem.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ Where I can find the station?
              <br />
              ✅ Where can I find the station?
            </p>

            <p>
              ❌ How much it costs?
              <br />
              ✅ How much does it cost?
            </p>

            <p>
              ❌ I have a reservation on Smith.
              <br />
              ✅ I have a reservation under the name Smith.
            </p>

            <p>
              ❌ My luggage didn&apos;t arrive yet.
              <br />
              ✅ My luggage hasn&apos;t arrived yet.
            </p>

            <p>
              ❌ How can I go to the city center?
              <br />
              ✅ How can I get to the city center?
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>Ask someone where the train station is.</li>
            <li>Ask when the next bus leaves.</li>
            <li>Ask whether breakfast is included at a hotel.</li>
            <li>Explain that your luggage has not arrived.</li>
            <li>Ask how far the city center is.</li>
            <li>Ask for another option because your train was cancelled.</li>
            <li>Complete: “Could you tell me how to ______ to the airport?”</li>
            <li>Complete: “I have a reservation ______ the name Johnson.”</li>
            <li>Complete: “My flight has been ______.”</li>
            <li>Complete: “I really appreciate your ______.”</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Sample Answers
            </h3>

            <p>
              1. “Excuse me, where is the train station?”
              <br />
              2. “What time does the next bus leave?”
              <br />
              3. “Is breakfast included?”
              <br />
              4. “My luggage hasn&apos;t arrived yet.”
              <br />
              5. “How far is the city center from here?”
              <br />
              6. “Is there another option?”
              <br />
              7. get
              <br />
              8. under
              <br />
              9. delayed
              <br />
              10. help
            </p>
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

          <ul style={{ lineHeight: 1.9 }}>
            <li>Use polite expressions when asking for help.</li>
            <li>Learn common vocabulary for airports, hotels, and transport.</li>
            <li>Ask clear questions about times, places, prices, and directions.</li>
            <li>Explain travel problems clearly and calmly.</li>
            <li>Use phrases such as “Could you help me?” and “Is there another option?”</li>
            <li>Confirm important information before making a decision.</li>
            <li>Practice realistic travel situations to build speaking confidence.</li>
          </ul>
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
            href="/resources/listening-speaking/b1/work-professional-communication"
            style={buttonStyle}
          >
            ← Work & Professional Communication
          </Link>

          <Link
            href="/resources/listening-speaking/b1/health-well-being"
            style={buttonStyle}
          >
            Next: Health & Well-being →
          </Link>
        </div>
      </div>
    </main>
  );
}