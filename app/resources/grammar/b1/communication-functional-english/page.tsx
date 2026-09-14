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

export default function CommunicationFunctionalEnglishPage() {
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
          href="/resources/grammar/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "25px",
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
            B1 GRAMMAR & VOCABULARY
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Communication & Functional English
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn useful expressions for everyday communication, social
            situations, requests, opinions, advice, and problem-solving.
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
            <li>Communicate more naturally in everyday situations.</li>
            <li>Make requests politely and clearly.</li>
            <li>Give opinions and respond to other people's ideas.</li>
            <li>Agree and disagree politely.</li>
            <li>Ask for and give advice.</li>
            <li>Offer help and respond to offers.</li>
            <li>Handle common problems and misunderstandings.</li>
            <li>Use functional English with confidence.</li>
          </ul>
        </section>

        {/* Functional English */}
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
            1. What Is Functional English?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Functional English is the language we use to achieve a specific
            purpose in communication.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Instead of only learning grammar rules, you learn expressions that
            help you communicate in real situations.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Asking for information:</strong> Could you tell me where
              the station is?
            </p>

            <p>
              <strong>Making a request:</strong> Could you help me, please?
            </p>

            <p>
              <strong>Giving an opinion:</strong> I think this is a good idea.
            </p>

            <p>
              <strong>Giving advice:</strong> You should talk to your teacher.
            </p>
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
            2. Asking for Information
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use these expressions when you need information.
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
              <strong>Could you tell me...?</strong>
            </p>

            <p>Could you tell me where the bank is?</p>

            <p>
              <strong>Do you know...?</strong>
            </p>

            <p>Do you know what time the train leaves?</p>

            <p>
              <strong>Can you tell me...?</strong>
            </p>

            <p>Can you tell me how to get there?</p>

            <p>
              <strong>I'd like to know...</strong>
            </p>

            <p>I'd like to know more about the course.</p>

            <p>
              <strong>Do you happen to know...?</strong>
            </p>

            <p>Do you happen to know where the nearest pharmacy is?</p>
          </div>
        </section>

        {/* Requests */}
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
            3. Making Requests
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the expression depending on how formal or polite you want
            to sound.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
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
                    Expression
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Can you...?", "Can you open the window?"],
                  ["Could you...?", "Could you send me the information?"],
                  ["Would you mind...?", "Would you mind waiting here?"],
                  ["Could I ask you to...?", "Could I ask you to call me later?"],
                  ["I'd appreciate it if...", "I'd appreciate it if you could help me."],
                ].map(([expression, example]) => (
                  <tr key={expression}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {expression}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Opinions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Giving Opinions
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>I think...</strong> — I think this restaurant is great.
            </p>

            <p>
              <strong>I believe...</strong> — I believe we need more time.
            </p>

            <p>
              <strong>In my opinion...</strong> — In my opinion, the first
              option is better.
            </p>

            <p>
              <strong>Personally, I think...</strong> — Personally, I think we
              should wait.
            </p>

            <p>
              <strong>As far as I'm concerned...</strong> — As far as I'm
              concerned, this is the best solution.
            </p>

            <p>
              <strong>From my point of view...</strong> — From my point of view,
              the plan needs some changes.
            </p>
          </div>
        </section>

        {/* Agree Disagree */}
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
            5. Agreeing and Disagreeing
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Agreeing</h3>

              <p>I agree.</p>
              <p>Exactly.</p>
              <p>That's true.</p>
              <p>I completely agree.</p>
              <p>You're absolutely right.</p>
              <p>That's a good point.</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Disagreeing Politely</h3>

              <p>I see your point, but...</p>
              <p>I'm not sure I agree.</p>
              <p>I understand what you mean, but...</p>
              <p>I have a different opinion.</p>
              <p>I'm afraid I disagree.</p>
              <p>I'm not convinced that's the best idea.</p>
            </div>
          </div>
        </section>

        {/* Advice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Giving Advice
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>You should...</strong> — You should get some rest.
            </p>

            <p>
              <strong>You shouldn't...</strong> — You shouldn't worry too much.
            </p>

            <p>
              <strong>If I were you...</strong> — If I were you, I'd talk to
              him.
            </p>

            <p>
              <strong>Why don't you...?</strong> — Why don't you take a short
              break?
            </p>

            <p>
              <strong>It might be a good idea to...</strong> — It might be a
              good idea to book a hotel early.
            </p>

            <p>
              <strong>Have you thought about...?</strong> — Have you thought
              about taking an online course?
            </p>
          </div>
        </section>

        {/* Offers */}
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
            7. Offering Help
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Can I help you?</strong>
            </p>

            <p>Can I help you with those bags?</p>

            <p>
              <strong>Would you like some help?</strong>
            </p>

            <p>Would you like some help with your project?</p>

            <p>
              <strong>Shall I...?</strong>
            </p>

            <p>Shall I carry that for you?</p>

            <p>
              <strong>Do you want me to...?</strong>
            </p>

            <p>Do you want me to call a taxi?</p>

            <p>
              <strong>Let me...</strong>
            </p>

            <p>Let me help you with that.</p>
          </div>
        </section>

        {/* Responding */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Accepting and Refusing Offers
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Accepting</h3>

              <p>Yes, please.</p>
              <p>That would be great.</p>
              <p>I'd appreciate that.</p>
              <p>Thanks, that would be very helpful.</p>
              <p>Sure, thank you.</p>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Refusing Politely</h3>

              <p>No, thank you.</p>
              <p>Thanks, but I'm okay.</p>
              <p>That's very kind of you, but I can manage.</p>
              <p>Thanks, but I don't need any help.</p>
            </div>
          </div>
        </section>

        {/* Problems */}
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
            9. Talking About Problems
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            These expressions are useful when something goes wrong.
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
              <strong>There's a problem with...</strong>
            </p>

            <p>There's a problem with my internet connection.</p>

            <p>
              <strong>I'm having trouble with...</strong>
            </p>

            <p>I'm having trouble with my computer.</p>

            <p>
              <strong>Something is wrong with...</strong>
            </p>

            <p>Something is wrong with the printer.</p>

            <p>
              <strong>I'm afraid there's been a mistake.</strong>
            </p>

            <p>
              <strong>I'm sorry, but this isn't what I ordered.</strong>
            </p>
          </div>
        </section>

        {/* Clarification */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Asking for Clarification
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Sorry, could you say that again?</p>

            <p>Could you repeat that, please?</p>

            <p>Sorry, I didn't understand.</p>

            <p>What do you mean?</p>

            <p>Could you explain that?</p>

            <p>Could you speak a little more slowly?</p>

            <p>Do you mean that...?</p>

            <p>Could you give me an example?</p>
          </div>
        </section>

        {/* Apologizing */}
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
            11. Apologizing and Responding
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Apologizing</h3>

              <p>I'm sorry.</p>
              <p>I'm really sorry about that.</p>
              <p>I apologize.</p>
              <p>I'm sorry I'm late.</p>
              <p>Please accept my apologies.</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>Responding</h3>

              <p>That's okay.</p>
              <p>No problem.</p>
              <p>Don't worry about it.</p>
              <p>It's all right.</p>
              <p>That's fine.</p>
            </div>
          </div>
        </section>

        {/* Conversation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Real-Life Conversation
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Emma:</strong> Excuse me, could you tell me where the
              train station is?
            </p>

            <p>
              <strong>David:</strong> Sure. It's about five minutes from here.
            </p>

            <p>
              <strong>Emma:</strong> Do I need to take a bus?
            </p>

            <p>
              <strong>David:</strong> No, you can walk. Go straight and turn
              left at the bank.
            </p>

            <p>
              <strong>Emma:</strong> Thanks. I appreciate your help.
            </p>

            <p>
              <strong>David:</strong> You're welcome.
            </p>

            <p>
              <strong>Emma:</strong> One more question. Do you happen to know
              when the next train leaves?
            </p>

            <p>
              <strong>David:</strong> I'm not sure, I'm afraid. You could check
              the timetable at the station.
            </p>

            <p>
              <strong>Emma:</strong> That's a good idea. Thanks again.
            </p>

            <p>
              <strong>David:</strong> No problem. Have a nice day!
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
            13. Essential B1 Expressions
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
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
                    Function
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
                  ["Ask for information", "Could you tell me...?"],
                  ["Make a request", "Would you mind...?"],
                  ["Give an opinion", "In my opinion..."],
                  ["Agree", "That's a good point."],
                  ["Disagree", "I'm not sure I agree."],
                  ["Give advice", "If I were you..."],
                  ["Offer help", "Can I help you?"],
                  ["Accept help", "That would be great."],
                  ["Refuse help", "Thanks, but I'm okay."],
                  ["Clarify", "Could you explain that?"],
                  ["Apologize", "I'm really sorry about that."],
                  ["Respond to an apology", "Don't worry about it."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
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
            14. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ Tell me where is the station.
              <br />
              ✅ Could you tell me where the station is?
            </p>

            <p>
              ❌ I am agree with you.
              <br />
              ✅ I agree with you.
            </p>

            <p>
              ❌ I think should we leave.
              <br />
              ✅ I think we should leave.
            </p>

            <p>
              ❌ Can you to help me?
              <br />
              ✅ Can you help me?
            </p>

            <p>
              ❌ If I would be you, I'd wait.
              <br />
              ✅ If I were you, I'd wait.
            </p>

            <p>
              ❌ I don't understand what do you mean.
              <br />
              ✅ I don't understand what you mean.
            </p>
          </div>
        </section>

        {/* Practice */}
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
            15. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the best expression or complete the sentence.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              __________ tell me where the nearest bank is?
              <br />
              a) Could you &nbsp; b) Do you &nbsp; c) Would you
            </li>

            <li>
              I __________ this is a good idea.
              <br />
              a) think &nbsp; b) am think &nbsp; c) thinking
            </li>

            <li>
              If I were you, I __________ talk to your manager.
              <br />
              a) would &nbsp; b) will &nbsp; c) am
            </li>

            <li>
              __________ you mind opening the window?
              <br />
              a) Would &nbsp; b) Could &nbsp; c) Do
            </li>

            <li>
              “Can I help you?” — “Yes, __________.”
              <br />
              a) that would be great &nbsp; b) no problem &nbsp; c) I'm sorry
            </li>

            <li>
              “I'm sorry I'm late.” — “__________.”
              <br />
              a) That's okay &nbsp; b) I agree &nbsp; c) Exactly
            </li>

            <li>
              “I think we should leave early.” — “__________.”
              <br />
              a) That's a good point &nbsp; b) I'm sorry &nbsp; c) Could you
            </li>

            <li>
              “Could you repeat that?” is used to __________.
              <br />
              a) ask for clarification &nbsp; b) give advice &nbsp; c) apologize
            </li>

            <li>
              “I'm not sure I agree” is a polite way to __________.
              <br />
              a) disagree &nbsp; b) offer help &nbsp; c) ask for information
            </li>

            <li>
              “You should get some rest” is used to __________.
              <br />
              a) give advice &nbsp; b) apologize &nbsp; c) request information
            </li>

            <li>
              “Would you mind waiting here?” is a __________.
              <br />
              a) request &nbsp; b) disagreement &nbsp; c) greeting
            </li>

            <li>
              “Do you happen to know...?” is commonly used to __________.
              <br />
              a) ask for information &nbsp; b) apologize &nbsp; c) refuse an offer
            </li>
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
              Answers
            </h3>

            <p>
              1. a) Could you
              <br />
              2. a) think
              <br />
              3. a) would
              <br />
              4. a) Would
              <br />
              5. a) that would be great
              <br />
              6. a) That's okay
              <br />
              7. a) That's a good point
              <br />
              8. a) ask for clarification
              <br />
              9. a) disagree
              <br />
              10. a) give advice
              <br />
              11. a) request
              <br />
              12. a) ask for information
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
            <li>Use polite expressions when asking for information.</li>
            <li>
              Use <strong>Could you...?</strong> and{" "}
              <strong>Would you mind...?</strong> for polite requests.
            </li>
            <li>
              Use <strong>In my opinion...</strong> and{" "}
              <strong>I think...</strong> to express your ideas.
            </li>
            <li>
              Use phrases such as <strong>That's a good point</strong> to agree
              politely.
            </li>
            <li>
              Use <strong>I'm not sure I agree</strong> to disagree politely.
            </li>
            <li>
              Use <strong>If I were you...</strong> and{" "}
              <strong>You should...</strong> to give advice.
            </li>
            <li>
              Use <strong>Can I help you?</strong> and{" "}
              <strong>Would you like some help?</strong> to offer help.
            </li>
            <li>
              Functional English helps you communicate effectively in real-life
              situations.
            </li>
          </ul>
        </section>

        {/* Final Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources/grammar/b1/collocations"
            style={buttonStyle}
          >
            ← Collocations
          </Link>

          <Link href="/resources/grammar/b1" style={buttonStyle}>
            B1 Grammar ✓
          </Link>
        </div>
      </div>
    </main>
  );
}