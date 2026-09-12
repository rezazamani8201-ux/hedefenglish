export default function GeneralEnglishA2() {
  const lessons = [
    "Lesson 1 — Present & Past Simple",
    "Lesson 2 — Present Continuous",
    "Lesson 3 — Future Plans",
    "Lesson 4 — Comparatives & Superlatives",
    "Lesson 5 — Countable & Uncountable Nouns",
    "Lesson 6 — Some, Any, Much & Many",
    "Lesson 7 — Present Perfect",
    "Lesson 8 — Modal Verbs",
    "Lesson 9 — Adverbs of Frequency",
    "Lesson 10 — Everyday Situations",
    "Lesson 11 — Travel & Shopping",
    "Lesson 12 — Making Suggestions",
    "Lesson 13 — Giving Opinions",
    "Lesson 14 — Describing People & Places",
    "Lesson 15 — Everyday Conversations",
    "Lesson 16 — Review & Communication",
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
            GENERAL ENGLISH — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              color: "#173b78",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            Everyday English
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              margin: 0,
            }}
          >
            16 essential lessons for elementary English learners.
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