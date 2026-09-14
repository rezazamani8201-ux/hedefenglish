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

export default function CountableUncountablePage() {
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
            Countable & Uncountable Nouns
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn the difference between countable and uncountable nouns and
            how to use them correctly with numbers, articles, and quantity
            expressions.
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
            <li>Understand countable and uncountable nouns.</li>
            <li>Use singular and plural forms correctly.</li>
            <li>Use a, an, some, and any correctly.</li>
            <li>Talk about quantities using much, many, and a lot of.</li>
            <li>Avoid common mistakes with uncountable nouns.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Are Countable Nouns?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Countable nouns are things that we can count individually. They
            have singular and plural forms.
          </p>

          <div style={boxStyle}>
            <p>one apple → two apples</p>
            <p>one book → three books</p>
            <p>one chair → five chairs</p>
            <p>one student → ten students</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>I have one brother.</p>
            <p>She has two sisters.</p>
            <p>There are three cars outside.</p>
            <p>We bought five apples.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Singular and Plural Countable Nouns
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            A singular countable noun refers to one thing. A plural countable
            noun refers to two or more things.
          </p>

          <div style={boxStyle}>
            <p>one dog → two dogs</p>
            <p>one house → four houses</p>
            <p>one lesson → six lessons</p>
            <p>one student → many students</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              marginTop: "15px",
            }}
          >
            <strong>Important:</strong>
            <p style={{ marginBottom: 0 }}>
              Singular countable nouns normally need a determiner such as
              <strong> a, an, the, my, this</strong>, or a number.
            </p>
          </div>

          <div style={boxStyle}>
            <p>✅ I have a car.</p>
            <p>❌ I have car.</p>
            <p>✅ She bought a book.</p>
            <p>❌ She bought book.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. What Are Uncountable Nouns?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Uncountable nouns are things that we do not normally count as
            separate individual units. They usually do not have a plural form.
          </p>

          <div style={boxStyle}>
            <p>water</p>
            <p>milk</p>
            <p>rice</p>
            <p>money</p>
            <p>information</p>
            <p>advice</p>
            <p>furniture</p>
            <p>traffic</p>
          </div>

          <div style={boxStyle}>
            <p>✅ I need some water.</p>
            <p>❌ I need some waters.</p>
            <p>✅ She gave me some advice.</p>
            <p>❌ She gave me some advices.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Common Uncountable Nouns
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              "water",
              "milk",
              "coffee",
              "tea",
              "rice",
              "bread",
              "sugar",
              "salt",
              "money",
              "information",
              "advice",
              "furniture",
              "homework",
              "traffic",
              "weather",
              "music",
            ].map((word) => (
              <div key={word} style={boxStyle}>
                <strong>{word}</strong>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. A / An with Countable Nouns
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We use <strong>a</strong> or <strong>an</strong> with singular
            countable nouns.
          </p>

          <div style={boxStyle}>
            <p>a book</p>
            <p>a car</p>
            <p>a house</p>
            <p>an apple</p>
            <p>an egg</p>
            <p>an orange</p>
          </div>

          <div style={boxStyle}>
            <p>She has a new phone.</p>
            <p>I ate an apple.</p>
            <p>He bought a car.</p>
          </div>

          <div
            style={{
              background: "#fff8e7",
              border: "1px solid #f1dfad",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Remember:</strong>
            <p style={{ marginBottom: 0 }}>
              Do not use <strong>a/an</strong> directly with uncountable
              nouns.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Some and Any
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We often use <strong>some</strong> in affirmative sentences and
            <strong> any</strong> in negative sentences and questions.
          </p>

          <h3 style={{ color: "#173b78" }}>Some</h3>

          <div style={boxStyle}>
            <p>I have some books.</p>
            <p>There is some milk in the fridge.</p>
            <p>We need some information.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Any</h3>

          <div style={boxStyle}>
            <p>I don&apos;t have any money.</p>
            <p>There isn&apos;t any milk.</p>
            <p>Do you have any questions?</p>
            <p>Are there any students here?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Much and Many
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>many</strong> with plural countable nouns and
            <strong> much</strong> with uncountable nouns.
          </p>

          <div style={boxStyle}>
            <p>many books</p>
            <p>many students</p>
            <p>many cars</p>
            <p>much water</p>
            <p>much money</p>
            <p>much time</p>
          </div>

          <div style={boxStyle}>
            <p>How many books do you have?</p>
            <p>How many people are there?</p>
            <p>How much water do you drink?</p>
            <p>How much money do you need?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. A Lot of
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            <strong>A lot of</strong> can be used with both plural countable
            nouns and uncountable nouns.
          </p>

          <div style={boxStyle}>
            <p>a lot of books</p>
            <p>a lot of people</p>
            <p>a lot of cars</p>
            <p>a lot of water</p>
            <p>a lot of money</p>
            <p>a lot of time</p>
          </div>

          <div style={boxStyle}>
            <p>She has a lot of friends.</p>
            <p>We have a lot of work today.</p>
            <p>There is a lot of traffic.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. How to Count Uncountable Nouns
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use containers, units, or pieces to count uncountable
            nouns.
          </p>

          <div style={boxStyle}>
            <p>a bottle of water</p>
            <p>a glass of water</p>
            <p>a cup of coffee</p>
            <p>a piece of advice</p>
            <p>a piece of information</p>
            <p>a loaf of bread</p>
            <p>a slice of bread</p>
            <p>a bag of rice</p>
          </div>

          <div style={boxStyle}>
            <p>I need a bottle of water.</p>
            <p>She gave me a piece of advice.</p>
            <p>We bought two bags of rice.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Countable vs Uncountable
          </h2>

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
                minWidth: "650px",
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
                    Countable
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "15px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Uncountable
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    one book / two books
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    water
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    a student / students
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    information
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    a car / cars
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    money
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    many books
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    much money
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    a few books
                  </td>
                  <td style={{ padding: "15px", borderTop: "1px solid #e5eaf0" }}>
                    a little water
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. A Few and A Little
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>a few</strong> with plural countable nouns and
            <strong> a little</strong> with uncountable nouns.
          </p>

          <div style={boxStyle}>
            <p>I have a few friends in London.</p>
            <p>We need a few chairs.</p>
            <p>There is a little milk in the fridge.</p>
            <p>I need a little time.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong>Remember:</strong>
            <p style={{ marginBottom: 0 }}>
              <strong>A few → countable</strong> &nbsp; | &nbsp;
              <strong>A little → uncountable</strong>
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I need an information.</p>
            <p>✅ I need some information.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She gave me two advices.</p>
            <p>✅ She gave me two pieces of advice.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ How many money do you have?</p>
            <p>✅ How much money do you have?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have much friends.</p>
            <p>✅ I have many friends.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ There are many furniture in the room.</p>
            <p>✅ There is a lot of furniture in the room.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I bought two breads.</p>
            <p>✅ I bought two loaves of bread.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the correct word or expression.
          </p>

          <div style={boxStyle}>
            <p>1. I need some ______. (water / waters)</p>
            <p>2. How ______ books do you have? (much / many)</p>
            <p>3. How ______ money do you need? (much / many)</p>
            <p>4. She has ______ friends. (a lot of / much)</p>
            <p>5. There isn&apos;t ______ milk. (some / any)</p>
            <p>6. I have ______ questions. (a few / a little)</p>
            <p>7. We need ______ information. (a little / a few)</p>
            <p>8. He gave me a piece of ______. (advice / advices)</p>
            <p>9. There are ______ students in the classroom. (much / many)</p>
            <p>10. I bought a ______ of bread. (loaf / loafs)</p>
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
            <p>1. water</p>
            <p>2. many</p>
            <p>3. much</p>
            <p>4. a lot of</p>
            <p>5. any</p>
            <p>6. a few</p>
            <p>7. a little</p>
            <p>8. advice</p>
            <p>9. many</p>
            <p>10. loaf</p>
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
            <li>Countable nouns can be counted individually.</li>
            <li>Countable nouns have singular and plural forms.</li>
            <li>Uncountable nouns normally do not have plural forms.</li>
            <li>Use a/an with singular countable nouns.</li>
            <li>Use many with plural countable nouns.</li>
            <li>Use much with uncountable nouns.</li>
            <li>Use a lot of with both types of nouns.</li>
            <li>Use a few with countable nouns and a little with uncountable nouns.</li>
            <li>Use pieces, bottles, cups, and other units to count uncountable nouns.</li>
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
            href="/resources/grammar/a2/some-any-much-many"
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
            Next: Some, Any, Much & Many →
          </Link>
        </div>
      </div>
    </main>
  );
}