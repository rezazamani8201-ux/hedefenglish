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

const buttonStyle = {
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
};

export default function DescribingPeoplePlacesPage() {
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
            ...buttonStyle,
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
            Describing People & Places
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to describe people, appearance, personality, places,
            buildings, and locations using clear and useful English.
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
            <li>Describe someone&apos;s physical appearance.</li>
            <li>Talk about personality and character.</li>
            <li>Describe clothes and colors.</li>
            <li>Describe places, buildings, and neighborhoods.</li>
            <li>Talk about where things are.</li>
            <li>Give simple opinions about people and places.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Describing Appearance
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can describe people by talking about their height, build, hair,
            eyes, age, and other physical features.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Height:</strong> tall, short, medium-height
            </p>
            <p>
              <strong>Build:</strong> thin, slim, strong, fit, heavy
            </p>
            <p>
              <strong>Hair:</strong> long, short, straight, curly, wavy
            </p>
            <p>
              <strong>Hair color:</strong> black, brown, blonde, gray
            </p>
            <p>
              <strong>Eyes:</strong> blue, green, brown, dark
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>She is tall and slim.</p>
            <p>He has short black hair.</p>
            <p>She has long curly hair.</p>
            <p>He has brown eyes.</p>
            <p>My brother is medium-height.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. “Be” vs. “Have”
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>be</strong> for general characteristics such as height
            and build. Use <strong>have / has</strong> for hair, eyes, and
            other features.
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
                <tr style={{ background: "#eef4ff" }}>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Use
                  </th>
                  <th style={{ padding: "14px", textAlign: "left" }}>
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    be + adjective
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    She is tall.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    be + adjective
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    He is slim.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    have + noun
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    She has blue eyes.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    have + noun
                  </td>
                  <td style={{ padding: "14px", borderTop: "1px solid #e5eaf0" }}>
                    He has short hair.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Describing Personality
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Personality adjectives tell us what a person is like.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Positive:</strong> friendly, kind, helpful, funny,
              polite, honest, patient, generous, hardworking
            </p>

            <p>
              <strong>Other:</strong> quiet, serious, shy, confident, active,
              calm, talkative
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>My sister is very friendly.</p>
            <p>He is quiet but very kind.</p>
            <p>She is hardworking and patient.</p>
            <p>My friend is funny and talkative.</p>
            <p>Our teacher is helpful and polite.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Asking About People
          </h2>

          <div style={boxStyle}>
            <p>What does she look like?</p>
            <p>What does he look like?</p>
            <p>What is she like?</p>
            <p>What is he like?</p>
            <p>How old is she?</p>
            <p>What color is her hair?</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <p>
              <strong>What does she look like?</strong> asks about physical
              appearance.
            </p>

            <p style={{ marginBottom: 0 }}>
              <strong>What is she like?</strong> asks about personality or
              character.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Describing Clothes
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can describe what someone is wearing using{" "}
            <strong>is wearing</strong> or <strong>are wearing</strong>.
          </p>

          <div style={boxStyle}>
            <p>She is wearing a blue dress.</p>
            <p>He is wearing black trousers.</p>
            <p>She is wearing a white shirt.</p>
            <p>They are wearing jeans and T-shirts.</p>
            <p>He is wearing a brown jacket.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Useful Clothing Words</h3>

          <div style={boxStyle}>
            <p>shirt • T-shirt • trousers • jeans • dress</p>
            <p>skirt • jacket • coat • shoes • boots</p>
            <p>hat • scarf • sweater • shorts</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Describing Places
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can describe a place by talking about its size, location,
            atmosphere, and features.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Size:</strong> big, small, large, spacious, crowded
            </p>
            <p>
              <strong>Atmosphere:</strong> quiet, busy, peaceful, noisy,
              relaxing
            </p>
            <p>
              <strong>Appearance:</strong> beautiful, modern, old, clean,
              colorful
            </p>
            <p>
              <strong>Location:</strong> central, nearby, outside the city,
              near the beach
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Examples</h3>

          <div style={boxStyle}>
            <p>The city is busy and crowded.</p>
            <p>The village is quiet and peaceful.</p>
            <p>The hotel is modern and clean.</p>
            <p>The park is large and beautiful.</p>
            <p>The restaurant is small but comfortable.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Describing Buildings
          </h2>

          <div style={boxStyle}>
            <p>The house is old but beautiful.</p>
            <p>The building is very tall.</p>
            <p>The hotel has ten floors.</p>
            <p>The apartment is small but comfortable.</p>
            <p>The museum is modern and spacious.</p>
            <p>The restaurant has a large garden.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Useful Building Words</h3>

          <div style={boxStyle}>
            <p>building • floor • room • entrance • garden</p>
            <p>balcony • window • door • kitchen • bathroom</p>
            <p>street • corner • neighborhood • center</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Describing Locations
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use prepositions and location expressions to explain where a
            person or place is.
          </p>

          <div style={boxStyle}>
            <p>The bank is next to the supermarket.</p>
            <p>The hotel is opposite the station.</p>
            <p>The café is near the park.</p>
            <p>The school is behind the library.</p>
            <p>The restaurant is between the hotel and the bank.</p>
            <p>The shop is in the city center.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Comparing People and Places
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can use comparative adjectives to compare two people or places.
          </p>

          <div style={boxStyle}>
            <p>Ali is taller than Reza.</p>
            <p>This hotel is cheaper than that hotel.</p>
            <p>My city is busier than my hometown.</p>
            <p>The blue house is bigger than the white house.</p>
            <p>This restaurant is more comfortable than the other one.</p>
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
              Short adjectives usually use <strong>-er + than</strong>.
            </p>
            <p style={{ marginBottom: 0 }}>
              Long adjectives usually use <strong>more + adjective + than</strong>.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Giving Opinions About People and Places
          </h2>

          <div style={boxStyle}>
            <p>I think she is very friendly.</p>
            <p>In my opinion, this city is beautiful.</p>
            <p>I think the hotel is comfortable.</p>
            <p>For me, this neighborhood is too noisy.</p>
            <p>I feel that the park is a great place to relax.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Example: Describing a Person
          </h2>

          <div style={boxStyle}>
            <p>
              My friend Anna is 25 years old. She is tall and slim. She has
              long brown hair and green eyes. She usually wears casual clothes.
              She is friendly, kind, and very helpful. She enjoys talking to
              people and meeting new friends.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Example: Describing a Place
          </h2>

          <div style={boxStyle}>
            <p>
              My hometown is a small and peaceful city. It has many parks and
              beautiful old buildings. The city center is usually busy, but the
              neighborhoods are quiet. There are many cafés and restaurants
              near the main square. I think it is a comfortable place to live.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ She has tall.</p>
            <p>✅ She is tall.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He is blue eyes.</p>
            <p>✅ He has blue eyes.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What is she look like?</p>
            <p>✅ What does she look like?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What does he like?</p>
            <p>✅ What is he like?</p>
          </div>

          <div style={boxStyle}>
            <p>❌ She wearing a red dress.</p>
            <p>✅ She is wearing a red dress.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ The hotel is more cheaper.</p>
            <p>✅ The hotel is cheaper.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose the best answer.
          </p>

          <div style={boxStyle}>
            <p>
              1. She ______ tall and slim.
              <br />
              (is / has)
            </p>

            <p>
              2. He ______ short black hair.
              <br />
              (is / has)
            </p>

            <p>
              3. What does she ______ like?
              <br />
              (look / looks)
            </p>

            <p>
              4. What ______ he like?
              <br />
              (is / does)
            </p>

            <p>
              5. She is ______ a blue jacket.
              <br />
              (wearing / wear)
            </p>

            <p>
              6. The village is quiet and ______.
              <br />
              (peaceful / peace)
            </p>

            <p>
              7. The bank is ______ the supermarket.
              <br />
              (next to / next)
            </p>

            <p>
              8. My city is ______ than my hometown.
              <br />
              (busy / busier)
            </p>

            <p>
              9. Which sentence describes personality?
              <br />
              (She is kind. / She has brown eyes.)
            </p>

            <p>
              10. Which sentence describes a place?
              <br />
              (The park is beautiful. / He has curly hair.)
            </p>
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
            <p>1. is</p>
            <p>2. has</p>
            <p>3. look</p>
            <p>4. is</p>
            <p>5. wearing</p>
            <p>6. peaceful</p>
            <p>7. next to</p>
            <p>8. busier</p>
            <p>9. She is kind.</p>
            <p>10. The park is beautiful.</p>
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
            <li>
              Use <strong>be + adjective</strong> to describe general
              appearance.
            </li>
            <li>
              Use <strong>have / has + noun</strong> for hair and eyes.
            </li>
            <li>
              Use <strong>What does he/she look like?</strong> for appearance.
            </li>
            <li>
              Use <strong>What is he/she like?</strong> for personality.
            </li>
            <li>
              Use <strong>be wearing</strong> to describe clothes.
            </li>
            <li>Use adjectives such as quiet, busy, modern, and beautiful to describe places.</li>
            <li>
              Use location expressions such as <strong>next to</strong>,{" "}
              <strong>near</strong>, <strong>behind</strong>, and{" "}
              <strong>opposite</strong>.
            </li>
            <li>
              Use comparative adjectives to compare people and places.
            </li>
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
            href="/resources/grammar/a2/giving-opinions"
            style={buttonStyle}
          >
            ← Giving Opinions
          </Link>

          <Link
            href="/resources/grammar/a2/everyday-conversations"
            style={buttonStyle}
          >
            Next: Everyday Conversations →
          </Link>
        </div>
      </div>
    </main>
  );
}