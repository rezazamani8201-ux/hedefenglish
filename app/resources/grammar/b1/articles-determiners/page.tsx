"use client";

import Link from "next/link";

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

export default function ArticlesDeterminersPage() {
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
          href="/resources/grammar/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "25px",
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
            B1 GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Articles & Determiners
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to use articles and determiners to talk about people,
            things, quantities, and specific or general information.
          </p>
        </section>

        {/* Learning Goals */}
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
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Review the use of a, an, and the.</li>
            <li>Understand when no article is needed.</li>
            <li>Use determiners such as this, that, each, and every.</li>
            <li>Use quantifiers such as some, any, much, many, and enough.</li>
            <li>Avoid common article and determiner mistakes.</li>
          </ul>
        </section>

        {/* What are determiners */}
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
            1. What Are Determiners?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Determiners are words that come before nouns and help show which
            person or thing we mean, how much there is, or who something
            belongs to.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>a</strong> book
            </p>

            <p>
              <strong>the</strong> car
            </p>

            <p>
              <strong>my</strong> phone
            </p>

            <p>
              <strong>this</strong> house
            </p>

            <p>
              <strong>some</strong> water
            </p>

            <p>
              <strong>many</strong> students
            </p>
          </div>
        </section>

        {/* A and An */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. A and An
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>a</strong> or <strong>an</strong> with singular
            countable nouns when we are talking about one person or thing in a
            general or non-specific way.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>a</strong> before a consonant sound and{" "}
            <strong>an</strong> before a vowel sound.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              a <strong>book</strong>
            </p>

            <p>
              a <strong>car</strong>
            </p>

            <p>
              a <strong>university</strong>
            </p>

            <p>
              an <strong>apple</strong>
            </p>

            <p>
              an <strong>hour</strong>
            </p>

            <p>
              an <strong>interesting</strong> story
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Notice that we choose the article according to the{" "}
            <strong>sound</strong>, not simply the first letter.
          </p>
        </section>

        {/* The */}
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
            3. The
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>the</strong> when the listener or reader knows which
            person or thing we mean.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              I bought a book. <strong>The book</strong> is very interesting.
            </p>

            <p>
              Please close <strong>the door</strong>.
            </p>

            <p>
              Where is <strong>the bathroom</strong>?
            </p>

            <p>
              Can you pass me <strong>the salt</strong>?
            </p>
          </div>
        </section>

        {/* General vs Specific */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. General vs Specific
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The difference between no article, <strong>a/an</strong>, and{" "}
            <strong>the</strong> often depends on whether the noun is general
            or specific.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Dogs</strong> are friendly. → dogs in general
            </p>

            <p>
              I saw <strong>a dog</strong>. → one non-specific dog
            </p>

            <p>
              <strong>The dog</strong> was very friendly. → a specific dog we
              already know
            </p>
          </div>
        </section>

        {/* Zero Article */}
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
            5. No Article
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Sometimes we do not use an article before a noun.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            We often use no article when talking about things in general,
            especially with plural countable nouns and uncountable nouns.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Books</strong> can be expensive.
            </p>

            <p>
              <strong>Children</strong> need sleep.
            </p>

            <p>
              I like <strong>coffee</strong>.
            </p>

            <p>
              <strong>Music</strong> is important to me.
            </p>

            <p>
              We usually have <strong>breakfast</strong> at 8.
            </p>
          </div>
        </section>

        {/* This That These Those */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. This, That, These, Those
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            These determiners show whether something is near or far and whether
            it is singular or plural.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
                background: "#fff",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Determiner
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Use
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    this
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    singular + near
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    this book
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    that
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    singular + far
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    that car
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    these
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    plural + near
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    these books
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>those</td>

                  <td style={{ padding: "14px" }}>
                    plural + far
                  </td>

                  <td style={{ padding: "14px" }}>
                    those houses
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Each and Every */}
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
            7. Each and Every
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Each</strong> and <strong>every</strong> are used with
            singular countable nouns.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Each</strong> emphasizes people or things individually.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Every</strong> emphasizes all the members of a group as a
            whole.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Each student</strong> received a certificate.
            </p>

            <p>
              <strong>Every student</strong> must complete the test.
            </p>

            <p>
              I call my parents <strong>every day</strong>.
            </p>
          </div>
        </section>

        {/* Some Any */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Some and Any
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>some</strong> and <strong>any</strong> with plural
            countable nouns and uncountable nouns.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Some</strong> is common in positive sentences.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Any</strong> is common in negative sentences and questions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              I bought <strong>some apples</strong>.
            </p>

            <p>
              We need <strong>some water</strong>.
            </p>

            <p>
              I don't have <strong>any money</strong>.
            </p>

            <p>
              Are there <strong>any questions</strong>?
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            We can also use <strong>some</strong> in offers and requests.
          </p>

          <p>
            Would you like <strong>some coffee</strong>?
          </p>
        </section>

        {/* Much Many */}
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
            9. Much and Many
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>many</strong> with plural countable nouns and{" "}
            <strong>much</strong> with uncountable nouns.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              There are <strong>many students</strong> in the class.
            </p>

            <p>
              I don't have <strong>many friends</strong> here.
            </p>

            <p>
              We don't have <strong>much time</strong>.
            </p>

            <p>
              How <strong>much money</strong> do you need?
            </p>

            <p>
              How <strong>many books</strong> do you have?
            </p>
          </div>
        </section>

        {/* Few Little */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Few, A Few, Little, A Little
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>few</strong> and <strong>a few</strong> with plural
            countable nouns.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>little</strong> and <strong>a little</strong> with
            uncountable nouns.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              I have <strong>a few friends</strong> here. → some friends
            </p>

            <p>
              I have <strong>few friends</strong> here. → not many; almost none
            </p>

            <p>
              We have <strong>a little time</strong>. → some time
            </p>

            <p>
              We have <strong>little time</strong>. → almost no time
            </p>
          </div>
        </section>

        {/* Enough */}
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
            11. Enough
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Enough</strong> means the amount or number is sufficient.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>enough + noun</strong>.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>adjective + enough</strong>.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              We have <strong>enough food</strong>.
            </p>

            <p>
              There are <strong>enough chairs</strong>.
            </p>

            <p>
              The room is <strong>big enough</strong>.
            </p>

            <p>
              She is <strong>old enough</strong> to drive.
            </p>
          </div>
        </section>

        {/* Too */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Too
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Too</strong> means more than is necessary or desirable.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>too + adjective</strong>.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              The coffee is <strong>too hot</strong>.
            </p>

            <p>
              This bag is <strong>too heavy</strong>.
            </p>

            <p>
              The exercise is <strong>too difficult</strong>.
            </p>

            <p>
              It is <strong>too late</strong> to call him.
            </p>
          </div>
        </section>

        {/* Possessive Determiners */}
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
            13. Possessive Determiners
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Possessive determiners show who something belongs to.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            my • your • his • her • its • our • their
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>This is <strong>my book</strong>.</p>

            <p>Where is <strong>your phone</strong>?</p>

            <p>She forgot <strong>her keys</strong>.</p>

            <p>They sold <strong>their house</strong>.</p>

            <p>We finished <strong>our work</strong>.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            A possessive determiner is followed by a noun.
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
            14. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I have <strong>a money</strong>.
              <br />
              ✅ I have <strong>some money</strong>.
            </p>

            <p>
              ❌ She is <strong>an university</strong> student.
              <br />
              ✅ She is <strong>a university</strong> student.
            </p>

            <p>
              ❌ I like <strong>the coffee</strong> in general.
              <br />
              ✅ I like <strong>coffee</strong> in general.
            </p>

            <p>
              ❌ There are <strong>much people</strong> here.
              <br />
              ✅ There are <strong>many people</strong> here.
            </p>

            <p>
              ❌ We don't have <strong>many time</strong>.
              <br />
              ✅ We don't have <strong>much time</strong>.
            </p>

            <p>
              ❌ I have <strong>few money</strong>.
              <br />
              ✅ I have <strong>little money</strong>.
            </p>

            <p>
              ❌ This is <strong>my a car</strong>.
              <br />
              ✅ This is <strong>my car</strong>.
            </p>
          </div>
        </section>

        {/* Practice */}
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
            15. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct answer.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              I saw __________ interesting movie last night. (a / an / the)
            </li>

            <li>
              __________ movie was about a famous musician. (A / An / The)
            </li>

            <li>
              She is __________ university student. (a / an / the)
            </li>

            <li>
              I don't have __________ money with me. (some / any / many)
            </li>

            <li>
              How __________ students are in your class? (much / many / little)
            </li>

            <li>
              We don't have __________ time. (many / much / few)
            </li>

            <li>
              __________ books are useful for learning languages. (A / The /
              Books)
            </li>

            <li>
              Would you like __________ coffee? (some / any / many)
            </li>

            <li>
              This is __________ phone. (my / a my / the my)
            </li>

            <li>
              I have __________ friends in this city. (a few / a little)
            </li>

            <li>
              There is __________ water in the bottle. (a few / a little)
            </li>

            <li>
              The box is __________ heavy to carry. (too / enough)
            </li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>
              1. an
              <br />
              2. The
              <br />
              3. a
              <br />
              4. any
              <br />
              5. many
              <br />
              6. much
              <br />
              7. Books
              <br />
              8. some
              <br />
              9. my
              <br />
              10. a few
              <br />
              11. a little
              <br />
              12. too
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>
              Use <strong>a/an</strong> with singular countable nouns when
              talking about one non-specific person or thing.
            </li>

            <li>
              Use <strong>the</strong> when the listener knows which person or
              thing we mean.
            </li>

            <li>
              Use no article when talking about many things or uncountable
              things in general.
            </li>

            <li>
              <strong>This/that</strong> are singular;{" "}
              <strong>these/those</strong> are plural.
            </li>

            <li>
              <strong>Each</strong> and <strong>every</strong> are followed by
              singular countable nouns.
            </li>

            <li>
              Use <strong>some</strong> mainly in positive sentences and{" "}
              <strong>any</strong> mainly in negatives and questions.
            </li>

            <li>
              Use <strong>many</strong> with plural countable nouns.
            </li>

            <li>
              Use <strong>much</strong> with uncountable nouns.
            </li>

            <li>
              Use <strong>a few/few</strong> with plural countable nouns.
            </li>

            <li>
              Use <strong>a little/little</strong> with uncountable nouns.
            </li>

            <li>
              Use <strong>enough</strong> for a sufficient amount or number.
            </li>

            <li>
              Use <strong>too</strong> when something is more than necessary or
              desirable.
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources/grammar/b1/gerunds-infinitives"
            style={buttonStyle}
          >
            ← Gerunds & Infinitives
          </Link>

          <Link
            href="/resources/grammar/b1/phrasal-verbs"
            style={buttonStyle}
          >
            Next: Phrasal Verbs →
          </Link>
        </div>
      </div>
    </main>
  );
}