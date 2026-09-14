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

export default function ModalObligationAdvicePage() {
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
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
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
            Modal Verbs of Obligation &amp; Advice
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to express rules, responsibilities, necessity,
            prohibition, and advice using common modal verbs.
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
            <li>Understand common modal verbs for obligation and advice.</li>
            <li>Talk about rules and responsibilities.</li>
            <li>Express necessity and lack of necessity.</li>
            <li>Give and ask for advice.</li>
            <li>Express prohibition clearly and naturally.</li>
          </ul>
        </section>

        {/* What Are Modal Verbs */}
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
            1. What Are Modal Verbs?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Modal verbs are auxiliary verbs that express ideas such as
            possibility, ability, obligation, permission, and advice.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            Common modal verbs include:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              "must",
              "have to",
              "should",
              "ought to",
              "mustn't",
              "don't have to",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#173b78",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Must */}
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
            2. Must — Strong Obligation
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We use <strong>must</strong> when something is very important or
            necessary. It often expresses the speaker&apos;s strong feeling
            about an obligation.
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
            <p>You <strong>must</strong> wear a seat belt.</p>

            <p>I <strong>must</strong> finish this report today.</p>

            <p>Students <strong>must</strong> follow the school rules.</p>

            <p>You <strong>must</strong> be quiet in the library.</p>
          </div>
        </section>

        {/* Have To */}
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
            3. Have To — External Obligation
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We use <strong>have to</strong> when the obligation comes from a
            rule, another person, a situation, or an external requirement.
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
            <p>I <strong>have to</strong> wear a uniform at work.</p>

            <p>She <strong>has to</strong> get up early for work.</p>

            <p>We <strong>have to</strong> show our passports at the airport.</p>

            <p>He <strong>has to</strong> pay the bill before Friday.</p>
          </div>
        </section>

        {/* Must vs Have To */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Must vs Have To
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Both can express obligation, but the source of the obligation can
            be different.
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
                    Must
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Have to
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
                    Strong obligation from the speaker
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                    }}
                  >
                    Obligation from an external rule or situation
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "14px" }}>
                    I must remember to call her.
                  </td>

                  <td style={{ padding: "14px" }}>
                    I have to call her because she is waiting.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            In everyday English, the difference is not always strict, and
            <strong> have to</strong> is very common for general obligation.
          </p>
        </section>

        {/* Mustn't */}
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
            5. Mustn&apos;t — Prohibition
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Mustn&apos;t</strong> means something is prohibited or not
            allowed.
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
            <p>You <strong>mustn&apos;t</strong> smoke here.</p>

            <p>You <strong>mustn&apos;t</strong> touch the equipment.</p>

            <p>Visitors <strong>mustn&apos;t</strong> enter this room.</p>

            <p>You <strong>mustn&apos;t</strong> use your phone during the
              exam.</p>
          </div>
        </section>

        {/* Don't Have To */}
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
            6. Don&apos;t Have To — No Necessity
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Don&apos;t have to</strong> means that something is not
            necessary. You can do it, but you do not need to.
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
            <p>You <strong>don&apos;t have to</strong> come early tomorrow.</p>

            <p>She <strong>doesn&apos;t have to</strong> wear a uniform.</p>

            <p>We <strong>don&apos;t have to</strong> bring anything.</p>

            <p>He <strong>doesn&apos;t have to</strong> pay today.</p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Remember:
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>mustn&apos;t</strong> = it is prohibited
            <br />
            <strong>don&apos;t have to</strong> = it is not necessary
          </p>
        </section>

        {/* Should */}
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
            7. Should — Advice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We use <strong>should</strong> to give advice or say what we think
            is a good idea.
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
            <p>You <strong>should</strong> get more sleep.</p>

            <p>She <strong>should</strong> talk to her manager.</p>

            <p>We <strong>should</strong> leave early.</p>

            <p>He <strong>should</strong> study more before the exam.</p>
          </div>
        </section>

        {/* Shouldn't */}
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
            8. Shouldn&apos;t — Negative Advice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use <strong>shouldn&apos;t</strong> to say that something is not a
            good idea.
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
            <p>You <strong>shouldn&apos;t</strong> stay up so late.</p>

            <p>She <strong>shouldn&apos;t</strong> drive when she is tired.</p>

            <p>You <strong>shouldn&apos;t</strong> spend so much money.</p>

            <p>We <strong>shouldn&apos;t</strong> ignore this problem.</p>
          </div>
        </section>

        {/* Ought To */}
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
            9. Ought To
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Ought to</strong> has a similar meaning to{" "}
            <strong>should</strong>. It is slightly more formal and less common
            in everyday conversation.
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
            <p>You <strong>ought to</strong> apologize.</p>

            <p>We <strong>ought to</strong> help them.</p>

            <p>She <strong>ought to</strong> get some rest.</p>
          </div>
        </section>

        {/* Have To Tenses */}
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
            10. Obligation in Different Tenses
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>Have to</strong> can be used in different tenses, while
            <strong> must</strong> is mainly used for present or future
            obligation.
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
              Present: I <strong>have to</strong> work today.
            </p>

            <p>
              Past: I <strong>had to</strong> work yesterday.
            </p>

            <p>
              Future: I <strong>will have to</strong> work tomorrow.
            </p>
          </div>
        </section>

        {/* Questions */}
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
            11. Asking About Obligation
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            We normally use <strong>have to</strong> when asking about
            obligation.
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
            <p>Do I <strong>have to</strong> bring my passport?</p>

            <p>Does she <strong>have to</strong> work tomorrow?</p>

            <p>Do we <strong>have to</strong> pay now?</p>

            <p>Did they <strong>have to</strong> wait for a long time?</p>
          </div>
        </section>

        {/* Advice Conversation */}
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
            12. Everyday Conversation
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Anna:</strong> I&apos;m really tired these days.
            </p>

            <p>
              <strong>Ben:</strong> You should get more sleep.
            </p>

            <p>
              <strong>Anna:</strong> I have to work late every night.
            </p>

            <p>
              <strong>Ben:</strong> You don&apos;t have to work every evening.
            </p>

            <p>
              <strong>Anna:</strong> I have an important project this week.
            </p>

            <p>
              <strong>Ben:</strong> Then you should take a short break during
              the day.
            </p>

            <p>
              <strong>Anna:</strong> You&apos;re right. I must take better care
              of myself.
            </p>
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
            13. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ You must to study more.
              <br />
              ✅ You must study more.
            </p>

            <p>
              ❌ She should to see a doctor.
              <br />
              ✅ She should see a doctor.
            </p>

            <p>
              ❌ You mustn&apos;t to smoke here.
              <br />
              ✅ You mustn&apos;t smoke here.
            </p>

            <p>
              ❌ He don&apos;t have to work today.
              <br />
              ✅ He doesn&apos;t have to work today.
            </p>

            <p>
              ❌ Does she has to leave?
              <br />
              ✅ Does she have to leave?
            </p>

            <p>
              ❌ You don&apos;t have to park here. <em>(meaning: prohibited)</em>
              <br />
              ✅ You mustn&apos;t park here. <em>(meaning: prohibited)</em>
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
            14. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the best modal or modal expression.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              You __________ wear a seat belt in a car. (must / shouldn&apos;t)
            </li>

            <li>
              You __________ smoke in the hospital. (mustn&apos;t / don&apos;t
              have to)
            </li>

            <li>
              You look tired. You __________ get some rest. (should / mustn&apos;t)
            </li>

            <li>
              We __________ bring food. The restaurant provides everything.
              (don&apos;t have to / mustn&apos;t)
            </li>

            <li>
              She __________ work late yesterday. (had to / must)
            </li>

            <li>
              __________ I have to show my passport? (Do / Must to)
            </li>

            <li>
              If you want to improve your English, you __________ practice
              regularly. (should / mustn&apos;t)
            </li>

            <li>
              Students __________ use their phones during the exam. (mustn&apos;t
              / don&apos;t have to)
            </li>

            <li>
              He __________ wear a uniform at work because it is company
              policy. (has to / should to)
            </li>

            <li>
              You __________ pay today. You can pay tomorrow. (don&apos;t have
              to / mustn&apos;t)
            </li>

            <li>
              I __________ remember to send that email today. (must / should to)
            </li>

            <li>
              You __________ drive so fast. It is dangerous. (shouldn&apos;t /
              mustn&apos;t to)
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
              1. must
              <br />
              2. mustn&apos;t
              <br />
              3. should
              <br />
              4. don&apos;t have to
              <br />
              5. had to
              <br />
              6. Do
              <br />
              7. should
              <br />
              8. mustn&apos;t
              <br />
              9. has to
              <br />
              10. don&apos;t have to
              <br />
              11. must
              <br />
              12. shouldn&apos;t
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
              <strong>must</strong> = strong obligation.
            </li>

            <li>
              <strong>have to</strong> = obligation caused by a rule,
              situation, or external requirement.
            </li>

            <li>
              <strong>mustn&apos;t</strong> = prohibition; something is not
              allowed.
            </li>

            <li>
              <strong>don&apos;t have to</strong> = no necessity; something is
              optional.
            </li>

            <li>
              <strong>should</strong> = advice or recommendation.
            </li>

            <li>
              <strong>shouldn&apos;t</strong> = negative advice.
            </li>

            <li>
              Modal verbs are followed by the base form of the verb.
            </li>

            <li>
              Use <strong>have to</strong> for past and future obligations:
              <strong> had to</strong> and <strong>will have to</strong>.
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
            href="/resources/grammar/b1/second-conditional"
            style={buttonStyle}
          >
            ← Second Conditional
          </Link>

          <Link
            href="/resources/grammar/b1/modal-possibility"
            style={buttonStyle}
          >
            Next: Modal Verbs of Possibility →
          </Link>
        </div>
      </div>
    </main>
  );
}