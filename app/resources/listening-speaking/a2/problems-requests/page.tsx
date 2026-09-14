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

export default function ProblemsRequestsPage() {
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
            Problems & Requests
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to explain simple problems, ask for help, make polite
            requests, and respond to requests in everyday English situations.
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
            <li>Explain common everyday problems.</li>
            <li>Ask for help politely.</li>
            <li>Make simple requests.</li>
            <li>Ask someone to repeat or explain something.</li>
            <li>Respond appropriately to requests.</li>
            <li>Handle simple problems in shops, hotels, restaurants, and travel situations.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
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
              ["problem", "something that is difficult or needs attention"],
              ["request", "something you politely ask someone to do"],
              ["help", "to make a situation easier for someone"],
              ["broken", "not working correctly"],
              ["wrong", "not correct or not as expected"],
              ["missing", "not there when you need it"],
              ["lost", "unable to find something"],
              ["available", "ready to be used or obtained"],
              ["replace", "to give a new thing instead of an old one"],
              ["explain", "to make something clear"],
              ["repeat", "to say something again"],
              ["check", "to look at something carefully"],
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

        {/* Explaining Problems */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Explaining a Problem
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use simple and clear sentences when you need to explain a problem.
          </p>

          <div style={boxStyle}>
            <p>There is a problem with my room.</p>
            <p>My phone isn&apos;t working.</p>
            <p>The air conditioner is broken.</p>
            <p>I can&apos;t find my wallet.</p>
            <p>My order is wrong.</p>
            <p>There is something missing.</p>
            <p>I have a problem with my reservation.</p>
            <p>I don&apos;t understand this.</p>
          </div>
        </section>

        {/* Asking for Help */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Help
          </h2>

          <div style={boxStyle}>
            <p>Can you help me?</p>
            <p>Could you help me, please?</p>
            <p>Can you check this for me?</p>
            <p>Could you take a look at this?</p>
            <p>Can you explain this to me?</p>
            <p>Could you show me how to do this?</p>
            <p>Would you mind helping me?</p>
          </div>
        </section>

        {/* Making Requests */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Polite Requests
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>Could</strong> and <strong>Would</strong> can make requests
            sound more polite.
          </p>

          <div style={boxStyle}>
            <p>Could you open the window, please?</p>
            <p>Could you call me later?</p>
            <p>Would you help me with this?</p>
            <p>Would you check my reservation?</p>
            <p>Could I have some water, please?</p>
            <p>Could I speak to the manager?</p>
          </div>
        </section>

        {/* Listening Practice 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At a Hotel
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation and notice how the guest explains a problem
            and makes polite requests.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Guest:</strong> Excuse me. I have a problem with my
              room.
            </p>

            <p>
              <strong>Receptionist:</strong> I&apos;m sorry to hear that. What
              is the problem?
            </p>

            <p>
              <strong>Guest:</strong> The air conditioner isn&apos;t working.
            </p>

            <p>
              <strong>Receptionist:</strong> I&apos;m sorry about that. Could
              you tell me your room number?
            </p>

            <p>
              <strong>Guest:</strong> Room 204.
            </p>

            <p>
              <strong>Receptionist:</strong> Thank you. I&apos;ll ask someone
              to check it.
            </p>

            <p>
              <strong>Guest:</strong> Thank you. Could you also bring me
              another towel?
            </p>

            <p>
              <strong>Receptionist:</strong> Of course. I&apos;ll send one to
              your room.
            </p>

            <p>
              <strong>Guest:</strong> Thanks for your help.
            </p>
          </div>
        </section>

        {/* Listening Questions 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Where is the guest?</p>
            <p>2. What is the problem with the room?</p>
            <p>3. What is the guest&apos;s room number?</p>
            <p>4. What does the receptionist say she will do?</p>
            <p>5. What else does the guest request?</p>
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
            <p>1. The guest is at a hotel.</p>
            <p>2. The air conditioner isn&apos;t working.</p>
            <p>3. Room 204.</p>
            <p>4. She will ask someone to check the air conditioner.</p>
            <p>5. The guest requests another towel.</p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={boxStyle}>
            <p>Excuse me, I have a problem.</p>
            <p>I&apos;m sorry, but there is a problem with...</p>
            <p>Could you help me, please?</p>
            <p>Could you check this?</p>
            <p>Could you explain that again?</p>
            <p>Could you speak more slowly?</p>
            <p>Would you mind helping me?</p>
            <p>Thank you for your help.</p>
          </div>
        </section>

        {/* Asking for Clarification */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Asking for Clarification
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            If you do not understand something, these expressions can help
            you continue the conversation.
          </p>

          <div style={boxStyle}>
            <p>Could you repeat that, please?</p>
            <p>Could you say that again?</p>
            <p>Could you speak more slowly?</p>
            <p>What does this mean?</p>
            <p>What do you mean?</p>
            <p>Could you explain that?</p>
            <p>Sorry, I didn&apos;t understand.</p>
          </div>
        </section>

        {/* Listening Practice 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At a Restaurant
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me. I think there is a problem
              with my order.
            </p>

            <p>
              <strong>Waiter:</strong> I&apos;m sorry. What&apos;s wrong?
            </p>

            <p>
              <strong>Customer:</strong> I ordered chicken, but this is fish.
            </p>

            <p>
              <strong>Waiter:</strong> I&apos;m very sorry about that. I&apos;ll
              replace it.
            </p>

            <p>
              <strong>Customer:</strong> Thank you. Could you also bring me
              some water, please?
            </p>

            <p>
              <strong>Waiter:</strong> Of course. I&apos;ll bring it right
              away.
            </p>

            <p>
              <strong>Customer:</strong> Thank you very much.
            </p>
          </div>
        </section>

        {/* Listening Questions 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What did the customer order?</p>
            <p>2. What did the customer receive?</p>
            <p>3. What does the waiter offer to do?</p>
            <p>4. What else does the customer request?</p>
            <p>5. Does the waiter agree to help?</p>
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
            <p>1. The customer ordered chicken.</p>
            <p>2. The customer received fish.</p>
            <p>3. The waiter offers to replace it.</p>
            <p>4. The customer requests some water.</p>
            <p>5. Yes, the waiter agrees to help.</p>
          </div>
        </section>

        {/* Requests in Everyday Situations */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Requests in Everyday Situations
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>At a hotel:</strong> Could you bring me another towel?
            </p>

            <p>
              <strong>At a restaurant:</strong> Could I have the menu, please?
            </p>

            <p>
              <strong>At a shop:</strong> Could you help me find this size?
            </p>

            <p>
              <strong>At the airport:</strong> Could you tell me where Gate 12
              is?
            </p>

            <p>
              <strong>At work:</strong> Could you send me the file, please?
            </p>

            <p>
              <strong>At home:</strong> Would you help me with this?
            </p>
          </div>
        </section>

        {/* Useful Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: Can & Could
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Both <strong>can</strong> and <strong>could</strong> can be used
            for requests. <strong>Could</strong> is often more polite.
          </p>

          <div style={boxStyle}>
            <p>Can you help me?</p>
            <p>Could you help me, please?</p>
            <p>Can you check this?</p>
            <p>Could you check this for me?</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>Could I...?</strong> when asking for permission or
            asking for something.
          </p>

          <div style={boxStyle}>
            <p>Could I have some water?</p>
            <p>Could I use your phone?</p>
            <p>Could I speak to the manager?</p>
          </div>
        </section>

        {/* Responding to Requests */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Responding to Requests
          </h2>

          <h3 style={{ color: "#173b78" }}>When You Can Help</h3>

          <div style={boxStyle}>
            <p>Of course.</p>
            <p>Sure.</p>
            <p>Certainly.</p>
            <p>No problem.</p>
            <p>Absolutely.</p>
            <p>I&apos;ll do that right away.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>When You Cannot Help</h3>

          <div style={boxStyle}>
            <p>I&apos;m sorry, I can&apos;t.</p>
            <p>I&apos;m afraid I can&apos;t do that.</p>
            <p>Sorry, but I&apos;m busy right now.</p>
            <p>I&apos;m sorry, but that isn&apos;t possible.</p>
            <p>Maybe another time.</p>
          </div>
        </section>

        {/* Speaking Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Practice these situations aloud. Explain the problem and make a
            polite request.
          </p>

          <div style={boxStyle}>
            <p>1. Your hotel room is too cold.</p>
            <p>2. Your food is wrong at a restaurant.</p>
            <p>3. You cannot find your train platform.</p>
            <p>4. Your phone is not working.</p>
            <p>5. You need help carrying a heavy bag.</p>
            <p>6. You do not understand an English word.</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Customer:</strong> Excuse me. I have a problem with my
              order.
            </p>

            <p>
              <strong>Staff:</strong> I&apos;m sorry. What happened?
            </p>

            <p>
              <strong>Customer:</strong> I ordered a large coffee, but this is
              a small one.
            </p>

            <p>
              <strong>Staff:</strong> I&apos;m sorry about that. I&apos;ll
              replace it.
            </p>

            <p>
              <strong>Customer:</strong> Thank you. Could you make it without
              sugar, please?
            </p>

            <p>
              <strong>Staff:</strong> Of course.
            </p>
          </div>
        </section>

        {/* Role Play 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Hotel Problem
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You are a hotel guest. Your room has
              a problem.
            </p>

            <p>
              <strong>Student B:</strong> You are the receptionist.
            </p>

            <p>
              The guest should explain the problem and make a polite request.
              The receptionist should respond and offer help.
            </p>

            <p>
              <strong>Try to use:</strong>
            </p>

            <p>I have a problem with...</p>
            <p>Could you check...?</p>
            <p>Could you bring me...?</p>
            <p>I&apos;m sorry about that.</p>
            <p>I&apos;ll take care of it.</p>
          </div>
        </section>

        {/* Role Play 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Customer Service
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You bought something, but it is
              broken.
            </p>

            <p>
              <strong>Student B:</strong> You work in customer service.
            </p>

            <p>
              Explain the problem, ask for a replacement, and find a solution
              together.
            </p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. ______ you help me, please?
              <br />
              <strong>(Could / Are)</strong>
            </p>

            <p>
              2. I have a ______ with my room.
              <br />
              <strong>(problem / request)</strong>
            </p>

            <p>
              3. Could you ______ that again?
              <br />
              <strong>(repeat / repeating)</strong>
            </p>

            <p>
              4. My phone isn&apos;t ______.
              <br />
              <strong>(working / work)</strong>
            </p>

            <p>
              5. Could I ______ some water?
              <br />
              <strong>(have / having)</strong>
            </p>

            <p>
              6. I&apos;m sorry, but that isn&apos;t ______.
              <br />
              <strong>(possible / possibility)</strong>
            </p>

            <p>
              7. Would you mind ______ me?
              <br />
              <strong>(helping / help)</strong>
            </p>

            <p>
              8. I&apos;ll ______ it right away.
              <br />
              <strong>(check / checking)</strong>
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
            <p>1. Could</p>
            <p>2. problem</p>
            <p>3. repeat</p>
            <p>4. working</p>
            <p>5. have</p>
            <p>6. possible</p>
            <p>7. helping</p>
            <p>8. check</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ Could you to help me?</p>
            <p>✅ Could you help me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Could you helping me?</p>
            <p>✅ Could you help me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Would you mind help me?</p>
            <p>✅ Would you mind helping me?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Could I having some water?</p>
            <p>✅ Could I have some water?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ Can you to repeat that?</p>
            <p>✅ Can you repeat that?</p>
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
            <li>Explain problems clearly and simply.</li>
            <li>Use “Can you...?” for common requests.</li>
            <li>Use “Could you...?” for more polite requests.</li>
            <li>Use “Could I...?” when asking for something or permission.</li>
            <li>Use “Could you repeat that?” when you do not understand.</li>
            <li>Use “I have a problem with...” to introduce a problem.</li>
            <li>Respond with expressions such as “Of course” and “No problem.”</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Being able to explain problems and make polite requests helps you
            communicate confidently in real-life situations.
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
            href="/resources/listening-speaking/a2/making-suggestions"
            style={buttonStyle}
          >
            ← Making Suggestions
          </Link>

          <Link
            href="/resources/listening-speaking/a2/everyday-conversations"
            style={buttonStyle}
          >
            Next: Everyday Conversations →
          </Link>
        </div>
      </div>
    </main>
  );
}