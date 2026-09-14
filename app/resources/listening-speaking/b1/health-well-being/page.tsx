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

export default function HealthWellBeingPage() {
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
        {/* Back */}
        <Link
          href="/resources/listening-speaking/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
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
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            B1 LISTENING & SPEAKING — LESSON 04
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Health & Well-being
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Practice useful English for talking about health, symptoms,
            lifestyle, exercise, nutrition, medical appointments, and giving
            health-related advice.
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
            <li>Describe common health problems and symptoms.</li>
            <li>Explain how you feel when you are sick.</li>
            <li>Talk about healthy habits and lifestyle choices.</li>
            <li>Describe symptoms to a doctor or pharmacist.</li>
            <li>Make and discuss medical appointments.</li>
            <li>Give and understand simple health advice.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Health Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["symptom", "a physical sign that something may be wrong"],
              ["headache", "pain in your head"],
              ["sore throat", "pain or irritation in your throat"],
              ["cough", "a sudden action that clears your throat or airways"],
              ["fever", "a higher-than-normal body temperature"],
              ["medicine", "a substance used to treat an illness"],
              ["appointment", "an arranged meeting with a doctor"],
              ["treatment", "something done to improve a health problem"],
              ["exercise", "physical activity done to improve health"],
              ["balanced diet", "a diet containing a healthy variety of foods"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  {word}
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talking About Symptoms */}
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
            Talking About Symptoms
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            These structures are useful when explaining how you feel.
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
              <strong>I have...</strong> → I have a headache.
            </p>

            <p>
              <strong>I&apos;ve got...</strong> → I&apos;ve got a sore throat.
            </p>

            <p>
              <strong>I feel...</strong> → I feel dizzy.
            </p>

            <p>
              <strong>My ... hurts.</strong> → My back hurts.
            </p>

            <p>
              <strong>I&apos;ve been feeling...</strong> → I&apos;ve been
              feeling tired lately.
            </p>

            <p>
              <strong>It started...</strong> → It started two days ago.
            </p>
          </div>
        </section>

        {/* Listening Conversation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation once for the general meaning. Then read it
            again and notice how the patient describes the symptoms.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Doctor:</strong> Good morning. What seems to be the
              problem?
            </p>

            <p>
              <strong>Patient:</strong> I&apos;ve been feeling sick for the
              last three days.
            </p>

            <p>
              <strong>Doctor:</strong> What symptoms do you have?
            </p>

            <p>
              <strong>Patient:</strong> I have a headache, a sore throat, and
              a slight fever.
            </p>

            <p>
              <strong>Doctor:</strong> Do you have a cough?
            </p>

            <p>
              <strong>Patient:</strong> Yes, but it isn&apos;t very bad.
            </p>

            <p>
              <strong>Doctor:</strong> Have you taken any medicine?
            </p>

            <p>
              <strong>Patient:</strong> I took some painkillers yesterday, but
              they didn&apos;t help much.
            </p>

            <p>
              <strong>Doctor:</strong> I&apos;ll examine you and then we&apos;ll
              decide on the best treatment.
            </p>

            <p>
              <strong>Patient:</strong> Thank you, doctor.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
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
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>How long has the patient been feeling sick?</li>
            <li>What symptoms does the patient have?</li>
            <li>Does the patient have a bad cough?</li>
            <li>What medicine did the patient take?</li>
            <li>What will the doctor do next?</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. For the last three days.</p>
            <p>2. A headache, a sore throat, and a slight fever.</p>
            <p>3. No. The cough is not very bad.</p>
            <p>4. Some painkillers.</p>
            <p>5. The doctor will examine the patient.</p>
          </div>
        </section>

        {/* At the Doctor */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            At the Doctor&apos;s
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>What seems to be the problem?</p>
            <p>How long have you had these symptoms?</p>
            <p>When did it start?</p>
            <p>Have you taken any medicine?</p>
            <p>Are you allergic to any medicine?</p>
            <p>Does anything make it better or worse?</p>
            <p>How often do you exercise?</p>
            <p>Do you have any other health problems?</p>
          </div>
        </section>

        {/* Healthy Lifestyle */}
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
            Talking About Healthy Habits
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use these expressions to talk about your lifestyle and habits.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I try to eat a balanced diet.</p>
            <p>I usually exercise three times a week.</p>
            <p>I drink plenty of water.</p>
            <p>I try to get enough sleep.</p>
            <p>I&apos;m trying to reduce my sugar intake.</p>
            <p>I&apos;ve started going for a walk every evening.</p>
            <p>I need to spend less time sitting at my desk.</p>
          </div>
        </section>

        {/* Giving Advice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Giving Health Advice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When giving simple advice, use <strong>should</strong>,
            <strong> shouldn&apos;t</strong>, and other useful expressions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>You should get some rest.</p>
            <p>You should drink more water.</p>
            <p>You shouldn&apos;t skip meals.</p>
            <p>You should talk to a doctor.</p>
            <p>You might want to get more sleep.</p>
            <p>It would be a good idea to take a break.</p>
            <p>Why don&apos;t you try going for a walk?</p>
          </div>
        </section>

        {/* Pharmacy */}
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
            At the Pharmacy
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Customer:</strong> Excuse me. Do you have anything for a
              headache?
            </p>

            <p>
              <strong>Pharmacist:</strong> Yes. How long have you had the
              headache?
            </p>

            <p>
              <strong>Customer:</strong> Since this morning.
            </p>

            <p>
              <strong>Pharmacist:</strong> Are you taking any other medicine?
            </p>

            <p>
              <strong>Customer:</strong> No, I&apos;m not.
            </p>

            <p>
              <strong>Pharmacist:</strong> You could try these tablets. Make
              sure you read the instructions carefully.
            </p>

            <p>
              <strong>Customer:</strong> Thank you. How often should I take
              them?
            </p>

            <p>
              <strong>Pharmacist:</strong> Follow the instructions on the
              package.
            </p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
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
                    Situation
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Useful Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Describe a symptom", "I have a headache."],
                  ["Describe pain", "My back hurts."],
                  ["Explain duration", "I've had it for three days."],
                  ["Explain when it started", "It started yesterday."],
                  ["Ask for advice", "What should I do?"],
                  ["Give advice", "You should get some rest."],
                  ["Ask about medicine", "How often should I take it?"],
                  ["Make an appointment", "I'd like to make an appointment."],
                  ["Ask about availability", "Do you have anything available today?"],
                  ["Express concern", "I'm a little worried about it."],
                ].map(([situation, expression]) => (
                  <tr key={situation}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {situation}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {expression}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Speaking Practice */}
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
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each situation. Try to use the
            vocabulary and expressions from this lesson.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe a time when you were sick and explain your symptoms.",
              "Talk about your usual exercise routine.",
              "Describe your eating habits and one thing you would like to improve.",
              "Explain a health problem to a doctor.",
              "Give a friend advice about getting enough sleep.",
              "Talk about what you do to stay healthy.",
            ].map((situation, index) => (
              <div
                key={situation}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Situation {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{situation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> One person is a patient and the
              other person is a doctor.
            </p>

            <p>
              The patient should describe three symptoms, explain when they
              started, and answer the doctor&apos;s questions.
            </p>

            <p>
              The doctor should ask questions, give simple advice, and explain
              what the patient should do next.
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
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I have a pain in my head.
              <br />
              ✅ I have a headache.
            </p>

            <p>
              ❌ My head is pain.
              <br />
              ✅ My head hurts.
            </p>

            <p>
              ❌ I am sick since Monday.
              <br />
              ✅ I have been sick since Monday.
            </p>

            <p>
              ❌ You should to rest.
              <br />
              ✅ You should rest.
            </p>

            <p>
              ❌ I need make an appointment.
              <br />
              ✅ I need to make an appointment.
            </p>
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

          <ol style={{ lineHeight: 2.1 }}>
            <li>Complete: “I have a ______ throat.”</li>
            <li>Say that your back hurts.</li>
            <li>Ask a doctor how long your symptoms may last.</li>
            <li>Give advice to someone who does not sleep enough.</li>
            <li>Complete: “I&apos;ve had this problem ______ three days.”</li>
            <li>Ask a pharmacist for something for a headache.</li>
            <li>Complete: “You should ______ some rest.”</li>
            <li>Say that your symptoms started yesterday.</li>
            <li>Ask how often you should take some medicine.</li>
            <li>Say that you want to make a doctor&apos;s appointment.</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Sample Answers
            </h3>

            <p>
              1. sore
              <br />
              2. “My back hurts.”
              <br />
              3. “How long will these symptoms last?”
              <br />
              4. “You should get more sleep.”
              <br />
              5. for
              <br />
              6. “Do you have anything for a headache?”
              <br />
              7. get
              <br />
              8. “It started yesterday.”
              <br />
              9. “How often should I take it?”
              <br />
              10. “I&apos;d like to make a doctor&apos;s appointment.”
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>Use clear expressions to describe symptoms and pain.</li>
            <li>Explain when a health problem started and how long it has lasted.</li>
            <li>Use useful vocabulary for doctors, pharmacies, and treatment.</li>
            <li>Talk about exercise, sleep, food, and healthy habits.</li>
            <li>Use should and shouldn&apos;t to give simple advice.</li>
            <li>Ask clear questions when you need medical information.</li>
            <li>Practice realistic health conversations to build confidence.</li>
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
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/b1/travel-real-life-situations"
            style={buttonStyle}
          >
            ← Travel & Real-Life Situations
          </Link>

          <Link
            href="/resources/listening-speaking/b1/social-life-relationships"
            style={buttonStyle}
          >
            Next: Social Life & Relationships →
          </Link>
        </div>
      </div>
    </main>
  );
}