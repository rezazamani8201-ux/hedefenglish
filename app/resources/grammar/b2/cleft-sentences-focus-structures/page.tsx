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

export default function CleftSentencesFocusStructuresPage() {
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
            Cleft Sentences & Focus Structures
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to reorganize sentences to emphasize specific
            information and make your English more precise and expressive.
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
            In this lesson, you will learn how cleft sentences and other focus
            structures can highlight the most important information in a
            sentence.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>What cleft sentences are</li>
            <li>It-cleft sentences</li>
            <li>Wh-cleft sentences</li>
            <li>All-cleft structures</li>
            <li>What-cleft structures</li>
            <li>Emphasizing people and places</li>
            <li>Emphasizing time and reason</li>
            <li>Negative and contrastive focus</li>
            <li>Formal and spoken emphasis</li>
            <li>Common mistakes</li>
          </ul>
        </section>

        {/* What Are Cleft Sentences */}
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
            1. What Are Cleft Sentences?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A cleft sentence divides one simple sentence into two parts in
            order to put extra focus on a particular piece of information.
          </p>

          <div style={boxStyle}>
            <strong>Normal sentence:</strong>
            <br />
            Sarah broke the window.
            <br />
            <br />
            <strong>Cleft sentence:</strong>
            <br />
            It was Sarah who broke the window.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The basic meaning stays the same, but the speaker gives special
            attention to <strong>Sarah</strong>.
          </p>
        </section>

        {/* It Cleft */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. It-Cleft Sentences
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The most common cleft structure uses <strong>it</strong> and{" "}
            <strong>be</strong>.
          </p>

          <div style={boxStyle}>
            <strong>Structure:</strong>
            <br />
            It + be + focused information + who/that clause
          </div>

          <div style={boxStyle}>
            It was <strong>John</strong> who called me.
            <br />
            <br />
            It was <strong>yesterday</strong> that we finished the project.
            <br />
            <br />
            It was <strong>at the airport</strong> that I met her.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The focused element can be a person, place, time, object, or
            another important piece of information.
          </p>
        </section>

        {/* People */}
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
            3. Emphasizing People
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            It-clefts are useful when we want to make it clear who performed an
            action.
          </p>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            Maria sent the email.
            <br />
            <br />
            <strong>Focused:</strong>
            <br />
            It was Maria who sent the email.
          </div>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            The manager made the decision.
            <br />
            <br />
            <strong>Focused:</strong>
            <br />
            It was the manager who made the decision.
          </div>
        </section>

        {/* Places and Time */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Emphasizing Places and Time
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We can also focus on where or when something happened.
          </p>

          <div style={boxStyle}>
            It was <strong>in London</strong> that they first met.
            <br />
            <br />
            It was <strong>last summer</strong> that we started the business.
            <br />
            <br />
            It was <strong>at the new office</strong> that she found the file.
          </div>
        </section>

        {/* Wh Cleft */}
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
            5. Wh-Cleft Sentences
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Wh-clefts begin with words such as <strong>what</strong>,{" "}
            <strong>where</strong>, <strong>why</strong>, or{" "}
            <strong>how</strong>.
          </p>

          <div style={boxStyle}>
            <strong>What I need is more time.</strong>
            <br />
            <br />
            <strong>What she wants is a new job.</strong>
            <br />
            <br />
            <strong>What surprised me was his reaction.</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These structures are especially useful when introducing or
            highlighting the main point of a sentence.
          </p>
        </section>

        {/* What I Like */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. What-Cleft Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A common pattern is:
          </p>

          <div style={boxStyle}>
            <strong>What + clause + be + focused information</strong>
          </div>

          <div style={boxStyle}>
            What I really want is <strong>a quiet place to work.</strong>
            <br />
            <br />
            What we need is <strong>a better solution.</strong>
            <br />
            <br />
            What he did was <strong>apologize.</strong>
            <br />
            <br />
            What surprised everyone was <strong>her decision.</strong>
          </div>
        </section>

        {/* All Cleft */}
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
            7. All-Cleft Structures
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>All</strong> can be used to focus on the only thing that
            matters or the complete extent of an action.
          </p>

          <div style={boxStyle}>
            <strong>All I want is a little peace and quiet.</strong>
            <br />
            <br />
            <strong>All she did was complain.</strong>
            <br />
            <br />
            <strong>All we need is more information.</strong>
          </div>
        </section>

        {/* Reason */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Emphasizing Reasons
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Cleft structures can emphasize why something happened.
          </p>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            We left because it was getting late.
            <br />
            <br />
            <strong>Focused:</strong>
            <br />
            The reason we left was that it was getting late.
          </div>

          <div style={boxStyle}>
            <strong>The reason she resigned was that she wanted a change.</strong>
            <br />
            <br />
            <strong>The reason I called was to ask for your advice.</strong>
          </div>
        </section>

        {/* Negative Focus */}
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
            9. Negative and Contrastive Focus
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Cleft structures can be used to correct information or contrast
            one possibility with another.
          </p>

          <div style={boxStyle}>
            <strong>It wasn't John who called. It was David.</strong>
            <br />
            <br />
            <strong>It wasn't the price that worried me. It was the quality.</strong>
            <br />
            <br />
            <strong>What I don't understand is why she left.</strong>
          </div>
        </section>

        {/* Focus with Where */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Focus with Where
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Wh-cleft structures can also focus on locations or situations.
          </p>

          <div style={boxStyle}>
            <strong>Where we need to meet is outside the main entrance.</strong>
            <br />
            <br />
            <strong>Where I would like to go is somewhere quiet.</strong>
            <br />
            <br />
            <strong>Where the problem begins is with communication.</strong>
          </div>
        </section>

        {/* Focus with How */}
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
            11. Focus with How
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>How</strong> can be used to focus on the method or manner
            in which something happens.
          </p>

          <div style={boxStyle}>
            <strong>How she solved the problem was impressive.</strong>
            <br />
            <br />
            <strong>How we communicate is more important than the technology.</strong>
            <br />
            <br />
            <strong>How he managed to escape remains a mystery.</strong>
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
            12. Formal and Academic Focus
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Focus structures are common in formal presentations, academic
            writing, reports, and professional communication.
          </p>

          <div style={boxStyle}>
            <strong>What is particularly important is the need for better
            communication.</strong>
            <br />
            <br />
            <strong>What the study demonstrates is the importance of regular
            practice.</strong>
            <br />
            <br />
            <strong>It was the lack of preparation that caused the problem.</strong>
          </div>
        </section>

        {/* Spoken English */}
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
            13. Focus in Spoken English
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In conversation, speakers often use cleft structures when they
            want to correct, clarify, or strongly emphasize information.
          </p>

          <div style={boxStyle}>
            <strong>A:</strong> Did Sarah call you?
            <br />
            <strong>B:</strong> No, it was <strong>David</strong> who called me.
            <br />
            <br />
            <strong>A:</strong> Why are you upset?
            <br />
            <strong>B:</strong> What bothers me is <strong>the way he spoke to
            me.</strong>
          </div>
        </section>

        {/* Comparing Structures */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. Comparing Focus Structures
          </h2>

          <div style={boxStyle}>
            <strong>Normal:</strong>
            <br />
            Tom bought the car yesterday.
            <br />
            <br />

            <strong>Focus on Tom:</strong>
            <br />
            It was Tom who bought the car yesterday.
            <br />
            <br />

            <strong>Focus on the car:</strong>
            <br />
            It was the car that Tom bought yesterday.
            <br />
            <br />

            <strong>Focus on yesterday:</strong>
            <br />
            It was yesterday that Tom bought the car.
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
            15. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            It was John which called me.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            It was John who called me.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            What I need are more time.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            What I need is more time.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            It was yesterday when we met.
            <br />
            <br />
            <strong>Better:</strong>
            <br />
            It was yesterday that we met.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            What she wants are a new job.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            What she wants is a new job.
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
            Rewrite each sentence using a focus structure.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> Sarah solved the problem.
            <br />
            → It was Sarah who solved the problem.
            <br />
            <br />

            <strong>2.</strong> We met at the airport.
            <br />
            → It was at the airport that we met.
            <br />
            <br />

            <strong>3.</strong> I need more time.
            <br />
            → What I need is more time.
            <br />
            <br />

            <strong>4.</strong> He wants a better job.
            <br />
            → What he wants is a better job.
            <br />
            <br />

            <strong>5.</strong> The quality worried me, not the price.
            <br />
            → It wasn't the price that worried me. It was the quality.
            <br />
            <br />

            <strong>6.</strong> We left because it was getting late.
            <br />
            → The reason we left was that it was getting late.
            <br />
            <br />

            <strong>7.</strong> Maria sent the message.
            <br />
            → It was Maria who sent the message.
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
            Cleft sentences allow you to change the focus of a sentence without
            changing its basic meaning. Use <strong>it-clefts</strong> to
            emphasize a person, place, time, or object, and use{" "}
            <strong>what-clefts</strong> to introduce and emphasize the main
            idea.
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
            href="/resources/grammar/b2/inversion-emphasis"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/linking-devices-complex-sentences"
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