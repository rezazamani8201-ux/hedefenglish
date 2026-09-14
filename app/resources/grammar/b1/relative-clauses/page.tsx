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

export default function RelativeClausesPage() {
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
            Relative Clauses
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to combine ideas and give more information about people,
            places, things, and times using relative clauses.
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
            <li>Understand what a relative clause is.</li>
            <li>Use who, which, that, whose, where, and when correctly.</li>
            <li>Distinguish between defining and non-defining clauses.</li>
            <li>Use relative pronouns as subjects and objects.</li>
            <li>Avoid common relative clause mistakes.</li>
          </ul>
        </section>

        {/* What is a Relative Clause */}
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
            1. What Is a Relative Clause?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            A relative clause gives extra information about a noun. It usually
            begins with a relative pronoun or relative adverb.
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
              The woman <strong>who lives next door</strong> is a doctor.
            </p>

            <p>
              I bought the book <strong>that you recommended</strong>.
            </p>

            <p>
              This is the restaurant <strong>where we had dinner</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The relative clause tells us more about{" "}
            <strong>the woman</strong>, <strong>the book</strong>, and{" "}
            <strong>the restaurant</strong>.
          </p>
        </section>

        {/* WHO */}
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
            2. Who
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>who</strong> for people.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              The man <strong>who works here</strong> is my uncle.
            </p>

            <p>
              She is the teacher <strong>who helped me</strong>.
            </p>

            <p>
              I know a woman <strong>who speaks five languages</strong>.
            </p>
          </div>
        </section>

        {/* WHICH */}
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
            3. Which
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>which</strong> for things and animals.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              This is the phone <strong>which I bought yesterday</strong>.
            </p>

            <p>
              The car <strong>which is parked outside</strong> is mine.
            </p>

            <p>
              I love the dog <strong>which lives next door</strong>.
            </p>
          </div>
        </section>

        {/* THAT */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. That
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>That</strong> can be used for people or things in defining
            relative clauses.
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
              The woman <strong>that lives next door</strong> is a doctor.
            </p>

            <p>
              The book <strong>that I bought</strong> is interesting.
            </p>

            <p>
              The students <strong>that studied hard</strong> passed the exam.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            In formal writing, <strong>who</strong> is generally preferred for
            people, but <strong>that</strong> is common in everyday English.
          </p>
        </section>

        {/* WHOSE */}
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
            5. Whose
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>whose</strong> to show possession. It can be used for
            people and, in some contexts, things.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              That is the man <strong>whose car was stolen</strong>.
            </p>

            <p>
              I met a girl <strong>whose brother is a pilot</strong>.
            </p>

            <p>
              This is the company <strong>whose products are popular</strong>.
            </p>
          </div>
        </section>

        {/* WHERE */}
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
            6. Where
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>where</strong> for places.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              This is the house <strong>where I grew up</strong>.
            </p>

            <p>
              That is the restaurant <strong>where we met</strong>.
            </p>

            <p>
              Istanbul is a city <strong>where many cultures meet</strong>.
            </p>
          </div>
        </section>

        {/* WHEN */}
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
            7. When
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>when</strong> for times, days, years, and periods.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              I remember the day <strong>when we first met</strong>.
            </p>

            <p>
              2020 was the year <strong>when I moved to Turkey</strong>.
            </p>

            <p>
              Summer is the season <strong>when many people travel</strong>.
            </p>
          </div>
        </section>

        {/* Defining Clauses */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Defining Relative Clauses
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            A defining relative clause gives information that is necessary to
            identify the person or thing we are talking about.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              The student <strong>who won the competition</strong> is my friend.
            </p>

            <p>
              The book <strong>that you gave me</strong> is excellent.
            </p>

            <p>
              The restaurant <strong>where we ate</strong> was expensive.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Without the relative clause, we may not know exactly which student,
            book, or restaurant is meant.
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
            9. Non-Defining Relative Clauses
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            A non-defining relative clause gives extra information. The main
            sentence is already clear without it.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            We normally separate a non-defining relative clause with commas.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              My brother, <strong>who lives in London</strong>, is visiting us.
            </p>

            <p>
              Paris, <strong>which is famous for its museums</strong>, attracts
              millions of visitors.
            </p>

            <p>
              Sarah, <strong>whose father is a doctor</strong>, wants to study
              medicine.
            </p>
          </div>
        </section>

        {/* Important Rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Important Rule: “That”
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We do <strong>not</strong> normally use <strong>that</strong> in
            non-defining relative clauses.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              ✅ My car, <strong>which</strong> is very old, still works.
            </p>

            <p>
              ❌ My car, <strong>that</strong> is very old, still works.
            </p>
          </div>
        </section>

        {/* Subject Relative Pronoun */}
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
            11. Relative Pronoun as the Subject
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When the relative pronoun is the subject of the relative clause,
            we cannot normally remove it.
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
              The woman <strong>who lives here</strong> is a doctor.
            </p>

            <p>
              The car <strong>that caused the accident</strong> was blue.
            </p>

            <p>
              The student <strong>who won the prize</strong> was very happy.
            </p>
          </div>
        </section>

        {/* Object Relative Pronoun */}
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
            12. Relative Pronoun as the Object
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When the relative pronoun is the object, we can often leave it out
            in defining relative clauses.
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
              The book <strong>that I bought</strong> was expensive.
            </p>

            <p>
              The book <strong>I bought</strong> was expensive.
            </p>

            <p>
              The woman <strong>who I met</strong> was very friendly.
            </p>

            <p>
              The woman <strong>I met</strong> was very friendly.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Both forms are common in everyday English.
          </p>
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
            13. Relative Clauses with Prepositions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            In everyday English, the preposition usually comes at the end of
            the clause.
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
              The person <strong>who I was talking to</strong> is my manager.
            </p>

            <p>
              This is the company <strong>that I work for</strong>.
            </p>

            <p>
              That is the chair <strong>which I was sitting on</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            More formal English can place the preposition before{" "}
            <strong>whom</strong> or <strong>which</strong>.
          </p>

          <p>
            The person <strong>to whom</strong> I was speaking is my manager.
          </p>
        </section>

        {/* Combining Sentences */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. Combining Sentences
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Relative clauses are useful for combining two sentences into one
            clearer sentence.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              I met a woman. She works at the hospital.
            </p>

            <p>
              → I met a woman <strong>who works at the hospital</strong>.
            </p>

            <p style={{ marginTop: "18px" }}>
              We visited a city. The city was very beautiful.
            </p>

            <p>
              → We visited a city <strong>which was very beautiful</strong>.
            </p>

            <p style={{ marginTop: "18px" }}>
              I found a restaurant. We had dinner there.
            </p>

            <p>
              → I found the restaurant <strong>where we had dinner</strong>.
            </p>
          </div>
        </section>

        {/* Quick Comparison */}
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
            15. Quick Comparison
          </h2>

          <div style={{ overflowX: "auto" }}>
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
                    Word
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
                    who
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    people
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    The man who called me
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    which
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    things / animals
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    The book which I read
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
                    people / things
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    The film that I watched
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    whose
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    possession
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    The girl whose phone rang
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    where
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    places
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    The city where I live
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>when</td>

                  <td style={{ padding: "14px" }}>time</td>

                  <td style={{ padding: "14px" }}>
                    The day when we met
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
            16. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ The woman <strong>which</strong> lives here is my sister.
              <br />
              ✅ The woman <strong>who</strong> lives here is my sister.
            </p>

            <p>
              ❌ The book <strong>who</strong> I bought is expensive.
              <br />
              ✅ The book <strong>which</strong> I bought is expensive.
            </p>

            <p>
              ❌ The city <strong>which I live</strong> is beautiful.
              <br />
              ✅ The city <strong>where I live</strong> is beautiful.
            </p>

            <p>
              ❌ The man <strong>which car</strong> was stolen called the
              police.
              <br />
              ✅ The man <strong>whose car</strong> was stolen called the
              police.
            </p>

            <p>
              ❌ My brother, <strong>that lives in London</strong>, is a doctor.
              <br />
              ✅ My brother, <strong>who lives in London</strong>, is a doctor.
            </p>

            <p>
              ❌ He asked me where <strong>did I live</strong>.
              <br />
              ✅ He asked me where <strong>I lived</strong>.
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
            17. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the best answer.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              The woman __________ lives next door is a teacher. (who / which)
            </li>

            <li>
              This is the book __________ I told you about. (who / that)
            </li>

            <li>
              The car __________ is parked outside is mine. (which / whose)
            </li>

            <li>
              That is the man __________ daughter is a doctor. (who / whose)
            </li>

            <li>
              This is the restaurant __________ we had dinner. (where / whose)
            </li>

            <li>
              I remember the day __________ we first met. (when / which)
            </li>

            <li>
              The students __________ studied hard passed the exam. (who / where)
            </li>

            <li>
              The movie __________ we watched was excellent. (that / where)
            </li>

            <li>
              My sister, __________ lives in Ankara, is visiting us. (who / that)
            </li>

            <li>
              The man __________ I spoke to was very helpful. (who / where)
            </li>

            <li>
              The house __________ roof was damaged has been repaired. (whose /
              who)
            </li>

            <li>
              The place __________ I work is very busy. (where / whose)
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
              1. who
              <br />
              2. that
              <br />
              3. which
              <br />
              4. whose
              <br />
              5. where
              <br />
              6. when
              <br />
              7. who
              <br />
              8. that
              <br />
              9. who
              <br />
              10. who
              <br />
              11. whose
              <br />
              12. where
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
              Relative clauses give more information about a noun.
            </li>

            <li>
              Use <strong>who</strong> mainly for people.
            </li>

            <li>
              Use <strong>which</strong> for things and animals.
            </li>

            <li>
              Use <strong>that</strong> for people or things in defining
              clauses.
            </li>

            <li>
              Use <strong>whose</strong> to show possession.
            </li>

            <li>
              Use <strong>where</strong> for places.
            </li>

            <li>
              Use <strong>when</strong> for times.
            </li>

            <li>
              Defining clauses identify the person or thing we mean.
            </li>

            <li>
              Non-defining clauses add extra information and use commas.
            </li>

            <li>
              We do not normally use <strong>that</strong> in non-defining
              clauses.
            </li>

            <li>
              An object relative pronoun can often be omitted in defining
              clauses.
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
            href="/resources/grammar/b1/reported-speech"
            style={buttonStyle}
          >
            ← Reported Speech
          </Link>

          <Link
            href="/resources/grammar/b1/gerunds-infinitives"
            style={buttonStyle}
          >
            Next: Gerunds & Infinitives →
          </Link>
        </div>
      </div>
    </main>
  );
}