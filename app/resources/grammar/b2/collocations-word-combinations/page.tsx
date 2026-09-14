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

export default function CollocationsWordCombinationsPage() {
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
            Collocations & Word Combinations
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn natural word combinations and use collocations accurately to
            make your English more fluent, precise, and natural.
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
            In this lesson, you will learn why some words naturally occur
            together and how choosing the right combination can improve the
            accuracy and naturalness of your English.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>What collocations are</li>
            <li>Strong and common collocations</li>
            <li>Verb + noun combinations</li>
            <li>Adjective + noun combinations</li>
            <li>Noun + noun combinations</li>
            <li>Adverb + adjective combinations</li>
            <li>Make and do collocations</li>
            <li>Take, have and give collocations</li>
            <li>Academic and formal collocations</li>
            <li>Common mistakes</li>
          </ul>
        </section>

        {/* What Are Collocations */}
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
            1. What Are Collocations?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A collocation is a combination of words that naturally occur
            together in English. A grammatically possible combination is not
            always a natural one.
          </p>

          <div style={boxStyle}>
            <strong>make a decision</strong> ✓
            <br />
            <strong>do homework</strong> ✓
            <br />
            <strong>heavy rain</strong> ✓
            <br />
            <strong>strong coffee</strong> ✓
            <br />
            <strong>deeply concerned</strong> ✓
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            For example, English speakers normally say{" "}
            <strong>make a decision</strong>, not{" "}
            <strong>do a decision</strong>.
          </p>
        </section>

        {/* Verb Noun */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Verb + Noun Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Many common collocations combine a verb with a noun.
          </p>

          <div style={boxStyle}>
            <strong>make a mistake</strong>
            <br />
            I made a serious mistake.
            <br />
            <br />

            <strong>reach a conclusion</strong>
            <br />
            The researchers reached an important conclusion.
            <br />
            <br />

            <strong>raise a question</strong>
            <br />
            The report raises several important questions.
            <br />
            <br />

            <strong>take responsibility</strong>
            <br />
            He took responsibility for the problem.
            <br />
            <br />

            <strong>achieve a goal</strong>
            <br />
            She worked hard to achieve her goal.
          </div>
        </section>

        {/* Adjective Noun */}
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
            3. Adjective + Noun Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Certain adjectives naturally combine with particular nouns.
          </p>

          <div style={boxStyle}>
            <strong>heavy rain</strong>
            <br />
            We had heavy rain last night.
            <br />
            <br />

            <strong>strong argument</strong>
            <br />
            She presented a strong argument.
            <br />
            <br />

            <strong>major problem</strong>
            <br />
            This is a major problem.
            <br />
            <br />

            <strong>deep concern</strong>
            <br />
            The issue is a matter of deep concern.
            <br />
            <br />

            <strong>rapid growth</strong>
            <br />
            The company has experienced rapid growth.
          </div>
        </section>

        {/* Noun Noun */}
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
            4. Noun + Noun Combinations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            English frequently combines two nouns to create a specific concept
            or category.
          </p>

          <div style={boxStyle}>
            <strong>traffic jam</strong>
            <br />
            We were stuck in a traffic jam.
            <br />
            <br />

            <strong>language barrier</strong>
            <br />
            Language barriers can make communication difficult.
            <br />
            <br />

            <strong>data analysis</strong>
            <br />
            The project requires detailed data analysis.
            <br />
            <br />

            <strong>customer service</strong>
            <br />
            The company provides excellent customer service.
            <br />
            <br />

            <strong>job interview</strong>
            <br />
            I have a job interview tomorrow.
          </div>
        </section>

        {/* Adverb Adjective */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Adverb + Adjective Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some adverbs naturally combine with particular adjectives to create
            stronger and more precise meanings.
          </p>

          <div style={boxStyle}>
            <strong>deeply concerned</strong>
            <br />
            We are deeply concerned about the situation.
            <br />
            <br />

            <strong>highly successful</strong>
            <br />
            The project was highly successful.
            <br />
            <br />

            <strong>completely different</strong>
            <br />
            Their approach is completely different.
            <br />
            <br />

            <strong>extremely important</strong>
            <br />
            This information is extremely important.
            <br />
            <br />

            <strong>strongly opposed</strong>
            <br />
            They are strongly opposed to the proposal.
          </div>
        </section>

        {/* Make Do */}
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
            6. Make and Do
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            One of the most common collocation problems for English learners is
            choosing between <strong>make</strong> and <strong>do</strong>.
          </p>

          <div style={boxStyle}>
            <strong>MAKE</strong>
            <br />
            make a decision
            <br />
            make a mistake
            <br />
            make progress
            <br />
            make an effort
            <br />
            make a promise
            <br />
            make a suggestion
          </div>

          <div style={boxStyle}>
            <strong>DO</strong>
            <br />
            do homework
            <br />
            do research
            <br />
            do business
            <br />
            do exercise
            <br />
            do your best
            <br />
            do the work
          </div>
        </section>

        {/* Take Have Give */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Take, Have and Give
          </h2>

          <div style={boxStyle}>
            <strong>TAKE</strong>
            <br />
            take a risk
            <br />
            take responsibility
            <br />
            take action
            <br />
            take notes
            <br />
            take a break
          </div>

          <div style={boxStyle}>
            <strong>HAVE</strong>
            <br />
            have an opportunity
            <br />
            have an effect
            <br />
            have a conversation
            <br />
            have difficulty
            <br />
            have access
          </div>

          <div style={boxStyle}>
            <strong>GIVE</strong>
            <br />
            give advice
            <br />
            give permission
            <br />
            give an example
            <br />
            give a presentation
            <br />
            give someone support
          </div>
        </section>

        {/* Strong Collocations */}
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
            8. Strong Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some words form especially strong combinations. These are useful
            because they allow you to express ideas more naturally and
            precisely.
          </p>

          <div style={boxStyle}>
            <strong>heavy traffic</strong>
            <br />
            There was heavy traffic on the way to work.
            <br />
            <br />

            <strong>strong opposition</strong>
            <br />
            The proposal faced strong opposition.
            <br />
            <br />

            <strong>deeply rooted</strong>
            <br />
            The tradition is deeply rooted in the culture.
            <br />
            <br />

            <strong>highly unlikely</strong>
            <br />
            It is highly unlikely that he will agree.
            <br />
            <br />

            <strong>closely related</strong>
            <br />
            The two issues are closely related.
          </div>
        </section>

        {/* Academic */}
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
            9. Academic and Formal Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Collocations are particularly important in academic and professional
            English.
          </p>

          <div style={boxStyle}>
            <strong>conduct research</strong>
            <br />
            Scientists conducted extensive research.
            <br />
            <br />

            <strong>provide evidence</strong>
            <br />
            The study provides strong evidence.
            <br />
            <br />

            <strong>draw a conclusion</strong>
            <br />
            We can draw several conclusions from the results.
            <br />
            <br />

            <strong>pose a threat</strong>
            <br />
            Climate change poses a serious threat.
            <br />
            <br />

            <strong>play a crucial role</strong>
            <br />
            Education plays a crucial role in development.
            <br />
            <br />

            <strong>address an issue</strong>
            <br />
            The report addresses several important issues.
          </div>
        </section>

        {/* Word Combinations */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Word Combinations and Meaning
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Choosing a different word can change the strength, tone, or meaning
            of an expression.
          </p>

          <div style={boxStyle}>
            <strong>big problem</strong> → common and informal
            <br />
            <br />
            <strong>major problem</strong> → stronger and more formal
            <br />
            <br />
            <strong>serious problem</strong> → emphasizes importance
          </div>

          <div style={boxStyle}>
            <strong>strong possibility</strong>
            <br />
            → something is quite likely
            <br />
            <br />
            <strong>remote possibility</strong>
            <br />
            → something is possible but unlikely
          </div>
        </section>

        {/* Dependent Prepositions */}
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
            11. Collocations with Prepositions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some words naturally require particular prepositions. Learning the
            complete combination helps prevent common errors.
          </p>

          <div style={boxStyle}>
            <strong>interested in</strong>
            <br />
            She is interested in psychology.
            <br />
            <br />

            <strong>responsible for</strong>
            <br />
            He is responsible for the project.
            <br />
            <br />

            <strong>capable of</strong>
            <br />
            She is capable of solving the problem.
            <br />
            <br />

            <strong>aware of</strong>
            <br />
            Are you aware of the risks?
            <br />
            <br />

            <strong>committed to</strong>
            <br />
            The company is committed to improving its services.
          </div>
        </section>

        {/* Learning Strategy */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. How to Learn Collocations
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Do not learn individual words in isolation. Learn useful words as
            complete combinations.
          </p>

          <div style={boxStyle}>
            Instead of learning:
            <br />
            <strong>decision</strong>
            <br />
            <br />
            Learn:
            <br />
            <strong>make a decision</strong>
            <br />
            <strong>reach a decision</strong>
            <br />
            <strong>an important decision</strong>
            <br />
            <strong>a difficult decision</strong>
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            This approach makes it easier to remember vocabulary and use it
            accurately when speaking and writing.
          </p>
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
            Do a decision.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Make a decision.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Strong rain.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Heavy rain.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Make research.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Do research.
            <br />
            <br />
            In academic English:
            <br />
            Conduct research.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Give an advice.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Give advice.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Strongly interested.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Deeply interested.
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
            Choose the most natural word to complete each collocation.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> She ______ a difficult decision.
            <br />
            <strong>Answer:</strong> made
            <br />
            <br />

            <strong>2.</strong> We had ______ rain yesterday.
            <br />
            <strong>Answer:</strong> heavy
            <br />
            <br />

            <strong>3.</strong> The researchers ______ extensive research.
            <br />
            <strong>Answer:</strong> conducted
            <br />
            <br />

            <strong>4.</strong> He took ______ for the mistake.
            <br />
            <strong>Answer:</strong> responsibility
            <br />
            <br />

            <strong>5.</strong> Education plays a ______ role in society.
            <br />
            <strong>Answer:</strong> crucial
            <br />
            <br />

            <strong>6.</strong> They are deeply ______ about the situation.
            <br />
            <strong>Answer:</strong> concerned
            <br />
            <br />

            <strong>7.</strong> The report provides strong ______ of the
            problem.
            <br />
            <strong>Answer:</strong> evidence
            <br />
            <br />

            <strong>8.</strong> We need to ______ action immediately.
            <br />
            <strong>Answer:</strong> take
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
            Collocations help you sound natural and precise in English. At B2
            level, do not only learn what words mean—learn which words naturally
            go together and use the complete combinations in context.
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
            href="/resources/grammar/b2/phrasal-verbs-idiomatic-expressions"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/inversion-emphasis"
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