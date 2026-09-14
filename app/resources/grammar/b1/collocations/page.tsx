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

export default function CollocationsPage() {
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
            B1 GRAMMAR & VOCABULARY
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Collocations
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn common word combinations and use English more naturally and
            accurately.
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
            <li>Understand what collocations are.</li>
            <li>Recognize common English word combinations.</li>
            <li>Use common verb-noun collocations correctly.</li>
            <li>Use adjective-noun and adverb-adjective combinations.</li>
            <li>Improve your vocabulary and natural communication.</li>
          </ul>
        </section>

        {/* What are collocations */}
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
            1. What Is a Collocation?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            A collocation is a combination of words that are commonly used
            together in English.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Native speakers naturally choose certain words together. Using
            these combinations makes your English sound more natural.
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
              <strong>make a decision</strong> ✓
            </p>

            <p>
              <strong>do homework</strong> ✓
            </p>

            <p>
              <strong>heavy rain</strong> ✓
            </p>

            <p>
              <strong>strong coffee</strong> ✓
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            These combinations are more natural than translating each word
            separately from your first language.
          </p>
        </section>

        {/* Make and Do */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. MAKE or DO?
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            One of the most common collocation problems is choosing between
            <strong> make</strong> and <strong>do</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>MAKE</h3>

              <p>make a decision</p>
              <p>make a mistake</p>
              <p>make a plan</p>
              <p>make a promise</p>
              <p>make money</p>
              <p>make friends</p>
              <p>make a choice</p>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78" }}>DO</h3>

              <p>do homework</p>
              <p>do housework</p>
              <p>do exercise</p>
              <p>do your best</p>
              <p>do business</p>
              <p>do the dishes</p>
              <p>do a job</p>
            </div>
          </div>
        </section>

        {/* Verb Noun */}
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
            3. Verb + Noun Collocations
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            These combinations are very common in everyday English.
          </p>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
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
                    Collocation
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
                {[
                  ["make a decision", "I need to make a decision today."],
                  ["make a mistake", "Everyone makes mistakes."],
                  ["make a plan", "Let's make a plan for the weekend."],
                  ["make a promise", "He made a promise to his parents."],
                  ["take a break", "Let's take a short break."],
                  ["take a photo", "Can you take a photo of us?"],
                  ["take a shower", "I take a shower every morning."],
                  ["have a conversation", "We had a long conversation."],
                  ["have a problem", "I have a problem with my computer."],
                  ["catch a bus", "I need to catch a bus at eight."],
                  ["pay attention", "Please pay attention in class."],
                  ["save time", "This app can save time."],
                ].map(([collocation, example]) => (
                  <tr key={collocation}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {collocation}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Adjective Noun */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Adjective + Noun Collocations
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some adjectives are commonly used with particular nouns.
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
              <strong>heavy rain</strong> — We had heavy rain yesterday.
            </p>

            <p>
              <strong>strong wind</strong> — There was a strong wind last
              night.
            </p>

            <p>
              <strong>strong coffee</strong> — I need a strong coffee.
            </p>

            <p>
              <strong>fast food</strong> — We sometimes eat fast food.
            </p>

            <p>
              <strong>high price</strong> — The product has a high price.
            </p>

            <p>
              <strong>low price</strong> — They offer good products at a low
              price.
            </p>

            <p>
              <strong>deep sleep</strong> — The baby is in a deep sleep.
            </p>

            <p>
              <strong>heavy traffic</strong> — There is heavy traffic this
              morning.
            </p>
          </div>
        </section>

        {/* Adverb Adjective */}
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
            5. Adverb + Adjective Collocations
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Adverbs such as <strong>very</strong>, <strong>really</strong>,
            <strong> completely</strong>, and <strong>highly</strong> are
            commonly used with particular adjectives.
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
              <strong>very important</strong> — This meeting is very important.
            </p>

            <p>
              <strong>really difficult</strong> — The exam was really
              difficult.
            </p>

            <p>
              <strong>completely different</strong> — The two ideas are
              completely different.
            </p>

            <p>
              <strong>highly successful</strong> — She is a highly successful
              businesswoman.
            </p>

            <p>
              <strong>deeply worried</strong> — His parents were deeply
              worried.
            </p>
          </div>
        </section>

        {/* Feelings */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Collocations for Feelings and Emotions
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>feel happy</strong> — I feel happy when I travel.
            </p>

            <p>
              <strong>feel nervous</strong> — I always feel nervous before an
              exam.
            </p>

            <p>
              <strong>feel disappointed</strong> — She felt disappointed with
              the result.
            </p>

            <p>
              <strong>get angry</strong> — He gets angry very quickly.
            </p>

            <p>
              <strong>get excited</strong> — The children got excited about
              the trip.
            </p>

            <p>
              <strong>be afraid</strong> — Many people are afraid of spiders.
            </p>

            <p>
              <strong>be worried</strong> — I'm worried about my exam.
            </p>
          </div>
        </section>

        {/* Work and Study */}
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
            7. Work and Study Collocations
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
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
                    Collocation
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
                {[
                  ["do homework", "I usually do my homework after dinner."],
                  ["take an exam", "I'm going to take an English exam."],
                  ["pass an exam", "She passed the exam easily."],
                  ["fail an exam", "He failed the exam last year."],
                  ["get a job", "She wants to get a new job."],
                  ["lose a job", "He lost his job last month."],
                  ["make progress", "You're making good progress."],
                  ["gain experience", "You can gain experience through practice."],
                  ["meet a deadline", "We have to meet the deadline."],
                  ["solve a problem", "Let's solve this problem together."],
                ].map(([collocation, example]) => (
                  <tr key={collocation}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {collocation}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Daily life */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Daily Life Collocations
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>have breakfast</strong> — I have breakfast at 8.
            </p>

            <p>
              <strong>have lunch</strong> — We usually have lunch at noon.
            </p>

            <p>
              <strong>have dinner</strong> — They have dinner together.
            </p>

            <p>
              <strong>go shopping</strong> — I'm going shopping this afternoon.
            </p>

            <p>
              <strong>go for a walk</strong> — Let's go for a walk.
            </p>

            <p>
              <strong>spend time</strong> — I spend time with my family.
            </p>

            <p>
              <strong>save money</strong> — I'm trying to save money.
            </p>

            <p>
              <strong>waste time</strong> — Don't waste time.
            </p>
          </div>
        </section>

        {/* Strong vs powerful */}
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
            9. Choosing the Natural Word
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            English sometimes uses a particular adjective even when another
            adjective has a similar meaning.
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
              <strong>strong coffee</strong> ✓
            </p>

            <p>powerful coffee ✗</p>

            <p>
              <strong>heavy rain</strong> ✓
            </p>

            <p>strong rain ✗</p>

            <p>
              <strong>fast food</strong> ✓
            </p>

            <p>quick food ✗</p>

            <p>
              <strong>make a mistake</strong> ✓
            </p>

            <p>do a mistake ✗</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Learning collocations helps you avoid unnatural combinations.
          </p>
        </section>

        {/* Conversation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Collocations in Conversation
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Anna:</strong> How is your new job going?
            </p>

            <p>
              <strong>Ben:</strong> It's going well. I'm making good progress.
            </p>

            <p>
              <strong>Anna:</strong> Do you have a lot of work?
            </p>

            <p>
              <strong>Ben:</strong> Yes. I have to meet several deadlines this
              month.
            </p>

            <p>
              <strong>Anna:</strong> Do you have time to relax?
            </p>

            <p>
              <strong>Ben:</strong> Not much. But I try to take a short break
              every few hours.
            </p>

            <p>
              <strong>Anna:</strong> That's important. You don't want to waste
              your free time.
            </p>
          </div>
        </section>

        {/* Common mistakes */}
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
            11. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I <strong>did</strong> a mistake.
              <br />
              ✅ I <strong>made</strong> a mistake.
            </p>

            <p>
              ❌ I <strong>made</strong> my homework.
              <br />
              ✅ I <strong>did</strong> my homework.
            </p>

            <p>
              ❌ We had <strong>strong rain</strong>.
              <br />
              ✅ We had <strong>heavy rain</strong>.
            </p>

            <p>
              ❌ I need to <strong>do a decision</strong>.
              <br />
              ✅ I need to <strong>make a decision</strong>.
            </p>

            <p>
              ❌ She <strong>did progress</strong>.
              <br />
              ✅ She <strong>made progress</strong>.
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
            12. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct word or collocation.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              I need to __________ a decision. (make / do)
            </li>

            <li>
              She always __________ her homework after dinner. (does / makes)
            </li>

            <li>
              We had __________ rain yesterday. (heavy / strong)
            </li>

            <li>
              Can you __________ a photo of us? (take / make)
            </li>

            <li>
              I want to __________ money for a new laptop. (save / make)
            </li>

            <li>
              Please __________ attention to the teacher. (pay / make)
            </li>

            <li>
              He made a big __________ in the test. (mistake / homework)
            </li>

            <li>
              We need to __________ a break. (take / do)
            </li>

            <li>
              She is making good __________ in English. (progress / decision)
            </li>

            <li>
              They have to __________ the deadline. (meet / do)
            </li>

            <li>
              I usually __________ breakfast at 8. (have / make)
            </li>

            <li>
              Don't __________ time. We are late. (waste / make)
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
              1. make
              <br />
              2. does
              <br />
              3. heavy
              <br />
              4. take
              <br />
              5. save
              <br />
              6. pay
              <br />
              7. mistake
              <br />
              8. take
              <br />
              9. progress
              <br />
              10. meet
              <br />
              11. have
              <br />
              12. waste
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
              A collocation is a group of words that commonly go together.
            </li>

            <li>
              We say <strong>make a decision</strong>, not do a decision.
            </li>

            <li>
              We say <strong>do homework</strong>, not make homework.
            </li>

            <li>
              We say <strong>heavy rain</strong>, not strong rain.
            </li>

            <li>
              We say <strong>strong coffee</strong>, not powerful coffee.
            </li>

            <li>
              Common combinations help your English sound more natural.
            </li>

            <li>
              Learning collocations is an important part of building B1
              vocabulary.
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
            href="/resources/grammar/b1/phrasal-verbs"
            style={buttonStyle}
          >
            ← Phrasal Verbs
          </Link>

          <Link
            href="/resources/grammar/b1/communication-functional-english"
            style={buttonStyle}
          >
            Next: Communication & Functional English →
          </Link>
        </div>
      </div>
    </main>
  );
}