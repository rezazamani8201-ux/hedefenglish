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

export default function ComparativesSuperlativesPage() {
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
          href="/resources/grammar/a2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ← A2 Grammar
        </Link>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 30px",
            border: "1px solid #e5eaf0",
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
            GRAMMAR & VOCABULARY — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Comparatives & Superlatives
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to compare people, places, things, and experiences
            using comparative and superlative adjectives.
          </p>
        </section>

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
            <li>Compare two people or things.</li>
            <li>Say that one thing is different from another.</li>
            <li>Describe the highest or lowest degree of something.</li>
            <li>Use short and long adjectives correctly.</li>
            <li>Use irregular comparative and superlative forms.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Comparative Adjectives
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use comparative adjectives to compare <strong>two</strong>{" "}
            people, places, things, or situations.
          </p>

          <div style={boxStyle}>
            <p>Ali is taller than John.</p>
            <p>This car is faster than that car.</p>
            <p>Today is colder than yesterday.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Basic Structure</h3>

          <div style={boxStyle}>
            <strong>Subject + be + comparative adjective + than + object</strong>
            <p>My house is bigger than yours.</p>
            <p>English is easier than I expected.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Short Adjectives
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With many short adjectives, add <strong>-er</strong>.
          </p>

          <div style={boxStyle}>
            <p>tall → taller</p>
            <p>small → smaller</p>
            <p>fast → faster</p>
            <p>old → older</p>
            <p>cheap → cheaper</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>My brother is taller than me.</p>
            <p>This phone is cheaper than that one.</p>
            <p>A train is faster than a bus.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Spelling Rules
          </h2>

          <h3 style={{ color: "#173b78" }}>
            Adjectives Ending in -e
          </h3>

          <div style={boxStyle}>
            <p>large → larger</p>
            <p>nice → nicer</p>
            <p>safe → safer</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Short Vowel + Consonant
          </h3>

          <div style={boxStyle}>
            <p>big → bigger</p>
            <p>hot → hotter</p>
            <p>thin → thinner</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Adjectives Ending in -y
          </h3>

          <div style={boxStyle}>
            <p>happy → happier</p>
            <p>easy → easier</p>
            <p>busy → busier</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Longer Adjectives
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With many longer adjectives, use <strong>more</strong> before the
            adjective.
          </p>

          <div style={boxStyle}>
            <p>beautiful → more beautiful</p>
            <p>expensive → more expensive</p>
            <p>interesting → more interesting</p>
            <p>comfortable → more comfortable</p>
            <p>important → more important</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>This hotel is more expensive than that one.</p>
            <p>Her story is more interesting than mine.</p>
            <p>This chair is more comfortable than the other one.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Superlative Adjectives
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use superlative adjectives to compare one person or thing with
            a group and say that it has the highest or lowest degree.
          </p>

          <div style={boxStyle}>
            <p>Mount Everest is the highest mountain in the world.</p>
            <p>She is the tallest student in the class.</p>
            <p>This is the cheapest hotel in the city.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Basic Structure</h3>

          <div style={boxStyle}>
            <strong>
              Subject + be + the + superlative adjective + group
            </strong>
            <p>He is the tallest person in the room.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Short Adjectives — Superlative
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With many short adjectives, use <strong>the + -est</strong>.
          </p>

          <div style={boxStyle}>
            <p>tall → the tallest</p>
            <p>small → the smallest</p>
            <p>fast → the fastest</p>
            <p>old → the oldest</p>
            <p>cheap → the cheapest</p>
          </div>

          <div style={boxStyle}>
            <p>John is the tallest boy in the class.</p>
            <p>This is the fastest car here.</p>
            <p>That is the cheapest option.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Longer Adjectives — Superlative
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            With many longer adjectives, use <strong>the most</strong>.
          </p>

          <div style={boxStyle}>
            <p>beautiful → the most beautiful</p>
            <p>expensive → the most expensive</p>
            <p>interesting → the most interesting</p>
            <p>comfortable → the most comfortable</p>
          </div>

          <div style={boxStyle}>
            <p>She is the most beautiful person in the competition.</p>
            <p>This is the most expensive restaurant in town.</p>
            <p>That was the most interesting lesson.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Irregular Forms
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Some common adjectives have irregular comparative and superlative
            forms.
          </p>

          <div
            style={{
              overflowX: "auto",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Adjective
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Comparative
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Superlative
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    good
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    better
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    the best
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    bad
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    worse
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    the worst
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    far
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    farther / further
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    the farthest / furthest
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    little
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    less
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    the least
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    much / many
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    more
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    the most
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Less and More
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use <strong>less</strong> and <strong>more</strong> to show
            a lower or higher degree.
          </p>

          <div style={boxStyle}>
            <p>This car is more expensive than mine.</p>
            <p>This car is less expensive than mine.</p>
            <p>My new job is more interesting.</p>
            <p>My old job was less interesting.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. As ... As
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>as ... as</strong> to say that two things are equal
            or similar in a particular way.
          </p>

          <div style={boxStyle}>
            <p>John is as tall as his brother.</p>
            <p>This phone is as expensive as that one.</p>
            <p>My car is as fast as yours.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Negative Form</h3>

          <div style={boxStyle}>
            <p>This phone isn&apos;t as expensive as that one.</p>
            <p>My car isn&apos;t as fast as yours.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ She is more taller than me.</p>
            <p>✅ She is taller than me.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ This is the most cheapest option.</p>
            <p>✅ This is the cheapest option.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He is more fast than his brother.</p>
            <p>✅ He is faster than his brother.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She is the better student in the class.</p>
            <p>✅ She is the best student in the class.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ My car is as faster as yours.</p>
            <p>✅ My car is as fast as yours.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences with the correct comparative or
            superlative form.
          </p>

          <div style={boxStyle}>
            <p>1. My car is ______ than yours. (fast)</p>
            <p>2. This is the ______ restaurant in town. (expensive)</p>
            <p>3. Sarah is ______ than Anna. (tall)</p>
            <p>4. Today is ______ than yesterday. (cold)</p>
            <p>5. This book is ______ than that book. (interesting)</p>
            <p>6. He is the ______ student in the class. (good)</p>
            <p>7. My new phone is ______ than my old phone. (good)</p>
            <p>8. This bag is as ______ as that one. (expensive)</p>
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
            <p>1. faster</p>
            <p>2. most expensive</p>
            <p>3. taller</p>
            <p>4. colder</p>
            <p>5. more interesting</p>
            <p>6. best</p>
            <p>7. better</p>
            <p>8. expensive</p>
          </div>
        </section>

        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginTop: "30px",
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
            <li>Use comparatives to compare two things.</li>
            <li>Use -er with many short adjectives.</li>
            <li>Use more with many longer adjectives.</li>
            <li>Use superlatives to compare one thing with a group.</li>
            <li>Use the + -est with many short adjectives.</li>
            <li>Use the most with many longer adjectives.</li>
            <li>Remember irregular forms such as good → better → the best.</li>
            <li>Use as ... as for equal comparisons.</li>
          </ul>
        </section>

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
            href="/resources/grammar/a2"
            style={{
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
            }}
          >
            ← A2 Grammar
          </Link>

          <Link
            href="/resources/grammar/a2/countable-uncountable"
            style={{
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
            }}
          >
            Next: Countable & Uncountable Nouns →
          </Link>
        </div>
      </div>
    </main>
  );
}