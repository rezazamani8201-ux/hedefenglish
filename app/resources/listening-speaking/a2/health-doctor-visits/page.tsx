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

export default function HealthDoctorVisitsPage() {
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
          href="/resources/listening-speaking/a2"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← A2 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
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
            LISTENING & SPEAKING — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Health & Doctor Visits
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn useful English for talking about common health problems,
            making appointments, visiting a doctor, describing symptoms, and
            understanding basic medical advice.
          </p>
        </section>

        {/* Learning Goals */}
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
            <li>Describe common health problems and symptoms.</li>
            <li>Make a doctor&apos;s appointment.</li>
            <li>Explain how you feel.</li>
            <li>Answer common questions at a doctor&apos;s office.</li>
            <li>Understand simple medical advice.</li>
            <li>Talk about healthy habits and daily routines.</li>
          </ul>
        </section>

        {/* Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Health Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["headache", "pain in your head"],
              ["stomachache", "pain in your stomach"],
              ["toothache", "pain in a tooth"],
              ["sore throat", "pain or irritation in your throat"],
              ["backache", "pain in your back"],
              ["fever", "a high body temperature"],
              ["cough", "a sudden sound caused by irritation in your throat"],
              ["cold", "a common illness with symptoms such as a runny nose"],
              ["flu", "an illness that can cause fever, tiredness, and aches"],
              ["medicine", "something used to treat an illness"],
              ["appointment", "an arranged meeting with a doctor"],
              ["symptom", "a sign that you may be ill"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{word}</strong>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            When talking about health, we often use <strong>have</strong> with
            illnesses and symptoms.
          </p>

          <div style={boxStyle}>
            <p>I have a headache.</p>
            <p>She has a sore throat.</p>
            <p>He has a fever.</p>
            <p>They have a cold.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            We can also use <strong>feel</strong> to describe our condition.
          </p>

          <div style={boxStyle}>
            <p>I feel sick.</p>
            <p>I feel tired.</p>
            <p>She feels better today.</p>
            <p>He feels very weak.</p>
          </div>
        </section>

        {/* Listening - Appointment */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Making an Appointment
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and imagine that you are listening
            to a patient calling a doctor&apos;s office.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Receptionist:</strong> Good morning. Green Medical
              Center. How can I help you?
            </p>

            <p>
              <strong>Patient:</strong> Good morning. I&apos;d like to make an
              appointment with a doctor.
            </p>

            <p>
              <strong>Receptionist:</strong> Of course. What seems to be the
              problem?
            </p>

            <p>
              <strong>Patient:</strong> I have a bad headache and a sore
              throat.
            </p>

            <p>
              <strong>Receptionist:</strong> I see. Are you available this
              afternoon?
            </p>

            <p>
              <strong>Patient:</strong> Yes, I am.
            </p>

            <p>
              <strong>Receptionist:</strong> We have an appointment at 3:30
              p.m.
            </p>

            <p>
              <strong>Patient:</strong> That&apos;s perfect. Thank you.
            </p>

            <p>
              <strong>Receptionist:</strong> You&apos;re welcome. See you at
              3:30.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. Where does the patient call?</p>
            <p>2. What does the patient want?</p>
            <p>3. What health problems does the patient have?</p>
            <p>4. What time is the appointment?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. The patient calls Green Medical Center.</p>
            <p>2. The patient wants to make a doctor&apos;s appointment.</p>
            <p>3. The patient has a headache and a sore throat.</p>
            <p>4. The appointment is at 3:30 p.m.</p>
          </div>
        </section>

        {/* At the Doctor */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: At the Doctor
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Doctor:</strong> Hello. What seems to be the problem?
            </p>

            <p>
              <strong>Patient:</strong> I don&apos;t feel well. I have a
              headache and a cough.
            </p>

            <p>
              <strong>Doctor:</strong> How long have you had these symptoms?
            </p>

            <p>
              <strong>Patient:</strong> For about three days.
            </p>

            <p>
              <strong>Doctor:</strong> Do you have a fever?
            </p>

            <p>
              <strong>Patient:</strong> Yes, I had a fever last night.
            </p>

            <p>
              <strong>Doctor:</strong> I see. You should get plenty of rest and
              drink lots of water.
            </p>

            <p>
              <strong>Patient:</strong> Should I take any medicine?
            </p>

            <p>
              <strong>Doctor:</strong> I&apos;ll give you some advice about
              that. If you feel worse, please come back.
            </p>

            <p>
              <strong>Patient:</strong> Thank you, doctor.
            </p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Health Expressions
          </h2>

          <div style={boxStyle}>
            <p>I don&apos;t feel well.</p>
            <p>I have a headache.</p>
            <p>I have a sore throat.</p>
            <p>I have a cough.</p>
            <p>I have a fever.</p>
            <p>My back hurts.</p>
            <p>How long have you had this problem?</p>
            <p>I&apos;ve had it for three days.</p>
            <p>What should I do?</p>
            <p>Should I take any medicine?</p>
          </div>
        </section>

        {/* Advice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Giving and Understanding Advice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            In everyday English, <strong>should</strong> is commonly used to
            give simple advice.
          </p>

          <div style={boxStyle}>
            <p>You should get some rest.</p>
            <p>You should drink more water.</p>
            <p>You should see a doctor.</p>
            <p>You shouldn&apos;t work too hard.</p>
            <p>You shouldn&apos;t stay up late.</p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong style={{ color: "#173b78" }}>
              Question:
            </strong>

            <p style={{ marginBottom: 0 }}>
              What should I do?
            </p>

            <p style={{ marginBottom: 0 }}>
              <strong>Answer:</strong> You should get some rest.
            </p>
          </div>
        </section>

        {/* Speaking */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Answer these questions using complete sentences.
          </p>

          <div style={boxStyle}>
            <p>1. How do you usually feel when you are sick?</p>
            <p>2. What do you do when you have a headache?</p>
            <p>3. How often do you visit a doctor?</p>
            <p>4. What healthy habits do you have?</p>
            <p>5. How many hours do you usually sleep?</p>
            <p>6. What do you do when you have a cold?</p>
            <p>7. What should people do to stay healthy?</p>
            <p>8. What should people avoid when they are sick?</p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Doctor&apos;s Visit
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> You are a doctor.
            </p>

            <p>
              <strong>Student B:</strong> You are a patient.
            </p>

            <p>
              The patient has a headache, a cough, and feels tired. The doctor
              asks questions and gives simple advice.
            </p>
          </div>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <strong style={{ color: "#173b78" }}>
              Useful phrases:
            </strong>

            <p>What seems to be the problem?</p>
            <p>How long have you had it?</p>
            <p>I don&apos;t feel well.</p>
            <p>I have a bad headache.</p>
            <p>You should get some rest.</p>
            <p>You should drink plenty of water.</p>
          </div>
        </section>

        {/* Healthy Habits */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Healthy Habits
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Talk about healthy habits using <strong>should</strong> and{" "}
            <strong>shouldn&apos;t</strong>.
          </p>

          <div style={boxStyle}>
            <p>People should eat healthy food.</p>
            <p>People should drink enough water.</p>
            <p>People should exercise regularly.</p>
            <p>People should get enough sleep.</p>
            <p>People shouldn&apos;t smoke.</p>
            <p>People shouldn&apos;t skip meals regularly.</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. I have a bad ______.
              <br />
              <strong>(headache / appointment)</strong>
            </p>

            <p>
              2. I don&apos;t ______ well.
              <br />
              <strong>(feel / feeling)</strong>
            </p>

            <p>
              3. You ______ get some rest.
              <br />
              <strong>(should / are)</strong>
            </p>

            <p>
              4. I&apos;d like to make an ______ with the doctor.
              <br />
              <strong>(appointment / advice)</strong>
            </p>

            <p>
              5. My throat ______.
              <br />
              <strong>(hurts / has)</strong>
            </p>

            <p>
              6. You shouldn&apos;t ______ up late when you are sick.
              <br />
              <strong>(stay / staying)</strong>
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
            <p>1. headache</p>
            <p>2. feel</p>
            <p>3. should</p>
            <p>4. appointment</p>
            <p>5. hurts</p>
            <p>6. stay</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ I have headache.</p>
            <p>✅ I have a headache.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I am feel sick.</p>
            <p>✅ I feel sick.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I have a fever yesterday.</p>
            <p>✅ I had a fever yesterday.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ You should to rest.</p>
            <p>✅ You should rest.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ I want make an appointment.</p>
            <p>✅ I want to make an appointment.</p>
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

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>Use “I have...” to describe many common symptoms.</li>
            <li>Use “I feel...” to describe how you feel.</li>
            <li>Use “I&apos;d like to make an appointment” at a clinic.</li>
            <li>Use “What seems to be the problem?” to ask about symptoms.</li>
            <li>Use “should” to give simple advice.</li>
            <li>Use polite language when speaking to medical staff.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Clear communication is especially important when talking about
            health and getting help.
          </p>
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
            href="/resources/listening-speaking/a2/shopping-services"
            style={buttonStyle}
          >
            ← Shopping & Services
          </Link>

          <Link
            href="/resources/listening-speaking/a2/food-eating-out"
            style={buttonStyle}
          >
            Next: Food & Eating Out →
          </Link>
        </div>
      </div>
    </main>
  );
}