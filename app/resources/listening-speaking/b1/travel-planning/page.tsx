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

export default function TravelPlanningPage() {
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
            B1 LISTENING & SPEAKING — LESSON 11
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Travel & Planning
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
            Talk about travel plans, organize a trip, make arrangements,
            compare travel options, and deal with common situations while
            traveling.
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
            <li>Talk about future travel plans.</li>
            <li>Make travel arrangements and reservations.</li>
            <li>Compare different transportation options.</li>
            <li>Discuss destinations, activities, and itineraries.</li>
            <li>Ask for and give travel information.</li>
            <li>Handle common travel problems confidently.</li>
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
              ["destination", "the place you are traveling to"],
              ["itinerary", "a plan showing where and when you will travel"],
              ["accommodation", "a place where you stay during a trip"],
              ["reservation", "an arrangement to keep a seat, room, or service for you"],
              ["departure", "the act of leaving a place"],
              ["arrival", "the act of reaching a place"],
              ["departure time", "the time when a journey starts"],
              ["return ticket", "a ticket for traveling to a place and back"],
              ["boarding pass", "a document that allows you to get on a plane"],
              ["luggage", "bags and suitcases that you take when traveling"],
              ["travel insurance", "insurance that protects you during a trip"],
              ["guided tour", "a trip led by a person who explains the place"],
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

        {/* Talking About Travel Plans */}
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
            Talking About Travel Plans
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use different future forms to talk about plans, arrangements, and
            intentions.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I&apos;m going to visit Italy next summer.</p>
            <p>We&apos;re planning to stay there for ten days.</p>
            <p>We&apos;re flying on Friday morning.</p>
            <p>I&apos;ve booked a hotel near the city center.</p>
            <p>We&apos;ll probably visit several museums.</p>
            <p>I hope we can try some local food.</p>
            <p>We haven&apos;t decided where to go on the last day yet.</p>
          </div>
        </section>

        {/* Listening Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Read the conversation and pay attention to how the speakers plan a
            weekend trip.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Emma:</strong> Have you decided where you want to go for
              the long weekend?
            </p>

            <p>
              <strong>Daniel:</strong> Yes. I&apos;m thinking about visiting
              Prague. I&apos;ve never been there before.
            </p>

            <p>
              <strong>Emma:</strong> That sounds great. How are you planning
              to get there?
            </p>

            <p>
              <strong>Daniel:</strong> I&apos;m going to take the train. It
              takes a little longer, but it&apos;s more comfortable.
            </p>

            <p>
              <strong>Emma:</strong> Have you booked your accommodation yet?
            </p>

            <p>
              <strong>Daniel:</strong> Not yet. I&apos;m looking for a small
              hotel near the old town.
            </p>

            <p>
              <strong>Emma:</strong> How long are you going to stay?
            </p>

            <p>
              <strong>Daniel:</strong> Three nights. I&apos;d like to visit
              the main attractions on the first two days.
            </p>

            <p>
              <strong>Emma:</strong> Are you going to join a guided tour?
            </p>

            <p>
              <strong>Daniel:</strong> Maybe. I think it would be useful,
              especially because I don&apos;t know much about the history of
              the city.
            </p>

            <p>
              <strong>Emma:</strong> Don&apos;t forget to check the weather
              before you leave.
            </p>

            <p>
              <strong>Daniel:</strong> Good idea. I&apos;ll also make a list
              of the things I need to pack.
            </p>
          </div>
        </section>

        {/* Listening Comprehension */}
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
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>Where is Daniel thinking about going?</li>
            <li>How is he planning to travel?</li>
            <li>Why does he prefer the train?</li>
            <li>Where does he want to stay?</li>
            <li>How long is he going to stay?</li>
            <li>Why might he join a guided tour?</li>
            <li>What does Emma tell him to check?</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. Prague.</p>
            <p>2. He is planning to take the train.</p>
            <p>3. Because it is more comfortable.</p>
            <p>4. In a small hotel near the old town.</p>
            <p>5. Three nights.</p>
            <p>6. Because he does not know much about the city&apos;s history.</p>
            <p>7. The weather.</p>
          </div>
        </section>

        {/* Transportation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Comparing Travel Options
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Compare transportation methods and explain which one you prefer.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            {[
              [
                "Plane",
                "Fast and useful for long distances, but it can be expensive.",
              ],
              [
                "Train",
                "Comfortable and convenient for many journeys.",
              ],
              [
                "Bus",
                "Usually affordable, but journeys can take longer.",
              ],
              [
                "Car",
                "Flexible because you can stop and change your route.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#173b78", marginTop: 0 }}>
                  {title}
                </h3>

                <p style={{ lineHeight: 1.7, color: "#667085" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Making Reservations */}
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
            Making Travel Reservations
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Practice useful language for booking transportation and
            accommodation.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I&apos;d like to book a double room for three nights.</p>
            <p>Do you have any rooms available next weekend?</p>
            <p>Could I book a seat on the morning train?</p>
            <p>What time does the train leave?</p>
            <p>How much is a return ticket?</p>
            <p>Does the price include breakfast?</p>
            <p>Can I cancel the reservation if my plans change?</p>
          </div>
        </section>

        {/* Asking for Information */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Travel Information
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Could you tell me how to get to the city center?</p>
            <p>Is there a bus from the airport?</p>
            <p>How long does the journey take?</p>
            <p>Where can I buy a ticket?</p>
            <p>Which platform does the train leave from?</p>
            <p>Is the museum within walking distance?</p>
            <p>What would you recommend visiting?</p>
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
            Dealing With Travel Problems
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use clear and polite language when something goes wrong during
            your trip.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>My flight has been delayed.</p>
            <p>My luggage hasn&apos;t arrived.</p>
            <p>I think I&apos;ve lost my passport.</p>
            <p>My reservation is not showing in the system.</p>
            <p>Could you help me, please?</p>
            <p>What should I do now?</p>
            <p>Is there another flight available?</p>
            <p>Could you tell me when the next train leaves?</p>
          </div>
        </section>

        {/* Itinerary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Creating an Itinerary
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Imagine you are planning a three-day trip. Organize your schedule
            using time expressions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Day 1:</strong> Arrive in the morning, check into the
              hotel, and explore the city center.
            </p>

            <p>
              <strong>Day 2:</strong> Visit the main museum, have lunch in a
              local restaurant, and take a walking tour.
            </p>

            <p>
              <strong>Day 3:</strong> Visit a local market, buy souvenirs,
              and return home in the evening.
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
            Useful Travel & Planning Expressions
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
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
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Function
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Make a plan", "I'm planning to..."],
                  ["Express intention", "I'm going to..."],
                  ["Make an arrangement", "We're flying on Friday."],
                  ["Ask for information", "Could you tell me...?"],
                  ["Ask about price", "How much does it cost?"],
                  ["Make a reservation", "I'd like to book..."],
                  ["Ask for advice", "What would you recommend?"],
                  ["Compare options", "It's more convenient than..."],
                  ["Deal with a problem", "There seems to be a problem with..."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
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

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each topic. Give details,
            reasons, and examples.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe a trip you are planning or would like to take.",
              "Which type of transportation do you prefer and why?",
              "Describe your ideal holiday destination.",
              "Plan a three-day trip to a city you would like to visit.",
              "What do you usually do before going on a trip?",
              "Describe a travel problem you have experienced or could experience.",
            ].map((topic, index) => (
              <div
                key={topic}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Topic {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Challenge */}
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
            Discussion Challenge
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            You and a friend have a limited budget for a five-day holiday.
            Choose the best travel plan.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Option A:</strong> A cheap hotel far from the city
              center.
            </p>

            <p>
              <strong>Option B:</strong> A more expensive hotel in the city
              center.
            </p>

            <p>
              <strong>Option C:</strong> A hostel with shared rooms.
            </p>

            <p>
              <strong>Option D:</strong> An apartment where you can cook your
              own meals.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Compare the options and decide which one offers the best balance
            between comfort, price, location, and convenience.
          </p>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#eef4ff",
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
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You are at a hotel reception desk.
              There is a problem with your reservation.
            </p>

            <p>
              <strong>Student A:</strong> You are the guest. Explain the
              problem and ask for a solution.
            </p>

            <p>
              <strong>Student B:</strong> You are the receptionist. Ask for
              information and offer possible solutions.
            </p>

            <p>
              Try to use polite expressions such as “Could you help me,
              please?”, “There seems to be a problem with...”, “Let me check
              that for you,” and “Would you like...?”
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
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
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I am going to travel last week.
              <br />
              ✅ I am going to travel next week.
            </p>

            <p>
              ❌ We will going to Paris.
              <br />
              ✅ We are going to Paris.
            </p>

            <p>
              ❌ I booked a room for three night.
              <br />
              ✅ I booked a room for three nights.
            </p>

            <p>
              ❌ How much costs the ticket?
              <br />
              ✅ How much does the ticket cost?
            </p>

            <p>
              ❌ Where I can buy a ticket?
              <br />
              ✅ Where can I buy a ticket?
            </p>

            <p>
              ❌ I want to make a reservation of a room.
              <br />
              ✅ I want to make a reservation for a room.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <ol style={{ lineHeight: 2.1 }}>
            <li>Complete: “I&apos;m ______ to visit Spain next year.”</li>
            <li>Complete: “We&apos;re ______ on Friday morning.”</li>
            <li>Complete: “How much ______ a return ticket cost?”</li>
            <li>Complete: “Could you ______ me how to get there?”</li>
            <li>Complete: “I&apos;d like to ______ a double room.”</li>
            <li>Give one advantage of traveling by train.</li>
            <li>Give one disadvantage of traveling by plane.</li>
            <li>Ask a question about hotel availability.</li>
            <li>Suggest one activity for a three-day trip.</li>
            <li>Explain what you would do if your luggage disappeared.</li>
          </ol>

          <div
            style={{
              background: "#fff",
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
              1. going
              <br />
              2. flying
              <br />
              3. does
              <br />
              4. tell
              <br />
              5. book
              <br />
              6. It is comfortable and convenient.
              <br />
              7. It can be expensive.
              <br />
              8. “Do you have any rooms available next weekend?”
              <br />
              9. Visit a museum and explore the city center.
              <br />
              10. I would contact the airline or airport lost-and-found
              service.
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>Use travel vocabulary confidently.</li>
            <li>Talk about future plans and arrangements.</li>
            <li>Make hotel and transportation reservations.</li>
            <li>Ask for travel information politely.</li>
            <li>Compare different travel options.</li>
            <li>Describe an itinerary and travel activities.</li>
            <li>Handle common travel problems effectively.</li>
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
            href="/resources/listening-speaking/b1/environment-lifestyle"
            style={buttonStyle}
          >
            ← Environment & Lifestyle
          </Link>

          <Link
            href="/resources/listening-speaking/b1/communication-review"
            style={buttonStyle}
          >
            Next: Communication Review →
          </Link>
        </div>
      </div>
    </main>
  );
}