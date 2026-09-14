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

export default function PhrasalVerbsIdiomaticExpressionsPage() {
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
            Phrasal Verbs & Idiomatic Expressions
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Master advanced phrasal verbs and idiomatic expressions to make
            your English more natural, flexible, and expressive.
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
            In this lesson, you will learn how phrasal verbs work, how their
            meanings can change with different particles, and how idiomatic
            expressions are used in natural English.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Common advanced phrasal verbs</li>
            <li>Separable and inseparable phrasal verbs</li>
            <li>Three-word phrasal verbs</li>
            <li>Phrasal verbs in formal and informal English</li>
            <li>Idiomatic expressions</li>
            <li>Meaning from context</li>
            <li>Common mistakes</li>
            <li>Natural communication with phrasal verbs</li>
          </ul>
        </section>

        {/* What Are Phrasal Verbs */}
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
            1. What Are Phrasal Verbs?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A phrasal verb is made up of a verb and one or more particles. The
            combination often has a meaning that is different from the original
            verb.
          </p>

          <div style={boxStyle}>
            <strong>look</strong> + <strong>after</strong> → take care of
            <br />
            <br />
            She <strong>looks after</strong> her younger brother.
            <br />
            <br />
            <strong>give</strong> + <strong>up</strong> → stop trying
            <br />
            <br />
            He refused to <strong>give up</strong>.
            <br />
            <br />
            <strong>carry</strong> + <strong>out</strong> → perform
            <br />
            <br />
            The researchers <strong>carried out</strong> a study.
          </div>
        </section>

        {/* Separable */}
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
            2. Separable Phrasal Verbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some phrasal verbs allow the object to come between the verb and
            the particle.
          </p>

          <div style={boxStyle}>
            Please <strong>turn off the light</strong>.
            <br />
            <br />
            Please <strong>turn the light off</strong>.
            <br />
            <br />
            She <strong>picked up the phone</strong>.
            <br />
            <br />
            She <strong>picked the phone up</strong>.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            When the object is a pronoun, it normally comes between the verb and
            the particle.
          </p>

          <div style={boxStyle}>
            Turn <strong>it off</strong>.
            <br />
            <br />
            Pick <strong>it up</strong>.
            <br />
            <br />
            Put <strong>it away</strong>.
          </div>
        </section>

        {/* Inseparable */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Inseparable Phrasal Verbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some phrasal verbs cannot be separated. The object must come after
            the complete expression.
          </p>

          <div style={boxStyle}>
            She <strong>looks after her children</strong>.
            <br />
            <br />
            He <strong>ran into an old friend</strong>.
            <br />
            <br />
            We need to <strong>deal with this problem</strong>.
            <br />
            <br />
            They are <strong>looking into the matter</strong>.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We cannot normally place the object inside these expressions.
          </p>
        </section>

        {/* Three Word */}
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
            4. Three-Word Phrasal Verbs
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some expressions contain a verb followed by two particles.
          </p>

          <div style={boxStyle}>
            <strong>come up with</strong> → produce an idea
            <br />
            <br />
            She came up with an excellent solution.
            <br />
            <br />
            <strong>look forward to</strong> → anticipate positively
            <br />
            <br />
            I look forward to meeting you.
            <br />
            <br />
            <strong>get away with</strong> → avoid punishment
            <br />
            <br />
            He thought he could get away with lying.
            <br />
            <br />
            <strong>put up with</strong> → tolerate
            <br />
            <br />
            I cannot put up with this noise anymore.
          </div>
        </section>

        {/* Common Phrasal Verbs */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Useful Advanced Phrasal Verbs
          </h2>

          <div style={boxStyle}>
            <strong>bring up</strong> → mention a topic
            <br />
            <br />
            She brought up an interesting point.
            <br />
            <br />
            <strong>figure out</strong> → understand or solve
            <br />
            <br />
            We need to figure out what went wrong.
            <br />
            <br />
            <strong>point out</strong> → draw attention to something
            <br />
            <br />
            He pointed out several problems.
            <br />
            <br />
            <strong>work out</strong> → solve or develop successfully
            <br />
            <br />
            We worked out a solution.
            <br />
            <br />
            <strong>take over</strong> → assume control
            <br />
            <br />
            She took over the company last year.
            <br />
            <br />
            <strong>set up</strong> → establish or arrange
            <br />
            <br />
            They set up a new business.
          </div>
        </section>

        {/* Formal vs Informal */}
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
            6. Phrasal Verbs: Formal vs Informal English
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Phrasal verbs are extremely common in everyday English. In formal
            writing, a single-word verb may sometimes sound more appropriate.
          </p>

          <div style={boxStyle}>
            <strong>find out</strong> → discover
            <br />
            <br />
            We need to find out what happened.
            <br />
            <br />
            <strong>investigate</strong> → more formal
            <br />
            <br />
            The authorities will investigate the incident.
          </div>

          <div style={boxStyle}>
            <strong>put off</strong> → postpone
            <br />
            <br />
            They put off the meeting.
            <br />
            <br />
            <strong>postpone</strong> → more formal
            <br />
            <br />
            They postponed the meeting.
          </div>
        </section>

        {/* Idioms */}
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
            7. Idiomatic Expressions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            An idiom is a fixed expression whose meaning cannot always be
            understood by interpreting each word literally.
          </p>

          <div style={boxStyle}>
            <strong>break the ice</strong>
            <br />
            → make people feel more comfortable in a new situation
            <br />
            <br />
            He told a joke to break the ice.
            <br />
            <br />

            <strong>hit the nail on the head</strong>
            <br />
            → describe something exactly
            <br />
            <br />
            You hit the nail on the head with that explanation.
            <br />
            <br />

            <strong>once in a blue moon</strong>
            <br />
            → very rarely
            <br />
            <br />
            We eat out once in a blue moon.
          </div>
        </section>

        {/* More Idioms */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. More Useful Idioms
          </h2>

          <div style={boxStyle}>
            <strong>under the weather</strong>
            <br />
            → feeling slightly ill
            <br />
            <br />
            I am feeling a little under the weather today.
            <br />
            <br />

            <strong>cost an arm and a leg</strong>
            <br />
            → be extremely expensive
            <br />
            <br />
            That car costs an arm and a leg.
            <br />
            <br />

            <strong>on the same page</strong>
            <br />
            → have the same understanding
            <br />
            <br />
            Let's make sure we are all on the same page.
            <br />
            <br />

            <strong>go the extra mile</strong>
            <br />
            → make more effort than expected
            <br />
            <br />
            She always goes the extra mile for her students.
          </div>
        </section>

        {/* Context */}
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
            9. Understanding Meaning from Context
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Many phrasal verbs have more than one meaning. Context helps you
            understand which meaning is intended.
          </p>

          <div style={boxStyle}>
            <strong>take off</strong>
            <br />
            The plane took off at 8:00.
            <br />
            → leave the ground
            <br />
            <br />
            He took off his jacket.
            <br />
            → remove clothing
            <br />
            <br />
            Her business really took off.
            <br />
            → become successful quickly
          </div>

          <div style={boxStyle}>
            <strong>break down</strong>
            <br />
            My car broke down.
            <br />
            → stopped working
            <br />
            <br />
            She broke down in tears.
            <br />
            → suddenly became very emotional
          </div>
        </section>

        {/* Idiomatic Meaning */}
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
            10. Literal vs Idiomatic Meaning
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some expressions can be understood literally in one context and
            idiomatically in another.
          </p>

          <div style={boxStyle}>
            <strong>pick up</strong>
            <br />
            She picked up the book.
            <br />
            → physically lift something
            <br />
            <br />
            I will pick you up at six.
            <br />
            → collect someone by car
          </div>

          <div style={boxStyle}>
            <strong>run into</strong>
            <br />
            The car ran into a wall.
            <br />
            → physically hit something
            <br />
            <br />
            I ran into an old friend yesterday.
            <br />
            → met someone unexpectedly
          </div>
        </section>

        {/* Register */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Choosing the Right Expression
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            At B2 level, it is important to consider not only grammar but also
            register, context, and natural usage.
          </p>

          <div style={boxStyle}>
            <strong>Conversation:</strong>
            <br />
            We need to figure out what happened.
            <br />
            <br />
            <strong>Formal writing:</strong>
            <br />
            We need to determine what happened.
          </div>

          <div style={boxStyle}>
            <strong>Conversation:</strong>
            <br />
            The meeting was called off.
            <br />
            <br />
            <strong>Formal writing:</strong>
            <br />
            The meeting was cancelled.
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
            Please turn off it.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Please turn it off.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I look forward to meet you.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I look forward to meeting you.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She suggested me to go.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She suggested going.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            He explained me the problem.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He explained the problem to me.
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
            Complete the sentences with the correct phrasal verb or expression.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> We need to ______ a solution to this problem.
            <br />
            <strong>Answer:</strong> come up with
            <br />
            <br />

            <strong>2.</strong> Please ______ the lights before you leave.
            <br />
            <strong>Answer:</strong> turn off
            <br />
            <br />

            <strong>3.</strong> I cannot ______ this noise anymore.
            <br />
            <strong>Answer:</strong> put up with
            <br />
            <br />

            <strong>4.</strong> She ______ an interesting point during the
            meeting.
            <br />
            <strong>Answer:</strong> brought up
            <br />
            <br />

            <strong>5.</strong> We haven't seen each other for years. We meet
            only ______.
            <br />
            <strong>Answer:</strong> once in a blue moon
            <br />
            <br />

            <strong>6.</strong> He explained the problem perfectly. He really
            ______.
            <br />
            <strong>Answer:</strong> hit the nail on the head
            <br />
            <br />

            <strong>7.</strong> The company is trying to ______ what caused the
            problem.
            <br />
            <strong>Answer:</strong> find out
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
            Phrasal verbs and idiomatic expressions are essential for natural
            B2-level English. Focus on learning them in context, paying
            attention to their grammar, meaning, and level of formality.
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
            href="/resources/grammar/b2/articles-determiners-quantifiers"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/collocations-word-combinations"
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