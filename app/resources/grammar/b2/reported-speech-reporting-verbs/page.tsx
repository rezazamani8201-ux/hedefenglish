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

export default function ReportedSpeechReportingVerbsPage() {
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
            Reported Speech & Reporting Verbs
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to report what people say, think, believe, and explain
            using advanced reported speech structures and reporting verbs.
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
            In this lesson, you will learn how to report statements, questions,
            commands, and opinions accurately in more advanced English.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Reported statements</li>
            <li>Backshift and changes in time expressions</li>
            <li>Reported questions</li>
            <li>Reported commands and requests</li>
            <li>Advanced reporting verbs</li>
            <li>Reporting verbs with different structures</li>
            <li>Formal reporting patterns</li>
          </ul>
        </section>

        {/* Reported Statements */}
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
            1. Reported Statements
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Reported speech is used to communicate what someone said without
            repeating their exact words.
          </p>

          <div style={boxStyle}>
            <strong>Direct:</strong>
            <br />
            Sarah said, &quot;I am tired.&quot;
            <br />
            <br />
            <strong>Reported:</strong>
            <br />
            Sarah said that she was tired.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When the reporting verb is in the past, the tense often moves one
            step back.
          </p>

          <div style={boxStyle}>
            Present Simple → Past Simple
            <br />
            &quot;I work here.&quot; → He said that he worked there.
            <br />
            <br />
            Present Continuous → Past Continuous
            <br />
            &quot;I am working.&quot; → She said that she was working.
            <br />
            <br />
            Present Perfect → Past Perfect
            <br />
            &quot;I have finished.&quot; → He said that he had finished.
          </div>
        </section>

        {/* Backshift */}
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
            2. Backshift and Time Expressions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Reported speech often requires changes not only to verb tenses but
            also to pronouns, places, and time expressions.
          </p>

          <div style={boxStyle}>
            <strong>today → that day</strong>
            <br />
            <strong>tomorrow → the next day</strong>
            <br />
            <strong>yesterday → the day before</strong>
            <br />
            <strong>now → then</strong>
            <br />
            <strong>this → that</strong>
            <br />
            <strong>these → those</strong>
            <br />
            <strong>here → there</strong>
          </div>

          <div style={boxStyle}>
            <strong>Direct:</strong>
            <br />
            Tom said, &quot;I will finish this tomorrow.&quot;
            <br />
            <br />
            <strong>Reported:</strong>
            <br />
            Tom said that he would finish that the next day.
          </div>
        </section>

        {/* No Backshift */}
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
            3. When Backshift Is Not Necessary
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Backshift is not always required. If the information is still true
            or is a general fact, the original tense can sometimes remain
            unchanged.
          </p>

          <div style={boxStyle}>
            <strong>Direct:</strong>
            <br />
            The teacher said, &quot;Water boils at 100°C.&quot;
            <br />
            <br />
            <strong>Reported:</strong>
            <br />
            The teacher said that water boils at 100°C.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Keeping the present tense can emphasize that the information is
            still true.
          </p>
        </section>

        {/* Reported Questions */}
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
            4. Reported Questions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In reported questions, we use statement word order. We do not use
            the auxiliary <strong>do</strong>, <strong>does</strong>, or
            <strong> did</strong> in the reported question.
          </p>

          <div style={boxStyle}>
            <strong>Direct:</strong>
            <br />
            He asked, &quot;Where do you live?&quot;
            <br />
            <br />
            <strong>Reported:</strong>
            <br />
            He asked where I lived.
          </div>

          <div style={boxStyle}>
            <strong>Yes/No question:</strong>
            <br />
            &quot;Are you ready?&quot;
            <br />
            → She asked if I was ready.
            <br />
            <br />
            &quot;Did they arrive?&quot;
            <br />
            → He asked whether they had arrived.
          </div>
        </section>

        {/* Reported Commands */}
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
            5. Reported Commands and Requests
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Commands and requests are commonly reported using:
          </p>

          <div style={boxStyle}>
            <strong>reporting verb + object + to-infinitive</strong>
          </div>

          <div style={boxStyle}>
            <strong>Direct:</strong>
            <br />
            The manager said, &quot;Finish the report.&quot;
            <br />
            <br />
            <strong>Reported:</strong>
            <br />
            The manager told me to finish the report.
            <br />
            <br />
            <strong>Request:</strong>
            <br />
            She asked me to wait outside.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            For negative commands, use <strong>not to + infinitive</strong>.
          </p>

          <div style={boxStyle}>
            He told us not to touch the equipment.
          </div>
        </section>

        {/* Reporting Verbs */}
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
            6. Advanced Reporting Verbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Instead of always using <strong>say</strong> or{" "}
            <strong>tell</strong>, advanced English uses more precise reporting
            verbs.
          </p>

          <div style={boxStyle}>
            <strong>admit</strong> — accept that something is true
            <br />
            She admitted making a mistake.
            <br />
            <br />
            <strong>deny</strong> — say that something is not true
            <br />
            He denied taking the money.
            <br />
            <br />
            <strong>claim</strong> — say that something is true, especially when
            it may not be certain
            <br />
            They claimed to have seen the accident.
            <br />
            <br />
            <strong>suggest</strong> — introduce an idea
            <br />
            She suggested going by train.
            <br />
            <br />
            <strong>insist</strong> — say firmly that something is necessary or
            true
            <br />
            He insisted on paying the bill.
          </div>
        </section>

        {/* Verb Patterns */}
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
            7. Reporting Verbs and Their Patterns
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Different reporting verbs require different grammatical patterns.
            Learning these patterns is important for accurate advanced English.
          </p>

          <div style={boxStyle}>
            <strong>verb + to-infinitive</strong>
            <br />
            He agreed to help.
            <br />
            She refused to answer.
            <br />
            They promised to return.
          </div>

          <div style={boxStyle}>
            <strong>verb + -ing</strong>
            <br />
            He admitted making a mistake.
            <br />
            She denied taking the money.
            <br />
            They suggested leaving early.
          </div>

          <div style={boxStyle}>
            <strong>verb + object + to-infinitive</strong>
            <br />
            He advised me to wait.
            <br />
            She encouraged him to apply.
            <br />
            They warned us not to enter.
          </div>

          <div style={boxStyle}>
            <strong>verb + preposition + -ing</strong>
            <br />
            He insisted on paying.
            <br />
            She apologized for being late.
            <br />
            They accused him of lying.
          </div>
        </section>

        {/* Formal Reporting */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Formal Reporting Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Formal English often uses passive reporting structures to avoid
            focusing on the person who gave the information.
          </p>

          <div style={boxStyle}>
            It is believed that the economy will improve.
            <br />
            <br />
            The company is reported to be considering several options.
            <br />
            <br />
            The minister is expected to announce the decision soon.
            <br />
            <br />
            The results are thought to have been affected by external factors.
          </div>
        </section>

        {/* Say vs Tell */}
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
            9. Say vs Tell
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Say</strong> normally focuses on the words or information,
            while <strong>tell</strong> is normally followed by a person.
          </p>

          <div style={boxStyle}>
            She said that she was tired.
            <br />
            <br />
            She told me that she was tired.
          </div>

          <div style={boxStyle}>
            <strong>Common mistake:</strong>
            <br />
            She said me that she was tired. ❌
            <br />
            <br />
            She told me that she was tired. ✅
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
            He asked me where did I live.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He asked me where I lived.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She told that she was tired.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She said that she was tired.
            <br />
            <br />
            She told me that she was tired.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            He suggested to take a taxi.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He suggested taking a taxi.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She denied to take the money.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She denied taking the money.
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
            Rewrite the sentences using reported speech or the correct
            reporting verb.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> &quot;I will call you tomorrow,&quot; she said.
            <br />
            <strong>Answer:</strong> She said that she would call me the next
            day.
            <br />
            <br />

            <strong>2.</strong> &quot;Where are you going?&quot; he asked me.
            <br />
            <strong>Answer:</strong> He asked me where I was going.
            <br />
            <br />

            <strong>3.</strong> &quot;Please wait here,&quot; she said.
            <br />
            <strong>Answer:</strong> She asked me to wait there.
            <br />
            <br />

            <strong>4.</strong> He said, &quot;I didn't take the money.&quot;
            <br />
            <strong>Answer:</strong> He denied taking the money.
            <br />
            <br />

            <strong>5.</strong> &quot;Let's take a taxi,&quot; she said.
            <br />
            <strong>Answer:</strong> She suggested taking a taxi.
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
            Advanced reported speech is not only about changing verb tenses.
            Pay attention to word order, pronouns, time expressions, and the
            grammatical pattern required by each reporting verb.
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
            href="/resources/grammar/b2/advanced-relative-clauses"
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