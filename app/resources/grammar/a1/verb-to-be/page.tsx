
"use client";
import LessonNavigation from "@/app/components/LessonNavigation";
import Link from "next/link";

const examples = [
  {
    subject: "I",
    verb: "am",
    example: "I am a teacher.",
  },
  {
    subject: "He / She / It",
    verb: "is",
    example: "She is happy.",
  },
  {
    subject: "You / We / They",
    verb: "are",
    example: "They are students.",
  },
];

const negativeExamples = [
  "I am not tired.",
  "He is not at home.",
  "She is not a doctor.",
  "We are not ready.",
  "They are not from England.",
];

const questionExamples = [
  "Am I late?",
  "Is she your sister?",
  "Is he a teacher?",
  "Are you ready?",
  "Are they students?",
];

const shortAnswers = [
  "Are you a teacher? â€” Yes, I am.",
  "Is he your brother? â€” No, he isn't.",
  "Are they from Turkey? â€” Yes, they are.",
];

const practiceQuestions = [
  "I ___ a student.",
  "She ___ my friend.",
  "They ___ at home.",
  "We ___ ready.",
  "He ___ from Turkey.",
];

export default function VerbToBePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
      }}
    >
      {/* Header */}
      <header
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "28px 24px",
        }}
      >
        <Link
          href="/resources/grammar/a1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#173b78",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          â† Back to A1 Grammar
        </Link>
      </header>

      {/* Main Content */}
      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "35px 24px 100px",
        }}
      >
        {/* Hero */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #173b78 0%, #2563eb 100%)",
            color: "#fff",
            borderRadius: "24px",
            padding: "45px 38px",
            marginBottom: "28px",
            boxShadow: "0 15px 35px rgba(23, 59, 120, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginBottom: "14px",
              opacity: 0.85,
            }}
          >
            A1 â€” BEGINNER GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
            }}
          >
            Verb to Be
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.7,
              opacity: 0.92,
            }}
          >
            Learn how to use <strong>am, is, and are</strong> to talk about
            people, places, feelings, jobs, and basic information.
          </p>
        </div>

        {/* What is Verb to Be? */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>What is the verb â€œto beâ€?</h2>

          <p style={paragraphStyle}>
            The verb <strong>to be</strong> is one of the most important verbs
            in English. We use it to describe people, things, places,
            situations, feelings, and identities.
          </p>

          <p style={paragraphStyle}>
            In the present tense, the verb <strong>to be</strong> has three
            forms:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "16px",
              marginTop: "25px",
            }}
          >
            <VerbCard
              verb="AM"
              subjects="I"
              example="I am happy."
            />

            <VerbCard
              verb="IS"
              subjects="He â€¢ She â€¢ It"
              example="She is happy."
            />

            <VerbCard
              verb="ARE"
              subjects="You â€¢ We â€¢ They"
              example="They are happy."
            />
          </div>
        </section>

        {/* Basic Structure */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Basic Structure</h2>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              textAlign: "center",
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            Subject + am / is / are + information
          </div>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            <ExampleBox text="I am a student." />
            <ExampleBox text="She is a doctor." />
            <ExampleBox text="They are from Turkey." />
          </div>
        </section>

        {/* Affirmative */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Affirmative Sentences</h2>

          <p style={paragraphStyle}>
            Use <strong>am</strong> with I, <strong>is</strong> with he, she,
            and it, and <strong>are</strong> with you, we, and they.
          </p>

          <div style={{ overflowX: "auto", marginTop: "24px" }}>
            <table
              style={{
                width: "100%",
                minWidth: "600px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={tableHeader}>Subject</th>
                  <th style={tableHeader}>Verb</th>
                  <th style={tableHeader}>Example</th>
                </tr>
              </thead>

              <tbody>
                {examples.map((item) => (
                  <tr key={item.subject}>
                    <td style={tableCell}>{item.subject}</td>
                    <td
                      style={{
                        ...tableCell,
                        fontWeight: 700,
                        color: "#2563eb",
                      }}
                    >
                      {item.verb}
                    </td>
                    <td style={tableCell}>{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contractions */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Contractions</h2>

          <p style={paragraphStyle}>
            In everyday English, we often use short forms called
            <strong> contractions</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <Contraction full="I am" short="I'm" />
            <Contraction full="You are" short="You're" />
            <Contraction full="He is" short="He's" />
            <Contraction full="She is" short="She's" />
            <Contraction full="It is" short="It's" />
            <Contraction full="We are" short="We're" />
            <Contraction full="They are" short="They're" />
          </div>
        </section>

        {/* Negative */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Negative Sentences</h2>

          <p style={paragraphStyle}>
            To make a negative sentence, put <strong>not</strong> after the
            verb.
          </p>

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "18px 20px",
              margin: "20px 0",
              color: "#9a3412",
              fontWeight: 600,
            }}
          >
            Subject + am / is / are + not
          </div>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {negativeExamples.map((example) => (
              <ExampleBox key={example} text={example} />
            ))}
          </div>
        </section>

        {/* Negative contractions */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Negative Contractions</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <Contraction full="is not" short="isn't" />
            <Contraction full="are not" short="aren't" />
            <Contraction full="I am not" short="I'm not" />
          </div>
        </section>

        {/* Questions */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Questions</h2>

          <p style={paragraphStyle}>
            To make a question with the verb <strong>to be</strong>, put
            <strong> am, is, or are</strong> before the subject.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              textAlign: "center",
              margin: "22px 0",
              fontSize: "20px",
              fontWeight: 700,
              color: "#173b78",
            }}
          >
            Am / Is / Are + Subject + ... ?
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {questionExamples.map((example) => (
              <ExampleBox key={example} text={example} />
            ))}
          </div>
        </section>

        {/* Short Answers */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Short Answers</h2>

          <p style={paragraphStyle}>
            We often use short answers when answering questions with the verb
            <strong> to be</strong>.
          </p>

          <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
            {shortAnswers.map((example) => (
              <ExampleBox key={example} text={example} />
            ))}
          </div>
        </section>

        {/* Common Uses */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Common Uses of â€œTo Beâ€</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "22px",
            }}
          >
            <UseCard
              title="Identity"
              example="I am Reza."
            />

            <UseCard
              title="Job"
              example="She is a teacher."
            />

            <UseCard
              title="Nationality"
              example="They are Turkish."
            />

            <UseCard
              title="Location"
              example="We are at home."
            />

            <UseCard
              title="Feelings"
              example="He is tired."
            />

            <UseCard
              title="Age"
              example="I am 25 years old."
            />
          </div>
        </section>

        {/* Important Notes */}
        <section style={cardStyle}>
          <h2 style={headingStyle}>Important Notes</h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "22px",
            }}
          >
            <NoteBox>
              We say <strong>â€œI amâ€</strong>, not â€œI isâ€ or â€œI areâ€.
            </NoteBox>

            <NoteBox>
              We say <strong>â€œHe isâ€</strong>, <strong>â€œShe isâ€</strong>, and{" "}
              <strong>â€œIt isâ€</strong>.
            </NoteBox>

            <NoteBox>
              We say <strong>â€œYou areâ€</strong>, <strong>â€œWe areâ€</strong>, and{" "}
              <strong>â€œThey areâ€</strong>.
            </NoteBox>

            <NoteBox>
              Do not use <strong>do / does</strong> to make questions with the
              verb â€œto beâ€.
            </NoteBox>
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "22px",
            padding: "35px",
            marginTop: "30px",
            boxShadow: "0 15px 35px rgba(23, 59, 120, 0.15)",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "28px",
            }}
          >
            Quick Practice
          </h2>

          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "25px",
              opacity: 0.9,
            }}
          >
            Complete the sentences with <strong>am, is, or are</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {practiceQuestions.map((question) => (
              <div
                key={question}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  fontSize: "16px",
                }}
              >
                {question}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "28px",
              paddingTop: "22px",
              borderTop: "1px solid rgba(255,255,255,0.18)",
              fontSize: "14px",
              opacity: 0.85,
            }}
          >
            Answers: 1. am &nbsp; 2. is &nbsp; 3. are &nbsp; 4. are &nbsp; 5. is
          </div>
        </section>

        
        <LessonNavigation currentSlug="verb-to-be" />
      </section>
    </main>
  );
}

function VerbCard({
  verb,
  subjects,
  example,
}: {
  verb: string;
  subjects: string;
  example: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "16px",
        padding: "22px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "26px",
          fontWeight: 800,
          marginBottom: "8px",
        }}
      >
        {verb}
      </div>

      <div style={{ opacity: 0.85, marginBottom: "12px" }}>
        {subjects}
      </div>

      <div style={{ fontWeight: 600 }}>{example}</div>
    </div>
  );
}

function ExampleBox({ text }: { text: string }) {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e5eaf0",
        borderRadius: "12px",
        padding: "15px 18px",
        color: "#334155",
        lineHeight: 1.6,
      }}
    >
      {text}
    </div>
  );
}

function Contraction({
  full,
  short,
}: {
  full: string;
  short: string;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e5eaf0",
        borderRadius: "14px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
          marginBottom: "8px",
        }}
      >
        {full}
      </div>

      <div
        style={{
          color: "#173b78",
          fontSize: "22px",
          fontWeight: 800,
        }}
      >
        {short}
      </div>
    </div>
  );
}

function UseCard({
  title,
  example,
}: {
  title: string;
  example: string;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e5eaf0",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <div
        style={{
          color: "#2563eb",
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          marginBottom: "9px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#173b78",
          fontWeight: 600,
          lineHeight: 1.5,
        }}
      >
        {example}
      </div>
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#f8fafc",
        borderLeft: "4px solid #2563eb",
        borderRadius: "10px",
        padding: "16px 18px",
        color: "#334155",
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "20px",
  padding: "30px",
  marginBottom: "24px",
  boxShadow: "0 6px 22px rgba(15, 23, 42, 0.05)",
};

const headingStyle: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#173b78",
  fontSize: "27px",
};

const paragraphStyle: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "16px",
};

const tableHeader: React.CSSProperties = {
  border: "1px solid #e5eaf0",
  padding: "15px",
  textAlign: "left",
  background: "#eef4ff",
  color: "#173b78",
  fontWeight: 700,
};

const tableCell: React.CSSProperties = {
  border: "1px solid #e5eaf0",
  padding: "15px",
  textAlign: "left",
  color: "#334155",
};

const bottomButton: React.CSSProperties = {
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



