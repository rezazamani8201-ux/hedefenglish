export default function GeneralEnglishA1() {
  const lessons = [
    "Lesson 1 — Greetings & Introductions",
    "Lesson 2 — Verb To Be",
    "Lesson 3 — Personal Information",
    "Lesson 4 — Numbers, Time & Dates",
    "Lesson 5 — Family & People",
    "Lesson 6 — Present Simple",
    "Lesson 7 — Daily Routines",
    "Lesson 8 — Food & Drinks",
    "Lesson 9 — There Is / There Are",
    "Lesson 10 — Places & Directions",
    "Lesson 11 — Can / Can’t",
    "Lesson 12 — Everyday Conversations",
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
            GENERAL ENGLISH — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              color: "#173b78",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            English Foundations
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              margin: 0,
            }}
          >
            12 essential lessons for beginner English learners.
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