import BackToCourses from "@/app/components/BackToCourses";
export default function GeneralEnglishB2() {
  const lessons = [
    "Lesson 1 — Advanced Tenses Review",
    "Lesson 2 — Perfect & Continuous Forms",
    "Lesson 3 — Advanced Conditionals",
    "Lesson 4 — Mixed Conditionals",
    "Lesson 5 — Passive & Causative Forms",
    "Lesson 6 — Reported Speech",
    "Lesson 7 — Relative & Reduced Clauses",
    "Lesson 8 — Modals of Deduction",
    "Lesson 9 — Gerunds & Infinitives",
    "Lesson 10 — Advanced Linking Words",
    "Lesson 11 — Formal & Informal English",
    "Lesson 12 — Academic & Professional English",
    "Lesson 13 — Expressing Ideas Clearly",
    "Lesson 14 — Debate & Discussion",
    "Lesson 15 — Advanced Speaking",
    "Lesson 16 — Listening for Detail",
    "Lesson 17 — Idioms & Phrasal Verbs",
    "Lesson 18 — Advanced Vocabulary",
    "Lesson 19 — Fluency & Accuracy",
    "Lesson 20 — Review & Communication",
    "Lesson 21 — Real-World Communication",
    "Lesson 22 — Critical Thinking",
    "Lesson 23 — Presentation Skills",
    "Lesson 24 — Final Review & Fluency",
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
        <BackToCourses />
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
            GENERAL ENGLISH — B2
          </div>

          <h1
            style={{
              fontSize: "42px",
              color: "#173b78",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            Advanced English Skills
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              margin: 0,
            }}
          >
            24 essential lessons for upper-intermediate English learners.
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