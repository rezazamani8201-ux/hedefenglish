import Link from "next/link";
import ExploreButton from "../../../components/ExploreButton";

const readings = [
  {
    title: "A New Job",
    slug: "a-new-job",
    description:
      "Read about starting a new job, meeting new colleagues, and adapting to a new workplace.",
  },
  {
    title: "The Importance of Sleep",
    slug: "the-importance-of-sleep",
    description:
      "Read about the importance of good sleep and how sleep affects everyday life.",
  },
  {
    title: "A Difficult Decision",
    slug: "a-difficult-decision",
    description:
      "Read about an important decision and the challenges of choosing between different options.",
  },
  {
    title: "Learning a New Language",
    slug: "learning-a-new-language",
    description:
      "Read about learning a new language and the habits that can help students improve.",
  },
  {
    title: "Life in a Small Town",
    slug: "life-in-a-small-town",
    description:
      "Read about life in a small town, its advantages, and its challenges.",
  },
  {
    title: "The Power of Technology",
    slug: "the-power-of-technology",
    description:
      "Read about how technology has changed the way people communicate, work, and learn.",
  },
  {
    title: "A Memorable Journey",
    slug: "a-memorable-journey",
    description:
      "Read about an unforgettable journey and the experiences that made it special.",
  },
  {
    title: "Healthy Eating Habits",
    slug: "healthy-eating-habits",
    description:
      "Read about healthy eating habits and simple choices that can improve daily life.",
  },
  {
    title: "Working from Home",
    slug: "working-from-home",
    description:
      "Read about the advantages and challenges of working from home.",
  },
  {
    title: "Protecting the Environment",
    slug: "protecting-the-environment",
    description:
      "Read about everyday actions people can take to protect the environment.",
  },
  {
    title: "The Value of Friendship",
    slug: "the-value-of-friendship",
    description:
      "Read about friendship, trust, and the importance of having supportive people in life.",
  },
  {
    title: "A Change of Plans",
    slug: "a-change-of-plans",
    description:
      "Read about unexpected changes and how people can adapt when their plans change.",
  },
];

export default function B1ReadingPage() {
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
        {/* BACK TO READING */}
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

        {/* HEADER */}
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
            B1 Reading
          </div>

          <h1
            style={{
              margin: 0,
              color: "#102a56",
              fontSize: "42px",
              fontWeight: 800,
            }}
          >
            B1 Reading Exercises
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
            Improve your reading skills with practical B1-level passages,
            comprehension questions, vocabulary, and sentence exercises.
          </p>
        </header>

        {/* READING CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {readings.map((reading, index) => (
            <article
              key={reading.slug}
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
              {/* NUMBER */}
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

              {/* TITLE */}
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

              {/* DESCRIPTION */}
              <p
                style={{
                  margin: "0 0 20px",
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {reading.description}
              </p>

              {/* EXPLORE BUTTON */}
              <ExploreButton
                text="Start Reading"
                href={`/exercises/reading/b1/${reading.slug}`}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}