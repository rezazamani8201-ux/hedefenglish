import Link from "next/link";

const readings = [
  {
    number: 1,
    title: "My Daily Routine",
    description: "Read about a simple daily routine and answer the questions.",
    href: "/exercises/reading/a1/my-daily-routine",
  },
  {
    number: 2,
    title: "My Family",
    description: "Meet a family and learn about their everyday life.",
    href: "/exercises/reading/a1/my-family",
  },
  {
    number: 3,
    title: "My Best Friend",
    description: "Read about friendship, hobbies, and everyday activities.",
    href: "/exercises/reading/a1/my-best-friend",
  },
  {
    number: 4,
    title: "At School",
    description: "Learn about a student's school day and classroom activities.",
    href: "/exercises/reading/a1/at-school",
  },
  {
    number: 5,
    title: "My House",
    description: "Read about a home, its rooms, and the people who live there.",
    href: "/exercises/reading/a1/my-house",
  },
  {
    number: 6,
    title: "My Favorite Food",
    description: "Read about favorite foods, meals, and eating habits.",
    href: "/exercises/reading/a1/my-favorite-food",
  },
  {
    number: 7,
    title: "A Day at the Park",
    description: "Follow a family spending a fun day at the park.",
    href: "/exercises/reading/a1/a-day-at-the-park",
  },
  {
    number: 8,
    title: "My Weekend",
    description: "Read about weekend plans and free-time activities.",
    href: "/exercises/reading/a1/my-weekend",
  },
  {
    number: 9,
    title: "My Pet",
    description: "Read about a pet and the daily responsibilities of caring for it.",
    href: "/exercises/reading/a1/my-pet",
  },
  {
    number: 10,
    title: "A Trip to the Beach",
    description: "Read about a simple beach trip with family and friends.",
    href: "/exercises/reading/a1/a-trip-to-the-beach",
  },
  {
    number: 11,
    title: "My Favorite Season",
    description: "Read about the weather, activities, and favorite seasons.",
    href: "/exercises/reading/a1/my-favorite-season",
  },
  {
    number: 12,
    title: "A Birthday Party",
    description: "Read about a birthday party and what happens during the celebration.",
    href: "/exercises/reading/a1/a-birthday-party",
  },
];

export default function A1ReadingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        padding: "60px 24px 90px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <Link
            href="/exercises/reading"
            style={{
              color: "#58708f",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            &larr; Back to Reading
          </Link>
        </div>

        <header
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "58px",
              height: "36px",
              padding: "0 14px",
              borderRadius: "9px",
              background: "#edf4ff",
              color: "#2f6df6",
              fontSize: "14px",
              fontWeight: 800,
              marginBottom: "22px",
            }}
          >
            A1
          </div>

          <h1
            style={{
              margin: 0,
              color: "#102a56",
              fontSize: "52px",
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Beginner Reading
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "24px auto 0",
              color: "#58708f",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Build your reading skills with short, simple texts and
            beginner-friendly comprehension exercises.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {readings.map((reading) => (
            <Link
              key={reading.number}
              href={reading.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <article
                style={{
                  height: "100%",
                  minHeight: "230px",
                  boxSizing: "border-box",
                  background: "#ffffff",
                  border: "1px solid #e3e9f2",
                  borderRadius: "18px",
                  padding: "28px",
                  boxShadow: "0 10px 28px rgba(30, 60, 100, 0.05)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#edf4ff",
                    color: "#2f6df6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    marginBottom: "22px",
                  }}
                >
                  {reading.number}
                </div>

                <h2
                  style={{
                    margin: 0,
                    color: "#173b78",
                    fontSize: "21px",
                    lineHeight: 1.35,
                    fontWeight: 800,
                  }}
                >
                  {reading.title}
                </h2>

                <p
                  style={{
                    margin: "14px 0 22px",
                    color: "#607796",
                    fontSize: "15px",
                    lineHeight: 1.65,
                  }}
                >
                  {reading.description}
                </p>

                <div
                  style={{
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

        <div
          style={{
            textAlign: "center",
            marginTop: "55px",
          }}
        >
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