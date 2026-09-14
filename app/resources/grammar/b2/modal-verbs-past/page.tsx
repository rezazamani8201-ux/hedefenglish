"use client";

import Link from "next/link";

const navStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

const boxStyle = {
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "10px",
  marginTop: "15px",
  lineHeight: 1.8,
};

export default function ModalVerbsPastPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          href="/resources/grammar/b2"
          style={{ ...navStyle, marginBottom: "30px" }}
        >
          ← B2 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "40px 32px",
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
              marginBottom: "15px",
            }}
          >
            B2 GRAMMAR
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "38px",
              lineHeight: 1.25,
              margin: "0 0 15px",
            }}
          >
            Modal Verbs in the Past
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to use past modal structures to express possibility,
            certainty, criticism, regret, advice, and missed opportunities.
          </p>
        </section>

        {/* What You Will Learn */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            What You Will Learn
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will learn how modal verbs combine with
            <strong> have + past participle</strong> to describe and evaluate
            past situations.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Could have, might have, and may have</li>
            <li>Must have and can&apos;t have</li>
            <li>Should have and ought to have</li>
            <li>Needn&apos;t have</li>
            <li>Would have</li>
            <li>Criticism, regret, and missed opportunities</li>
            <li>Common mistakes</li>
          </ul>
        </section>

        {/* Basic Structure */}
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
            1. The Basic Structure
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            To talk about a past situation using a modal verb, we commonly use:
          </p>

          <div style={boxStyle}>
            <strong>Modal + have + past participle</strong>
            <br />
            <br />
            could have gone
            <br />
            might have happened
            <br />
            must have forgotten
            <br />
            should have called
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The modal changes the meaning of the sentence. It can show
            possibility, certainty, criticism, regret, or another attitude
            toward the past event.
          </p>
        </section>

        {/* Could Have */}
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
            2. Could Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Could have + past participle</strong> can describe a past
            possibility or an opportunity that existed but was not taken.
          </p>

          <div style={boxStyle}>
            She could have won the competition.
            <br />
            <br />
            We could have taken a taxi.
            <br />
            <br />
            You could have told me about the problem.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In the last example, <strong>could have</strong> can also express
            criticism.
          </p>
        </section>

        {/* May Might Have */}
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
            3. May Have and Might Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>May have</strong> and <strong>might have</strong> express
            possibility about the past.
          </p>

          <div style={boxStyle}>
            She may have missed the train.
            <br />
            <br />
            He might have forgotten the appointment.
            <br />
            <br />
            They may have taken a different route.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The speaker does not know for certain whether the event happened.
          </p>
        </section>

        {/* Must Have */}
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
            4. Must Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Must have + past participle</strong> expresses a strong
            conclusion about something that happened in the past.
          </p>

          <div style={boxStyle}>
            He must have been tired after the long journey.
            <br />
            <br />
            They must have forgotten the meeting.
            <br />
            <br />
            She must have left early.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We use this form when the evidence makes us strongly believe
            something happened.
          </p>
        </section>

        {/* Can't Have */}
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
            5. Can&apos;t Have and Couldn&apos;t Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Can&apos;t have + past participle</strong> expresses a
            strong belief that something did not happen.
          </p>

          <div style={boxStyle}>
            He can&apos;t have forgotten the meeting. I reminded him twice.
            <br />
            <br />
            She can&apos;t have taken the train. I saw her at the airport.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Couldn&apos;t have</strong> can also express that something
            was impossible in the past.
          </p>

          <div style={boxStyle}>
            He couldn&apos;t have done it alone.
            <br />
            <br />
            They couldn&apos;t have arrived before us.
          </div>
        </section>

        {/* Should Have */}
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
            6. Should Have and Ought to Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Should have + past participle</strong> is used to say that
            something was the right or expected thing to do, but it did not
            happen.
          </p>

          <div style={boxStyle}>
            You should have called me.
            <br />
            <br />
            We should have left earlier.
            <br />
            <br />
            He should have studied more carefully.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Ought to have</strong> has a similar meaning.
          </p>

          <div style={boxStyle}>
            You ought to have told the truth.
            <br />
            <br />
            She ought to have arrived by now.
          </div>
        </section>

        {/* Needn't Have */}
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
            7. Needn&apos;t Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Needn&apos;t have + past participle</strong> means that an
            action happened, but it was unnecessary.
          </p>

          <div style={boxStyle}>
            You needn&apos;t have brought an umbrella. It didn&apos;t rain.
            <br />
            <br />
            We needn&apos;t have booked a taxi. The hotel had a free shuttle.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The important point is that the action actually happened, even
            though it was not necessary.
          </p>
        </section>

        {/* Would Have */}
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
            8. Would Have
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Would have + past participle</strong> is commonly used in
            third conditional sentences to describe an unreal past result.
          </p>

          <div style={boxStyle}>
            If I had known, I would have helped you.
            <br />
            <br />
            If they had left earlier, they would have arrived on time.
            <br />
            <br />
            She would have accepted the offer if the salary had been higher.
          </div>
        </section>

        {/* Comparing Meanings */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Comparing the Meanings
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Compare these sentences carefully:
          </p>

          <div style={boxStyle}>
            <strong>She might have left.</strong>
            <br />
            It is possible that she left.
            <br />
            <br />

            <strong>She must have left.</strong>
            <br />
            I strongly believe that she left.
            <br />
            <br />

            <strong>She can&apos;t have left.</strong>
            <br />
            I strongly believe that she did not leave.
            <br />
            <br />

            <strong>She should have left.</strong>
            <br />
            It was expected or advisable for her to leave.
            <br />
            <br />

            <strong>She could have left.</strong>
            <br />
            It was possible for her to leave, but we do not know whether she
            did.
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
            10. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She must has forgotten.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She must have forgotten.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            You should have went earlier.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            You should have gone earlier.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            He might has missed the bus.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He might have missed the bus.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            They couldn't have did that.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            They couldn't have done that.
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

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Complete the sentences with the most suitable modal structure.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> She ______ have forgotten the meeting. I sent
            her a reminder this morning.
            <br />
            <strong>Answer:</strong> might
            <br />
            <br />

            <strong>2.</strong> He ______ have been exhausted after working for
            twelve hours.
            <br />
            <strong>Answer:</strong> must
            <br />
            <br />

            <strong>3.</strong> You ______ have told me earlier.
            <br />
            <strong>Answer:</strong> should
            <br />
            <br />

            <strong>4.</strong> We ______ have taken an umbrella, but we
            decided not to.
            <br />
            <strong>Answer:</strong> could
            <br />
            <br />

            <strong>5.</strong> You ______ have bought so much food. We already
            had plenty.
            <br />
            <strong>Answer:</strong> needn&apos;t
          </div>
        </section>

        {/* Key Point */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Key Point</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
            Past modal structures help you express much more than simple past
            facts. They allow you to show possibility, certainty, criticism,
            regret, advice, and missed opportunities. The key structure to
            remember is <strong>modal + have + past participle</strong>.
          </p>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/grammar/b2/future-perfect-future-continuous"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/reported-speech-reporting-verbs"
            style={{
              ...navStyle,
              background: "#173b78",
              color: "#fff",
              border: "1px solid #173b78",
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}