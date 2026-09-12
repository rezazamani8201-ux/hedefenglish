export default function GeneralEnglishB1() {
  const lessons = [
    "Lesson 1 — Present Perfect & Past Simple",
    "Lesson 2 — Present Perfect Continuous",
    "Lesson 3 — Past Continuous & Past Perfect",
    "Lesson 4 — Future Forms",
    "Lesson 5 — First & Second Conditionals",
    "Lesson 6 — Modal Verbs & Advice",
    "Lesson 7 — Passive Voice",
    "Lesson 8 — Reported Speech",
    "Lesson 9 — Relative Clauses",
    "Lesson 10 — Gerunds & Infinitives",
    "Lesson 11 — Travel & Experiences",
    "Lesson 12 — Work & Education",
    "Lesson 13 — Expressing Opinions",
    "Lesson 14 — Agreeing & Disagreeing",
    "Lesson 15 — Social Situations",
    "Lesson 16 — Problem Solving",
    "Lesson 17 — Speaking & Discussion",
    "Lesson 18 — Listening & Communication",
    "Lesson 19 — Vocabulary & Fluency",
    "Lesson 20 — Review & Communication",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f9fc",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#e8eef9",
              color: "#173b78",
              padding: "8px 18px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "18px",
            }}
          >
            GENERAL ENGLISH — B1
          </div>

          <h1
            style={{
              fontSize: "42px",
              color: "#173b78",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            Confident Communication
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              margin: 0,
            }}
          >
            20 essential lessons for intermediate English learners.
          </p>
        </div>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "35px 40px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          {lessons.map((lesson, index) => (
            <div
              key={index}
              style={{
                padding: "20px 0",
                borderBottom:
                  index === lessons.length - 1
                    ? "none"
                    : "1px solid #e9ecf2",
                fontSize: "18px",
                fontWeight: 600,
                color: "#222",
              }}
            >
              {lesson}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}