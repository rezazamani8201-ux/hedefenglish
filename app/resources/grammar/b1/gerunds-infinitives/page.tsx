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

export default function GerundsInfinitivesPage() {
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
            Gerunds & Infinitives
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn when to use gerunds and infinitives after verbs,
            expressions, and prepositions.
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
            <li>Understand what gerunds and infinitives are.</li>
            <li>Use gerunds after common verbs and prepositions.</li>
            <li>Use infinitives after common verbs and expressions.</li>
            <li>Understand verbs that can take both forms.</li>
            <li>Avoid common gerund and infinitive mistakes.</li>
          </ul>
        </section>

        {/* What is a Gerund */}
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
            1. What Is a Gerund?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            A gerund is the <strong>-ing</strong> form of a verb used as a
            noun.
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
              <strong>Swimming</strong> is good exercise.
            </p>

            <p>
              I enjoy <strong>reading</strong>.
            </p>

            <p>
              She is interested in <strong>learning</strong> English.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            A gerund looks like a verb, but it can function as a noun in a
            sentence.
          </p>
        </section>

        {/* What is an Infinitive */}
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
            2. What Is an Infinitive?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            An infinitive is usually formed with <strong>to + base verb</strong>.
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
              I want <strong>to learn</strong> English.
            </p>

            <p>
              She decided <strong>to leave</strong> early.
            </p>

            <p>
              They hope <strong>to visit</strong> London.
            </p>
          </div>
        </section>

        {/* Gerunds after verbs */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Gerunds After Common Verbs
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some verbs are normally followed by a gerund.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Common verbs include:
          </p>

          <p style={{ lineHeight: 1.9 }}>
            enjoy • avoid • finish • mind • suggest • keep • consider • miss
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
              I enjoy <strong>reading</strong>.
            </p>

            <p>
              She avoided <strong>talking</strong> about the problem.
            </p>

            <p>
              He finished <strong>doing</strong> his homework.
            </p>

            <p>
              Do you mind <strong>waiting</strong>?
            </p>

            <p>
              They suggested <strong>taking</strong> a taxi.
            </p>
          </div>
        </section>

        {/* Infinitives after verbs */}
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
            4. Infinitives After Common Verbs
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Many common verbs are followed by an infinitive.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            want • need • decide • hope • plan • promise • learn • agree •
            refuse
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
              I want <strong>to improve</strong> my English.
            </p>

            <p>
              She decided <strong>to stay</strong>.
            </p>

            <p>
              We hope <strong>to see</strong> you soon.
            </p>

            <p>
              They plan <strong>to travel</strong> next summer.
            </p>

            <p>
              He promised <strong>to help</strong> me.
            </p>
          </div>
        </section>

        {/* Gerunds after prepositions */}
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
            5. Gerunds After Prepositions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            After a preposition, we normally use a gerund.
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
              She is good at <strong>speaking</strong> English.
            </p>

            <p>
              Thank you for <strong>helping</strong> me.
            </p>

            <p>
              I left without <strong>saying</strong> goodbye.
            </p>

            <p>
              He is interested in <strong>learning</strong> languages.
            </p>

            <p>
              We talked about <strong>moving</strong> to another city.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Remember: the word <strong>to</strong> can sometimes be a
            preposition, so it can also be followed by a gerund.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            I look forward to <strong>meeting</strong> you.
          </p>
        </section>

        {/* Infinitive of purpose */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Infinitive of Purpose
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We often use <strong>to + verb</strong> to explain the purpose of
            an action.
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
              I went to the shop <strong>to buy</strong> some milk.
            </p>

            <p>
              She studies every day <strong>to improve</strong> her English.
            </p>

            <p>
              He called me <strong>to ask</strong> a question.
            </p>

            <p>
              We went outside <strong>to get</strong> some fresh air.
            </p>
          </div>
        </section>

        {/* Adjective + infinitive */}
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
            7. Adjective + Infinitive
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We often use an infinitive after an adjective.
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
              I am happy <strong>to help</strong>.
            </p>

            <p>
              She is ready <strong>to leave</strong>.
            </p>

            <p>
              It is difficult <strong>to understand</strong>.
            </p>

            <p>
              He was surprised <strong>to see</strong> me.
            </p>

            <p>
              They are excited <strong>to start</strong>.
            </p>
          </div>
        </section>

        {/* Both forms */}
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
            8. Verbs That Can Take Both Forms
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some verbs can be followed by either a gerund or an infinitive.
          </p>

          <p style={{ lineHeight: 1.9 }}>
            like • love • hate • prefer • start • begin • continue
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
              I like <strong>reading</strong>.
            </p>

            <p>
              I like <strong>to read</strong>.
            </p>

            <p>
              She started <strong>working</strong>.
            </p>

            <p>
              She started <strong>to work</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            In many everyday situations, the meaning is very similar.
          </p>
        </section>

        {/* Meaning changes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Verbs Where the Meaning Can Change
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some verbs have different meanings depending on whether they are
            followed by a gerund or an infinitive.
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
              <strong>Remember doing</strong> something = remember a past
              action.
            </p>

            <p>
              I remember <strong>meeting</strong> her.
            </p>

            <p style={{ marginTop: "18px" }}>
              <strong>Remember to do</strong> something = remember that you
              need to do it.
            </p>

            <p>
              Remember <strong>to call</strong> me.
            </p>

            <p style={{ marginTop: "18px" }}>
              <strong>Stop doing</strong> something = finish an activity.
            </p>

            <p>
              He stopped <strong>smoking</strong>.
            </p>

            <p style={{ marginTop: "18px" }}>
              <strong>Stop to do</strong> something = stop one activity in
              order to do another.
            </p>

            <p>
              We stopped <strong>to have</strong> a coffee.
            </p>
          </div>
        </section>

        {/* Make / Let */}
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
            10. Make and Let
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            After <strong>make</strong> and <strong>let</strong>, we normally
            use the base verb without <strong>to</strong>.
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
              My parents make me <strong>study</strong>.
            </p>

            <p>
              The teacher made us <strong>work</strong> harder.
            </p>

            <p>
              Let me <strong>help</strong> you.
            </p>

            <p>
              She let her children <strong>play</strong> outside.
            </p>
          </div>
        </section>

        {/* Common patterns */}
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
            11. Common Patterns
          </h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "15px",
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
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Pattern
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
                    enjoy + gerund
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    I enjoy reading.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    decide + infinitive
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    She decided to leave.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    preposition + gerund
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    He is good at cooking.
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    adjective + infinitive
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    I am happy to help.
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    make + object + base verb
                  </td>

                  <td style={{ padding: "14px" }}>
                    They made me laugh.
                  </td>
                </tr>
              </tbody>
            </table>
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

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I enjoy <strong>to read</strong> books.
              <br />
              ✅ I enjoy <strong>reading</strong> books.
            </p>

            <p>
              ❌ She decided <strong>going</strong> home.
              <br />
              ✅ She decided <strong>to go</strong> home.
            </p>

            <p>
              ❌ He is good at <strong>to speak</strong> English.
              <br />
              ✅ He is good at <strong>speaking</strong> English.
            </p>

            <p>
              ❌ I went there <strong>for to buy</strong> food.
              <br />
              ✅ I went there <strong>to buy</strong> food.
            </p>

            <p>
              ❌ My teacher made me <strong>to stay</strong>.
              <br />
              ✅ My teacher made me <strong>stay</strong>.
            </p>

            <p>
              ❌ Let me <strong>to help</strong> you.
              <br />
              ✅ Let me <strong>help</strong> you.
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
            13. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              I enjoy __________ books. (read / reading)
            </li>

            <li>
              She decided __________ home early. (go / to go)
            </li>

            <li>
              He is interested in __________ English. (learn / learning)
            </li>

            <li>
              We hope __________ you soon. (see / to see)
            </li>

            <li>
              They avoided __________ about the problem. (talk / talking)
            </li>

            <li>
              I went to the supermarket __________ some milk. (buy / to buy)
            </li>

            <li>
              Are you good at __________? (cook / cooking)
            </li>

            <li>
              She promised __________ me. (help / to help)
            </li>

            <li>
              My parents made me __________ my room. (clean / to clean)
            </li>

            <li>
              Let me __________ you. (help / to help)
            </li>

            <li>
              I look forward to __________ you. (meet / meeting)
            </li>

            <li>
              Remember __________ the door. (lock / to lock)
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
              1. reading
              <br />
              2. to go
              <br />
              3. learning
              <br />
              4. to see
              <br />
              5. talking
              <br />
              6. to buy
              <br />
              7. cooking
              <br />
              8. to help
              <br />
              9. clean
              <br />
              10. help
              <br />
              11. meeting
              <br />
              12. to lock
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
              A <strong>gerund</strong> is the -ing form used as a noun.
            </li>

            <li>
              An <strong>infinitive</strong> is usually to + base verb.
            </li>

            <li>
              Many verbs such as <strong>enjoy</strong> and{" "}
              <strong>avoid</strong> are followed by gerunds.
            </li>

            <li>
              Many verbs such as <strong>want</strong> and{" "}
              <strong>decide</strong> are followed by infinitives.
            </li>

            <li>
              After a preposition, use a <strong>gerund</strong>.
            </li>

            <li>
              Use an infinitive to express <strong>purpose</strong>.
            </li>

            <li>
              Adjectives are often followed by infinitives.
            </li>

            <li>
              Some verbs can take both forms with similar meanings.
            </li>

            <li>
              Some verbs, such as <strong>remember</strong> and{" "}
              <strong>stop</strong>, can change meaning depending on the form.
            </li>

            <li>
              After <strong>make</strong> and <strong>let</strong>, use the
              base verb without <strong>to</strong>.
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
            href="/resources/grammar/b1/relative-clauses"
            style={buttonStyle}
          >
            ← Relative Clauses
          </Link>

          <Link
            href="/resources/grammar/b1/articles-determiners"
            style={buttonStyle}
          >
            Next: Articles & Determiners →
          </Link>
        </div>
      </div>
    </main>
  );
}