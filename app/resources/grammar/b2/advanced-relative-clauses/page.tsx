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

export default function AdvancedRelativeClausesPage() {
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
            Advanced Relative Clauses
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to use advanced relative clauses to connect ideas,
            provide precise information, and create more sophisticated English
            sentences.
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
            In this lesson, you will develop your understanding of defining and
            non-defining relative clauses and learn advanced structures used in
            formal and professional English.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Defining and non-defining relative clauses</li>
            <li>Relative pronouns and relative adverbs</li>
            <li>Omitting relative pronouns</li>
            <li>Prepositions in relative clauses</li>
            <li>Reduced relative clauses</li>
            <li>Which referring to a whole clause</li>
            <li>Advanced formal structures</li>
          </ul>
        </section>

        {/* Defining Relative Clauses */}
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
            1. Defining Relative Clauses
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A defining relative clause gives essential information about a
            person or thing. Without the clause, the meaning may be incomplete
            or unclear.
          </p>

          <div style={boxStyle}>
            The woman <strong>who lives next door</strong> is a doctor.
            <br />
            <br />
            The book <strong>that you recommended</strong> was excellent.
            <br />
            <br />
            The company <strong>which hired me</strong> is based in London.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            No commas are used with defining relative clauses.
          </p>
        </section>

        {/* Non-defining */}
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
            2. Non-Defining Relative Clauses
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A non-defining relative clause adds extra information. The sentence
            is already complete without the relative clause.
          </p>

          <div style={boxStyle}>
            My brother, <strong>who lives in Berlin</strong>, is visiting us
            next week.
            <br />
            <br />
            The company, <strong>which was founded in 1995</strong>, now has
            offices worldwide.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Non-defining relative clauses are separated by commas.
          </p>

          <div style={boxStyle}>
            <strong>Important:</strong>
            <br />
            We normally do not use <strong>that</strong> in non-defining
            relative clauses.
          </div>
        </section>

        {/* Relative Pronouns */}
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
            3. Relative Pronouns
          </h2>

          <div style={boxStyle}>
            <strong>who</strong> → people
            <br />
            The student who won the competition received a scholarship.
            <br />
            <br />
            <strong>whom</strong> → people as an object, especially in formal
            English
            <br />
            The person whom I interviewed had extensive experience.
            <br />
            <br />
            <strong>which</strong> → things and animals
            <br />
            The machine which we purchased is very efficient.
            <br />
            <br />
            <strong>that</strong> → people or things in defining clauses
            <br />
            The course that I took was extremely useful.
            <br />
            <br />
            <strong>whose</strong> → possession
            <br />
            The employee whose car was damaged reported the incident.
          </div>
        </section>

        {/* Relative Adverbs */}
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
            4. Relative Adverbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Relative adverbs can connect a noun with additional information
            about time, place, or reason.
          </p>

          <div style={boxStyle}>
            <strong>where</strong> → place
            <br />
            This is the restaurant where we had dinner.
            <br />
            <br />
            <strong>when</strong> → time
            <br />
            I remember the day when we first met.
            <br />
            <br />
            <strong>why</strong> → reason
            <br />
            I understand the reason why she left.
          </div>
        </section>

        {/* Omitting Pronouns */}
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
            5. Omitting Relative Pronouns
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In defining relative clauses, the relative pronoun can often be
            omitted when it is the object of the clause.
          </p>

          <div style={boxStyle}>
            The book <strong>that I bought</strong> was expensive.
            <br />
            <br />
            The book <strong>I bought</strong> was expensive.
          </div>

          <div style={boxStyle}>
            The person <strong>whom we invited</strong> couldn't come.
            <br />
            <br />
            The person <strong>we invited</strong> couldn't come.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            However, the pronoun cannot normally be omitted when it is the
            subject of the relative clause.
          </p>

          <div style={boxStyle}>
            The woman <strong>who called me</strong> was very polite. ✅
            <br />
            <br />
            The woman <strong>called me</strong> was very polite. ❌
          </div>
        </section>

        {/* Prepositions */}
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
            6. Prepositions in Relative Clauses
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In formal English, a preposition can come before{" "}
            <strong>whom</strong> or <strong>which</strong>.
          </p>

          <div style={boxStyle}>
            The company <strong>for which</strong> I work is international.
            <br />
            <br />
            The person <strong>to whom</strong> I spoke was very helpful.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In everyday English, the preposition usually comes at the end.
          </p>

          <div style={boxStyle}>
            The company <strong>which I work for</strong> is international.
            <br />
            <br />
            The person <strong>who I spoke to</strong> was very helpful.
          </div>
        </section>

        {/* Whose */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Advanced Use of Whose
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Whose</strong> is not limited to people. It can also be
            used with organizations, places, and things when showing
            possession or association.
          </p>

          <div style={boxStyle}>
            We visited a company <strong>whose products are sold worldwide.</strong>
            <br />
            <br />
            They live in a city <strong>whose population is growing rapidly.</strong>
            <br />
            <br />
            The project, <strong>whose main objective was to reduce costs</strong>,
            was successful.
          </div>
        </section>

        {/* Reduced Relative Clauses */}
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
            8. Reduced Relative Clauses
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Relative clauses can sometimes be shortened to make sentences more
            concise, especially in formal writing.
          </p>

          <div style={boxStyle}>
            <strong>Full:</strong>
            <br />
            The man <strong>who is standing near the door</strong> is my
            manager.
            <br />
            <br />
            <strong>Reduced:</strong>
            <br />
            The man <strong>standing near the door</strong> is my manager.
          </div>

          <div style={boxStyle}>
            <strong>Full:</strong>
            <br />
            The documents <strong>that were submitted yesterday</strong> are
            being reviewed.
            <br />
            <br />
            <strong>Reduced:</strong>
            <br />
            The documents <strong>submitted yesterday</strong> are being
            reviewed.
          </div>
        </section>

        {/* Which Whole Clause */}
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
            9. Which Referring to a Whole Clause
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In advanced English, <strong>which</strong> can refer to an entire
            previous clause rather than to a single noun.
          </p>

          <div style={boxStyle}>
            The company cancelled the project, <strong>which surprised
            everyone.</strong>
            <br />
            <br />
            She missed the flight, <strong>which caused several problems.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            This structure allows you to comment on or show the result of the
            whole previous statement.
          </p>
        </section>

        {/* What / Whatever */}
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
            10. What and Other Advanced Relative Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>What</strong> can mean &quot;the thing or things that&quot;
            and introduces a noun clause rather than a traditional relative
            clause.
          </p>

          <div style={boxStyle}>
            I don't understand <strong>what you mean.</strong>
            <br />
            <br />
            Take <strong>what you need.</strong>
            <br />
            <br />
            She gave me <strong>what I had asked for.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Other advanced forms include <strong>whatever</strong>,{" "}
            <strong>whoever</strong>, and <strong>wherever</strong>.
          </p>

          <div style={boxStyle}>
            You can choose <strong>whatever you prefer.</strong>
            <br />
            <br />
            <strong>Whoever finishes first</strong> will receive a prize.
            <br />
            <br />
            We can meet <strong>wherever you want.</strong>
          </div>
        </section>

        {/* Formal Structures */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Formal and Academic Style
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In formal writing, relative clauses help connect information while
            keeping sentences precise and organized.
          </p>

          <div style={boxStyle}>
            The research team, <strong>whose findings were published last
            month</strong>, has started a new project.
            <br />
            <br />
            The policy <strong>under which employees can work remotely</strong>
            was introduced last year.
            <br />
            <br />
            The data, <strong>which were collected over a five-year
            period</strong>, support the conclusion.
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
            12. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The man which lives next door is a doctor.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The man who lives next door is a doctor.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            My car, that I bought last year, is very reliable.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            My car, which I bought last year, is very reliable.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The person to who I spoke was helpful.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The person to whom I spoke was helpful.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            The company which products are popular is expanding.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The company whose products are popular is expanding.
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
            Complete the sentences using an appropriate relative structure.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> The woman ______ works in reception is my
            colleague.
            <br />
            <strong>Answer:</strong> who
            <br />
            <br />

            <strong>2.</strong> The company ______ I work for has offices in
            several countries.
            <br />
            <strong>Answer:</strong> which / that
            <br />
            <br />

            <strong>3.</strong> The man to ______ I spoke was the director.
            <br />
            <strong>Answer:</strong> whom
            <br />
            <br />

            <strong>4.</strong> The students ______ their assignments early
            received extra feedback.
            <br />
            <strong>Answer:</strong> submitting
            <br />
            <br />

            <strong>5.</strong> She missed the meeting, ______ caused a delay.
            <br />
            <strong>Answer:</strong> which
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
            Advanced relative clauses help you combine ideas clearly and
            naturally. Pay special attention to commas, relative pronouns,
            prepositions, and reduced structures when writing formal or
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
            href="/resources/grammar/b2/reported-speech-reporting-verbs"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/gerunds-infinitives-verb-patterns"
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