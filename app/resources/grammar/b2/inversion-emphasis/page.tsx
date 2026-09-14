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

export default function InversionEmphasisPage() {
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
            Inversion & Emphasis
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to use inversion and emphasis to create stronger,
            more formal, and more expressive English.
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
            In this lesson, you will learn how English word order can change
            for emphasis, formality, or dramatic effect.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>What inversion is</li>
            <li>Negative adverbial inversion</li>
            <li>Inversion with restrictive expressions</li>
            <li>Only + time expressions</li>
            <li>Not until and not since</li>
            <li>Rarely, seldom, and never</li>
            <li>Hardly, scarcely, and barely</li>
            <li>Not only ... but also</li>
            <li>Emphatic structures</li>
            <li>Common mistakes</li>
          </ul>
        </section>

        {/* What Is Inversion */}
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
            1. What Is Inversion?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Inversion means changing the normal word order of a sentence.
            In English, this often means placing an auxiliary verb before the
            subject.
          </p>

          <div style={boxStyle}>
            <strong>Normal order:</strong>
            <br />
            I had never seen such a beautiful place.
            <br />
            <br />
            <strong>Inverted order:</strong>
            <br />
            Never had I seen such a beautiful place.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Inversion is especially common in formal writing and when the
            speaker wants to create emphasis.
          </p>
        </section>

        {/* Never Rarely */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Never, Rarely, and Seldom
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When negative or restrictive adverbs begin a sentence, inversion
            is often used.
          </p>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            I have never experienced anything like this.
            <br />
            <br />
            <strong>Inverted:</strong>
            <br />
            Never have I experienced anything like this.
          </div>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            She rarely complains about her work.
            <br />
            <br />
            <strong>Inverted:</strong>
            <br />
            Rarely does she complain about her work.
          </div>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            We seldom see him these days.
            <br />
            <br />
            <strong>Inverted:</strong>
            <br />
            Seldom do we see him these days.
          </div>
        </section>

        {/* Only */}
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
            3. Only + Time Expressions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When a sentence begins with expressions such as{" "}
            <strong>only after</strong>, <strong>only when</strong>, or{" "}
            <strong>only then</strong>, inversion can be used in the main
            clause.
          </p>

          <div style={boxStyle}>
            <strong>Only after the meeting did I understand the problem.</strong>
            <br />
            <br />
            <strong>Only when she arrived did we start the meeting.</strong>
            <br />
            <br />
            <strong>Only then did he realize his mistake.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Notice that the auxiliary comes before the subject in the main
            clause.
          </p>
        </section>

        {/* Not Until */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Not Until and Not Since
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Not until</strong> and <strong>not since</strong> can begin
            an emphatic sentence and trigger inversion.
          </p>

          <div style={boxStyle}>
            <strong>Not until midnight did they finish the project.</strong>
            <br />
            <br />
            <strong>Not until I got home did I realize I had lost my keys.</strong>
            <br />
            <br />
            <strong>Not since childhood have I felt this happy.</strong>
          </div>
        </section>

        {/* Hardly */}
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
            5. Hardly, Scarcely, and Barely
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These expressions are often used with inversion to show that one
            event happened immediately before another.
          </p>

          <div style={boxStyle}>
            <strong>Hardly had I arrived when the phone rang.</strong>
            <br />
            <br />
            <strong>Scarcely had we sat down when the lights went out.</strong>
            <br />
            <br />
            <strong>Barely had she finished speaking when everyone started
            laughing.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A common structure is:
          </p>

          <div style={boxStyle}>
            <strong>Hardly / Scarcely / Barely + had + subject + past
            participle + when...</strong>
          </div>
        </section>

        {/* No Sooner */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. No Sooner
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>No sooner</strong> is another formal expression used to
            show that one event happened immediately after another.
          </p>

          <div style={boxStyle}>
            <strong>No sooner had we arrived than it started to rain.</strong>
            <br />
            <br />
            <strong>No sooner had he opened the door than the alarm went off.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Remember that <strong>no sooner</strong> is normally followed by{" "}
            <strong>than</strong>, while <strong>hardly</strong>,{" "}
            <strong>scarcely</strong>, and <strong>barely</strong> are commonly
            followed by <strong>when</strong>.
          </p>
        </section>

        {/* Not Only */}
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
            7. Not Only ... But Also
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When <strong>not only</strong> begins a sentence, inversion is
            required in the first clause.
          </p>

          <div style={boxStyle}>
            <strong>Not only did she pass the exam, but she also got the
            highest score.</strong>
            <br />
            <br />
            <strong>Not only was the hotel expensive, but it was also very
            crowded.</strong>
            <br />
            <br />
            <strong>Not only can he speak English, but he can also speak
            German.</strong>
          </div>
        </section>

        {/* Under No Circumstances */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Other Negative Expressions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Several negative expressions can trigger inversion when they appear
            at the beginning of a sentence.
          </p>

          <div style={boxStyle}>
            <strong>Under no circumstances should you open that door.</strong>
            <br />
            <br />
            <strong>On no account should this information be shared.</strong>
            <br />
            <br />
            <strong>At no time did he admit that he was wrong.</strong>
            <br />
            <br />
            <strong>In no way can this decision be justified.</strong>
          </div>
        </section>

        {/* So Such */}
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
            9. So and Such for Emphasis
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>So</strong> and <strong>such</strong> can be used to make
            an idea more emphatic. In formal structures, inversion may follow.
          </p>

          <div style={boxStyle}>
            <strong>So difficult was the exam that many students gave up.</strong>
            <br />
            <br />
            <strong>So beautiful was the view that we stayed for hours.</strong>
            <br />
            <br />
            <strong>Such was his anger that nobody dared to speak.</strong>
          </div>
        </section>

        {/* Emphasis with Do */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Emphasis with Do, Does, and Did
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We can use <strong>do</strong>, <strong>does</strong>, or{" "}
            <strong>did</strong> before a main verb to add emphasis.
          </p>

          <div style={boxStyle}>
            I <strong>do</strong> understand what you mean.
            <br />
            <br />
            She <strong>does</strong> know the answer.
            <br />
            <br />
            He <strong>did</strong> call you yesterday.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            This structure is especially useful when correcting someone or
            strongly confirming information.
          </p>
        </section>

        {/* Cleft-like emphasis */}
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
            11. Emphasizing Information
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            English can emphasize particular information by changing the
            structure of a sentence.
          </p>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            Sarah solved the problem.
            <br />
            <br />
            <strong>Emphasis:</strong>
            <br />
            It was Sarah who solved the problem.
          </div>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            We met at the airport.
            <br />
            <br />
            <strong>Emphasis:</strong>
            <br />
            It was at the airport that we met.
          </div>
        </section>

        {/* Formal Style */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Inversion in Formal English
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Inversion is more common in formal writing, speeches, reports, and
            literary language than in everyday conversation.
          </p>

          <div style={boxStyle}>
            <strong>Formal:</strong>
            <br />
            Rarely do we encounter such a serious problem.
            <br />
            <br />
            <strong>More conversational:</strong>
            <br />
            We rarely encounter such a serious problem.
          </div>

          <div style={boxStyle}>
            <strong>Formal:</strong>
            <br />
            Under no circumstances should this information be released.
            <br />
            <br />
            <strong>More conversational:</strong>
            <br />
            You should never release this information.
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
            13. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Never I have seen such a thing.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Never have I seen such a thing.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Rarely she goes out at night.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Rarely does she go out at night.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Not only she passed, but she also got the highest score.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Not only did she pass, but she also got the highest score.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            No sooner had he arrived when it started raining.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            No sooner had he arrived than it started raining.
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
            Rewrite each sentence using the word or expression given.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> I had never seen such a beautiful building.
            <br />
            → Never had I seen such a beautiful building.
            <br />
            <br />

            <strong>2.</strong> She rarely makes mistakes.
            <br />
            → Rarely does she make mistakes.
            <br />
            <br />

            <strong>3.</strong> I understood the situation only then.
            <br />
            → Only then did I understand the situation.
            <br />
            <br />

            <strong>4.</strong> We had hardly arrived when it started to snow.
            <br />
            → Hardly had we arrived when it started to snow.
            <br />
            <br />

            <strong>5.</strong> He passed the exam and he also got the highest
            score.
            <br />
            → Not only did he pass the exam, but he also got the highest score.
            <br />
            <br />

            <strong>6.</strong> You should never share this information.
            <br />
            → Under no circumstances should you share this information.
            <br />
            <br />

            <strong>7.</strong> The company did not understand the problem
            until the investigation was completed.
            <br />
            → Not until the investigation was completed did the company
            understand the problem.
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
            Inversion changes normal word order to create emphasis or a more
            formal style. Pay special attention to negative expressions such as
            never, rarely, hardly, not only, and under no circumstances.
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
            href="/resources/grammar/b2/collocations-word-combinations"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/cleft-sentences-focus-structures"
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