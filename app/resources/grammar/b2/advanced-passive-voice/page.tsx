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

export default function AdvancedPassiveVoicePage() {
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
            Advanced Passive Voice
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to use advanced passive structures to describe actions,
            processes, reports, beliefs, and events in formal and professional
            English.
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
            In this lesson, you will move beyond the basic passive voice and
            learn structures commonly used in advanced writing and formal
            communication.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Passive voice across different tenses</li>
            <li>Passive with modal verbs</li>
            <li>Perfect and continuous passive structures</li>
            <li>Reporting structures</li>
            <li>Passive with two objects</li>
            <li>Get-passive</li>
            <li>When to use and avoid the passive voice</li>
          </ul>
        </section>

        {/* Basic Passive Review */}
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
            1. Passive Voice Review
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We use the passive voice when the action is more important than
            the person or thing performing it, or when the performer is
            unknown or obvious.
          </p>

          <div style={boxStyle}>
            <strong>Active:</strong> The company launched the product last
            year.
            <br />
            <br />
            <strong>Passive:</strong> The product was launched last year.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The basic passive structure is:
          </p>

          <div style={boxStyle}>
            <strong>be + past participle</strong>
          </div>
        </section>

        {/* Passive Across Tenses */}
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
            2. Passive Voice Across Tenses
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The passive can be formed in different tenses by changing the form
            of <strong>be</strong>.
          </p>

          <div style={boxStyle}>
            <strong>Present Simple:</strong>
            <br />
            English is spoken in many countries.
            <br />
            <br />

            <strong>Past Simple:</strong>
            <br />
            The building was completed in 1998.
            <br />
            <br />

            <strong>Present Perfect:</strong>
            <br />
            The documents have been sent.
            <br />
            <br />

            <strong>Past Perfect:</strong>
            <br />
            The room had been cleaned before the guests arrived.
            <br />
            <br />

            <strong>Future:</strong>
            <br />
            The results will be announced tomorrow.
          </div>
        </section>

        {/* Continuous Passive */}
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
            3. Continuous Passive
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Continuous passive structures emphasize that an action is in
            progress.
          </p>

          <div style={boxStyle}>
            <strong>Present Continuous Passive:</strong>
            <br />
            The road is being repaired.
            <br />
            <br />

            <strong>Past Continuous Passive:</strong>
            <br />
            The house was being painted when we arrived.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These structures are particularly useful when describing processes
            or actions happening at a specific time.
          </p>
        </section>

        {/* Perfect Passive */}
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
            4. Perfect Passive
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Perfect passive structures focus on an action that has already
            been completed.
          </p>

          <div style={boxStyle}>
            <strong>Present Perfect Passive:</strong>
            <br />
            The project has been completed.
            <br />
            <br />

            <strong>Past Perfect Passive:</strong>
            <br />
            The project had been completed before the deadline.
            <br />
            <br />

            <strong>Future Perfect Passive:</strong>
            <br />
            The project will have been completed by Friday.
          </div>
        </section>

        {/* Modal Passive */}
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
            5. Passive with Modal Verbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Modal verbs can be followed by <strong>be + past participle</strong>
            to express obligation, possibility, ability, or expectation.
          </p>

          <div style={boxStyle}>
            The report must be completed today.
            <br />
            <br />
            The problem can be solved.
            <br />
            <br />
            The meeting may be postponed.
            <br />
            <br />
            All applications should be submitted online.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            For past situations, use:
          </p>

          <div style={boxStyle}>
            <strong>modal + have been + past participle</strong>
            <br />
            <br />
            The mistake should have been avoided.
            <br />
            <br />
            The documents could have been sent earlier.
          </div>
        </section>

        {/* Passive with Two Objects */}
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
            6. Passive with Two Objects
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some verbs, such as <strong>give</strong>, <strong>send</strong>,
            <strong> offer</strong>, and <strong>tell</strong>, can have two
            objects. Either object can sometimes become the subject of a
            passive sentence.
          </p>

          <div style={boxStyle}>
            <strong>Active:</strong>
            <br />
            They gave Sarah a new position.
            <br />
            <br />

            <strong>Passive:</strong>
            <br />
            Sarah was given a new position.
            <br />
            <br />

            <strong>Passive:</strong>
            <br />
            A new position was given to Sarah.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The first passive form is often more natural when the person is the
            main focus.
          </p>
        </section>

        {/* Reporting Structures */}
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
            7. Passive Reporting Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Passive reporting structures are common in formal English,
            especially in news reports, academic writing, and professional
            communication.
          </p>

          <div style={boxStyle}>
            <strong>It is believed that</strong> the company will expand.
            <br />
            <br />
            <strong>It is expected that</strong> prices will increase.
            <br />
            <br />
            <strong>It is thought that</strong> the decision was influenced by
            several factors.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We can also use a passive reporting verb followed by an infinitive.
          </p>

          <div style={boxStyle}>
            The company is believed to be successful.
            <br />
            <br />
            The new system is expected to reduce costs.
            <br />
            <br />
            He is thought to have left the country.
          </div>
        </section>

        {/* Have Something Done */}
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
            8. Have Something Done
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The structure <strong>have + object + past participle</strong> is
            used when we arrange for someone else to do something for us.
          </p>

          <div style={boxStyle}>
            I had my car repaired yesterday.
            <br />
            <br />
            She is having her hair cut tomorrow.
            <br />
            <br />
            We had the house painted last summer.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The focus is not on who performed the action, but on the service or
            result.
          </p>
        </section>

        {/* Get Passive */}
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
            9. The Get-Passive
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Get + past participle</strong> is an alternative to
            <strong> be + past participle</strong>. It is generally more
            informal and often emphasizes a change or an event affecting
            someone.
          </p>

          <div style={boxStyle}>
            He got injured during the match.
            <br />
            <br />
            She got promoted last year.
            <br />
            <br />
            They got married in June.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The get-passive is more common in conversation than in formal
            academic writing.
          </p>
        </section>

        {/* When to Use Passive */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. When to Use the Passive Voice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The passive voice is especially useful when:
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
            }}
          >
            <li>The performer is unknown.</li>
            <li>The performer is not important.</li>
            <li>The action is more important than the performer.</li>
            <li>You are writing in a formal or academic style.</li>
            <li>You want to focus on the result of an action.</li>
          </ul>

          <div style={boxStyle}>
            The documents were destroyed in the fire.
            <br />
            <br />
            The new policy will be introduced next month.
            <br />
            <br />
            Several important discoveries have been made.
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
            11. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The report has completed.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The report has been completed.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The road is repaired now.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The road is being repaired now.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The mistake should have been avoid.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The mistake should have been avoided.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            He is believed that he is rich.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He is believed to be rich.
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
            Complete the sentences using the correct passive structure.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> The new bridge ______ by the end of the year.
            <br />
            <strong>Answer:</strong> will have been completed
            <br />
            <br />

            <strong>2.</strong> The road ______ when we arrived.
            <br />
            <strong>Answer:</strong> was being repaired
            <br />
            <br />

            <strong>3.</strong> The documents should ______ before the meeting.
            <br />
            <strong>Answer:</strong> have been sent
            <br />
            <br />

            <strong>4.</strong> The company is believed ______ a new product.
            <br />
            <strong>Answer:</strong> to be developing
            <br />
            <br />

            <strong>5.</strong> I had my computer ______ yesterday.
            <br />
            <strong>Answer:</strong> repaired
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
            Advanced passive structures allow you to focus on actions, results,
            processes, and information rather than the person performing the
            action. They are especially useful in formal, academic, and
            professional English.
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
            href="/resources/grammar/b2/modal-verbs-past"
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