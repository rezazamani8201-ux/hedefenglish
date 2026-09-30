import Link from "next/link";

const readings = [
  {
    title: "A Busy Morning",
    slug: "a-busy-morning",
    description:
      "Read about a busy morning and practice understanding daily activities.",
  },
  {
    title: "A New Student",
    slug: "a-new-student",
    description:
      "Read about a new student and life at a new school.",
  },
  {
    title: "My Favorite Restaurant",
    slug: "my-favorite-restaurant",
    description:
      "Read about a favorite restaurant, food, and a family dinner.",
  },
  {
    title: "A Weekend in the City",
    slug: "a-weekend-in-the-city",
    description:
      "Read about a weekend trip and activities in a busy city.",
  },
  {
    title: "Learning to Cook",
    slug: "learning-to-cook",
    description:
      "Read about learning to cook and preparing a simple meal.",
  },
  {
    title: "A Rainy Day",
    slug: "a-rainy-day",
    description:
      "Read about plans that change because of rainy weather.",
  },
  {
    title: "My First Part-Time Job",
    slug: "my-first-part-time-job",
    description:
      "Read about a first part-time job and new responsibilities.",
  },
  {
    title: "A Family Trip",
    slug: "a-family-trip",
    description:
      "Read about a family trip and the experiences along the way.",
  },
  {
    title: "Healthy Habits",
    slug: "healthy-habits",
    description:
      "Read about simple habits that can improve everyday life.",
  },
  {
    title: "An Unexpected Visitor",
    slug: "an-unexpected-visitor",
    description:
      "Read about an unexpected visitor and what happens at home.",
  },
  {
    title: "A Day Without My Phone",
    slug: "a-day-without-my-phone",
    description:
      "Read about spending a day without using a mobile phone.",
  },
  {
    title: "Planning a Holiday",
    slug: "planning-a-holiday",
    description:
      "Read about planning a holiday and making travel decisions.",
  },
];

export default function A2ReadingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        padding: "60px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "25px" }}>
          <Link
            href="/exercises/reading"
            style={{
              textDecoration: "none",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            &larr; Back to Reading
          </Link>
        </div>

        <header
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "10px",
              background: "#edf4ff",
              color: "#2f6df6",
              fontSize: "14px",
              fontWeight: 800,
              marginBottom: "18px",
            }}
          >
            A2 Reading
          </div>

          <h1
            style={{
              margin: 0,
              color: "#102a56",
              fontSize: "42px",
              fontWeight: 800,
            }}
          >
            A2 Reading Exercises
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "18px auto 0",
              color: "#58708f",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Improve your reading skills with practical A2-level passages,
            comprehension questions, vocabulary, and sentence exercises.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {readings.map((reading, index) => (
            <Link
              key={reading.slug}
              href={`/exercises/reading/a2/${reading.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <article
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  border: "1px solid #e3e9f2",
                  borderRadius: "18px",
                  padding: "26px",
                  boxShadow:
                    "0 8px 24px rgba(30, 60, 100, 0.04)",
                  transition: "transform 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "#edf4ff",
                    color: "#2f6df6",
                    fontWeight: 800,
                    marginBottom: "18px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2
                  style={{
                    margin: "0 0 10px",
                    color: "#173b78",
                    fontSize: "21px",
                    lineHeight: 1.35,
                  }}
                >
                  {reading.title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {reading.description}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    color: "#2f6df6",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Start Reading &rarr;
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}