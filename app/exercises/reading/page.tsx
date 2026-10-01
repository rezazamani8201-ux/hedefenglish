import Link from "next/link";
import ExploreButton from "../../components/ExploreButton";
const levels = [
  {
    level: "A1",
    title: "Beginner Reading",
    description:
      "Short and simple texts to build basic reading comprehension and everyday English.",
    href: "/exercises/reading/a1",
  },
  {
    level: "A2",
    title: "Elementary Reading",
    description:
      "Everyday texts and short stories to improve reading comprehension and vocabulary.",
    href: "/exercises/reading/a2",
  },
  {
    level: "B1",
    title: "Intermediate Reading",
    description:
      "Longer texts, real-life topics, and comprehension activities for intermediate learners.",
    href: "/exercises/reading/b1",
  },
  {
    level: "B2",
    title: "Upper-Intermediate Reading",
    description:
      "More challenging articles and texts with inference, tone, and deeper comprehension tasks.",
    href: "/exercises/reading/b2",
  },
];

export default function ReadingExercisesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        padding: "70px 24px 90px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "2px",
            color: "#2f6df6",
            marginBottom: "30px",
          }}
        >
          HEDEF ENGLISH
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "64px",
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#102a56",
          }}
        >
          Reading Exercises
        </h1>

        <p
          style={{
            marginTop: "32px",
            marginBottom: "60px",
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#58708f",
          }}
        >
          Improve your reading skills with level-based texts,
          comprehension questions, and downloadable learning materials.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "28px",
            textAlign: "left",
          }}
        >
          {levels.map((item) => (
            <article
              key={item.level}
              style={{
                background: "#ffffff",
                border: "1px solid #e4eaf2",
                borderRadius: "20px",
                padding: "32px",
                minHeight: "210px",
                boxShadow: "0 12px 30px rgba(30, 60, 100, 0.06)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "54px",
                  height: "34px",
                  padding: "0 12px",
                  borderRadius: "8px",
                  background: "#edf4ff",
                  color: "#2f6df6",
                  fontSize: "14px",
                  fontWeight: 800,
                  marginBottom: "22px",
                }}
              >
                {item.level}
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#173b78",
                  fontSize: "25px",
                  lineHeight: 1.3,
                  fontWeight: 800,
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  marginTop: "16px",
                  marginBottom: "24px",
                  color: "#607796",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>

              <ExploreButton
                text="Explore Reading"
                href={item.href}
              />
            </article>
          ))}
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link
            href="/exercises"
            style={{
              color: "#58708f",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            &larr; Back to Exercises
          </Link>
        </div>
      </div>
    </main>
  );
}